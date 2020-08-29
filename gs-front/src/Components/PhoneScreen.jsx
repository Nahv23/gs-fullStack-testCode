import React, { useEffect, useState } from 'react';
import history from '../history';

export const PhoneScreen = () => {


  return (
    <>
      <h4> Phone Screen </h4>
      <div className="col-1 back-button">
        <button type="button" cy-test={'back-button'} onClick={() => history.goBack()}><i
          id={'back-button'} className="fas fa-arrow-left mr-1" />
        </button>
      </div>
    </>
  )
}

export default PhoneScreen;