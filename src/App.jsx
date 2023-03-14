import React, { useState } from "react";
import { Zoom, Reveal, Fade } from "react-reveal";
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
import face from "./assets/face.png";

const App = () => {

  let [open, setOpen] = useState(false);
  return (
    <div className="max-w-screen  h-screen font-[Roboto]">
      <header className=" sticky top-0">
        <nav className="z-20  w-screen text-white text-lg bg-black fixed  top-0 left-0 font-serif">
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
                  ? "top-[10vh] opacity-100 z-30 bg-[#0000008a]"
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
                  offset={-80}
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
                  offset={-80}
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
                  offset={-80}
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
                  offset={-80}
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
        className="element max-w-screen  h-screen flex justify-center bg-[#000000c9]  text-indigo-600 text-xl text-center"
      >
        <section class="text-gray-600 body-font    my-auto">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">

              <div class="w-[300px] mb-10 md:mb-0 ">
                <img
                  class="object-cover object-center rounded-[500px] "
                  alt="hero"
                  src={face}
                />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-7xl text-5xl font-bold text-indigo-600 ">
                  Miguel Beltran
                </h1>
                <p className="title-font sm:text-4xl text-2xl text-white font-bold  ">
                  {" "}
                  FullStack Developer
                </p>
              </div>
          </div>
        </section>
      </Element>
      <Element
        name="about"
        className="element max-w-screen bg-white border-b-2 pt-[10vh] h-[800px]"
      >
        <div className="max-w-screen-xl text-3xl text-center text-gray-800 font-semibold px-10 mx-auto h-auto  border-2">
          About Me
          <div className="flex pt-10 justify-evenly ">
            <div>FullStack Developer</div>
            <div>Skills & Technologies</div>
        </div>
        </div>
       
      </Element>
      <Element
        name="portfolio"
        className="element max-w-screen bg-white h-screen"
      >
        portfolio{" "}
      </Element>
      <Element
        name="contact"
        className="element max-w-screen bg-white h-screen"
      >
        contact{" "}
      </Element>
    </div>
  );
};

export default App;
