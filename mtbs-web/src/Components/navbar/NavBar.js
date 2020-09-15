import React, {  } from 'react';
import {  Navbar, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './style';

const NavBar = (props) =>{
    return(
        <Wrapper>
            <Navbar expand="xl" className="shadow-lg wrapper-navbar d-flex justify-content-center">
                <NavbarBrand href="/" className="text-white">
                    <FontAwesomeIcon icon={faCircle} size="lg" className="mr-1"/>
                    SI-MTBS
                </NavbarBrand>
            </Navbar>
        </Wrapper>
    );
}

export default NavBar;