import React, { useRef, useState } from "react";
import Button from "../../../../Components/Button/Button";
import axios from "axios";

const AddListingForm = () => {
  const [featuredImage, setFeaturedImage] = useState(null);
  const [attachmentImage, setAttachmentImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const detailsArray = [];
  const [details, setDetails] = useState(detailsArray);
  const titleRef = useRef(null);
  const conditionRef = useRef(null);
  const typeRef = useRef(null);
  const makeRef = useRef(null);
  const modelRef = useRef(null);
  const priceRef = useRef(null);
  const yearRef = useRef(null);
  const driveTypeRef = useRef(null);
  const transmissionRef = useRef(null);
  const fuelTypeRef = useRef(null);
  const mileageRef = useRef(null);
  const engineSizeRef = useRef(null);
  const cylinderRef = useRef(null);
  const colorRef = useRef(null);
  const doorRef = useRef(null);
  const vinRef = useRef(null);
  const availabilityRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleFeaturedChange = (e) => {
    setFeaturedImage(e.target.files[0]);
  };

  const handleAttachmentChange = (e) => {
    setAttachmentImage(e.target.files[0]);
  };

  const handleGalleryChange = (e) => {
    setGalleryImages([...e.target.files]);
  };

  const validateDetails = (details) => {
    const errors = [];

    if (!details.title) errors.push("Title is required.");
    else if (!details.condition) errors.push("Price is required.");
    else if (!details.year) errors.push("Year is required.");

    // Add more validations as needed...

    return errors;
  };

  const SubmitDetail = async () => {
    const formData = new FormData();

    formData.append("carTitle", titleRef.current.value);
    formData.append("carCondition", conditionRef.current.value);
    formData.append("CarType", typeRef.current.value);
    formData.append("carMake", makeRef.current.value);
    formData.append("carModel", modelRef.current.value);
    formData.append("carPrice", priceRef.current.value);
    formData.append("carYear", yearRef.current.value);
    formData.append("carDriveType", driveTypeRef.current.value);
    formData.append("carTransmission", transmissionRef.current.value);
    formData.append("carFuelType", fuelTypeRef.current.value);
    formData.append("carMileage", mileageRef.current.value);
    formData.append("carEngineSize", engineSizeRef.current.value);
    formData.append("carCylinder", cylinderRef.current.value);
    formData.append("carColour", colorRef.current.value);
    formData.append("carDoor", doorRef.current.value);
    formData.append("carVin", vinRef.current.value);
    formData.append("carAvailability", availabilityRef.current.value);
    formData.append("description", descriptionRef.current.value);

    // Images
    if (featuredImage) formData.append("featuredImage", featuredImage);
    if (attachmentImage) formData.append("attachmentImage", attachmentImage);

    galleryImages.forEach((image, index) => {
      formData.append("galleryImages", image); // Don't use index here if you use upload.fields
    });

    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.post(
        "http://localhost:5000/api/cards/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Success" + JSON.stringify(response.data));
      alert("Added Succesfully");

      // Reset refs 
      titleRef.current.value = "";
      typeRef.current.value = "";
      availabilityRef.current.value = "";
      descriptionRef.current.value = "";
      vinRef.current.value = "";
      doorRef.current.value = "";
      colorRef.current.value = "";
      cylinderRef.current.value = "";
      engineSizeRef.current.value = "";
      mileageRef.current.value = "";
      fuelTypeRef.current.value = "";
      transmissionRef.current.value = "";
      driveTypeRef.current.value = "";
      yearRef.current.value = "";
      priceRef.current.value = "";
      modelRef.current.value = "";
      makeRef.current.value = "";

      // Reset file inputs
      document.getElementById("image").value = "";

      // Reset checkboxes
      document
        .querySelectorAll("input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };
  return (
    <div className="w-full flex flex-col mx-auto rounded-md p-3">
      <div className="flex justify-between items-center p-6 mb-4">
        <h1 className="text-3xl font-bold">Add Details</h1>
      </div>
      <div className="form border w-full h-auto p-3 rounded-md flex gap-5">
        <form action="" className="p-6 text-sm text-gray-600 w-full h-auto">
          <div className="w-full">
            <label htmlFor="title" className="w-full">
              <p>
                Listing Title <sup className="text-orange-700">*</sup>
              </p>
              <input
                type="text"
                id="title"
                ref={titleRef}
                className="mt-2 w-full border rounded-md p-2"
                placeholder="Enter Title Here"
              />
            </label>
          </div>
          <div className="w-full flex justify-between flex-wrap my-3">
            <div className="w-[370px] my-3">
              <label htmlFor="title" className="w-full">
                <p>
                  Condition <sup className="text-orange-700">*</sup>
                </p>
                <select
                  id="condition"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select Condition"
                  ref={conditionRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Condition
                  </option>
                  <option
                    value="New"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    New
                  </option>
                  <option
                    value="Old"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Used
                  </option>
                </select>
              </label>
            </div>
            <div className="w-[370px] my-3">
              <label htmlFor="type" className="w-full">
                <p>
                  Type <sup className="text-orange-700">*</sup>
                </p>
                <select
                  id="condition"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select Type"
                  ref={typeRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Condition
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

            {/* Make Input */}
            <div className="w-[370px] my-3">
              <select
                id="make"
                className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                placeholder="Select make"
                ref={makeRef}
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
            </div>

            {/* Model Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="title" className="w-full">
                <p>
                  Model <sup className="text-orange-700">*</sup>
                </p>
                <select
                  id="condition"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select Model"
                  ref={modelRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Model
                  </option>
                  <option
                    value="ATS"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    ATS
                  </option>
                  <option
                    value="CT6"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CT6
                  </option>
                  <option
                    value="CTS"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CTS
                  </option>
                  <option
                    value="Escalade"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Escalade
                  </option>
                  <option
                    value="xt5"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    xt5
                  </option>
                </select>
              </label>
            </div>

            {/*Price Input  */}
            <div className="w-[370px] my-3">
              <label htmlFor="price" className="w-full">
                <p>Price (USD)</p>
                <input
                  type="number"
                  id="price"
                  ref={priceRef}
                  className="mt-2 w-full border rounded-md p-2"
                />
              </label>
            </div>
            <div className="w-[370px] my-3">
              <label htmlFor="year" className="w-full">
                <p>
                  Year <sup className="text-orange-700">*</sup>
                </p>
                <input
                  type="number"
                  id="year"
                  ref={yearRef}
                  className="mt-2 w-full border rounded-md p-2"
                />
              </label>
            </div>

            {/* Drive Type Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="driveType" className="w-full">
                <p>Drive Type</p>
                <select
                  id="driveType"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select drive Type"
                  ref={driveTypeRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Drive Type
                  </option>
                  <option
                    value="2WD"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    2WD
                  </option>
                  <option
                    value="4WD"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    4WD
                  </option>
                  <option
                    value="AW TS PW TV Airbag Navigation"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    AW TS PW TV Airbag Navigation
                  </option>
                  <option
                    value="AWD/4WD"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    AWD/4WD
                  </option>
                  <option
                    value="FRONT WHEEL DRIVE"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    FRONT WHEEL DRIVE
                  </option>
                  <option
                    value="REAR WHEEL DRIVE"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    REAR WHEEL DRIVE
                  </option>
                </select>
              </label>
            </div>

            {/* Transmission Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="transmission" className="w-full">
                <p>Select Transmission</p>
                <select
                  id="transmission"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select transmission"
                  ref={transmissionRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Transmission
                  </option>
                  <option
                    value="AT"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    AT
                  </option>
                  <option
                    value="AUTOMATIC"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    AUTOMATIC
                  </option>
                  <option
                    value="MANUAL"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    AW TS PW TV Airbag Navigation
                  </option>
                  <option
                    value="MT"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    MT
                  </option>
                  <option
                    value="SEMI-AUTOMATIC"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    FRONT WHEEL DRIVE
                  </option>
                </select>
              </label>
            </div>

            {/* Fuel Type Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="fuelType" className="w-full">
                <p>Fuel Type</p>
                <select
                  id="fuelType"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select fuelType"
                  ref={fuelTypeRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Fuel Type
                  </option>
                  <option
                    value="DEISEL"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    DEISEL
                  </option>
                  <option
                    value="ELECTRIC"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    ELECTRIC
                  </option>
                  <option
                    value="GAS"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    GAS
                  </option>
                  <option
                    value="GASOLINE"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    GASOLINE
                  </option>
                  <option
                    value="HYBRID"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    PETROL
                  </option>
                  <option
                    value="PETROL"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    PETROL
                  </option>
                </select>
              </label>
            </div>

            {/* Mileage Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="mileage" className="w-full">
                <p>Mileage</p>
                <input
                  type="number"
                  id="mileage"
                  ref={mileageRef}
                  placeholder="Enter Mileage Here"
                  className="mt-2 w-full border rounded-md p-2"
                />
              </label>
            </div>

            {/* Engine Size Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="engineSize" className="w-full">
                <p>Enter Engine Size</p>
                <input
                  type="number"
                  id="engineSize"
                  ref={engineSizeRef}
                  className="mt-2 w-full border rounded-md p-2"
                />
              </label>
            </div>

            {/* Cylinder Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="cylinder" className="w-full">
                <p>Select Cylinders</p>
                <select
                  id="cylinder"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select cylinder"
                  ref={cylinderRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Fuel Type
                  </option>
                  <option
                    value="4"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    4
                  </option>
                  <option
                    value="6"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    6
                  </option>
                  <option
                    value="8"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    8
                  </option>
                </select>
              </label>
            </div>

            {/* Colours Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="colours" className="w-full">
                <p>Select Colours</p>
                <select
                  id="colours"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select colours"
                  ref={colorRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Colours
                  </option>
                  <option
                    value="Black"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Black
                  </option>
                  <option
                    value="Blue"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Blue
                  </option>
                  <option
                    value="Brown"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Brown
                  </option>
                  <option
                    value="Gold"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Gold
                  </option>
                  <option
                    value="Grey"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Grey
                  </option>
                  <option
                    value="Green"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Green
                  </option>

                  <option
                    value="Orange"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Orange
                  </option>
                  <option
                    value="Pearl white"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Pearl white
                  </option>
                  <option
                    value="Red"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Red
                  </option>
                  <option
                    value="Silver"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Silver
                  </option>
                  <option
                    value="White"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    White
                  </option>
                  <option
                    value="Wine"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Wine
                  </option>
                  <option
                    value="Yellow"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Yellow
                  </option>
                </select>
              </label>
            </div>

            {/* Door Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="door" className="w-full">
                <p>Doors</p>
                <select
                  id="door"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select Doors"
                  ref={doorRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Doors
                  </option>
                  <option
                    value="2 Doors"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    2 Doors
                  </option>
                  <option
                    value="3-Door"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    3-Door
                  </option>
                  <option
                    value="4-Door"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    4-Door
                  </option>
                  <option
                    value="5-Door"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    5-Door
                  </option>
                  <option
                    value="5D"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    5D
                  </option>
                </select>
              </label>
            </div>

            {/* Vin Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="vin" className="w-full">
                <p>Vin</p>
                <input
                  type="text"
                  id="vin"
                  ref={vinRef}
                  className="mt-2 w-full border rounded-md p-2"
                  placeholder="Enter Vin Here"
                />
              </label>
            </div>

            {/* Availabilty Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="avaialability" className="w-full">
                <p>Availability</p>
                <select
                  id="availability"
                  className="appearance-none mt-2 w-full border rounded-md p-2 outline-0 text-gray-400 "
                  placeholder="Select Availability"
                  ref={availabilityRef}
                >
                  <option
                    value=""
                    selected
                    disabled
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                  >
                    Select Availability
                  </option>
                  <option
                    value="Available"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Available
                  </option>
                  <option
                    value="Sold"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Sold
                  </option>
                </select>
              </label>
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="title" className="w-full">
              <p>Description </p>
              <textarea
                id="description"
                ref={descriptionRef}
                className="mt-2 w-full h-[250px] border rounded-md p-2"
              />
            </label>
          </div>
        </form>
      </div>

      <div className="flex justify-between items-center p-6 mb-4">
        <h1 className="text-3xl font-bold">Feature Image</h1>
      </div>

      <div className="imageInpput border text-sm rounded-md w-full h-auto p-10 ">
        <div className="flex flex-col gap-2 space-y-4">
          Upload Featured Image
          <label htmlFor="" className="w-full h-auto flex">
            {/* Custom Button */}
            <button
              type="button"
              className="bg-neutral-300 border border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
            >
              Upload File
            </button>

            {/* Hidden Input */}
            <input
              type="file"
              id="image"
              //  ref={fileInputRef}
              onChange={handleFeaturedChange}
              className="border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
            />
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 mb-4">
        <h1 className="text-3xl font-bold">Gallery</h1>
      </div>

      <div className="imageInpput border text-sm rounded-md w-full h-auto p-10 ">
        <div className="flex flex-col gap-2 space-y-4">
          Upload Gallery Image
          <label htmlFor="" className="w-full h-auto flex">
            <button
              type="file"
              //  onClick={handleButtonClick}
              className="bg-neutral-300 border border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
            >
              Upload File
            </button>

            <input
              type="file"
              id="image"
              multiple
              onChange={handleGalleryChange}
              className="border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center p-6 mb-4">
        <h1 className="text-3xl font-bold">Attachements</h1>
      </div>

      <div className="imageInpput border text-sm rounded-md w-full h-auto p-10 ">
        <div className="flex flex-col gap-2 space-y-4">
          Upload Attachement
          <label htmlFor="" className="w-full h-auto flex">
            <button
              type="button"
              className="bg-neutral-300 border border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
            >
              Upload File
            </button>

            <input
              type="file"
              id="image"
              onChange={handleAttachmentChange}
              className="border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center p-6 mb-4">
        <h1 className="text-3xl font-bold">Features</h1>
      </div>

      <div class="card p-6 flex  border rounded-md ">
        <div class="row flex flex-wrap m-2">
          <div class="card-body p-4">
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="360-degree camera"
                    id="feature-0"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-0')"
                  >
                    360-degree camera
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="A/C"
                    id="feature-1"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-1')"
                  >
                    A/C
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="AB"
                    id="feature-2"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-2')"
                  >
                    AB
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="AB ABS TURBO"
                    id="feature-3"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-3')"
                  >
                    AB ABS TURBO
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="ABS"
                    id="feature-4"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-4')"
                  >
                    ABS
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="ABS Air Conditioner"
                    id="feature-5"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-5')"
                  >
                    ABS Air Conditioner
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="ABS Air Conditioner Double Air-conditioner"
                    id="feature-6"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-6')"
                  >
                    ABS Air Conditioner Double Air-conditioner
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="AC"
                    id="feature-7"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-7')"
                  >
                    AC
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Air Conditioner"
                    id="feature-8"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-8')"
                  >
                    Air Conditioner
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="AIRBAG"
                    id="feature-9"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-9')"
                  >
                    AIRBAG
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Alloy Wheel 20 inch"
                    id="feature-10"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-10')"
                  >
                    Alloy Wheel 20 inch
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Anti-theft Device"
                    id="feature-11"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-11')"
                  >
                    Anti-theft Device
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Anti-theft Device Idling Stop"
                    id="feature-12"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-12')"
                  >
                    Anti-theft Device Idling Stop
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="AW/ PS/ PW /TV Airbag /Driver Seat Airbag /Passenger Seat Airbag/Idling Stop/navigation"
                    id="feature-13"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-13')"
                  >
                    AW/ PS/ PW /TV Airbag /Driver Seat Airbag /Passenger Seat
                    Airbag/Idling Stop/navigation
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Back Camera"
                    id="feature-14"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-14')"
                  >
                    Back Camera
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Blind spot alert"
                    id="feature-15"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-15')"
                  >
                    Blind spot alert
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Bluetooth"
                    id="feature-16"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-16')"
                  >
                    Bluetooth
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Bluetooth Connection"
                    id="feature-17"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-17')"
                  >
                    Bluetooth Connection
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Clean Diesel"
                    id="feature-18"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-18')"
                  >
                    Clean Diesel
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Cooled seats"
                    id="feature-19"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-19')"
                  >
                    Cooled seats
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Double Air-conditioner"
                    id="feature-20"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-20')"
                  >
                    Double Air-conditioner
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Downhill Assist Control"
                    id="feature-21"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-21')"
                  >
                    Downhill Assist Control
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Drive Recorder"
                    id="feature-22"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-22')"
                  >
                    Drive Recorder
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Drive Seat Airbag /Passenger Seat Airbag"
                    id="feature-23"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-23')"
                  >
                    Drive Seat Airbag /Passenger Seat Airbag
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Driver Seat Airbag /Passenger Seat Airbag /Side Airbag"
                    id="feature-24"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-24')"
                  >
                    Driver Seat Airbag /Passenger Seat Airbag /Side Airbag
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Electric rectractable miror"
                    id="feature-25"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-25')"
                  >
                    Electric rectractable miror
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Electric Retractable Mirror"
                    id="feature-26"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-26')"
                  >
                    Electric Retractable Mirror
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Heated seats"
                    id="feature-27"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-27')"
                  >
                    Heated seats
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Idling Stop"
                    id="feature-28"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-28')"
                  >
                    Idling Stop
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="KEYLESS"
                    id="feature-29"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-29')"
                  >
                    KEYLESS
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="KEYLESS ENTRY"
                    id="feature-30"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-30')"
                  >
                    KEYLESS ENTRY
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Keyless start"
                    id="feature-31"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-31')"
                  >
                    Keyless start
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Leather seats"
                    id="feature-32"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-32')"
                  >
                    Leather seats
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="LED headlights"
                    id="feature-33"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-33')"
                  >
                    LED headlights
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Memory seat"
                    id="feature-34"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-34')"
                  >
                    Memory seat
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="NAVIGATION"
                    id="feature-35"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-35')"
                  >
                    NAVIGATION
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Navigation System"
                    id="feature-36"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-36')"
                  >
                    Navigation System
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Power Steering"
                    id="feature-37"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-37')"
                  >
                    Power Steering
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Power Steering Power Window"
                    id="feature-38"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-38')"
                  >
                    Power Steering Power Window
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Power Window"
                    id="feature-39"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-39')"
                  >
                    Power Window
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS"
                    id="feature-40"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-40')"
                  >
                    PS
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS PW AB ABS AC"
                    id="feature-41"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-41')"
                  >
                    PS PW AB ABS AC
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS PW AB ABS AC AW"
                    id="feature-42"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-42')"
                  >
                    PS PW AB ABS AC AW
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS. AC"
                    id="feature-43"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-43')"
                  >
                    PS. AC
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PW"
                    id="feature-44"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-44')"
                  >
                    PW
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Reversing camera"
                    id="feature-45"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-45')"
                  >
                    Reversing camera
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Roof Roll"
                    id="feature-46"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-46')"
                  >
                    Roof Roll
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Side airbags"
                    id="feature-47"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-47')"
                  >
                    Side airbags
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Sound System"
                    id="feature-48"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-48')"
                  >
                    Sound System
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Sun/Moon Roof"
                    id="feature-49"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-49')"
                  >
                    Sun/Moon Roof
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Sun/Moon Roof ABS Air Conditioner"
                    id="feature-50"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-50')"
                  >
                    Sun/Moon Roof ABS Air Conditioner
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Traction Control"
                    id="feature-51"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-51')"
                  >
                    Traction Control
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="USB Input Terminal"
                    id="feature-52"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-52')"
                  >
                    USB Input Terminal
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="USB port"
                    id="feature-53"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-53')"
                  >
                    USB port
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div className="flex justify-between items-center p-6 mb-4">
        <h1 className="text-3xl font-bold">Safety Features</h1>
      </div>

      <div class="card p-6 flex  border rounded-md ">
        <div class="row flex flex-wrap m-2">
          <div class="card-body p-4">
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Navigation System"
                    id="feature-36"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-36')"
                  >
                    Auto Light
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Power Steering"
                    id="feature-37"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-37')"
                  >
                    Automatic High Beam
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Power Steering Power Window"
                    id="feature-38"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-38')"
                  >
                    Backup camera
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Power Window"
                    id="feature-39"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-39')"
                  >
                    Blind-spot warning
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS"
                    id="feature-40"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-40')"
                  >
                    Brake assist
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS PW AB ABS AC"
                    id="feature-41"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-41')"
                  >
                    Clearance Sonar
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS PW AB ABS AC AW"
                    id="feature-42"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-42')"
                  >
                    Collision Damage Reduction System
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PS. AC"
                    id="feature-43"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-43')"
                  >
                    Collision Safety Body
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="PW"
                    id="feature-44"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-44')"
                  >
                    Collision Safety Body Collision Damage Reduction System
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Reversing camera"
                    id="feature-45"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-45')"
                  >
                    ESC
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Roof Roll"
                    id="feature-46"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-46')"
                  >
                    ESC (Electronic Stability Control)
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Side airbags"
                    id="feature-47"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-47')"
                  >
                    ESC (Electronic Stability Control) Collision Safety Body
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Sound System"
                    id="feature-48"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-48')"
                  >
                    ESC (Electronic Stability Control) Collision Safety Body
                    Collision Damage Reduction System
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Sun/Moon Roof"
                    id="feature-49"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-49')"
                  >
                    Forward-collision warning
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Sun/Moon Roof ABS Air Conditioner"
                    id="feature-50"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-50')"
                  >
                    Lane keeping assist
                  </label>
                </div>
              </div>
            </div>
            <div class="row flex flex-wrap m-2">
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="Traction Control"
                    id="feature-51"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-51')"
                  >
                    Parking assist systems
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="USB Input Terminal"
                    id="feature-52"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-52')"
                  >
                    Pedestrian detection
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3 w-[360px] px-3 py-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="selectedFeatures[]"
                    value="USB port"
                    id="feature-53"
                  />
                  <label
                    class="form-check-label"
                    onclick="toggleCheckbox('feature-53')"
                  >
                    Sideview camera
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button w-full flex justify-start items-center p-6">
        <Button text="Add Listing" onClick={SubmitDetail} />
      </div>
    </div>
  );
};

export default AddListingForm;
