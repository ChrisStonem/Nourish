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
			<a href="/Home" className="headline">Nourish</a>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				<a href="/Foods">Foods</a>
				<a href="/Skills">Skills</a>
				<a href="/Diary">Diary</a>
				<a href="/User_Settings">User Settings</a>
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
