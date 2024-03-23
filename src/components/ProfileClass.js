import React from "react";
class Profile extends React.Component{
	constructor(props){
        super(props);
		this.state={
            count:0,
			count2:0,
		};
	}
	render(){
		return (
			<div>
			    <h2>This is class based component</h2>
				<h3>Name : {this.props.name}</h3>
				<h3>Count : {this.state.count}</h3>
				<button onClick={()=>{
					this.setState({
						count:1,

					});
				}}>Counter</button>
			</div>

		)
	}
}
export default Profile;