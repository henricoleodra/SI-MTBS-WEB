import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FormGroup,
  Label,
  Input,
  Form,
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import "../../Assets/style/style.css";

// Actions
import {
  KlasifikasiTBUChange,
  AnsTBUChange,
  AnsDemamChange,
  AnsGiziChange,
  compStatusChange,
  FlagChange,
} from "../../Actions";

import Classifier from "../../Classifier/Classifier";

var outlineColor = {
  borderColor: "#46d0fe",
};

const TandaBahayaUmum2 = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansTBU = useSelector((state) => state.ansTBU);
  let [tbu_letargis, set_tbu_letargis] = useState(ansTBU.tbu_letargis);
  let [tbu_stridor, set_tbu_stridor] = useState(ansTBU.tbu_stridor);
  let [tbu_sianosis, set_tbu_sianosis] = useState(ansTBU.tbu_sianosis);
  let [tbu_pucatDingin, set_tbu_pucatDingin] = useState(ansTBU.tbu_pucatDingin);

  const flag = useSelector((state) => state.flag);
  const ansBatuk = useSelector((state) => state.ansBatuk);
  const ansDiare = useSelector((state) => state.ansDiare);
  const ansDemam = useSelector((state) => state.ansDemam);
  const ansTelinga = useSelector((state) => state.ansTelinga);
  const ansGizi = useSelector((state) => state.ansGizi);
  const ansAnemia = useSelector((state) => state.ansGizi);
  const ansHIV = useSelector((state) => state.ansHIV);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(FlagChange("FLAG_TBU", 2));
    const res = await axios.post(`http://localhost:8000/TBU`, {
      ansTBU: ansTBU,
    });
    dispatch(KlasifikasiTBUChange("TBU_KLASIFIKASI", res.data.hasilKlasifkasi));
    dispatch(KlasifikasiTBUChange("TBU_STATUS", res.data.statusKlasifikasi));
    if (res.data.statusKlasifikasi === "danger") {
      ansDemam.klasifikasiTBU = true;
      ansGizi.gizi_tandaBahayaUmum = true;
      dispatch(AnsDemamChange("KLASIFIKASI_TBU", true));
      dispatch(AnsGiziChange("GIZI_TANDA_BAHAYA_UMUM", true));
    } else {
      ansDemam.klasifikasiTBU = false;
      ansGizi.gizi_tandaBahayaUmum = false;
      dispatch(AnsDemamChange("KLASIFIKASI_TBU", false));
      dispatch(AnsGiziChange("GIZI_TANDA_BAHAYA_UMUM", false));
    }
    Classifier(
      "tbu",
      dispatch,
      flag,
      ansTBU,
      ansBatuk,
      ansDiare,
      ansDemam,
      ansTelinga,
      ansGizi,
      ansAnemia,
      ansHIV
    );
    history.push("BatukYaTidak");
    dispatch(compStatusChange("BATUK"));
  };

  const handleAnswer1 = (event) => {
    if (event.target.value === "1") {
      set_tbu_letargis(true);
      dispatch(AnsTBUChange("LETARGIS", true));
    } else {
      set_tbu_letargis(false);
      dispatch(AnsTBUChange("LETARGIS", false));
    }
  };

  const handleAnswer2 = (event) => {
    if (event.target.value === "1") {
      set_tbu_stridor(true);
      dispatch(AnsTBUChange("STRIDOR", true));
    } else {
      set_tbu_stridor(false);
      dispatch(AnsTBUChange("STRIDOR", false));
    }
  };

  const handleAnswer3 = (event) => {
    if (event.target.value === "1") {
      set_tbu_sianosis(true);
      dispatch(AnsTBUChange("SIANOSIS", true));
    } else {
      set_tbu_sianosis(false);
      dispatch(AnsTBUChange("SIANOSIS", false));
    }
  };

  const handleAnswer4 = (event) => {
    if (event.target.value === "1") {
      set_tbu_pucatDingin(true);
      dispatch(AnsTBUChange("PUCAT_DINGIN", true));
    } else {
      set_tbu_pucatDingin(false);
      dispatch(AnsTBUChange("PUCAT_DINGIN", false));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12">
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#46d0fe" }} />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Tanda Bahaya Umum</h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>

          <div style={{ minHeight: "475px" }}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-center w-75">
                <CardBody>
                  <CardTitle className="h5 mb-2">
                    <b>Tanyakan! </b>Apakah anak letargis atau tidak sadar
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="3"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Ya
                          <Input
                            type="radio"
                            name="radio1"
                            value={1}
                            onChange={handleAnswer1}
                            checked={tbu_letargis === true}
                            required
                          />
                          <span
                            style={{ left: "20px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Tidak
                          <Input
                            type="radio"
                            name="radio1"
                            value={2}
                            onChange={handleAnswer1}
                            checked={tbu_letargis === false}
                          />
                          <span
                            style={{ left: "0px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2">
                    <b>Tanyakan! </b>Apakah anak stridor
                  </CardTitle>
                  <Row className="limitCol">
                    <Col sm="3"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Ya
                          <Input
                            type="radio"
                            name="radio2"
                            value={1}
                            onChange={handleAnswer2}
                            checked={tbu_stridor === true}
                            required
                          />
                          <span
                            style={{ left: "20px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Tidak
                          <Input
                            type="radio"
                            name="radio2"
                            value={2}
                            onChange={handleAnswer2}
                            checked={tbu_stridor === false}
                          />
                          <span
                            style={{ left: "0px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2">
                    <b>Tanyakan! </b>Apakah anak berwarna biru(sianosis)
                  </CardTitle>
                  <Row className="limitCol">
                    <Col sm="3"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Ya
                          <Input
                            type="radio"
                            name="radio3"
                            value={1}
                            onChange={handleAnswer3}
                            checked={tbu_sianosis === true}
                            required
                          />
                          <span
                            style={{ left: "20px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Tidak
                          <Input
                            type="radio"
                            name="radio3"
                            value={2}
                            onChange={handleAnswer3}
                            checked={tbu_sianosis === false}
                          />
                          <span
                            style={{ left: "0px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5 mb-2">
                    <b>Tanyakan! </b>Apakah ujung tangan dan kaki pucat dan
                    dingin
                  </CardTitle>
                  <Row className="limitCol">
                    <Col sm="3"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Ya
                          <Input
                            type="radio"
                            name="radio4"
                            value={1}
                            onChange={handleAnswer4}
                            checked={tbu_pucatDingin === true}
                            required
                          />
                          <span
                            style={{ left: "20px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Tidak
                          <Input
                            type="radio"
                            name="radio4"
                            value={2}
                            onChange={handleAnswer4}
                            checked={tbu_pucatDingin === false}
                          />
                          <span
                            style={{ left: "0px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </div>

          <Row className="justify-content-between px-5 py-0">
            <Col sm="4">
              <Link to="TandaBahayaUmum1" style={{ textDecoration: "none" }}>
                <Button
                  style={{ backgroundColor: "#fe8d3b", border: "0" }}
                  block
                >
                  <FontAwesomeIcon icon={faChevronLeft} /> Sebelumnya
                </Button>
              </Link>
            </Col>
            <Col sm="4">
              <Button
                type="submit"
                style={{ backgroundColor: "#46d0fe", border: "0" }}
                block
              >
                Pemeriksaan Batuk <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Form>
  );
};

export default TandaBahayaUmum2;
