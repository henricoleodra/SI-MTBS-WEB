import React from 'react';
import {NavItem, Nav, Row, Col, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import { NavLink as RRNavlink} from 'react-router-dom';

let bgColor = {
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
                    <NavLink href="#" className="btn btn-light text-left" id="telinga" disabled >
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
                <NavItem>
                    <div>

                    </div>
                </NavItem>
            </Nav> 
        </div> 
    );
}

  
export default SideBar;
