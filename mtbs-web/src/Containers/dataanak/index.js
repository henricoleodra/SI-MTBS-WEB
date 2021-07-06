import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Label,
  Row,
  Col,
  Container,
  Spinner,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
//import components
import {
  HeaderTitle,
  RiwayatPemeriksaan,
  Pagination,
} from "./../../Components";

//Styling
import { Wrapper } from "./style";
import axios from "axios";

const PencarianDataAnak = (props) => {
  const history = useHistory();
  let { id } = useParams();
  let [info, setInfo] = useState([]);
  let [riwayat, setRiwayat] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [numRiwayatAnak] = useState(4);
  let [totalRiwayatAnak, setTotalRiwayatAnak] = useState();
  const indexOfLastPage = currentPage * numRiwayatAnak;
  const indexOfFirstPage = indexOfLastPage - numRiwayatAnak;
  let [currentRiwayat, setCurrentRiwayat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const infoAnak = await axios.get(
          `${process.env.REACT_APP_MAIN_API}/pasien/detail/${id}`
        );
        const riwayatAnak = await axios.get(
          `${process.env.REACT_APP_MAIN_API}/pemeriksaan/lists/${infoAnak.data.idPasien}`
        );
        setInfo(infoAnak.data);
        setRiwayat(riwayatAnak.data);
        setTotalRiwayatAnak(riwayatAnak.data.length);
        setCurrentRiwayat(
          riwayatAnak.data.slice(indexOfFirstPage, indexOfLastPage)
        );
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  const handleDetails = (idPemeriksaan) => {
    history.push("../RiwayatAnak/" + idPemeriksaan);
  };

  const renderRiwayatPemeriksaan = currentRiwayat.map((curr) => {
    return (
      <RiwayatPemeriksaan
        key={curr.idPemeriksaan}
        idPemeriksaan={curr.idPemeriksaan}
        tanggal={curr.tanggalPemeriksaan}
        keluhanAnak={curr.keluhan}
        handleDetails={handleDetails}
      />
    );
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
        <HeaderTitle title="Data Anak" />
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
                  {info.namaAnak}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Nama Ibu : </Label>{" "}
                  {info.namaIbu}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    {" "}
                    Jenis Kelamin :{" "}
                  </Label>{" "}
                  {Number(info.jenisKelamin) ? "Laki-laki" : "Perempuan"}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    Tanngal Lahir :{" "}
                  </Label>{" "}
                  {info.tanggalLahir}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Alamat : </Label>{" "}
                  {info.alamat}
                </Row>
              </CardBody>
            </Card>
            <div className="mt-2">
              <Button
                className="button-orange w-100"
                tag={Link}
                to="../PencarianDataAnak"
              >
                Kembali
              </Button>
            </div>
          </div>
        </div>
        <div style={{ width: "60%" }} className="m-3 text-center">
          <h3 className="text-muted">
            Riwayat pemeriksaan ada sebanyak {totalRiwayatAnak}
          </h3>
          <div style={{ minHeight: "580px" }}>{renderRiwayatPemeriksaan}</div>
          <Row>
            <Col sm={12}>
              <Pagination
                changePage={changePage}
                currentPage={currentPage}
                numDataAnak={numRiwayatAnak}
                totalDataAnak={totalRiwayatAnak}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default PencarianDataAnak;
