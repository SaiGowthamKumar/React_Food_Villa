import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant"

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant=useRestaurant(id);
    
	if(!restaurant){
		return(
			<Shimmer>
			</Shimmer>
		);
	}

    return (
        <div className="menu">
            <div>
                <h2>ID: {restaurant[2]?.card?.card?.info?.id}</h2>
                <h1>{restaurant[2]?.card?.card?.info?.name}</h1>
                <img src={IMG_CDN_URL + restaurant[2]?.card?.card?.info?.cloudinaryImageId} alt={restaurant[0]?.card?.card?.info?.name} />
            </div>
            <div>
                <h1>Menu</h1>
                
                <ul>
                    {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards?.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
