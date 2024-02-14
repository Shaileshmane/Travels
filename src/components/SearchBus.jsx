import React, { useState } from "react";
import "../App.css";
import bus from "../assets/bus.png";

// Data
import { busDetails } from "../Constants/dummyData";

const SearchBus = () => {
  const [value, setValue] = useState();
  const [destinationCity, setDestinationCity] = useState();
  const today = new Date().toISOString().split("T")[0];

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangeDestination = (e) => {
    setDestinationCity(e.target.value);
  };

  return (
    <div className="">
      <div className="bg-white p-2 border shadow-md">
        <div className="flex align-center border-b-2 p-2 ">
          <img src={bus} className="" width={25} height={25} />
          <h3>Bus Booking</h3>
        </div>

        <div className="flex gap-2 py-3 px-3 flex-wrap">
          <div className="flex flex-col">
            <label>From</label>
            <input
              type="text"
              onChange={onChange}
              value={value}
              className="border p-1"
              placeholder="Origin"
            />
            <div className="drop-downcontent">
              {value &&
                busDetails
                  .filter(
                    (item) =>
                      item.bus_name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()) && item.bus_name !== value
                  )
                  .slice(0, 5)
                  .map((item) => (
                    <div
                      className="content"
                      key={item.bus_id}
                      onClick={(e) => setValue(item.bus_name)}
                    >
                      {item.bus_name}
                    </div>
                  ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label>To</label>
            <input
              className="border p-1"
              type="text"
              onChange={onChangeDestination}
              value={destinationCity}
              placeholder="Designation"
            />

            <div className="drop-downcontent">
              {destinationCity &&
                busDetails
                  .filter(
                    (item) =>
                      item.bus_name.toLocaleLowerCase().startsWith(destinationCity.toLocaleLowerCase()) &&
                      item.bus_name !== destinationCity
                  )
                  .slice(0, 5)
                  .map((item) => (
                    <div
                      className="content"
                      key={item.bus_id}
                      onClick={(e) => setDestinationCity(item.bus_name)}
                    >
                      {item.bus_name}
                    </div>
                  ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label>Starting date</label>
            <input
              type="date"
              min={today}
              className="border p-1 px-3  text-gray-400"
              placeholder="Select Date"
            />
          </div>

          <div className="flex flex-col">
            <label>Return Date</label>
            <input
              type="date"
              min={today}
              className="border p-1 px-3  text-gray-400"
              placeholder="Select Date"
            />
          </div>

          <div>
            <button className="bg-blue-300 px-2 py-1 rounded-sm mt-4">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBus;
