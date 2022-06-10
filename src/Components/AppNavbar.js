import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';
import '../App.css'
export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarText className="Navbartextt">Learning management System</NavbarText>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    NavBar
                </Nav>
            </Collapse>
        </Navbar>;
    }
}