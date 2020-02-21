import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Row, Col, Card, CardBody,
  CardTitle, Button, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

var outlineColor = {
  borderColor : '#41E8B3'
}

const TandaBahayaUmum = (props) => {
  return (
    <Form>
      <div className="w-100">
        <div className="col-12">
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted"/>
            </div> 
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Tanda Bahaya Umum</h3>
            <hr
              style={{
                  color: "#41E8B3",
                  backgroundColor: "#41E8B3",
                  height: 5
              }}
            />
          </div>
          <h4 className="text-center">Tanyakan dan periksa !</h4>
          <div className="row d-flex justify-content-center">
            <Card style={outlineColor} className="text-center w-75" >
              <CardBody>
                <CardTitle className="h5">Tidak bisa minum/menyusu</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio1"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio1"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
            <Card style={outlineColor} className="text-center w-75 mt-3">
              <CardBody>
                <CardTitle className="h5">Memuntahkan semuanya</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio2"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio2"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
            <Card style={outlineColor} className="text-center w-75 mt-3">
              <CardBody>
                <CardTitle className="h5">Kejang-kejang</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio3"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio3"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
            <Card style={outlineColor} className="text-center w-75 mt-3">
              <CardBody>
                <CardTitle className="h5">Gelisah, Letargis atau tidak sadar</CardTitle>
                <FormGroup check className="d-inline pr-2">
                <Label cek>
                  <Input type="radio" name="radio4"/>{''}
                  Ya
                </Label>
                </FormGroup>
                <FormGroup check className="d-inline">
                  <Label cek>
                    <Input type="radio" name="radio4"/>{''}
                    Tidak
                  </Label>
                </FormGroup>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-3">
          <Link to="/TandaBahayaUmum2"><Button color="danger" disabled>Sebelumnya</Button></Link>
          <Link to="/TandaBahayaUmum2"><Button color="success">Berikutnya</Button></Link>
        </div>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum