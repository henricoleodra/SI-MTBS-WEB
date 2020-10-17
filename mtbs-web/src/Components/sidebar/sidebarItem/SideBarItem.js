import React from "react";
import { Link } from "react-router-dom";
import { NavItem, Row, Col, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import "../../../Assets/style/style.css";

const SideBarItem = (props) => {
  return (
    <NavItem>
      <NavLink
        className="btn btn-light text-left paddingSideBar"
        active={props.active}
        disabled={props.disabled}
        tag={Link}
        to={props.link}
      >
        <Row className="pr-3 pt-0 pb-0">
          <Col xs="ml-0 mr-0">
            <span className="ml-2 text-left fontSideBar">{props.title}</span>
          </Col>
          <Col xs="1" className="ml-auto mt-auto mb-auto d-flex">
            <FontAwesomeIcon
              icon={faCircle}
              className={`text-` + props.color}
            />
          </Col>
        </Row>
      </NavLink>
    </NavItem>
  );
};

export default SideBarItem;
