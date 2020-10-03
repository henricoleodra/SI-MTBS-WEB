import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardTitle, CardText, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
//Import Component
import { HeaderTitle } from '../../Components'

import { reset } from '../../Actions';

const MulaiPemeriksaan = (props) =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(reset('RESET_STORE'));
    }, []);

    return(
        <div>
            <HeaderTitle title="Mulai Pemeriksaan"/>
            <div className="mt-3">
                <h3 className="text-center">Apakah Anak sudah pernah melakukan pemeriksaan ?</h3>
            </div>
            <Row className=" mt-3 ml-0 mr-0">
                <Col xs="6">
                    <Container className="p-5" style={{width:"75%"}}>
                        <Link to="PencarianDataAnak" style={{textDecoration: 'none'}}>
                            <Card className="shadow rounded" style={{backgroundColor: '#46d0fe', border: '0'}}>
                                <CardText className="d-flex justify-content-center mt-2">
                                    <h1><FontAwesomeIcon icon={faCheck} className="text-white fa-7x"/></h1>
                                </CardText>
                                <CardTitle className="text-white text-center"><h1>YA</h1></CardTitle>
                            </Card>
                        </Link>
                    </Container>
                </Col>
                <Col xs="6">
                    <Container className="p-5" style={{width:"75%"}}>
                        <Link to="IsiDataAnak/1" style={{textDecoration: 'none'}}>
                            <Card className="shadow rounded" style={{backgroundColor: '#fe8d3b', border: '0'}}>
                                <CardText className="d-flex justify-content-center mt-2">
                                    <h1><FontAwesomeIcon icon={faTimes} className="text-white fa-7x"/></h1>
                                </CardText>
                                <CardTitle className="text-white text-center"><h1>TIDAK</h1></CardTitle>
                            </Card>
                        </Link>
                    </Container>
                </Col>
                {/* <Col xs="6" >
                    <Link to="PencarianDataAnak" style={{textDecoration: 'none'}}>
                        <Card style={{minHeight: '400px'}} className="bg-success shadow rounded">
                            <CardText className="d-flex justify-content-center mt-2">
                                <h1><FontAwesomeIcon icon={faCheck} className="text-white fa-7x"/></h1>
                            </CardText>
                            <CardTitle className="text-white text-center"><h1>YA</h1></CardTitle>
                        </Card>
                    </Link>
                </Col>
                <Col xs="6" >
                    <Link to="IsiDataAnak/1" style={{textDecoration: 'none'}}>
                        <Card style={{minHeight: '400px'}} className="bg-danger shadow rounded">
                            <CardText className="d-flex justify-content-center mt-2">
                                <h1><FontAwesomeIcon icon={faTimes} className="text-white fa-7x"/></h1>
                            </CardText>
                            <CardTitle className="text-white text-center"><h1>TIDAK</h1></CardTitle>
                        </Card>
                    </Link>
                </Col> */}
            </Row>
            
            
        </div>
    );
}

export default  MulaiPemeriksaan;