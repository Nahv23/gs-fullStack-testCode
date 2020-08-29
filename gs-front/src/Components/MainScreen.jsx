import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { PHONE_PATH } from '../constant/Routes';


export const MainScreen = () => {


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