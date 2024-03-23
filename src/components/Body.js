import RestaurantCard from "./RestaurantCard"
import {restaurantCard} from "./constants.js"
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom";
function filterData(searchText,restaurants){
  return restaurants.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}
const Body=()=>{
  const [searchText,setSearchText]=useState();
  const [searchClick,setSearchClick]=useState("false");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  useEffect(()=>{
      getRestaurants();
  },[searchText]);
  async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3667195&lng=78.4285084&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      if (!data.ok) {
        throw new Error(`Failed to fetch data. Status: ${data.status}`);
      }
      const json = await data.json();
      const restaurantInfo = json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants;
      if (restaurantInfo) {
        setRestaurants(restaurantInfo);
        setFilteredRestaurants(restaurantInfo);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  return (restaurants.length ===0 ) ? <Shimmer/>: (
    <>
    <div className="search-container">
         <input 
            type="text" value={searchText} 
            className="search-input"
            placeholder="Search"
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
          <button className="button-container" onClick={
            ()=>{
              const data= filterData(searchText,filteredRestaurants);
             setFilteredRestaurants(data)
            }
          }>Search</button>
    </div>
    <div className="restaurant-card">
    {filteredRestaurants.length === 0 ? <h1>No data presented</h1> :
      filteredRestaurants.map((restaurant) => {
        return ( <Link to={"/restaurant/"+restaurant.info.id}
		key={restaurant.info.id } className="restCardLink"
	 > 
          <RestaurantCard {...restaurant} />
          </Link>);
         
      })}
  </div>
  
     </>
  );
}
export default Body;