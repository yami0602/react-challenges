// 1) Create an AddressLabel component that accepts a person object as a prop, and renders their name and address like this:

// Full Name
// 123 My St.
// Hialeah, FL 33164

// 2) Create an Envelope component that receives a toPerson and fromPerson as props and uses the AddressLabel from challenge 1 to display the return address and the recipient address. Make sure to include a Stamp as well!!

import React from 'react';
import Recepient from '../Recepient/Recepient';
import Sender from '../Sender/Sender';
import Stamp from '../Stamp/Stamp';
import './Envelope.css';
import PropTypes from 'prop-types';

var recepient = {
	personName: {
		firstName: 'Max',
		middleName: 'L.',
		lastName: 'Johnson',
	},
	addressLable: {
		number: 200,
		street: '30th Ct',
		city: 'Miami',
		state: 'FL',
		zipCode: 33189,
	},
};

var sender = {
	personName: {
		firstName: 'Joe',
		middleName: 'P.',
		lastName: 'Waco',
	},
	addressLable: {
		number: 100,
		street: '131 pl',
		city: 'Miami',
		state: 'FL',
		zipCode: 33184,
	},
};

class Envelope extends React.Component {
	render() {
		return (
			<div className="envelope">
				<div className="envelope-outline">
					<Sender
						personName={sender.personName}
						addressLable={sender.addressLable}
					/>
					<Recepient
						personName={recepient.personName}
						addressLable={recepient.addressLable}
					/>

					<Stamp />
				</div>
			</div>
		);
	}
}

export default Envelope;
