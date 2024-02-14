import React, { useState } from "react";
import "../App.css";
import SearchBus from "./SearchBus";
import PopularRun from "./PopularRun";
import { busDetails } from "../Constants/dummyData";
import Fecilities from "./Fecilities";

// bus- Images
import volvoBus from "../assets/voldo-bus.jpg";
import voldoBus2 from "../assets/voldo-bus-2.jpg";
import innerBus from "../assets/inner-bus.png";
import Footer from "./Footer";

const Body = () => {
  
  return (
    <div className="body-background ">
      <div className="tag-line">
        <h1 className="font-bold text-[30px] ">Travel the world</h1>
        <p> Explore the world</p>
      </div>
      <div className="flex-col body-element">
        <SearchBus />
        <div className="popular-run">
          <h1 className="Popular-title mb-4 ">Popular Designation</h1>
        </div>
        {busDetails.slice(0, 3).map((item) => (
          <PopularRun key={item.bus_id} busData={item} />
        ))}
        <div>view All</div>
      </div>

      <div className="flex justify-center flex-col p-12 body-element  ">
        <h1 className="font-bold text-2xl"> We offer</h1>
        <p className="underline text-gray-500 text-sm pb-4">
          We making your, Journery Graceful with our Grand facilities
        </p>
        <div className="facilities  rounded-lg">
          <Fecilities />
        </div>

        <h1 className="p-4 font-bold text-2xl">Your Journey Comforts</h1>
        <div className="flex gap-4  ">
          <img
            src={voldoBus2}
            className="rounded-lg"
            height={200}
            width={300}
          />
          <img src={innerBus} className="rounded-lg" height={200} width={300} />
          <img src={volvoBus} className="rounded-lg" height={200} width={300} />
        </div>
      </div>

      <div className="body-element">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
