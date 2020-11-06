import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Label } from "reactstrap";
import { Wrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Index = (props) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const [time, setTime] = useState(
    new Date().toLocaleString(undefined, options)
  );
  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleString(undefined, options));
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <Wrapper>
      <Row className="wrapper-dashboard-header">
        <Col xs={6}>
          <Button
            className="button-pepper-mint"
            onClick={() => {
              props.setIsOpen(!props.isOpen);
            }}
          >
            <FontAwesomeIcon
              className="fa-lg"
              icon={props.isOpen ? faTimes : faBars}
            />
          </Button>
          <Label className="text-muted mt-1 ml-3">
            <span className="font-weight-bold">Server Time:</span> {time}
          </Label>
        </Col>
        <Col xs={6} className="mt-1">
          <Row className="justify-content-end">
            <Col xs={6} className="d-flex justify-content-end">
              <Label className="text-muted">
                <span className="font-weight-bold">Logged in as:</span> MTBS
              </Label>
            </Col>
            <Col className="d-flex justify-content-end">
              <Link
                className="text-muted text-decoration-none mr-2"
                to="/Login"
              >
                <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Index;
