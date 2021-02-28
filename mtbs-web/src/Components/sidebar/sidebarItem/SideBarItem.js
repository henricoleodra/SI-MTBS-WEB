import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem, Row, Col, NavLink, Badge, Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const SideBarItem = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const name = props.title.replace(/ /g, "");
  if (name === "Batuk") {
    console.log(props.status);
  }

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  };

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
            <span className="ml-2 text-left fontSideBar">{props.title}</span>{" "}
            <small
              id="tooltipTidakLengkap"
              className={`${
                !props.location.includes(name) && props.status === 1
                  ? ""
                  : "d-none"
              }`}
            >
              <Badge color="danger font-weight-bold">!</Badge>
            </small>
            <Tooltip
              placement="right"
              isOpen={tooltipOpen}
              target="tooltipTidakLengkap"
              toggle={toggle}
            >
              Pengisian Belum Lengkap
            </Tooltip>
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
