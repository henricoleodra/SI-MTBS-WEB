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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
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
  let [demam_anakMuntah, set_demam_anakMuntah] = useState(
    ansDemam.demam_anakMuntah
  );
  let [demam_anakSeringMuntah, set_demam_anakSeringMuntah] = useState(
    ansDemam.demam_anakSeringMuntah
  );
  let [demam_muntahLikeDarahOrKopi, set_demam_muntahLikeDarahOrKopi] = useState(
    ansDemam.demam_muntahLikeDarahOrKopi
  );
  let [demam_berakBerwarnaHitam, set_demam_berakBerwarnaHitam] = useState(
    ansDemam.demam_berakBerwarnaHitam
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
    const res = await axios(`http://localhost:8000/Demam`, {
      ansDemam: ansDemam,
    });
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
    dispatch(KlasifikasiDemamChange("Demam_6", true));
    history.push("Demam8");
  };

  const handleAnswer1 = (event) => {
    if (event.target.value === "1") {
      set_demam_anakMuntah(true);
      dispatch(AnsDemamChange("ANAK_MUNTAH", true));
    } else {
      set_demam_anakMuntah(false);
      dispatch(AnsDemamChange("ANAK_MUNTAH", false));
    }
  };

  const handleAnswer2 = (event) => {
    if (event.target.value === "1") {
      set_demam_anakSeringMuntah(true);
      dispatch(AnsDemamChange("SERING_MUNTAH", true));
    } else {
      set_demam_anakSeringMuntah(false);
      dispatch(AnsDemamChange("SERING_MUNTAH", false));
    }
  };

  const handleAnswer3 = (event) => {
    if (event.target.value === "1") {
      set_demam_muntahLikeDarahOrKopi(true);
      dispatch(AnsDemamChange("MUNTAH_DARAH_KOPI", true));
    } else {
      set_demam_muntahLikeDarahOrKopi(false);
      dispatch(AnsDemamChange("MUNTAH_DARAH_KOPI", false));
    }
  };

  const handleAnswer4 = (event) => {
    if (event.target.value === "1") {
      set_demam_berakBerwarnaHitam(true);
      dispatch(AnsDemamChange("BERAK_HITAM", true));
    } else {
      set_demam_berakBerwarnaHitam(false);
      dispatch(AnsDemamChange("BERAK_HITAM", false));
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
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
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
            <Row className="row d-flex justify-content-around">
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Lihat! </b>Apakah anak muntah?
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
                            checked={demam_anakMuntah === true}
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
                            checked={demam_anakMuntah === false}
                          />
                          <span
                            style={{ left: "5px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>

                  <div
                    hidden={
                      demam_anakMuntah === false || demam_anakMuntah === null
                    }
                  >
                    <hr
                      style={{
                        color: "#46d0fe",
                        backgroundColor: "#46d0fe",
                        height: 1,
                      }}
                    />
                    <h6>Apakah sering?</h6>
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
                              checked={demam_anakSeringMuntah === true}
                              disabled={
                                demam_anakMuntah === false ||
                                demam_anakMuntah === null
                              }
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
                              checked={demam_anakSeringMuntah === false}
                              disabled={
                                demam_anakMuntah === false ||
                                demam_anakMuntah === null
                              }
                            />
                            <span
                              style={{ left: "5px" }}
                              className="checkmark"
                            ></span>
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <h6>Apakah muntah dengan darah atau seperti kopi?</h6>
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
                              checked={demam_muntahLikeDarahOrKopi === true}
                              disabled={
                                demam_anakMuntah === false ||
                                demam_anakMuntah === null
                              }
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
                              checked={demam_muntahLikeDarahOrKopi === false}
                              disabled={
                                demam_anakMuntah === false ||
                                demam_anakMuntah === null
                              }
                            />
                            <span
                              style={{ left: "5px" }}
                              className="checkmark"
                            ></span>
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Apakah tinja berwarna hitam?
                  </CardTitle>
                  <Row className="limitCol ">
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
                            checked={demam_berakBerwarnaHitam === true}
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
                            checked={demam_berakBerwarnaHitam === false}
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
            <Link to="Demam6" style={{ textDecoration: "none" }}>
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
