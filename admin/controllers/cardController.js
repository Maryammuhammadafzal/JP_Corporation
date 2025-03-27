import Car from '../models/CarModel.js';
import upload from '../middlewares/upload.js'

// GET all cards
export const getCars = async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 100;

        const getCar = await Car.find()
                .skip((page - 1) * limit)
                .limit(limit);

        res.json(getCar);
};

export const getCarsByQuery = async (req, res) => {
  try {
    let filter = {};

    console.log("REQ.QUERY ===>", req?.query);

    if (req.query.type) {
      console.log("Fetching by TYPE:", req.query.type);
      filter.carMake = req.query.type;
    } else {
      console.log("Searching by custom fields...");
      if (req.query.carMake) {
        filter.carMake = req.query.make;
        console.log("carMake ===>", req.query.carMake);
      }
      if (req.query.carModel) {
        filter.carModel = req.query.model;
        console.log("carModel ===>", req.query.carModel);
      }
      if (req.query.carYear) {
        filter.minYear = req.query.maxYear;
        console.log("carYear ===>", req.query.carYear);
      }
    }

    console.log("FINAL FILTER OBJECT ===>", filter);

    const cars = await Car.find(filter);
    // console.log("CARS ===>", cars);

    res.json(cars);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};




export const postCar = async (req, res) => {
        try {
      
          const {
            carTitle,
            carCondition,
            carType,
            carMake,
            carModel,
            carPrice,
            carYear,
            carDriveType,
            carTransmission,
            carFuelType,
            carMileage,
            carEngineSize,
            carCylinder,
            carColour,
            carDoor,
            carVin,
            carAvailability,
            carAllFeatures,
            carSafetyFeatures
          } = req.body;
      
          console.log(req.body);
          console.log("Files" + req.file);
          
          
          // Parse features
          let parsedcarAllFeatures = [];
if (req.body.carAllFeatures) {
  parsedcarAllFeatures = JSON.parse(req.body.carAllFeatures);
} else {
  console.log('No allFeatures provided');
}
          let parsedCarSafetyFeatures = [];
if (req.body.carSafetyFeatures) {
  parsedCarSafetyFeatures = JSON.parse(req.body.carSafetyFeatures);
} else {
  console.log('No allFeatures provided');
}
         

          // Multer files
          // const featuredImage = req.files?.featuredImage?.[0]?.filename || null;
          const featuredImage = req.file ? req.file.filename : null;
          console.log(featuredImage);
          
          const attachmentImage = req.file ? req.file.filename : null;
           console.log(attachmentImage);
           
          // const galleryImages = req.file ? req.file.filename.map(file => file.filename) : [];
          const galleryImages = req.files ? req.files.map((file) => file.filename) : [];
          // console.log('Featured Image:', featuredImage);
          // console.log('Attachment Image:', attachmentImage);
          // console.log('Gallery Images:', galleryImages);
      
          const newCar = new Car({
            carTitle,
            carCondition,
            carType,
            carMake,
            carModel,
            carPrice,
            carYear,
            carDriveType,
            carTransmission,
            carFuelType,
            carMileage,
            carEngineSize,
            carCylinder,
            carColour,
            carDoor,
            carVin,
            carAvailability,
            // featuredImage,
            // attachmentImage,
            galleryImages,
            carAllFeatures : parsedcarAllFeatures,
            carSafetyFeatures : parsedCarSafetyFeatures,

          });
      
          const savedCar = await newCar.save();
      
          res.status(201).json({
            message: "Car added successfully",
            data: savedCar
          });
      
        } catch (err) {
          console.error('Error adding car:', err);
          res.status(400).json({
            message: "Failed to add car",
            error: err.message
          });
        }
      };


      // UPDATE car
export const updateCar = async (req, res) => {
  try {
    const { id } = req.params.id;

    console.log('Updating car with ID:', id);
    console.log('BODY:', req.body);
    console.log('FILES:', req.files);

    const {
      carTitle,
      carCondition,
      carType,
      carMake,
      carModel,
      carPrice,
      carYear,
      carDriveType,
      carTransmission,
      carFuelType,
      carMileage,
      carEngineSize,
      carCylinder,
      carColour,
      carDoor,
      carVin,
      carAvailability,
      carDescription,
      featuredImage,
      galleryImages,
      attachmentImage,
      carAllFeatures,
      carSafetyFeatures,
    } = req.body;


    // Parse features if exists
    let parsedCarAllFeatures = [];
    if (carAllFeatures) {
      parsedCarAllFeatures = JSON.parse(carAllFeatures);
    }
    let parsedCarSafetyFeatures = [];
    if (carAllFeatures) {
      parsedCarSafetyFeatures = JSON.parse(carAllFeatures);
    }

      //  Prepare updated fields
      const updatedFields = {
        carTitle,
        carCondition,
        carType,
        carMake,
        carModel,
        carPrice,
        carYear,
        carDriveType,
        carTransmission,
        carFuelType,
        carMileage,
        carEngineSize,
        carCylinder,
        carColour,
        carDoor,
        carVin,
        carAvailability,
        carDescription,
        featuredImage,
        galleryImages,
        attachmentImage,
        carAllFeatures,
        carSafetyFeatures,
      };

      //  Add features array 
    if (parsedCarAllFeatures.length > 0) {
      updatedFields.carAllFeatures = parsedCarAllFeatures;
    }
    if (parsedCarSafetyFeatures.length > 0) {
      updatedFields.carSafetyFeatures = parsedCarSafetyFeatures;
    }

    // Handle Images
    if (req.files?.featuredImage) {
      updatedFields.featuredImage = req.files.featuredImage[0].filename;
    }

    if (req.files?.attachmentImage) {
      updatedFields.attachmentImage = req.files.attachmentImage[0].filename;
    }

    if (req.files?.galleryImages) {
      updatedFields.galleryImages = req.files.galleryImages.map((file) => file.filename);
    }

// findByIdAndUpdate 
const updatedCar = await Car.findByIdAndUpdate(id, updatedFields, { new: true });

if (!updatedCar) {
  return res.status(404).json({ message: 'Car not found' });
}

res.status(200).json({
  message: 'Car updated successfully',
  car: updatedCar,
});
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Server error' });
}
  
};

