import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Container, Row, Col, Button } from 'reactstrap';
// import { Tindakan } from '../../Components'
// import { useSelector } from 'react-redux';

const Tindakan = (props) => {
    return (
        <div className="d-flex flex-column mt-2">
            <div className="">
                <h3 className="text-center font-weight-bold">Tindakan</h3>
                <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5,
                        width: '95%'
                    }}
                />
            </div>

            <div className="d-flex justify-content-center flex-column ml-4">
                <div>
                    <h4 className="text-center">Tanda Bahaya Umum</h4>
                </div>
                <div>
                    <h6 className="text-center">Hasil Klasifikasi: Penyakit Sangat Berat</h6>
                </div>
            </div>

            <div className="d-flex ">
                <Container className="ml-5 ">
                    <Row className="pt-3" >

                        <Col sm={1} className="bg-success indicator border-left border-top
                        border-bottom border-right border-dark"></Col>

                        <Col sm={10}>
                            <Row>
                                <Col sm={12} className="border-right border-top border-bottom border-dark">
                                    <h6 className="py-2">Cari klinik tongfang memberikan solusi terbaik,
                                    Cari klinik tongfang memberikan solusi terbaik
                                    Cari klinik tongfang memberikan solusi terbaik</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} className="border-right  border-bottom border-dark">
                                    <h6 className="py-2">Cari klinik tongfang memberikan solusi terbaik</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* 
                    <Row className="">

                        <Col sm={1} className="bg-success indicator border-left border-bottom border-right"></Col>


                        <Col sm={9} className="border-right border-bottom border-left border-bottom">
                            <h6 className="">Cari klinik tongfang memberikan solusi terbaik sampai anda puas, ayo buruan datang
                            ke klinik tongfang</h6>
                        </Col>

                    </Row> */}
                </Container>
                {/* <Container className="w-75 justify-content-center">
                    {
                        klasifikasi.map((tindakan, idx) => {
                            if (tindakan.flag) {
                                return <Klasifikasi key={idx} status={tindakan.status} title={tindakan.title} klasifikasi={tindakan.tindakan} />
                            }
                            else {
                                return <></>
                            }
                        })
                    }
                </Container> */}
                {/* <ListGroup style={{width: '95%'}}>
                <ListGroupItem color="danger">Bila sedang kejang beri diazepam</ListGroupItem>
                <ListGroupItem color="danger">Bila ada stridor pastikan tidak ada sumbatan jalan napas</ListGroupItem>
                <ListGroupItem color="danger">Bila ada stridor, sianosis dan ujung tangan dan kaki pucat dan dingin berikan 
                    oksigen 3-5 liter/menit melalui nasai prong dengan perangkat oksigen standar (tabung O2 
                    dan humidifier)</ListGroupItem>
                <ListGroupItem color="danger">Cegah agar gula darah tidak turun</ListGroupItem>
                <ListGroupItem color="danger" className="font-weight-bold">RUJUK SEGERA</ListGroupItem>
            </ListGroup> */}
            </div>

            <div className="d-flex justify-content-center flex-column ml-4 mt-4">
                <div>
                    <h4 className="text-center">Batuk</h4>
                </div>
                <div>
                    <h6 className="text-center">Hasil Klasifikasi: Pneunomia</h6>
                </div>
            </div>

            <div className="d-flex ">
                <Container className="ml-5 ">
                    <Row className="pt-3" >

                        <Col sm={1} className="bg-warning indicator border-left border-top border-bottom border-right"></Col>

                        <Col sm={10}>
                            <Row>
                                <Col sm={12} className="border-right border-top border-left border-bottom">
                                    <h6 className="py-2">Cari klinik tongfang memberikan solusi terbaik,
                                    Cari klinik tongfang memberikan solusi terbaik
                                    Cari klinik tongfang memberikan solusi terbaik</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} className="border-right border-top border-left border-bottom">
                                    <h6 className="py-2">Cari klinik tongfang memberikan solusi terbaik</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="d-flex justify-content-center flex-column ml-4 mt-4">
                <div>
                    <h4 className="text-center">Demam</h4>
                </div>
                <div>
                    <h6 className="text-center">Hasil Klasifikasi: Malaria</h6>
                </div>
            </div>

            <div className="d-flex ">
                <Container className="ml-5 ">
                    <Row className="pt-3" >

                        <Col sm={1} className="bg-danger indicator border-left border-top border-bottom border-right"></Col>

                        <Col sm={10}>
                            <Row>
                                <Col sm={12} className="border-right border-top border-left border-bottom">
                                    <h6 className="py-2">Cari klinik tongfang memberikan solusi terbaik,
                                    Cari klinik tongfang memberikan solusi terbaik
                                    Cari klinik tongfang memberikan solusi terbaik</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} className="border-right border-top border-left border-bottom">
                                    <h6 className="py-2">Cari klinik tongfang memberikan solusi terbaik</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="d-flex justify-content-center mt-3">
                <Link to="Klasifikasi"><Button color="danger" >Kembali ke Halaman Klasifikasi</Button></Link>
            </div>
        </div>
    );
}

export default Tindakan;