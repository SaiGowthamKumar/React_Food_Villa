import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}`);
            const json = await data.json();
            setRestaurant(json?.data?.cards);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }
	if(!restaurant){
		return(
			<Shimmer>
			</Shimmer>
		);
	}

    return (
        <div className="menu">
            <div>
                <h2>ID: {restaurant[0]?.card?.card?.info.id}</h2>
                <h1>{restaurant[0]?.card?.card?.info.name}</h1>
                <img src={IMG_CDN_URL + restaurant[0]?.card?.card?.info.cloudinaryImageId} alt={restaurant[0]?.card?.card?.info.name} />
            </div>
            <div>
                <h1>Menu</h1>
                
                <ul>
                    {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards?.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
