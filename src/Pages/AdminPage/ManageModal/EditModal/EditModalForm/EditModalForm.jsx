import React, { useRef, useState, useEffect } from "react";
import Button from "../../../../../Components/Button/Button.jsx";
import axios from "axios";


const EditModalForm = ({ modalId }) => {
  console.log(modalId);
  
  const [modalData, setModalData] = useState([]);
  const [loading, setLoading] = useState(true);

  // details stores in an Array
  const detailsArray = [];
  const [details, setDetails] = useState(detailsArray);

  // Fetch car data on mount
  useEffect(() => {
    const fetchModalById = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/model/get/${modalId}`);
        const modal = res.data;
        console.log(modal);
        
        setModalData(modal);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchModalById();
  }, [modalId]);

 
  const titleRef = useRef(null);
  const makeRef = useRef(null);


  const updateModal = async () => {
    const payload = {
      modalTitle: titleRef.current.value,
      modalMake: makeRef.current.value
    }
  
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.put(
        `http://localhost:5000/api/model/update/${modalId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Success" + JSON.stringify(response.data));
      alert("Updated Succesfully");
  
      window.location.href = "/dashboard/manage-modal";
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };
  

  return (
    <div className="w-full flex flex-col mx-auto rounded-md p-3">
    <div className="flex justify-between items-center p-6 mb-4">
      <h1 className="text-3xl font-bold">Update Modal</h1>
    </div>
    <form action="" className="form  w-full h-auto p-3  flex flex-col gap-5">
      <div className="p-6 border rounded-md text-sm text-gray-600 w-full h-auto flex justify-between items-center gap-5">
              {/* Title Input */}
        <div className="w-1/2">
          <label htmlFor="title" className="w-full">
            <p>
              Modal Title <sup className="text-orange-700">*</sup>
            </p>
            <input
              type="text"
              id="title"
              ref={titleRef}
              value={modalData.modalTitle}
              onChange={(e)=>{
                setModalData({...modalData , modalTitle : e.target.value})
              }}
              className="mt-2 w-full border rounded-md p-2"
              placeholder="Enter Title Here"
            />
          </label>
        </div>

         {/* Make Input */}
         <div className="w-1/2 my-3">
         <label htmlFor="title" className="w-full">
            <p>
              Modal Make <sup className="text-orange-700">*</sup>
            </p>
            <select
              id="make"
              className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
              placeholder="Select make"
              ref={makeRef}
              value={modalData.modalMake}
              onChange={(e)=>{
                setModalData({...modalData , modalMake : e.target.value})
              }}
            >
              <option
                value=""
                selected
                disabled
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
              >
                Select Make
              </option>
              <option
                value="BUS"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                BUS
              </option>
              <option
                value="CONVERTIBLE"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                CONVERTIBLE
              </option>
              <option
                value="COUPE"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                COUPE
              </option>
              <option
                value="DUMP-TRUCK"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                DUMP-TRUCK
              </option>
              <option
                value="FLAT BODY TRUCK"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                FLAT BODY TRUCK
              </option>
              <option
                value="FREEZER BOX"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                FREEZER BOX
              </option>
              <option
                value="HATCHBACK"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                HATCHBACK
              </option>
              <option
                value="MIN VAN"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                MIN VAN
              </option>
              <option
                value="MUV"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                MUV
              </option>
              <option
                value="PICKUP TRUCK"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                PICK UP TRUCK
              </option>
              <option
                value="SEDAN"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                SEDAN
              </option>
              <option
                value="STATION WAGON"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                STATION WAGON
              </option>
              <option
                value="SUV"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                SUV
              </option>
              <option
                value="VAN"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                VAN
              </option>
              <option
                value="WAGON"
                className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
              >
                WAGON
              </option>
            </select>
            </label>
          </div>

      </div>
      </form>

    <div className="button w-full flex justify-start items-center p-6">
      <Button text="Update Modal" onClick={updateModal} />
    </div>
  </div>
  );
};

export default EditModalForm;
