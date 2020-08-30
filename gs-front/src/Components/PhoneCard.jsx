import React from 'react';
import { connect } from 'react-redux';
import { getInfoPhoneAction } from '../Actions';
import { Link } from 'react-router-dom';
import { PHONE_PATH } from '../constant/Routes';

import Card from 'react-bootstrap/Card';

import './css/phoneCard.css'

export const PhoneCard = ({ addPhoneInfo, phone }) => {


  const selectedPhoneForDetails = (phoneDetails) => {
    addPhoneInfo(phoneDetails);
  }

  return (
    <Card style={{ width: '13rem' }} className='card-content mt-4 mx-3'>
      <div className="img-container">
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/${phone.imageFileName}`} alt={phone.imageFileName} className='image mt-1' />
        <Link className="link-more-info" to={PHONE_PATH.replace(
          ':phone_id', phone.name)}>
          <button className="button-more-info"
            onClick={() => selectedPhoneForDetails(phone)}
          >More</button>
        </Link>
      </div>
      <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <h6 className='mt-2 text-muted'>{phone.manufacturer}</h6>
        <p className='mt-2 text-info'>{phone.price}€</p>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoneInfo: (phoneSelected) => getInfoPhoneAction(dispatch)(phoneSelected)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneCard);
