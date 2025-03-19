import Car from '../models/CarModel.js';
import upload from '../middlewares/upload.js'

// GET all cards
export const getCards = async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const cards = await Car.find()
                .skip((page - 1) * limit)
                .limit(limit);

        res.json(cards);
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
      
// Add New Car
// router.post('/add', verifyToken, async (req, res) => {
//         const {
//           carTitle,
//           carCondition,
//           CarType,
//           carMake,
//           carModel,
//           carPrice,
//           carYear,
//           carDriveType,
//           carTransmission,
//           carFuelType,
//           carMileage,
//           carEngineSize,
//           carCylinder,
//           carColour,
//           carDoor,
//           carVin,
//           carAvailability,
//           // image, // Uncomment if needed
//           // miles, // Uncomment if needed
//           // transition // Uncomment if needed
//         } = req.body;
      
//         try {
//           const newCar = new Car({
//             carTitle,
//             carCondition,
//             CarType,
//             carMake,
//             carModel,
//             carPrice,
//             carYear,
//             carDriveType,
//             carTransmission,
//             carFuelType,
//             carMileage,
//             carEngineSize,
//             carCylinder,
//             carColour,
//             carDoor,
//             carVin,
//             carAvailability,
//             // image,
//             // miles,
//             // transition
//           });
      
//           const savedCar = await newCar.save();
      
//           res.status(201).json({
//             message: "Car added successfully",
//             data: savedCar
//           });
//         } catch (err) {
//           res.status(400).json({
//             message: "Failed to add car",
//             error: err.message
//           });
//         }
//       });