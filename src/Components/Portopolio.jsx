import React from "react";
import { FaReact, FaLaravel, FaGitAlt } from "react-icons/fa";

const Portopolio = () => {
  return (
    <>
      <div className="pt-[10%] ">
        <div className="laptop:flex  bg-white p-4 rounded-xl shadow-xl">
          <div className=" laptop:w-[60%] ">
            <div className="flex laptop:justify-start justify-center">
              <div className="font-bold laptop:text-4xl text-2xl text-cyan-600">
                Skills I have
              </div>
            </div>
            <div className="py-4 laptop:font-bold text-slate-600">
              I'm currently used to using React JS in developing website
              interfaces. I got this skill from the Merdeka Campus, Independent
              Study scholarship with Ruangguru as a partner. Currently, I am
              setting myself with exercises that I make myself. Other skills I
              understand are Laravel and Cybersecurity. The ability I received I
              brought in doing my thesis and I am still studying it now.
            </div>
          </div>
          <div className=" laptop:w-[40%] ">
            <div className="pt-5 ">
              <div className="font-bold text-cyan-800 laptop:text-2xl text-xl flex justify-center py-3 ">
                Technologies I use
              </div>
              <div className="flex justify-center">
                <div className="flex justify-between laptop:w-[50%] w-[80%]">
                  <div className="">
                    <FaReact className="laptop:text-6xl text-4xl text-cyan-800 " />
                    <p className="flex justify-center font-bold pt-3 text-slate-600 ">
                      React
                    </p>
                  </div>
                  <div>
                    <FaLaravel className=" laptop:text-6xl text-4xl flex  text-cyan-800 " />
                    <p className="flex justify-center font-bold pt-3  text-slate-600 ">
                      Laravel
                    </p>
                  </div>
                  <div>
                    <FaGitAlt className="laptop:text-6xl text-4xl text-cyan-800 " />
                    <p className="flex justify-center font-bold pt-3  text-slate-600 ">
                      Git
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portopolio;
