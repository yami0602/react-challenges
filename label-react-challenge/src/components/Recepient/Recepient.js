import React from 'react'
import './Recepient.css'
import PropTypes from 'prop-types'


class Recepient extends React.Component {
  render() {
    return (
      <div>
        <div className='recipient-label'>
          <div className='recipient-name'>
            <div>{this.props.personName.firstName}{' '}
              {this.props.personName.middleName} {' '}
              {this.props.personName.lastName}
            </div>
          </div>
          <div className='recipient-address'>
            <div>{this.props.addressLable.number}{' '}{this.props.addressLable.street}</div>
            <div>{this.props.addressLable.city}{' '}{this.props.addressLable.state}{' '}
              {this.props.addressLable.zipCode}</div>
          </div>
        </div>
      </div>
    )
  }
}


Recepient.propTypes = {
  personName: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired
  }),
  addressLable: PropTypes.shape({
    number: PropTypes.number.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.number.isRequired
  })
};


export default Recepient;


  