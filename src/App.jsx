import React, { useState } from "react";
import { Zoom, Reveal, Fade } from "react-reveal";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
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
import java from "./assets/java.png"
import javacript from "./assets/javascript.png"
import express from "./assets/express.png"
import node from "./assets/node.png"
import react from "./assets/react.png"
import tailwind from "./assets/tailwind.png"
import mail from "./assets/gmail.png"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import serviceMcqueen from "./assets/loginService.png"
import astrogamer from "./assets/astrogamer.png"
import mayco from "./assets/mayco.png"
import wallet from "./assets/wallet.jpg"

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
        className="element max-w-screen bg-white  pt-[10vh] min-h-[800px]"
      >
        <div className="max-w-screen-xl text-3xl text-center text-gray-800 font-semibold pt-10 mx-auto h-auto  ">
          About Me
          <div className="px-6 md:flex pt-10 md:pt-20 gap-10 justify-center">
                   <div className="flex flex-col md:max-w-[300px]  lg:max-w-[400px] xl:max-w-[600px]">
                   <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                      FullStack Developer
                    </h1>
                    <p className="sm:text-3xl !text-lg font-medium title-font mb-4 text-gray-900">Hello, I'm Miguel, I'm FullStack Developer  graduate of Soy Henry Bootcamp where I could learn a few programming languajes like JavaScript, Node , React y Express with which I created several applicattions such as AstroGamer a Ecommerce where I could applied my knowledge

                    My goal is keep learning about this tecnologic world and can use mi knowledge for develop apps in wich I can grow up like a good professional</p>
                   </div>
            <div>
              <section class="text-gray-600 body-font sm:pt-0 pt-5">
                <div class="container px-5  mx-auto">
                  <div class="flex flex-col text-center w-full pb-5">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                      Skills & Technologies
                    </h1>
                  </div>
                  <div class="flex flex-wrap justify-center ">
                    <div class="p-2 w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                        <img
                          alt="team"
                          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                          src={java}
                        />
                      </div>
                    </div>
                    <div class="p-2  w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                        <img
                          alt="team"
                          class="w-16 h-16  object-cover object-center flex-shrink-0  mr-4"
                          src={javacript}
                        />
                      </div>
                    </div>
                    <div class="p-2 w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                        <img
                          alt="team"
                          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                          src={express}
                        />
                      </div>
                    </div>
                    <div class="p-2 w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                        <img
                          alt="team"
                          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                          src={node}
                        />
                      </div>
                    </div>
                    <div class="p-2 w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                        <img
                          alt="team"
                          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                          src={react}
                        />
                      </div>
                    </div>
                    <div class="p-2 w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                        <img
                          alt="team"
                          class="w-16 h-16 object-cover object-center flex-shrink-0  mr-4"
                          src={tailwind}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Element>
      <Element
        name="portfolio"
        className="element max-w-screen bg-white min-h-[700px]"
      >
        <section class="text-gray-600 body-font">
            <div class="container px-8 py-24 max-w-screen-xl mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Portfolio</h1>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">There are the projects that I have worked on</p>
                </div>
                
                </div>
                <div class="flex flex-wrap -m-4 justify-center">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={mayco} alt="content"/>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Mayco Cooperativa</h2>
                    <a href="https://mayco-cooperativa.vercel.app/" class="bg-black rounded-md text-white p-2  hover:text-indigo-500 ml-1" target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={astrogamer} alt="content"/>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Astro Gamer</h2>
                    <a href="https://p-grupal.vercel.app/" class=" bg-black rounded-md text-white p-2 hover:text-indigo-500 ml-1" target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src={wallet} alt="content"/>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Wallet Bank Alkemy</h2>
                    <a href="https://github.com/miguelbel00/grupo-n-4" class="bg-black rounded-md text-white p-2  hover:text-indigo-500 ml-1" target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg">
                    <img class="h-40 rounded aspect-[2/1] w-full object-cover object-center mb-6" src={serviceMcqueen} alt="content"/>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Service Mcqueen</h2>
                    <a href="https://github.com/miguelbel00/ProyectoFinalBD" class="bg-black rounded-md text-white p-2  hover:text-indigo-500 ml-1" target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
      </Element>
      <Element
        name="contact"
        className="element max-w-screen  bg-white h-[400px] p-10"
      >
        <section class="text-gray-600 body-font sm:pt-0 pt-5  ">
                <div class="container px-5  max-w-screen-xl mx-auto">
                  <div class="flex flex-col text-left w-full pb-5 ">
                    <h1 class="sm:text-3xl text-2xl font-bold pb-5 title-font text-gray-900">
                      Skills & Technologies
                    </h1>
                    <p className="sm:text-3xl !text-lg  title-font font-bold mb-4 text-gray-900">Contact me to work together</p>
                  </div>
                  <div class="flex flex-wrap justify-between ">
                    <div class="p-2 w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                      <a href="mailto:miguelabeltranp@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img
                          alt="team"
                          class="w-16 h-16 object-cover object-center flex-shrink-0  mr-4"
                          src={mail}
                        />
                        </a>
                      </div>
                    </div>
                    <div class="p-2  w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                      <a href="https://github.com/miguelbel00" target="_blank" rel="noopener noreferrer">
                        <img
                          alt="team"
                          class="w-16 h-16  object-cover object-center flex-shrink-0  mr-4"
                          src={github}
                        />
                        </a>
                      </div>
                    </div>
                    <div class="p-2 w-fit">
                      <div class="h-full flex  p-4 rounded-lg">
                      <a href="https://www.linkedin.com/in/miguelbel00/" target="_blank" rel="noopener noreferrer">
                        <img
                          alt="team"
                          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0  mr-4"
                          src={linkedin}
                        />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
      </Element>
      <footer class="text-gray-600 body-font">

  <div class="border-t border-gray-200">
    <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
             <p class="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} Miguel Beltran —
             <a href="https://github.com/miguelbel00" class=" hover:text-indigo-500 ml-1" target="_blank" rel="noopener noreferrer">@miguelbel00</a>
            </p>
             <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">You only live once</span>
     </div>
     </div>
  </div>
</footer>
    </div>
  );
};

export default App;
