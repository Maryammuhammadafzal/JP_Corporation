import React, { useState } from "react";
import Logo from "../../../assets/Images/jplogo.png";
import Button from "../../../Components/Button/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const AdminDashboard = () => {
  let [showPassword, setShowPassword] = useState(false);

  //  Handle Showing Password
  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  // Handle Form Submission
  // Handle Form Submission
  const handleForm = async (event) => {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill all the fields");
      return;
    }

    try {
      console.log("try chala");
      
      const response = await fetch("http://localhost:5000/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token in localStorage
        localStorage.setItem("adminToken", data.token);
        alert("Login successful!");
        // Redirect to Dashboard or wherever
        window.location.href = "/dashboard";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full h-auto flex relative">
      <div className="bgImage w-full h-screen opacity-85"></div>

      <div className="content absolute top-0 left-0 z-10 w-full h-screen">
        <div className="form w-full h-screen flex justify-center items-center ">
          <div className="bg-white h-auto rounded-2xl p-3 flex flex-col w-[50%] justify-center items-center gap-5">
            <div className="logo w-full h-[200px] flex justify-center items-center">
              <img src={Logo} alt="jp logo" className="w-[160px] h-[160px]" />
            </div>
            <div className="heading w-full h-auto flex justify-center items-center p-3">
              <h3 className="text-3xl font-bold text-gray-800">
                Sign in to your Account
              </h3>
            </div>
            <form action="" className="w-[90%] p-3" onSubmit={handleForm}>
              <label
                htmlFor="name"
                className="w-full p-1 text-gray-600 font-semibold"
              >
                username
                <div className="input w-full h-auto flex flex-col gap-2 p-1">
                  <input
                    type="name"
                    id="name"
                    className="w-full required active:border-orange-500 active:border active:outline-0 focus:outline-0 focus:border focus:border-orange-500 border border-gray-400 h-[50px] px-3 rounded-xl"
                  />
                </div>
              </label>
              <label
                htmlFor="password"
                className="w-full p-1 text-gray-600 font-semibold"
              >
                Password
                <div className="input w-full h-auto flex  p-1">
                  {showPassword == false ? (
                    <input
                      type="password"
                      id="password"
                      className="w-full  active:border-orange-500 active:border active:outline-0 focus:outline-0 focus:border focus:border-orange-500 h-[50px] px-3  border border-gray-400 required rounded-2xl"
                    />
                  ) : (
                    <input
                      type="text"
                      id="password"
                      className="w-full  active:border-orange-500 active:border active:outline-0 focus:outline-0 focus:border focus:border-orange-500 h-[50px] px-3  border border-gray-400 required rounded-2xl"
                    />
                  )}
                  <button
                    onClick={handleShowPassword}
                    className="eyeButton text-orange-500 hover:text-white hover:bg-orange-400 hover:border-2 active:shadow-sm  active:shadow-amber-600 focus:shadow-sm  focus:shadow-amber-600 w-[60px] rounded-xl h-[50px] px-3 border-orange-500 border flex justify-center items-center"
                  >
                    {showPassword == false ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </label>
              <div className="button w-[90%] flex justify-center items-center h-auto">
                <Button text="Sign me in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
