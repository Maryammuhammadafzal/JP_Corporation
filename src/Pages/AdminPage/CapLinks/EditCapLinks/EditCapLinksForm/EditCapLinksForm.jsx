import React, { useRef, useState, useEffect } from "react";
import Button from "../../../../../Components/Button/Button";
import axios from "axios";
import { statusFeatures } from "../../../../../Components/statusFeatures.js";
import { OptionFeatures } from "../../../../../Components/optionFeatures.js";
import { Link } from "react-router-dom";
import { EditFileInput } from "../../../../../Components/EditFileInput/EditFileInput.jsx";
import EditSelectFeild from "../../../../../Components/EditSelectFeild/EditSelectFeild.jsx";
import EditInputFeild from "../../../../../Components/EditInputFeild/EditInputFeild.jsx";



const EditCapLinksForm = () => {
  const [productFeatureImage, setproductFeatureImage] = useState(null);
   const [productImages, setproductImages] = useState(null);
   const [blImage, setBLImage] = useState(null);
   const [certificateImage, setCertificateImage] = useState(null);
   const [invoiceImage, setInvoiceImage] = useState(null);
   const [englishCertificateImage, setEnglishCerticateImage] = useState(null);
   const [inspectionImage, setInspectionImage] = useState(null);
   const [selectedStatusFeatures, setSelectedStatusFeatures] = useState([]);
   const [selectedNameOption, setSelectedNameOption] = useState([]);
   const [selectedForwarderNameOption, setSelectedForwarderNameOption] = useState([]);
   const [selectedOptionFeatures, setselectedOptionFeatures] = useState([]);
  const [loading , setLoading] = useState(false);
  const [carData, setCarData] = useState(null);

  let carId = localStorage.getItem("EditCapLinksId");
  // Fetch car data on mount
  useEffect(() => {
    if(!carData) return ;
    const fetchCar = async () => {
      setLoading(true)
        try {
          const res = await axios.get(`http://localhost:5000/api/capLinks/get/${carId}`);
          setCarData(res.data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
    setTimeout(fetchCar , 3000)
    }, [carId]);

    if(loading) {
      return <div className="w-full h-screen items-center justify-center flex text-5xl bg-gray-200">Loading...</div>
    }

   if (!carData) {
    return (
      <div className="w-full h-screen items-center justify-center flex text-5xl bg-gray-200">No data found</div>
      )}
  
  const notifyInputData = [
         { label: "Name", id: "notifyPartyName", value: carData?.notifyParty?.notifyPartyNameRef },
         { label: "Address", id: "notifyPartyAddress", value: carData?.notifyParty?.notifyPartyAddressRef },
         { label: "City", id: "notifyPartyCity", value: carData?.notifyParty?.notifyPartyCityRef },
         { label: "Country", id: "notifyPartyCountry", value: carData?.notifyParty?.notifyPartyCountryRef },
         { label: "Phone Number1", id: "notifyPartyPhoneNumber1", value: carData?.notifyParty?.notifyPartyPhoneNumber1Ref },
         { label: "Phone Number2", id: "notifyPartyPhoneNumber2", value: carData?.notifyParty?.notifyPartyPhoneNumber2Ref },
         { label: "Phone Number3", id: "notifyPartyPhoneNumber3", value: carData?.notifyParty?.notifyPartyPhoneNumber3Ref },
         { label: "Fax Number", id: "notifyPartyFaxNumber", value: carData?.notifyParty?.notifyPartyFaxNumberRef },
         { label: "Cell Phone Number/Email", id: "notifyPartyCellPhoneNumber/Email", value: carData?.notifyParty?.notifyPartyCellPhoneNumberOREmailRef }
       ]
  
        const consigneeInputData = [
              { label: "Name", id: "consigneeName", value: carData?.consignee?.consigneeNameRef },
              { label: "Address", id: "consigneeAddress", value: carData?.consignee?.consigneeAddressRef },
              { label: "City", id: "consigneeCity", value: carData?.consignee?.consigneeCityRef },
              { label: "Country", id: "consigneeCountry", value: carData?.consignee?.consigneeCountryRef },
              { label: "Phone Number1", id: "consigneePhoneNumber1", value: carData?.consignee?.consigneePhoneNumber1Ref },
              { label: "Phone Number2", id: "consigneePhoneNumber2", value: carData?.consignee?.consigneePhoneNumber2Ref },
              { label: "Phone Number3", id: "consigneePhoneNumber3", value: carData?.consignee?.consigneePhoneNumber3Ref },
              { label: "Fax Number", id: "consigneeFaxNumber", value: carData?.consignee?.consigneeFaxNumberRef },
              { label: "Cell Phone Number/Email", id: "consigneeCellPhoneNumber/Email", value: carData?.consignee?.consigneeCellPhoneNumberOREmailRef }
       ]


 

  // console.log(carData);

   
        if (carData) {
          setselectedOptionFeatures(carData.optionFeatures || []);
        }
      if (carData) {
        setBLImage(carData.bLFileRef || []);
      }
 
      if (carData) {
        setInspectionImage(carData.inspectionFileRef || []);
      }
 
      if (carData) {
        setCertificateImage(carData.certificateFileRef || []);
      }
 
      if (carData) {
        setEnglishCerticateImage(carData.englishCertificateFileRef || []);
      }
 
      if (carData) {
        setInvoiceImage(carData.invoiceFileRef || []);
      }
 
      if (carData) {
        setproductFeatureImage(carData.productFeatureImageRef || []);
      }
 
      if (carData) {
        setproductImages(carData.productImageRef || []);
      }
    
    
    // // Refrence Object
    // const refs = {
    //   departure: {
    //       // Departure Ref
    // carrierNameRef: useRef(null),
    // departureVesselRef: useRef(null),
    // departurePartsOfLandingRef: useRef(null),
    // departureETDRef: useRef(null),
  
    //   },
    //   arrival: {
    //     arrivalVesselRef: useRef(null),
    //     ArrivalPartOfDischargeRef: useRef(null),
    //     arrivalETDRef: useRef(null),
    //   },
    //   document: {
    //     documentNameRef: useRef(null),
    //     documentAddressRef: useRef(null),
    //     documentCityRef: useRef(null),
    //     documentCountryRef: useRef(null),
    //     documentFaxNumberRef: useRef(null),
    //     documentTrackingNumberRef: useRef(null),
    //     documentPhoneNumber1Ref: useRef(null),
    //     documentPhoneNumber2Ref: useRef(null),
    //     documentPhoneNumber3Ref: useRef(null),
    //     documentCellPhoneNumberOREmailRef: useRef(null),
    //     documentenrollementRef: useRef(null),
    //   },
    //   documentCenter: {
    //     documentCenterNameRef: useRef(null),
    //     documentCenterAddressRef: useRef(null),
    //     documentCenterCityRef: useRef(null),
    //     documentCenterCountryRef: useRef(null),
    //     documentCenterPhoneNumber1Ref: useRef(null),
    //     documentCenterPhoneNumber2Ref: useRef(null),
    //     documentCenterPhoneNumber3Ref: useRef(null),
    //     documentCenterEmailRef: useRef(null),
    //     documentCenterUrlRef: useRef(null),
    //     documentCenterOtherInformationRef: useRef(null),
    //   },
    //   consignee: {
    //     consigneeNameRef: useRef(null),
    // consigneeCityRef: useRef(null),
    // consigneeAddressRef: useRef(null),
    // consigneeCountryRef: useRef(null),
    // consigneeFaxNumberRef: useRef(null),
    // consigneePhoneNumber1Ref: useRef(null),
    // consigneePhoneNumber2Ref: useRef(null),
    // consigneePhoneNumber3Ref: useRef(null),
    // consigneeCellPhoneNumberOREmailRef: useRef(null),
  
  
    //   },
    //   notifyParty: {
    //     notifyPartyNameRef: useRef(null),
    // notifyPartyCityRef: useRef(null),
    // notifyPartyCountryRef: useRef(null),
    // notifyPartyAddressRef: useRef(null),
    // notifyPartyChassisRef: useRef(null),
    // notifyPartyDoorRef: useRef(null),
    // notifyPartytransmissionRef: useRef(null),
    // notifyPartySteeringRef: useRef(null),
    // notifyPartySeatsRef: useRef(null),
    // notifyPartyRegistrationYearORMonthRef: useRef(null),
    // notifyPartyCellPhoneNumberOREmailRef: useRef(null),
    // notifyPartyReferenceNoRef: useRef(null),
    // notifyPartyEngineNoRef: useRef(null),
    // notifyPartyDriveRef: useRef(null),
    // notifyPartyEngineSizeRef: useRef(null),
    // notifyPartyExtColorRef: useRef(null),
    // notifyPartyFuelRef: useRef(null),
    // notifyPartyFaxNumberRef: useRef(null),
    // notifyPartyMileageRef: useRef(null),
    // notifyPartyModelCodeRef: useRef(null),
    // notifyPartyModelGradeRef: useRef(null),
    // notifyPartyPhoneNumber1Ref: useRef(null),
    // notifyPartyPhoneNumber2Ref: useRef(null),
    // notifyPartyPhoneNumber3Ref: useRef(null),
    // notifyPartyProductNameRef: useRef(null),
    // manufactureYearORMonthRef: useRef(null),
    //   },
    //   misc: {
    //     descriptionRef: useRef(null),
    //   },
    //   statusFeatures : useRef(null)
    // };
    

    // Toggle Status CheckBox Function
    const toggleCheckbox = (id) => {
      setCarData((prevData) => {
        const updatedStatusFeatures = prevData.statusFeatures.includes(id)
          ? prevData.statusFeatures.filter((item) => item !== id)
          : [...prevData.statusFeatures, id];
        
        return {
          ...prevData,
          statusFeatures: updatedStatusFeatures,
        };
      });
    };
    const toggleOptionCheckbox = (id) => {
      setCarData((prevData) => {
        const updatedOptionFeatures = prevData.optionFeatures.includes(id)
          ? prevData.optionFeatures.filter((item) => item !== id)
          : [...prevData.optionFeatures, id];
        
        return {
          ...prevData,
          optionFeatures: updatedOptionFeatures,
        };
      });
    };

    // File handlers
    const handleProductImageChange = (e) => {
      const files = Array.from(e.target.files);
      setproductImages((prevImages) => [...prevImages, ...files]);
    };;
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

    const handleChange = (feild , value) => {
      setCarData((prevData) => ({
        ...prevData,
        notifyParty : {
          ...prevData.notifyParty , [feild] : value
        },
      }))
    }
    
    // console.log(carData?.statusFeatures?.includes("feature-11"));
    // console.log(carData.optionFeatures);
    
    
    // const NotifyPartyForm = ({ carData, setCarData }) => {
    //   const handleChange = (field, value) => {
    //     setCarData((prevData) => ({
    //       ...prevData,
    //       notifyParty: { ...prevData.notifyParty, [field]: value },
    //     }));
    //   };
  
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
  

//  Update Function
  const updateCapLinksData = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    // Append plain text data from carData
    Object.keys(carData).forEach((key) => {
      let value = carData[key];
  
      // Handle nested objects
      if (typeof value === "object" && value !== null) {
        Object.keys(value).forEach((innerKey) => {
          formData.append(innerKey, value[innerKey] || ""); // Default to empty string if undefined
        });
      } else {
        formData.append(key, value || ""); // Append non-object values
      }
    });
  
    // Handle file inputs separately
    formData.append("productFeatureImageRef", productFeatureImage);
    productImage.forEach((image) => {
      formData.append("productImages", image);
    });
    formData.append("bLFileRef", blImage);
    formData.append("certificateFileRef", certificateImage);
    formData.append("englishCertificateFileRef", englishCertificateImage);
    formData.append("invoiceFileRef", invoiceImage);
    formData.append("inspectionFileRef", inspectionImage);
  
    // Handle features selection (checkboxes)
    formData.append("statusFeatures", JSON.stringify(selectedStatusFeatures));
    formData.append("optionFeatures", JSON.stringify(selectedOptionFeatures));
  
    // Append selected name options
    formData.append("companyName", selectedNameOption);
    formData.append("forwarderName", selectedForwarderNameOption);
  
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
      alert("Updated Successfully");
  
      // Reset car features (checkboxes, etc.)
      setCarAllFeatures([]);
      setCarSafetyFeatures([]);
      document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = false;
      });
  
      window.location.href = "/dashboard"; // Redirect to dashboard after success
    } catch (error) {
      console.error(error);
      alert("Error updating the data");
    }
  };

  

  return (
    <div className="w-full flex flex-col mx-auto rounded-md p-3">
    <form action="" className="form w-full h-auto p-3 flex flex-col gap-5">
      <div className="nameDetail w-full h-auto flex justify-center gap-5 flex-col">
        <div className="flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold">Update Details</h1>
        </div>

        {/* 1st Section */}
        <div className="p-6 border-neutral-500 border rounded-md space-y-5 text-sm text-gray-600 w-full h-auto">
          {/* Company Name Radio Buttons */}
          <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
            <h3 className="text-md font-bold">Select Name</h3>
            <div className="w-full h-auto justify-start items-center flex gap-5">
              <label
                htmlFor="beForward"
                className="w-36 gap-3 flex justify-center items-center"
              >
                <input
                  type="radio"
                  id="beForward"
                  value="Be Forward"
                  checked={carData.companyName === "Be Forward"}
                  onChange={(e) => handleNameRadioChange(e)}
                  className="mt-2 rounded-md p-2"
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
                />
                <p>JP Corporation</p>
              </label>
            </div>
          </div>

          {/* Forwarder Name Radio Buttons */}
          <div className="w-fit flex flex-col gap-5 p-3 space-y-3 h-auto justify-between items-start">
            <h3 className="text-md font-bold">Forwarder Name</h3>
            <div className="w-full h-auto justify-between items-center flex gap-3">
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
                />
                <p>Kaytee</p>
              </label>
            </div>
          </div>

          {/* Description Textarea */}
          <div className="w-full h-auto flex flex-col p-3 justify-center space-y-3 items-start">
            <h3 className="text-md font-bold">Message</h3>
            <textarea
              id="description"
              value={carData?.misc?.descriptionRef || ""}
              onChange={(e) =>
                setCarData({
                  ...carData,
                  misc: { ...carData.misc, descriptionRef: e.target.value },
                })
              }
              className="mt-2 w-full h-[150px] border-neutral-500 border rounded-md p-2"
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
    <div className="card p-6 flex border-neutral-500 border rounded-md">
      <div className="row flex flex-wrap m-2">
        <div className="card-body flex flex-wrap">
          {statusFeatures?.map((feature) => (
            <div key={feature.id} className="col-md-4 mb-5 w-[300px] px-3 py-1">
              <div className="form-check flex items-start">
                <input
                  className="form-check-input mt-2 mx-2"
                  type="checkbox"
                  name="selectedStatusFeatures[]"
                  value={feature.value}
                  id={feature.id}
                  checked={carData.statusFeatures.includes(feature.id)}
                  // checked={(carData?.statusFeatures || "").split(",").includes(feature.id)} // Check if feature is in the selected status features array
                  onChange={() => toggleCheckbox(feature.id)} // Update the selected status features array
                />
                <div>
                  <label
                    className="form-check-label text-sm font-bold text-gray-700"
                    htmlFor={feature.id}
                    onClick={() => toggleCheckbox(feature.id)} // Toggling on label click
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
    {/* Shipping Information Section */}
    <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
      <h3 className="text-md font-bold">Shipping Information Section</h3>
      <div className="w-full h-auto justify-start items-center flex gap-5">
        <label htmlFor="CarrierName" className="w-full gap-3 flex flex-col justify-center items-start ">
          <p>Carrier</p>
          <input
            type="text"
            id="CarrierName"
            value={carData?.departure?.carrierNameRef || ""}
            onChange={(e) =>
              setCarData({
                ...carData,
                departure: { ...carData.departure, carrierNameRef: e.target.value },
              })
            }
            className=" border-neutral-500 border w-full rounded-md p-3"
            placeholder=" Carrier Name "
          />
        </label>
      </div>
    </div>

    {/* Departure Section */}
    <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
      <h3 className="text-md font-bold">Departure Section</h3>
      {/* Vessel Name */}
      <div className="w-full h-auto justify-start items-center flex gap-5 ">
        <label htmlFor="VesselName" className="w-full gap-3 flex flex-col justify-center items-start">
          <p>Vessel</p>
          <input
            type="text"
            id="VesselName"
            value={carData?.departure?.departureVesselRef || ""}
            onChange={(e) =>
              setCarData({
                ...carData,
                departure: { ...carData.departure, departureVesselRef: e.target.value },
              })
            }
            className=" border-neutral-500 border w-full rounded-md p-3"
            placeholder=" Vessel Name "
          />
        </label>
      </div>

      {/* Part Of Loading and ETD */}
      <div className="w-full h-auto justify-start items-center flex gap-5 ">
        <div className="flex flex-col w-full gap-2 h-auto">
          <label htmlFor="PartOfLoading" className="w-full gap-3 flex flex-col justify-center items-start ">
            <p>Part Of Loading</p>
            <input
              type="text"
              id="PartOfLoading"
              value={carData?.departure?.departurePartsOfLandingRef || ""}
              onChange={(e) =>
                setCarData({
                  ...carData,
                  departure: { ...carData.departure, departurePartsOfLandingRef: e.target.value },
                })
              }
              className=" border-neutral-500 border w-full rounded-md p-3"
              placeholder=" Part Of Loading"
            />
          </label>
        </div>
        <div className="flex flex-col w-full gap-2 h-auto">
          <label htmlFor="ETD(Estimated Time of Departure)" className="w-full gap-3 flex flex-col justify-center items-start ">
            <p>ETD (Estimated Time of Departure)</p>
            <input
              type="date"
              id="ETD(Estimated Time of Departure)"
              value={carData?.departure?.departureETDRef || ""}
              onChange={(e) =>
                setCarData({
                  ...carData,
                  departure: { ...carData.departure, departureETDRef: e.target.value },
                })
              }
              className=" border-neutral-500 border w-full rounded-md p-3"
              placeholder=" ETD (Estimated Time of Departure)"
            />
          </label>
        </div>
      </div>
    </div>

    {/* Arrival Section */}
    <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
      <h3 className="text-md font-bold ">Arrival Section</h3>
      <div className="w-full h-auto justify-start items-center flex gap-5 ">
        <label htmlFor="VesselName" className="w-full gap-3 flex flex-col justify-center items-start">
          <p>Vessel</p>
          <input
            type="text"
            id="VesselName"
            value={carData?.arrival?.arrivalVesselRef || ""}
            onChange={(e) =>
              setCarData({
                ...carData,
                arrival: { ...carData.arrival, arrivalVesselRef: e.target.value },
              })
            }
            className=" border-neutral-500 border w-full rounded-md p-3"
            placeholder=" Vessel Name "
          />
        </label>
      </div>

      {/* Part Of Discharge and ETD */}
      <div className="w-full h-auto justify-start items-center flex gap-5 ">
        <div className="flex flex-col w-full gap-2 h-auto">
          <label htmlFor="PartOfDischarge" className="w-full gap-3 flex flex-col justify-center items-start ">
            <p>Part Of Discharge</p>
            <input
              type="text"
              id="PartOfDischarge"
              value={carData?.arrival?.arrivalPartsOfLandingRef || ""}
              onChange={(e) =>
                setCarData({
                  ...carData,
                  arrival: { ...carData.arrival, arrivalPartsOfLandingRef: e.target.value },
                })
              }
              className=" border-neutral-500 border w-full rounded-md p-3"
              placeholder=" Part Of Discharge"
            />
          </label>
        </div>
        <div className="flex flex-col w-full gap-2 h-auto">
          <label htmlFor="ArrivalETD" className="w-full gap-3 flex flex-col justify-center items-start ">
            <p>ETD (Estimated Time of Arrival)</p>
            <input
              type="date"
              id="ArrivalETD"
              value={carData?.arrival?.arrivalETDRef || ""}
              onChange={(e) =>
                setCarData({
                  ...carData,
                  arrival: { ...carData.arrival, arrivalETDRef: e.target.value },
                })
              }
              className=" border-neutral-500 border w-full rounded-md p-3"
              placeholder=" ETD (Estimated Time of Arrival)"
            />
          </label>
        </div>
      </div>
    </div>

{/* 4th Section  */}
    <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
      <h3 className="text-md font-bold">Document Section</h3>

      {/* File Input Rows */}
      <div className="w-full h-auto justify-start items-center flex gap-5 ">
        <EditFileInput
          label="B/L"
          fileRef={carData?.bLFileRef}
          onChange={handleBLFileChange}
          existingFile={`/blFile/blFile_${carData?.bLFileRef}`}
        />

        <EditFileInput
          label="Inspection"
          fileRef={carData?.inspectionFileRef}
          onChange={handleInspectionFileChange}
          existingFile={`/inspection/Inspection_${carData?.inspectionFileRef}`}
        />
      </div>

      <div className="w-full h-auto justify-start items-center flex gap-5 ">
        <EditFileInput
          label="Export Certificate"
          fileRef={carData?.certificateFileRef}
          onChange={handleCertificateChange}
          existingFile={`/certificate/certificate_${carData?.certificateFileRef}`}
        />

        <EditFileInput
          label="English Export Certificate"
          fileRef={carData?.englishCertificateFileRef}
          onChange={handleEnglishCertificateChange}
          existingFile={`/english-certificate/english-certificate_${carData?.englishCertificateFileRef}`}
        />
      </div>

      <div className="w-full h-auto justify-start items-center flex gap-5 ">
        <EditFileInput
          label="Invoice"
          fileRef={carData?.invoiceFileRef}
          onChange={handleInvoiceChange}
          existingFile={`/invoice/invoice_${carData?.invoiceFileRef}`}
        />
      </div>

      {/* Enrollment Input */}
      <div className="w-full h-auto justify-start items-center flex gap-5 mb-9">
        <div className="imageInput text-sm rounded-md w-full h-auto">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Enrollement"
              className="w-full gap-3 flex flex-col justify-center items-start"
            >
              <p>Enrollment</p>
              <input
                type="text"
                id="Enrollement"
                className="border-neutral-500 border w-full rounded-md p-3"
                placeholder="Enrollment"
                value={carData?.document?.documentenrollementRef || ""}
                onChange={(e) =>
                  setCarData({
                    ...carData,
                    document: {
                      ...carData.document,
                      documentenrollementRef: e.target.value,
                    },
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
<div className=" w-full h-auto flex justify-center gap-5 flex-col">
  {/* Heading */}
  <div className="flex justify-between items-center p-6">
    <h1 className="text-3xl font-bold">Consignee/notify party of your request</h1>
  </div>

  <div className="p-6 border-neutral-500 border rounded-md text-sm text-gray-600 w-full h-auto">
    <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
      <h3 className="text-md font-bold">Consignee</h3>

      {/* Reusable Input Component for Consignee and Notify Party */}
      {consigneeInputData.map(({ label, id, value }) => (
        <div className="w-full h-auto justify-start items-center flex gap-5" key={id}>
          <div className="flex flex-col w-full gap-2 h-auto">
            <label htmlFor={id} className="w-full gap-3 flex flex-col justify-center items-start">
              <p>{label}</p>
              <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => setCarData({ 
                  ...carData, 
                  consignee: { 
                    ...carData.consignee, 
                    [id]: e.target.value 
                  } 
                })}
                className="border-neutral-500 border w-full rounded-md p-3"
                placeholder={label}
              />
            </label>
          </div>
        </div>
      ))}
    </div>

    {/* Notify Party Section */}
    <div className="w-full flex flex-col gap-5 p-3 h-auto justify-between items-start">
      <h3 className="text-md font-bold">Notify Party</h3>

      {/* Reusable Input Component for Notify Party */}
      {notifyInputData.map(({ label, id, value }) => (
        <div className="w-full h-auto justify-start items-center flex gap-5" key={id}>
          <div className="flex flex-col w-full gap-2 h-auto">
            <label htmlFor={id} className="w-full gap-3 flex flex-col justify-center items-start">
              <p>{label}</p>
              <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => setCarData({ 
                  ...carData, 
                  notifyParty: { 
                    ...carData.notifyParty, 
                    [id]: e.target.value 
                  } 
                })}
                className="border-neutral-500 border w-full rounded-md p-3"
                placeholder={label}
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* 6th */}
      {/* Purchased Product */}
      <div className=" w-full h-auto flex justify-center gap-5 flex-col">
        {/* Heading */}
        <div className="flex justify-between items-center p-6 ">
          <h1 className="text-3xl font-bold">Purchased Product</h1>
        </div>
        <div className="p-6 border-neutral-500 border rounded-md text-sm text-gray-600 w-full h-auto">
        <div className="w-full flex flex-col gap-5 p-3 h-auto items-start">
      <EditInputFeild
        label="Product Name"
        id="notifyPartyProductName"
        value={carData?.notifyParty?.notifyPartyProductNameRef || ""}
        onChange={(e) => handleChange("notifyPartyProductNameRef", e.target.value)}
        placeholder="Enter Product Name Here"
        required
      />

      <div className="w-full flex gap-5">
        <EditInputFeild label="Reference No" id="notifyPartyReferenceNo" value={carData?.notifyParty?.notifyPartyReferenceNoRef || ""} onChange={(e) => handleChange("notifyPartyReferenceNoRef", e.target.value)} placeholder="Reference No" />
        <EditInputFeild label="Mileage" id="notifyPartyMileage" value={carData?.notifyParty?.notifyPartyMileageRef || ""} onChange={(e) => handleChange("notifyPartyMileageRef", e.target.value)} placeholder="Mileage" />
      </div>

      <div className="w-full flex gap-5">
        <EditInputFeild label="Model Code" id="notifyPartyModelCode" value={carData?.notifyParty?.notifyPartyModelCodeRef || ""} onChange={(e) => handleChange("notifyPartyModelCodeRef", e.target.value)} placeholder="Model Code" />
        <EditInputFeild label="Registration Year/Month" id="notifyPartyRegistrationYearMonth" value={carData?.notifyParty?.notifyPartyRegistrationYearORMonthRef || ""} onChange={(e) => handleChange("notifyPartyRegistrationYearORMonthRef", e.target.value)} placeholder="Registration Year/Month" />
      </div>

      <div className="w-full flex gap-5">
        <EditInputFeild label="Manufacture Year/Month" id="ManufactureYearMonth" type="number" value={carData?.notifyParty?.manufactureYearORMonthRef || ""} onChange={(e) => handleChange("manufactureYearORMonthRef", e.target.value)} placeholder="Manufacture Year/Month" />
        <EditInputFeild label="Model Grade" id="notifyPartyModelGrade" value={carData?.notifyParty?.notifyPartyModelGradeRef || ""} onChange={(e) => handleChange("notifyPartyModelGradeRef", e.target.value)} placeholder="Model Grade" />
      </div>

      <div className="w-full flex gap-5">
        <EditInputFeild label="Chassis #" id="notifyPartyChassis" value={carData?.notifyParty?.notifyPartyChassisRef || ""} onChange={(e) => handleChange("notifyPartyChassisRef", e.target.value)} placeholder="Chassis #" />
        <EditInputFeild label="Engine Size" id="notifyPartyEngineSize" type="number" value={carData?.notifyParty?.notifyPartyEngineSizeRef || ""} onChange={(e) => handleChange("notifyPartyEngineSizeRef", e.target.value)} placeholder="Engine Size" />
      </div>

      <div className="w-full flex gap-5">
        <EditSelectFeild
          label="Steering"
          id="notifyPartySteering"
          value={carData?.notifyParty?.notifyPartySteeringRef || ""}
          onChange={(e) => handleChange("notifyPartySteeringRef", e.target.value)}
          options={[{ value: "Right", label: "Right" }, { value: "Left", label: "Left" }]}
          required
        />
        <EditSelectFeild
          label="Transmission"
          id="notifyPartyTransmission"
          value={carData?.notifyParty?.notifyPartytransmissionRef || ""}
          onChange={(e) => handleChange("notifyPartyTransmissionRef", e.target.value)}
          options={[{ value: "AT", label: "AT" }, { value: "AUTOMATIC", label: "AUTOMATIC" }, { value: "MT", label: "MT" }]}
        />
      </div>
    </div>
        
        {/* Products Features */}
<div className="productFeatures w-full p-3 h-auto flex flex-col gap-5 justify-center">
  <div className="flex justify-between items-center p-6">
    <h1 className="text-3xl font-bold">Option</h1>
  </div>

  {/* Status Features */}
  <div className="card p-6 border border-neutral-500 rounded-md">
    <div className="flex flex-wrap gap-4">
      {OptionFeatures.map((feature) => (
        <div key={feature.id} className="w-[230px] px-3 py-1">
          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 mr-2"
              name="selectedOptionFeatures"
              value={feature.value}
              id={feature.id}
              checked={carData.optionFeatures.includes(feature.id)}
              onChange={() => toggleOptionCheckbox(feature.id)}
            />
            <label
              htmlFor={feature.id}
              className="text-sm font-bold text-gray-700 cursor-pointer"
            >
              {feature.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
          {/* 4th Content */}
          <div className="w-full flex flex-col gap-5 p-3 h-auto items-start">
  {/* First Image Input */}
  <div className="w-full flex flex-col gap-5">
    <div className="imageInput w-full h-auto text-sm rounded-md border p-10">
      <div className="flex flex-col gap-2">
        <span>Upload Featured Image</span>
        <label htmlFor="productFeatureImage" className="w-full flex">
          {/* Custom Button */}
          <button
            type="button"
            className="bg-neutral-300 border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3 rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
          >
            Upload File
          </button>

          {/* Hidden Input */}
          <input
            type="file"
            id="productFeatureImage"
            onChange={handleProductionFeaturedImageChange}
            className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
          />
        </label>
      </div>

      {/* Show Uploaded Featured Image */}
      {carData?.productFeatureImageRef && (
        <div className="w-[200px] mt-5 h-[200px] flex justify-center items-center relative">
          <div
            className="text-xl p-1 shadow-lg rounded-full bg-white hover:bg-red-400 cursor-pointer absolute top-0 right-0 z-10"
          >
            ❌
          </div>
          <img
            loading="lazy"
            src={`http://localhost:5000/${carData.productFeatureImageRef}`}
            alt="Featured"
            className="w-[160px] h-[160px] object-cover"
          />
        </div>
      )}
    </div>

    {/* Multiple Image Upload */}
    <div className="imageInput w-full h-auto text-sm rounded-md">
      <div className="flex flex-col gap-2">
        <span>Upload Images</span>
        <label htmlFor="productImage" className="w-full flex">
          {/* Custom Button */}
          <button
            type="button"
            className="bg-neutral-300 border border-neutral-500 border-r-0 hover:bg-neutral-400 w-[120px] p-3 rounded-bl-xl rounded-tl-xl shadow-md transition duration-300"
          >
            Upload Files
          </button>

          {/* Hidden Multiple Input */}
          <input
            type="file"
            id="productImage"
            multiple
            onChange={handleProductImageChange}
            className="border-neutral-500 border rounded-br-xl p-3 rounded-tr-xl w-[90%]"
          />
        </label>
      </div>

      {/* Show Uploaded Images
      {carData?.productImageRef?.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-5">
          {carData.productImageRef.map((productImage, index) => (
            <div key={index} className="relative w-[160px] h-[160px]">
              <div
                className="absolute top-0 right-0 text-xl p-1 shadow-lg rounded-full bg-white hover:bg-red-400 cursor-pointer z-10"
                // onClick={() => removeImage(index)}
              >
                ❌
              </div>
              <img
                loading="lazy"
                src={`http://localhost:5000/${productImage}`}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )} */}
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
