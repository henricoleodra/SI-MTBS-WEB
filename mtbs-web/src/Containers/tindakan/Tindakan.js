import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Wrapper } from  './style';
import { Tindakan as CompTindakan} from '../../Components';
import { TindakanChange } from '../../Actions'

const Tindakan = ( props ) => {
    let [tindakanTBU, set_tindakanTBU] = useState(['']);
    let [tindakanBatuk, set_tindakanBatuk] = useState();
    let [tindakanDiare, set_tindakanDiare] = useState();
    let [tindakanDemam, set_tindakanDemam] = useState();
    let [tindakanTelinga, set_tindakanTelinga] = useState();
    let [tindakanGizi, set_tindakanGizi] = useState();
    let [tindakanAnemia, set_tindakanAnemia] = useState();
    let [tindakanHIV, set_tindakanHIV] = useState();  

    const klasifikasiTBU = useSelector(state => state.klasifikasiTBU);
    const klasifikasiBatuk = useSelector(state => state.klasifikasiBatuk);
    const klasifikasiDiare = useSelector(state => state.klasifikasiDiare);
    const klasifikasiDemam = useSelector(state => state.klasifikasiDemam);
    const klasifikasiTelinga = useSelector(state => state.klasifikasiTelinga);
    const klasifikasiGizi = useSelector(state => state.klasifikasiGizi);
    const klasifikasiAnemia = useSelector(state => state.klasifikasiAnemia);
    const klasifikasiHIV = useSelector(state => state.klasifikasiHIV);

    const ansTBU = useSelector(state => state.ansTBU);
    const ansBatuk = useSelector(state => state.ansBatuk);
    const ansDiare = useSelector(state => state.ansDiare);
    const ansDemam = useSelector(state => state.ansDemam);
    const ansTelinga = useSelector(state => state.ansTelinga);
    const ansGizi = useSelector(state => state.ansGizi);
    const ansAnemia = useSelector(state => state.ansGizi);
    const ansHIV = useSelector(state => state.ansHIV);

    const dataAnak = useSelector(state => state.dataAnak);
    const tindakan = useSelector(state => state.tindakan);

    const dispatch = useDispatch();

    useEffect (async () => {
      await axios.post(`/Tindakan`, {
        tbu: {
          ansTBU: ansTBU,
          klasifikasiTBU: klasifikasiTBU
        },
        batuk: {
          ansBatuk: ansBatuk,
          klasifikasiBatuk: klasifikasiBatuk
        },
        diare: {
          ansDiare: ansDiare,
          klasifikasiDiare: klasifikasiDiare
        },
        demam: {
          ansDemam: ansDemam,
          klasifikasiDemam: klasifikasiDemam
        },
        telinga: {
          ansTelinga: ansTelinga,
          klasifikasiTelinga: klasifikasiTelinga
        },
        gizi: {
          ansGizi: ansGizi,
          klasifikasiGizi: klasifikasiGizi
        },
        anemia: {
          ansAnemia: ansAnemia,
          klasifikasiAnemia: klasifikasiAnemia
        },
        hiv: {
          ansHIV: ansHIV,
          klasifikasiHIV: klasifikasiHIV
        }
      })
      .then(res => {
        set_tindakanTBU(res.data.tbu);
      })
      .catch(err => {
          console.log(err);
      });
    }, []);

    return (
      <Wrapper>
        <div className="d-flex flex-column mt-2 wrapper-tindakan">
            <div className="">
                <h3 className="text-center font-weight-bold">Tindakan</h3>
                <hr className="underline-tindakan"/>
            </div>
            <CompTindakan judul={"Tanda Bahaya Umum"} klasifikasi={klasifikasiTBU.tbu_klasifikasi} status={klasifikasiTBU.tbu_status} tindakan={tindakanTBU} />

            <Row className="justify-content-between px-5 py-0 mt-5">
              <Link to="Klasifikasi"><Button className="button-sebelumnya-tindakan">Kembali ke Halaman Klasifikasi</Button></Link>
              <Link to="../.."><Button className="button-selanjutnya-tindakan">Akhiri Pemeriksaan</Button></Link>
            </Row>
        </div>
      </Wrapper>
    );
}

export default Tindakan;