import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Footer from "./Footer"

const RestaurantMenu = () => {
  const { resID } = useParams();

  // Props Drilling
   const dummy = "dummy data"


  const resInfo = useRestaurantMenu(resID);

  // for show and hide accordian 
  const [showIndex, setShowIndex] = useState(null)
  

  if (resInfo === null) return <Shimmer />;

// const fetchData = async () => {
//   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=105252&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
//   const json = await data.json();
    
//   setResList(
//     json?.data.cards[1]?
//   )
// }

  // Destructuring
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // filtering data from the catergory to get all the items

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <>
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>

      {/* categories Accordian */}

      {categories.map((catergory, index) => (
        // controlled component 
        <RestaurantCategory
          key={catergory?.card?.card?.title}
          data={catergory?.card?.card}
          showItem={index === showIndex ? true: false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
      
    </div>
   
    <Footer/>
    </>
  );
};

export default RestaurantMenu;
