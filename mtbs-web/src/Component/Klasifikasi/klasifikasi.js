import React, { useState } from 'react';
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
                            <CardTitle className="">Tanda Bahaya Umum</CardTitle>
                        </CardHeader>
                        <CardBody className="text-center">
                            Penyakit PROSI
                        </CardBody>
                        <CardFooter className="d-flex justify-content-center">
                            <Button className="btn btn-secondary" >Tindakan</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="" style={{width: '30%'}}>
                    <Card className="">
                        <CardHeader className="text-center bg-warning text-dark">
                            <CardTitle>Batuk</CardTitle>
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
            <div className="d-flex justify-content-around mt-2">
                <div className="" style={{width: '40%'}}>
                    <Card className="">
                        <CardHeader>
                            <CardTitle>Tanda Bahaya Umum</CardTitle>
                        </CardHeader>
                        <CardBody>
                            Penyakit PROSI
                        </CardBody>
                    </Card>
                </div>
                <div className="" style={{width: '40%'}}>
                    <Card className="">
                        <CardHeader>
                            <CardTitle>Tanda Bahaya Umum</CardTitle>
                        </CardHeader>
                        <CardBody>
                            Penyakit PROSI
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-2">
                <div className="" style={{width: '40%'}}>
                    <Card className="">
                        <CardHeader>
                            <CardTitle>Tanda Bahaya Umum</CardTitle>
                        </CardHeader>
                        <CardBody>
                            Penyakit PROSI
                        </CardBody>
                    </Card>
                </div>
                <div className="" style={{width: '40%'}}>
                    <Card className="">
                        <CardHeader>
                            <CardTitle>Tanda Bahaya Umum</CardTitle>
                        </CardHeader>
                        <CardBody>
                            Penyakit PROSI
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>  
    );
}

export default Klasifikasi;