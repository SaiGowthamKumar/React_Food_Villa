const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString, lastMileTravelString } = {}
  } = props.info || {};

  return (
    <div className="card">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="burger" />
      <h2>{name}</h2>
      <h3>{cuisines && cuisines.join(" ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
      <h4>{lastMileTravelString}</h4>

    </div>
  );
};

export default RestaurantCard;
