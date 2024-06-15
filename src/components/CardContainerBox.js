// import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";  //named import export
// import CDN_URL  from "../utils/constants"; //normal import export

const CardContainerBox =(props)=>{
  const {resData}=props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime
  } = resData?.info;

  return(
    <div className="Card-name" style={{backgroundColor:"#f0f0f0"}}>
     <img className="resto_1" src={CDN_URL+cloudinaryImageId} 
     />
     <h2>{name}</h2>
     <h4>{cuisines.join(",")}</h4>
     <h4>{avgRating}stars</h4>
     <h4>{costForTwo}</h4>
     <h5>{deliveryTime}minutes</h5>
      </div>

  )
}

export default CardContainerBox;