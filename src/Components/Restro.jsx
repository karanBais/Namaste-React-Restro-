import { CDN_URL } from "../config/constants";

const Restro = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;  // ? is for optional chaining
  
  return (
    <div className="restro bg-white shadow-lg rounded-lg p-4 m-4 w-64">
      <div className="img-container">
        <img
          className="img1 w-full h-40 object-cover rounded-t-lg"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <h3 className="mt-2 text-lg font-semibold text-gray-800">{name}</h3>
      </div>

      <div className="info mt-2 text-gray-600">
        <p className="text-sm">{cuisines.join(", ")}</p>
        <p className="text-sm">Rating: {avgRating}</p>
        <p className="text-sm">Delivery Time: {sla?.slaString}</p>
      </div>
    </div>
  );
};

export default Restro;
