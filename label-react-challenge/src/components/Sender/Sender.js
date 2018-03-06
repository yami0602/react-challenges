import React from 'react';
import './Sender.css';
import PropTypes from 'prop-types';

class Sender extends React.Component {
	render() {
		return (
			<div className="sender-label">
				<div className="sender-name">
					<div>
						{this.props.personName.firstName} {this.props.personName.middleName}{' '}
						{this.props.personName.lastName}
					</div>
				</div>
				<div className="sender-address">
					<div>
						{this.props.addressLable.number} {this.props.addressLable.street}
					</div>
					<div>
						{this.props.addressLable.city} {this.props.addressLable.state}{' '}
						{this.props.addressLable.zipCode}
					</div>
				</div>
			</div>
		);
	}
}

Sender.propTypes = {
	personName: PropTypes.shape({
		firstName: PropTypes.string.isRequired,
		middleName: PropTypes.string,
		lastName: PropTypes.string.isRequired,
	}),
	addressLable: PropTypes.shape({
		number: PropTypes.number.isRequired,
		street: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
		zipCode: PropTypes.number.isRequired,
	}),
};

export default Sender;
