import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

//Import Component
import HeaderTitle from './../../Components/headertitle/HeaderTitle'

// Actions
import { DataAnakChange } from '../../Actions';

// Styles
import '../../Assets/style/style.css';


const IsiDataAnak1 = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const dataAnak = useSelector(state => state.dataAnak);
    let [namaAnak, setNamaAnak] = useState(dataAnak.namaAnak);
    let [namaIbu, setNamaIbu] = useState(dataAnak.namaIbu);
    let [jenisKelamin, setJenisKelamin] = useState(dataAnak.jenisKelamin);
    let [tglLahir, setTglLahir] = useState(dataAnak.tglLahir);
    let [alamat, setAlamat] = useState(dataAnak.alamatAnak);

    const handleNamaAnak = event =>{
        setNamaAnak(event.target.value);
    }

    const handleNamaIbu = event =>{
        setNamaIbu(event.target.value);
    }

    const handleJenisKelamin = event =>{
        if(event.target.value == 1 ){
            setJenisKelamin(true);
        }
        else{
            setJenisKelamin(false);
        }
    }

    const handleTglLahir = event =>{
        setTglLahir(event.target.value);
    }

    const handleAlamat = event =>{
        setAlamat(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(DataAnakChange('NAMA_ANAK', namaAnak));
        dispatch(DataAnakChange('NAMA_IBU', namaIbu));
        dispatch(DataAnakChange('JENIS_KELAMIN', jenisKelamin));
        dispatch(DataAnakChange('TANGGAL_LAHIR', tglLahir));
        dispatch(DataAnakChange('ALAMAT_ANAK', alamat));
        var tmpCurDate = new Date();
        var tmpTanggalLahir = new Date(tglLahir);
        var differenceInDays =  Math.floor((tmpCurDate.getTime()-tmpTanggalLahir.getTime()) / (1000 * 3600 * 24));
        dispatch(DataAnakChange('UMUR_ANAK', differenceInDays));
        dispatch(DataAnakChange('TANGGAL_KUNJUNGAN', tmpCurDate));
        dispatch(DataAnakChange('KUNJUNGAN_PERTAMA', true));
        history.push("IsiDataAnak2"); 
    }

    return(
        <div>
            <HeaderTitle title="Isi Data Anak"/>
            <div className="d-flex justify-content-center mt-4">
                <Form className="w-75 justify-content-center" onSubmit={handleSubmit}>
                    <div style={{minHeight : "380px"}}>
                        <FormGroup>
                            <Label for="namaAnak">Nama Anak</Label>
                            <Input type="text" name="namaAnak" id="namaAnak" placeholder="Contoh : John Doe" style={{borderColor : '#41E8B3'}} value={namaAnak} onChange={handleNamaAnak} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="namaIbu">Nama Ibu</Label>
                            <Input type="text" name="namaIbu" id="namaIbu" placeholder="Contoh : Jane Doe" style={{borderColor : '#41E8B3'}} value={namaIbu} onChange={handleNamaIbu} required/>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Label>Jenis Kelamin</Label>
                            <div className="d-flex">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="jenisKelamin" value={1} onChange={handleJenisKelamin} checked={jenisKelamin === true} required />
                                        Laki-Laki
                                    </Label>
                                </FormGroup>
                                <FormGroup check className="ml-3">
                                    <Label check>
                                        <Input type="radio" name="jenisKelamin" value={2} onChange={handleJenisKelamin} checked={jenisKelamin === false}/>
                                        Perempuan
                                    </Label>
                                </FormGroup>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="tanggalLahir">Tanggal Lahir</Label>
                            <InputGroup>
                                <Input type="date" name="tanggalLahir" id="tanggalLahir" placeholder="Contoh : John Doe" style={{borderColor : '#41E8B3'}} value={tglLahir} onChange={handleTglLahir} required/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}}><FontAwesomeIcon icon={faCalendarDay} style={{color: 'white'}}/></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="alamat">Alamat</Label>
                            <Input type="text" name="alamat" id="alamat" placeholder="Contoh : Jl. Ciumbuleuit No.94, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40141" style={{borderColor : '#41E8B3'}} value={alamat} onChange={handleAlamat} required/>
                        </FormGroup>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="MulaiPemeriksaan" style={{textDecoration: "none"}}><Button color="danger">Sebelumnya</Button></Link>
                        <Button color="success">Selanjutnya</Button>
                    </div>   
                    
                </Form>
            </div>
        </div>
    );
}

export default  IsiDataAnak1;