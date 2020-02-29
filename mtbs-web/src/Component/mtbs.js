import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import SideBar from './SideBar/sidebar'
import Summary from './Summary/summary';
import Klasifikasi from './Klasifikasi/klasifikasi';
import Tindakan from './Tindakan/tindakan';

//Import Components MTBS Pages
import TandaBahayaUmum from './TandaBahayaUmum/tbu';
import TandaBahayaUmum2 from './TandaBahayaUmum/tbu2';
import Batuk from './Batuk/batuk';
import Batuk2 from './Batuk/batuk2';
import Diare from './Diare/diare';
import Diare2 from './Diare/diare2';
// import Demam
import Demam from './Demam/demam';
import Telinga from './Telinga/telinga';
import Telinga2 from './Telinga/telinga2';
import Anemia from './Anemia/anemia';
import HIV from './HIV/HIV';
import HIV2 from './HIV/HIV2';
import Imunisasi from './Imunisasi/imunisasi';
import Imunisasi2 from './Imunisasi/imunisasi2';
import Imunisasi3 from './Imunisasi/imunisasi3';
import Imunisasi4 from './Imunisasi/imunisasi4';
import Vitamina from './VitaminA/vitamina';
import PemberianMakanan from './PemberianMakanan/pemberianmakanan';
import PemberianMakanan2 from './PemberianMakanan/pemberianmakanan2';
import PemberianMakanan3 from './PemberianMakanan/pemberianmakanan3';
import PemberianMakanan4 from './PemberianMakanan/pemberianmakanan4';

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
                    case `/MTBS/Demam1` :
                        return <Demam/>;
                    case `/MTBS/Telinga1`:
                        return <Telinga/>;
                    case `/MTBS/Telinga2`:
                        return <Telinga2/>;
                    case `/MTBS/Anemia`:
                        return <Anemia/>;
                    case `/MTBS/HIV1`:
                        return <HIV/>;
                    case `/MTBS/HIV2`:
                        return <HIV2/>;
                    case `/MTBS/Imunisasi1`:
                        return <Imunisasi/>;
                    case `/MTBS/Imunisasi2`:
                        return <Imunisasi2/>;
                    case `/MTBS/Imunisasi3`:
                        return <Imunisasi3/>;
                    case `/MTBS/Imunisasi4`:
                        return <Imunisasi4/>;
                    case `/MTBS/Vitamina` :
                        return <Vitamina/>;
                    case `/MTBS/Klasifikasi`:
                        return <Klasifikasi/>;
                    case `/MTBS/Tindakan`:
                        return <Tindakan/>;
                    case `/MTBS/PemberianMakanan1`:
                        return <PemberianMakanan/>;
                    case `/MTBS/PemberianMakanan2`:
                        return <PemberianMakanan2/>;
                    case `/MTBS/PemberianMakanan3`:
                        return <PemberianMakanan3/>;
                    case `/MTBS/PemberianMakanan4`:
                        return <PemberianMakanan4/>;
                    default :
                        console.log(props.location.pathname);
                        return "404 not found";
                }
            })()}
            </div>
            {(() => {
                let x = props.location.pathname;
                if (x !== '/MTBS/Klasifikasi' && x !== '/MTBS/Tindakan' ) return (
                    <div className="mt-2 w-25 mr-1">
                        <Summary/>
                    </div>
                )
            })()}
        </div>
    );
}

export default MTBS;