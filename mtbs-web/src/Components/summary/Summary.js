import React, { useState } from 'react';
import { Badge, Row,Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

//Import SummaryItem Component
import SummaryItem from './summaryItem/SummaryItem';

const Summary = () => {
  let [ dropDown, setDropDown ] = useState([
    false, false, false, false, false, false, false, false, false, false, false, false
  ]);

  //OPTIONAL 2 : UNTUK SET INITIAL FALSE 12 BIJI 
  //KURUNG SIKU "[]" UNTUK MEMBUAT ISI DALEM USESTATE BERJALAN 1 KALI AJA DALAM RENDER
  //KARENA RENDER BERJALAN BERKALI-KALI
  // let banyakTandaBahaya = 12;
  // useEffect(() => {
  //   for(let i = 0; i < banyakTandaBahaya; i++) {
  //     setDropDown(dropDown => [...dropDown, false]);
  //   }
  // }, []);
  
  const compStatus = useSelector(state => state.compStatus);
  const klasifikasiTBU = useSelector(state => state.klasifikasiTBU);
  const klasifikasiBatuk = useSelector(state => state.klasifikasiBatuk);
  const klasifikasiDiare = useSelector(state => state.klasifikasiDiare);
  const klasifikasiDemam = useSelector(state => state.klasifikasiDemam);
  const klasifikasiTelinga = useSelector(state => state.klasifikasiTelinga);
  const klasifikasiAnemia = useSelector(state => state.klasifikasiAnemia);
  const klasifikasiHIV = useSelector(state => state.klasifikasiHIV);
  const klasifikasiImunisasi = useSelector(state => state.klasifikasiImunisasi);
  const klasifikasiVitaminA = useSelector(state => state.klasifikasiVitaminA);
  const klasifikasiKeluhanLain = useSelector(state => state.klasifikasiKeluhanLain);
  const klasifikasiPemberianMakanan = useSelector(state => state.klasifikasiPemberianMakanan);

  let summary = [
    {
      'title' : 'Tanda Bahaya Umum',
      'text' : (klasifikasiTBU.tbu_klasifikasi===null ? '' : klasifikasiTBU.tbu_klasifikasi),
      'color' : (klasifikasiTBU.tbu_status===null ? 'dark' : klasifikasiTBU.tbu_status ),
      'disabled' : compStatus.tandabahayaumum
    },
    {
      'title' : 'Batuk',
      'text' : (klasifikasiBatuk.bsb_klasifikasi===null ? '' : klasifikasiBatuk.bsb_klasifikasi),
      'color' : (klasifikasiBatuk.bsb_status===null ? 'dark' : klasifikasiBatuk.bsb_status),
      'disabled' : compStatus.batuk
    },
    {
      'title' : 'Diare',
      'text' : (klasifikasiDiare.diare_klasifikasi===null ? '' : klasifikasiDiare.diare_klasifikasi),
      'color' : (klasifikasiDiare.diare_status===null ? 'dark' : klasifikasiDiare.diare_status),
      'disabled' : compStatus.diare
    },
    {
      'title' : 'Demam',
      'text' : (klasifikasiDemam.demam_klasifikasi===null ? '' : klasifikasiDemam.demam_klasifikasi),
      'color' : (klasifikasiDemam.demam_status===null ? 'dark' : klasifikasiDemam.demam_status),
      'disabled' : compStatus.demam
    },
    {
      'title' : 'Telinga',
      'text' : (klasifikasiTelinga.telinga_klasifikasi===null ? '' : klasifikasiTelinga.telinga_klasifikasi),
      'color' : (klasifikasiTelinga.telinga_status===null ? 'dark' : klasifikasiTelinga.telinga_status),
      'disabled' : compStatus.telinga
    },
    {
      'title' : 'Gizi',
      'text' : 'Penyakit Gizi',
      'color' : 'dark',
      'disabled' : compStatus.gizi
    },
    {
      'title' : 'Anemia',
      'text' : (klasifikasiAnemia.anemia_klasifikasi===null ? '' : klasifikasiAnemia.anemia_klasifikasi),
      'color' : (klasifikasiAnemia.anemia_status===null ? 'dark' : klasifikasiAnemia.anemia_status),
      'disabled' : compStatus.anemia
    },
    {
      'title' : 'HIV',
      'text' : (klasifikasiHIV.hiv_klasifikasi===null ? '' : klasifikasiHIV.hiv_klasifikasi),
      'color' : (klasifikasiHIV.hiv_status===null ? 'dark' : klasifikasiHIV.hiv_status),
      'disabled' : compStatus.hiv
    },
    {
      'title' : 'Imunisasi',
      'text' : (klasifikasiImunisasi.imun_klasifikasi===null ? '' : klasifikasiImunisasi.imun_klasifikas),
      'color' : (klasifikasiImunisasi.imun_status===null ? 'dark' : klasifikasiImunisasi.imun_status),
      'disabled' : compStatus.imunisasi
    },
    {
      'title' : 'Vitamin A',
      'text' : (klasifikasiVitaminA.vit_klasifikasi===null ? '' : klasifikasiVitaminA.vit_klasifikas),
      'color' : (klasifikasiVitaminA.vit_status===null ? 'dark' : klasifikasiVitaminA.vit_status),
      'disabled' : compStatus.vitamina
    },
    {
      'title' : 'Keluhan Lain',
      'text' : (klasifikasiKeluhanLain.kel_klasifikasi===null ? '' : klasifikasiKeluhanLain.kel_klasifikas),
      'color' : (klasifikasiKeluhanLain.kel_status===null ? 'dark' : klasifikasiKeluhanLain.kel_status),
      'disabled' : compStatus.keluhanlain
    },
    {
      'title' : 'Pemberian Makanan',
      'text' : (klasifikasiPemberianMakanan.pemberianMakanan_klasifikasi===null ? '' : klasifikasiPemberianMakanan.pemberianMakanan_klasifikasi),
      'color' : (klasifikasiPemberianMakanan.pemberianMakanan_status===null ? 'dark' : klasifikasiPemberianMakanan.pemberianMakanan_status),
      'disabled' : compStatus.makan
    },
  ];

  const renderSummary = summary.map((curr, index) => {
    return(
      <SummaryItem key={"summary" + index} color={curr.color} title={curr.title} onClick={()=>{toggle(index)}} isOpen={dropDown[index]} disabled = {curr.disabled}>
        <span>{curr.text}</span>
      </SummaryItem>
    )
  })

  //index yang mana yg mau di toggle
  const toggle = ( index ) => {
    let arr1 = [...dropDown];
    let arr2 = [...dropDown];
    arr2.fill(false);
    arr2[ index ] = !arr1[ index ];
    setDropDown(arr2);
  }

  return(
    <div className="w-100">
      <Row className="w-100 mr-0 ml-0 mt-0 mb-0" style={{top:"0px"}}>
        <Col className="mr-0 pr-0 pl-0">
          <div className="mb-4">
            <h2>
              <Badge href="#" className="p-3" color="danger" style={{width: "270px"}} hidden={klasifikasiTBU.tbu_status != "danger" && klasifikasiBatuk.bsb_status != "danger" && klasifikasiDiare.diare_status != "danger"} pill>
                Rujuk Segera
                <FontAwesomeIcon icon={faExclamationTriangle} className="ml-3"/>
              </Badge>
            </h2>
          </div>
        </Col>
      </Row>
      <div className="" style={{width:"270px",top:"82px", position:"absolute"}}>
        {renderSummary}
      </div>
      
    </div>
  );
};

export default Summary;