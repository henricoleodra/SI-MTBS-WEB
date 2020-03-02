import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader, CardBody, CardTitle, CardFooter, Button} from 'reactstrap';

let bgColor = {
    backgroundColor: '#41E8B3',
    borderColor: '#41E8B3'
}

const Klasifikasi = (props) =>{
    return(
        <div className="d-flex flex-column mt-2">
            <div className="">
                    <h3 className="text-center font-weight-bold">Klasifikasi</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5,
                        width: '95%'
                    }}
                    />
                </div>
            <div className="d-flex justify-content-around mt-2">
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center bg-danger text-light">
                            <CardTitle className="font-weight-bold">Tanda Bahaya Umum</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            <div>Penyakit PROSI</div>
                            <div>Penyakit PROSI</div>
                            
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Link to="Tindakan"><Button className="btn btn-secondary" >Tindakan</Button></Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center bg-warning text-dark">
                            <CardTitle className="font-weight-bold">Batuk</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Button className="btn btn-secondary">Tindakan</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center ">
                            <CardTitle className="font-weight-bold">Diare</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Link to="Tindakan"><Button className="btn btn-secondary" >Tindakan</Button></Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center bg-success text-dark">
                            <CardTitle className="font-weight-bold">Demam</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Button className="btn btn-secondary">Tindakan</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center ">
                            <CardTitle className="font-weight-bold">Telinga</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Link to="Tindakan"><Button className="btn btn-secondary" >Tindakan</Button></Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center bg-light text-dark">
                            <CardTitle className="font-weight-bold">Gizi</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Button className="btn btn-secondary">Tindakan</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center ">
                            <CardTitle className="font-weight-bold">Anemia</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Link to="Tindakan"><Button className="btn btn-secondary" >Tindakan</Button></Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center bg-light text-dark">
                            <CardTitle className="font-weight-bold">HIV</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Button className="btn btn-secondary">Tindakan</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center ">
                            <CardTitle className="font-weight-bold">Imunisasi</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Link to="Tindakan"><Button className="btn btn-secondary" >Tindakan</Button></Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center bg-light text-dark">
                            <CardTitle className="font-weight-bold">Vitamin A</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Button className="btn btn-secondary">Tindakan</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3 mb-3">
                    <div className="" style={{width: '30%'}}>
                        <Card className="">
                            <CardHeader className="text-center ">
                                <CardTitle className="font-weight-bold">Keluhan Lain</CardTitle>
                            </CardHeader>
                            <CardBody className="text-center">
                                Penyakit PROSI
                            </CardBody>
                            <CardFooter className="d-flex justify-content-center">
                                <Link to="Tindakan"><Button className="btn btn-secondary" >Tindakan</Button></Link>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="" style={{width: '30%'}}>
                        <Card className="">
                            <CardHeader className="text-center bg-light text-dark">
                                <CardTitle className="font-weight-bold">Pemberian Makanan</CardTitle>
                            </CardHeader>
                            <CardBody className="text-center">
                                Penyakit PROSI
                            </CardBody>
                            <CardFooter className="d-flex justify-content-center">
                                <Button className="btn btn-secondary">Tindakan</Button>
                            </CardFooter>
                        </Card>
                    </div>
            </div>
        </div>  
    );
}

export default Klasifikasi;