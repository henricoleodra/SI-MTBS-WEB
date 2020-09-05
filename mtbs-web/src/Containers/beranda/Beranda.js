import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button, Container} from 'reactstrap';

// Import Components
import { NavBar, Footer } from '../../Components';

//Import Image
// import pemeriksaan from './../../Assets/image/medicine.png';
// import buku from './../../Assets/image/book.png';
// import baby from './../../Assets/image/baby.png';
import pemeriksaan from './../../Assets/image/medicineSS.png';
import dataanak from './../../Assets/image/dataBabyPage.png';
import bukumtbs from './../../Assets/image/buku-mtbs.png';

import { Wrapper } from './style';

const Beranda = (props) =>{
    return(
        <Wrapper>
            <div>
                <NavBar />
                <Container className="mt-4 mb-5">
                    <Row className="my-2">
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
                    </Row>
                    <Row className="my-5">
                        <Col md={5}>
                            <Link to="MulaiPemeriksaan" style={{textDecoration: "none"}}>
                                <Card className="wrapper-menus shadow-lg my-2">
                                    <CardTitle className="text-center text-white font-weight-bold menus-title">Mulai Pemeriksaan</CardTitle>
                                    <div className="mt-1 mb-2">
                                        <CardImg bottom className="rounded" width="5%" height="250px" src={pemeriksaan} alt="Buku Mtbs" />
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={5}>
                            <Link to="PencarianDataAnak" style={{textDecoration: "none"}}>
                                <Card className="wrapper-menus shadow-lg my-2">
                                    <CardTitle className="text-center text-white font-weight-bold menus-title">Data Anak</CardTitle>
                                    <div className="mt-1 mb-2">
                                        <CardImg bottom className="rounded" width="5%" height="250px" src={dataanak} alt="Buku Mtbs" />
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>  
        </Wrapper>
        
    );
}

export default Beranda;