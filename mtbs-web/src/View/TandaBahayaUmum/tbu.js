import React, { useState } from 'react';
import { FormGroup,Label, Input, Form} from "reactstrap";



const TandaBahayaUmum = (props) => {
  // const [cSelected, setCSelected] = useState([]);
  // const [rSelected, setRSelected] = useState(null);
  
  
  // const onCheckboxBtnClick = (selected) => {
  //     const index = cSelected.indexOf(selected);
  //     if (index < 0) {
  //     cSelected.push(selected);
  //     } else {
  //     cSelected.splice(index, 1);
  //     }
  //     setCSelected([...cSelected]);
  // }
  return (
    <Form>
      <div className="row">
        <div className="col">
          
        </div>
        <div className="col-6">
          <div className="border-bottom">
            <h3>Tanda Bahaya Umum</h3>
            <h5>Tanyakan dan periksa !</h5>
          </div>
          <div className="row">
            <div className="col-8">
              <FormGroup tag="fieldset">
                <legend>Tidak bisa minum/menyusu</legend>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup check className="d-inline">
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
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <FormGroup tag="fieldset">
                <legend>Memuntahkan semuanya</legend>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup check className="d-inline">
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
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <FormGroup tag="fieldset">
                <legend>Kejang-kejang</legend>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup check className="d-inline">
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
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <FormGroup tag="fieldset">
                <legend>Gelisah, Letargis atau tidak sadar</legend>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup check className="d-inline">
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
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <FormGroup tag="fieldset">
                <legend>Terdapat stridor</legend>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup check className="d-inline">
                <Label cek>
                  <Input type="radio" name="radio5"/>{''}
                  Ya
                </Label>
              </FormGroup>
              <FormGroup check className="d-inline">
                <Label cek>
                  <Input type="radio" name="radio5"/>{''}
                  Tidak
                </Label>
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <FormGroup tag="fieldset">
                <legend>Biru <i>(sianosis)</i></legend>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup check className="d-inline">
                <Label cek>
                  <Input type="radio" name="radio6"/>{''}
                  Ya
                </Label>
              </FormGroup>
              <FormGroup check className="d-inline">
                <Label cek>
                  <Input type="radio" name="radio6"/>{''}
                  Tidak
                </Label>
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <FormGroup tag="fieldset">
                <legend>Ujung tangan dan kaki pucat dan dingin</legend>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup check className="d-inline">
                <Label cek>
                  <Input type="radio" name="radio7"/>{''}
                  Ya
                </Label>
              </FormGroup>
              <FormGroup check className="d-inline">
                <Label cek>
                  <Input type="radio" name="radio7"/>{''}
                  Tidak
                </Label>
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="col">
          
        </div>
      </div>
    </Form>
  );
}

export default TandaBahayaUmum