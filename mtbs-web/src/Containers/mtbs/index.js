import React from 'react';
import {
    Layout,
    TandaBahayaUmum1,
    TandaBahayaUmum2,
    BatukYaTidak,
    Batuk1,
    Batuk2,
    DiareYaTidak,
    Diare1,
    Diare2,
    Diare3,
    DemamYaTidak,
    DemamDaerah,
    DemamKonfirmasiDaerah,
    DemamPerhatian,
    Demam1,
    Demam2,
    Demam3,
    Demam4,
    Demam5,
    Demam6,
    Demam7,
    Demam8,
    Demam9,
    TelingaYaTidak,
    Telinga1,
    Telinga2,
    Gizi1,
    Gizi2,
    Gizi3,
    Anemia,
    HIV1,
    HIV2,
    HIV3,
    Imunisasi1,
    Imunisasi2,
    Imunisasi3,
    Imunisasi4,
    VitaminA,
    KeluhanLain,
    PemberianMakanan1,
    PemberianMakanan2,
    PemberianMakanan3,
    PemberianMakanan4,
    Klasifikasi,
    Tindakan
} from '../../Pages';

const Index = ( props ) => {
    const RenderContent = () => {
        switch(props.location.pathname) {
            case `/MTBS/TandaBahayaUmum1` : 
                return <TandaBahayaUmum1/>;
            case `/MTBS/TandaBahayaUmum2` : 
                return <TandaBahayaUmum2/>;
            case `/MTBS/BatukYaTidak`:
                return <BatukYaTidak/>;
            case `/MTBS/Batuk1` :
                return <Batuk1/>;
            case `/MTBS/Batuk2` :
                return <Batuk2/>;
            case `/MTBS/DiareYaTidak`:
                return <DiareYaTidak/>
            case `/MTBS/Diare1` :
                return <Diare1/>;
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
            case `/MTBS/DemamPerhatian` :
                return <DemamPerhatian/>;
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
                return <Telinga1/>;
            case `/MTBS/Telinga2`:
                return <Telinga2/>;
            case `/MTBS/Gizi1` :
                return <Gizi1/>;
            case `/MTBS/Gizi2` :
                return <Gizi2/>;
            case `/MTBS/Gizi3` :
                return <Gizi3/>;
            case `/MTBS/Anemia`:
                return <Anemia/>;
            case `/MTBS/HIV1`:
                return <HIV1/>;
            case `/MTBS/HIV2`:
                return <HIV2/>;
            case `/MTBS/HIV3`:
                return <HIV3/>;
            case `/MTBS/Imunisasi1`:
                return <Imunisasi1/>;
            case `/MTBS/Imunisasi2`:
                return <Imunisasi2/>;
            case `/MTBS/Imunisasi3`:
                return <Imunisasi3/>;
            case `/MTBS/Imunisasi4`:
                return <Imunisasi4/>;
            case `/MTBS/VitaminA` :
                return <VitaminA/>;
            case `/MTBS/KeluhanLain` :
                return <KeluhanLain/>;                    
            case `/MTBS/Klasifikasi`:
                return <Klasifikasi/>;
            case `/MTBS/Tindakan`:
                return <Tindakan/>;
            case `/MTBS/PemberianMakanan1`:
                return <PemberianMakanan1/>;
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
    };

    return (
        <Layout location={props.location.pathname} >
            <RenderContent/>
        </Layout>
    );
}

export default Index;