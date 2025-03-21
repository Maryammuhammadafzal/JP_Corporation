import Modal from "../models/ModalModel.js";
import verifyToken from "../middlewares/tokenVerify.js";

// // Get All Car
// export const getModal =  async (req, res) => {
//         const page = parseInt(req.query.page) || 1;
//         const limit = parseInt(req.query.limit) || 100;

//         const getModal = await Modal.find()
//                 .skip((page - 1) * limit)
//                 .limit(limit);

//         res.json(getModal);
// };


// // Get Car by id
// export const getModalById = async (req, res) => {
//         const id = req.params.id;
//         try {
//             const modal = await Modal.findById(id);     
        
//             if (!modal) {
//               return res.status(404).json({ message: "modal not found" });
//             }
        
//             res.status(200).json(modal);
//           } catch (error) {
//             console.error("Error fetching modal by ID:", error);
//             res.status(500).json({ message: "Server error" });
//           }
//     };
    
//     // Delete Car
// export const deleteModal =  async (req, res) => {
//         const id = req.params.id;
//         console.log(id);
        
    
//         try {
//             const deletedModal = await Modal.findByIdAndDelete(id);
    
//             if (!deletedModal) {
//                 return res.status(404).json({ message: "Car not found" });
//             }
    
//             res.json({ message: "Car deleted successfully", data: deletedModal });
//         } catch (err) {
//             res.status(400).json({ message: "Failed to delete car", error: err.message });
//         }
//     };

    export const addModal = async (req, res) => {
        try {
          const { modalMake, modalTitle } = req.body;  
          console.log(modalMake, modalTitle);  
      
          if (!modalMake || !modalTitle) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          const newModal = new Modal({
            modalMake,
            modalTitle
          });
      
          await newModal.save();
          res.status(201).json(newModal);
        } catch (error) {
          console.error("Error adding car:", error);
          res.status(500).json({ message: "Server Error" });
        }
      };
    