import React, { useEffect, useState } from 'react';

import PhonesService from '../service/PhoneService';

import PhoneCard from './PhoneCard.jsx'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './css/mainScreen.css'


export const MainScreen = () => {

  let [phonesData, setPhonesData] = useState(null);
  let [phonesSearched, setPhonesDataSearched] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      data = await PhonesService.getPhones();
      if (data.state === true) {
        setTimeout(() => setPhonesData(data.phones), 2300) //To appreciate the spinner only
      }
    }
    fetchData().catch((error) => {
      console.log('There was an error during screen data population!');
      console.log(error);
    });
  }, [setPhonesData])

  const searchPhones = (valueToSearch) => {
    let phonesMatchedWithSearch = [];
    for (let i = 0; i < phonesData.length; i++) {
      if (phonesData[i].name.toLowerCase().includes(valueToSearch.toLowerCase()) ||
        phonesData[i].manufacturer.toLowerCase().includes(valueToSearch.toLowerCase())) {
        phonesMatchedWithSearch.push(phonesData[i]);
      }
    }
    if (valueToSearch && phonesMatchedWithSearch.length === 0){
      setPhonesDataSearched('No matches');
    } else{
      setPhonesDataSearched(phonesMatchedWithSearch);
    }
  }

  if (phonesData && phonesData.length > 0) {
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
          <Navbar.Brand><img src={`${process.env.PUBLIC_URL}/favicon-32x32.png`} alt={'logo'} /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="link-to-home" href="/">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl size="sm" type="text" placeholder="Search" className="form-control mr-sm-2" onChange={e => searchPhones(e.target.value)} />
            <Button variant="outline-info" size="sm"><i className="fas fa-search"></i></Button>
          </Form>
        </Navbar>
        <div className='cards-container mb-3'>
          { phonesSearched && phonesSearched !== 'No matches' && phonesSearched.length > 0 ?
            phonesSearched.map((phone, idx) => {
              return (
                <PhoneCard phone={phone} key={idx} />
              )
            })
            : 
            phonesSearched === 'No matches' ?
              <Card className="no-results text-center mt-5" border="light">
                <Card.Img variant="center" src={`${process.env.PUBLIC_URL}/no-result-found.png`} />
                <Card.Body>
                  <Card.Title>No Result Found</Card.Title>
                </Card.Body>
              </Card>
              :
              phonesData.map((phone, idx) => {
                return (
                  <PhoneCard phone={phone} key={idx} />
                )
              })
          }
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
          <Navbar.Brand><img src={`${process.env.PUBLIC_URL}/favicon-32x32.png`} alt={'logo'} /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="link-to-home" href="/">Home</Nav.Link>
          </Nav>
        </Navbar>
        <div className="spinner-container">
          <Spinner type="Bars" color="#00D4BD" height={100} width={100} timeout={5000000} />
        </div>
      </>
    )
  }
}

export default MainScreen;
