import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label, Input, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
//import components
import { HeaderTitle, DataAnak, Pagination } from './../../Components';

//Styling
import '../../Assets/style/style.css';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';


const PencarianDataAnak = ( props ) => {
    let [namaAnak, set_namaAnak] = useState();
    let [jenisKelamin, set_jenisKelamin] = useState();
    let [namaIbu, set_namaIbu] = useState();
    let [tanggalLahir, set_tanggalLahir] = useState();

    const handleSearch = event => {
        event.preventDefault();
        let data = {
            namaAnak: namaAnak,
            jenisKelamin: jenisKelamin,
            namaIbu: namaIbu,
            tanggalLahir: tanggalLahir
        };
    }

    const handleNamaAnak = event => {
        set_namaAnak(event.target.value);
    }

    const handleJenisKelamin = event => {
        set_jenisKelamin(Number(event.target.value));
    }

    const handleNamaIbu = event => {
        set_namaIbu(event.target.value);
    }

    const handleTanggalLahir = event => {
        set_tanggalLahir(event.target.value);
    }
    let anak = [
        {
            'namaAnak' : 'Kelvin Dragon',
            'namaIbu' : 'Nasus',
            'jenisKelamin' : 'Laki-laki',
            'tanggalLahir' : '25 Januari 2020'
        },
        {
            'namaAnak' : 'Navoy Leodra',
            'namaIbu' : 'Fani',
            'jenisKelamin' : 'Laki-laki',
            'tanggalLahir' : '25 Januari 2020'
        },
        {
            'namaAnak' : 'Fidelis',
            'namaIbu' : 'Tri Rahayu',
            'jenisKelamin' : 'Perempuan',
            'tanggalLahir' : '25 Januari 2020'
        },
        {
            'namaAnak' : 'Fidelis',
            'namaIbu' : 'Tri Rahayu',
            'jenisKelamin' : 'Perempuan',
            'tanggalLahir' : '25 Januari 2020'
        },
    ];
    
    const renderDaftarAnak = anak.map((curr, index) => {
        return(
            <DataAnak key={index} namaAnak={curr.namaAnak} namaIbu={curr.namaIbu} jenisKelamin={curr.jenisKelamin} tanggalLahir={curr.tanggalLahir}/>
        )
    })

    return(
        <Wrapper>
            <div>
                <HeaderTitle title="Pencarian Data Anak"/>
            </div>
            <div className="d-flex">
                <div className="wrapper-form-pencarian-anak m-3">
                    <Form className="wrapper-form-input" onSubmit={handleSearch}>
                        <div style={{minHeight: '550px'}}>
                            <h3 className="text-center pb-3">Form Pencarian Anak</h3>
                            <FormGroup>
                                <Label for="NamaAnak">Nama Anak</Label>
                                <Input type="text" name="NamaAnak" id="NamaAnak" className="input-data-anak" onChange={handleNamaAnak} placeholder="Masukkan nama anak" />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Jenis Kelamin</Label>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" value="1" onChange={handleJenisKelamin} />
                                    Laki-Laki
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" value="2" onChange={handleJenisKelamin} />
                                    Perempuan
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="NamaIbu">Nama Ibu</Label>
                                <Input type="text" name="NamaIbu" id="NamaIbu" onChange={handleNamaIbu} className="input-data-anak" placeholder="Masukkan nama ibu" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="tanggalLahir">Tanggal Lahir</Label>
                                <InputGroup>
                                    <Input type="date" name="tanggalLahir" id="tanggalLahir" className="input-data-anak" onChange={handleTanggalLahir}/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText className="input-add-on-anak"><FontAwesomeIcon icon={faCalendarDay} color="white"/></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </div>
                        <div>
                            <Button className="button-cari-data-anak">Cari Data Anak</Button>
                            <Link to="MulaiPemeriksaan"><Button className="button-sebelumnya mt-3">Sebelumnya</Button></Link>
                        </div>        
                    </Form>
                </div>
                <div style={{ width: '60%'}} className="m-3 text-center">  
                    <div style={{minHeight: "580px"}}>
                        {renderDaftarAnak}
                    </div>
                    <Row>
                        <Col sm={12}>
                            <Pagination/>
                        </Col>
                    </Row>
                </div>
            </div>
        </Wrapper>
    );
}

export default PencarianDataAnak;