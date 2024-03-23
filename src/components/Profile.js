import {useState} from "react";
const Profile = (props) => {
    const [count,setCount]=useState(0);
    return (
        <div>
            <h2>This is function based component</h2>
            <h3>Name : {props.name}</h3>
            <h4>Count : {count}</h4>
            <button onClick={()=>setCount(1+count)}>Counter</button>
        </div>
    );
}
export default Profile;