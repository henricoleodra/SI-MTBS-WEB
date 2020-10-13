import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Row, 
    Col, 
    Card, 
    Label, 
    Button, 
    CardTitle, 
    CardBody, 
    CardText, 
    CardImg, 
    Container
} from 'reactstrap';

import pemeriksaan from './../../Assets/image/medicineSS.png';
import dataanak from './../../Assets/image/dataBabyPage.png';

import { Wrapper } from './style';

const Lobby = (props) =>{
    return(
        <Wrapper>
            <div>
                <Container className="mt-4 mb-5 wrapper-beranda">
                    {/* <Row className="my-2">
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Link to="ApaItuMtbs" style={{textDecoration: "none"}}>
                                <Card className="shadow-lg wrapper-thumbnail">
                                    <CardImg className="thumbnail-img" top width="100%" height="100%" src={bukumtbs} alt="Buku Mtbs" />
                                    <div className="bg-white wrapper-thumbnail-caption">
                                        <CardTitle className="font-weight-bold text-center thumbnail-caption mt-2">Apa Itu MTBS</CardTitle>
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                    </Row> */}
                    <Row className="my-5">
                        <Col md={5}>
                            {/* <Link to="MulaiPemeriksaan" style={{textDecoration: "none"}}> */}
                                <Card className="wrapper-menus shadow-lg">
                                    <CardTitle className="text-center text-white font-weight-bold menus-title mt-2">Mulai Pemeriksaan</CardTitle>
                                    <div className="mt-1 mb-2">
                                        <CardImg bottom className="rounded" width="5%" height="250px" src={pemeriksaan} alt="Buku Mtbs" />
                                    </div>
                                    <CardBody>
                                        <CardText className="text-center menus-body">
                                            <Label className="text-dark">Cintai buah hati dengan melakukan test kesehatan, apakah buat hati sehat, dan terimuninasi sesuai dengan waktunya.</Label>
                                        </CardText>
                                        <div className="d-flex justify-content-center">
                                            <Button tag={Link} className="mx-auto button-orange px-3" to="MulaiPemeriksaan">Mulai Pemeriksaan</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            {/* </Link> */}
                        </Col>
                        <Col md={2}></Col>
                        <Col md={5}>
                            {/* <Link to="PencarianDataAnak" style={{textDecoration: "none"}}> */}
                                <Card className="wrapper-menus shadow-lg">
                                    <CardTitle className="text-center text-white font-weight-bold menus-title mt-2">Data Anak</CardTitle>
                                    <div className="mt-1 mb-2">
                                        <CardImg bottom className="rounded" width="5%" height="250px" src={dataanak} alt="Buku Mtbs" />
                                    </div>
                                    <CardBody>
                                        <CardText className="text-center menus-body">
                                            <Label className="text-dark">Mencari riwayat data anak yang sudah pernah melakukan pendaftaran dan pemeriksaan</Label>
                                        </CardText>
                                        <div className="d-flex justify-content-center">
                                            <Button tag={Link} className="mx-auto button-orange px-5" to="PencarianDataAnak">Data Anak</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            {/* </Link> */}
                        </Col>
                    </Row>
                </Container>
            </div>  
        </Wrapper>
        
    );
}

export default Lobby;