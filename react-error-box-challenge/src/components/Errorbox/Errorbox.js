// 4) Notification

// Make a component to display an "error box" that looks.

// You use it like this:
// <ErrorBox>
//  Something has gone wrong kimosabi.
// </ErrorBox>

import React from 'react';
// import PropTypes from 'prop-types';
import './Errorbox.css';
import Errormessage from '../Errormessage/Errormessage';

var error = {
	errorMessage: 'Something has gone wrong Kimosabi',
};

class Errorbox extends React.Component {
	render() {
		return (
			<div className="error-box">
				<div className="error-outline">
					<div className="error-message">
						<h1>Error Message:</h1>
						<Errormessage error={error.errorMessage} />
					</div>
				</div>
			</div>
		);
	}
}

export default Errorbox;
