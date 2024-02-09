import React from 'react';
import '../../styles/SignIn/video.css'

export default function ImageEvent({image}) {
	return (
		<section className="image-event">
			<img className='image' src={image} alt="picture of the event"/>
		</section>
	);
}
