import React, { useState } from 'react';
import {NavItem, Row, Col, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const SideBarItem = (props) => {
  return(
    <NavItem>
      <NavLink className="btn btn-light text-left" href={props.link} active={props.active} disabled={props.disabled}>
          <Row className="pr-3">
              <Col xs="ml-0 mr-0">
                <h5 className="ml-2 pt-1 text-left ">{props.title}</h5>
              </Col>
              <Col xs="1" className="ml-auto mt-auto mb-auto">
                  <FontAwesomeIcon icon={faCircle} className={props.color}/>
              </Col>
          </Row>
      </NavLink>
    </NavItem>
  );
};

export default SideBarItem;