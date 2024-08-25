import { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";
import RestaurantCard from "../../components/RestaurantCard";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(API_URL);

    const data = await response.json();
    setRestaurants(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredRestaurants(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
    // console.log(
    //   data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    // );
  };
  return (
    <div className="p-3">
      <input
        placeholder="Search for restaurant"
        className="w-[250px] p-2 outline-none rounded mb-3 text-black"
        onChange={(e) => {
          const filtered = restaurants.filter((restaurant) =>
            restaurant.info.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase()),
          );
          setFilteredRestaurants(filtered);
        }}
      />
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
