import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";


const ScrollReveal = ({ children,styles }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, styles);
  }, []);

  return (
    <section
    className="text-gray-600 body-font my-auto"
      ref={sectionRef}
    >
      {children}
    </section>
  );
};

export default ScrollReveal;