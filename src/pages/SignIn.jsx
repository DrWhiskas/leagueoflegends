import React from "react";
import AsideSign from "../components/SignIn/AsideSign";
import ImageEvent from "../components/SignIn/ImageEvent";
import LolEvent from '../media/lol.png'
import '../styles/SignIn/index.css'

export default function SignIn(){
    return (
			<div className="signIn">
				<AsideSign />
				<ImageEvent image={LolEvent} />
			</div>
		);
}