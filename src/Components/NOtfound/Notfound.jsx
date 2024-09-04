import React from "react";
import img from "../../assets/images/error.svg"


const Notfound = () => {
  return (
    <div className="p-8 flex justify-center items-center h-screen">
      <div className="">
        <img src={img} alt="Error" />
      </div>
    </div>
  );
};

export default Notfound;
