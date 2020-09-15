import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';


//Import Component
import HeaderTitle from './../../Components/headertitle/HeaderTitle'

// import NavBar from './../../Components/navbar/NavBar'


import '../../Assets/style/style.css';


const ApaItuMtbs = (props) => {
    return(
        <div>
            {/* <NavBar/> */}
            <HeaderTitle title="Apa Itu Manajemen Terpadu Balita Sakit"/>
                <Card style={{minHeight: '100px',backgroundColor : '#41E8B3', borderColor : '#41E8B3'}} className="shadow-lg m-4">
                    <Row className=" m-3">
                        <Col className="text-center mt-4">
                            <CardTitle className="font-weight-bold">DEFINISI</CardTitle>
                            <CardSubtitle>MTBS</CardSubtitle>
                        </Col>
                        <Col>
                            <CardBody>
                                <div className="d-flex justify-content-center mb-2" >
                                    Suatu manajemen untuk balita yang datang di pelayanan kesehatan, dilaksanakan secara terpadu
                                    mengenai klasifikasi, status gizi, status imun maupun penanganan dan konseling yang diberikan
                                </div>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
                <Card style={{minHeight: '100px', backgroundColor : '#41E8B3', borderColor : '#41E8B3'}} className="shadow-lg m-4">
                    <Row className=" m-3">
                        <Col className="text-center mt-4">
                            <CardTitle className="font-weight-bold">FUNGSI</CardTitle>
                            <CardTitle>MTBS</CardTitle>
                        </Col>
                        <Col>
                            <CardBody>
                                <div className="d-flex justify-content-center mb-2" >
                                    MTBS digunakan sebagai standar pelayanan bayi dan balita sakit sekaligus sebagai pedoman bagi
                                    tenaga keperawatan (bidan dan perawat) khususnya di fasilitas pelayanan kesehatan dasar
                                </div>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
                <Card style={{minHeight: '100px', backgroundColor : '#41E8B3', borderColor : '#41E8B3'}} className="shadow-lg m-4">
                    <Row className=" m-3">
                        <Col className="text-center mt-4">
                            <CardTitle className="font-weight-bold">TAHAPAN</CardTitle>
                            <CardTitle>MTBS</CardTitle>
                        </Col>
                        <Col>
                            <CardBody>
                                <div className="d-flex justify-content-center mb-2" >
                                    MTBS digunakan sebagai standar pelayanan bayi dan balita sakit sekaligus sebagai pedoman bagi
                                    tenaga keperawatan (bidan dan perawat) khususnya di fasilitas pelayanan kesehatan dasar<br/>
                                    -Pengisian Data Diri<br/>
                                    -Pemeriksaan Balita<br/>
                                    -Klasifikasi Penyakit Balita<br/>
                                    -Tindakan Atas Penyakit Balita
                                </div>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
                <div className="d-flex justify-content-center mb-2" >
                    <Link to="/" style={{textDecoration: "none"}} ><Button  style={{backgroundColor : '#41E8B3', width:'100%'}}color="light shadow-sm">Kembali ke Halaman Utama</Button></Link>
                </div>
        </div>
    )
}

export default ApaItuMtbs;