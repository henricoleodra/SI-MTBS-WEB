import React from 'react';
import { Row, Col, Button } from 'reactstrap';


const Index = ( props ) => {
    return (
        <Row>
            <Col>
                <Button color="warning">Sebelumnya</Button>
            </Col>
            <Col>
                1   2   3
            </Col>
            <Col>
                <Button color="info">Selanjutnya</Button>
            </Col>
        </Row>
    );
}

export default Index;