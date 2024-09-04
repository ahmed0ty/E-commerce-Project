import React from "react";
import img from "../../assets/images/error.svg"


const Notfound = () => {
  return (
    <div className="p-8">
      <div className="w-[70%] m-auto">
        <img src={img} alt="Error" />
      </div>
    </div>
  );
};

export default Notfound;
