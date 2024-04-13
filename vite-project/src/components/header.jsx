import React from "react";
import { FaUser } from "react-icons/fa6";
// import Addnew from "./Addnew";
const Header = () => {
  return (
    <div>
      <div className=" flex gap-40 bg-gray-300 w-full">
        <div className=" pl-80 flex gap-40 ">
          <div>
            <a>
              <p className="text-3xl text-font">contact</p>
            </a>
          </div>
          <div className="mt-3 text-xl">
            <a href="./Homepage">
              <p className="text-3xl text-font">home</p>
            </a>
          </div>
        </div>
        <div className="bg-gray-700 rounded flex ml-96 gap-4 text-white">
          <div>
            <FaUser className="text-3xl" />
          </div>
          <div>
            <h3>Sugira</h3>
            <h3>sugi@gmail.com</h3>
          </div>
          <div>
            <button className="rounded-md bg-black mt-3">Signout</button>
          </div>
        </div>
        {/* <Addnew/> */}
      </div>
    </div>
  );
};

export default Header;
