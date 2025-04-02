import React, { useRef, useState, useEffect } from "react";
import Button from "../../../../../Components/Button/Button";
import axios from "axios";
import { statusFeatures } from "../../../../../Components/statusFeatures.js";
import { OptionFeatures } from "../../../../../Components/optionFeatures.js";
import { Link } from "react-router-dom";

const EditCapLinksForm = ({ carId }) => {
  const [carData, setCarData] = useState([]);
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
  console.log(productFeatureImage);
  
  // Fetch car data on mount
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/capLinks/get/${carId}`);
        const car = res.data;
        console.log(car);
        
        setCarData(car);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCar();
  }, [carId]);

  console.log(carData);

      useEffect(() => {
        if (carData) {
          setselectedOptionFeatures(carData.optionFeatures || []);
        }
      }, [carData]);

    useEffect(() => {
      if (carData) {
        setBLImage(carData.bLFileRef || []);
      }
    }, [carData]);
    useEffect(() => {
      if (carData) {
        setInspectionImage(carData.inspectionFileRef || []);
      }
    }, [carData]);
    useEffect(() => {
      if (carData) {
        setCertificateImage(carData.certificateFileRef || []);
      }
    }, [carData]);
    useEffect(() => {
      if (carData) {
        setEnglishCerticateImage(carData.englishCertificateFileRef || []);
      }
    }, [carData]);
    useEffect(() => {
      if (carData) {
        setInvoiceImage(carData.invoiceFileRef || []);
      }
    }, [carData]);
    useEffect(() => {
      if (carData) {
        setproductFeatureImage(carData.productFeatureImageRef || []);
      }
    }, [carData]);
    useEffect(() => {
      if (carData) {
        setproductImage(carData.productImageRef || []);
      }
    }, [carData]);
    
    
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
    

    // Toggle Status CheckBox Function
    const toggleCheckbox = async (featureId) => {
      let updatedFeatures;
      {setSelectedStatusFeatures((carData.statusFeatures || []).some((item) => item.includes(feature.id)))}
    console.log(featureId);
    
      if (selectedStatusFeatures.includes(featureId)) {
        updatedFeatures = selectedStatusFeatures.filter((id) => id !== featureId);
      } else {
        updatedFeatures = [...selectedStatusFeatures, featureId];
      }
    
      setSelectedStatusFeatures(updatedFeatures);

    }
  
     // Toggle Option CheckBox Function
     const toggleOptionCheckbox = async (featureId) => {
      let updatedOptionFeatures;
      {setselectedOptionFeatures((carData.statusFeatures || []).some((item) => item.includes(featureId)))}
      console.log(selectedOptionFeatures);
      
    
      if (selectedOptionFeatures.includes(featureId)) {
        updatedOptionFeatures = selectedOptionFeatures.filter((id) => id !== featureId);
      } else {
        updatedOptionFeatures = [...selectedOptionFeatures, featureId];
      }
    
      setselectedOptionFeatures({ ...cardData , Features: updatedOptionFeatures });
  
    }
    console.log(selectedOptionFeatures);

    // File handlers
    const handleProductImageChange = (e) => {
      let file = e.target.files[0];
      setproductImage(file);  
    };
    const handleProductionFeaturedImageChange = (e) => {
      let file = e.target.files[0];
      setproductFeatureImage(file);
    };
    const handleBLFileChange = (e) => {
      let file = e.target.files[0];
      setBLImage(file);
      
    };
    const handleCertificateChange = (e) => {
      let file = e.target.files[0];
      setCertificateImage(file);
      
    };
    const handleEnglishCertificateChange = (e) => {
      let file = e.target.files[0];
      setEnglishCerticateImage(file);
      
    };
    const handleInvoiceChange = (e) => {
      let file = e.target.files[0];
      setInvoiceImage(file);
      
    };
    const handleInspectionFileChange = (e) => {
      let file = e.target.files[0];
      setInspectionImage(file);
    };
  
    
    // Radio Button Function
    const handleNameRadioChange = (e) => {
      setCarData({ ...carData, companyName: e.target.value });
   
    };
    const handleForwarderNameRadioChange = (e) => {
      setCarData({ ...carData, forwarderName: e.target.value });
      
    };
    
  
  
  // //  Handle Features 
  // const handleFeatureChange = (e, type) => {
  //   const { value, checked } = e.target;

  //   if (type === 'allFeatures') {
  //     if (checked) {
  //       setCarAllFeatures((prev) => [...prev, value]);
  //     } else {
  //       setCarAllFeatures((prev) => prev.filter((item) => item !== value));
  //     }
  //   }
  
  //   if (type === 'safetyFeatures') {
  //     if (checked) {
  //       setCarSafetyFeatures([...carSafetyFeatures, value]);
  //     } else {
  //       setCarSafetyFeatures(carSafetyFeatures.filter((item) => item !== value));
  //     }
  //   }
  // };

  // const handleFeatureChange = (e, type) => {
  //   const { value, checked } = e.target;
  
  //   if (type === "allFeatures") {
  //     setCarAllFeatures((prevFeatures) => {
  //       if (checked) {
  //         // Agar checked hai, to add karo
  //         return [...prevFeatures, value];
  //       } else {
  //         // Agar unchecked hai, to remove karo
  //         return prevFeatures.filter((item) => item !== value);
  //       }
  //     });
  //   }

  // };
  


  const updateCapLinksData = async (e) => {
  e.preventDefault();
  
  const formData = new FormData();

// Extract text values from carData
Object.keys(carData).forEach((key) => {
  let nestedObject = carData[key];

  if (typeof nestedObject === "object" && nestedObject !== null) {
    Object.keys(nestedObject).forEach((innerKey) => {
      formData.append(innerKey, nestedObject[innerKey] || ""); // Default to empty string if undefined
    });
  } else {
    formData.append(key, carData[key] || "");
  }
});

  
    // Handle file inputs separately
      formData.append("productFeatureImageRef", productFeatureImage);
      formData.append("productImageRef", productImage);
      formData.append("bLFileRef", blImage);
      formData.append("certificateFileRef", certificateImage);
      formData.append("englishCertificateFileRef", englishCertificateImage);
      formData.append("invoiceFileRef", invoiceImage);
      formData.append("inspectionFileRef", inspectionImage);


  formData.append("statusFeatures", JSON.stringify(selectedStatusFeatures));
  formData.append("optionFeatures", JSON.stringify(selectedOptionFeatures));
  formData.append( "companyName",  selectedNameOption );
  formData.append( "forwarderName",  selectedForwarderNameOption);
  
    try {
      const token = localStorage.getItem("adminToken");
  
      const response = await axios.put(
        `http://localhost:5000/api/capLinks/update/${carId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Success" + JSON.stringify(response.data));
      alert("Updated Succesfully");
  
// reset car features
      setCarAllFeatures([]);
      setCarSafetyFeatures([]);
  
      document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = false;
      });
  
      window.location.href = "/dashboard";
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
          <h1 className="text-3xl font-bold">Update Details</h1>
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
                  checked={carData.companyName === "Be Forward"}
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
                  checked={carData.companyName === "JP Corporation"}
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
                  checked={carData.forwarderName === "Satish"}
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
                  checked={carData.forwarderName === "Vova"}
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
                  checked={carData.forwarderName === "Kaytee"}
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
              value={carData?.misc?.descriptionRef || ""}
              onChange={(e) =>
                setCarData({
                  ...carData,
                  misc: { ...carData.misc, descriptionRef: e.target.value } 
                })
              }
               className="mt-2 w-full h-[150px]  border-neutral-500 border rounded-md p-2"
            ></textarea>
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
                      checked={(carData.statusFeatures || []).some((item) => item.includes(feature.id))}
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
                  value={carData?.departure?.carrierNameRef || ""}
                  onChange={(e) =>
                    setCarData({
                      ...carData,
                      departure: { ...carData.departure, carrierNameRef: e.target.value } 
                    })
                  }
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
                  value={carData?.departure?.departureVesselRef || ""}
                  onChange={(e) =>
                    setCarData({
                      ...carData,
                      departure: { ...carData.departure, departureVesselRef: e.target.value } 
                    })
                  }
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
                    value={carData?.departure?.departurePartsOfLandingRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        departure: { ...carData.departure, departurePartsOfLandingRef: e.target.value } 
                      })
                    }
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
                    value={carData?.departure?.departureETDRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        departure: { ...carData.departure, departureETDRef: e.target.value } 
                      })
                    }
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
                  value={carData?.arrival?.arrivalVesselRef || ""}
                  onChange={(e) =>
                    setCarData({
                      ...carData,
                      arrival: { ...carData.arrival, arrivalVesselRef: e.target.value } 
                    })
                  }
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
                    value={carData?.arrival?.arrivalPartsOfLandingRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        arrival: { ...carData.arrival, arrivalPartsOfLandingRef: e.target.value } 
                      })
                    }
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
                    value={carData?.arrival?.arrivalETDRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        arrival: { ...carData.arrival, arrivalETDRef: e.target.value } 
                      })
                    }
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
                <div className="existingFile w-full h-auto p-2 text-sm">
                  <p>Existing B/L File: <Link to={`/blFile/blFile_${carData?.bLFileRef}`} target="_blank"  rel="noopener noreferrer">View </Link> </p>
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
                      onChange={handleInspectionFileChange}
                      className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                    />
                  </label>
                </div>
                <div className="existingFile w-full h-auto p-2 text-sm">
                  <p>Existing Inspection File: <Link to={`/inspection/Inspection_${carData?.inspectionFileRef}`} target="_blank"  rel="noopener noreferrer">View </Link> </p>
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
                <div className="existingFile w-full h-auto p-2 text-sm">
                  <p>Existing Export Certifcate File: <Link to={`/certificate/certificate_${carData?.certificateFileRef}`} target="_blank"  rel="noopener noreferrer">View </Link> </p>
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
                <div className="existingFile w-full h-auto p-2 text-sm">
                  <p>Existing English Export Certificate File: <Link to={`/english-certificate/english-certificate_${carData?.englishCertificateFileRef}`} target="_blank"  rel="noopener noreferrer">View </Link> </p>
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
                <div className="existingFile w-full h-auto p-2 text-sm">
                  <p>Existing Invoice File: <Link to={`/invoice/invoice_${carData?.invoiceFileRef}`} target="_blank"  rel="noopener noreferrer">View </Link> </p>
                </div>
              </div>

              {/* 2nd Image Input  */}
              <div className="imageInpput mb-9  text-sm rounded-md  w-full h-auto  ">
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="Enrollement"
                    className="w-full gap-3  flex flex-col justify-center items-start "
                  >
                    <p> Enrollment</p>
                    <input
                      type="text"
                      id="Enrollement"
                      className=" border-neutral-500 border w-full rounded-md p-3"
                      placeholder="Enrollment"
                      value={carData?.document?.documentenrollementRef || ""}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          document: { ...carData.document, documentenrollementRef: e.target.value } 
                        })
                      }
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
                  value={carData?.document?.documentNameRef || ""}
                  onChange={(e) =>
                    setCarData({
                      ...carData,
                      document: { ...carData.document, documentNameRef: e.target.value } 
                    })
                  }
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
                    value={carData?.document?.documentAddressRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentAddressRef: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentCityRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentCityRef: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentCountryRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentCountryRef: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentPhoneNumber1Ref || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentPhoneNumber1Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentPhoneNumber2Ref || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentPhoneNumber2Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentPhoneNumber3Ref || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentPhoneNumber3Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentFaxNumberRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentFaxNumberRef: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentCellPhoneNumberOREmailRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentCellPhoneNumberOREmailRef: e.target.value } 
                      })
                    }
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
                    value={carData?.document?.documentTrackingNumberRef || ""}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        document: { ...carData.document, documentTrackingNumberRef: e.target.value } 
                      })
                    }
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
                      value={carData?.documentCenter?.documentCenterNameRef}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterNameRef: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterAddressRef}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterAddressRef: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterCityRef}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterCityRef: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterCountryRef}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterCountryRef: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterPhoneNumber1Ref}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterPhoneNumber1Ref: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterPhoneNumber2Ref}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterPhoneNumber2Ref: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterPhoneNumber3Ref}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterPhoneNumber3Ref: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterEmailRef}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterEmailRef: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterUrlRef}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterUrlRef: e.target.value } 
                        })
                      }
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
                      value={carData?.documentCenter?.documentCenterOtherInformationRef}
                      onChange={(e) =>
                        setCarData({
                          ...carData,
                          documentCenter: { ...carData.documentCenter, documentCenterOtherInformationRef: e.target.value } 
                        })
                      }
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
                  value={carData?.consignee?.consigneeNameRef}
                  onChange={(e) =>
                    setCarData({
                      ...carData,
                      consignee: { ...carData.consignee, consigneeNameRef: e.target.value } 
                    })
                  }
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
                    value={carData?.consignee?.consigneeAddressRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneeAddressRef: e.target.value } 
                      })
                    }
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
                    value={carData?.consignee?.consigneeCityRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneeCityRef: e.target.value } 
                      })
                    }
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
                    value={carData?.consignee?.consigneeCountryRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneeCountryRef: e.target.value } 
                      })
                    }
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
                    value={carData?.consignee?.consigneePhoneNumber1Ref}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneePhoneNumber1Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.consignee?.consigneePhoneNumber2Ref}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneePhoneNumber2Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.consignee?.consigneePhoneNumber3Ref}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneePhoneNumber3Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.consignee?.consigneeFaxNumberRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneeFaxNumberRef: e.target.value } 
                      })
                    }
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
                    value={carData?.consignee?.consigneeCellPhoneNumberOREmailRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        consignee: { ...carData.consignee, consigneeCellPhoneNumberOREmailRef: e.target.value } 
                      })
                    }
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
                  value={carData?.notifyParty?.notifyPartyNameRef}
                  onChange={(e) =>
                    setCarData({
                      ...carData,
                      notifyParty: { ...carData.notifyParty, notifyPartyNameRef: e.target.value } 
                    })
                  }
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
                    value={carData?.notifyParty?.notifyPartyAddressRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyAddressRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyCityRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyCityRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyCountryRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyCountryRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyPhoneNumber1Ref}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyPhoneNumber1Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyPhoneNumber2Ref}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyPhoneNumber2Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyPhoneNumber3Ref}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyPhoneNumber3Ref: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyFaxNumberRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyFaxNumberRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyCellPhoneNumberOREmailRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyCellPhoneNumberOREmailRef: e.target.value } 
                      })
                    }
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
                  value={carData?.notifyParty?.notifyPartyProductNameRef}
                  onChange={(e) =>
                    setCarData({
                      ...carData,
                      notifyParty: { ...carData.notifyParty, notifyPartyProductNameRef: e.target.value } 
                    })
                  }
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
                    value={carData?.notifyParty?.notifyPartyReferenceNoRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyReferenceNoRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyMileageRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyMileageRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyModelCodeRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyModelCodeRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyRegistrationYearORMonthRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyRegistrationYearORMonthRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.manufactureYearORMonthRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, manufactureYearORMonthRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyModelGradeRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyModelGradeRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyChassisRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyChassisRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyEngineSizeRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyEngineSizeRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyDriveRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyDriveRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyExtColorRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyExtColorRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartySteeringRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartySteeringRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartytransmissionRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartytransmissionRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyFuelRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyFuelRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartySeatsRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartySeatsRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyDoorRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyDoorRef: e.target.value } 
                      })
                    }
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
                    value={carData?.notifyParty?.notifyPartyEngineNoRef}
                    onChange={(e) =>
                      setCarData({
                        ...carData,
                        notifyParty: { ...carData.notifyParty, notifyPartyEngineNoRef: e.target.value } 
                      })
                    }
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
                          checked={(carData?.optionFeatures || []).some((item) => item.includes(feature.id))}
                          onChange={() => toggleOptionCheckbox(feature.id)}
                        />
                        <div>
                          <label
                            className="form-check-label text-sm font-bold text-gray-700"
                            htmlFor={feature.id}
                            // onClick={() => toggleOptionCheckbox(feature.id)}
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
                <div className="imageInpput border text-sm rounded-md w-full h-auto p-10 ">
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
                      file={carData.productFeatureImage || []}
                      onChange={(e) => handleProductionFeaturedImageChange(e)}
                      className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
                    />
                  </label>
                </div>
                <div
            id="showFeaturedImage"
            className="showImage w-[200px] mt-5 h-[200px] flex justify-center items-center relative"
          >
            <div
              className="crossBtn  text-xl p-1 shadow-lg h-auto w-auto rounded-full bg-white hover:bg-red-400 cursor-pointer  absolute top-0 right-0 z-10"
              // onClick={hiddenFeaturedImage}
            >
              ❌
            </div>
            <img
              loading="lazy"
              src={`http://localhost:5000/${carData?.productFeatureImageRef}`}
              alt="image"
              className="w-[160px] h-[160px]"
            />
          </div>
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
                {/* <div className="flex w-auto h-auto p-3">
            <div
              id="showGalleryImage"
              className="showImage w-[200px] mt-5 h-[200px] flex justify-center items-center relative"
            >
              <div
                className="crossBtn  text-xl p-1 shadow-lg h-auto w-auto rounded-full bg-white hover:bg-red-400 cursor-pointer  absolute top-0 right-0 z-10"
                // onClick={hiddenProductImages}
              >
                {" "}
                ❌
              </div>
              {carData?.productImageRef?.map((productImage, index) => (
      <img
        key={index}
        loading="lazy"
        src={`http://localhost:5000/${productImage}`}
        alt={`gallery-image-${index}`}
        className="w-[160px] h-[160px] object-cover"
      />
    ))}

            </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div className="button w-full flex justify-start items-center p-6">
      <Button text="Update Cap Link" onClick={updateCapLinksData}  />
    </div>
  </div>
  );
};

export default EditCapLinksForm;
