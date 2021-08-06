/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import odehabuzaidLogo from 'assets/img/brand/odehabuzaid.png';
import odehabuzaidInvert from 'assets/img/brand/odehabuzaid_Invert.png';

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: '',
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  render() {
    return (
      <>
        <header className='header-global'>
          <Navbar
            className='navbar-main navbar-transparent navbar-light headroom'
            expand='lg'
            id='navbar-main'
          >
            <Container>
              <NavbarBrand className='mr-lg-5' to='/' tag={Link}>
                <img alt='...' src={odehabuzaidLogo} />
              </NavbarBrand>
              <button className='navbar-toggler' id='navbar_global'>
                <span className='navbar-toggler-icon' />
              </button>
              <UncontrolledCollapse
                toggler='#navbar_global'
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className='navbar-collapse-header'>
                  <Row>
                    <Col className='collapse-brand' xs='6'>
                      <Link to='/'>
                        <img alt='...' src={odehabuzaidInvert} />
                      </Link>
                    </Col>
                    <Col className='collapse-close' xs='6'>
                      <button className='navbar-toggler' id='navbar_global'>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className='navbar-nav-hover align-items-lg-center' navbar>
                  <UncontrolledDropdown nav></UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className='ni ni-collection d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>Menu</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to='/landing-page' tag={Link}>
                        Portfolio
                      </DropdownItem>
                      <DropdownItem to='/profile-page' tag={Link}>
                        Profile
                      </DropdownItem>
                      <DropdownItem to='/contact-page' tag={Link}>
                        Contact
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className='align-items-lg-center ml-lg-auto' navbar>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://www.facebook.com/odehabuzaid1'
                      id='tooltip333589074'
                      target='_blank'
                    >
                      <i className='fa fa-facebook-square' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip333589074'>
                      add me on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://www.instagram.com/odehabuzaid1'
                      id='tooltip356693867'
                      target='_blank'
                    >
                      <i className='fa fa-instagram' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip356693867'>
                      Follow me on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://twitter.com/odehabuzaid1'
                      id='tooltip184698705'
                      target='_blank'
                    >
                      <i className='fa fa-twitter-square' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip184698705'>
                      Follow me on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://github.com/odehabuzaid'
                      id='tooltip112445449'
                      target='_blank'
                    >
                      <i className='fa fa-github' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip112445449'>
                      Follow me on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className='d-none d-lg-block ml-lg-4'>
                    <Button
                      className='btn-neutral btn-icon'
                      color='default'
                      href='https://docs.google.com/document/d/1WZ_MG2qk7p-Su08CsIInI007el82a8i1Ebhs-N1yGDY/edit'
                      target='_blank'
                      download
                    >
                      <span className='btn-inner--icon'>
                        <i className='fa fa-cloud-download mr-2' />
                      </span>
                      <span className='nav-link-inner--text ml-1'>Resume</span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;
