import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardTitle, CardImg,  } from 'reactstrap';

//Import Component
import HeaderTitle from './../../Components/headertitle/HeaderTitle'

const MulaiPemeriksaan = (props) =>{
    return(
        <div>
            <HeaderTitle title="Mulai Pemeriksaan"/>
            <div className="mt-2">
                <h3 className="text-center">Apakah Anak sudah pernah melakukan pemeriksaan ?</h3>
            </div>
            <Row className="justify-content-around mt-3">
                <Col md="5" >
                    <Link to="PencarianDataAnak" style={{textDecoration: 'none'}}>
                        <Card style={{minHeight: '400px'}} className="bg-success shadow rounded">
                            <CardImg alt="Ya"/>
                            <CardTitle className="text-white text-center"><h1>Ya</h1></CardTitle>
                        </Card>
                    </Link>
                </Col>
                <Col md="5" >
                    <Link to="PencarianDataAnak" style={{textDecoration: 'none'}}>
                        <Card style={{minHeight: '400px'}} className="bg-danger shadow rounded">
                            <CardImg alt="Tidak"/>
                            <CardTitle className="text-white text-center"><h1>Tidak</h1></CardTitle>
                        </Card>
                    </Link>
                </Col>
            </Row>
            
        </div>
    );
}

export default  MulaiPemeriksaan;