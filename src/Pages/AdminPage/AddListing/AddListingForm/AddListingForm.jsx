import React, { useRef, useState } from "react";
import Button from "../../../../Components/Button/Button";
import axios from "axios";
import AllFeatures from "../../../../Components/AllFeatures.js";
import { safetyFeatures } from "../../../../Components/safetyFeatures.js";

const AddListingForm = () => {
  const [featuredImage, setFeaturedImage] = useState(null);
  const [attachmentImage, setAttachmentImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedAllFeatures, setSelectedAllFeatures] = useState([]);
  const [selectedSafetyFeatures, setselectedSafetyFeatures] = useState([]);

  // Handle Features 
  const toggleCheckbox = (featureValue) => {
    if (selectedAllFeatures.includes(featureValue)) {
      setSelectedAllFeatures(
        selectedAllFeatures.filter((value) => value !== featureValue)
      );
    } else {
      setSelectedAllFeatures([...selectedAllFeatures, featureValue]);
    }
  };
  const toggleSafetyCheckbox = (featureValue) => {
    if (selectedSafetyFeatures.includes(featureValue)) {
      setselectedSafetyFeatures(
        selectedSafetyFeatures.filter((value) => value !== featureValue)
      );
    } else {
      setselectedSafetyFeatures([...selectedSafetyFeatures, featureValue]);
    }
  };

  // Handle Input Reference
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

  // Handle Images
  const handleFeaturedChange = (e) => {
    setFeaturedImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleAttachmentChange = (e) => {
    setAttachmentImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleGalleryChange = (e) => {
    setGalleryImages([...e.target.files]);
  };

// Submit Listing Form
  const SubmitDetail = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // All Inputs
    formData.append("carTitle", titleRef.current.value);
    formData.append("carCondition", conditionRef.current.value);
    formData.append("carType", typeRef.current.value);
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
    formData.append("carDescription", descriptionRef.current.value);
    formData.append("carAllFeatures", JSON.stringify(selectedAllFeatures));
    formData.append(
      "carSafetyFeatures",
      JSON.stringify(selectedSafetyFeatures)
    );
    // Images
    formData.append("featuredImage", featuredImage);
    formData.append("attachmentImage", attachmentImage);

    for (let i = 0; i < galleryImages.length; i++) {
      formData.append("galleryImages", galleryImages[i]);
    }

    for (let pairs of formData.entries()) {
      console.log(pairs[0], pairs[1]);
    }

    // Post Api Call
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.post(
        "http://localhost:5000/api/cards/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
      document.getElementById("featuredImage").value = "";
      document.getElementById("galleryImages").value = "";
      document.getElementById("attachmentImage").value = "";

      // Reset checkboxes
      document
        .querySelectorAll("input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.checked = false;
        });

        // Redirect to dashboard
      window.location.href = "/dashboard";

    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };
  return (
    <div className="w-full flex flex-col mx-auto rounded-md p-3">
      {/* Add Listing Heading */}
      <div className="flex justify-between items-center p-6 mb-4">
        <h1 className="text-3xl font-bold">Add Details</h1>
      </div>

      {/* Add Listing Form */}
      <form
        onSubmit={SubmitDetail}
        className="form w-full h-auto p-3 flex flex-col gap-5"
      >
        <div className="p-6 border rounded-md text-sm text-gray-600 w-full h-auto">
          {/* Title Input */}
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
            {/* Condition Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="condition" className="w-full">
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
            {/* Type Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="type" className="w-full">
                <p>
                  Type <sup className="text-orange-700">*</sup>
                </p>
                <select
                  id="type"
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
                    Select Type
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
              <label htmlFor="make" className="w-full">
                <p>Make</p>
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
                    value="AUDI"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    AUDI
                  </option>
                  <option
                    value="BENTLEY"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    BENTLEY
                  </option>
                  <option
                    value="BMW"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    BMW
                  </option>
                  <option
                    value="CADILLAC"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CADILLAC
                  </option>
                  <option
                    value="CHEVROLET"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CHEVROLET
                  </option>
                  <option
                    value="FARRARI"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    FARRARI
                  </option>
                  <option
                    value="FORD"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    FORD
                  </option>
                  <option
                    value="HINO"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    HINO
                  </option>
                  <option
                    value="HONDA"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    HONDA
                  </option>
                  <option
                    value="ISUZU"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    ISUZU
                  </option>
                  <option
                    value="LEXUS"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    LEXUS
                  </option>
                  <option
                    value="MAZDA"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    MAZDA
                  </option>
                  <option
                    value="MERCEDES-BENZ"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    MERCEDES-BENZ
                  </option>
                  <option
                    value="MISTUBISHI"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    MISTUBISHI
                  </option>
                  <option
                    value="NISSAN"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    NISSAN
                  </option>
                  <option
                    value="PORCH"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    PORCH
                  </option>
                  <option
                    value="SUBARO"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    SUBARO
                  </option>
                  <option
                    value="SUZUKI"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    SUZUKI
                  </option>
                  <option
                    value="TOYOTA"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    TOYOTA
                  </option>
                </select>
              </label>
            </div>

            {/* Model Input */}
            <div className="w-[370px] my-3">
              <label htmlFor="model" className="w-full">
                <p>Model</p>
                <select
                  id="model"
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
                    value="ALLION"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    ALLION
                  </option>
                  <option
                    value="ALPHARD"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    ALPHARD
                  </option>
                  <option
                    value="IMPREZA"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    IMPREZA
                  </option>
                  <option
                    value="XV"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    XV
                  </option>
                  <option
                    value="TREZIA"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    TREZIA
                  </option>

                  <option
                    value="CAMRY"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CAMRY
                  </option>
                  <option
                    value="CHR"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CHR
                  </option>
                  <option
                    value="COASTER"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    COASTER
                  </option>
                  <option
                    value="COROLLA AXIO"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    COROLLA AXIO
                  </option>
                  <option
                    value="COROOLA FIELDER"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    COROLLA FIELDER
                  </option>
                  <option
                    value="CROWN"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CROWN
                  </option>
                  <option
                    value="HARRIER"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    HARRIER
                  </option>
                  <option
                    value="HIAZCE VAN"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    HIAZCE VAN
                  </option>
                  <option
                    value="HILUX"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    HILUX
                  </option>
                  <option
                    value="LAND CRUISER"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    LAND CRUISER
                  </option>
                  <option
                    value="NOAH"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    NOAH
                  </option>
                  <option
                    value="PREMIO"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    PREMIO
                  </option>
                  <option
                    value="PROBOX"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    PROBOX
                  </option>
                  <option
                    value="SUCCEED"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    SUCCEED
                  </option>
                  <option
                    value="VOXY"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    VOXY
                  </option>
                  <option
                    value="RACTICS"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    RACTICS
                  </option>
                  <option
                    value="PORTE FTV"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    PORTE FTV
                  </option>
                  <option
                    value="HIACE VAN"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    HIACE VAN
                  </option>
                  <option
                    value="MARK X"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    MARK X
                  </option>
                  <option
                    value="VITZ F"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    VITZ F
                  </option>
                  <option
                    value="RAV 4"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    RAV 4
                  </option>
                  <option
                    value="SR-V"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    SR-V
                  </option>
                  <option
                    value="FIT"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    FIT
                  </option>
                  <option
                    value="VEZEL"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    VEZEL
                  </option>
                  <option
                    value="CRV"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CRV
                  </option>
                  <option
                    value="VEZEL Z"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    VEZEL Z
                  </option>
                  <option
                    value="BONGO VAN"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    BONGO VAN
                  </option>
                  <option
                    value="CX-5"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    CX-5
                  </option>
                  <option
                    value="DEMIO"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    DEMIO
                  </option>
                  <option
                    value="TITAN 3T"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    TITAN 3T
                  </option>
                  <option
                    value="FAMILIA"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    FAMILIA
                  </option>
                  <option
                    value="AD"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    AD
                  </option>
                  <option
                    value="JUKE"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    JUKE
                  </option>
                  <option
                    value="NV200 VANETTE VAN"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    NV200 VANETTE VAN
                  </option>
                  <option
                    value="VY12-253667"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    VY12-253667
                  </option>
                  <option
                    value="X-TRAIL"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    X-TRAIL
                  </option>
                  <option
                    value="YF15-601990"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    YF15-601990
                  </option>
                  <option
                    value="GT-R"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    GT-R
                  </option>
                  <option
                    value="SERENA"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    SERENA
                  </option>
                  <option
                    value="A3"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    A3
                  </option>
                  <option
                    value="A4"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    A4
                  </option>
                  <option
                    value="A5"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    A5
                  </option>
                  <option
                    value="A6"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    A6
                  </option>
                  <option
                    value="A7"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    A7
                  </option>
                  <option
                    value="A8"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    A8
                  </option>
                  <option
                    value="e-tron"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    e-tron
                  </option>
                  <option
                    value="Q2"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Q2
                  </option>
                  <option
                    value="Q3"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Q3
                  </option>
                  <option
                    value="Q5"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Q5
                  </option>
                  <option
                    value="Q7"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Q7
                  </option>
                  <option
                    value="Q8"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    Q8
                  </option>
                  <option
                    value="TT"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    TT
                  </option>
                  <option
                    value="RX"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    RX
                  </option>
                  <option
                    value="RX200"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    RX200
                  </option>
                  <option
                    value="LX570"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    LX570
                  </option>
                  <option
                    value="IS250 VERSION S"
                    className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                  >
                    IS250 VERSION S
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
              <label htmlFor="availability" className="w-full">
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
          {/* Description */}
          <div className="w-full">
            <label htmlFor="description" className="w-full">
              <p>Description </p>
              <textarea
                id="description"
                ref={descriptionRef}
                className="mt-2 w-full h-[250px] border rounded-md p-2"
              />
            </label>
          </div>
        </div>

        {/* Featured Image */}
        <div className="flex justify-between items-center p-6 mb-4">
          <h1 className="text-3xl font-bold">Feature Image</h1>
        </div>
        <div className="imageInpput border text-sm rounded-md w-full h-auto p-10 ">
          <div className="flex flex-col gap-2 space-y-4">
            Upload Featured Image
            <label htmlFor="featuredImage" className="w-full h-auto flex">
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
                id="featuredImage"
                accept="image/*"
                onChange={handleFeaturedChange}
                className="border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
              />
            </label>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="flex justify-between items-center p-6 mb-4">
          <h1 className="text-3xl font-bold">Gallery</h1>
        </div>
        <div className="imageInpput border text-sm rounded-md w-full h-auto p-10 ">
          <div className="flex flex-col gap-2 space-y-4">
            Upload Gallery Image
            <label htmlFor="galleryImages" className="w-full h-auto flex">
              <button
                type="file"
                className="bg-neutral-300 border border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
              >
                Upload File
              </button>

              <input
                type="file"
                id="galleryImages"
                multiple
                onChange={handleGalleryChange}
                className="border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
              />
            </label>
          </div>
        </div>

        {/* Attachment Image */}
        <div className="flex justify-between items-center p-6 mb-4">
          <h1 className="text-3xl font-bold">Attachements</h1>
        </div>
        <div className="imageInpput border text-sm rounded-md w-full h-auto p-10 ">
          <div className="flex flex-col gap-2 space-y-4">
            Upload Attachement
            <label htmlFor="attachmentImage" className="w-full h-auto flex">
              <button
                type="button"
                className="bg-neutral-300 border border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
              >
                Upload File
              </button>

              <input
                type="file"
                id="attachmentImage"
                onChange={handleAttachmentChange}
                className="border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
              />
            </label>
          </div>
        </div>

        {/* All Features */}
        <div className="flex justify-between items-center p-6 mb-4">
          <h1 className="text-3xl font-bold">Features</h1>
        </div>
        <div className="card p-6 flex  border rounded-md ">
          <div className="row flex flex-wrap m-2">
            <div className="card-body p-4 flex flex-wrap">
              {AllFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="col-md-4 mb-3 w-[360px] px-3 py-1"
                >
                  <div className="form-check">
                    <input
                      className="form-check-input mx-2"
                      type="checkbox"
                      name="selectedAllFeatures[]"
                      value={feature.value}
                      id={feature.value}
                      checked={selectedAllFeatures.includes(feature.value)}
                      onChange={() => toggleCheckbox(feature.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={feature.value}
                      onClick={() => toggleCheckbox(feature.value)}
                    >
                      {feature.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="flex justify-between items-center p-6 mb-4">
          <h1 className="text-3xl font-bold">Safety Features</h1>
        </div>
        <div className="card p-6 flex  border rounded-md ">
          <div className="row flex flex-wrap m-2">
            <div className="card-body p-4 flex flex-wrap">
              {safetyFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="col-md-4 mb-3 w-[360px] px-3 py-1"
                >
                  <div className="form-check">
                    <input
                      className="form-check-input mx-2"
                      type="checkbox"
                      name="selectedSafetyFeatures[]"
                      value={feature.value}
                      id={feature.value}
                      checked={selectedSafetyFeatures.includes(feature.value)}
                      onChange={() => toggleSafetyCheckbox(feature.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={feature.value}
                      onClick={() => toggleSafetyCheckbox(feature.value)}
                    >
                      {feature.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Listing Button */}
        <div className="button w-full flex justify-start items-center p-6">
          <Button text="Add Listing" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;
