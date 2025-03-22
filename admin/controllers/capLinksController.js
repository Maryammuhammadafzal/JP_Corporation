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
export const getCapLinksById = async (req, res) => {
        const id = req.params.id;
        console.log(id);
        
        try {
            const capLinks = await CapLinks.findById(id);     
        
            if (!capLinks) {
              return res.status(404).json({ message: "CapLinks not found" });
            }
        
            res.status(200).json(capLinks);
          } catch (error) {
            console.error("Error fetching CapLinks by ID:", error);
            res.status(500).json({ message: "Server error" });
          }
    };
    
    // Delete CapLinks
export const deleteCapLinks =  async (req, res) => {
        const id = req.params.id;
        console.log(id);
        
    
        try {
            const deletedCapLinks = await CapLinks.findByIdAndDelete(id);
    
            if (!deletedCapLinks) {
                return res.status(404).json({ message: "CapLinks not found" });
            }
    
            res.json({ message: "CapLinks deleted successfully", data: deletedCapLinks });
        } catch (err) {
            res.status(400).json({ message: "Failed to delete CapLinks", error: err.message });
        }
    };

    export const addCapLinks = async (req, res) => {
        try {
          const { capLinksCompanyName , capLinksName } = req.body;  
          console.log(capLinksCompanyName , capLinksName);  
      
          if (!capLinksCompanyName  || !capLinksName) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          const newCapLinks = new CapLinks({
            capLinksCompanyName ,
            capLinksName
          });
      
          await newCapLinks.save();
          res.status(201).json(newCapLinks);
        } catch (error) {
          console.error("Error adding capLinks:", error);
          res.status(500).json({ message: "Server Error" });
        }
      };


      export const updateCapLinks = async (req, res) => {
        const id = req.params.id;
        console.log("ID:", id);
        try {
  
          let { capLinksName , capLinksCompanyName  } = req.body
          console.log(capLinksCompanyName  , capLinksName);

          const updateCapLinks = await CapLinks.findByIdAndUpdate(id, { capLinksName , capLinksCompanyName  }, { new: true });

          if (!updateCapLinks) {
            return res.status(404).json({ message: 'CapLinks not found' });
          }
          
          res.status(200).json({
            message: 'CapLinks updated successfully',
            car: updateCapLinks,
          });
          
        }  catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
          }
      };