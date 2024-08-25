import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "../../components/MenuItem";
import { RESTAURANT_URL } from "../../utils/constants";

export default function Restaurant() {
  const [resInfo, setResInfo] = useState();
  const [items, setItems] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    const response = await fetch(RESTAURANT_URL + params.restaurantId);
    const data = await response.json();
    console.log(data.data);
    setItems(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards,
    );
    setResInfo(data.data.cards[2].card.card.info);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold">{resInfo ? resInfo.name : ""}</h1>
      <p className="text-xl font-semibold">Menu</p>
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <MenuItem key={index} data={item.card} />
        ))}
      </div>
    </div>
  );
}
