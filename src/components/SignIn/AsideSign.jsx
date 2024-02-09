import React from "react";
import Logo from '../../media/riotLogo.png'
import Connection from "./Connection";

import '../../styles/SignIn/aside.css'

export default function AsideSign() {
	return (
		<aside className="asideSign">
			<div className="asideSign__container">
				<img className="asideSign__logo" src={Logo} />
				<Connection />
			</div>
		</aside>
	);
}