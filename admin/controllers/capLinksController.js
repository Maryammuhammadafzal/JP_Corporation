import CapLinks from "../models/CapLinksModel.js";
import verifyToken from "../middlewares/tokenVerify.js";

// Get All Car
export const getCapLinks =  async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 100;

        const getCapLinks = await CapLinks.find()
                .skip((page - 1) * limit)
                .limit(limit);

        res.json(getCapLinks);
};


// Get CapLinks by id
// export const getCapLinksById = async (req, res) => {
//         const id = req.params.id;
//         console.log(id);
        
//         try {
//             const capLinks = await CapLinks.findById(id);     
        
//             if (!capLinks) {
//               return res.status(404).json({ message: "CapLinks not found" });
//             }
        
//             res.status(200).json(capLinks);
//           } catch (error) {
//             console.error("Error fetching CapLinks by ID:", error);
//             res.status(500).json({ message: "Server error" });
//           }
//     };
    
    // Delete CapLinks
// export const deleteCapLinks =  async (req, res) => {
//         const id = req.params.id;
//         console.log(id);
        
    
//         try {
//             const deletedCapLinks = await CapLinks.findByIdAndDelete(id);
    
//             if (!deletedCapLinks) {
//                 return res.status(404).json({ message: "CapLinks not found" });
//             }
    
