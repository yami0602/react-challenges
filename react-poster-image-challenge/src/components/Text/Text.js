import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component {
	render() {
		return (
			<div>
				<div className="text-outline">
					<div className="poster-title">{this.props.posterTitle}</div>
					<div className="poster-text">{this.props.posterText}</div>
				</div>
			</div>
		);
	}
}

Text.propTypes = {
	posterTitle: PropTypes.string.isRequired,
	posterText: PropTypes.string.isRequired,
};

export default Text;
