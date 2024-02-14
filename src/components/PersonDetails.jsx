import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const PersonDetails = () => {
  const [gender, setGender] = useState("male"); // Default value is male
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(true);


  const { loginWithRedirect, user, isAuthenticated, isLoading ,logout} = useAuth0();
 
 


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setMobileNumber(value);
    // Regular expression to match Indian mobile numbers starting with valid prefixes
    const mobileNumberRegex = /^(?:\+?91|0)?[789]\d{9}$/;
    setIsValid(mobileNumberRegex.test(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      // Process the valid mobile number, e.g., submit the form
      console.log("Mobile number is valid:", mobileNumber);
    } else {
      // Handle invalid input, e.g., show error message
      console.log("Invalid mobile number:", mobileNumber);
    }
  };


  return (
    <div className="body-background py-1">
      <div className="personal-sec p-3 m-3 flex gap-1">
        {/* Personal details */}
        <div className="border  personal-detail-form p-4 bg-white">
          <h1 className="font-bold text-lg">Personal Details</h1>

          <form onSubmit={handleSubmit}>
            <div className="form  py-3 flex flex-col gap-3">
              <input
                type="text"
                className="border text-sm p-1 rounded-sm"
                placeholder="Enter your name"
              />
              <input
                type="number"
                className="border text-sm p-1  rounded-sm"
                placeholder="your age"
              />
              <div className="flex gap-3">
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>

                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGenderChange}
                  />
                  female
                </label>
              </div>
              <input
                type="number"
                placeholder="Mobile Number"
                onChange={handleChange}
                className="border text-sm p-1 rounded-sm"
              />
              {!isValid && (
                <p style={{ color: "red" }} className="text-sm">
                  Please enter valid mobile number
                </p>
              )}
              <input
                type="email"
                placeholder="Email id"
                className="border text-sm p-1 rounded-sm"
              />
              <div>
                <p className="text-sm text-gray-600 ">How to use coupon ?</p>
                <input
                  type="text"
                  placeholder="Coupon code (Optional)"
                  className="border p-1 text-sm rounded-sm"
                />
              </div>
              <div className="flex gap-1 text-gray-600">
                <input type="checkbox" required />
                <p className="text-sm">
                  {" "}
                  Agree the terms and condition for this bus trip
                </p>
              </div>
              <div>
                <button className="bg-blue-400 text-white  rounded-sm p-2">
                  Proceed for payment
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Ticket Information */}
        <div className="ticket-info bg-white border p-4">
          <h1 className="font-bold text-lg">Ticket Information</h1>
          <div>
            <div className="table-container">
              <table className="responsive-table flex-col gap-2">
                <thead>
                  <tr>
                    <th className="table-head ">Seat Desk</th>
                    <th>Berth Fare</th>
                    <th>GST</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <div className="breaking-border"></div>
                <tbody>
                  <tr className="py-3">
                    <td className="table-head"> Onward trip fare (1 Berth) </td>
                    <td> ₹ 1400 </td>
                    <td> ₹ 53 </td>
                    <td> ₹ 1453 </td>
                  </tr>

                  <tr className="py-3">
                    <td className="table-head"> Seat berth - 10LR </td>
                    <td> ₹ 1400 </td>
                    <td> ₹ 53 </td>
                    <td> ₹ 1453 </td>
                  </tr>

                  <div className="breaking-border"></div>
                  <tr className="py-3 font-semibold ">
                    <td className="table-head "> Amount to be Paid </td>
                    <td> </td>
                    <td> </td>
                    <td> ₹ 1453 </td>
                  </tr>

                  {/* {data.map((item, index) => (
            <tr key={index}>
              <td>{item.seat}</td>
              <td>{item.desk}</td>
              <td>{item.berth}</td>
              <td>{item.fare}</td>
              <td>{item.gst}</td>
              <td>{item.total}</td>
            </tr>
          ))} */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm py-10 text-gray-500">
            Note :- Apna saman apni Zimmedari, Apko pohchana hamari jababdari
            <p className="flex justify-center py-11 text-gray-300">
              Wishing you have happy and safe Journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
