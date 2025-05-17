import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="navbar">
			{/* <Link to="/">Accueil</Link> */}
			<Link to="/Biographie">biographie</Link>
			<Link to="/Références">références</Link>
			<Link to="/Calendrier">calendrier</Link>
			<Link to="/Instagram">Instagram</Link>
		</nav>
	);
};

export default Nav;
