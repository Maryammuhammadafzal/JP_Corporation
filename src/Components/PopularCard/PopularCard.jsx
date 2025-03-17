import React from "react";
import CardImage1 from "../../assets/Images/card_image1.jpeg";
import CardImage2 from "../../assets/Images/card_image2.jpeg";
import CardImage3 from "../../assets/Images/card_image3.jpg";
import CardImage4 from "../../assets/Images/card_image4.jpg";
import Button from "../Button/Button";

const PopularCard = () => {
  let cardData = [
    {
      id: 1,
      title: "2018 || AUDI A3 || A3 SEDAN 1.4 TFSI SPORT 2018",
      image: CardImage1,
      miles: "24,000  miles",
      price: "$9,500",
      transition: "AT",
      model: "2018",
    },
    {
      id: 2,
      title: "HONDA VEZEL Z",
      image: CardImage2,
      miles: "95,000 miles",
      price: "$ 8,256",
      transition: "AT",
      model: "2010",
    },
  ];

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text?.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleCardClick = ({ id, title, image, miles, price, transition, model })=>{
    console.log({ id, title, image, miles, price, transition, model })
  }
  return (
    <>
      {cardData.map(({ id, title, image, miles, price, transition, model }) => (
        <div
          key={id}
          onClick={() =>
            handleCardClick({ id, title, image, miles, price, transition, model })}
          className="card w-[400px] max-[1160px]:w-[48%]  max-[600px]:w-[95%] max-[360px]:w-full h-auto bg-gray-800 rounded-2xl text-white flex flex-col"
        >
          <div className="carImage relative overflow-hidden w-auto h-auto">
            <img
              src={image}
              className="cardImage relative max-[1160px]:h-[200px] max-[900px]:h-[230px] max-[600px]:h-[280px] w-full h-[160px] rounded-2xl"
              alt="Card image"
            />
            <span className="absolute top-[15px] -left-[30px] -rotate-45 w-[130px] text-center z-50 bg-green-600 py-[1vh] px-[1vw] text-white text-[12px]" >
              Available
            </span>
          </div>
          <div className="cardContent w-full p-3 h-auto flex flex-col">
            <div className="cardbody w-full h-auto flex px-2 py-2 flex-col border-b border-b-gray-600 justify-center">
              <h3 id="carName" className="carName text-lg ">
                {" "}
                {truncateText(title, 22)}{" "}
              </h3>
              <p className="carPrice font-extrabold text-xl">{price}</p>
            </div>
            <div className="cardfooter w-full h-auto flex p-2  items-center gap-5">
              <button className="w-fit h-fit py-1 px-2 font-semibold text-md text-white bg-orange-600 rounded-lg">
                {model}
              </button>
              <p className="miles text-gray-500">{miles}</p>
              <p className="transmission text-gray-500">{transition}</p>
              <p className="transmission text-gray-500">{transition}</p>
              <p className="transmission text-gray-500">{transition}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularCard;
