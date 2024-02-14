import React from "react";
import wifi from "../assets/wifi.png";
import popcorn from "../assets/popcorn.png";
import cctv from "../assets/cctv.png";
import tv from "../assets/tv.png";
import blanket from "../assets/blanket.png";
import charger from "../assets/charger.png";

const Fecilities = () => {
  return (
    <div className="p-[50px] px-[150px]">
      <div className="flex justify-center gap-[80px] py-4">
        <div>
          <img className=" m-3 w-[60px]" src={wifi} />
          <h3 className="flex justify-center"> Wifi</h3>
        </div>

        <div>
          <img className=" m-3 w-[60px]" src={cctv} />
          <h3 className="flex justify-center"> CCTV</h3>
        </div>
        <div>
          <img className=" m-3 w-[60px]" src={charger} />
          <h3 className="flex justify-center"> Charger</h3>
        </div>
      </div>


      <div className="flex justify-center gap-[80px] py-4">
        <div >
          <img className=" m-3 w-[60px]" src={tv} />
          <h3 className="flex justify-center"> TV</h3>
        </div>
        <div>
          <img className=" m-3 w-[60px]" src={popcorn} />
          <h3 className="flex justify-center"> Food </h3>
        </div>
        <div>
          <img className=" m-3 w-[60px]" src={blanket} />
          <h3 className="flex justify-center"> Blanket</h3>
        </div>
      </div>
    </div>
  );
};

export default Fecilities;
