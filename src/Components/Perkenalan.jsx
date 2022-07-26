import React from "react";
import {
  BsFillChatSquareTextFill,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import Foto from "./Img/myff.jpg";

const Perkenalan = () => {
  return (
    <>
      <div className="laptop:flex" id="About">
        <div className="laptop:absolute">
          <p className="laptop:text-4xl  laptop:pt-0 pt-4 text-2xl font-bold text-slate-500 ">
            Front End Engineer
          </p>
          <p className="laptop:text-6xl  text-4xl font-bold text-cyan-600 laptop:w-[50%]  laptop:py-8 py-4 ">
            Nurfaidzy Riyamizard Saragih
          </p>
          <p className="laptop:w-[40%] laptop:font-bold text-slate-600">
            Always learn to have extensive knowledge, and adapt to the latest
            web technologies. Creating a website that is light to access,
            provides a comfortable appearance, and the best features.
          </p>
          <div className="laptop:py-12 py-4">
            <a href="" className="font-bold text-cyan-800 flex">
              Let's Talk
              <div className="pt-1 pl-3">
                <BsFillChatSquareTextFill />
              </div>
            </a>
          </div>
        </div>
        <img
          src={Foto}
          alt="My Picture"
          className="laptop:pl-[50%] rounded-xl laptop:w-[85%] "
        />
        <div className="laptop:absolute laptop:pl-[70%] laptop:pt-0 pt-8">
          <div className="laptop:pl-[40%]">
            <div className="flex justify-center">
              <center>
                <div className="grid laptop:grid-cols-1 grid-cols-3">
                  <div className="laptop:pt-8  ">
                    <BsLinkedin className="text-6xl text-cyan-800" />
                    <a
                      href="https://www.linkedin.com/in/nurfaidzy-riyamizard-saragih/"
                      className="font-bold"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="laptop:pt-8">
                    <BsGithub className="text-6xl text-cyan-800" />
                    <a
                      href="https://github.com/Nurfaidzy"
                      className="font-bold"
                    >
                      Github
                    </a>
                  </div>
                  <div className="laptop:pt-8">
                    <BsInstagram className="text-6xl text-cyan-800" />
                    <a
                      href="https://www.instagram.com/nurfaidzy/"
                      className="font-bold"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perkenalan;
