import React from "react";
import {
  BsFillChatSquareTextFill,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import Foto from "./Img/myff.jpg";
import { motion } from "framer-motion";

const Perkenalan = () => {
  return (
    <>
      <div className="laptop:flex laptop:pt-[15%] pt-[40%] h-screen" id="About">
        <motion.div
          className="laptop:absolute"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <p className="laptop:text-4xl  laptop:pt-0 pt-4 text-2xl font-bold text-slate-500  ">
            Front End Engineer
          </p>
          <p className="laptop:text-6xl  text-4xl font-bold text-cyan-600 laptop:w-[50%]  laptop:pt-8 pt-4 ">
            Nurfaidzy Riyamizard Saragih
          </p>
          <p className="laptop:w-[40%] laptop:font-bold text-slate-600">
            Always learn to have extensive knowledge, and adapt to the latest
            web technologies. Creating a website that is light to access,
            provides a comfortable appearance, and the best features.
          </p>
          <div className="laptop:pt-12 pt-4">
            <a
              href="nurfaidzy@gmail.com"
              className="font-bold text-cyan-800 flex"
            >
              Let's Talk
              <div className="pt-1 pl-3">
                <BsFillChatSquareTextFill />
              </div>
            </a>
          </div>
        </motion.div>
        <motion.img
          src={Foto}
          alt="foto"
          className="laptop:pl-[50%] rounded-xl laptop:w-[85%] h-fit "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.8 }}
        />
        <motion.div
          className="laptop:absolute laptop:pl-[70%] laptop:pt-0 pt-8"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="laptop:pl-[40%]">
            <div className="flex justify-center">
              <center>
                <div className="grid laptop:grid-cols-1 grid-cols-3">
                  <div className="laptop:pt-8  ">
                    <a
                      href="https://www.linkedin.com/in/nurfaidzy-riyamizard-saragih/"
                      className="font-bold"
                    >
                      <BsLinkedin className="text-6xl text-cyan-800" />
                      LinkedIn
                    </a>
                  </div>
                  <div className="laptop:pt-8">
                    <a
                      href="https://github.com/Nurfaidzy"
                      className="font-bold"
                    >
                      <BsGithub className="text-6xl text-cyan-800" />
                      Github
                    </a>
                  </div>
                  <div className="laptop:pt-8">
                    <a
                      href="https://www.instagram.com/nurfaidzy/"
                      className="font-bold"
                    >
                      <BsInstagram className="text-6xl text-cyan-800" />
                      Instagram
                    </a>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Perkenalan;
