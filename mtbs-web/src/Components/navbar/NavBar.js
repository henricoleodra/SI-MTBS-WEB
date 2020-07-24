import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfo, faPhone, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './style';

const NavBar = (props) =>{
    return(
        <Wrapper>
            <Navbar expand="lg" className="shadow-lg wrapper-navbar">
                <NavbarBrand href="/" className="text-white">
                    <FontAwesomeIcon icon={faCircle} size="lg" className="mr-1"/>
                    SI-MTBS
                </NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="text-white" href="#">
                                <FontAwesomeIcon icon={faHome} className="mr-1"/>
                                Beranda
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-3">
                            <NavLink className="text-white">
                                <FontAwesomeIcon icon={faInfo} className="mr-1"/>
                                Tentang
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-3">
                            <NavLink className="text-white">
                                <FontAwesomeIcon icon={faPhone} className="mr-1"/>
                                Kontak
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Wrapper>
    );
}

export default NavBar;