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

// Actions
import {
  KlasifikasiDemamChange,
  AnsDemamChange,
  AnsGiziChange,
} from "../../Actions";

import Classifier from "../../Classifier/Classifier";

var outlineColor = {
  borderColor: "#46d0fe",
};

const Demam = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansDemam = useSelector((state) => state.ansDemam);
  let [demam_nearIsDBD, set_demam_nearIsDBD] = useState(
    ansDemam.demam_nearIsDBD
  );
  let [demam_isEkstremitasDingin, set_demam_isEkstremitasDingin] = useState(
    ansDemam.demam_isEkstremitasDingin
  );
  let [demam_darahHidungGusiKulit, set_demam_darahHidungGusiKulit] = useState(
    ansDemam.demam_darahHidungGusiKulit
  );

  const flag = useSelector((state) => state.flag);
  const ansTBU = useSelector((state) => state.ansTBU);
  const ansBatuk = useSelector((state) => state.ansBatuk);
  const ansDiare = useSelector((state) => state.ansDiare);
  const ansTelinga = useSelector((state) => state.ansTelinga);
  const ansGizi = useSelector((state) => state.ansGizi);
  const ansAnemia = useSelector((state) => state.ansGizi);
  const ansHIV = useSelector((state) => state.ansHIV);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios(`/Demam`, { ansDemam: ansDemam });
    dispatch(
      KlasifikasiDemamChange("DEMAM_KLASIFIKASI", res.data.hasilKlasifikasi)
    );
    dispatch(
      KlasifikasiDemamChange("DEMAM_STATUS", res.data.statusKlasifikasi)
    );
    if (
      res.data.statusKlasifikasi === "danger" ||
      res.data.statusKlasifikasi === "warning"
    ) {
      ansGizi.gizi_demam = true;
      dispatch(AnsGiziChange("GIZI_DEMAM", true));
    } else {
      ansGizi.gizi_demam = false;
      dispatch(AnsGiziChange("GIZI_DEMAM", false));
    }
    Classifier(
      "demam",
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
    history.push("Demam9");
  };

  const handleAnswer1 = (event) => {
    if (event.target.value === "1") {
      set_demam_nearIsDBD(true);
      dispatch(AnsDemamChange("NEAR_DBD", true));
    } else if (event.target.value === "2") {
      set_demam_nearIsDBD(false);
      dispatch(AnsDemamChange("NEAR_DBD", false));
    }
  };

  const handleAnswer2 = (event) => {
    if (event.target.value === "1") {
      set_demam_isEkstremitasDingin(true);
      dispatch(AnsDemamChange("EKSTREMITAS_DINGIN", true));
    } else if (event.target.value === "2") {
      set_demam_isEkstremitasDingin(false);
      dispatch(AnsDemamChange("EKSTREMITAS_DINGIN", false));
    }
  };

  const handleAnswer3 = (event) => {
    if (event.target.value === "1") {
      set_demam_darahHidungGusiKulit(true);
      dispatch(AnsDemamChange("DARAH_HIDUNG_GUSI_KULIT", true));
    } else if (event.target.value === "2") {
      set_demam_darahHidungGusiKulit(false);
      dispatch(AnsDemamChange("DARAH_HIDUNG_GUSI_KULIT", false));
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
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#46d0fe" }} />
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">
              Demam sudah 2-7 hari
            </h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
            {/* <p className="text-center"><b>Jika demam 2 hari sampai dengan 7 hari, tanya dan periksa</b></p> */}
          </div>
          <div style={{ minHeight: "475px" }}>
            <Row className="justify-content-around">
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Apakah di sekitar anda ada yang terinfeksi
                    DBD?
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
                            checked={demam_nearIsDBD === true}
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
                            checked={demam_nearIsDBD === false}
                          />
                          <span
                            style={{ left: "5px" }}
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
                  <CardTitle className="h5">
                    <b>Periksa! </b>Tanda-tanda syok : Ujung ekstremitas teraba
                    dingin DAN nadi sangat lemah atau tidak teraba
                  </CardTitle>
                  <Row className="limitCol ">
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
                            checked={demam_isEkstremitasDingin === true}
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
                            checked={demam_isEkstremitasDingin === false}
                          />
                          <span
                            style={{ left: "5px" }}
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
                  <CardTitle className="h5">
                    <b>Lihat! </b>Adanay perdarahan dari hidung/gusi atau bintik
                    perdarahan di kulit (petekie)
                  </CardTitle>
                  <Row className="limitCol ">
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
                            checked={demam_darahHidungGusiKulit === true}
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
                            checked={demam_darahHidungGusiKulit === false}
                          />
                          <span
                            style={{ left: "5px" }}
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
        </div>
        <Row className="justify-content-between px-5 py-0">
          <Col sm="4">
            <Link to="Demam7" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundColor: "#fe8d3b", border: "0" }} block>
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
              Selanjutnya <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};
export default Demam;
