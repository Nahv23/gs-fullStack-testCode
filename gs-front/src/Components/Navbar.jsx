import React from 'react';

import {PUBLIC_URL} from '../constant/Routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './css/navbar.css'

export const NavbarComponent = ({ needsLinkHome, needsSearch, searchPhonesCallBack }) => {

  return (
    <Navbar bg='dark' variant='dark' sticky='top' className='navbar'>
      <Navbar.Brand><img src={`${PUBLIC_URL}/favicon-32x32.png`} alt={'logo'} /></Navbar.Brand>
      <Nav className='mr-auto'>
        {needsLinkHome ?
          <Nav.Link className='link-to-home' href='/'>Home</Nav.Link>
          :
          null
        }
      </Nav>
      {needsSearch ?
        <Form inline>
          <FormControl size='sm' type='text' placeholder='Search' className='form-control mr-sm-2' onChange={e => searchPhonesCallBack(e.target.value)} />
          <Button variant='outline-info' size='sm'><i className='fas fa-search'></i></Button>
        </Form>
        :
        null
      }
    </Navbar>
  )
}



export default NavbarComponent;