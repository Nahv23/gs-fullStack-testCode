import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { PHONE_PATH } from '../constant/Routes';

import PhonesService from '../service/PhoneService';


export const MainScreen = () => {

  let [phonesData, setPhonesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let data; 
      data = await PhonesService.getPhones();
      if (data.state === true ){
        setPhonesData(data.phones);
      } 
    }
    fetchData().catch((error) => {
      console.log('There was an error during screen data population!');
      console.log(error);
    });
  }, [setPhonesData])
  
  console.log("phonesData ->", phonesData)
  return (
    <>
    <h4> Main Screen </h4>
    <Link to={PHONE_PATH.replace(
      ':phone_id', 1)}> AQUI
    </Link>
    </>
  )
}

export default MainScreen;