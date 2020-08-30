import React, { useEffect, useState } from 'react';

import PhonesService from '../service/PhoneService';

import PhoneCard from './PhoneCard.jsx'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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

  if (phonesData && phonesData.length > 0) {
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
          <Navbar.Brand><img src={`${process.env.PUBLIC_URL}/favicon-32x32.png`} alt='logo'/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="link-to-home" href="/">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl size="sm" type="text" placeholder="Search" className="form-control mr-sm-2" />
            <Button variant="outline-info" size="sm"><i className="fas fa-search"></i></Button>
          </Form>
        </Navbar>
        <div className='cards-container mb-3'>
          {phonesData.map((phone, idx) => {
            return (
              <PhoneCard phone={phone} key={idx} />
            )
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
          <Navbar.Brand><img src={`${process.env.PUBLIC_URL}/favicon-32x32.png`} alt='logo'/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="link-to-home" href="/">Home</Nav.Link>
          </Nav>
        </Navbar>
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
      </>
    )
  }
}

export default MainScreen;
