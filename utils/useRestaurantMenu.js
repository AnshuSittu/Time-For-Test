import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
    //fetch Data 

    const [resInfo, setResInfo] = useState(null)
   
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=" + resID);
        const json = await data.json();
        setResInfo(json.data);

        //console.log(json);

    }

 return resInfo;
}

export default useRestaurantMenu;
