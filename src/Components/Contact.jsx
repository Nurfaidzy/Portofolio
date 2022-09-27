import React from "react";
import mypp from "./Img/myff.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div id="Contact">
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
          I'm Nurfaidzy from STIKOM Tunas Bangsa Pematangsiantar City majoring
          in INFORMATION SYSTEMS. Born in Pematangsiantar City, on March 12,
          2000, currently 22 years old. I am personally ambitious, energetic,
          creative, honest, and responsible for work.
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
        <div></div>
      </div>
    </>
  );
};
export default Contact;
