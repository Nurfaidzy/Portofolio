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
      <div className="flex justify-between laptop:visible invisible ">
        <div className="font-bold text-2xl">
          <h1>Nurfaidzy</h1>
        </div>
        <div className="flex justify-end font-bold pt-3 ">
          <p className="px-5">Portopolio</p>
          <p className="px-5">Contact</p>
          <p className="px-5">About</p>
        </div>
      </div>
      {/* mobile device */}
      <div className="flex justify-between laptop:invisible visible">
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
        <div className="pt-10">
          <div className="absolute w-screen bg-slate-300 -ml-[10%] py-[5%]">
            <div className="grid text-center grid-cols-1 font-bold text-xl pt-3 ">
              <p className="py-4">Portopolio</p>
              <p className="py-4">Contact</p>
              <p className="py-4">About</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
