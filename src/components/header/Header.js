import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" >
          <img src={require('C:/dev/personal projects/ismasurance/front/ismasurance/src/img/logoIsmasurance.png')} alt= "logo"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header; 