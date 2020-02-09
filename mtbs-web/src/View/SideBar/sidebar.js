import React from 'react';
import {NavItem, NavLink, Nav, Label} from 'reactstrap';


const SideBar = () =>{
    return (
        <div style={{backgroundColor: '#F8F9FB', minHeight : '100vh', width: '250px' }}>
            <Nav vertical className="">
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left">
                        <div className="d-flex">
                            <Label>Anak Batuk Atau Sukar Bernafas</Label>
                            <i className="fa fa-circle mt-3" style={{color: 'lightGreen'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left">
                        <div>
                            <Label>Diare</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'red'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left">
                        <div>
                            <Label>Demam</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'orange'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" active>
                        <div>
                            <Label>Masalah Telinga</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" disabled>
                        <div>
                            <Label>Status Gizi</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" disabled>
                        <div>
                            <Label>Anemia</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" disabled>
                        <div>
                            <Label>Status HIV</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" disabled>
                        Status Imunisasi
                        <div>
                            <Label>Status HIV</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" disabled>
                        <div>
                            <Label>Vitamin A</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" disabled>
                        <div>
                            <Label>Keluhan Lain</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="btn btn-light text-left" disabled>
                        <div>
                            <Label>Pemberian Makan</Label>
                            <i className="fa fa-circle ml-2" style={{color: 'lightGrey'}}></i>
                        </div>
                    </NavLink>
                </NavItem>
            </Nav>        
        </div>
    );
}

export default SideBar