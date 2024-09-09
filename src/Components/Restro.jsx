import { CDN_URL } from "../config/constants";

const Restro = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resData?.info;  {/** ? stands for channing */}
  
    return (
      <div className="restro">
        <div className="img-container">
          <img
            className="img1"
            src={  CDN_URL + cloudinaryImageId }
          />
  
          <h3>{name}</h3>
        </div>
        <div>
          <p>{cuisines.join(", ")}</p>
          <p> {avgRating} </p>
          <p> {deliveryTime}</p>
        </div>
      </div>
    );
  };
  
  export default Restro;