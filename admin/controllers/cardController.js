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

export const postCar = async (req, res) => {
        try {
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
            carAvailability
          } = req.body;
      
          // Multer files
          const featuredImage = req.files?.featuredImage?.[0]?.filename || null;
          const attachmentImage = req.files?.attachmentImage?.[0]?.filename || null;
          const galleryImages = req.files?.galleryImages
            ? req.files.galleryImages.map(file => file.filename)
            : [];
      
          console.log('Featured Image:', featuredImage);
          console.log('Attachment Image:', attachmentImage);
          console.log('Gallery Images:', galleryImages);
      
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
            featuredImage,
            attachmentImage,
            galleryImages
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
    const { id } = req.params;

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
      carAvailability
    } = req.body;

    // Images handling
    const featuredImage = req.files?.featuredImage?.[0]?.filename;
    const attachmentImage = req.files?.attachmentImage?.[0]?.filename;
    const galleryImages = req.files?.galleryImages
      ? req.files.galleryImages.map(file => file.filename)
      : [];

    // Find car by ID
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    // Update fields
    car.carTitle = carTitle || car.carTitle;
    car.carCondition = carCondition || car.carCondition;
    car.carType = carType || car.carType;
    car.carMake = carMake || car.carMake;
    car.carModel = carModel || car.carModel;
    car.carPrice = carPrice || car.carPrice;
    car.carYear = carYear || car.carYear;
    car.carDriveType = carDriveType || car.carDriveType;
    car.carTransmission = carTransmission || car.carTransmission;
    car.carFuelType = carFuelType || car.carFuelType;
    car.carMileage = carMileage || car.carMileage;
    car.carEngineSize = carEngineSize || car.carEngineSize;
    car.carCylinder = carCylinder || car.carCylinder;
    car.carColour = carColour || car.carColour;
    car.carDoor = carDoor || car.carDoor;
    car.carVin = carVin || car.carVin;
    car.carAvailability = carAvailability || car.carAvailability;

    // Images
    if (featuredImage) car.featuredImage = featuredImage;
    if (attachmentImage) car.attachmentImage = attachmentImage;
    if (galleryImages.length > 0) car.galleryImages = galleryImages;

    // Save updated car
    const updatedCar = await car.save();

    res.status(200).json({
      message: "Car updated successfully",
      data: updatedCar
    });

  } catch (err) {
    console.error('Error updating car:', err);
    res.status(400).json({
      message: "Failed to update car",
      error: err.message
    });
  }
};
