// 1 - Create a poster component that takes an image, title,and text as props.
// Render something like the sample image.

import React from 'react';
import './Poster.css';
import Image from '../Image/Image';
import Text from '../Text/Text';
import PropTypes from 'prop-types';

var posterBox = {
	posterTitle: 'The Mona Lisa',
	posterText:
		'The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".',
};

class Poster extends React.Component {
	render() {
		return (
			<div className="poster-outline">
				<div className="title">
					<h1>
						<Text posterTitle={posterBox.posterTitle} />
					</h1>
				</div>

				<div className="text">
					<h3>
						{' '}
						Description:
						<Text posterText={posterBox.posterText} />
					</h3>
				</div>

				<div className="image">
					<Image />
				</div>
			</div>
		);
	}
}

export default Poster;
