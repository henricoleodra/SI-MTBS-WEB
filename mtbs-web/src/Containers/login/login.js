import React, {  } from 'react';
import { Container } from 'reactstrap';
import { Wrapper } from './Style';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from 'reactstrap';
import LogoKemenkes from '../../Assets/image/logo/kemenkes.png';

const Login = () => {
    return (
        <Wrapper style={{width:'100%', height: '100%'}}>
            <Container className=" wrapper-login h-100 d-flex justify-content-center flex-column p-5" fluid>
                
                <Row>
                    <Col sm={12} className="text-center">
                        <img src={LogoKemenkes}  className = "w-20 h-100 logo-kemenkes"/>
                    </Col>
                </Row>

                <h1 className="text-primary text-center">SI MTBS</h1>       

                <Row>
                    {/* <Col sm={3}></Col> */}
                    <Col sm={12} className="justify-content-center d-flex flex-column">
                        <div className="align-self-center">
                            <Form className="justify-content-center d-flex flex-column" >
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" placeholder="Enter Username" style={{borderColor : '#46d0fe'}} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Enter Password" style={{borderColor : '#46d0fe'}}required/>
                                </FormGroup>

                                <Button color="primary">Login</Button>
                            </Form>
                        </div>
                    </Col>
                    {/* <Col sm={3}></Col>      */}
                </Row>
                      

                <h5 className="text-muted text-center">Copyright © 2020 Tim Pengembangan SI-MTBS</h5>
            </Container>
        </Wrapper>
    );
}

export default Login;