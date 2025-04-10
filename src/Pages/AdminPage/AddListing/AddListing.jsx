import React, {useState} from 'react'
import Logo from "../../../assets/Images/jplogo.png"
import { BsList } from "react-icons/bs";
import { BsLink } from "react-icons/bs";
import { BsCarFrontFill } from "react-icons/bs";
import AddListingForm from './AddListingForm/AddListingForm';
import { Link } from 'react-router-dom';

const AddListing = () => {
         const [isOpen, setIsOpen] = useState(true);
        
          const toggleAdminMenu = () => {
            setIsOpen(!isOpen);
          };
  return (
        <div className="w-full h-auto">

        {/* Navbar */}
        <div className="navbar w-full h-[100px]  flex">
          <div className="w-full h-auto flex justify-between fixed bg-gray-100 items-center">
            <div className="w-[30%] h-auto flex justify-between items-center">
              {/* Logo */}
              <div className="logo w-[150px] mt-3 ml-3 h-[80px] ">
                <img src={Logo} alt="jp logo" className="w-[80px] h-[80px]" />
              </div>
  
                {/* MENU ICON */}
              <div className="tabs w-auto h-[auto] flex items-center">
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
                        height="4.2"
                        rx="1.5"
                        transform="translate(11925 -99)"
                        fill="#ff4605"
                      ></rect>
                      <rect
                        width="19.6"
                        height="4.2"
                        rx="1.5"
                        transform="translate(11925 -90.6)"
                        fill="#ff4605"
                      ></rect>
                      <rect
                        width="14"
                        height="4.2"
                        rx="1.5"
                        transform="translate(11925 -82.2)"
                        fill="#ff4605"
                      ></rect>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
  
  {/* Logout Button */}
            <div className="w-auto p-3 h-auto flex justify-center items-center">
              <button className="w-fit max-[600px]:w-full h-fit py-3 px-5 font-semibold text-lg text-white bg-orange-600 rounded-xl cursor-pointer">
                Logout
              </button>
            </div>
  
          </div>
        </div>
  
        {/* Main Body */}
        <div className="body gap-3 w-full h-auto flex">
  
  <div className="left min-w-[8%] max-w-[16%]">
  <div className="side w-full  max-[1300px]:hidden">
    
          
    {isOpen ? (
            <div id="sideNav" className="left w-[250px] p-3 rounded-2xl h-screen fixed shadow-xl">
              <div className="w-full h-auto p-3">
                <p className="text-orange-500 text-xl">Main Menu </p>
              </div>
              <div className="tabs w-full h-auto flex p-3 gap-3 flex-col ">
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard" href="" className="flex gap-3 items-center">
                    <BsList /> <p className="hover:text-white text-md">Listings</p>
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard/cap-links" href="" className="flex gap-3 items-center">
                    <BsLink />{" "}
                    <p className="hover:text-white text-md">Cap Links List</p>
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard/manage-modal" href="" className="flex gap-3 items-center">
                    <BsCarFrontFill />{" "}
                    <p className="hover:text-white text-md">Manage Model</p>
                  </Link>
                </div>
    
              </div>
    
            </div>
          )
        : (
    
            <div
              id="sideNavIcon"
              className="left w-[80px] p-3 rounded-2xl h-screen fixed shadow-xl"
            >
              <div className="tabs w-full h-auto flex p-1 gap-3 flex-col ">
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard" href="" className="flex gap-3 items-center font-bold">
                    <BsList size={30}/>
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard/cap-links" href="" className="flex gap-3 items-center">
                    <BsLink   size={30}/>
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard/manage-modal" href="" className="flex gap-3 items-center">
                    <BsCarFrontFill size={30}/>
                  </Link>
                </div>
              </div>
            </div>
        )} 
        
    </div>
    <div
              id="sideNavIcon"
              className=" w-[10%] p-3 min-[1300px]:hidden rounded-2xl h-screen fixed shadow-xl"
            >
              <div className="tabs w-full h-auto flex p-1 gap-3 flex-col ">
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard" href="" className="flex gap-3 items-center font-bold">
                    <BsList size={30}/>
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard/cap-links" href="" className="flex gap-3 items-center">
                    <BsLink size={30}/>
                  </Link>
                </div>
                <div className="tab w-full h-auto hover:text-white p-3 rounded-xl hover:bg-orange-500">
                  <Link to="/dashboard/manage-modal" href="" className="flex gap-3 items-center">
                    <BsCarFrontFill size={30}/>
                  </Link>
                </div>
              </div>
              </div>
  </div>
  
  <div className="right p-3 w-[83%] max-[1300px]:w-full ">
  <AddListingForm/>
  </div>
        </div>
      </div>
  )
}

export default AddListing
