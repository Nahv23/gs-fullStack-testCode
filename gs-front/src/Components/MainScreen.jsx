import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getInfoPhoneAction } from '../Actions';
import { Link } from 'react-router-dom';
import { PHONE_PATH } from '../constant/Routes';

import PhonesService from '../service/PhoneService';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './css/mainScreen.css'


export const MainScreen = ({ addPhoneInfo }) => {

  let [phonesData, setPhonesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      data = await PhonesService.getPhones();
      if (data.state === true) {
        setPhonesData(data.phones);
      }
    }
    fetchData().catch((error) => {
      console.log('There was an error during screen data population!');
      console.log(error);
    });
  }, [setPhonesData])

  const selectedPhoneForDetails = (phoneDetails) => {
    addPhoneInfo(phoneDetails);
  }

  console.log("phonesData ->", phonesData)

  if (phonesData && phonesData.length > 0) {
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
          <Navbar.Brand><img src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}></img></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="link-to-home" href="/">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl size="sm" type="text" placeholder="Search" className="form-control mr-sm-2" />
            <Button variant="outline-info" size="sm"><i className="fas fa-search"></i></Button>
          </Form>
        </Navbar>
        <div className='cards-container mb-3'>
        { phonesData.map((phone, idx) => {
          return(
            <Card key={idx} style={{ width: '13rem' }} className='card-content mt-4 mx-3'>
              <div className="img-container">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/${phone.imageFileName}`} alt={phone.imageFileName} className='image mt-1'/>
                <Link className="link-more-info" to={PHONE_PATH.replace(
                  ':phone_id', phone.name)}>
                  <button className="button-more-info"
                    onClick={() => selectedPhoneForDetails(phonesData[idx])}
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
        })}
        </div>
      </>
    );
  } else {
    return (
      <div
        style={{
          position: 'fixed',
          height: '100px',
          top: '50%',
          left: '50%',
          marginTop: '-50px',
          marginLeft: '-50px'
        }}
      >
        <Spinner type="Bars" color="#00D4BD" height={100} width={100} timeout={5000000} />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoneInfo: (phoneSelected) => getInfoPhoneAction(dispatch)(phoneSelected)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
