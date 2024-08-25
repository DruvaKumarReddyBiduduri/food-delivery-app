import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../utils/constants";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();
  const toDetailsPage = () => {
    navigate(`/restaurants/${restaurant.info.id}`);
  };
  return (
    <div
      onClick={toDetailsPage}
      className="cursor-pointer h-[350px] w-[350px] border border-gray-500  rounded-lg p-2 flex flex-col gap-2 hover:border-2"
    >
      <img
        className="w-full h-[250px] overflow-hidden"
        src={IMG_URL + restaurant.info.cloudinaryImageId}
      />
      <h1 className="font-bold text-xl">{restaurant.info.name}</h1>
      <div className="flex items-center gap-2 flex-wrap">
        {restaurant.info.cuisines.map((cuisine, index) => (
          <p className="rounded p-1 bg-gray-800  text-white" key={index}>
            {cuisine}
          </p>
        ))}
      </div>
    </div>
  );
}
