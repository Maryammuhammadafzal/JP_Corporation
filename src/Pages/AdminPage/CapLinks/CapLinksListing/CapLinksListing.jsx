import React ,{ useState , useEffect} from "react";
import { FaEdit, FaTrash , FaEye} from "react-icons/fa";
import axios from "axios"

const CapLinksListing = () => {
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [capLinksData , setCapLinksData] = useState([]);

const  fetchCapLinks = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/capLinks/")
    const data = await res.data;
    console.log(data);
    setCapLinksData(data);
    
  }catch (error) {
  console.log("error" ,error.message);
  
  }
}

capLinksData.map((capLink) => {console.log(capLink)})

useEffect(()=> {
  
fetchCapLinks()
} , [])

 // allCapLinks array
 const allCapLinks = capLinksData;
console.log(allCapLinks);


 // Filter search
 const filteredCapLinks = allCapLinks.map((capLinks) =>
 {
  capLinks?.capLinksName?.toLowerCase()?.includes(search?.toLowerCase())
 } 
  
 );

  // Pagination Logic
  const indexOfLastCapLinks = currentPage * entriesPerPage;
  const indexOfFirstCapLinks = indexOfLastCapLinks - entriesPerPage;
  const currentCars = filteredCapLinks.slice(indexOfFirstCapLinks, indexOfLastCapLinks);
  const totalPages = Math.ceil(filteredCapLinks.length / entriesPerPage);

//   const handleDelete = async(id , title) => {
// const response = await axios.delete(`http://localhost:5000/api/capLinks/delete/${id}`)
// if(response.status === 200){
//   alert(`${title} deleted`); 
//   fetchCapLinks()
//   } else {
//     alert("error")
//     }
//   };
//   const handleEdit = async(id ) => {
//     localStorage.setItem("EditId" , id);
//     window.location.href = `/cap-links-listing/edit-cap-links-listing/get/${id}`;
//   };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const ShowCapLinksListingForm = () => {
    window.location.href = "/cap-links-listing/add-cap-links-listing"
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
    <div className="w-[95%] mx-auto border rounded-md py-3">
      <div className="flex justify-between items-center border-b p-6 mb-4">
        <h1 className="text-3xl font-bold">Cap Links</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={ShowCapLinksListingForm}>Generate Cap Links</button>
      </div>

          {/* Controls */}
          <div className="flex flex-col  md:flex-row justify-between items-center px-6 py-2 mb-4 gap-4">
        <div>
          Show
          <select
            value={entriesPerPage}
            onChange={handleEntriesChange}
            className="border p-1 mx-3 rounded border-neutral-500"
          >
            <option value={15}>15</option>
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

      <div className="overflow-x-auto">
        <table className="min-w-full p-3 bg-white  rounded-lg shadow-md">
          <thead className="p-3 border-b">
            <tr >
              <th className="p-5">S.No</th>
              <th className="p-5">Image</th>
              <th className="p-5">Name</th>
              <th className="p-5">Comp Name</th>
              <th className="p-5">Forwarder Name</th>
              <th className="p-5">Manufacture Year/Month</th>
              <th className="p-5">Uploaded At</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {capLinksData 
              .filter((capLink) => capLink.departure.carrierNameRef.toLowerCase().includes(search.toLowerCase()))
              .slice(0, entriesPerPage)
              .map((capLink, index) => ( 
                <tr key={capLink._id} className="border-b">
                  <td className="p-2 text-center">{indexOfFirstCapLinks + index + 1}</td>
                  <td className="p-2 text-center">
                    <img src={`../../../../../admin/uploads/${capLink.productFeatureImageRef}`} alt="capLinks" className="w-10 h-10 object-cover" />
                  </td>
                  
                  <td className="p-2 text-center">{capLink.departure.carrierNameRef}</td>
                  <td className="p-2 text-center">{capLink.companyName}</td>
                  <td className="p-2 text-center">{capLink.forwarderName}</td>
                  <td className="p-2 text-center">{capLink.notifyParty.notifyPartyRegistrationYearORMonthRef}</td>
                  <td className="p-2 text-center">{capLink.createdAt.slice(0,10)}</td>
                  <td className="p-2 justify-center flex space-x-2">
                    <button className="text-white p-1 rounded bg-emerald-500 " onClick={() => handleEdit(capLink._id)}>
                      <FaEye size={15} />
                    </button>
                    <button className="text-white p-1 rounded bg-orange-500" onClick={() => handleEdit(capLink._id)}>
                      <FaEdit size={15} />
                    </button>
                    <button className="text-white p-1 rounded bg-red-500" onClick={() => handleDelete(capLink._id)}>
                      <FaTrash size={15} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center my-4">
  <button
    className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300'}`}
    onClick={goToPreviousPage}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  {/* Page Numbers */}
  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index + 1}
      className={`px-4 py-2 mx-1 rounded ${
        currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300'
      }`}
      onClick={() => goToPage(index + 1)}
    >
      {index + 1}
    </button>
  ))}

  <button
    className={`px-4 py-2 mx-1 rounded ${
      currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300'
    }`}
    onClick={goToNextPage}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
    </div>
  );
};

export default CapLinksListing;

