import React, {useState} from 'react';
import {NavItem, Nav, Row, Col, NavLink, Label,  Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import SideBarItem from './sidebarItem/SideBarItem'
import '../../Assets/style/style.css';

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
    
    const compStatus = useSelector(state => state.compStatus);
    const klasifikasiTBU = useSelector(state => state.klasifikasiTBU);
    let sidebar = [
        {
            'title' : 'Tanda Bahaya Umum',
            'link' : 'TandaBahayaUmum1',
            'active' : url==='TandaBahayaUmum',
            'color' : (klasifikasiTBU.tbu_status===null ? 'dark' : klasifikasiTBU.tbu_status ),
            'disabled' : compStatus.tandabahayaumum
        },
        {
            'title' : 'Batuk',
            'link' : 'Batuk1',
            'active' : url==='BatukYaTidak' || url==='Batuk',
            'color' : 'dark',
            'disabled' : compStatus.batuk
        },
        {
            'title' : 'Diare',
            'link' : 'Diare1',
            'active' : url==='DiareYaTidak' || url==='Diare',
            'color' : 'dark',
            'disabled' : compStatus.diare
        },
        {
            'title' : 'Demam',
            'link' : 'Demam1',
            'active' : url==='DemamYaTidak' || url==='Demam',
            'color' : 'dark',
            'disabled' : compStatus.demam
        },
        {
            'title' : 'Telinga',
            'link' : 'Telinga1',
            'active' : url==='TelingaYaTidak' || url==='Telinga',
            'color' : 'dark',
            'disabled' : compStatus.telinga
        },
        {
            'title' : 'Gizi',
            'link' : 'Gizi1',
            'active' : url==='Gizi',
            'color' : 'dark',
            'disabled' : compStatus.gizi
        },
        {
            'title' : 'Anemia',
            'link' : 'Anemia',
            'active' : url==='Anemia',
            'color' : 'dark',
            'disabled' : compStatus.anemia
        },
        {
            'title' : 'HIV',
            'link' : 'HIV1',
            'active' : url==='HIV',
            'color' : 'dark',
            'disabled' : compStatus.hiv
        },
        {
            'title' : 'Imunisasi',
            'link' : 'Imunisasi1',
            'active' : url==='Imunisasi',
            'color' : 'dark',
            'disabled' : compStatus.imunisasi
        },
        {
            'title' : 'Vitamin A',
            'link' : 'VitaminA',
            'active' : url==='VitaminA',
            'color' : 'dark',
            'disabled' : compStatus.vitamina
        },
        {
            'title' : 'KeluhanLain',
            'link' : 'KeluhanLain',
            'active' : url==='KeluhanLain',
            'color' : 'dark',
            'disabled' : compStatus.keluhanlain
        },
        {
            'title' : 'PemberianMakanan',
            'link' : 'PemberianMakanan1',
            'active' : url==='PemberianMakanan',
            'color' : 'dark',
            'disabled' : compStatus.makan
        },
      ];
    
    const renderSideBar = sidebar.map((curr, index) => {
    return(
        <SideBarItem key={"sidebar" + index} title={curr.title} link={curr.link} active={curr.active} color={curr.color} disabled={curr.disabled}/>
            
    )
    })


    return (
        <div style={{backgroundColor: '#F8F9FB', minHeight : '100vh'}} className="w-25 p-0">
            <Nav vertical className="w-100">
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left pr-0 pl-0 pt-2 pb-0" id="tindakan" style={{backgroundColor:'#41E8B3'}} onClick={toggle}>
                        <Row className="">
                            <Col sm="2" className="mt-1">
                                <FontAwesomeIcon icon={faBaby} className="fa-3x"/>
                            </Col>
                            <Col sm="10" className="">
                                <div>
                                    <Label>Nama Anak :</Label> <strong>Harry Senjaya</strong>
                                </div>
                                <div>
                                    <Label>Click disini untuk Detail Anak!</Label> 
                                </div>
                            </Col> 
                        </Row>
                    </NavLink>
                </NavItem>
                {renderSideBar}
                <NavItem>
                    <NavLink href="Klasifikasi" className="btn pb-1 pt-1 btn-light text-left" id="klasifikasi" active={props.location === 'Klasifikasi'}>
                        <Row className="">
                            <Col xs="12 pl-2 pr-0">
                                <span className="text-left fontSideBar">Klasifikasi</span>
                            </Col>
                        </Row>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn pb-1 pt-1 btn-light text-left" id="tindakan" disabled>
                        <Row className="">
                            <Col xs="12 pl-2 pr-0">
                                <span className="text-left fontSideBar">Tindakan</span>
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
