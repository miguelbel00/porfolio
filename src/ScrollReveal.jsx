import React, { useRef, useEffect, CSSProperties } from "react";
import scrollReveal from "scrollreveal";


const ScrollReveal = ({ children }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        delay: 500
      });
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