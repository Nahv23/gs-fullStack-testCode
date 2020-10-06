import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

import {PUBLIC_URL} from '../constant/Routes';

import Navbar from './Navbar.jsx';

import Table from 'react-bootstrap/Table';

import './css/phoneInfoScreen.css'

export const PhoneInfoScreen = ({ infoPhone }) => {

  return (
    <>
      <Navbar
        needsLinkHome={true}
        needsSearch={false}>
      </Navbar>
      <div className='col-2 back-button mt-3 '>
        <button type='button' onClick={() => history.goBack()} className='btn-outline btn-outline-small default'><i
          id={'back-button'} className='fas fa-arrow-left mt-1' />
          <span> Back</span>
        </button>
      </div>
      <div className='container-fluid'>
        <h3 className='col-md-6 text-center mt-5 phone-title' >{infoPhone.name}</h3>
        <div className='row justify-content-md-center'>
          <div className='col-md-5 float-right'>
            <img className='phone-image' alt={infoPhone.imageFileName} src={`${PUBLIC_URL}/images/${infoPhone.imageFileName}`} />
            <h5 className='technical-characteristics-title'>
              Technical Characteristics
			      </h5>
            <Table responsive striped hover className='table mt-2'>
              <tbody>
                <tr>
                  <td className='td-title'>
                    Manufacturer
						      </td>
                  <td className='text-muted'>
                    {infoPhone.manufacturer}
                  </td>
                </tr>
                <tr>
                  <td className='td-title'>
                    Model
						      </td>
                  <td className='text-muted'>
                    {infoPhone.name}
                  </td>
                </tr>
                <tr>
                  <td className='td-title'>
                    Color
						      </td>
                  <td className='text-muted'>
                    <i className='fa fa-circle' aria-hidden='true' style={{ 'color': `${infoPhone.color}` }}></i>
                    &nbsp; {infoPhone.color}
                  </td>
                </tr>
                <tr>
                  <td className='td-title'>
                    Processor
						      </td>
                  <td className='text-muted'>
                    {infoPhone.processor}
                  </td>
                </tr>
                <tr>
                  <td className='td-title'>
                    Ram
						      </td>
                  <td className='text-muted'>
                    {infoPhone.ram}
                  </td>
                </tr>
                <tr>
                  <td className='td-title'>
                    Screen
						      </td>
                  <td className='text-muted'>
                    {infoPhone.screen}
                  </td>
                </tr>
                <tr>
                  <td className='td-title'>
                    Price
						      </td>
                  <td className='text-danger'>
                    {infoPhone.price} €
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='col-md-6 mt-5'>

            <dl>
              <dt className='phone-description' >
                Description
				      </dt>
              <dd className='font-italic mt-1'>
                {infoPhone.description}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  infoPhone: state.infoPhone.phone,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneInfoScreen);
