import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile"
import ProfileClass from "./ProfileClass"
const About = () => {
    return(
		<div>
			<h1>This is about page</h1>
			<ProfileFunctionComponent name={"sai gowtham kumar"}/>
			<ProfileClass name={"Sai Gowtham Kumar"}/>
		</div>

	);
};
export default About;