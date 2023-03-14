import React, { useState } from "react";
import { Zoom, Reveal } from "react-reveal";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { GrCode } from "react-icons/gr";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const App = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="bg-[url('/bg.jpg')] max-w-screen  h-screen font-[Roboto]">
      <header class=" sticky top-0">
        <nav className="z-10  w-screen text-white text-lg bg-[#0000008a] fixed  top-0 left-0 font-serif">
          <div className="md:flex items-center justify-around h-[10vh] md:h-[8vh] py-4 md:px-10 px-7">
            <div className="pt-4  pl-10 md:justify-center md:pt-0  text-2xl select-none cursor-default flex items-center gap-3 ">
              <p className="w-10 h-10 ">{`</>`}</p>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden z-[11]"
            >
              {open ? <IoMdClose /> : <GiHamburgerMenu />}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 h-screen md:h-full absolute md:static   left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open
                  ? "top-[10vh] opacity-100 z-10 bg-[#0000008a]"
                  : "top-[-490px] hidden md:z-auto"
              } md:opacity-100 opacity-0`}
            >
              <li
                className="md:ml-8 text-lg md:my-0 my-7  hover:text-sky-200 cursor-pointer duration-500"
                onClick={() => setOpen(!open)}
              >
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={150}
                >
                  Home
                </Link>
              </li>
              <li
                className="md:ml-8 text-lg md:my-0 my-7  hover:text-sky-200 cursor-pointer duration-500"
                onClick={() => setOpen(!open)}
              >
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={150}
                >
                  About
                </Link>
              </li>
              <li
                className="md:ml-8 text-lg md:my-0 my-7  hover:text-sky-200 cursor-pointer duration-500"
                onClick={() => setOpen(!open)}
              >
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={150}
                >
                  Portfolio
                </Link>
              </li>
              <li
                className="md:ml-8 text-lg md:my-0 my-7  hover:text-sky-200 cursor-pointer duration-500"
                onClick={() => setOpen(!open)}
              >
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={150}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

        <Element
          name="home"
          className="element max-w-screen h-screen"
        >
          home
        </Element>
        <Element
          name="about"
          className="element max-w-screen  h-screen"
        >
about        </Element>
        <Element
          name="portfolio"
          className="element max-w-screen  h-screen"
        >
portfolio        </Element>
        <Element
          name="contact"
          className="element max-w-screen  h-screen"
        >
contact        </Element>
    </div>
  );
};

export default App;
