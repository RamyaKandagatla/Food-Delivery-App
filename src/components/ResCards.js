import { RES_LOGO } from "../utils/constants";

const ResCards = (props) => {
  const {ResData : {info : { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla }}} = props
  return(
    <div className="border bg-gray-200 w-60 m-2 p-2 rounded-lg hover:bg-gray-100 shadow-xl"
     data-testid="Res-Card">
      <img className="rounded-md" src={RES_LOGO+cloudinaryImageId}
        ></img>
      <h3 className="font-bold text-lg">{name}</h3>
      <h4 className="py-2 font-medium">{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

// higher order component
export const withDiscount = (ResCards) => {
  return(props) => {
    const {ResData : {info:{aggregatedDiscountInfoV2}}} = props
    return(
      <div>
        {aggregatedDiscountInfoV2?.header && aggregatedDiscountInfoV2?.subHeader && <label className="absolute bg-black opacity-90 text-white p-2 rounded-lg">{header + subHeader}</label>}
        <ResCards {...props}/>
      </div>
    )
  }
}

export default ResCards;