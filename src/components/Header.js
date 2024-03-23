import { useState } from "react";
import { Link } from "react-router-dom";

const loggedUser = () => {
    //authentication api
    return false;
}

const Title = () => (
    <a href="/">
        <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="logo" className="logo" />
    </a>
);

const Header = () => {
    const [title, setTitle] = useState("Food Villa");

    return (
        <div className="header">
            <Title />
            <h1>{title}</h1>
            <div className="nav-items">
                <ul>
				<li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            {loggedUser() ? <button>LogIn</button> : <button>LogOut</button>}
        </div>
    );
};

export default Header;
/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>*/
