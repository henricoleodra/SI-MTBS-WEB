import React, {useState} from 'react';
import {NavItem, Nav, Row, Col, NavLink, Label,  Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

import SideBarItem from './sidebaritem/SideBarItem'

let bgColor = {
    backgroundColor: '#41E8B3'
} 

let bold = {
    fontWeight: 'bold'
}

const SideBar = (props) => {
    // var x = window.location.pathname;
    // console.log(x);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    let url = props.location.replace(/[0-9]/g, '');
    
    let sidebar = [
        {
            'title' : 'Tanda Bahaya Umum',
            'link' : 'TandaBahayaUmum1',
            'active' : url==='TandaBahayaUmum',
            'color' : props.iconColor[0],
            'disabled' : false
        },
        {
            'title' : 'Batuk',
            'link' : 'Batuk1',
            'active' : url==='Batuk',
            'color' : props.iconColor[1],
            'disabled' : false
        },
        {
            'title' : 'Diare',
            'link' : 'Diare1',
            'active' : url==='Diare',
            'color' : props.iconColor[2],
            'disabled' : true
        },
        {
            'title' : 'Demam',
            'link' : 'Demam1',
            'active' : url==='Demam',
            'color' : props.iconColor[3],
            'disabled' : true
        },
        {
            'title' : 'Telinga',
            'link' : 'Telinga1',
            'active' : url==='Telinga',
            'color' : props.iconColor[4],
            'disabled' : true
        },
        {
            'title' : 'Gizi',
            'link' : 'Gizi1',
            'active' : url==='Gizi',
            'color' : props.iconColor[5],
            'disabled' : true
        },
        {
            'title' : 'Anemia',
            'link' : 'Anemia',
            'active' : url==='Anemia',
            'color' : props.iconColor[6],
            'disabled' : true
        },
        {
            'title' : 'HIV',
            'link' : 'HIV1',
            'active' : url==='HIV',
            'color' : props.iconColor[7],
            'disabled' : true
        },
        {
            'title' : 'Imunisasi',
            'link' : 'Imunisasi1',
            'active' : url==='Imunisasi',
            'color' : props.iconColor[8],
            'disabled' : true
        },
        {
            'title' : 'Vitamin A',
            'link' : 'VitaminA',
            'active' : url==='VitaminA',
            'color' : props.iconColor[9],
            'disabled' : true
        },
        {
            'title' : 'KeluhanLain',
            'link' : 'KeluhanLain',
            'active' : url==='KeluhanLain',
            'color' : props.iconColor[10],
            'disabled' : true
        },
        {
            'title' : 'PemberianMakanan',
            'link' : 'PemberianMakanan1',
            'active' : url==='PemberianMakanan',
            'color' : props.iconColor[11],
            'disabled' : true
        },
      ];
    
    const renderSideBar = sidebar.map((curr, index) => {
    console.log("hello");
    return(
        <SideBarItem key={"sidebar" + index} title={curr.title} link={curr.link} active={curr.active} color={curr.color} disabled={curr.disabled}/>
            
    )
    })


    return (
        <div style={{backgroundColor: '#F8F9FB', minHeight : '100vh'}} className="w-25 p-0">
            <Nav vertical className="w-100">
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" id="tindakan" style={{backgroundColor:'#41E8B3'}} onClick={toggle}>
                        <div className="d-flex flex-row">
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faBaby} className="fa-3x"/>
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <div>
                                    <Label>Nama Anak :</Label> <strong>Harry Senjaya</strong>
                                </div>
                                <div>
                                    <Label>Click disini untuk Detail Anak!</Label> 
                                </div>
                            </div> 
                        </div>
                    </NavLink>
                </NavItem>
                {renderSideBar}
                <NavItem>
                    <NavLink href="Klasifikasi" className="btn btn-light text-left" id="klasifikasi" active={props.location === 'Klasifikasi'}>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Klasifikasi</span>
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" id="tindakan" disabled>
                        <Row className="pr-3">
                            <Col xs="auto">
                                <span className="text-left">Tindakan</span>
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
            </Nav> 

            <Modal isOpen={modal} toggle={toggle} size="lg" centered>
                <ModalHeader toggle={toggle} style={bgColor}>Profile Anak</ModalHeader>
                <ModalBody className="d-flex">
                    <div>
                        <div><Label style={bold}>Nama Anak :</Label> Harry Senjaya</div>
                        <div><Label style={bold}>Nama Ibu :</Label> Friska Christiana</div>
                        <div><Label style={bold}>Jenis Kelamin :</Label> Laki-laki</div>
                        <div><Label style={bold}>Tanggal Lahir: </Label> 4 Mei 2020</div>
                        <div><Label style={bold}>Suhu: </Label> 37 °C</div>
                    </div>
                    <hr style={{backgroundColor: '#41E8B3', width: 1, height: "15vh"}} className="ml-5 mr-5"/>
                    <div className="ml-0">
                        <div><Label style={bold}>Berat Badan: </Label> 100 kg</div>
                        <div><Label style={bold}>Tinggi Badan: </Label> 50 cm</div>
                        <div><Label style={bold}>Keluhan Anak: </Label> Diare, Muntah-muntah, Nangis</div>
                        <div><Label style={bold}>Kunjungan Ke: </Label> 5</div>
                        <div><Label style={bold}>Alamat: </Label> Indonesia, Bandung</div>
                    </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center">
                    <Button color="danger" onClick={toggle}>Tutup</Button>{' '}
                </ModalFooter>
            </Modal>
        </div> 
    );
}

  
export default SideBar;
