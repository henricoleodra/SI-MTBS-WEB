import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Card, CardBody, CardTitle, CardText, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';

const DemamPerhatian = (props) => {
    return(
        <Form /**onSubmit={handleSubmit}**/>
            <div className="w-100">
                <div style={{minHeight: "590px"}}>
                    <Row className="justify-content-center">
                        <Card  className="text-center w-75 bg-danger mt-5 shadow-lg border-danger" style={{minHeight: "500px"}}>
                            <CardBody className="d-flex justify-content-center flex-column">
                                <CardTitle className="h5"><FontAwesomeIcon icon={faExclamationTriangle} className="fa-5x text-white"/></CardTitle>
                                <CardText className="h1 text-white font-weight-bold mt-3">Perhatian</CardText>
                                <CardText className="h3 text-white font-weight-bold">Lakukan Tes Malaria pada Anak!</CardText>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-0">
                <Col sm="4">
                    <Link to="DemamDaerah" style={{textDecoration: "none"}}><Button block color="danger"><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Link to="Demam1" style={{textDecoration: "none"}}><Button block color="success">Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                </Col>
            </Row>
        </Form>
    );
}

export default DemamPerhatian;