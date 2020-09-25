import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

//Import Component
import { HeaderTitle } from '../../Components';

// Actions
import { DataAnakChange, AnsDemamChange, AnsGiziChange } from '../../Actions';

// Styles
import '../../Assets/style/style.css';


const IsiDataAnak2 = () =>{
    const date = new Date();
    const tmpHari = date.getDay();
    const tmpBulan = date.getMonth();
    const hari = (tmpHari === 1 ? 'Senin' : tmpHari === 2 ? 'Selasa' : tmpHari === 3 ? 'Rabu' : tmpHari === 4 ? 'Kamis' : tmpHari === 5 ? 'Jumat' : tmpHari === 6 ? 'Sabtu' : 'Minggu');
    const bulan = (tmpBulan === 1 ? 'Januari' : tmpBulan === 2 ? 'Februari' : tmpBulan === 3 ? 'Maret' : tmpBulan === 4 ? 'April' : tmpBulan === 5 ? 'Mei' : tmpBulan === 6 ? 'Juni' : tmpBulan === 7 ? 'Juli' : tmpBulan === 8 ? 'Agustus' : tmpBulan === 9 ? 'September' : tmpBulan === 10 ? 'Oktober' : tmpBulan === 11 ? 'November' : 'Desember');
    const history = useHistory();
    const dispatch = useDispatch();
    const dataAnak = useSelector(state => state.dataAnak);
    let [suhuAnak, setSuhuAnak] = useState(dataAnak.suhuAnak);
    let [beratAnak, setBeratAnak] = useState(dataAnak.beratAnak);
    let [tinggiAnak, setTinggiAnak] = useState(dataAnak.tinggiAnak);
    let [kunjunganKe, setKunjunganKe] = useState(dataAnak.kunjunganKe);
    let [pencarianKeluhan, setPencarianKeluhan] = useState("");
    let [keluhanAwal, setKeluhanAwal] = useState(dataAnak.keluhanAwal);
    let [curDate] = useState(hari + ', ' + date.getDate() + ' ' + bulan + ' ' + date.getFullYear());

    const handleSuhuAnak = event =>{
        let tmp = Number(event.target.value);
        setSuhuAnak(tmp);
        dispatch(DataAnakChange('SUHU_ANAK', tmp));
        dispatch(AnsDemamChange('SUHU_ANAK', tmp));
    }

    const handleBeratAnak = event =>{
        let tmp = Number(event.target.value);
        setBeratAnak(tmp);
        dispatch(DataAnakChange('BERAT_ANAK', tmp));
    }

    const handleTinggiAnak = event =>{
        let tmp = Number(event.target.value);
        setTinggiAnak(tmp);
        dispatch(DataAnakChange('TINGGI_ANAK', tmp));
    }

    const handleKunjunganKe = event =>{
        let tmp = Number(event.target.value);
        setKunjunganKe(tmp);
        dispatch(DataAnakChange('KUNJUNGAN_KE', tmp));
    }

    const handlePencarianKeluhan = event =>{
        let tmp = event.target.value;
        setPencarianKeluhan(tmp);
    }

    const handleEnter = event =>{
        if(event.key === "Enter"){
            setPencarianKeluhan("");
            if(keluhanAwal === ""){
                setKeluhanAwal(event.target.value);
            }
            else{
                setKeluhanAwal(keluhanAwal + ", " + event.target.value);
            }
            event.preventDefault();
        }
    }

    const hanldeKeluhanAwal = event =>{
        setKeluhanAwal(event.target.value);
        dispatch(DataAnakChange('KELUHAN_AWAL', event.target.value));
    }

    const handleSubmit = event =>{
        event.preventDefault();
        axios.post(`/CalculateSD`, {
            dataAnak: dataAnak
        })
        .then(res => {
            dispatch(AnsGiziChange('BB_MENURUT_PB_ATAU_TB', res.data.hasilSDGizi));
            dispatch(AnsGiziChange('NILAI_SD', res.data.nilaiSDGizi));
        })
        .catch(err => {
            console.log(err);
        });
        history.push("../MTBS/TandaBahayaUmum1"); 
    }

    
    return(
        <div>
            <HeaderTitle title="Isi Data Anak"/>
            <h4 className="text-center text-muted mt-3">Tanggal Pemeriksaan : {curDate}</h4>
            <div className="d-flex justify-content-center mt-5">
                <Form className="w-75 justify-content-center" onSubmit={handleSubmit}>
                    <div style={{minHeight : "376px"}}>
                        <FormGroup row>
                            <Col sm={2} className="mt-2"><Label for="suhu">Suhu</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="suhu" id="suhu" placeholder="Contoh : 37" style={{borderColor : '#41E8B3'}} min="0" value={suhuAnak} onChange={handleSuhuAnak} required/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}} className="text-white">°C</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col sm={2} style={{marginTop : "-10px"}}><hr style={{backgroundColor : "#41E8B3", width : "2px", height : "25px"}}/></Col>
                            <Col sm={2} className="mt-2"><Label for="beratBadan">Berat Badan</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="beratBadan" id="beratBadan" placeholder="Contoh : 20" style={{borderColor : '#41E8B3'}} min="0" value={beratAnak} onChange={handleBeratAnak} required/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}} className="text-white">Kg</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mt-5">
                            <Col sm={2} className="mt-2"><Label for="tinggiBadan">Tinggi Badan</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="tinggiBadan" id="tinggiBadan" placeholder="Contoh : 50" style={{borderColor : '#41E8B3'}} min="0" value={tinggiAnak} onChange={handleTinggiAnak} required/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}} className="text-white">Cm</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col sm={2} style={{marginTop : "-10px"}}><hr style={{backgroundColor : "#41E8B3", width : "2px", height : "25px"}}/></Col>
                            <Col sm={2} className="mt-2"><Label for="kunjungan">Kunjungan Ke</Label></Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Input type="number" name="kunjungan" id="kunjungan" placeholder="Contoh : 1" style={{borderColor : '#41E8B3'}} min="0" value={kunjunganKe} onChange={handleKunjunganKe} required/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}}><FontAwesomeIcon icon={faRunning} style={{color: 'white'}}/></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="keluhanLain">Keluhan Lain</Label>
                            <Row>
                                <Col sm={5}>
                                    <InputGroup>
                                        <Input type="text" name="cariKeluhan" id="cariKeluhan" placeholder="Contoh : Batuk" style={{borderColor : '#41E8B3'}} value={pencarianKeluhan} onChange={handlePencarianKeluhan} onKeyPress={handleEnter}/>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText style={{backgroundColor : "#41E8B3", borderColor : "#41E8B3"}}><FontAwesomeIcon icon={faSearch} style={{color: 'white'}}/></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col sm={7}>
                                    <Input type="textarea" name="keluhanLain" id="keluhanLain" style={{height : "180px", borderColor : "#41E8B3"}} onChange={hanldeKeluhanAwal} value={keluhanAwal} required/>
                                </Col>
                            </Row>
                        </FormGroup>
                    </div>
                    
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="1" style={{textDecoration: "none"}}><Button color="danger">Sebelumnya</Button></Link>
                        <Button color="success">Selanjutnya</Button>
                    </div>   
                    
                </Form>
            </div>
        </div>
    );
}

export default  IsiDataAnak2;