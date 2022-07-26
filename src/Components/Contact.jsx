import React from "react";
import mypp from "./Img/myff.jpg";

const Contact = () => {
  return (
    <>
      <div id="Contact">
        <div className="flex justify-center">
          <img src={mypp} alt="me" className="rounded-full w-32" />
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
          <a
            href="mailto:nurfaidzy@gmail.com"
            className="bg-cyan-600 px-4 py-2 rounded-xl font-bold text-white shadow-xl "
          >
            Klik Here
          </a>
        </p>
        <div></div>
      </div>
    </>
  );
};
export default Contact;
