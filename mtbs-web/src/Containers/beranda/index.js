import React from "react";
import { Container, Button, Row, Col } from "reactstrap";
import { Wrapper } from "./style";

import defnisimtbs from "./../../Assets/image/beranda/definisi-mtbs.png";
import fungsimtbs from "./../../Assets/image/beranda/fungsi-mtbs.png";
import pengisiandatadiri from "./../../Assets/image/beranda/pengisian-data-diri.png";
import pemeriksaanbalita from "./../../Assets/image/beranda/pemeriksaan-balita.png";
import klasfikasipenyakitbalita from "./../../Assets/image/beranda/klasifikasi-penyakit-balita.png";
import tindakanataspenyakitbalita from "./../../Assets/image/beranda/tindakan-atas-penyakit-balita.png";

const Index = (props) => {
  return (
    <Wrapper style={{ overflowX: "hidden" }}>
      <div className="wrapper-beranda">
        <Container
          className="wrapper-banner-beranda justify-content-begin d-flex flex-column"
          fluid
        >
          <div className="wrapper-title-banner-beranda d-flex justify-content-center flex-row">
            <h1 className="text-center font-weight-bold text-white title-banner-beranda w-50 ">
              KAMI PEDULI DENGAN KESEHATAN ANAK ANDA
            </h1>
          </div>
          <div className="wrapper-subtitle-banner-beranda d-flex justify-content-center flex-row">
            <div>
              <h3 className="text-center text-white subtitle-banner-beranda">
                Salah satu kebahagian orangtua adalah kesehatan anak-anak kita.
              </h3>
              <h3 className="text-center text-white subtitle-banner-beranda">
                Lakukan cek pemeriksaan terhadap balita anda dengan aplikasi
                MTBS.
              </h3>
            </div>
          </div>
          <div className="wrapper-button-banner-beranda d-flex justify-content-center flex-row">
            <Button
              href="#apaitumtbs"
              className="button-orange button-banner-beranda font-weight-bold"
            >
              APA ITU MTBS?
            </Button>
          </div>
        </Container>
        <Container
          className="wrapper-definisi-mtbs-beranda"
          id="apaitumtbs"
          fluid
        >
          <Row className="wrapper-title-definisi-mtbs-beranda">
            <Col sm={12}>
              <h2 className="title-definisi-mtbs-beranda text-primary font-weight-bold text-center">
                Manajemen Terpadu Balita Sakit
              </h2>
            </Col>
          </Row>
          <Row className="wrapper-content-definisi-mtbs-beranda">
            <Col sm={8} className="mt-4 pl-4">
              <h5 className="text-secondary title-content-definisi-mtbs-berada">
                Definisi MTBS
              </h5>
              <hr></hr>
              <p className="text-content-definisi-mtbs-beranda text-secondary">
                Suatu manajem untuk balita yang datang di pelayanan kesehatan,
                dilaksanakan secara terpadu mengenai klasifikasi, status gizi,
                status imum maupun penanganan, dan konseling yang diberikan.
              </p>
            </Col>
            <Col sm={4} className="justify-content-center d-flex">
              <img
                className="image-content-definisi-mtbs-beranda"
                src={defnisimtbs}
                alt="Definisi MTBS"
              />
            </Col>
          </Row>
        </Container>
        <Container className="wrapper-fungsi-mtbs-beranda" fluid>
          <Row className="wrapper-content-fungsi-mtbs-beranda">
            <Col sm={4} className="justify-content-center d-flex">
              <img
                className="image-content-fungsi-mtbs-beranda"
                src={fungsimtbs}
                alt="Fungsi MTBS"
              />
            </Col>
            <Col sm={8} className="pr-4">
              <h5 className="text-secondary title-content-fungsi-mtbs-berada text-right">
                Fungsi MTBS
              </h5>
              <hr></hr>
              <p className="text-secondary text-right text-content-fungsi-mtbs-beranda">
                Suatu manajem untuk balita yang datang di pelayanan kesehatan,
                dilaksanakan secara terpadu mengenai klasifikasi, status gizi,
                status imum maupun penanganan, dan konseling yang diberikan.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="wrapper-tahapan-mtbs-beranda" fluid>
          <Row className="wrapper-content-tahapan-mtbs-beranda">
            <Col sm={12}>
              <h5 className="text-secondary text-center title-content-tahapan-mtbs-beranda">
                Tahapan MTBS
              </h5>
              <hr></hr>
              <p className="text-secondary text-center text-content-tahapan-mtbs-beranda">
                MTBS digunakan sebagai standar pelayanan bayi, dan balita sakit,
                sekaligus sebagai pedoman bagi tenaga keperawatan (bidan dan
                perawat) khususnya di fasilitas pelayanan kesehatan dasar / TEKS
                tahapan disini masih belum sesuai aslinya
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center d-flex mt-4">
            <Col sm={3}>
              <img
                src={pengisiandatadiri}
                className="icon-tahapan-mtbs-beranda"
                alt="Pengisian Data Diri"
              />
              <p className="text-center text-secondary text-tahapan-mtbs-beranda">
                1. Pengisian Data Diri
              </p>
            </Col>
            <Col sm={3}>
              <img
                src={pemeriksaanbalita}
                className="icon-tahapan-mtbs-beranda"
                alt="Pemeriksaan Balita"
              />
              <p className="text-center text-secondary text-tahapan-mtbs-beranda">
                2. Pemeriksaan Balita
              </p>
            </Col>
            <Col sm={3}>
              <img
                src={klasfikasipenyakitbalita}
                className="icon-tahapan-mtbs-beranda"
                alt="Klasifikasi Penyakit Balita"
              />
              <p className="text-center text-secondary text-tahapan-mtbs-beranda">
                3. Klasifikasi Penyakit Balita
              </p>
            </Col>
            <Col sm={3}>
              <img
                src={tindakanataspenyakitbalita}
                className="icon-tahapan-mtbs-beranda"
                alt="Tindakan Atas Penyakit Balita"
              />
              <p className="text-center text-secondary text-tahapan-mtbs-beranda">
                4. Tindakan Atas Penyakit Balita
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Index;
