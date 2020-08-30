import React, { useEffect, useState } from 'react';

import PhonesService from '../service/PhoneService';

import PhoneCard from './PhoneCard.jsx'
import Navbar from './Navbar.jsx';

import Card from 'react-bootstrap/Card';
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
        <Navbar 
            searchPhonesCallBack={(valueToSearch) => searchPhones(valueToSearch)}
            needsLinkHome={false}
            needsSearch={true}>
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
        <Navbar 
            needsLinkHome={false}
            needsSearch={false}>
        </Navbar>
        <div className="spinner-container">
          <Spinner type="Bars" color="#00D4BD" height={100} width={100} timeout={5000000} />
        </div>
      </>
    )
  }
}

export default MainScreen;
