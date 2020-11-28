import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Input,
  Row,
  Col,
  Container,
  Spinner,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
//import components
import { HeaderTitle, DataAnak, Pagination } from "./../../Components";

//Styling
import { Wrapper } from "./style";

const PencarianDataAnak = (props) => {
  let [namaAnak, set_namaAnak] = useState("");
  let [jenisKelamin, set_jenisKelamin] = useState("");
  let [namaIbu, set_namaIbu] = useState("");
  let [tanggalLahir, set_tanggalLahir] = useState("");

  let [anak, setAnak] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [numDataAnak] = useState(4);
  let [totalDataAnak, setTotalDataAnak] = useState();

  // Get Current Data
  const indexOfLastPage = currentPage * numDataAnak;
  const indexOfFirstPage = indexOfLastPage - numDataAnak;
  let [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchDataAnak = async () => {
      setLoading(true);
      const res = await axios.get("/DataAnak");

      setAnak(res.data);
      setCurrentData(res.data);
      setTotalDataAnak(res.data.length);
      setLoading(false);
    };
    fetchDataAnak();
  }, []);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    let tmp = anak;
    if (namaAnak !== "") {
      tmp = tmp.filter((anak) =>
        anak.nama.toLowerCase().includes(namaAnak.toLowerCase())
      );
    }
    if (jenisKelamin !== "") {
      tmp = tmp.filter(
        (anak) => anak.jeniskelamin.toLowerCase() === jenisKelamin.toLowerCase()
      );
    }
    if (namaIbu !== "") {
      tmp = tmp.filter((anak) =>
        anak.ibu.toLowerCase().includes(namaIbu.toLowerCase())
      );
    }
    if (tanggalLahir !== "") {
      tmp = tmp.filter((anak) => anak.tanggallahir === tanggalLahir);
    }
    setCurrentPage(1);
    setTotalDataAnak(tmp.length);
    setCurrentData(tmp);
  };

  const handleClear = (event) => {
    event.preventDefault();
    set_namaAnak("");
    set_jenisKelamin("");
    set_namaIbu("");
    set_tanggalLahir("");
    setCurrentData(anak);
  };

  const handleNamaAnak = (event) => {
    set_namaAnak(event.target.value);
  };

  const handleJenisKelamin = (event) => {
    set_jenisKelamin(event.target.value);
  };

  const handleNamaIbu = (event) => {
    set_namaIbu(event.target.value);
  };

  const handleTanggalLahir = (event) => {
    set_tanggalLahir(event.target.value);
  };

  const renderDaftarAnak = currentData
    .slice(indexOfFirstPage, indexOfLastPage)
    .map((curr) => {
      return (
        <DataAnak
          key={curr.id}
          namaAnak={curr.nama}
          namaIbu={curr.ibu}
          jenisKelamin={curr.jeniskelamin}
          tanggalLahir={curr.tanggallahir}
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
        <HeaderTitle title="Pencarian Data Anak" />
      </div>
      <div className="d-flex">
        <div className="wrapper-form-pencarian-anak m-3">
          <Form className="wrapper-form-input" onSubmit={handleSearch}>
            <div style={{ minHeight: "550px" }}>
              <h3 className="text-center pb-3">Form Pencarian Anak</h3>
              <FormGroup>
                <Label for="NamaAnak">Nama Anak</Label>
                <Input
                  type="text"
                  name="NamaAnak"
                  id="NamaAnak"
                  className="input-data-anak"
                  value={namaAnak}
                  onChange={handleNamaAnak}
                  placeholder="Masukkan nama anak"
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label>Jenis Kelamin</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="Laki-laki"
                      onChange={handleJenisKelamin}
                      checked={jenisKelamin === "Laki-laki"}
                    />
                    Laki-Laki
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="Perempuan"
                      onChange={handleJenisKelamin}
                      checked={jenisKelamin === "Perempuan"}
                    />
                    Perempuan
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="NamaIbu">Nama Ibu</Label>
                <Input
                  type="text"
                  name="NamaIbu"
                  id="NamaIbu"
                  value={namaIbu}
                  onChange={handleNamaIbu}
                  className="input-data-anak"
                  placeholder="Masukkan nama ibu"
                />
              </FormGroup>
              <FormGroup>
                <Label for="tanggalLahir">Tanggal Lahir</Label>
                <InputGroup>
                  <Input
                    type="date"
                    name="tanggalLahir"
                    id="tanggalLahir"
                    value={tanggalLahir}
                    className="input-data-anak"
                    onChange={handleTanggalLahir}
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="input-add-on-anak">
                      <FontAwesomeIcon icon={faCalendarDay} color="white" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <div style={{ display: "flex" }}>
                <Button
                  className="button-clear-form-data-anak"
                  color="danger"
                  onClick={handleClear}
                  style={{ marginLeft: "auto" }}
                >
                  <FontAwesomeIcon icon={faTrash} color="white" /> Bersihkan
                  Form
                </Button>
              </div>
            </div>

            <div>
              <Button className="button-cari-data-anak" type="submit">
                Cari Data Anak
              </Button>
              <Link to="MulaiPemeriksaan">
                <Button className="button-sebelumnya mt-3">Sebelumnya</Button>
              </Link>
            </div>
          </Form>
        </div>
        <div style={{ width: "60%" }} className="m-3 text-center">
          <div style={{ minHeight: "580px" }}>
            {renderDaftarAnak}
            <Row className={`${totalDataAnak === 0 ? "" : "d-none"}`}>
              <Col sm="12" className="text-muted">
                <p>Data yang dicari kosong atau tidak ditemukan</p>
                <h2>
                  Data Anak yang anda cari tidak ada, silahkan periksa hal-hal
                  berikut :
                </h2>
                <ul>
                  <li>
                    - Periksa kembali data anak (nama anak, nama ibu, jenis
                    kelamin, dan tanggal lahir.
                  </li>
                  <li>
                    - Jika data yang dicari sudah benar, namun tidak ada hasil
                    silahkan lakukan registrasi baru / isi data anak baru.
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <Row className={`${totalDataAnak === 0 ? "d-none" : ""}`}>
            <Col sm={12}>
              <Pagination
                changePage={changePage}
                currentPage={currentPage}
                numDataAnak={numDataAnak}
                totalDataAnak={totalDataAnak}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
};

export default PencarianDataAnak;
