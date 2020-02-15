import React from 'react';
import {NavItem, NavLink, Nav, Label, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

var bgColor = {
    backgroundColor: '#41E8B3'
} 

// const SideBar = () =>{
//     return (
//         <div style={{backgroundColor: '#F8F9FB', minHeight : '100vh'}} className="col-3 p-0">
//             <Nav vertical className="w-100">
//                 <div className="sidebar-header text-center" style={bgColor}>
//                     <h3 className="mt-2">Halaman MTBS</h3>
//                 </div>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left">
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Tanda Bahaya Umum</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-danger" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left">
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Batuk atau Sukar Bernafas</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-warning" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left">
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Diare</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-success" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" active>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Demam</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" disabled>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Masalah Telinga</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" disabled>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Anemia</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" disabled>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Status HIV</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" disabled>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Status Imunisasi</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" disabled>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Pemberian Vitamin A</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" disabled>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Keluhan Lain</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#" className="btn btn-light text-left" disabled>
//                         <Row className="pr-3">
//                             <Col xs="auto">
//                                 <span className="text-left">Penilaian Pemberian Makanan</span>
//                             </Col>
//                             <Col xs="1" className="ml-auto">
//                                 <FontAwesomeIcon icon={faCircle} className="text-muted" />
//                             </Col>
//                         </Row>
//                     </NavLink>
//                 </NavItem>
//             </Nav> 
//         </div>
//     );
// }

export default class SideBar extends React.Component{
    render(){
        return (
            <div style={{backgroundColor: '#F8F9FB', minHeight : '100vh'}} className="w-25 p-0">
                <Nav vertical className="w-100">
                    <div className="sidebar-header text-center" style={bgColor}>
                        <h3 className="mt-2">Halaman MTBS</h3>
                    </div>
                    <NavItem>
                        <NavLink href="#" className="btn btn-light text-left">
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
                        <NavLink href="#" className="btn btn-light text-left">
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
                        <NavLink href="#" className="btn btn-light text-left">
                            <Row className="pr-3">
                                <Col xs="auto">
                                    <span className="text-left">Diare</span>
                                </Col>
                                <Col xs="1" className="ml-auto">
                                    <FontAwesomeIcon icon={faCircle} className="text-success" />
                                </Col>
                            </Row>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="btn btn-light text-left" active>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
                        <NavLink href="#" className="btn btn-light text-left" disabled>
                            <Row className="pr-3">
                                <Col xs="auto">
                                    <span className="text-left">Klasfikasi</span>
                                </Col>
                            </Row>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="btn btn-light text-left" disabled>
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
}
