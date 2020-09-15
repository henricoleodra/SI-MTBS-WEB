import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

//import components
import HeaderTitle from './../../Components/headertitle/HeaderTitle'
import DaftarAnak from './../../Components/daftaranak/DaftarAnak'

//Styling
import '../../Assets/style/style.css';
import { Link } from 'react-router-dom';


const PencarianDataAnak = (props) => {
    return(
        <div>
            <div>
                <HeaderTitle title="Pencarian Data Anak"/>
            </div>
            <div className="d-flex" >
                <div style={{ width: '35%'}} className="m-3">
                    <Form className="divider">
                        <div style={{minHeight: '550px'}}>
                            <h3 className="text-center pb-3">Form Pencarian Anak</h3>
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
                            <Button color="success" style={{ width: '100%'}}>Cari Data Anak</Button>
                            <Link to="MulaiPemeriksaan"><Button color="danger" style={{ width: '100%'}} className="mt-3">Sebelumnya</Button></Link>
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

export default PencarianDataAnak;