import {useEffect,useState} from "react"
import {FETCH_MENU_URL} from "../constants"
const useRestaurant = (id) =>{
	const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const data = await fetch(FETCH_MENU_URL+id);
            const json = await data.json();
            setRestaurant(json?.data?.cards);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }
	return restaurant;
}
export default useRestaurant;