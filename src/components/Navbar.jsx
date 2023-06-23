import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="logo"/>
			<a href="http://localhost:5173/Home" className="headline">Nourish</a>
			<nav ref={navRef}>
				<a href="http://localhost:5173/Home">Home</a>
				<a href="http://localhost:5173/Foods">Foods</a>
				<a href="http://localhost:5173/Skills">Skills</a>
				<a href="http://localhost:5173/Diary">Diary</a>
				<a href="http://localhost:5173/Recipes">Recipes</a>
				<a href="http://localhost:5173/User_Settings">User Settings</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
