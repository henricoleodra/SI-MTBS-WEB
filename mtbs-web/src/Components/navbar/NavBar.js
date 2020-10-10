import React, {  } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Wrapper } from './style';

import logo from './../../Assets/image/logo/kemenkes.png';

const NavBar = (props) =>{
    return(
        <Wrapper>
            <Navbar expand="xl" className="shadow-lg wrapper-navbar p-1">
                <NavbarBrand href="/" className="text-white">
                    <img src={logo} className="logo-navbar"/>
                    <label className="font-weight-bold ml-2">SI-MTBS</label>
                </NavbarBrand>
            </Navbar>
        </Wrapper>
    );
}

export default NavBar;