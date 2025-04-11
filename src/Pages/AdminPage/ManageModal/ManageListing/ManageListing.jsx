import React ,{ useState , useEffect} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios"
import Copyright from "../../../../Components/Copyright/Copyright";

const ManageListing = () => {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData , setModalData] = useState([]);

const  fetchModalData = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/model")
    const data = await res.data;
    console.log(data);
    setModalData(data);
    
    
  }
  catch (error) {
  console.log("error" , error.message);
  }
}

useEffect(()=> {
fetchModalData()
} , [])

 // allModals array
 const allModals = modalData;
console.log(allModals);


 // Filter search
 const filteredModals = allModals.map((car) => {
  car?.carTitle?.toLowerCase()?.includes(search?.toLowerCase())
 } 
  
 );

  // Pagination Logic
  const indexOfLastModal = currentPage * entriesPerPage;
  const indexOfFirstModal = indexOfLastModal - entriesPerPage;
  const currentModal = allModals.slice(indexOfFirstModal, indexOfLastModal);
  const totalPages = Math.ceil(filteredModals.length / entriesPerPage);

  const handleDelete = async(id , title) => {
const response = await axios.delete(`http://localhost:5000/api/model/delete/${id}`)
if(response.status === 200){
  alert(`${title} deleted`); 
  fetchModalData()
  } else {
    alert("error")
    }
  };
  const handleEdit = async(id ) => {
    localStorage.setItem("EditId" , id);
    window.location.href = `/modal-listing/edit-modal-listing/get/${id}`;
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const showModelListingForm = () => {
    window.location.href = "/model-listing/add-model-listing"
  }

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };
  
  const goToPreviousPage = () => {
    goToPage(currentPage - 1);
  };

  console.log(currentModal);
  

  return (

    <div className="w-full h-full rounded-tr-[50px] flex flex-col overflow-y-auto ">
   <div className="w-full  min-h-[1450px] max-h-fit flex flex-col gap-4 p-5 items-start">
    <div className="w-[95%] mx-auto border rounded-md py-3">
      <div className="flex justify-between items-center border-b p-6 mb-4">
        <h1 className="text-3xl font-bold">Manage Modal</h1>
        <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={showModelListingForm}>Add Modal</button>
      </div>

          {/* Controls */}
          <div className="flex  flex-row justify-between items-center px-6 py-2 mb-4 gap-4">
        <div>
          Show
          <select
            value={entriesPerPage}
            onChange={handleEntriesChange}
            className="border p-1 mx-2 border-gray-400 text-gray-500 rounded"
          >
            <option value={10}>10</option>
            <option value={30}>30</option> 
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          Entries
        </div>

       <form>
       <input
          type="search"
          placeholder="Search..."
          className="p-2 border rounded w-[270px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       </form>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full p-3 bg-white  rounded-lg shadow-md">
          <thead className="p-3 border-b">
            <tr >
              <th className="w-[10%] text-center p-5">S.No</th>
              <th className="w-[20%] text-start p-5">Modal</th>
              <th className="w-[20%] text-start p-5">Make</th>
              <th className="w-[20%] text-center p-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentModal 
              .filter((modal) => modal.modalTitle.toLowerCase().includes(search.toLowerCase()))
              .slice(0, entriesPerPage)
              .map((modal, index) => ( 
                <tr key={modal._id} className="border-b ">
                  <td className="p-4 text-center">{indexOfFirstModal + index + 1}</td>
                  {/* <td className="p-4 text-center">
                    <img src={`../../../../admin/uploads/${car.featuredImage}`} alt="Car" className="w-10 h-10 object-cover" />
                  </td>
                   */}
                  <td className="p-4 text-start">{modal.modalTitle}</td>
                  <td className="p-4 text-start">{modal.modalMake}</td>  
                  <td className="p-4 justify-center flex space-x-2">
                    <button className="text-orange-500" onClick={() => handleEdit(modal._id , modal.modalTitle)}>
                      <FaEdit />
                    </button>
                    <button className="text-red-500" onClick={() => handleDelete(modal._id , modal.modalTitle)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className=" flex w-full p-6 justify-between items-center">
        <div className="dataNumber w-auto text-sm text-neutral-600 flex justify-start font-semibold ">
<p>{`Showing ${indexOfFirstModal} to ${indexOfLastModal} of ${allModals.length} entries`}</p>
        </div>
<div className="w-auto flex-justify-end h-auto ">
<button
    className={`px-2 py-2 mx-1 text-2xl rounded text-neutral-400 font-bold ${currentPage === 1 && 'disabled cursor-not-allowed' }`}
    onClick={goToPreviousPage}
    disabled={currentPage === 1}
  >
    &laquo;
  </button>

  {/* Page Numbers */}
  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index + 1}
      className={`px-4 py-2 mx-1  rounded ${
        currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300'
      }`}
      onClick={() => goToPage(index + 1)}
    >
      {index + 1}
    </button>
  ))}

  <button
    className={`px-4 py-2 mx-1 font-bold text-2xl text-neutral-400 rounded ${
      currentPage === totalPages && 'disabled cursor-not-allowed'
    }`}
    onClick={goToNextPage}
    disabled={currentPage === totalPages}
  >
      &raquo;
  </button>
</div>
</div>

    </div>
     <Copyright/>
   </div>
   </div>
  );
};

export default ManageListing;

