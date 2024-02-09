import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { BsXbox } from 'react-icons/bs';

import '../../styles/SignIn/social.css'



export default function Social() {
	return (
		<div className="social">
			<div className="social__content">
				<div className="social__content__icon fb">
					<BsFacebook />
				</div>
				<div className="social__content__icon">
					<FcGoogle />
				</div>
				<div className="social__content__icon apple">
					<BsApple />
				</div>
				<div className="social__content__icon xbox">
					<BsXbox />
				</div>
			</div>
		</div>
	);
}
