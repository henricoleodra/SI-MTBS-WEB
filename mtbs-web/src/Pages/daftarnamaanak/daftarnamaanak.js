import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

//import components
import NavBar from './../../Components/navbar/NavBar'
import DaftarAnak from './../../Components/daftarnamaanak/daftarnama'
import TidakDitemukan from './../../Components/daftarnamaanak/tidakditemukan'

let bold = {
    fontWeight: 'bold'
}


const DaftarNamaAnak = (props) => {
    return(
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="d-flex" >
                <div style={{ width: '40%'}} className="m-3">
                    <Form>
                        <div style={{minHeight: '550px'}}>
                            <FormGroup>
                                <Label for="NamaAnak">Nama</Label>
                                <Input type="text" name="NamaAnak" id="NamaAnak" placeholder="Masukkan nama anak" />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Jenis Kelamin</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Laki-Laki
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Perempuan
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="NamaIbu">Nama</Label>
                                <Input type="text" name="NamaIbu" id="NamaIbu" placeholder="Masukkan nama ibu" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="NamaTanggalLahir">Nama</Label>
                                <Input type="text" name="NamaTanggalLahir" id="NamaTanggalLahir" placeholder="Masukkan tanggal lahir" />
                            </FormGroup>
                        </div>
                        <div>
                            <Button color="success" style={{ width: '100%'}}>Cari Data Anak</Button><br></br>
                            <Button color="danger" style={{ width: '100%'}} className="mt-3">Sebelumnya</Button>
                        </div>        
                    </Form>
                </div>
                <div style={{ width: '60%'}} className="m-3 text-center">
                    <DaftarAnak/>
                </div>
            </div>
        </div>
    );
}

export default DaftarNamaAnak