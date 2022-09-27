import React from "react";
import { FaReact, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

import { motion } from "framer-motion";

const Portopolio = () => {
  return (
    <>
      <motion.div
        className="pt-[100px] laptop:pt-[0px]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
      >
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
                <div className="flex justify-between laptop:w-[90%] w-[80%]">
                  <div className="grid laptop:grid-cols-5 grid-cols-3 laptop:pl-0 pl-[10%]">
                    <div className="p-2">
                      <FaReact className="laptop:text-6xl text-4xl text-cyan-800 " />
                      <p className="font-bold pt-3 text-slate-600 ">React</p>
                    </div>
                    <div className="p-2">
                      <FaLaravel className="laptop:text-6xl text-4xl flex  text-cyan-800 " />
                      <p className="font-bold pt-3  text-slate-600 ">Laravel</p>
                    </div>
                    <div className="p-2">
                      <FaGitAlt className="laptop:text-6xl text-4xl text-cyan-800 " />
                      <p className="font-bold pt-3  text-slate-600 ">Git</p>
                    </div>
                    <div className="p-2">
                      <SiTailwindcss className="laptop:text-6xl text-4xl text-cyan-800 " />
                      <p className="font-bold pt-3  text-slate-600 ">
                        Tailwind
                      </p>
                    </div>
                    <div className="p-2">
                      <SiBootstrap className="laptop:text-6xl text-4xl text-cyan-800 " />
                      <p className="font-bold pt-3  text-slate-600 ">
                        Bootstrap
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portopolio;
