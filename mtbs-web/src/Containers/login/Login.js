import React, {  } from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Wrapper } from './Style';
import { Link, useHistory } from 'react-router-dom'
import LogoKemenkes from '../../Assets/image/logo/kemenkes.png';
import LogoPuskemas from '../../Assets/image/logo/puskesmas.png';
import LogoUnpar from '../../Assets/image/logo/unpar.png';
import LogoInformatika from '../../Assets/image/logo/informatika.png';

const Login = () => {
    return (
        <Wrapper style={{width:'100%', height: '100%'}}>
            <Container className=" wrapper-login h-100 d-flex justify-content-center flex-column p-5" fluid>
                
                <Row className="mt-4">
                    <Col sm={12} className="text-center">
                        <img src={LogoKemenkes}  className = "logo-kemenkes"/>
                    </Col>
                    {/* <Col ">
                        <Link >X</Link>
                    </Col> */}
                </Row>
                <Link className="button-x mr-3 mt-1 fa-2x" to=".."><FontAwesomeIcon icon={faTimes}/></Link>

                <h1 className="text-primary text-center m-1">SI MTBS</h1>       

                <Row>
                    {/* <Col sm={3}></Col> */}
                    <Col sm={12} className="justify-content-center d-flex flex-column">
                    {/* align-self-center */}
                        <div className="justify-content-center d-flex flex-row">
                            <Form className="justify-content-center d-flex flex-column w-25" >
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" placeholder="Enter Username" style={{borderColor : '#46d0fe',width:'100%'}} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Enter Password" style={{borderColor : '#46d0fe'}}required/>
                                </FormGroup>
                                <Row className="justify-content-center d-flex flex-column m-2">
                                    <Button className="button-pepper-mint">Masuk</Button>
                                    </Row>
                                <Row className="justify-content-center d-flex flex-column m-2">
                                    {/* <Button className="button-orange">Kembali</Button> */}
                                </Row>
                            </Form>
                            
                        </div>
                    </Col>
                    {/* <Col sm={3}></Col>      */}
                </Row>
                <Row className="justify-content-center mt-3">
                    <img src={LogoPuskemas}  className = "m-3 logo-puskesmas"/>
                    <img src={LogoUnpar}  className = "m-3 logo-unpar"/>
                    <img src={LogoInformatika}  className = "m-3 logo-informatika"/>
                </Row>
                <small className="text-muted text-center">Copyright © 2020 Tim Pengembangan SI-MTBS</small>
            </Container>
        </Wrapper>
    );
}

export default Login;