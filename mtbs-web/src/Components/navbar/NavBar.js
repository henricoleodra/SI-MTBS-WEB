import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
  Label,
} from "reactstrap";
import { Wrapper } from "./style";

import kemenkes from "./../../Assets/image/logo/kemenkes.png";
import puskesmas from "./../../Assets/image/logo/puskesmas.png";
import unpar from "./../../Assets/image/logo/unpar.png";
import informatika from "./../../Assets/image/logo/informatika.png";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const RenderComponent = () => {
    switch (props.step) {
      case 0:
        return (
          <React.Fragment>
            <NavItem className="mx-2">
              <Button
                className="button-bananna button-navbar px-3 py-2"
                tag={Link}
                to="Login"
              >
                LogIn
              </Button>
            </NavItem>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <NavItem className="mx-2">
              <Label className="text-white mt-2">
                Hi, <span className="font-weight-bold">{props.userName}</span>
              </Label>
            </NavItem>
            <NavItem className="mx-2">
              <Button
                className="button-bananna button-navbar px-3 py-2"
                tag={Link}
                to=".."
              >
                LogOut
              </Button>
            </NavItem>
          </React.Fragment>
        );
    }
  };

  return (
    <Wrapper>
      <Navbar expand="xl" className="shadow-lg wrapper-navbar p-1">
        <NavbarBrand className="text-white w-75">
          <img src={kemenkes} className="logo-kemenkes" alt="Logo Kemenkes" />
          <label className="font-weight-bold ml-2">SI-MTBS</label>
          <img
            src={puskesmas}
            className="logo-puskesmas ml-3"
            alt="Logo Puskesmas Cimbuleuit"
          />
          <img src={unpar} className="logo-unpar ml-1" alt="Logo UNPAR" />
          <img
            src={informatika}
            className="logo-informatika ml-3"
            alt="Logo UNPAR"
          />
        </NavbarBrand>
        <NavbarToggler className="button-bananna" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100 justify-content-end">{RenderComponent()}</Nav>
        </Collapse>
      </Navbar>
    </Wrapper>
  );
};

export default NavBar;
