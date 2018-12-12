import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../../src/logo.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isOpen: false,
        redirectToReferrer: false,
        dropdownOpen: false
    };
    
    this.toggle = this.toggle.bind(this);
    this.toggleMobile = this.toggleMobile.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  toggleMobile() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
  }

  render() {
    if (this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
    }

    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">GOlearn <img src={logo} className="App-logo" alt="logo" width="80" /></NavbarBrand>
        <NavbarToggler onClick={this.toggleMobile} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <a className="navbar-brand" href="/vak">Modalitas</a>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="navbar-brand">
                <DropdownToggle  caret color="success">Nilai</DropdownToggle>
                
                <DropdownMenu>
                  <a href="/cbt"><DropdownItem>Nilai CBT</DropdownItem></a>
                  <a href="/pbt"><DropdownItem>Nilai PBT</DropdownItem></a>
                  <a href="/kuis"><DropdownItem>Nilai Kuis</DropdownItem></a>
                </DropdownMenu>

              </ButtonDropdown>
              <a className="navbar-brand" href="/presensi">Presensi</a>
              <a className="navbar-brand" href="/cbt">CBT</a>
              <a className="navbar-brand" href="/tutor">Video Tutor</a>
              <a className="navbar-brand" href="" onClick={this.logout}><Button color="danger">LogOut</Button></a>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Menu;