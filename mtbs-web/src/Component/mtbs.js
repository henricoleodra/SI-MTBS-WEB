import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import SideBar from './SideBar/sidebar'
import Summary from './Summary/summary';
import Klasifikasi from './Klasifikasi/klasifikasi';

//Import Components MTBS Pages
import TandaBahayaUmum from './TandaBahayaUmum/tbu';
import TandaBahayaUmum2 from './TandaBahayaUmum/tbu2';
import Batuk from './Batuk/batuk';
import Batuk2 from './Batuk/batuk2';
import Diare from './Diare/diare';
import Diare2 from './Diare/diare2';


function MTBS(props){
    // let { url } = useRouteMatch();
    let location = props.location.pathname.split("/");

    if(location[location.length - 1] === "") {
        location = location[location.length - 2];
    }
    else {
        location = location[location.length - 1];
    }

    let iconColor = ["text-danger", "text-warning"];

    return(
        <div style={{ width: '100%'}} className="d-flex">
            <SideBar location={location} iconColor={iconColor} />
            <div className="w-75">
            {(() => {
                switch(props.location.pathname) {
                    case `/MTBS/TandaBahayaUmum1` : 
                        return <TandaBahayaUmum/>;
                    case `/MTBS/TandaBahayaUmum2` : 
                        return <TandaBahayaUmum2/>;
                    case `/MTBS/Batuk1` :
                        return <Batuk/>;
                    case `/MTBS/Batuk2` :
                        return <Batuk2/>;
                    case `/MTBS/Diare1` :
                        return <Diare/>;
                    case `/MTBS/Diare2` :
                        return <Diare2/>;
                    case `/MTBS/Klasifikasi`:
                        return <Klasifikasi/>;
                    default :
                        console.log(props.location.pathname);
                        return "404 not found";
                }
            })()}
            </div>
            {(() => {
                let x = props.location.pathname;
                if (x !== '/MTBS/Klasifikasi') return (
                    <div className="mt-2 w-25 mr-1">
                        <Summary/>
                    </div>
                )
            })()}
        </div>
    );
}

export default MTBS;