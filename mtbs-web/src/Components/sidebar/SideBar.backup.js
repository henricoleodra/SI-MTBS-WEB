import React, {useState} from 'react';
import {NavItem, Nav, Row, Col, NavLink, Label,  Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faBaby } from '@fortawesome/free-solid-svg-icons';



let bgColor = {
    backgroundColor: '#41E8B3'
} 

let bold = {
    fontWeight: 'bold'
}

const SideBar = (props) => {
    // var x = window.location.pathname;
    // console.log(x);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    let tmp = props.location.replace(/[0-9]/g, '');
    console.log('hello')
    return (
        <div style={{backgroundColor: '#F8F9FB', minHeight : '100vh'}} className="w-25 p-0">
            <Nav vertical className="w-100">
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" id="tindakan" style={{backgroundColor:'#41E8B3'}} onClick={toggle}>
                        <div className="d-flex flex-row">
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faBaby} className="fa-3x"/>
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <div>
                                    <Label>Nama Anak :</Label> <strong>Harry Senjaya</strong>
                                </div>
                                <div>
                                    <Label>Click disini untuk Detail Anak!</Label> 
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-light text-left" href="TandaBahayaUmum1" active={props.location === "TandaBahayaUmum1" || props.location === "TandaBahayaUmum2"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Tanda Bahaya Umum</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className={props.iconColor[0]} />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-light text-left" href="Batuk1" active={props.location === "Batuk1" || props.location === "Batuk2"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Batuk</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className={props.iconColor[1]} />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Diare1" className="btn btn-light text-left" active={props.location === "Diare1" || props.location === "Diare2"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Diare</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className={props.iconColor[1]} />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Demam1" className="btn btn-light text-left" id="demam" active={props.location === "Demam1"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Demam</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Telinga1" className="btn btn-light text-left" id="telinga" active={props.location === "Telinga1" || props.location === "Telinga2"} >
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Telinga</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Gizi1" className="btn btn-light text-left" id="telinga" active={props.location === "Gizi1" || props.location === "Gizi2" || props.location === "Gizi3"} >
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Gizi</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Anemia" className="btn btn-light text-left" id="anemia" active={props.location === "Anemia"} >
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Anemia</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="HIV1" className="btn btn-light text-left" id="hiv" active={props.location === "HIV1" || props.location === "HIV2"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">HIV</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Imunisasi1" className="btn btn-light text-left" id="imunisasi" active={props.location === "Imunisasi1" ||props.location === "Imunisasi2" ||props.location === "Imunisasi3" || props.location === "Imunisasi4" }>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Imunisasi</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Vitamina" className="btn btn-light text-left" id="vitA" active={props.location === "Vitamina"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Vitamin A</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="KeluhanLain" className="btn btn-light text-left" id="keluhanlain" active={props.location === "KeluhanLain"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Keluhan Lain</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="PemberianMakanan1" className="btn btn-light text-left" id="pemberianmakanan" active={props.location === "PemberianMakanan1" || props.location === "PemberianMakanan2" || props.location === "PemberianMakanan3" || props.location === "PemberianMakanan4"}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Pemberian Makanan</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Klasifikasi" className="btn btn-light text-left" id="klasifikasi" active={props.location === 'Klasifikasi'}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Klasifikasi</span>
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" id="tindakan" disabled>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Tindakan</span>
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
            </Nav> 

            <Modal isOpen={modal} toggle={toggle} size="lg" centered>
                <ModalHeader toggle={toggle} style={bgColor}>Profile Anak</ModalHeader>
                <ModalBody className="d-flex">
                    <div>
                        <div><Label style={bold}>Nama Anak :</Label> Harry Senjaya</div>
                        <div><Label style={bold}>Nama Ibu :</Label> Friska Christiana</div>
                        <div><Label style={bold}>Jenis Kelamin :</Label> Laki-laki</div>
                        <div><Label style={bold}>Tanggal Lahir: </Label> 4 Mei 2020</div>
                        <div><Label style={bold}>Suhu: </Label> 37 °C</div>
                    </div>
                    <hr style={{backgroundColor: '#41E8B3', width: 1, height: "15vh"}} className="ml-5 mr-5"/>
                    <div className="ml-0">
                        <div><Label style={bold}>Berat Badan: </Label> 100 kg</div>
                        <div><Label style={bold}>Tinggi Badan: </Label> 50 cm</div>
                        <div><Label style={bold}>Keluhan Anak: </Label> Diare, Muntah-muntah, Nangis</div>
                        <div><Label style={bold}>Kunjungan Ke: </Label> 5</div>
                        <div><Label style={bold}>Alamat: </Label> Indonesia, Bandung</div>
                    </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center">
                    <Button color="danger" onClick={toggle}>Tutup</Button>{' '}
                </ModalFooter>
            </Modal>
        </div> 
    );
}

  
export default SideBar;
