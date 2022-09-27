import React from "react";
import mypp from "./Img/myff.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="pb-[10%]">
        <div className="flex justify-center">
          <motion.img
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 1 }}
            src={mypp}
            alt="me"
            className="rounded-full w-32 hover:shadow-lg"
          />
        </div>
        <p className="flex justify-center font-bold laptop:text-2xl text-lg pt-4 text-cyan-700">
          Nurfaidzy Riyamizard Saragih
        </p>
        <p className="flex justify-center text-center font-bold laptop:text-lg pt-2">
          Pematang Siantar City, North Sumatra, Indonesia
        </p>
        <p className="flex justify-center text-center pt-2 laptop:px-[100px] laptop:text-lg text-sm">
          I am Nurfaidzy Riyamizard Saragih, a bachelor's degree student from
          STIKOM Tunas Bangsa Pematangsiantar City majoring in INFORMATION
          SYSTEMS. I like computer code and know about front-end development
          using React js. Build responsive websites and provide user services,
          both the desired data and sent via API. Have experience collaborating
          with back-end Developers to build a project with development methods
          that are generally in the company. I know Editor, Cyber Security, and
          Dev Net fields. I like to learn, be creative, honest, and responsible
          to work. I am familiar with Adobe software, Visual Studio Code, and
          Microsoft Office. I hope that based on my knowledge can be helpful to
          the company.
        </p>
        <p className="flex justify-center text-center pt-2">
          Contact Me at here !
        </p>
        <p className="flex justify-center text-center pt-2 ">
          <motion.a
            whileHover={{ scale: 1.3 }}
            transition={{ bounce: 2 }}
            href="mailto:nurfaidzy@gmail.com"
            className="bg-cyan-600 px-4 py-2 rounded-xl font-bold text-white shadow-xl "
          >
            Klik Here
          </motion.a>
        </p>
      </div>
    </>
  );
};
export default Contact;
