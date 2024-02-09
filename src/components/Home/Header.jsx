import React from "react";
import lolLogo from '../../media/lolLogo.png'
import '../../styles/Client/header.css'

export default function Header(){
    return (
			<div className="Header">
				<div className="header__content">
					<div className="header__play">
						<img className="header__play__logo" src={lolLogo} alt="logo play" />
						<div className="header__play__play">Play</div>
					</div>
                    <div className="header__link">
                        <p>ACCUEIL</p>
                        <p>TFT</p>
                    </div>
				</div>
			</div>
		);
}