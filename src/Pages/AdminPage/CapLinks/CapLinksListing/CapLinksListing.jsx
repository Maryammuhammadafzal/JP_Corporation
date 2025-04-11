import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import axios from "axios";
import Copyright from "../../../../Components/Copyright/Copyright";

const CapLinksListing = () => {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [capLinksData, setCapLinksData] = useState([]);

  const fetchCapLinks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/capLinks/");
      const data = await res.data;
      setCapLinksData(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
 

  useEffect(() => {
    fetchCapLinks();
  }, []);

  // allCapLinks array
  const allCapLinks = capLinksData;

  // Filter search
  const filteredCapLinks = allCapLinks.map((capLinks) => {
    capLinks?.capLinksName?.toLowerCase()?.includes(search?.toLowerCase());
  });

  // Pagination Logic
  const indexOfLastCapLinks = currentPage * entriesPerPage;
  const indexOfFirstCapLinks = indexOfLastCapLinks - entriesPerPage;
  const currentCapLinks = filteredCapLinks.slice(
    indexOfFirstCapLinks,
    indexOfLastCapLinks
  );
  const totalPages = Math.ceil(filteredCapLinks.length / entriesPerPage);

  // Delete Cap Link
  const handleDelete = async (id, title) => {
    const response = await axios.delete(
      `http://localhost:5000/api/capLinks/delete/${id}`
    );
    if (response.status === 200) {
      alert(`${title} deleted`);
      fetchCapLinks();
    } else {
      alert("error");
    }
  };

  const handleEdit = async (id) => {
    localStorage.setItem("EditCapLinksId", id);
    window.location.replace(
      `/cap-links-listing/edit-cap-links-listing/get/${id}`
    );
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const ShowCapLinksListingForm = () => {
    window.location.href = "/cap-links-listing/add-cap-links-listing";
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
    <div className="w-full h-full rounded-tr-[50px] flex flex-col overflow-y-auto ">
      <div className="w-full min-h-[1450px] flex flex-col gap-4 p-5 items-start">
        <div className="w-[95%] mx-auto border rounded-md py-3">
          <div className="flex justify-between items-center border-b p-6 mb-4">
            <h1 className="text-3xl font-bold">Cap Links</h1>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer"
              onClick={ShowCapLinksListingForm}
            >
              Generate Cap Links
            </button>
          </div>

          {/* Controls */}
          <div className="flex flex-col  text-sm font-bold text-neutral-500 md:flex-row justify-between items-center  px-6 py-2 mb-4 gap-4">
            <div>
              Show
              <select
                value={entriesPerPage}
                onChange={handleEntriesChange}
                className="border p-1 mx-3 text-sm font-bold text-neutral-500 rounded border-neutral-500"
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
              className="p-2 border border-neutral-500 rounded w-full md:w-64"
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
                  <th className="p-3 text-sm">Name</th>
                  <th className="p-3 text-sm">Comp Name</th>
                  <th className="p-3 text-sm">Forwarder Name</th>
                  <th className="p-3 text-sm">Manufacture Year/Month</th>
                  <th className="p-3 text-sm">Uploaded At</th>
                  <th className="p-3 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {capLinksData && capLinksData
                  .filter((capLink) => capLink?.departure?.carrierNameRef ?
                    capLink?.departure?.carrierNameRef 
                      .toLowerCase()
                      .includes(search.toLowerCase()) : ""
                  )
                  .slice(0, entriesPerPage)
                  .map((capLink, index) => (
                    <tr key={capLink._id} className="border-b text-sm">
                      <td className="p-2 text-center">
                        {indexOfFirstCapLinks + index + 1}
                      </td>
                      <td className="p-2 ">
                        <img
                          src={`../../../../../admin/${capLink.productFeatureImageRef}`}
                          alt="capLinks"
                          className="w-10 h-10 object-cover"
                        />
                      </td>

                      <td className="p-2 text-start flex-grow-1">
                        {capLink.departure.carrierNameRef}
                      </td>
                      <td className="p-2 text-center">{capLink.companyName}</td>
                      <td className="p-2 text-center">
                        {capLink.forwarderName}
                      </td>
                      <td className="p-2 text-center">
                        {
                          capLink.notifyParty
                            .notifyPartyRegistrationYearORMonthRef
                        }
                      </td>
                      <td className="p-2 text-center">
                        {capLink.createdAt.slice(0, 10)}
                      </td>
                      <td className="p-2 justify-center flex space-x-2">
                        <button
                          className="text-white p-1 rounded bg-emerald-500 "
                          onClick={() => handleEdit(capLink._id)}
                        >
                          <FaEye size={15} />
                        </button>
                        <button
                          className="text-white p-1 rounded bg-orange-500"
                          onClick={() => handleEdit(capLink._id)}
                        >
                          <FaEdit size={15} />
                        </button>
                        <button
                          className="text-white p-1 rounded bg-red-500"
                          onClick={() =>
                            handleDelete(
                              capLink._id,
                              capLink.departure.carrierNameRef
                            )
                          }
                        >
                          <FaTrash size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className=" flex w-full p-6 justify-between items-center">
        <div className="dataNumber w-auto text-sm text-neutral-600 flex justify-start font-semibold ">
<p>{`Showing ${indexOfFirstCapLinks} to ${indexOfLastCapLinks} of ${allCapLinks.length} entries`}</p>
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

        <Copyright />
      </div>
    </div>
  );
};

export default CapLinksListing;
