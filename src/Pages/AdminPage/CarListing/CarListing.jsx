import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import Copyright from "../../../Components/Copyright/Copyright";
import Pagination from "../../../Components/Pagination/Pagination";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const CarListings = () => {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [carData, setCarData] = useState([]);

  const fetchCarData = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/dashboard`);
      const data = await res.data;
      setCarData(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  // allCars array
  const allCars = carData;

  // Filter search
  const filteredCars = allCars.map((car) => {
    car?.carTitle?.toLowerCase()?.includes(search?.toLowerCase());
  });

  // Pagination Logic
  const indexOfLastCar = currentPage * entriesPerPage;
  const indexOfFirstCar = indexOfLastCar - entriesPerPage;
  const currentCars = allCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / entriesPerPage);

 
  // Delete Cap Listing
  const handleDelete = async (id, title) => {
    try {

      const response = await axios.delete(
        `${baseURL}/api/dashboard/delete/${id}`
      );
      if (response.status === 200) {
        alert(`${title} deleted`);
        fetchCarData();
      } else {
        alert("error");
      }
    } catch (error) {
       alert ("Error Deleting Car")
    }
  };

  const handleEdit = async (id) => {
    localStorage.setItem("EditId", id);
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
    window.location.replace("/listing/add-listing");
  };

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
    <div className="w-full max-h-auto min-h-screen rounded-tr-[50px] flex flex-col overflow-y-auto ">
      <div className="w-full flex flex-col gap-4 p-5 mb-4 max-sm:p-3 items-start">
        <div className="w-[95%] mx-auto border rounded-md py-3">
          <div className="flex justify-between items-center border-b max-sm:p-3 p-6 mb-4">
            <h1 className="text-3xl font-bold max-sm:text-2xl max-xs:text-xl">
              Car Listing
            </h1>
            <button
              className="bg-orange-400 text-white px-4 max-sm:text-sm max-sm:px-3 py-2 rounded-lg cursor-pointer"
              onClick={ShowAddListingForm}
            >
              Add Listing
            </button>
          </div>

          {/* Controls */}
          <div className=" flex flex-col md:flex-row max-md:gap-6 justify-between max-md:items-start max-md:w-full items-center max-md:px-3  px-6 py-2 mb-4 gap-4">
            <div className="max-md:text-[14px] max-sm:text-[12px]">
              Show
              <select
                value={entriesPerPage}
                onChange={handleEntriesChange}
                className="border p-1 px-2 mx-2 border-gray-400 text-gray-500 rounded"
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
              className="p-2 max-md:pt-1 border rounded w-full md:w-64 max-md:text-md max-sm:text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto whitespace-nowrap">
            <table className="min-w-full p-3 bg-white  rounded-lg shadow-md">
              <thead className="p-3 border-b">
                <tr>
                  <th className="p-3 text-sm">S.No</th>
                  <th className="p-3 text-sm">Image</th>
                  <th className="p-3 text-sm text-start">Title</th>
                  <th className="p-3 text-sm">Type</th>
                  <th className="p-3 text-sm">Make</th>
                  <th className="p-3 text-sm">Year</th>
                  <th className="p-3 text-sm">Uploaded At</th>
                  <th className="p-3 text-sm">Uploaded By</th>
                  <th className="p-3 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentCars &&
                  currentCars
                    .filter((car) =>
                      car.carTitle.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(0, entriesPerPage)
                    .map((car, index) => (
                      <tr key={car._id} className="border-b text-sm">
                        <td className="p-2 text-center">
                          {indexOfFirstCar + index + 1}
                        </td>
                        <td className="p-2 ">
                          <img
                            src={`${baseURL}/${car.featuredImage}`}
                            alt="cars"
                            className="w-10 h-10 object-cover"
                          />
                        </td>

                        <td className="p-2  text-start ">{car.carTitle}</td>
                        <td className="p-2 text-center">{car.carType}</td>
                        <td className="p-2 text-center">{car.carMake}</td>
                        <td className="p-2 text-center">{car.carYear}</td>
                        <td className="p-2 text-center">
                          {car.createdAt.slice(0, 10)}
                        </td>
                        <td className=" p-2 text-center">admin</td>
                        <td className="p-2 justify-center items-center h-auto flex space-x-2">
                          <button
                            className="text-white p-1 rounded bg-orange-400"
                            onClick={() => handleEdit(car._id, car.carTitle)}
                          >
                            <FaEdit size={13} />
                          </button>
                          <button
                            className="text-white p-1 rounded bg-red-500"
                            onClick={() => handleDelete(car._id , car.carTitle)}
                          >
                            <FaTrash size={13} />
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>

          <div className=" flex w-full max-md:flex-col max-md:gap-3 max-md:p-3 p-6 justify-between items-center">
            <div className="dataNumber w-auto text-sm max-sm:text-xs text-neutral-600 flex justify-start font-semibold ">
              <p>{`Showing ${indexOfFirstCar} to ${indexOfLastCar} of ${allCars.length} entries`}</p>
            </div>
            <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}/>
      
          </div>
        </div>

        <div className="w-full h-[150px] ">
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default CarListings;
/*  */
