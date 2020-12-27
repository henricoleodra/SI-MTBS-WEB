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
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { HeaderTitle, Klasifikasi } from "./../../Components";
import axios from "axios";
import { Wrapper } from "./style";

const Index = (props) => {
  let { ida, idp } = useParams();
  let [info, setInfo] = useState([]);
  let [riwayat, setRiwayat] = useState([]);
  let [tanggal, setTanggal] = useState();
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const infoAnak = await axios.get("http://localhost:8000/InfoAnak/" + ida);
      const riwayatAnak = await axios.get(
        "http://localhost:8000/DetailRiwayat/" + ida + "&" + idp
      );
      setInfo(infoAnak.data);
      setTanggal(riwayatAnak.data.tanggal);
      setRiwayat(riwayatAnak.data.hasilpemeriksaan);
      setLoading(false);
    };
    fetchData();
  }, [ida, idp]);

  const renderHasilKlasifikasi = riwayat.map((curr, index) => {
    return (
      <Klasifikasi
        key={index}
        title={curr.judul}
        status={curr.status}
        klasifikasi={curr.klasifikasi}
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
                  {info.nama}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Nama Ibu : </Label>{" "}
                  {info.ibu}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    Jenis Kelamin :{" "}
                  </Label>{" "}
                  {info.jeniskelamin}
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    Tanngal Lahir :{" "}
                  </Label>{" "}
                  {info.tanggallahir}
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
                to={"../DataAnak/" + ida}
              >
                Kembali
              </Button>
            </div>
          </div>
        </div>
        <div style={{ width: "60%" }} className="m-3 text-center">
          <h3 className="text-muted">{tanggal}</h3>
          <div style={{ minHeight: "580px" }}>{renderHasilKlasifikasi}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
