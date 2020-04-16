import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfo, faPhone, faCircle } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) =>{
    return(
        <div>
            <Navbar expand="md" style={{backgroundColor: '#41E8B3'}} className="shadow">
                <NavbarBrand href="/" className="text-white">
                    <FontAwesomeIcon icon={faCircle} className="mr-1 fa-lg"/>
                    SI-MTBS
                </NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="text-white">
                                <FontAwesomeIcon icon={faHome} className="mr-1"/>
                                Beranda
                        </NavLink>
                    </NavItem>
                    {/* <hr style={{height : '1vh', width : '2px', backgroundColor: "white"}}/> */}
                    <NavItem className="ml-3">
                        <NavLink className="text-white">
                            <FontAwesomeIcon icon={faInfo} className="mr-1"/>
                            Tentang
                        </NavLink>
                    </NavItem>
                    {/* <hr style={{height : '1vh', width : '2px', backgroundColor: "white"}}/> */}
                    <NavItem className="ml-3">
                        <NavLink className="text-white">
                            <FontAwesomeIcon icon={faPhone} className="mr-1"/>
                            Kontak
                        </NavLink>
                    </NavItem>
                </Nav>
                {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;