import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBDropdown,MDBDropdownToggle,MDBIcon, MDBDropdownMenu,MDBDropdownItem, MDBNavItem, MDBNavLink,  MDBNavbarToggler, MDBCollapse } from "mdbreact";
//import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }


render() {
  
  return (
    <div  id='caltoaction'>
      <MDBNavbar color='deep-purple'
               dark
              expand='md'
              fixed='top'
                           
              >
        <MDBNavbarBrand>          
        <MDBNavLink to="/landingpage"><strong className="white-text">Ghibli Movies</strong></MDBNavLink>    
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink  to="/movielist">Movies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  to="#!">Characters</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="film  fa-2x" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/allmoviesdb"><MDBIcon far icon="list-alt " /> All Movies</MDBDropdownItem>
                  <MDBDropdownItem href="/createmovie"><MDBIcon icon="plus" /> Create</MDBDropdownItem>  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>
      
          </MDBCollapse>
      </MDBNavbar>
      
      </div>
    );
  }
}

export default Navbar;