import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card, CardBody, Label, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
//import components
import { HeaderTitle, Klasifikasi, Pagination } from "./../../Components";

//Styling
import { Wrapper } from "./style";

const PencarianDataAnak = (props) => {
  let hasilKlasifikasi = [
    {
      title: "Tanda Bahaya Umum",
      status: "success",
      klasifikasi: "",
    },
    {
      title: "Batuk",
      status: "success",
      klasifikasi: "Batuk bukan pneunomia",
    },
    {
      title: "Diare",
      status: "danger",
      klasifikasi: "Diare dehidrasi berat",
    },
    {
      title: "Demam",
      status: "warning",
      klasifikasi: "Malaria",
    },
    {
      title: "Telinga",
      status: "success",
      klasifikasi: "Tidak ada infeksi telinga",
    },
    {
      title: "Gizi",
      status: "warning",
      klasifikasi: "Sangat kurus tanpa komplikasi",
    },
    {
      title: "Anemia",
      status: "success",
      klasifikasi: "Tidak anemia",
    },
    {
      title: "HIV",
      status: "danger",
      klasifikasi: "Infeksi HIV terkonfirmasi",
    },
  ];

  const renderHasilKlasifikasi = hasilKlasifikasi.map((curr, index) => {
    return (
      <Klasifikasi
        key={index}
        title={curr.title}
        status={curr.status}
        klasifikasi={curr.klasifikasi}
      />
    );
  });

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
                  30 January 2020
                </Row>
                <Row className="justify-content-center my-4">
                  <Label className="font-weight-bold mr-2">Alamat : </Label>{" "}
                  Jln. Holis No.4
                </Row>
              </CardBody>
            </Card>
            <div className="mt-2">
              <Button className="button-orange w-100" tag={Link} to="DataAnak">
                Kembali
              </Button>
            </div>
          </div>
        </div>
        <div style={{ width: "60%" }} className="m-3 text-center">
          <h3 className="text-muted">Tanggal 30 Maret 2020</h3>
          <div style={{ minHeight: "580px" }}>{renderHasilKlasifikasi}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PencarianDataAnak;
