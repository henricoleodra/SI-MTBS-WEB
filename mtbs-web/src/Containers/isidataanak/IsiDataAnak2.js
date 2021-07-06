import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRunning,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

//Import Component
import { HeaderTitle } from "../../Components";

// Actions
import { DataAnakChange, AnsDemamChange, AnsGiziChange } from "../../Actions";
import { Wrapper } from "./style";
import Container from "reactstrap/lib/Container";

const IsiDataAnak2 = () => {
  const date = new Date();
  const tmpHari = date.getDay();
  const tmpBulan = date.getMonth();
  const hari =
    tmpHari === 1
      ? "Senin"
      : tmpHari === 2
      ? "Selasa"
      : tmpHari === 3
      ? "Rabu"
      : tmpHari === 4
      ? "Kamis"
      : tmpHari === 5
      ? "Jumat"
      : tmpHari === 6
      ? "Sabtu"
      : "Minggu";
  const bulan =
    tmpBulan === 0
      ? "Januari"
      : tmpBulan === 1
      ? "Februari"
      : tmpBulan === 2
      ? "Maret"
      : tmpBulan === 3
      ? "April"
      : tmpBulan === 4
      ? "Mei"
      : tmpBulan === 5
      ? "Juni"
      : tmpBulan === 6
      ? "Juli"
      : tmpBulan === 7
      ? "Agustus"
      : tmpBulan === 8
      ? "September"
      : tmpBulan === 9
      ? "Oktober"
      : tmpBulan === 10
      ? "November"
      : "Desember";
  const history = useHistory();
  const dispatch = useDispatch();
  const dataAnak = useSelector((state) => state.dataAnak);
  let [loading, setLoading] = useState(false);
  let [suhuAnak, setSuhuAnak] = useState(dataAnak.suhuAnak);
  let [beratAnak, setBeratAnak] = useState(dataAnak.beratAnak);
  let [tinggiAnak, setTinggiAnak] = useState(dataAnak.tinggiAnak);
  let [kunjunganKe, setKunjunganKe] = useState(1);
  let [keluhan, setKeluhan] = useState(
    dataAnak.keluhanAwal === "" ? [] : dataAnak.keluhanAwal.split(",")
  );
  let [curDate] = useState(
    hari + ", " + date.getDate() + " " + bulan + " " + date.getFullYear()
  );
  let [pilihDataAnak] = useState(dataAnak.pilihDataAnak);

  useEffect(() => {
    const fetchData = async () => {
      if (dataAnak.idAnak !== null) {
        try {
          setLoading(true);
          const res = await axios.get(
            `${process.env.REACT_APP_MAIN_API}/pasien/kunjungan/${dataAnak.idAnak}`
          );
          setKunjunganKe(res.data + 1);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);

  const handleSuhuAnak = (event) => {
    let tmp = Number(event.target.value);
    setSuhuAnak(tmp);
    dispatch(DataAnakChange("SUHU_ANAK", tmp));
    dispatch(AnsDemamChange("SUHU_ANAK", tmp));
  };

  const handleBeratAnak = (event) => {
    let tmp = Number(event.target.value);
    setBeratAnak(tmp);
    dispatch(DataAnakChange("BERAT_ANAK", tmp));
  };

  const handleTinggiAnak = (event) => {
    let tmp = Number(event.target.value);
    setTinggiAnak(tmp);
    dispatch(DataAnakChange("TINGGI_ANAK", tmp));
  };

  const handleKunjunganKe = (event) => {
    let tmp = Number(event.target.value);
    setKunjunganKe(tmp);
    dispatch(DataAnakChange("KUNJUNGAN_KE", tmp));
  };

  const handleAddKeluhan = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setKeluhan([...keluhan, event.target.value]);
      event.target.value = "";
    }
  };

  const handleRemoveKeluhan = (indexToRemove) => {
    setKeluhan([...keluhan.filter((_, index) => index !== indexToRemove)]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(DataAnakChange("KELUHAN_AWAL", keluhan.toString()));
    axios
      .post(`http://localhost:8000/CalculateSD`, {
        dataAnak: dataAnak,
      })
      .then((res) => {
        dispatch(AnsGiziChange("BB_MENURUT_PB_ATAU_TB", res.data.hasilSDGizi));
        dispatch(AnsGiziChange("NILAI_SD", res.data.nilaiSDGizi));
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("../MTBS/TandaBahayaUmum1");
  };

  if (loading) {
    return (
      <div style={{ overflowY: "hidden" }}>
        <Container className="w-100 h-100 d-flex justify-content-center" fluid>
          <div
            style={{ minHeight: "800px" }}
            className="d-flex justify-content-center flex-column"
          >
            <Spinner
              style={{ width: "5rem", height: "5rem" }}
              color="primary"
            />
          </div>
        </Container>
      </div>
    );
  }

  return (
    <Wrapper>
      <div>
        <HeaderTitle title="Isi Data Anak" />
        <h4 className="text-center text-muted mt-3">
          Tanggal Pemeriksaan : {curDate}
        </h4>
        <div className="d-flex justify-content-center mt-5">
          <Form className="w-75 justify-content-center">
            <div style={{ minHeight: "376px" }}>
              <FormGroup row>
                <Col sm={2} className="mt-2">
                  <Label for="suhu">Suhu</Label>
                </Col>
                <Col sm={3}>
                  <InputGroup>
                    <Input
                      type="number"
                      min="30"
                      max="50"
                      name="suhu"
                      id="suhu"
                      placeholder="Contoh : 37"
                      style={{ borderColor: "#46d0fe" }}
                      value={suhuAnak}
                      onChange={handleSuhuAnak}
                      required
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText
                        style={{
                          backgroundColor: "#46d0fe",
                          borderColor: "#46d0fe",
                        }}
                        className="text-white"
                      >
                        °C
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col sm={2} style={{ marginTop: "-10px" }}>
                  <hr
                    style={{
                      backgroundColor: "#46d0fe",
                      width: "2px",
                      height: "25px",
                    }}
                  />
                </Col>
                <Col sm={2} className="mt-2">
                  <Label for="beratBadan">Berat Badan</Label>
                </Col>
                <Col sm={3}>
                  <InputGroup>
                    <Input
                      type="number"
                      min="5"
                      max="30"
                      name="beratBadan"
                      id="beratBadan"
                      placeholder="Contoh : 20"
                      style={{ borderColor: "#46d0fe" }}
                      value={beratAnak}
                      onChange={handleBeratAnak}
                      required
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText
                        style={{
                          backgroundColor: "#46d0fe",
                          borderColor: "#46d0fe",
                        }}
                        className="text-white"
                      >
                        Kg
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-5">
                <Col sm={2} className="mt-2">
                  <Label for="tinggiBadan">Tinggi Badan</Label>
                </Col>
                <Col sm={3}>
                  <InputGroup>
                    <Input
                      type="number"
                      min="60"
                      max="120"
                      name="tinggiBadan"
                      id="tinggiBadan"
                      placeholder="Contoh : 70"
                      style={{ borderColor: "#46d0fe" }}
                      value={tinggiAnak}
                      onChange={handleTinggiAnak}
                      required
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText
                        style={{
                          backgroundColor: "#46d0fe",
                          borderColor: "#46d0fe",
                        }}
                        className="text-white"
                      >
                        Cm
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col sm={2} style={{ marginTop: "-10px" }}>
                  <hr
                    style={{
                      backgroundColor: "#46d0fe",
                      width: "2px",
                      height: "25px",
                    }}
                  />
                </Col>
                <Col sm={2} className="mt-2">
                  <Label for="kunjungan">Kunjungan Ke</Label>
                </Col>
                <Col sm={3}>
                  <InputGroup>
                    <Input
                      type="number"
                      name="kunjungan"
                      id="kunjungan"
                      placeholder="Contoh : 1"
                      style={{ borderColor: "#46d0fe" }}
                      min="0"
                      value={kunjunganKe}
                      onChange={handleKunjunganKe}
                      required
                      disabled
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText
                        style={{
                          backgroundColor: "#46d0fe",
                          borderColor: "#46d0fe",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faRunning}
                          style={{ color: "white" }}
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="keluhanLain">Keluhan Lain</Label>
                <Row>
                  <Col sm={5}>
                    <InputGroup>
                      <Input
                        type="text"
                        name="cariKeluhan"
                        id="cariKeluhan"
                        placeholder="Contoh : Batuk"
                        style={{ borderColor: "#46d0fe" }}
                        onKeyPress={handleAddKeluhan}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText
                          style={{
                            backgroundColor: "#46d0fe",
                            borderColor: "#46d0fe",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faSearch}
                            style={{ color: "white" }}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                  <Col sm={7}>
                    <Container className="taginput-wrapper" fluid>
                      <Row>
                        {keluhan.map((keluhan, index) => (
                          <Col
                            key={index}
                            sm="auto"
                            className="bg-orange my-2 mx-1 rounded d-flex align-items-center justify-content-center px-1"
                          >
                            <span className="text-white">{keluhan}</span>
                            <FontAwesomeIcon
                              icon={faTimes}
                              className="taginput-button"
                              onClick={() => handleRemoveKeluhan(index)}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </FormGroup>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <Button
                style={{ backgroundColor: "#fe8d3b", border: "0" }}
                tag={Link}
                to={`${pilihDataAnak === true ? "Konfirmasi" : "1"}`}
              >
                Sebelumnya
              </Button>
              <Button
                style={{ backgroundColor: "#46d0fe", border: "0" }}
                onClick={handleSubmit}
              >
                Selanjutnya
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default IsiDataAnak2;
