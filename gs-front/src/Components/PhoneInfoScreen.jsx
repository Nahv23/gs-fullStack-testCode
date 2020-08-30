import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../history';

import Navbar from './Navbar.jsx';

import './css/phoneInfoScreen.css'

export const PhoneScreen = ({ infoPhone }) => {

  return (
    <>
      <Navbar
        needsLinkHome={true}
        needsSearch={false}>
      </Navbar>
      <div className="col-1 back-button">
        <button type="button" cy-test={'back-button'} onClick={() => history.goBack()}><i
          id={'back-button'} className="fas fa-arrow-left mr-1" />
        </button>
      </div>
      <h4> Phone Screen </h4>
    </>
  )
}

const mapStateToProps = (state) => ({
  infoPhone: state.infoPhone.phone,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneScreen);
