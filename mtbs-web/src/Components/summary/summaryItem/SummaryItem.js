import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

import '../../../Assets/style/style.css';

const SummaryItem = (props) => {
  return(
      <div>
        <Button className="w-100 mb-1" color={props.color} onClick={props.onClick} disabled={props.disabled}>
            <Row className="pr-3">
                <Col xs="auto">
                    <span className="text-right fontSideBar">{props.title}</span>
                </Col>
                <Col xs="1" className="ml-auto">
                    { props.isOpen
                    ? <FontAwesomeIcon icon={faChevronDown} />
                    : <FontAwesomeIcon icon={faChevronUp} />
                    }
                </Col>
            </Row>
        </Button>
        <Collapse className="w-100 mb-1 boldFont" isOpen={props.isOpen}>
          <Card>
            <CardBody className="pl-2 pr-2 pt-3 pb-3">
              <pre className="m-0">
                {props.children}
              </pre>
            </CardBody> 
          </Card>
        </Collapse>
      </div>
  );
};

export default SummaryItem;