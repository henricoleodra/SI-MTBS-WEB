import React, {useState} from 'react';
import {NavItem, Nav, Row, Col, NavLink, Label,  Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faBaby } from '@fortawesome/free-solid-svg-icons';
// import { NavLink as RRNavlink} from 'react-router-dom';

let bgColor = {
    backgroundColor: '#41E8B3'
} 

const SideBar = (props) => {
    // var x = window.location.pathname;
    // console.log(x);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
                    {/* <NavLink className="btn btn-light text-left" to="TandaBahayaUmum1" tag={RRNavlink}> */}
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
                                <span className="text-left">Klasfikasi</span>
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
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center">
                    <Button color="danger" onClick={toggle}>Tutup</Button>{' '}
                </ModalFooter>
            </Modal>
        </div> 
    );
}

  
export default SideBar;
