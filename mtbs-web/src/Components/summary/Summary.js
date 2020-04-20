import React, { useState } from 'react';
import { Badge } from 'reactstrap';
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

  let summary = [
    {
      'title' : 'Tanda Bahaya Umum',
      'text' : (klasifikasiTBU.tbu_klasifikasi===null ? '' : klasifikasiTBU.tbu_klasifikasi),
      'color' : (klasifikasiTBU.tbu_status===null ? 'dark' : klasifikasiTBU.tbu_status ),
      'disabled' : compStatus.tandabahayaumum
    },
    {
      'title' : 'Batuk',
      'text' : 'Penyakit Batuk',
      'color' : 'warning',
      'disabled' : compStatus.batuk
    },
    {
      'title' : 'Diare',
      'text' : 'Penyakit Diare',
      'color' : 'dark',
      'disabled' : compStatus.diare
    },
    {
      'title' : 'Demam',
      'text' : 'Penyakit Demam',
      'color' : 'dark',
      'disabled' : compStatus.demam
    },
    {
      'title' : 'Telinga',
      'text' : 'Penyakit Telinga',
      'color' : 'dark',
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
      'text' : 'Penyakit Anemia',
      'color' : 'dark',
      'disabled' : compStatus.anemia
    },
    {
      'title' : 'HIV',
      'text' : 'Penyakit HIV',
      'color' : 'dark',
      'disabled' : compStatus.hiv
    },
    {
      'title' : 'Imunisasi',
      'text' : 'Penyakit Imunisasi',
      'color' : 'dark',
      'disabled' : compStatus.imunisasi
    },
    {
      'title' : 'Vitamin A',
      'text' : 'Penyakit Vitamin A',
      'color' : 'dark',
      'disabled' : compStatus.vitamina
    },
    {
      'title' : 'Keluhan Lain',
      'text' : 'Penyakit Lainnya',
      'color' : 'dark',
      'disabled' : compStatus.keluhanlain
    },
    {
      'title' : 'Pemberian Makanan',
      'text' : 'Penyakit Makanan',
      'color' : 'dark',
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
      <div className="mb-4">
        <h2>
          <Badge href="#" className="p-3 border-glow w-100" color="danger" pill>
            Rujuk Segera
            <FontAwesomeIcon icon={faExclamationTriangle} className="ml-3"/>
          </Badge>
        </h2>
      </div>

      {renderSummary}

    </div>
  );
};

export default Summary;