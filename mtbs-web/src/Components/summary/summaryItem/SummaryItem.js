import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

const SummaryItem = (props) => {
  return(
      <div>
        <Button className="w-100 mb-1" color={props.color} onClick={props.onClick} disabled={props.disabled}>
            <Row className="pr-3">
                <Col xs="auto">
                    <h5 className="text-right">{props.title}</h5>
                </Col>
                <Col xs="1" className="ml-auto">
                    { props.isOpen
                    ? <FontAwesomeIcon icon={faChevronDown} />
                    : <FontAwesomeIcon icon={faChevronUp} />
                    }
                </Col>
            </Row>
        </Button>
        <Collapse className="w-100 mb-1" isOpen={props.isOpen}>
          <Card>
            <CardBody>
              {props.children}
            </CardBody> 
          </Card>
        </Collapse>
      </div>
  );
};

export default SummaryItem;