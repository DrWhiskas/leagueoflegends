import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import Social from "./Social";

import '../../styles/SignIn/connection.css';


export default function Connection(){
	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

    function handleSumit(event){
        event.prevenDefault()
    }

	function handleClick(){
		if(userName !='' && password !=''){
			navigate('/home')
		}
	}
	const isFormValid = userName !=='' && password !=='';
	const buttonChange = isFormValid ? 'active' :'';
	const arrowChange = isFormValid ? 'activeArrow' :'';

	console.log(userName, password);
    return (
			<div className="connection">
				<h2 className="connection__title">Sign In</h2>
				<form className="connection__form" onSubmit={handleSumit}>
					<label>
						<input
							className="connection__form__input"
							type="text"
							value={userName}
							placeholder="USERNAME"
							onChange={(e) => setUserName(e.target.value)}
						/>
					</label>
					<label>
						<input
							className="connection__form__input"
							type="password"
							value={password}
							placeholder="PASSWORD"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</form>
				<Social />
				<div className="connection__sumit">
					<div className="connection__sumbit__form">
						<button
							className={`connection__sumbit__form__button ${buttonChange}`}
							onClick={handleClick}
						>
							<BsArrowRightShort className={arrowChange ? 'activeArrow' : 'arrow'} />
						</button>
					</div>
				</div>
			</div>
		);
}