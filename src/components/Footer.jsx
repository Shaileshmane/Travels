import React from "react";

const Footer = () => {
  return (
    <div className="footer px-5 bg-cyan-100">
      <div className="flex justify-between p-5 text-gray-600" >
        <div>
          <h1 className="font-bold pb-2">Transways Travles </h1>
          <p>Bafna tea point, Nanded</p>
          <p> contact - 124568974</p>
          <p>transwasytravels.nanded@gmail.com</p>
        </div>
        <div>
          <h1 className="font-bold pb-2">Our Top buses</h1>
          <ul>
            <li>Volvo V900</li>
            <li>Ashok Layland</li>
            <li>Mercedes s-class</li>
          </ul>
        </div>
        <div className="w-[250px]">
          <h1 className="font-bold pb-2">About us</h1>
          <p>this is just dummy text will replaces, kabhi kabhi mere dil me ik khayal aata hai, 
            pata nahi bich me kaha jata hai....   
            </p>
        </div>
      </div>
      <div>
        <p className="flex justify-center pb-3 text-gray-400 text-sm">@Copy Rights are reserved 2024 </p>
      </div>
    </div>
  );
};

export default Footer;
