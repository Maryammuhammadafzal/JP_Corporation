import React, { useRef, useState } from "react";
import Button from "../../../../../Components/Button/Button";
import axios from "axios";
import { statusFeatures } from "../../../../../Components/StatusFeatures.js";
import { OptionFeatures } from "../../../../../Components/optionFeatures.js";

const GenerateCapLinksForm = () => {
  const [featuredImage, setFeaturedImage] = useState(null);
  const [attachmentImage, setAttachmentImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedStatusFeatures, setSelectedStatusFeatures] = useState([]);
  const [selectedNameOption, setSelectedNameOption] = useState([]);
  const [selectedForwarderNameOption, setSelectedForwarderNameOption] = useState([]);
  const [selectedOptionFeatures, setselectedOptionFeatures] = useState([]);

  const toggleCheckbox = (featureId) => {
    if (selectedStatusFeatures.includes(featureId)) {
      setSelectedStatusFeatures(
        selectedStatusFeatures.filter((id) => id !== featureId)
      );
    } else {
      setSelectedStatusFeatures([...selectedStatusFeatures, featureId]);
    }
  };

  const toggleOptionCheckbox = (featureId) => {
    if (selectedOptionFeatures.includes(featureId)) {
      setselectedOptionFeatures(
        selectedOptionFeatures.filter((id) => id !== featureId)
      );
    } else {
      setselectedOptionFeatures([...selectedOptionFeatures, featureId]);
    }
  };

  const detailsArray = [];
  const [details, setDetails] = useState(detailsArray);
  const carrierNameRef = useRef(null);
  const departureVesselRef = useRef(null);
  const departurePartsOfLandingRef = useRef(null);
  const departureETDRef = useRef(null);
  
  const nameRef = useRef(null);
  const companyNameRef = useRef(null);
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
  let forwarderName = useRef(null);
  let organizationName = null
  
  const handleFeaturedChange = (e) => {
    setFeaturedImage(e.target.files[0]);
  };
  
  const handleAttachmentChange = (e) => {
    setAttachmentImage(e.target.files[0]);
  };
  
  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setGalleryImages(files);
    
    console.log("Selected images: ", files);
  };
  
  const handleNameRadioChange = (e) => {
    organizationName = setSelectedNameOption(e.target.value);
    console.log(e.target.value);
    
  };
  const handleForwarderNameRadioChange = (e) => {
    forwarderName = setSelectedForwarderNameOption(e.target.value);
    
  };
  
  
  
  const validateDetails = (details) => {
    const errors = [];
    
    if (!details.title) errors.push("Title is required.");
    else if (!details.condition) errors.push("Price is required.");
    else if (!details.year) errors.push("Year is required.");
    
    // Add more validations as needed...
    
    return errors;
  };
  
  const GenerateCapLinks = async () => {
    
    const formData = new FormData();
    
    formData.append("carrierName", carrierNameRef.current.value);
    formData.append("departureVessel", departureVesselRef.current.value);
    formData.append("departurePartsOfLanding", departurePartsOfLandingRef.current.value);
    formData.append("departureETD", departureETDRef.current.value);
    
    console.log(formData);
    console.log(carrierNameRef , departureVesselRef , departurePartsOfLandingRef , departureETDRef);
    
    // formData.append("carTitle", nameRef.current.value);
    // formData.append("carCondition", companyNameRef.current.value);
    // formData.append("CarType", typeRef.current.value);
    // formData.append("carMake", makeRef.current.value);
    // formData.append("carModel", modelRef.current.value);
    // formData.append("carPrice", priceRef.current.value);
    // formData.append("carYear", yearRef.current.value);
    // formData.append("carDriveType", driveTypeRef.current.value);
    // formData.append("carTransmission", transmissionRef.current.value);
    // formData.append("carFuelType", fuelTypeRef.current.value);
    // formData.append("carMileage", mileageRef.current.value);
    // formData.append("carEngineSize", engineSizeRef.current.value);
    // formData.append("carCylinder", cylinderRef.current.value);
    // formData.append("carColour", colorRef.current.value);
    // formData.append("carDoor", doorRef.current.value);
    // formData.append("carVin", vinRef.current.value);
    // formData.append("carAvailability", availabilityRef.current.value);
    // formData.append("carDescription", descriptionRef.current.value);
    // formData.append("carAllFeatures", JSON.stringify(selectedStatusFeatures));
    // formData.append(
    //   "carSafetyFeatures",
    //   JSON.stringify(selectedSafetyFeatures)
    // );

    // Images
    // if (featuredImage) formData.append("featuredImage", featuredImage);
    // if (attachmentImage) formData.append("attachmentImage", attachmentImage);

    // galleryImages.forEach((image, index) => {
    //   formData.append("galleryImages", image); // Don't use index here if you use upload.fields
    // });

    // try {
    //   const token = localStorage.getItem("adminToken");
    //   const response = await axios.post(
    //     "http://localhost:5000/api/cards/add",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   console.log("Success" + JSON.stringify(response.data));
    //   alert("Added Succesfully");

    //   // Reset refs
    //   nameRef.current.value = "";
    //   typeRef.current.value = "";
    //   availabilityRef.current.value = "";
    //   descriptionRef.current.value = "";
    //   vinRef.current.value = "";
    //   doorRef.current.value = "";
    //   colorRef.current.value = "";
    //   cylinderRef.current.value = "";
    //   engineSizeRef.current.value = "";
    //   mileageRef.current.value = "";
    //   fuelTypeRef.current.value = "";
    //   transmissionRef.current.value = "";
    //   driveTypeRef.current.value = "";
    //   yearRef.current.value = "";
    //   priceRef.current.value = "";
    //   modelRef.current.value = "";
    //   makeRef.current.value = "";

    //   // Reset file inputs
    //   document.getElementById("image").value = "";

    //   // Reset checkboxes
    //   document
    //     .querySelectorAll("input[type='checkbox']")
    //     .forEach((checkbox) => {
    //       checkbox.checked = false;
    //     });

    //   window.location.href = "/dashboard";
    // } catch (error) {
    //   console.error(error);
    //   alert("Error");
    // }
  };
  return (
    <div className="w-full flex flex-col mx-auto rounded-md p-3">
      <form action="" className="form  w-full h-auto p-3  flex flex-col gap-5">
        <div className="nameDetail w-full h-auto flex justify-center gap-5 flex-col">
          <div className="flex justify-between items-center p-6 ">
            <h1 className="text-3xl font-bold">Add Details</h1>
          </div>

          {/* 1st */}
          <div className="p-6 border-neutral-500 border rounded-md space-y-5 text-sm text-gray-600 w-full h-auto">
            {/* Name */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Select Name</h3>
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <label
                  htmlFor="beForward"
                  className="w-36 gap-3 flex justify-center items-center "
                >
                  <input
                    type="radio"
                    id="beForward"
                    value="Be Forward"
                    checked={selectedNameOption === "Be Forward"}
                    onChange={handleNameRadioChange}
                    className="mt-2 rounded-md p-2"
                    placeholder="Enter beForward Here"
                  />
                  <p>Be Forward</p>
                </label>
                <label
                  htmlFor="jpCorporation"
                  className="w-auto gap-3 flex justify-center items-center"
                >
                  <input
                    type="radio"
                    id="jpCorporation"
                    value="JP Corporation"
                    checked={selectedNameOption === "JP Corporation"}
                    onChange={handleNameRadioChange}
                    className="mt-2 rounded-md p-2"
                    placeholder="Enter jpCorporation Here"
                  />
                  <p>JP Corporation</p>
                </label>
              </div>
            </div>
            <div className="w-fit flex flex-col gap-5 p-3 space-y-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Forwarder Name</h3>
              <div className="w-full h-auto justify-between items-center flex gap-3 ">
                <label
                  htmlFor="Satish"
                  className="w-36 gap-3 flex justify-center items-center"
                >
                  <input
                    type="radio"
                    id="Satish"
                    value="Satish"
                    checked={selectedForwarderNameOption === "Satish"}
                    onChange={handleForwarderNameRadioChange}
                    className="mt-2 border-neutral-500 border rounded-md p-2"
                    placeholder="Enter Satish Here"
                  />
                  <p>Satish</p>
                </label>
                <label
                  htmlFor="Vova"
                  className="w-36 gap-3 flex justify-center items-center"
                >
                  <input
                    type="radio"
                    id="Vova"
                    value="Vova"
                    checked={selectedForwarderNameOption === "Vova"}
                    onChange={handleForwarderNameRadioChange}
                    className="mt-2 border-neutral-500 border rounded-md p-2"
                    placeholder="Enter Vova Here"
                  />
                  <p>Vova</p>
                </label>
                <label
                  htmlFor="Kaytee"
                  className="w-36 gap-3 flex justify-center items-center"
                >
                  <input
                    type="radio"
                    id="Kaytee"
                    value="Kaytee"
                    checked={selectedForwarderNameOption === "Kaytee"}
                    onChange={handleForwarderNameRadioChange}
                    className="mt-2 border-neutral-500 border rounded-md p-2"
                    placeholder="Enter Kaytee Here"
                  />
                  <p>Kaytee</p>
                </label>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col p-3 justify-center space-y-3 items-start">
              <h3 className="text-md font-bold ">Message</h3>
              <textarea
                id="description"
                ref={descriptionRef}
                className="mt-2 w-full h-[150px]  border-neutral-500 border rounded-md p-2"
              />
            </div>
          </div>
        </div>
        {/* 2nd */}
        {/* Status Features */}
        <div className="statusFeatures w-full h-auto flex justify-center gap-5 flex-col">
          <div className="flex justify-between items-center p-6 ">
            <h1 className="text-3xl font-bold">Status</h1>
          </div>
          {/* Status Features */}
          <div className="card p-6 flex  border-neutral-500 border rounded-md ">
            <div className="row flex flex-wrap m-2">
              <div className="card-body  flex flex-wrap">
                {statusFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="col-md-4 mb-5 w-[300px] px-3 py-1"
                  >
                    <div className="form-check flex items-start ">
                      <input
                        className="form-check-input mt-2 mx-2"
                        type="checkbox"
                        name="selectedStatusFeatures[]"
                        value={feature.value}
                        id={feature.id}
                        checked={selectedStatusFeatures.includes(feature.id)}
                        onChange={() => toggleCheckbox(feature.id)}
                      />
                      <div>
                        <label
                          className="form-check-label text-sm font-bold text-gray-700"
                          htmlFor={feature.id}
                          onClick={() => toggleCheckbox(feature.id)}
                        >
                          {feature.label}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3rd */}
        {/* Information Details */}
        <div className="statusFeatures w-full h-auto flex justify-center gap-5 flex-col">
          {/* Heading */}
          <div className="flex justify-between items-center p-6 ">
            <h1 className="text-3xl font-bold">Information</h1>
          </div>
          {/* Content */}
          <div className="p-6 border-neutral-500 border rounded-md space-y-5 text-sm text-gray-600 w-full h-auto">
            {/* first content  */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">
                Shipping Information Section
              </h3>
              {/* first input */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <label
                  htmlFor="CarrierName"
                  className="w-full gap-3 flex flex-col justify-center items-start "
                >
                  <p>Carrier</p>
                  <input
                    type="text"
                    id="CarrierName"
                    ref={carrierNameRef}
                    className=" border-neutral-500 border w-full rounded-md p-3"
                    placeholder=" Carrier Name "
                  />
                </label>
              </div>
            </div>

            {/* 2nd Content  */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Departure Section</h3>
              {/* first input */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <label
                  htmlFor="VesselName"
                  className="w-full gap-3 flex flex-col justify-center items-start "
                >
                  <p>Vessel</p>
                  <input
                    type="text"
                    id="VesselName"
                    ref={departureVesselRef}
                    className=" border-neutral-500 border w-full rounded-md p-3"
                    placeholder=" Vessel Name "
                  />
                </label>
              </div>
              {/* 2nd Inputs */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="PartOfLoading"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Part Of Loading</p>
                    <input
                      type="text"
                      id="PartOfLoading"
                      ref={departurePartsOfLandingRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Part Of Loading"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="ETD(Estimated Time of Departure)"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>ETD (Estimated Time of Departure)</p>
                    <input
                      type="date"
                      id="ETD(Estimated Time of Departure)"
                      ref={departureETDRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" ETD (Estimated Time of Departure)"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* 3rd Content  */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Arrival Section</h3>
              {/* first input */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <label
                  htmlFor="VesselName"
                  className="w-full gap-3 flex flex-col justify-center items-start"
                >
                  <p>Vessel</p>
                  <input
                    type="text"
                    id="VesselName"
                    // ref={organizationNameRef}
                    className=" border-neutral-500 border w-full rounded-md p-3"
                    placeholder=" Vessel Name "
                  />
                </label>
              </div>
              {/* 2nd Inputs */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="PartOfDischarge"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Part Of Discharge</p>
                    <input
                      type="text"
                      id="PartOfDischarge "
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Part Of Discharge  "
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="ETD(Estimated Time of Departure)"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>ETD (Estimated Time of Departure)</p>
                    <input
                      type="date"
                      id="ETD(Estimated Time of Departure)"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" ETD (Estimated Time of Departure)"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* 4th Content */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Document Section</h3>
              {/* first input */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                {/* First Image input */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload B/L
                    <label htmlFor="" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300 border-neutral-500 border  border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* Hidden Input */}
                      <input
                        type="file"
                        id="image"
                        //  ref={fileInputRef}
                        onChange={handleFeaturedChange}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Inspection
                    <label htmlFor="" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300  border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* Hidden Input */}
                      <input
                        type="file"
                        id="image"
                        //  ref={fileInputRef}
                        onChange={handleFeaturedChange}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* second input */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                {/* First Image input */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Export Certificate
                    <label htmlFor="image" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300  border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* File Input */}
                      <input
                        type="file"
                        id="image"
                        //  ref={fileInputRef}
                        onChange={handleFeaturedChange}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload English Export Certificate
                    <label htmlFor="image" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300 border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* Hidden Input */}
                      <input
                        type="file"
                        id="image"
                        //  ref={fileInputRef}
                        onChange={handleFeaturedChange}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>
              </div>
              {/* third input */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                {/* First Image input */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Invoice
                    <label htmlFor="image" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300 border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* Hidden Input */}
                      <input
                        type="file"
                        id="image"
                        //  ref={fileInputRef}
                        onChange={handleFeaturedChange}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    <label
                      htmlFor="Enrollment"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p> Enrollment</p>
                      <input
                        type="text"
                        id="Enrollment"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder="Enrollment"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4th */}
        {/* Document Details */}
        <div className="statusFeatures w-full h-auto flex justify-center gap-5 flex-col">
          {/* Heading */}
          <div className="flex justify-between items-center p-6 ">
            <h1 className="text-3xl font-bold">Documents</h1>
          </div>
          <div className="p-6 border-neutral-500 border rounded-md text-sm text-gray-600 w-full h-auto">
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">
                Document Delivery Address Section
              </h3>

              {/* First Content */}
              <div className="w-full">
                <label htmlFor="documentName" className="w-full">
                  <p>
                    Name<sup className="text-orange-700">*</sup>
                  </p>
                  <input
                    type="text"
                    id="documentName"
                    ref={nameRef}
                    className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                    placeholder="Enter name Here"
                  />
                </label>
              </div>
              {/* second Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="documentAddress"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Address</p>
                    <input
                      type="text"
                      id="documentAddress"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Address"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="documentCity"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>City</p>
                    <input
                      type="text"
                      id="documentCity"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" City"
                    />
                  </label>
                </div>
              </div>

              {/* third Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="documentCountry"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Country</p>
                    <input
                      type="text"
                      id="documentCountry"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Country"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="documentPhoneNumber1"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number1</p>
                    <input
                      type="number"
                      id="documentPhoneNumber1"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number1"
                    />
                  </label>
                </div>
              </div>

              {/* Fourth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="documentPhoneNumber2"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number2</p>
                    <input
                      type="number"
                      id="documentPhoneNumber2"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number2"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="documentPhoneNumber3"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number3</p>
                    <input
                      type="number"
                      id="documentPhoneNumber3"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number3"
                    />
                  </label>
                </div>
              </div>

              {/* Fifth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="FaxNumber"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fax Number</p>
                    <input
                      type="number"
                      id="FaxNumber"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fax Number"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="CellPhoneNumber/Email"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Cell Phone Number/Email</p>
                    <input
                      type="number"
                      id="CellPhoneNumber/Email"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Cell Phone Number/Email"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* 2nd Input Section */}
            <div className="p-3 border-neutral-500  rounded-md text-sm text-gray-600 w-full h-auto">
              <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
                <h3 className="text-md font-bold ">
                  Document Tracking Number Section
                </h3>

                {/* First Content */}
                <div className="w-full">
                  <label htmlFor="TrackingNumber" className="w-full">
                    <p>
                      Tracking Number<sup className="text-orange-700">*</sup>
                    </p>
                    <input
                      type="text"
                      id="TrackingNumber"
                      ref={nameRef}
                      className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                      placeholder="Tracking Number"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* 3rd Input Section */}
            <div className="p-3 border-neutral-500  rounded-md text-sm text-gray-600 w-full h-auto">
              <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
                <h3 className="text-md font-bold ">Document Center Section</h3>

                {/* First Content */}
                <div className="w-full h-auto justify-start items-center flex gap-5 ">
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="Name"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Name</p>
                      <input
                        type="text"
                        id="Name"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Name"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="Address"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Address</p>
                      <input
                        type="text"
                        id="Address"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Address"
                      />
                    </label>
                  </div>
                </div>
                {/* second Content */}
                <div className="w-full h-auto justify-start items-center flex gap-5 ">
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="City"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>City</p>
                      <input
                        type="text"
                        id="City"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" City"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="Country"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Country</p>
                      <input
                        type="text"
                        id="Country"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Country"
                      />
                    </label>
                  </div>
                </div>

                {/* third Content */}
                <div className="w-full h-auto justify-start items-center flex gap-5 ">
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="PhoneNumber1"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Phone Number1</p>
                      <input
                        type="text"
                        id="PhoneNumber1"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Phone Number1"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="PhoneNumber2"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Phone Number2</p>
                      <input
                        type="number"
                        id="PhoneNumber2"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Phone Number2"
                      />
                    </label>
                  </div>
                </div>

                {/* Fourth Content */}
                <div className="w-full h-auto justify-start items-center flex gap-5 ">
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="PhoneNumber3"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Phone Number3</p>
                      <input
                        type="number"
                        id="PhoneNumber3"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Phone Number3"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="Email"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Email</p>
                      <input
                        type="email"
                        id="Email"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Email"
                      />
                    </label>
                  </div>
                </div>

                {/* Fifth Content */}
                <div className="w-full h-auto justify-start items-center flex gap-5 ">
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="Url"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Url</p>
                      <input
                        type="url"
                        id="Url"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Url"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="OtherInformation"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Other Information</p>
                      <input
                        type="number"
                        id="OtherInformation"
                        // ref={organizationNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Other Information"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5th */}
        {/* Consignee Details */}
        <div className="statusFeatures w-full h-auto flex justify-center gap-5 flex-col">
          {/* Heading */}
          <div className="flex justify-between items-center p-6 ">
            <h1 className="text-3xl font-bold">
              Consignee/notify party of your request
            </h1>
          </div>
          <div className="p-6 border-neutral-500 border rounded-md text-sm text-gray-600 w-full h-auto">
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Consignee</h3>

              {/* First Content */}
              <div className="w-full">
                <label htmlFor="name" className="w-full">
                  <p>
                    Name<sup className="text-orange-700">*</sup>
                  </p>
                  <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                    placeholder="Enter name Here"
                  />
                </label>
              </div>
              {/* second Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Address"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Address</p>
                    <input
                      type="text"
                      id="Address"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Address"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="City"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>City</p>
                    <input
                      type="text"
                      id="City"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" City"
                    />
                  </label>
                </div>
              </div>

              {/* third Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Country"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Country</p>
                    <input
                      type="text"
                      id="Country"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Country"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Phone Number1"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number1</p>
                    <input
                      type="number"
                      id="Phone Number1"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number1"
                    />
                  </label>
                </div>
              </div>

              {/* Fourth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Phone Number2"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number2</p>
                    <input
                      type="number"
                      id="Phone Number2"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number2"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Phone Number3"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number3</p>
                    <input
                      type="number"
                      id="Phone Number3"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number3"
                    />
                  </label>
                </div>
              </div>

              {/* Fifth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Fax Number"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fax Number</p>
                    <input
                      type="number"
                      id="Fax Number"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fax Number"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Cell Phone Number/Email"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Cell Phone Number/Email</p>
                    <input
                      type="number"
                      id="Cell Phone Number/Email"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Cell Phone Number/Email"
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* 2nd Inputs */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Consignee</h3>

              {/* First Content */}
              <div className="w-full">
                <label htmlFor="name" className="w-full">
                  <p>
                    Name<sup className="text-orange-700">*</sup>
                  </p>
                  <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                    placeholder="Enter name Here"
                  />
                </label>
              </div>
              {/* second Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Address"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Address</p>
                    <input
                      type="text"
                      id="Address"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Address"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="City"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>City</p>
                    <input
                      type="text"
                      id="City"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" City"
                    />
                  </label>
                </div>
              </div>

              {/* third Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Country"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Country</p>
                    <input
                      type="text"
                      id="Country"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Country"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Phone Number1"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number1</p>
                    <input
                      type="number"
                      id="Phone Number1"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number1"
                    />
                  </label>
                </div>
              </div>

              {/* Fourth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Phone Number2"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number2</p>
                    <input
                      type="number"
                      id="Phone Number2"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number2"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Phone Number3"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number3</p>
                    <input
                      type="number"
                      id="Phone Number3"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number3"
                    />
                  </label>
                </div>
              </div>

              {/* Fifth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Fax Number"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fax Number</p>
                    <input
                      type="number"
                      id="Fax Number"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fax Number"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Cell Phone Number/Email"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Cell Phone Number/Email</p>
                    <input
                      type="number"
                      id="Cell Phone Number/Email"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Cell Phone Number/Email"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6th */}
        {/* Purchased Product */}
        <div className="statusFeatures w-full h-auto flex justify-center gap-5 flex-col">
          {/* Heading */}
          <div className="flex justify-between items-center p-6 ">
            <h1 className="text-3xl font-bold">Purchased Product</h1>
          </div>
          <div className="p-6 border-neutral-500 border rounded-md text-sm text-gray-600 w-full h-auto">
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              {/* First Content */}
              <div className="w-full">
                <label htmlFor="Product Name" className="w-full">
                  <p>
                    Product Name<sup className="text-orange-700">*</sup>
                  </p>
                  <input
                    type="text"
                    id="Product Name"
                    ref={nameRef}
                    className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                    placeholder="Enter Product Name Here"
                  />
                </label>
              </div>
              {/* second Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Reference No"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Reference No</p>
                    <input
                      type="text"
                      id="Reference No"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Reference No"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Mileage"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Mileage</p>
                    <input
                      type="text"
                      id="Mileage"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Mileage"
                    />
                  </label>
                </div>
              </div>

              {/* third Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Model Code"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Model Code</p>
                    <input
                      type="text"
                      id="Model Code"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Model Code"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Registration Year/Month"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Registration Year/Month</p>
                    <input
                      type="text"
                      id="Registration Year/Month"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Registration Year/Month"
                    />
                  </label>
                </div>
              </div>

              {/* Fourth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Manufacture Year/Month"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Manufacture Year/Month</p>
                    <input
                      type="number"
                      id="Manufacture Year/Month"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Manufacture Year/Month"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Model Grade"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Model Grade</p>
                    <input
                      type="text"
                      id="Model Grade"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Model Grade"
                    />
                  </label>
                </div>
              </div>

              {/* Fifth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Chassis #"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Chassis #</p>
                    <input
                      type="text"
                      id="Chassis #"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Chassis #"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Engine Size"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Engine Size</p>
                    <input
                      type="number"
                      id="Engine Size"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Engine Size"
                    />
                  </label>
                </div>
              </div>

              {/* Sixth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Drive"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Drive</p>
                    <input
                      type="text"
                      id="Drive"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Drive"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Ext. Color"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Ext. Color</p>
                    <input
                      type="number"
                      id="Ext. Color"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Ext. Color"
                    />
                  </label>
                </div>
              </div>

              {/* Seventh Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label htmlFor="Steering" className="w-full">
                    <p>
                      Steering <sup className="text-orange-700">*</sup>
                    </p>
                    <select
                      id="Steering"
                      className="appearance-none mt-2 w-full border-neutral-500 border rounded-md p-2 outline-0 text-gray-400 "
                      placeholder="Select Steering"
                      // ref={SteeringRef}
                    >
                      <option
                        value=""
                        selected
                        disabled
                        className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 p-2"
                      >
                        Select Steering
                      </option>
                      <option
                        value="Right"
                        className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500  focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                      >
                        Right
                      </option>
                      <option
                        value="Left"
                        className="appearance-none active:bg-neutral-400 active:text-neutral-500 hover:bg-neutral-400 hover:text-neutral-500 focus:bg-neutral-400 focus:text-neutral-500 text-neutral-800 bg-white p-2"
                      >
                        Left
                      </option>
                    </select>
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label htmlFor="transmission" className="w-full">
                    <p>Select Transmission</p>
                    <select
                      id="transmission"
                      className="appearance-none mt-2 w-full border-neutral-500 border rounded-md p-2 outline-0 text-gray-400 "
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
              </div>
              {/* Eighth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Fuel"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fuel</p>
                    <input
                      type="text"
                      id="Fuel"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fuel"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Seats"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Seats</p>
                    <input
                      type="number"
                      id="Seats"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Seats"
                    />
                  </label>
                </div>
              </div>

              {/* Ninth Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Door"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Door</p>
                    <input
                      type="text"
                      id="Door"
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Door"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="Engine No."
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Engine No.</p>
                    <input
                      type="number"
                      id="Engine No."
                      // ref={organizationNameRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Engine No."
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Products Features */}
            <div className="productFeatures w-full h-auto flex justify-center gap-5 flex-col">
              <div className="flex justify-between items-center p-6 ">
                <h1 className="text-3xl font-bold">Option</h1>
              </div>
              {/* Status Features */}
              <div className="card p-6 flex  border-neutral-500 rounded-md ">
                <div className="row flex flex-wrap m-2">
                  <div className="card-body  flex flex-wrap">
                    {OptionFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className="col-md-4 mb-5 w-[280px] px-3 py-1"
                      >
                        <div className="form-check flex items-start ">
                          <input
                            className="form-check-input mt-2 mx-2"
                            type="checkbox"
                            name="selectedOptionFeatures[]"
                            value={feature.value}
                            id={feature.id}
                            checked={selectedOptionFeatures.includes(
                              feature.id
                            )}
                            onChange={() => toggleOptionCheckbox(feature.id)}
                          />
                          <div>
                            <label
                              className="form-check-label text-sm font-bold text-gray-700"
                              htmlFor={feature.id}
                              onClick={() => toggleOptionCheckbox(feature.id)}
                            >
                              {feature.label}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4th Content */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              {/* first input */}
              <div className="w-full h-auto justify-start items-center flex flex-col gap-5 ">
                {/* First Image input */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Featured Image
                    <label htmlFor="" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300 border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* Hidden Input */}
                      <input
                        type="file"
                        id="image"
                        //  ref={fileInputRef}
                        onChange={handleFeaturedChange}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Image
                    <label htmlFor="image" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300 border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* Hidden Input */}
                      <input
                        type="file"
                        id="image"
                        //  ref={fileInputRef}
                        onChange={handleFeaturedChange}
                        className=" border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="button w-full flex justify-start items-center p-6">
        <Button text="Add Listing" onClick={GenerateCapLinks} />
      </div>
    </div>
  );
};

export default GenerateCapLinksForm;
