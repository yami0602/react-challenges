import React from 'react';
import './Image.css';
import Img from '../../assets/monalisa.png';

const Image = () => (
	<div className="image">
		<img src={Img} alt="Mona Liza" />
	</div>
);

export default Image;
