import React from 'react';
import { Navbar } from 'reactstrap';

const HeaderTitle = (props) =>{
    return(
        <div>
            <Navbar expand="md" style={{backgroundColor : '#41E8B3'}} className="d-flex justify-content-center shadow">
                <h2 className="text-white">{props.title}</h2>
            </Navbar>
        </div>
    );
}

export default HeaderTitle;