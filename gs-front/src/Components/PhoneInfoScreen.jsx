import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../history';

import Navbar from './Navbar.jsx';

import './css/phoneInfoScreen.css'

export const PhoneInfoScreen = ({ infoPhone }) => {

  return (
    <>
      <Navbar
        needsLinkHome={true}
        needsSearch={false}>
      </Navbar>
      <div className="col-2 back-button mt-3 ">
        <button type="button" onClick={() => history.goBack()} className="btn-outline btn-outline-small default"><i
          id={'back-button'} className="fas fa-arrow-left mt-1" /> 
          <span> Back</span>
        </button>
      </div>
      <div>
        <h4> Phone Screen </h4>

      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  infoPhone: state.infoPhone.phone,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneInfoScreen);
