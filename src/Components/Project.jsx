import React from "react";
import Carkam from "./Img/Carkam.png";
import Pika from "./Img/pikachu.png";
import Sp from "./Img/spserangan.png";
import Hp from "./Img/tokohp.png";
import ks from "./Img/kursus.png";
import pk2 from "./Img/pk2.png";

const Project = () => {
  return (
    <>
      <div className="laptop:py-[10%] py-[20%]">
        <div
          className="flex justify-center font-bold laptop:text-4xl text-2xl text-cyan-500"
          id="Porto"
        >
          My Project at Here
        </div>
        <div className="py-[5%]">
          <div className="grid laptop:grid-cols-3 grid-cols-1">
            <div className="laptop:py-4 py-4 laptop:px-4 px-0">
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="font-bold flex justify-center pb-4 laptop:text-2xl text-xl text-cyan-600">
                  Cari Kampus
                </div>
                <img src={Carkam} alt="Carkam" className="rounded-lg pb-4" />
                <div className="laptop:text-lg text-xs ">
                  Project ini dibuat berdasarkan dengan tujuan untuk dapat
                  memberikan kemudahan bagi siswa baru yang akan mencari kampus
                  baru.
                </div>
                <div className="py-4 flex laptop:justify-start justify-center ">
                  <a
                    href="https://github.com/rg-km/final-project-engineering-66"
                    className="font-bold px-4 text-white bg-cyan-600 py-2 rounded-lg"
                  >
                    Visit Here
                  </a>
                </div>
              </div>
            </div>
            <div className="laptop:py-4 py-4 laptop:px-4 px-0">
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="font-bold flex justify-center pb-4 laptop:text-2xl text-xl text-cyan-600">
                  Pikachu Site
                </div>
                <img src={Pika} alt="Carkam" className="rounded-lg pb-4" />
                <div className="laptop:text-lg text-xs ">
                  Project ini dibuat menjadi latihan pada diri sendiri untuk
                  memperdalam react
                </div>
                <div className="py-4 flex laptop:justify-start justify-center ">
                  <a
                    href="https://nurfaidzy.github.io/Picapica/"
                    className="font-bold px-4 text-white bg-cyan-600 py-2 rounded-lg"
                  >
                    Visit Here
                  </a>
                </div>
              </div>
            </div>
            <div className="laptop:py-4 py-4 laptop:px-4 px-0">
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="font-bold flex justify-center pb-4 laptop:text-2xl text-xl text-cyan-600">
                  Cyber Attack Diagnosa
                </div>
                <img
                  src={Sp}
                  alt="Cyber Attack Diagnosa"
                  className="rounded-lg pb-4"
                />
                <div className="laptop:text-lg text-xs ">
                  Project ini dibut dengan tujuan untuk menyelesaikan skripsi
                  saya dengan menggunakan Laravel
                </div>
                <div className="py-4 flex laptop:justify-start justify-center ">
                  <a
                    href="https://spserangansiber.000webhostapp.com/"
                    className="font-bold px-4 text-white bg-cyan-600 py-2 rounded-lg"
                  >
                    Visit Here
                  </a>
                </div>
              </div>
            </div>
            <div className="laptop:py-4 py-4 laptop:px-4 px-0">
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="font-bold flex justify-center pb-4 laptop:text-2xl text-xl text-cyan-600">
                  Toko
                </div>
                <img
                  src={Hp}
                  alt="Cyber Attack Diagnosa"
                  className="rounded-lg pb-4"
                />
                <div className="laptop:text-lg text-xs ">
                  Project ini dibut dengan tujuan melakukan pengkodean dari
                  design yang telah ada dengan menggunakan react
                </div>
                <div className="py-4 flex laptop:justify-start justify-center ">
                  <a
                    href="https://nurfaidzy.github.io/FE-TokoHp/"
                    className="font-bold px-4 text-white bg-cyan-600 py-2 rounded-lg"
                  >
                    Visit Here
                  </a>
                </div>
              </div>
            </div>
            <div className="laptop:py-4 py-4 laptop:px-4 px-0">
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="font-bold flex justify-center pb-4 laptop:text-2xl text-xl text-cyan-600">
                  Web Kursus
                </div>
                <img
                  src={ks}
                  alt="Cyber Attack Diagnosa"
                  className="rounded-lg pb-4"
                />
                <div className="laptop:text-lg text-xs ">
                  Project ini dibut dengan tujuan melakukan pengkodean dari
                  design yang telah ada dengan menggunakan react
                </div>
                <div className="py-4 flex laptop:justify-start justify-center ">
                  <a
                    href="https://nurfaidzy.github.io/Website-Kursus---Front-End-/"
                    className="font-bold px-4 text-white bg-cyan-600 py-2 rounded-lg"
                  >
                    Visit Here
                  </a>
                </div>
              </div>
            </div>
            <div className="laptop:py-4 py-4 laptop:px-4 px-0">
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="font-bold flex justify-center pb-4 laptop:text-2xl text-xl text-cyan-600">
                  Pikachu Site V2
                </div>
                <img
                  src={pk2}
                  alt="Pikachu Site V2"
                  className="rounded-lg pb-4"
                />
                <div className="laptop:text-lg text-xs ">
                  Project ini dibuat untuk memperbaiki kesalahan pada yang
                  pertama dengan menambahkan library Seperti redux-saga
                </div>
                <div className="py-4 flex laptop:justify-start justify-center ">
                  <a
                    href="https://nurfaidzy.github.io/Pokemon_v2/"
                    className="font-bold px-4 text-white bg-cyan-600 py-2 rounded-lg"
                  >
                    Visit Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
