import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">GOLearn <img src={logo} className="App-logo" alt="logo" width="80" /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <a className="navbar-brand" href="/">Beranda</a>
              <a className="navbar-brand" href="/info">Info Terbaru</a>
              <a className="navbar-brand" href="/kontak">Kontak</a>
              <a className="navbar-brand" href="/signup"><Button color="danger">Registrasi</Button></a>
              <a className="navbar-brand" href="/login"><Button color="primary">Login</Button></a>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;