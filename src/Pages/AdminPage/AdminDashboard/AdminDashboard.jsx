import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { BsLink } from "react-icons/bs";
import { BsCarFrontFill } from "react-icons/bs";
import Logo from "../../../assets/Images/jplogo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CapLinksListing from "../CapLinks/CapLinksListing/CapLinksListing";
import ManageListing from "../ManageModal/ManageListing/ManageListing";
import CarListings from "../CarListing/CarListing";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAdminMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    alert("admin Logout Successfully");
    window.location.href = "/admin";
  };

  return (
    <div className="w-full bg-orange-400 h-auto">
      {/* Navbar */}
      <div className="navbar  w-full h-[100px] relative flex">
        <div className="w-full h-[100px] flex bg-orange-400 justify-between fixed items-center">
          <div className="w-[30%] h-auto flex justify-between items-center">
            {/* Logo */}
            <div className="logo w-[150px] mt-3 ml-3 h-[80px] ">
              <img src={Logo} alt="jp logo" className="w-[80px] h-[80px]" />
            </div>

            {/* MENU ICON */}
            <div className="tabs w-auto h-auto text-white  flex items-center">
              <div
                className="menuIcon cursor-pointer"
                onClick={toggleAdminMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  viewBox="0 0 28 21"
                  className="vehica-menu-icon"
                >
                  <g id="vehica-menu-svg" transform="translate(-11925 99)">
                    <rect
                      width="28"
                      height="3.2"
                      rx="1.5"
                      transform="translate(11925 -99)"
                      fill="#ffffff"
                    ></rect>
                    <rect
                      width="19.6"
                      height="3.2"
                      rx="1.5"
                      transform="translate(11925 -90.6)"
                      fill="#ffffff"
                    ></rect>
                    <rect
                      width="14"
                      height="3.2"
                      rx="1.5"
                      transform="translate(11925 -82.2)"
                      fill="#ffffff"
                    ></rect>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="w-auto p-3 h-auto flex justify-center items-center">
            <button
              className="w-fit max-[600px]:w-full h-fit py-3 px-5 font-semibold text-lg text-white bg-orange-600 rounded-xl cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="body gap-3 bg-white w-full h-auto rounded-tr-[15rem] rounded-tl-[5rem]  flex">
        <div className="w-full h-auto flex justify-between">
          <div className="left w-[110px] bg-fuchsia-300 ">
            <div className="side w-fit fixed max-[1300px]:hidden">
              {isOpen ? (
                <div
                  id="sideNav"
                  className="left bg-white w-[250px] p-3 rounded-2xl h-screen  shadow-xl"
                >
                  <div className="w-full bg-white h-auto p-3">
                    <p className="text-orange-400 text-xl">Main Menu </p>
                  </div>
                  <div className="tabs w-full h-auto flex p-3 gap-3 flex-col ">
                    <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                      <Link to="/dashboard" className="flex gap-3 items-center">
                        <BsList />{" "}
                        <p className="hover:text-white text-md">Listings</p>
                      </Link>
                    </div>
                    <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                      <Link
                        to="/dashboard/cap-links"
                        className="flex gap-3 items-center"
                      >
                        <BsLink />
                        <p className="hover:text-white text-md">
                          Cap Links List
                        </p>
                      </Link>
                    </div>
                    <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                      <Link
                        to="/dashboard/manage-modal"
                        className="flex gap-3 items-center"
                      >
                        <BsCarFrontFill />
                        <p className="hover:text-white text-md">Manage Model</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  id="sideNavIcon"
                  className="left  bg-white w-[80px] rounded-tl-[10rem] p-3 rounded-2xl h-screen  shadow-xl"
                >
                  <div className="tabs bg-white w-full h-auto flex p-1 gap-3 flex-col ">
                    <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                      <Link
                        to="/dashboard"
                        className="flex gap-3 items-center font-bold"
                      >
                        <BsList size={30} />
                      </Link>
                    </div>
                    <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                      <Link
                        to="/dashboard/cap-links"
                        className="flex gap-3 items-center"
                      >
                        <BsLink size={30} />
                      </Link>
                    </div>
                    <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                      <Link
                        to="/dashboard/manage-modal"
                        className="flex gap-3 items-center"
                      >
                        <BsCarFrontFill f size={30} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              id="sideNavIcon"
              className=" w-[100px] bg-white p-3  rounded-tl-4xl rounded-2xl h-screen fixed  shadow-md"
            >
              <div className="tabs w-full bg-white h-auto flex p-1 gap-3 flex-col ">
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                  <Link
                    to="/dashboard"
                    className="flex gap-3 items-center font-bold"
                  >
                    <BsList size={30} />
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                  <Link
                    to="/dashboard/cap-links"
                    className="flex gap-3 items-center"
                  >
                    <BsLink size={30} />
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-400">
                  <Link
                    to="/dashboard/manage-modal"
                    className="flex gap-3 items-center"
                  >
                    <BsCarFrontFill size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="right w-fix  flex flex-col gap-3  justify-end ">
            {(location.pathname === "/dashboard" && <CarListings />) ||
              (location.pathname === "/dashboard/cap-links" && (
                <CapLinksListing />
              )) ||
              (location.pathname === "/dashboard/manage-modal" && (
                <ManageListing />
              ))}
            <div className="copyright w-full p-2 border-t border-gray-400 flex justify-center items-center">
              <p>
                Copyright{" "}
                <a href="" className="text-orange-400">
                  JP Corporation
                </a>{" "}
                © 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
