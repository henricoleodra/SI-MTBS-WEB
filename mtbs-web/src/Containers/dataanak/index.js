import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card, CardBody, Label, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
//import components
import {
  HeaderTitle,
  RiwayatPemeriksaan,
  Pagination,
} from "./../../Components";

//Styling
import { Wrapper } from "./style";

const PencarianDataAnak = (props) => {
  let riwayatPemeriksaan = [
    {
      tanggal: "20 Januari 2020",
      keluhanAnak: "Batuk, Flu",
    },
  ];

  const renderRiwayatPemeriksaan = riwayatPemeriksaan.map((curr, index) => {
    return (
      <RiwayatPemeriksaan
        key={index}
        tanggal={curr.tanggal}
        keluhanAnak={curr.keluhanAnak}
      />
    );
  });

  return (
    <Wrapper>
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
                  Harry Senjaya
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Nama Ibu : </Label>{" "}
                  Friska Christiana
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    Jenis Kelamin :{" "}
                  </Label>{" "}
                  Laki-laki
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">
                    Tanngal Lahir :{" "}
                  </Label>{" "}
                  30 Januari 2020
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Alamat : </Label>{" "}
                  Jln. Holis No.4
                </Row>
              </CardBody>
            </Card>
            <div className="mt-2">
              <Button
                className="button-orange w-100"
                tag={Link}
                to="PencarianDataAnak"
              >
                Kembali
              </Button>
            </div>
          </div>
        </div>
        <div style={{ width: "60%" }} className="m-3 text-center">
          <h3 className="text-muted">Riwayat pemeriksaan ada sebanyak 1</h3>
          <div style={{ minHeight: "580px" }}>{renderRiwayatPemeriksaan}</div>
          <Row>
            <Col sm={12}>
              <Pagination />
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default PencarianDataAnak;
