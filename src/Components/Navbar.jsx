import React, { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  const klik = () => {
    setnav(!nav);
  };

  return (
    <>
      <div className="">
        <div className="fixed desktop:w-[100%] laptop:visible invisible bg-cyan-500 py-4  px-4 text-white shadow-2xl  ">
          <div className="px-[10%] flex justify-between ">
            <div className="font-bold text-2xl">
              <h1 className="sabsolute">Nurfaidzy</h1>
            </div>
            <div className="flex justify-end font-bold pt-1 ">
              <a href="#Porto" className="px-5">
                Portopolio
              </a>
              <a href="#Contact" className="px-5">
                Contact
              </a>
              <a href="#About" className="px-5">
                About
              </a>
            </div>
          </div>
        </div>
        {/* mobile device */}
        <div className="">
          <div className="fixed">
            <div className="fixed w-full pt-5 flex justify-between laptop:invisible visible  bg-cyan-500 py-4 rounded-b-lg px-4 text-white shadow-2xl">
              <div className="font-bold text-2xl">
                <h1>Nurfaidzy</h1>
              </div>
              <div className="pt-2">
                {!nav ? (
                  <AiFillCaretLeft className="text-2xl " onClick={klik} />
                ) : (
                  <AiFillCaretDown className="text-2xl " onClick={klik} />
                )}
              </div>
            </div>

            {/* yang muncul pas di klik */}
            {!nav ? null : (
              <div className=" px-10">
                <div className="pt-[80px] ">
                  <div className="w-[340px] bg-white shadow-lg rounded-lg">
                    <div className="grid text-center grid-cols-1 font-bold text-xl pt-3 ">
                      <a href="/#Porto" className="px-5">
                        Portopolio
                      </a>
                      <a href="/#Contact" className="pt-5">
                        Contact
                      </a>
                      <a href="/#About" className="pt-5 pb-5">
                        About
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
