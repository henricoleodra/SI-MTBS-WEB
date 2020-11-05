import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Wrapper } from "./style";
import LogoKemenkes from "../../Assets/image/logo/kemenkes.png";

const Index = (props) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <Wrapper>
      <div className={`left ${props.isOpen ? "active" : ""}`}>
        <Nav vertical id="sidebar" className="min-vh-100">
          <div className="content">
            <NavbarBrand className="my-3 d-flex flex-column align-items-center">
              <img src={LogoKemenkes} className="sidebar-brand" />
              <h3 className="text-center mt-2 brand">SI-MTBS</h3>
            </NavbarBrand>
            <NavItem className="mt-2">
              <NavLink
                className={`text-white sidebar-menu p-3 ${
                  props.page === "dashboard" ? "active" : ""
                }`}
                to="/Dashboard"
                tag={Link}
              >
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`text-white sidebar-menu p-3 ${
                  props.page === "statistik" ? "active" : ""
                }`}
                to="/Statistik"
                tag={Link}
              >
                Statistik
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`text-white sidebar-menu p-3 ${
                  props.page === "trend" ? "active" : ""
                }`}
                to="/Trend"
                tag={Link}
              >
                Trend
              </NavLink>
            </NavItem>
          </div>
        </Nav>
      </div>

      {/* <div class={`right ${isOpen ? "active" : ""}`}>
                <Container fluid className="min-vh-100">
                    <Button
                        style={{ position: "absolute", right: "10px", top: "10px", zIndex: "1" }}
                        onClick={() => { toggle() }}
                    >🖕</Button>
                    <Row>
                        <Col>
                            <h1>Right Content</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div> */}
    </Wrapper>
  );
};

export default Index;
