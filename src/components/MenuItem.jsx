import { IMG_URL } from "../utils/constants";

export default function MenuItem({ data }) {
  return (
    <div className="w-[600px] h-[250px] border border-gray-500 rounded p-3 flex">
      <img
        className="h-[150px] w-[150px] rounded mr-2"
        src={IMG_URL + data.info.imageId}
      />
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-xl font-semibold">{data.info.name}</h1>
        <p className="text-sm text-gray-400">{data.info.description} </p>
        <p>{data.info.finalPrice / 100}</p>
        <button className="w-[100px] border border-white p-2 rounded hover:bg-white hover:text-black">
          Add
        </button>
      </div>
    </div>
  );
}
