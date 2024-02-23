import React, {useState} from "react";
import { Link } from 'react-router-dom';
import '../../styles/Home/header.css'

export default function Header(){
	const [showLogout, setShowLogout] = useState(false)



	function LinkBuild({ text, link }) {
		return (
			<li>
				<Link to={link} className="header__links__link">
					{text}
				</Link>
			</li>
		);
	}
	function handleShowLogout(){
		setShowLogout(!showLogout)
	}
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/home">
					<img
						className="header__logo"
						src="https://i.imgur.com/Jf3KsA4.png"
						alt="home's logo"
					/>
				</Link>
				<ul className="header__link">
					<LinkBuild text="Home" link="/home" />
					<LinkBuild text="History" link="#" />
					<LinkBuild text="Profil" link="#" />
				</ul>
			</div>

			<div className="header__profil">
				<img
					className="header__profil__icon"
					src="https://i.imgur.com/A2POR9d.png"
					alt="profil's icon"
					onClick={handleShowLogout}
				/>
				<button className={showLogout ? 'header__profil__btn' : 'hidden'}>
					Logout
				</button>
			</div>
		</header>
	);
}