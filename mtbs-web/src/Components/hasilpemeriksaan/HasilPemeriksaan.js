import React, { useState } from 'react';
import {Row, Col, Button} from 'reactstrap';
import HasilPemeriksaanItem from './hasilPemeriksaanItem/HasilPemeriksaanItem';

let printPDF={
    backgroundColor: '#41E8B3',
    color: 'black',
    width: '50%'
}

const HasilPemeriksaan = (props) => {
    let pemeriksaan = [
        {   
            'status' : 'aman',
            'kategori' : 'Tanda Bahaya Umum',
            'klasifikasi' : 'Aman',
        },
        {   
            'status' : 'perhatikan',
            'kategori' : 'Batuk',
            'klasifikasi' : 'Batuk bukan pneumonia',
        },
        {
            'status' : 'bahaya',
            'kategori' : 'Diare',
            'klasifikasi' : 'Diare Berat',
        },
    ];
    
    const renderHasilPemeriksaan = pemeriksaan.map((curr, index) => {
        return(
            <HasilPemeriksaanItem status={curr.status} kategori={curr.kategori} klasifikasi={curr.klasifikasi} />
        )
    })

    return(
        <div>
            <div>
                <h5 className="text-center text-secondary">Tanggal 20 Januari 2020</h5>
            </div>
            <div>
                {renderHasilPemeriksaan}
                <Row>
                    <Col>
                        <Button style={printPDF} className="mt-3">Print PDF</Button>
                    </Col>
                </Row>

                {/* <Card style={outlineColorTest} className="mb-3">
                    <div className="d-flex justify-content-between">
                        <div style={squareRedTest} ></div>
                        <div className="mr-4">
                            <div><Label style={bold}>Tanda Bahaya Umum</Label></div>
                        </div>
                        <div className="mr-3">
                            <div><Label style={bold}>Aman</Label></div>
                        </div>
                    </div>                 
                </Card>
                <Card style={outlineColor} className="mb-3">
                    <div className="d-flex justify-content-between">
                        <div style={squareYellow}></div>
                        <div className="mr-4">
                            <div><Label style={bold}>Demam</Label></div>
                        </div>
                        <div className="mr-3">
                            <div><Label style={bold}>Malaria</Label></div>
                        </div>
                    </div>                 
                </Card> */}
            </div>
        </div>
    );
}

export default HasilPemeriksaan;