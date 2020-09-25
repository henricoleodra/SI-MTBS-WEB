import React, { } from 'react';
import { Row, Col, Button } from 'reactstrap';
import RiwayatPemeriksaan from './riwayatPemeriksaanItem/RiwayatPemeriksaanItem';

const DataAnak = (props) => {
    let pemeriksaan = [
        {
            'tanggalPemeriksaan' : '20 Januari 2020',
            'keluhanAnak' : 'Sakit, Demam, Diare',
        },
        {
            'tanggalPemeriksaan' : '01 Januari 2020',
            'keluhanAnak' : 'Demam, Diare',
        },
        {
            'tanggalPemeriksaan' : '20 December 2020',
            'keluhanAnak' : 'Diare',
        },
        {
            'tanggalPemeriksaan' : '20 December 2020',
            'keluhanAnak' : 'Diare',
        },
    ];
    
    const renderRiwayatPemeriksaan = pemeriksaan.map((curr, index) => {
        return(
            <RiwayatPemeriksaan tanggalPemeriksaan={curr.tanggalPemeriksaan} keluhanAnak={curr.keluhanAnak}/>
        )
    })
    return(
        <div>
            <div className="pb-1">
                <h4 className="text-center">Riwayat Pemeriksaan Anak</h4>
                <span className="text-secondary">Terdapat 24 Riwayat Pemeriksaan</span>
            </div>
            <div style={{minHeight: "530px"}}>
                {renderRiwayatPemeriksaan}
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

export default DataAnak