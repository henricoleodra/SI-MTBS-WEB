import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Label,
  Row,
  Spinner,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { HeaderTitle, Tindakan } from "./../../Components";
import axios from "axios";
import { Wrapper } from "./style";

const Index = (props) => {
  const { id } = useParams();
  const [idAnak, setIdAnak] = useState();
  const [pemeriksaan, setPemeriksaan] = useState([]);
  const [riwayat, setRiwayat] = useState([]);
  const [tanggal, setTanggal] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const detailPemeriksaan = await axios.get(
          `${process.env.REACT_APP_MAIN_API}/pemeriksaan/detail/${id}`
        );
        const klasifikasiPemeriksaan = await axios.get(
          `${process.env.REACT_APP_MAIN_API}/pemeriksaan/klasifikasi/${id}`
        );
        const tindakanPemeriksaan = await axios.get(
          `${process.env.REACT_APP_MAIN_API}/pemeriksaan/tindakan/${id}`
        );

        // TBU
        const klasfiikasiTBUArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 1;
          }
        );
        let klasifikasiTBU = "";
        let statusTBU = "";
        if (klasfiikasiTBUArray.length !== 0) {
          klasifikasiTBU = klasfiikasiTBUArray[0].namaKlasifikasi;
          statusTBU = klasfiikasiTBUArray[0].status ? "danger" : "success";
        }
        const tindakanTBUArray = tindakanPemeriksaan.data.filter((tindakan) => {
          return Number(tindakan.idPenyakit) === 1;
        });
        let tindakanTBU = [];
        tindakanTBUArray.forEach((tindakan) => {
          tindakanTBU.push(tindakan.namaTindakan);
        });

        // BATUK
        const klasfiikasiBatukArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 2;
          }
        );
        let klasifikasiBatuk = "";
        let statusBatuk = "";
        if (klasfiikasiBatukArray.length !== 0) {
          klasifikasiBatuk = klasfiikasiBatukArray[0].namaKlasifikasi;
          statusBatuk = klasfiikasiBatukArray[0].status ? "danger" : "success";
        }
        const tindakanBatukArray = tindakanPemeriksaan.data.filter(
          (tindakan) => {
            return Number(tindakan.idPenyakit) === 2;
          }
        );
        let tindakanBatuk = [];
        tindakanBatukArray.forEach((tindakan) => {
          tindakanBatuk.push(tindakan.namaTindakan);
        });

        // DIARE
        const klasifikasiDiareArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 3;
          }
        );
        let klasifikasiDiare = "";
        let statusDiare = "";
        if (klasifikasiDiareArray.length !== 0) {
          let tmpStatus = 0;
          let flag = true;
          klasifikasiDiareArray.forEach((klasifikasi) => {
            if (klasifikasi.status > tmpStatus) {
              tmpStatus = Number(klasifikasi.status);
            }
            if (flag) {
              klasifikasiDiare += klasifikasi.namaKlasifikasi;
              flag = false;
            } else {
              klasifikasiDiare += ", " + klasifikasi.namaKlasifikasi;
            }
          });
          if (tmpStatus === 2) statusDiare = "danger";
          else if (tmpStatus === 1) statusDiare = "warning";
          else statusDiare = "success";
        }
        const tindakanDiareArray = tindakanPemeriksaan.data.filter(
          (tindakan) => {
            return Number(tindakan.idPenyakit) === 3;
          }
        );
        let tindakanDiare = [];
        tindakanDiareArray.forEach((tindakan) => {
          tindakanDiare.push(tindakan.namaTindakan);
        });

        // DEMAM
        const klasifikasiDemamArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 4;
          }
        );
        let klasifikasiDemam = "";
        let statusDemam = "";
        if (klasifikasiDemamArray.length !== 0) {
          let tmpStatus = 0;
          let flag = true;
          klasifikasiDemamArray.forEach((klasifikasi) => {
            if (klasifikasi.status > tmpStatus) {
              tmpStatus = Number(klasifikasi.status);
            }
            if (flag) {
              klasifikasiDemam += klasifikasi.namaKlasifikasi;
              flag = false;
            } else {
              klasifikasiDemam += ", " + klasifikasi.namaKlasifikasi;
            }
          });
          if (tmpStatus === 2) statusDemam = "danger";
          else if (tmpStatus === 1) statusDemam = "warning";
          else statusDemam = "success";
        }
        const tindakanDemamArray = tindakanPemeriksaan.data.filter(
          (tindakan) => {
            return Number(tindakan.idPenyakit) === 4;
          }
        );
        let tindakanDemam = [];
        tindakanDemamArray.forEach((tindakan) => {
          tindakanDemam.push(tindakan.namaTindakan);
        });

        // TELINGA
        const klasfiikasiTelingaArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 5;
          }
        );
        let klasifikasiTelinga = "";
        let statusTelinga = "";
        if (klasfiikasiTelingaArray.length !== 0) {
          klasifikasiTelinga = klasfiikasiTelingaArray[0].namaKlasifikasi;
          if (Number(klasfiikasiTelingaArray[0].status) === 2)
            statusTelinga = "danger";
          else if (Number(klasfiikasiTelingaArray[0].status) === 1)
            statusTelinga = "warning";
          else statusTelinga = "success";
        }
        const tindakanTelingaArray = tindakanPemeriksaan.data.filter(
          (tindakan) => {
            return Number(tindakan.idPenyakit) === 5;
          }
        );
        let tindakanTelinga = [];
        tindakanTelingaArray.forEach((tindakan) => {
          tindakanTelinga.push(tindakan.namaTindakan);
        });

        // GIZI
        const klasfiikasiGiziArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 6;
          }
        );
        let klasifikasiGizi = "";
        let statusGizi = "";
        if (klasfiikasiGiziArray.length !== 0) {
          klasifikasiGizi = klasfiikasiGiziArray[0].namaKlasifikasi;
          if (Number(klasfiikasiGiziArray[0].status) === 2)
            statusGizi = "danger";
          else if (Number(klasfiikasiGiziArray[0].status) === 1)
            statusGizi = "warning";
          else statusGizi = "success";
        }
        const tindakanGiziArray = tindakanPemeriksaan.data.filter(
          (tindakan) => {
            return Number(tindakan.idPenyakit) === 6;
          }
        );
        let tindakanGizi = [];
        tindakanGiziArray.forEach((tindakan) => {
          tindakanGizi.push(tindakan.namaTindakan);
        });

        // ANEMIA
        const klasfiikasiAnemiaArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 7;
          }
        );
        let klasifikasiAnemia = "";
        let statusAnemia = "";
        if (klasfiikasiAnemiaArray.length !== 0) {
          klasifikasiAnemia = klasfiikasiAnemiaArray[0].namaKlasifikasi;
          if (Number(klasfiikasiAnemiaArray[0].status) === 2)
            statusAnemia = "danger";
          else if (Number(klasfiikasiAnemiaArray[0].status) === 1)
            statusAnemia = "warning";
          else statusAnemia = "success";
        }
        const tindakanAnemiaArray = tindakanPemeriksaan.data.filter(
          (tindakan) => {
            return Number(tindakan.idPenyakit) === 7;
          }
        );
        let tindakanAnemia = [];
        tindakanAnemiaArray.forEach((tindakan) => {
          tindakanAnemia.push(tindakan.namaTindakan);
        });

        // HIV
        const klasfiikasiHIVArray = klasifikasiPemeriksaan.data.filter(
          (klasifikasi) => {
            return Number(klasifikasi.idPenyakit) === 8;
          }
        );
        let klasifikasiHIV = "";
        let statusHIV = "";
        if (klasfiikasiHIVArray.length !== 0) {
          klasifikasiHIV = klasfiikasiHIVArray[0].namaKlasifikasi;
          if (Number(klasfiikasiHIVArray[0].status) === 2) statusHIV = "danger";
          else if (Number(klasfiikasiHIVArray[0].status) === 1)
            statusHIV = "warning";
          else statusHIV = "success";
        }
        const tindakanHIVArray = tindakanPemeriksaan.data.filter((tindakan) => {
          return Number(tindakan.idPenyakit) === 8;
        });
        let tindakanHIV = [];
        tindakanHIVArray.forEach((tindakan) => {
          tindakanHIV.push(tindakan.namaTindakan);
        });

        setRiwayat([
          {
            judul: "Tanda Bahaya Umum",
            klasifikasi: klasifikasiTBU,
            status: statusTBU,
            tindakan: tindakanTBU,
          },
          {
            judul: "Batuk atau Sukar Bernafas",
            klasifikasi: klasifikasiBatuk,
            status: statusBatuk,
            tindakan: tindakanBatuk,
          },
          {
            judul: "Diare",
            klasifikasi: klasifikasiDiare,
            status: statusDiare,
            tindakan: tindakanDiare,
          },
          {
            judul: "Demam",
            klasifikasi: klasifikasiDemam,
            status: statusDemam,
            tindakan: tindakanDemam,
          },
          {
            judul: "Telinga",
            klasifikasi: klasifikasiTelinga,
            status: statusTelinga,
            tindakan: tindakanTelinga,
          },
          {
            judul: "Gizi",
            klasifikasi: klasifikasiGizi,
            status: statusGizi,
            tindakan: tindakanGizi,
          },
          {
            judul: "Anemia",
            klasifikasi: klasifikasiAnemia,
            status: statusAnemia,
            tindakan: tindakanAnemia,
          },
          {
            judul: "HIV",
            klasifikasi: klasifikasiHIV,
            status: statusHIV,
            tindakan: tindakanHIV,
          },
        ]);
        setIdAnak(detailPemeriksaan.data[0].idPasien);
        setPemeriksaan(detailPemeriksaan.data[0]);
        setTanggal(detailPemeriksaan.data[0].tanggalPemeriksaan);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const renderRiwayatTindakan =
    riwayat &&
    riwayat.map((riwayat, idx) => {
      if (riwayat.klasifikasi !== "") {
        return (
          <Tindakan
            key={idx}
            judul={riwayat.judul}
            klasifikasi={riwayat.klasifikasi}
            status={riwayat.status}
            tindakan={riwayat.tindakan}
          />
        );
      }
    });

  if (loading) {
    return (
      <Wrapper style={{ overflowY: "hidden" }}>
        <Container className="w-100 h-100 d-flex justify-content-center" fluid>
          <div
            style={{ minHeight: "800px" }}
            className="d-flex justify-content-center flex-column"
          >
            <Spinner className="loading-pencarian-anak" color="primary" />
          </div>
        </Container>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="btn-lobby">
        <Button className="button-orange" tag={Link} to="../Lobby">
          <FontAwesomeIcon icon={faChevronLeft} /> {}
          Lobby
        </Button>
      </div>
      <div>
        <HeaderTitle title="Riwayat Pemeriksaan Anak" />
      </div>
      <div className="d-flex">
        <div className="wrapper-data-anak m-3">
          <div className="wrapper-info-anak">
            <Card className="wrapper-conten-info-anak">
              <CardBody className="p-5">
                <Row className="justify-content-center my-4">
                  <FontAwesomeIcon icon={faBaby} className="fa-5x" />
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Nama Anak : </Label>{" "}
                  {pemeriksaan.namaAnak}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Suhu : </Label>{" "}
                  {pemeriksaan.suhu} °C
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    Berat Badan :{" "}
                  </Label>{" "}
                  {pemeriksaan.beratBadan} kg
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    Tinggi Badan :{" "}
                  </Label>{" "}
                  {pemeriksaan.tinggiBadan} cm
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Keluhan : </Label>{" "}
                  {pemeriksaan.keluhan}
                </Row>
              </CardBody>
            </Card>
            <div className="mt-2">
              <Button
                className="button-orange w-100"
                tag={Link}
                to={"../DataAnak/" + idAnak}
              >
                Kembali
              </Button>
            </div>
          </div>
        </div>
        <div style={{ width: "60%" }} className="m-3">
          <h3 className="text-muted text-center">
            Tanggal Pemeriksaan : {tanggal}
          </h3>
          <div style={{ minHeight: "580px" }}>{renderRiwayatTindakan}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
