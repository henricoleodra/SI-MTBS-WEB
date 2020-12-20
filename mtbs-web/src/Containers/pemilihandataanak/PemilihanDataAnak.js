import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { HeaderTitle, DataAnak, Pagination } from "../../Components";
import { Wrapper } from "./style";
import { DataAnakChange } from "../../Actions";

const PemilihanDataAnak = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
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
      const res = await axios.get("http://localhost:8000/DataAnak");

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
    setCurrentPage(1);
    setTotalDataAnak(anak.length);
    setCurrentData(anak);
  };

  const handleChoose = (index) => {
    let data = currentData[index];
    dispatch(DataAnakChange("NAMA_ANAK", data.nama));
    dispatch(DataAnakChange("NAMA_IBU", data.ibu));
    if (data.jeniskelamin === "Laki-laki") {
      dispatch(DataAnakChange("JENIS_KELAMIN", true));
    } else {
      dispatch(DataAnakChange("JENIS_KELAMIN", false));
    }
    dispatch(DataAnakChange("TANGGAL_LAHIR", data.tanggallahir));
    dispatch(DataAnakChange("PROVINSI", data.provinsi));
    dispatch(DataAnakChange("ALAMAT_ANAK", data.alamat));
    dispatch(DataAnakChange("RT_RW", data.rtrw));
    dispatch(DataAnakChange("KELURAHAN_DESA", data.keldes));
    dispatch(DataAnakChange("KOTA_KECAMATAN", data.kotkec));
    history.push("IsiDataAnak/Konfirmasi");
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
    .map((curr, index) => {
      return (
        <DataAnak
          key={curr.id}
          position={index}
          namaAnak={curr.nama}
          namaIbu={curr.ibu}
          jenisKelamin={curr.jeniskelamin}
          tanggalLahir={curr.tanggallahir}
          handleChoose={handleChoose}
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
        <HeaderTitle title="Pemilihan Data Anak" />
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

export default PemilihanDataAnak;
