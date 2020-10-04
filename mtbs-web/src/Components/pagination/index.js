import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { Wrapper } from './style';

const Index = ( props ) => {
    return (
        <Wrapper>
            <Row className="wrapper-pagination">
                <Col xs={4}>
                    <Button color="link" disabled>&lt; Sebelumnya</Button>
                </Col>
                <Col xs={1}>
                    <Button color="link" className="active">1</Button>
                </Col>
                <Col xs={1}>
                    <Button color="link">2</Button>
                </Col>
                <Col xs={1}>
                    <Button color="link">3</Button>
                </Col>
                <Col xs={1}>
                    <Button color="link" disabled>...</Button>
                </Col>
                <Col xs={4}>
                    <Button color="link">Selanjutnya &gt;</Button>
                </Col>
            </Row>
        </Wrapper>
    );
}

export default Index;