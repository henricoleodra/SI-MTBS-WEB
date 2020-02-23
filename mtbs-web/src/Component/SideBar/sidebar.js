import React from 'react';
import {NavItem, Nav, Row, Col, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink as RRNavlink} from 'react-router-dom';

var bgColor = {
    backgroundColor: '#41E8B3'
} 

const SideBar = (props) => {
    // var x = window.location.pathname;
    // console.log(x);
    return (
        <div style={{backgroundColor: '#F8F9FB', minHeight : '100vh'}} className="w-25 p-0">
            <Nav vertical className="w-100">
                <div className="sidebar-header text-center" style={bgColor}>
                    <h3 className="mt-2">Halaman MTBS</h3>
                </div>
                <NavItem>
                    <NavLink className="btn btn-light text-left" to="TandaBahayaUmum1" tag={RRNavlink}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Tanda Bahaya Umum</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-danger" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-light text-left" to="Batuk1" tag={RRNavlink}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Batuk</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-warning" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" id="diare" disabled>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Diare</span>
                            </Col>
                            <Col xs="1" className="ml-auto">
                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" id="demam" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="telinga" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="anemia" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="hiv" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="imunisasi" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="vitA" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="keluhanlain" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="pemberianmakanan" disabled>
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
                    <NavLink href="#" className="btn btn-light text-left" id="klasifikasi">
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
        </div> 
    );
}

  
export default SideBar;