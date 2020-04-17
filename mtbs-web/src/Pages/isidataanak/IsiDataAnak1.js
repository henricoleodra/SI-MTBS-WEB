import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

//Import Component
import HeaderTitle from './../../Components/headertitle/HeaderTitle'

const IsiDataAnak1 = () =>{
    return(
        <div>
            <HeaderTitle title="Isi Data Anak"/>
            <div className="d-flex justify-content-center mt-4">
                <Form className="w-75 justify-content-center">
                    <div style={{minHeight : "380px"}}>
                        <FormGroup>
                            <Label for="namaAnak">Nama Anak</Label>
                            <Input type="text" name="namaAnak" id="namaAnak" placeholder="Contoh : John Doe" style={{borderColor : '#41E8B3'}}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="namaIbu">Nama Ibu</Label>
                            <Input type="text" name="namaIbu" id="namaIbu" placeholder="Contoh : Jane Doe" style={{borderColor : '#41E8B3'}}/>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Label>Jenis Kelamin</Label>
                            <div className="d-flex">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="jenisKelamin" />{' '}
                                        Laki-Laki
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="ml-3">
                                    <Label check>
                                        <Input type="radio" name="jenisKelamin" />{' '}
                                        Perempuan
                                    </Label>
                                </FormGroup>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="alamat">Alamat</Label>
                            <Input type="text" name="alamat" id="alamat" placeholder="Contoh : Jl. Ciumbuleuit No.94, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40141" style={{borderColor : '#41E8B3'}}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="tanggalLahir">Tanggal Lahir</Label>
                            
                            <InputGroup>
                                <Input type="date" name="tanggalLahir" id="tanggalLahir" placeholder="Contoh : John Doe" style={{borderColor : '#41E8B3'}}/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}}><FontAwesomeIcon icon={faCalendarDay} style={{color: 'white'}}/></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="MulaiPemeriksaan" style={{textDecoration: "none"}}><Button color="danger">Sebelumnya</Button></Link>
                        <Link to="IsiDataAnak2" style={{textDecoration: "none"}}><Button color="success">Selanjutnya</Button></Link>
                    </div>   
                    
                </Form>
            </div>
        </div>
    );
}

export default  IsiDataAnak1;