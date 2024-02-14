import React from "react";
import { Seat } from "./Seat";

// Icons
import bus from "../assets/bus-2.png";
import bed from "../assets/bed.png";
import AC from "../assets/Ac.png";
import vehicle from "../assets/vehicle-staring.png";
import point from "../assets/customer-journey.png";
import arrow from "../assets/arrow.png"
import upper from "../assets/upper.png"

const Busbooking = (props) => {
  const seatNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seatNumber2 = [1, 2, 3, 4, 5, 6, 7];

  const handleSeatClick = () => {
    console.log("Seat clicked:");
    // Add your logic here to handle the clicked seat
  };

  return (
    <div className="body-background py-3">
      <div className="bus-info flex flex-col p-3 gap-4  pt-4 mx-5 rounded-lg bg-slate-50">
        <div className="flex flex-row justify-between px-5">
          <div>
            <h1 className="font-bold text-xl">Transways Travels </h1>
            <p className="text-gray-600">Volvo X C90 </p>
            <p className="text-gray-600 text-sm flex flex-row gap-2">
              <img src={AC} className="w-6" />
              AC Sleeper Deluxe 2x1
            </p>
            <p className="text-gray-600 text-sm flex flex-row gap-2">
              <img src={bus} className="w-5" />
              MH 26 BE 1111
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1>
              <span className="font-bold">07:00AM</span>
              <span className="text-sm text-gray-700"> -31 JAN</span> ----
              <span className="text-sm text-gray-500">10:30hrs</span> ----
              <span className="font-bold">05:30PM</span>
              <span className="text-sm text-gray-700"> -31 JAN</span>
            </h1>
            <h1 className="font-bold"> Nanded  <img src={point} className="w-5" /> Pune </h1>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold bg-green-200 p-2  text-gray-800 price">₹ 1400 </h1>
            <p className="flex flex-row gap-2">
              <img src={bed} className="w-6" />
              {(seatNumber.length + seatNumber2.length) * 2} Berth left
            </p>
          </div>
        </div>

        <div className="pl-9">
          <h1 className="py-0 ml-4 text-gray-400">Select Berth</h1>
        </div>

        <div className="flex flex-row gap-2">
        <div className=" flex flex-col gap-3 justify-between ">
          <div className="lower-desk  flex flex-row gap-4 ">
            <p className="rotate-90 flex flex-row gap-2">
              <img src={vehicle} className="h-5" />
              Lower desk
            </p>
            <div className="bus-seats  w-[500px] rounded-sm">
              <div className=" flex flex-wrap gap-1 p-2 ">
                {seatNumber.map((ele) => (
                 <div className="seatelement">
                   <Seat key={ele} seatNo={ele+"LR"} />
                  </div>
                ))}
              </div>
              <div className=" flex flex-wrap pt-2 gap-1 p-2">
                {seatNumber2.map((ele) => (
                 <div className="seatelement">
                   <Seat key={ele} seatNo={ele+"LL"}  />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <p className="rotate-90 ">Upper desk</p>
            <div className="bus-seats w-[500px] rounded-sm">
              <div className=" flex flex-wrap gap-1 p-2 ">
                {seatNumber.map((ele) => (
                 <div className="seatelement">
                   <Seat seatNo = {ele+"UR"} />
                  </div>
                ))}
              </div>
              <div className=" flex flex-wrap pt-2 gap-1 p-2">
                {seatNumber2.map((ele) => (
                 <div className="seatelement">
                   <Seat seatNo={ele+"UL"}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pickupform border  p-10 rounded-sm">
          <form action="" className="flex flex-col gap-3" >
            <select name="" id="" className="border p-2 text-gray-400 rounded-sm">
            <option value="" >  pickup point</option>

            </select>
            <select name="" id=""  className="border p-2  text-gray-400 rounded-sm">
                    <option value="">drop-off point</option>

            </select>
              
              <p className="text-sm flex justify-center text-gray-400">please select the pickup and drop point </p>
            <button className="text-sm bg-blue-500 px-2 py-1 rounded-sm text-white"> Book My Seat</button>
          </form>
        </div>          
                      
        </div>


      </div>
    </div>
  );
};

export default Busbooking;
