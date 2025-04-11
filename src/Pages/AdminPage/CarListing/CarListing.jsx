import React ,{ useState , useEffect} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios"
import Copyright from "../../../Components/Copyright/Copyright";


const CarListings = () => {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [carData , setCarData] = useState([]);

const  fetchCarData = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/dashboard")
    const data = await res.data;
    setCarData(data);
  }catch (error) {
  console.log("error" ,error.message);
  }
}

useEffect(()=> {

fetchCarData()

} , [])

 // allCars array
 const allCars = carData;

 // Filter search
 const filteredCars = allCars.map((car) =>
 {car?.carTitle?.toLowerCase()?.includes(search?.toLowerCase()) } 
  
 );
 console.log(filteredCars);
  // Pagination Logic
  const indexOfLastCar = currentPage * entriesPerPage;
  const indexOfFirstCar = indexOfLastCar - entriesPerPage;
  const currentCars = allCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / entriesPerPage);

  const handleDelete = async(id , title) => {
const response = await axios.delete(`http://localhost:5000/api/dashboard/delete/${id}`)
if(response.status === 200){
  alert(`${title} deleted`); 
  fetchCarData()
  } else {
    alert("error")
    }
  };

  const handleEdit = async(id ) => {
    localStorage.setItem("EditId" , id);
    window.location.href = `/listing/edit-listing/get/${id}`;
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const ShowAddListingForm = () => {
    window.location.replace("/listing/add-listing")
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

  return (
  <div className="w-full h-full rounded-tr-[50px] flex flex-col overflow-y-auto ">
   <div className="w-full min-h-[1450px] flex flex-col gap-4 p-5 items-start">
   <div className="w-full bg-white h-auto border rounded-md my-5 py-3">
      <div className=" flex justify-between items-center border-b p-6 mb-4">
        <h1 className="text-3xl font-bold">Car Listings</h1>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={ShowAddListingForm}>Add Listing</button>
      </div>

          {/* Controls */}
          <div className=" flex flex-col md:flex-row justify-between items-center px-6 py-2 mb-4 gap-4">
        <div>
          Show
          <select
            value={entriesPerPage}
            onChange={handleEntriesChange}
            className="border p-1 px-2 mx-3 border-gray-400 text-gray-500 rounded"
          >
            <option value={10}>10</option>
            <option value={30}>30</option> 
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          entries
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full md:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto whitespace-nowrap"> 
        <table className="w-full p-3 bg-white rounded-lg ">
          <thead className="p-3 border-b ">
            <tr >
              <th className="p-3 text-sm">S.No</th>
              <th className="p-3 text-sm">Image</th>
              <th className="p-3 text-sm">Title</th>
              <th className="p-3 text-sm">Type</th>
              <th className="p-3 text-sm">Make</th>
              <th className="p-3 text-sm">Year</th>
              <th className="p-3 text-sm">Uploaded At</th>
              <th className="p-3 text-sm">Uploaded By</th>
              <th className="p-3 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCars 
              .filter((car) => car.carTitle.toLowerCase().includes(search.toLowerCase()))
              .slice(0, entriesPerPage)
              .map((car, index) => ( 
                <tr key={car._id} className="border-b text-sm ">
                  <td className="p-2 text-center">{indexOfFirstCar + index + 1}</td>
                  <td className="p-2 text-center">
                    <img src={`http://localhost:5000/${car.featuredImage}`} alt="Car" className="w-10 h-10 object-cover" />
                  </td>
                  
                  <td className="p-2  text-start">{car.carTitle}</td>
                  <td className="p-2 text-center">{car.carType}</td>
                  <td className="p-2 text-center">{car.carMake}</td>
                  <td className="p-2 text-center">{car.carYear}</td>
                  <td className="p-2 text-center">{car.createdAt.slice(0,10)}</td>
                  <td className=" p-2 text-center">admin</td>
                  <td className="p-2 justify-center items-center h-auto flex space-x-2">
                    <button className="text-orange-500" onClick={() => handleEdit(car._id , car.carTitle)}>
                      <FaEdit />
                    </button>
                    <button className="text-red-500" onClick={() => handleDelete(car._id , car.carTitle)}>
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
<p>{`Showing ${indexOfFirstCar} to ${indexOfLastCar} of ${allCars.length} entries`}</p>
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
}

export default CarListings;

