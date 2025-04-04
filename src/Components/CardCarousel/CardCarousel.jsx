import React , {useRef , useState , useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImage1 from "../../assets/Images/card_image1.jpeg";
import CardImage2 from "../../assets/Images/card_image2.jpeg";
import CardImage3 from "../../assets/Images/card_image3.jpg";
import CardImage4 from "../../assets/Images/card_image4.jpg";
import PrevArrow from "../PrevArrow/PrevArrow";
import NextArrow from "../NextArrow/NextArrow";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CardCarousel = () => {
        const sliderRef = useRef(null);
 
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  const fetchCarData = async()=> {
   let res = await axios.get("http://localhost:5000/api/dashboard?page=1&limit=10")
    .then((res) => setCardData(res.data))
    .catch((err) => console.error(err));
  }
  useEffect( () => {
fetchCarData()
  }, []);

  
  const handleCardClick = (id)=>{
    localStorage.setItem("cardId" , id);
    navigate(`/listing/${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
   
    fetchCarData()

    setTimeout(()=>{
      window.location.reload()
    },1500)
    
}
  
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // how many cards to show at once
    slidesToScroll: 1,
    
    responsive: [
        {
                breakpoint: 1180, // Screen width at 1200px or below
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full p-3 max-[500px]:p-0 flex flex-col gap-3">
      <Slider ref={sliderRef} {...settings}>
          {cardData.map(({ _id, CarTitle, featuredImage, carAvailability, carFuelType , carMileage, carYear , carPrice, carTransmission, carModel }) => (
            <div key={_id} 
            onClick={() => handleCardClick(_id)} 
             className="px-3 max-[360px]:px-1">
              <div className="card w-full h-auto bg-gray-800 rounded-2xl shadow-lg text-black flex flex-col overflow-hidden">
                <div className="relative">
                  <img
                    loading="lazy"
                    src={`http://localhost:5000/${featuredImage}`}
                    alt={CarTitle}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  {/* Light black overlay */}
                  <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
                    {CarTitle}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-2xl font-extrabold text-orange-600">
                    ${carPrice}
                  </p>
                  <div className="flex justify-start gap-5 text-gray-400 text-xs mt-2">
                    <span>{carMileage}</span>
                    <span>{carTransmission}</span>
                    <span>{carModel}</span>
                    <span>{carFuelType}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
      <div className="btns flex justify-between p-4 max-[500px]:flex-col max-[500px]:items-center max-[500px]:w-full gap-3 w-full">
        <div className="flex gap-6 w-[80px]  max-[500px]:h-[70px] ml-4 max-[500px]:justify-center relative">
        <PrevArrow onClick={sliderRef?.current?.slickPrev}/> 
        <NextArrow onClick={sliderRef?.current?.slickNext}/>
        </div>
        <div className="button  max-[500px]:w-full">
<Button text="See a New Search"/>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
