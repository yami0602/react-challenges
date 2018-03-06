import React from 'react';
import PropTypes from 'prop-types';

class Errormessage extends React.Component {
	render() {
		return (
			<div>
				<h2>Hello</h2>
				{this.props.error}
			</div>
		);
	}
}

Errormessage.propTypes = {
	error: PropTypes.string.isRequired,
};

export default Errormessage;
