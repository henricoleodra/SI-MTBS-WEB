import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import DaftarAnakItem from './daftarAnakItem/DaftarAnakItem';



const DaftarNama = (props) => {
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
    ];
    
    const renderDaftarAnak = anak.map((curr, index) => {
        return(
            <DaftarAnakItem namaAnak={curr.namaAnak} namaIbu={curr.namaIbu} jenisKelamin={curr.jenisKelamin} tanggalLahir={curr.tanggalLahir}/>
        )
    })


    return(
        <div>
            <div style={{minHeight: "580px"}}>
                {renderDaftarAnak}
            </div>
            <div>
                <Row>
                    <Col>
                        <Button color="warning">Sebelumnya</Button>
                    </Col>
                    <Col>
                        1   2   3
                    </Col>
                    <Col>
                        <Button color="info">Selanjutnya</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default DaftarNama;