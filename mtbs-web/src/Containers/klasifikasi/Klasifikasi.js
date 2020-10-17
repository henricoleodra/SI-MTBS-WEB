import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'reactstrap';
import { Klasifikasi } from '../../Components'


const Index = (props) =>{
    const klasifikasiTBU = useSelector(state => state.klasifikasiTBU);
    const klasifikasiBatuk = useSelector(state => state.klasifikasiBatuk);
    const klasifikasiDiare = useSelector(state => state.klasifikasiDiare);
    const klasifikasiDemam = useSelector(state => state.klasifikasiDemam);
    const klasifikasiTelinga = useSelector(state => state.klasifikasiTelinga);
    const klasifikasiGizi = useSelector(state => state.klasifikasiGizi);
    const klasifikasiAnemia = useSelector(state => state.klasifikasiAnemia);
    const klasifikasiHIV = useSelector(state => state.klasifikasiHIV);

    let klasifikasi = [
        {
            status: klasifikasiTBU.tbu_status,
            title: "Tanda Bahaya Umum",
            klasifikasi: klasifikasiTBU.tbu_klasifikasi,
            flag: (klasifikasiTBU.tbu_status != null)
        },
        {
            status: klasifikasiBatuk.bsb_status,
            title: "Batuk",
            klasifikasi: klasifikasiBatuk.bsb_klasifikasi,
            flag: (klasifikasiBatuk.bsb_status != null && klasifikasiBatuk.bsb_status !== "info")
        },
        {
            status: klasifikasiDiare.diare_status,
            title: "Diare",
            klasifikasi: klasifikasiDiare.diare_klasifikasi,
            flag: (klasifikasiDiare.diare_status != null && klasifikasiDiare.diare_status !== "info")
        },
        {
            status: klasifikasiDemam.demam_status,
            title: "Demam",
            klasifikasi: klasifikasiDemam.demam_klasifikasi,
            flag: (klasifikasiDemam.demam_status !=null && klasifikasiDemam.demam_status !== "info")
        },
        {
            status: klasifikasiTelinga.telinga_status,
            title: "Telinga",
            klasifikasi: klasifikasiTelinga.telinga_klasifikasi,
            flag: (klasifikasiTelinga.telinga_status !=null && klasifikasiTelinga.telinga_status !== "info")
        },
        {
            status: klasifikasiGizi.gizi_status,
            title: "Gizi",
            klasifikasi: klasifikasiGizi.gizi_klasifikasi,
            flag: (klasifikasiGizi.gizi_status !=null && klasifikasiGizi.gizi_status !== "info")
        },
        {
            status: klasifikasiAnemia.anemia_status,
            title: "Anemia",
            klasifikasi: klasifikasiAnemia.anemia_klasifikasi,
            flag: (klasifikasiAnemia.anemia_status !=null)
        },
        {
            status: klasifikasiHIV.hiv_status,
            title: "HIV",
            klasifikasi: klasifikasiHIV.hiv_klasifikasi,
            flag: (klasifikasiHIV.hiv_status !=null)
        },
    ];
    
    return(
        <div className="d-flex flex-column mt-2">
            <div>
                <h3 className="text-center font-weight-bold">Klasifikasi</h3>
                <hr
                style={{
                    color: "#46d0fe",
                    backgroundColor: "#46d0fe",
                    height: 5,
                    width: '95%'
                }}
                />
            </div>
            <Container className="w-75 justify-content-center">
                {
                    klasifikasi.map((klasifikasi, idx) => {
                        if(klasifikasi.flag){
                            return <Klasifikasi key={idx} status={klasifikasi.status} title={klasifikasi.title} klasifikasi={klasifikasi.klasifikasi} />
                        }
                        else {
                            return <></>
                        }
                    })
                }
            </Container>
            <Row className="justify-content-center px-5 py-0 mt-5">
                <Link to="Tindakan"><Button className="button-orange">Akhiri Pemeriksaan</Button></Link>
            </Row>
        </div>  
    );
}

export default Index;