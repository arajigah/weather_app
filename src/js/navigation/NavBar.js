import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
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
        <Navbar color='dark' dark expand="sm">,
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RouterNavLink} to='/'>Current</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RouterNavLink} to='/3day'>3-Day</NavLink>
              </NavItem>
			  <NavItem>
                <NavLink tag={RouterNavLink} to='/5day'>5-Day</NavLink>
			</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
