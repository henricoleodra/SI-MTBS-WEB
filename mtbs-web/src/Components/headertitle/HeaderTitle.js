import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const HeaderTitle = (props) =>{
    return(
        <div>
            <Navbar expand="md" style={{backgroundColor : '#41E8B3'}} className="d-flex justify-content-center">
                <h2 className="text-white">{props.title}</h2>
            </Navbar>
        </div>
    );
}

export default HeaderTitle;