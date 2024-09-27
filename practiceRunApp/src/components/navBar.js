import React from "react";
import "../styles/NavBar.css";
import profilePicture from "../images/profilePicture.png";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<a href="/" className="logo">
					ENS Movie Library
				</a>
			</div>
			<div className="navbar-center">
				<ul className="nav-links">
					<li>
						<a href="/home">Home</a>
					</li>
					<li>
						<a href="/about">About Us</a>
					</li>
					<li>
						<a href="/profile">Profile</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<a href="/profile" className="user-icon">
					<i className="fas fa-user"></i>
					<img src={profilePicture} alt="PP" id="profile-container" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
