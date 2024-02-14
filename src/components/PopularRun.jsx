import React from "react";
import { Link } from "react-router-dom";
import Busbooking from "./Busbooking";

const PopularRun = ({ busData }) => {
  console.log(busData);
  return (
    <div>
      <div className="bus-container  shadow-md rounded-sm">
        <div className="flex justify-between gap-5 px-3 py-2">
          <h1>{busData?.bus_name}</h1>

          <div className="flex gap-1">
            <div>
              <h3>
                {busData?.arrival_time} -{" "}
                <span className="text-slate-600 text-sm"> 30 Jan</span>
              </h3>
              <h3 className="text-slate-400">{busData?.origin}</h3>
            </div>
            <p>----- 10:00hrs, 00 mins -----</p>
            <div>
              <h3>
                {busData?.departure_time} -
                <span className="text-slate-600 text-sm"> 31 Jan</span>
              </h3>
              <h3 className="text-slate-400">{busData?.destination}</h3>
            </div>
          </div>

          <h3 className="font-bold">₹{busData?.ticket_price}</h3>
        </div>

        <div className="flex justify-between text-xs gap-5 px-3 py-2">
          <h1 className=" text-neutral-600">{busData?.bus_company}</h1>
          <h1>AC/ Non AC</h1>
          <h1>{busData?.available_seats} Seats Availble</h1>
        </div>

        <div className="flex justify-between gap-6 px-3 py-2">
          <h1 className="text-xs">{busData?.customer_rating} Ratings</h1>
          <Link
            to={{ pathname: "/bus-booking/:bus_id", state: { busData } }}
            key={busData?.bus_id}
          >
            <button className="text-sm bg-blue-500 px-2 py-1 rounded-sm text-white">
              SELECT SEATS
            </button>
          </Link>

          {/* <Link
            to={{
              pathname: "/bus-booking/parameter-data",
              state: { stataeParams : " bus data nahi aaa"},
            }}
          >
            <button className="text-sm bg-blue-500 px-2 py-1 rounded-sm text-white">Seat</button>
          </Link> */}

        </div>
      </div>
    </div>
  );
};

export default PopularRun;
