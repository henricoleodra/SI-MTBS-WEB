import React from 'react'
import { useRouteMatch } from 'react-router-dom';

//Import Components
import SideBar from './../../Components/sidebar/SideBar'
import Summary from './../../Components/summary/Summary';


//Import Pages MTBS
import TandaBahayaUmum from './../tandabahayaumum/TandaBahayaUmum';
import TandaBahayaUmum2 from './../tandabahayaumum/TandaBahayaUmum2';
import BatukYaTidak from './../batuk/BatukYaTidak';
import Batuk from './../batuk/Batuk';
import Batuk2 from './../batuk/Batuk2';
import DiareYaTidak from './../diare/DiareYaTidak';
import Diare from './../diare/Diare';
import Diare2 from './../diare/Diare2';
import Diare3 from './../diare/Diare3';
import DemamYaTidak from './../demam/DemamYaTidak';
import DemamDaerah from './../demam/DemamDaerah';
import DemamKonfirmasiDaerah from './../demam/DemamKonfirmasiDaerah';
import Demam1 from './../demam/Demam1';
import Demam2 from './../demam/Demam2';
import Demam3 from './../demam/Demam3';
import Demam4 from './../demam/Demam4';
//campak
import Demam5 from './../demam/Demam5';
//DBD
import Demam6 from './../demam/Demam6';
import Demam7 from './../demam/Demam7';
import Demam8 from './../demam/Demam8';
import Demam9 from './../demam/Demam9';
import TelingaYaTidak from './../telinga/TelingaYaTidak';
import Telinga from './../telinga/Telinga';
import Telinga2 from './../telinga/Telinga2';
import Gizi from './../gizi/Gizi';
import Gizi2 from './../gizi/Gizi2';
import Gizi3 from './../gizi/Gizi3';
import Anemia from './../anemia/Anemia';
import HIV from './../hiv/HIV';
import HIV2 from './../hiv/HIV2';
import HIV3 from './../hiv/HIV3';
import Imunisasi from './../imunisasi/Imunisasi';
import Imunisasi2 from './../imunisasi/Imunisasi2';
import Imunisasi3 from './../imunisasi/Imunisasi3';
import Imunisasi4 from './../imunisasi/Imunisasi4';
import Vitamina from './../vitamina/VitaminA';
import KeluhanLain from './../keluhanlain/KeluhanLain';
import PemberianMakanan from './../pemberianmakanan/PemberianMakanan';
import PemberianMakanan2 from './../pemberianmakanan/PemberianMakanan2';
import PemberianMakanan3 from './../pemberianmakanan/PemberianMakanan3';
import PemberianMakanan4 from './../pemberianmakanan/PemberianMakanan4';

import Klasifikasi from './../klasifikasi/Klasifikasi';
import Tindakan from './../tindakan/Tindakan';


function MTBS(props){
    // let { url } = useRouteMatch();
    let location = props.location.pathname.split("/");

    if(location[location.length - 1] === "") {
        location = location[location.length - 2];
    }
    else {
        location = location[location.length - 1];
    }

    let iconColor = ["danger", "warning"];

    return(
        <div style={{ width: '100%'}} className="d-flex">
            <SideBar location={location} iconColor={iconColor} />
            <div className="w-75">
            {(() => {
                switch(props.location.pathname) {
                    case `/MTBS/TandaBahayaUmum1` : 
                        return <TandaBahayaUmum/>;
                    case `/MTBS/TandaBahayaUmum2` : 
                        return <TandaBahayaUmum2 history={props.history}/>;
                    case `/MTBS/BatukYaTidak`:
                        return <BatukYaTidak/>;
                    case `/MTBS/Batuk1` :
                        return <Batuk/>;
                    case `/MTBS/Batuk2` :
                        return <Batuk2/>;
                    case `/MTBS/DiareYaTidak`:
                        return <DiareYaTidak/>
                    case `/MTBS/Diare1` :
                        return <Diare/>;
                    case `/MTBS/Diare2` :
                        return <Diare2/>;
                    case `/MTBS/Diare3` :
                        return <Diare3/>;
                    case `/MTBS/DemamYaTidak`:
                        return <DemamYaTidak/>;
                    case `/MTBS/DemamDaerah`:
                        return <DemamDaerah/>;
                    case `/MTBS/DemamKonfirmasiDaerah` :
                        return <DemamKonfirmasiDaerah/>;
                    case `/MTBS/Demam1` :
                        return <Demam1/>;
                    case `/MTBS/Demam2` :
                        return <Demam2/>;
                    case `/MTBS/Demam3` :
                        return <Demam3/>;
                    case `/MTBS/Demam4` :
                        return <Demam4/>;
                    case `/MTBS/Demam5` :
                        return <Demam5/>;
                    case `/MTBS/Demam6` :
                        return <Demam6/>;
                    case `/MTBS/Demam7` :
                        return <Demam7/>;
                    case `/MTBS/Demam8` :
                        return <Demam8/>;
                    case `/MTBS/Demam9` :
                        return <Demam9/>;
                    case `/MTBS/TelingaYaTidak`:
                        return <TelingaYaTidak/>;
                    case `/MTBS/Telinga1`:
                        return <Telinga/>;
                    case `/MTBS/Telinga2`:
                        return <Telinga2/>;
                    case `/MTBS/Gizi1` :
                        return <Gizi/>;
                    case `/MTBS/Gizi2` :
                        return <Gizi2/>;
                    case `/MTBS/Gizi3` :
                        return <Gizi3/>;
                    case `/MTBS/Anemia`:
                        return <Anemia/>;
                    case `/MTBS/HIV1`:
                        return <HIV/>;
                    case `/MTBS/HIV2`:
                        return <HIV2/>;
                    case `/MTBS/HIV3`:
                        return <HIV3/>;
                    case `/MTBS/Imunisasi1`:
                        return <Imunisasi/>;
                    case `/MTBS/Imunisasi2`:
                        return <Imunisasi2/>;
                    case `/MTBS/Imunisasi3`:
                        return <Imunisasi3/>;
                    case `/MTBS/Imunisasi4`:
                        return <Imunisasi4/>;
                    case `/MTBS/VitaminA` :
                        return <Vitamina/>;
                    case `/MTBS/KeluhanLain` :
                        return <KeluhanLain/>;                    
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