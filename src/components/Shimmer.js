const Shimmer=()=>{
	return(
        <div className="restaurant-card">
		   {Array(100).
			fill(" ").
			map((e,index)=>(
			<div key={index} className="shimmer-card"></div>
		))}
		</div>
	);
};
export default Shimmer;