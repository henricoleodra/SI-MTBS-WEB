import React from 'react';
import { Navbar } from 'reactstrap';

const HeaderTitle = (props) =>{
    return(
        <div>
            <Navbar expand="md" style={{backgroundColor : '#46d0fe'}} className="d-flex justify-content-center shadow">
                <h2 className="text-white">{props.title}</h2>
            </Navbar>
        </div>
    );
}

export default HeaderTitle;