//             res.json({ message: "CapLinks deleted successfully", data: deletedCapLinks });
//         } catch (err) {
//             res.status(400).json({ message: "Failed to delete CapLinks", error: err.message });
//         }
//     };
    export const addCapLinks = async (req, res) => {
        try {

          console.log("Request Body:", req.body);
console.log("Files:", req.files);
// const {
//   carrierNameRef,
//   departureVesselRef,
//   departurePartsOfLandingRef,
//   departureETDRef,
//   arrivalVesselRef,
//   arrivalPartOfDischargeRef,
//   arrivalETDRef,
//   documentNameRef,
//   documentAddressRef,
//   documentCityRef,
//   documentCountryRef,
//   documentFaxNumberRef,
//   documentTrackingNumberRef,
//   documentPhoneNumber1Ref,
//   documentPhoneNumber2Ref,
//   documentPhoneNumber3Ref,
//   documentCellPhoneNumberOREmailRef,
//   documentenrollementRef,
//   documentCenterNameRef,
//   documentCenterAddressRef,
//   documentCenterCityRef,
//   documentCenterCountryRef,
//   documentCenterPhoneNumber1Ref,
//   documentCenterPhoneNumber2Ref,
//   documentCenterPhoneNumber3Ref,
//   documentCenterEmailRef,
//   documentCenterUrlRef,
//   documentCenterOtherInformationRef,
//   consigneeNameRef,
//   consigneeCityRef,
//   consigneeAddressRef,
//   consigneeCountryRef,
//   consigneeFaxNumberRef,
//   consigneePhoneNumber1Ref,
//   consigneePhoneNumber2Ref,
//   consigneePhoneNumber3Ref,
//   consigneeCellPhoneNumberOREmailRef,
//   notifyPartyNameRef,
//   notifyPartyCityRef,
//   notifyPartyCountryRef,
//   notifyPartyAddressRef,
//   notifyPartyChassisRef,
//   notifyPartyDoorRef,
//   notifyPartytransmissionRef,
//   notifyPartySteeringRef,
//   notifyPartySeatsRef,
//   notifyPartyRegistrationYearORMonthRef,
//   notifyPartyCellPhoneNumberOREmailRef,
//   notifyPartyReferenceNoRef,
//   notifyPartyEngineNoRef,
//   notifyPartyDriveRef,
//   notifyPartyEngineSizeRef,
//   notifyPartyExtColorRef,
//   notifyPartyFuelRef,
//   notifyPartyFaxNumberRef,
//   notifyPartyMileageRef,
//   notifyPartyModelCodeRef,
//   notifyPartyModelGradeRef,
//   notifyPartyPhoneNumber1Ref,
//   notifyPartyPhoneNumber2Ref,
//   notifyPartyPhoneNumber3Ref,
//   notifyPartyProductNameRef,
//   manufactureYearORMonthRef,
//   descriptionRef,
//   productFeatureImageRef,
//   productImageRef,
//   bLFileRef,
//   certificateFileRef,
//   englishCertificateFileRef,
//   invoiceFileRef,
//   inspectionFileRef,
//   forwarderName,
//   companyName,
//   optionFeatures,
//   statusFeatures
// } = req.body || {};

          

//           if (!data || Object.keys(data).length === 0) {
//             return res.status(400).json({ message: "All fields are required" });
//           }

//             // Multer files
//             const productFeatureImage = req.files?.productFeatureImageRef?.[0]?.filename || null;
//             const productImage = req.files?.productImageRef?.[0]?.filename || null;
//             const bLFile = req.files?.bLFileRef?.[0]?.filename || null;
//             const certificateFile = req.files?.certificateFileRef?.[0]?.filename || null;
//             const englishCertificateFile = req.files?.englishCertificateFileRef?.[0]?.filename || null;
//             const invoiceFile = req.files?.invoiceFileRef?.[0]?.filename || null;
//             const inspectionFile = req.files?.invoiceFileRef?.[0]?.filename || null;

// console.log(productFeatureImage , productImage , bLFile , certificateFile , englishCertificateFile , invoiceFile , inspectionFile);


//           const newCapLinkData = { 
//             departure: {
//               carrierNameRef,
//               departureVesselRef,
//               departurePartsOfLandingRef,
//               departureETDRef,
//             },
//             arrival: {
//               arrivalVesselRef,
//               arrivalPartOfDischargeRef,
//               arrivalETDRef,
//             },
//             document: {
//               documentNameRef,
//               documentAddressRef,
//               documentCityRef,
//               documentCountryRef,
//               documentFaxNumberRef,
//               documentTrackingNumberRef,
//               documentPhoneNumber1Ref,
//               documentPhoneNumber2Ref,
//               documentPhoneNumber3Ref,
//               documentCellPhoneNumberOREmailRef,
//               documentenrollementRef,
//             },
//             documentCenter: {
//               documentCenterNameRef,
//               documentCenterAddressRef,
//               documentCenterCityRef,
//               documentCenterCountryRef,
//               documentCenterPhoneNumber1Ref,
//               documentCenterPhoneNumber2Ref,
//               documentCenterPhoneNumber3Ref,
//               documentCenterEmailRef,
//               documentCenterUrlRef,
//               documentCenterOtherInformationRef,
//             },
//             consignee: {
//               consigneeNameRef,
//               consigneeCityRef,
//               consigneeAddressRef,
//               consigneeCountryRef,
//               consigneeFaxNumberRef,
//               consigneePhoneNumber1Ref,
//               consigneePhoneNumber2Ref,
//               consigneePhoneNumber3Ref,
//               consigneeCellPhoneNumberOREmailRef,
//             },
//             notifyParty: {
//               notifyPartyNameRef,
//               notifyPartyCityRef,
//               notifyPartyCountryRef,
//               notifyPartyAddressRef,
//               notifyPartyChassisRef,
//               notifyPartyDoorRef,
//               notifyPartytransmissionRef,
//               notifyPartySteeringRef,
//               notifyPartySeatsRef,
//               notifyPartyRegistrationYearORMonthRef,
//               notifyPartyCellPhoneNumberOREmailRef,
//               notifyPartyReferenceNoRef,
//               notifyPartyEngineNoRef,
//               notifyPartyDriveRef,
//               notifyPartyEngineSizeRef,
//               notifyPartyExtColorRef,
//               notifyPartyFuelRef,
//               notifyPartyFaxNumberRef,
//               notifyPartyMileageRef,
//               notifyPartyModelCodeRef,
//               notifyPartyModelGradeRef,
//               notifyPartyPhoneNumber1Ref,
//               notifyPartyPhoneNumber2Ref,
//               notifyPartyPhoneNumber3Ref,
//               notifyPartyProductNameRef,
//               manufactureYearORMonthRef,
//             },
//             misc: {
//               descriptionRef,
//             },
//             productFeatureImageRef : productFeatureImage,
//             productImageRef : productImage,
//             bLFileRef : bLFile,
//             certificateFileRef : certificateFile,
//             englishCertificateFileRef : englishCertificateFile,
//             invoiceFileRef : invoiceFile,
//             inspectionFileRef: inspectionFile,
//             forwarderName,
//             companyName,
//             optionFeatures,
//             statusFeatures,
//            };
          
//           const newCapLink = new CapLinks(newCapLinkData);
//           await newCapLink.save();
//           res.status(201).json(newCapLink);
        } catch (error) {
          console.error("Error adding capLinks:", error);
          res.status(500).json({ message: "Server Error" });
        }
      };
      // const arrayFields = [
      //   "productFeatureImageRef",
      //   "productImageRef",
      //   "bLFileRef",
      //   "certificateFileRef",
      //   "englishCertificateFileRef",
      //   "invoiceFileRef"
      // ];
      
      // Pehle saar fields le lo
      
      // Phir sirf arrays wali fields ko process karo
      // arrayFields.forEach(field => {
      //   if (Array.isArray(req.body[field])) {
      //     newCapLinkData[field] = req.body[field].flat().ma; // Ensure it's an array os
      //   } else {
      //     newCapLinkData[field] = []; // If not an array, set it to an empty array
      //   }
      // });


      // export const updateCapLinks = async (req, res) => {
      //   const id = req.params.id;
      //   console.log("ID:", id);
      //   try {
  
      //     let { capLinksName , capLinksCompanyName  } = req.body
      //     console.log(capLinksCompanyName  , capLinksName);

      //     const updateCapLinks = await CapLinks.findByIdAndUpdate(id, { capLinksName , capLinksCompanyName  }, { new: true });

      //     if (!updateCapLinks) {
      //       return res.status(404).json({ message: 'CapLinks not found' });
      //     }
          
      //     res.status(200).json({
      //       message: 'CapLinks updated successfully',
      //       car: updateCapLinks,
      //     });
          
      //   }  catch (error) {
      //     console.error(error);
      //     res.status(500).json({ message: 'Server error' });
      //     }
      // };