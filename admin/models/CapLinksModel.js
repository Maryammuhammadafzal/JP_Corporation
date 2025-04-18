import mongoose from "mongoose";

const CapLinksSchema = new mongoose.Schema({
  departure: {
    carrierNameRef: {type : String , required: true },
    departureVesselRef: String,
    departurePartsOfLandingRef: String,
    departureETDRef: String,
  },
  arrival: {
    arrivalVesselRef: String,
    arrivalPartOfDischargeRef: String,
    arrivalETDRef: String,
  },
  document: {
    documentNameRef: String,
    documentAddressRef: String,
    documentCityRef: String,
    documentCountryRef: String,
    documentFaxNumberRef: String,
    documentTrackingNumberRef: String,
    documentPhoneNumber1Ref: String,
    documentPhoneNumber2Ref: String,
    documentPhoneNumber3Ref: String,
    documentCellPhoneNumberOREmailRef: String,
    documentenrollementRef: String,
  },
  documentCenter: {
    documentCenterNameRef: String,
    documentCenterAddressRef: String,
    documentCenterCityRef: String,
    documentCenterCountryRef: String,
    documentCenterPhoneNumber1Ref: String,
    documentCenterPhoneNumber2Ref: String,
    documentCenterPhoneNumber3Ref: String,
    documentCenterEmailRef: String,
    documentCenterUrlRef: String,
    documentCenterOtherInformationRef: String,
  },
  consignee: {
    consigneeNameRef: String,
    consigneeCityRef: String,
    consigneeAddressRef: String,
    consigneeCountryRef: String,
    consigneeFaxNumberRef: String,
    consigneePhoneNumber1Ref: String,
    consigneePhoneNumber2Ref: String,
    consigneePhoneNumber3Ref: String,
    consigneeCellPhoneNumberOREmailRef: String,
  },
  notifyParty: {
    notifyPartyNameRef: String,
    notifyPartyCityRef: String,
    notifyPartyCountryRef: String,
    notifyPartyAddressRef: String,
    notifyPartyChassisRef: String,
    notifyPartyDoorRef: String,
    notifyPartytransmissionRef: String,
    notifyPartySteeringRef: String,
    notifyPartySeatsRef: String,
    notifyPartyRegistrationYearORMonthRef: String,
    notifyPartyCellPhoneNumberOREmailRef: String,
    notifyPartyReferenceNoRef: String,
    notifyPartyEngineNoRef: String,
    notifyPartyDriveRef: String,
    notifyPartyEngineSizeRef: String,
    notifyPartyExtColorRef: String,
    notifyPartyFuelRef: String,
    notifyPartyFaxNumberRef: String,
    notifyPartyMileageRef: String,
    notifyPartyModelCodeRef: String,
    notifyPartyModelGradeRef: String,
    notifyPartyPhoneNumber1Ref: String,
    notifyPartyPhoneNumber2Ref: String,
    notifyPartyPhoneNumber3Ref: String,
    notifyPartyProductNameRef: String,
    manufactureYearORMonthRef: {type : String , required: true },
  },
  misc: {
    descriptionRef: String,
  },
  productFeatureImageRef: String,
  productImageRef: [String],
  bLFileRef: String,
  certificateFileRef: String,
  englishCertificateFileRef: String,
  invoiceFileRef: String,
  inspectionFileRef : String,
  forwarderName:  {type : String , required: true },
  companyName:  {type : String , required: true },
  optionFeatures: [{ type: String}],
  statusFeatures: [{ type: String}],
  
}, { timestamps: true });
export default mongoose.model("CapLinks", CapLinksSchema);