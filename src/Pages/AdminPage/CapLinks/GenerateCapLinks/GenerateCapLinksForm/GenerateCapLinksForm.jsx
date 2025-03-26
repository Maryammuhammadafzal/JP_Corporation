import React, { useRef, useState } from "react";
import Button from "../../../../../Components/Button/Button";
import axios from "axios";
import { statusFeatures } from "../../../../../Components/StatusFeatures.js";
import { OptionFeatures } from "../../../../../Components/optionFeatures.js";

const GenerateCapLinksForm = () => {
  const [productFeatureImage, setproductFeatureImage] = useState(null);
  const [productImage, setproductImage] = useState(null);
  const [blImage, setBLImage] = useState(null);
  const [certificateImage, setCertificateImage] = useState(null);
  const [invoiceImage, setInvoiceImage] = useState(null);
  const [englishCertificateImage, setEnglishCerticateImage] = useState(null);
  const [inspectionImage, setInspectionImage] = useState(null);
  const [selectedStatusFeatures, setSelectedStatusFeatures] = useState([]);
  const [selectedNameOption, setSelectedNameOption] = useState([]);
  const [selectedForwarderNameOption, setSelectedForwarderNameOption] = useState([]);
  const [selectedOptionFeatures, setselectedOptionFeatures] = useState([]);
 

  // Toggle Status CheckBox Function
  const toggleCheckbox = (featureId) => {
    if (selectedStatusFeatures.includes(featureId)) {
      setSelectedStatusFeatures(
        selectedStatusFeatures.filter((id) => id !== featureId)
      );
    } else {
      setSelectedStatusFeatures([...selectedStatusFeatures, featureId]);
    }
  };

   // Toggle Option CheckBox Function
  const toggleOptionCheckbox = (featureId) => {
    if (selectedOptionFeatures.includes(featureId)) {
      setselectedOptionFeatures(
        selectedOptionFeatures.filter((id) => id !== featureId)
      );
    } else {
      setselectedOptionFeatures([...selectedOptionFeatures, featureId]);
    }
  };


  // Refrence Object
  const refs = {
    departure: {
        // Departure Ref
  carrierNameRef: useRef(null),
  departureVesselRef: useRef(null),
  departurePartsOfLandingRef: useRef(null),
  departureETDRef: useRef(null),

    },
    arrival: {
      arrivalVesselRef: useRef(null),
      ArrivalPartOfDischargeRef: useRef(null),
      arrivalETDRef: useRef(null),
    },
    document: {
      documentNameRef: useRef(null),
      documentAddressRef: useRef(null),
      documentCityRef: useRef(null),
      documentCountryRef: useRef(null),
      documentFaxNumberRef: useRef(null),
      documentTrackingNumberRef: useRef(null),
      documentPhoneNumber1Ref: useRef(null),
      documentPhoneNumber2Ref: useRef(null),
      documentPhoneNumber3Ref: useRef(null),
      documentCellPhoneNumberOREmailRef: useRef(null),
      documentenrollementRef: useRef(null),
    },
    documentCenter: {
      documentCenterNameRef: useRef(null),
      documentCenterAddressRef: useRef(null),
      documentCenterCityRef: useRef(null),
      documentCenterCountryRef: useRef(null),
      documentCenterPhoneNumber1Ref: useRef(null),
      documentCenterPhoneNumber2Ref: useRef(null),
      documentCenterPhoneNumber3Ref: useRef(null),
      documentCenterEmailRef: useRef(null),
      documentCenterUrlRef: useRef(null),
      documentCenterOtherInformationRef: useRef(null),
    },
    consignee: {
      consigneeNameRef: useRef(null),
  consigneeCityRef: useRef(null),
  consigneeAddressRef: useRef(null),
  consigneeCountryRef: useRef(null),
  consigneeFaxNumberRef: useRef(null),
  consigneePhoneNumber1Ref: useRef(null),
  consigneePhoneNumber2Ref: useRef(null),
  consigneePhoneNumber3Ref: useRef(null),
  consigneeCellPhoneNumberOREmailRef: useRef(null),


    },
    notifyParty: {
      notifyPartyNameRef: useRef(null),
  notifyPartyCityRef: useRef(null),
  notifyPartyCountryRef: useRef(null),
  notifyPartyAddressRef: useRef(null),
  notifyPartyChassisRef: useRef(null),
  notifyPartyDoorRef: useRef(null),
  notifyPartytransmissionRef: useRef(null),
  notifyPartySteeringRef: useRef(null),
  notifyPartySeatsRef: useRef(null),
  notifyPartyRegistrationYearORMonthRef: useRef(null),
  notifyPartyCellPhoneNumberOREmailRef: useRef(null),
  notifyPartyReferenceNoRef: useRef(null),
  notifyPartyEngineNoRef: useRef(null),
  notifyPartyDriveRef: useRef(null),
  notifyPartyEngineSizeRef: useRef(null),
  notifyPartyExtColorRef: useRef(null),
  notifyPartyFuelRef: useRef(null),
  notifyPartyFaxNumberRef: useRef(null),
  notifyPartyMileageRef: useRef(null),
  notifyPartyModelCodeRef: useRef(null),
  notifyPartyModelGradeRef: useRef(null),
  notifyPartyPhoneNumber1Ref: useRef(null),
  notifyPartyPhoneNumber2Ref: useRef(null),
  notifyPartyPhoneNumber3Ref: useRef(null),
  notifyPartyProductNameRef: useRef(null),
  manufactureYearORMonthRef: useRef(null),
    },
    misc: {
      descriptionRef: useRef(null),
    },
  };
  
  // File handlers
  const handleProductionFeaturedImageChange = (e) => {
    setproductFeatureImage(e.target.files[0]);    
  };
  
  const handleProductImageChange = (e) => {
    setproductImage(e.target.files[0]);
  };
  
  const handleBLFileChange = (e) => {
    setBLImage(e.target.files[0]);
    
  };
  
  const handleCertificateChange = (e) => {
    setCertificateImage(e.target.files[0]);
  };
  
  const handleEnglishCertificateChange = (e) => {
    setEnglishCerticateImage(e.target.files[0]);
  };
  
  const handleInvoiceChange = (e) => {
    setInvoiceImage(e.target.files[0]);
  };
  const handleInspectionFileChange = (e) => {
    setInspectionImage(e.target.files[0]);
  };

  // Radio Button Function
  const handleNameRadioChange = (e) => {
  setSelectedNameOption(e.target.value);
 
  };
  const handleForwarderNameRadioChange = (e) => {
     setSelectedForwarderNameOption(e.target.value);
    
  };
  
  // Submit All Deatails Function
  const GenerateCapLinks = async (e) => {
    e.preventDefault();
    console.log(refs.departure.carrierNameRef.current.value);
    
    const formData = new FormData();

  // Extract text values
  Object.keys(refs).forEach((key) => {
   let keys = refs[key]

   Object.keys(keys).forEach((innerKey) => {
    let refObject = keys[innerKey]; 

    if (refObject && refObject.current) {
      formData.append(innerKey, refObject.current.value);
    } else {
      console.warn(`Ref not found for: refs.${key}.${innerKey}`);
    }
   })
  });
  
    
      // Handle file inputs separately
        formData.append("productFeatureImageRef", productFeatureImage);
        formData.append("productImageRef", productImage);
        formData.append("bLFileRef", blImage);
        formData.append("certificateFileRef", certificateImage);
        formData.append("englishCertificateFileRef", englishCertificateImage);
        formData.append("invoiceFileRef", invoiceImage);
        formData.append("inspectionFileRef", inspectionImage);
  
  
    formData.append("statusFeatures", selectedStatusFeatures);
    formData.append("optionFeatures", selectedOptionFeatures);
    formData.append( "companyName",  selectedNameOption );
    formData.append( "forwarderName",  selectedForwarderNameOption);
try {
    const token = localStorage.getItem("adminToken");
  if (!token) {
    alert("Admin token missing!");
    return;
  }

  const response = await axios.post(
    "http://localhost:5000/api/capLinks/add",
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("Success:", response.data);
  alert("Added Successfully");

      // Extract text values
      Object.keys(refs).forEach((key) => {
        let keys = refs[key];
      
        Object.keys(keys).forEach((innerKey) => {
          let refObject = keys[innerKey];
      
          if (refObject && refObject.current) {
            refObject.current.value = "";
          } else {
            console.warn(`Ref not found for: refs.${key}.${innerKey}`);
          }
        });
      });

    //   // Reset file inputs
    //   document.getElementById("image").value = "";

      // Reset checkboxes
      document
        .querySelectorAll("input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
      // Reset radio
      document
        .querySelectorAll("input[type='radio']")
        .forEach((checkbox) => {
          checkbox.checked = false;
        });

      window.location.href = "/dashboard/cap-links";
    } catch (error) {
      console.error(error);
      alert("Error");
    }
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
                    onChange={(e) => handleNameRadioChange(e)}
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
                    onChange={(e) => handleNameRadioChange(e)}
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
                    onChange={(e) => handleForwarderNameRadioChange(e)}
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
                    onChange={(e) => handleForwarderNameRadioChange(e)}
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
                    onChange={(e) => handleForwarderNameRadioChange(e)}
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
                ref={refs.misc.descriptionRef}
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
                    ref={refs.departure.carrierNameRef}
                    className=" border-neutral-500 border w-full rounded-md p-3"
                    placeholder=" Carrier Name "
                  />
                </label>
              </div>
            </div>

            {/* 2nd Content  */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold">Departure Section</h3>
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
                    ref={refs.departure.departureVesselRef}
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
                      ref={refs.departure.departurePartsOfLandingRef}
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
                      ref={refs.departure.departureETDRef}
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
                    ref={refs.arrival.arrivalVesselRef}
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
                      ref={refs.arrival.ArrivalPartOfDischargeRef}
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
                      ref={refs.arrival.arrivalETDRef}
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
                    <label htmlFor="B/L" className="w-full h-auto flex">
                      {/* Custom Button */}
                      <button
                        type="button"
                        className="bg-neutral-300 border-neutral-500 border  border-r-0 hover:bg-neutral-400 w-[120px] p-3  rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
                      >
                        Upload File
                      </button>

                      {/* File Input */}
                      <input
                        type="file"
                        id="B/L"
                        onChange={(e) => handleBLFileChange(e)}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Inspection
                    <label htmlFor="inspection" className="w-full h-auto flex">
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
                        id="inspection"
                        onChange={(e) => handleInspectionFileChange(e)}
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
                    <label htmlFor="certificate" className="w-full h-auto flex">
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
                        id="certificate"
                        onChange={(e) => handleCertificateChange(e)}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload English Export Certificate
                    <label htmlFor="englishCertificate" className="w-full h-auto flex">
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
                        id="englishCertificate"
                        onChange={(e) => handleEnglishCertificateChange(e)}
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
                    <label htmlFor="invoice" className="w-full h-auto flex">
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
                        id="invoice"
                        onChange={(e) => handleInvoiceChange(e)}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    <label
                      htmlFor="Enrollement"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p> Enrollment</p>
                      <input
                        type="text"
                        id="Enrollement"
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder="Enrollment"
                        ref={refs.document.documentenrollementRef}
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
                    ref={refs.document.documentNameRef}
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
                      ref={refs.document.documentAddressRef}
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
                      ref={refs.document.documentCityRef}
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
                      ref={refs.document.documentCountryRef}
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
                      ref={refs.document.documentPhoneNumber1Ref}
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
                      ref={refs.document.documentPhoneNumber2Ref}
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
                      ref={refs.document.documentPhoneNumber3Ref}
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
                    htmlFor="documentFaxNumber"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fax Number</p>
                    <input
                      type="number"
                      id="documentFaxNumber"
                      ref={refs.document.documentFaxNumberRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fax Number"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="documentCellPhoneNumber/Email"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Cell Phone Number/Email</p>
                    <input
                      type="number"
                      id="documentCellPhoneNumber/Email"
                      ref={refs.document.documentCellPhoneNumberOREmailRef}
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
                  <label htmlFor="documentTrackingNumber" className="w-full">
                    <p>
                      Tracking Number<sup className="text-orange-700">*</sup>
                    </p>
                    <input
                      type="text"
                      id="documentTrackingNumber"
                      ref={refs.document.documentTrackingNumberRef}
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
                      htmlFor="documentCenterName"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Name</p>
                      <input
                        type="text"
                        id="documentCenterName"
                        ref={refs.documentCenter.documentCenterNameRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Name"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="documentCenterAddress"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Address</p>
                      <input
                        type="text"
                        id="documentCenterAddress"
                        ref={refs.documentCenter.documentCenterAddressRef}
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
                      htmlFor="documentCenterCity"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>City</p>
                      <input
                        type="text"
                        id="documentCenterCity"
                        ref={refs.documentCenter.documentCenterCityRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" City"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="documentCenterCountry"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Country</p>
                      <input
                        type="text"
                        id="documentCenterCountry"
                        ref={refs.documentCenter.documentCenterCountryRef}
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
                      htmlFor="documentCenterPhoneNumber1"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Phone Number1</p>
                      <input
                        type="text"
                        id="documentCenterPhoneNumber1"
                        ref={refs.documentCenter.documentCenterPhoneNumber1Ref}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Phone Number1"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="documentCenterPhoneNumber2"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Phone Number2</p>
                      <input
                        type="number"
                        id="documentCenterPhoneNumber2"
                        ref={refs.documentCenter.documentCenterPhoneNumber2Ref}
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
                      htmlFor="documentCenterPhoneNumber3"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Phone Number3</p>
                      <input
                        type="number"
                        id="documentCenterPhoneNumber3"
                        ref={refs.documentCenter.documentCenterPhoneNumber3Ref}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Phone Number3"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="documentCenterEmail"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Email</p>
                      <input
                        type="email"
                        id="documentCenterEmail"
                        ref={refs.documentCenter.documentCenterEmailRef}
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
                      htmlFor="documentCenterUrl"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Url</p>
                      <input
                        type="url"
                        id="documentCenterUrl"
                        ref={refs.documentCenter.documentCenterUrlRef}
                        className=" border-neutral-500 border w-full rounded-md p-3"
                        placeholder=" Url"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full gap-2 h-auto">
                    <label
                      htmlFor="documentCenterOtherInformation"
                      className="w-full gap-3 flex flex-col justify-center items-start "
                    >
                      <p>Other Information</p>
                      <input
                        type="number"
                        id="documentCenterOtherInformation"
                        ref={refs.documentCenter.documentCenterOtherInformationRef}
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
                <label htmlFor="consigneeName" className="w-full">
                  <p>
                    Name<sup className="text-orange-700">*</sup>
                  </p>
                  <input
                    type="text"
                    id="consigneeName"
                    ref={refs.consignee.consigneeNameRef}
                    className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                    placeholder="Enter name Here"
                  />
                </label>
              </div>
              {/* second Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="consigneeAddress"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Address</p>
                    <input
                      type="text"
                      id="consigneeAddress"
                      ref={refs.consignee.consigneeAddressRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Address"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="consigneeCity"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>City</p>
                    <input
                      type="text"
                      id="consigneeCity"
                      ref={refs.consignee.consigneeCityRef}
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
                    htmlFor="consigneeCountry"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Country</p>
                    <input
                      type="text"
                      id="consigneeCountry"
                      ref={refs.consignee.consigneeCountryRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Country"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="consigneePhoneNumber1"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number1</p>
                    <input
                      type="number"
                      id="consigneePhoneNumber1"
                      ref={refs.consignee.consigneePhoneNumber1Ref}
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
                    htmlFor="consigneePhoneNumber2"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number2</p>
                    <input
                      type="number"
                      id="consigneePhoneNumber2"
                      ref={refs.consignee.consigneePhoneNumber2Ref}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number2"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="consigneePhoneNumber3"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number3</p>
                    <input
                      type="number"
                      id="consigneePhoneNumber3"
                      ref={refs.consignee.consigneePhoneNumber3Ref}
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
                    htmlFor="consigneeFaxNumber"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fax Number</p>
                    <input
                      type="number"
                      id="consigneeFaxNumber"
                      ref={refs.consignee.consigneeFaxNumberRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fax Number"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="consigneeCellPhoneNumber/Email"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Cell Phone Number/Email</p>
                    <input
                      type="number"
                      id="consigneeCellPhoneNumber/Email"
                      ref={refs.consignee.consigneeCellPhoneNumberOREmailRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Cell Phone Number/Email"
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* 2nd Inputs */}
            <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
              <h3 className="text-md font-bold ">Notify Party</h3>

              {/* First Content */}
              <div className="w-full">
                <label htmlFor="notifyPartyName" className="w-full">
                  <p>
                    Name<sup className="text-orange-700">*</sup>
                  </p>
                  <input
                    type="text"
                    id="notifyPartyName"
                    ref={refs.notifyParty.notifyPartyNameRef}
                    className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                    placeholder="Enter name Here"
                  />
                </label>
              </div>
              {/* second Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyAddress"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Address</p>
                    <input
                      type="text"
                      id="notifyPartyAddress"
                      ref={refs.notifyParty.notifyPartyAddressRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Address"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyCity"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>City</p>
                    <input
                      type="text"
                      id="notifyPartyCity"
                      ref={refs.notifyParty.notifyPartyCityRef}
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
                    htmlFor="notifyPartyCountry"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Country</p>
                    <input
                      type="text"
                      id="notifyPartyCountry"
                      ref={refs.notifyParty.notifyPartyCountryRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Country"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyPhoneNumber1"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number1</p>
                    <input
                      type="number"
                      id="notifyPartyPhoneNumber1"
                      ref={refs.notifyParty.notifyPartyPhoneNumber1Ref}
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
                    htmlFor="notifyPartyPhoneNumber2"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number2</p>
                    <input
                      type="number"
                      id="notifyPartyPhoneNumber2"
                      ref={refs.notifyParty.notifyPartyPhoneNumber2Ref}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Phone Number2"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyPhoneNumber3"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Phone Number3</p>
                    <input
                      type="number"
                      id="notifyPartyPhoneNumber3"
                      ref={refs.notifyParty.notifyPartyPhoneNumber3Ref}
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
                    htmlFor="notifyPartyFaxNumber"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fax Number</p>
                    <input
                      type="number"
                      id="notifyPartyFaxNumber"
                      ref={refs.notifyParty.notifyPartyFaxNumberRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fax Number"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyCellPhoneNumber/Email"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Cell Phone Number/Email</p>
                    <input
                      type="number"
                      id="notifyPartyCellPhoneNumber/Email"
                      ref={refs.notifyParty.notifyPartyCellPhoneNumberOREmailRef}
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
                <label htmlFor="notifyPartyProductName" className="w-full">
                  <p>
                    Product Name<sup className="text-orange-700">*</sup>
                  </p>
                  <input
                    type="text"
                    id="notifyPartyProductName"
                    ref={refs.notifyParty.notifyPartyProductNameRef}
                    className="mt-2 w-full border-neutral-500 border rounded-md p-2"
                    placeholder="Enter Product Name Here"
                  />
                </label>
              </div>
              {/* second Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyReferenceNo"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Reference No</p>
                    <input
                      type="text"
                      id="notifyPartyReferenceNo"
                      ref={refs.notifyParty.notifyPartyReferenceNoRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Reference No"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyMileage"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Mileage</p>
                    <input
                      type="text"
                      id="notifyPartyMileage"
                      ref={refs.notifyParty.notifyPartyMileageRef}
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
                    htmlFor="notifyPartyModelCode"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Model Code</p>
                    <input
                      type="text"
                      id="notifyPartyModelCode"
                      ref={refs.notifyParty.notifyPartyModelCodeRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Model Code"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyRegistrationYear/Month"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Registration Year/Month</p>
                    <input
                      type="text"
                      id="notifyPartyRegistrationYear/Month"
                      ref={refs.notifyParty.notifyPartyRegistrationYearORMonthRef}
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
                    htmlFor="ManufactureYear/Month"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Manufacture Year/Month</p>
                    <input
                      type="number"
                      id="ManufactureYear/Month"
                      ref={refs.notifyParty.manufactureYearORMonthRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Manufacture Year/Month"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyModelGrade"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Model Grade</p>
                    <input
                      type="text"
                      id="notifyPartyModelGrade"
                      ref={refs.notifyParty.notifyPartyModelGradeRef}
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
                    htmlFor="notifyPartyChassis#"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Chassis #</p>
                    <input
                      type="text"
                      id="notifyPartyChassis#"
                      ref={refs.notifyParty.notifyPartyChassisRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Chassis #"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyEngineSize"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Engine Size</p>
                    <input
                      type="number"
                      id="notifyPartyEngineSize"
                      ref={refs.notifyParty.notifyPartyEngineSizeRef}
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
                    htmlFor="notifyPartyDrive"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Drive</p>
                    <input
                      type="text"
                      id="notifyPartyDrive"
                      ref={refs.notifyParty.notifyPartyDriveRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Drive"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyExtColor"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Ext. Color</p>
                    <input
                      type="number"
                      id="notifyPartyExtColor"
                      ref={refs.notifyParty.notifyPartyExtColorRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Ext. Color"
                    />
                  </label>
                </div>
              </div>

              {/* Seventh Content */}
              <div className="w-full h-auto justify-start items-center flex gap-5 ">
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label htmlFor="notifyPartySteering" className="w-full">
                    <p>
                      Steering <sup className="text-orange-700">*</sup>
                    </p>
                    <select
                      id="notifyPartySteering"
                      className="appearance-none mt-2 w-full border-neutral-500 border rounded-md p-2 outline-0 text-gray-400 "
                      placeholder="Select Steering"
                      ref={refs.notifyParty.notifyPartySteeringRef}
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
                  <label htmlFor="notifyPartytransmission" className="w-full">
                    <p>Select Transmission</p>
                    <select
                      id="notifyPartytransmission"
                      className="appearance-none mt-2 w-full border-neutral-500 border rounded-md p-2 outline-0 text-gray-400 "
                      placeholder="Select transmission"
                      ref={refs.notifyParty.notifyPartytransmissionRef}
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
                    htmlFor="notifyPartyFuel"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Fuel</p>
                    <input
                      type="text"
                      id="notifyPartyFuel"
                      ref={refs.notifyParty.notifyPartyFuelRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Fuel"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartySeats"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Seats</p>
                    <input
                      type="number"
                      id="notifyPartySeats"
                      ref={refs.notifyParty.notifyPartySeatsRef}
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
                    htmlFor="notifyPartyDoor"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Door</p>
                    <input
                      type="text"
                      id="notifyPartyDoor"
                      ref={refs.notifyParty.notifyPartyDoorRef}
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder=" Door"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full gap-2 h-auto">
                  <label
                    htmlFor="notifyPartyEngineNo"
                    className="w-full gap-3 flex flex-col justify-center items-start "
                  >
                    <p>Engine No.</p>
                    <input
                      type="number"
                      id="notifyPartyEngineNo"
                      ref={refs.notifyParty.notifyPartyEngineNoRef}
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
                <div className="imageInpput text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Featured Image
                    <label htmlFor="productFeatureImage" className="w-full h-auto flex">
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
                        id="productFeatureImage"
                        onChange={(e) => handleProductionFeaturedImageChange(e)}
                        className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                      />
                    </label>
                  </div>
                </div>

                {/* 2nd Image Input  */}
                <div className="imageInpput  text-sm rounded-md w-full h-auto  ">
                  <div className="flex flex-col gap-2 ">
                    Upload Image
                    <label htmlFor="productImage" className="w-full h-auto flex">
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
                        id="productImage"
                        onChange={(e) => handleProductImageChange(e)}
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
