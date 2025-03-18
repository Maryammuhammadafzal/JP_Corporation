import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const CarListings = () => {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy car data (add more items to test)
  const allCars = Array.from({ length: entriesPerPage }, (_, index) => ({
    id: index + 1,
    image: "https://via.placeholder.com/50",
    title: `Car Model ${index + 1}`,
    type: "SEDAN",
    make: "TOYOTA",
    year: 2000 + (index % 20),
    uploadedAt: "10-03-2025 03:17 AM",
    uploadedBy: "Admin",
  }));

  // Filter search
  const filteredCars = allCars.filter((car) =>
    car.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastCar = currentPage * entriesPerPage;
  const indexOfFirstCar = indexOfLastCar - entriesPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / entriesPerPage);

  const handleDelete = (id) => {
    console.log(`Delete car with id: ${id}`);
    // Normally you'd update your DB or state here
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const ShowAddListingForm = () => {
    window.location.href = "/listing/add-listing"
  }


  return (
    <div className="w-full mx-auto border rounded-md py-3">
      <div className="flex justify-between items-center border-b p-6 mb-4">
        <h1 className="text-3xl font-bold">Car Listings</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={ShowAddListingForm}>Add Listing</button>
      </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-2 mb-4 gap-4">
        <div>
          Show{" "}
          <select
            value={entriesPerPage}
            onChange={handleEntriesChange}
            className="border p-1 rounded"
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>{" "}
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

      <div className="overflow-x-auto">
        <table className="min-w-full p-3 bg-white  rounded-lg shadow-md">
          <thead className="p-3 border-b">
            <tr >
              <th className="p-5">S.No</th>
              <th className="p-5">Image</th>
              <th className="p-5">Title</th>
              <th className="p-5">Type</th>
              <th className="p-5">Make</th>
              <th className="p-5">Year</th>
              <th className="p-5">Uploaded At</th>
              <th className="p-5">Uploaded By</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCars
              .filter((car) => car.title.toLowerCase().includes(search.toLowerCase()))
              .map((car, index) => (
                <tr key={car.id} className="border-b">
                  <td className="p-2 text-center">{index + 1}</td>
                  <td className="p-2 text-center">
                    <img src={car.image} alt="Car" className="w-10 h-10 object-cover" />
                  </td>
                  <td className="p-2 text-center">{car.title}</td>
                  <td className="p-2 text-center">{car.type}</td>
                  <td className="p-2 text-center">{car.make}</td>
                  <td className="p-2 text-center">{car.year}</td>
                  <td className="p-2 text-center">{car.uploadedAt}</td>
                  <td className="p-2 text-center">{car.uploadedBy}</td>
                  <td className="p-2 justify-center flex space-x-2">
                    <button className="text-blue-500">
                      <FaEdit />
                    </button>
                    <button className="text-red-500" onClick={() => handleDelete(car.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center">
        {/* Pagination (static for now) */}
        <button className="px-4 py-2 mx-1 bg-gray-300 rounded">1</button>
        <button className="px-4 py-2 mx-1 bg-gray-300 rounded">2</button>
        <button className="px-4 py-2 mx-1 bg-gray-300 rounded">3</button>
      </div>
    </div>
  );
};

export default CarListings;

