import React , {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const PopularCard = () => {

  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const fetchCarData = async()=> {
   let res = await axios.get(`${baseURL}/api/dashboard?page=1&limit=2`)
    .then((res) => setCards(res.data))
    .catch((err) => console.error(err));
  }
  useEffect( () => {
fetchCarData()
  }, []);
 
  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text?.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };


  const handleCardClick = (id)=>{
    navigate(`/listing/${id}`)
    
  }
  
  return (
    <>
      {cards.map(({ _id, carTitle, featuredImage, carAvailability, carYear , carFuelType , carMileage , carPrice, carTransmission, carModel }) => (
        <div
          key={_id}
          onClick={() => handleCardClick(_id)}
          className="card w-[400px] max-[1160px]:w-[48%]  max-[600px]:w-[95%] max-[360px]:w-full h-auto bg-gray-800 rounded-2xl text-white flex flex-col"
        >
          <div className="carImage relative overflow-hidden w-auto h-auto">
            <img
              src={`${baseURL}/${featuredImage}`}
              className="cardImage relative max-[1160px]:h-[200px] max-[900px]:h-[230px] max-[600px]:h-[280px] w-full h-[200px] rounded-2xl"
              alt="Card image"
            />
            <span className="absolute top-[15px] -left-[30px] -rotate-45 w-[130px] text-center z-10 bg-green-600 py-[1vh] px-[1vw] text-white text-[12px]" >
            {carAvailability === "Available" ? "Available" : "Sold"}
            </span>
          </div>
          <div className="cardContent w-full h-auto flex flex-col">
            <div className="cardbody w-full h-auto flex p-4 gap-2 flex-col border-b border-b-gray-600 justify-center">
              <h3 id="carName" className="carName text-lg font-semibold tracking-wider ">
                {" "}
                {truncateText(carTitle, 30)}{" "}
              </h3>
              <p className="carPrice font-extrabold text-2xl ">${carPrice}</p>
            </div>
            <div className="cardfooter w-full h-auto flex p-4  items-center gap-5">
              <button className="w-fit h-fit py-2 px-3 font-semibold text-md text-white bg-orange-600 rounded-lg">
                {carYear}
              </button>
              <p className="miles text-gray-500">{carMileage} miles</p>
              <p className="transmission text-gray-500">{carTransmission}</p>
              <p className="transmission text-gray-500">{carFuelType}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularCard;
