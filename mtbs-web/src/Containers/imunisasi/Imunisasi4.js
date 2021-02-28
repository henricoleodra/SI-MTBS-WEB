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

// Actions
import {
  KlasifikasiImunisasiChange,
  AnsImunisasiChange,
  compStatusChange,
  FlagChange,
} from "../../Actions";

var outlineColor = {
  borderColor: "#46d0fe",
};

const Imunisasi = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansImunisasi = useSelector((state) => state.ansImunisasi);
  let [imun_ipv, set_imun_ipv] = useState(ansImunisasi.imun_ipv);
  let [imun_campak, set_imun_campak] = useState(ansImunisasi.imun_campak);
  let [imun_dpthbhiblanjut, set_imun_dpthbhiblanjut] = useState(
    ansImunisasi.imun_dpthbhiblanjut
  );
  let [imun_campaklanjut, set_imun_campaklanjut] = useState(
    ansImunisasi.imun_campaklanjut
  );

  const handleAnswerIPV = (event) => {
    let tmp = event.target.value;
    set_imun_ipv(tmp);
    dispatch(AnsImunisasiChange("IPV", tmp));
  };

  const handleAnswerCampak = (event) => {
    let tmp = event.target.value;
    set_imun_campak(tmp);
    dispatch(AnsImunisasiChange("CAMPAK", tmp));
  };

  const handleAnswerDPTHBHIBLanjut = (event) => {
    let tmp = event.target.value;
    set_imun_dpthbhiblanjut(tmp);
    dispatch(AnsImunisasiChange("DPT_HB_HIB_LANJUT", tmp));
  };

  const handleAnswerCampakLanjut = (event) => {
    let tmp = event.target.value;
    set_imun_campaklanjut(tmp);
    dispatch(AnsImunisasiChange("CAMPAK_LANJUT", tmp));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(KlasifikasiImunisasiChange("IMUNISASI_KLASIFIKASI", ""));
    dispatch(KlasifikasiImunisasiChange("IMUNISASI_STATUS", "info"));
    dispatch(FlagChange("FLAG_IMUNISASI", 2));
    dispatch(compStatusChange("VITAMIN_A"));
    history.push("VitaminA");
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
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#46d0fe" }} />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Imunisasi</h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "520px" }}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Sudah diberi IPV
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_ipv"
                            value={"Belum"}
                            onChange={handleAnswerIPV}
                            checked={imun_ipv === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_ipv"
                            value={"Akan"}
                            onChange={handleAnswerIPV}
                            checked={imun_ipv === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_ipv"
                            value={"Sudah"}
                            onChange={handleAnswerIPV}
                            checked={imun_ipv === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
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
                    <b>Tanyakan! </b>Sudah diberi Campak
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_campak"
                            value={"Belum"}
                            onChange={handleAnswerCampak}
                            checked={imun_campak === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_campak"
                            value={"Akan"}
                            onChange={handleAnswerCampak}
                            checked={imun_campak === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_campak"
                            value={"Sudah"}
                            onChange={handleAnswerCampak}
                            checked={imun_campak === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
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
                    <b>Tanyakan! </b>Sudah diberi DPT-HB-Hib (lanjutan)
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_dpthbhiblanjut"
                            value={"Belum"}
                            onChange={handleAnswerDPTHBHIBLanjut}
                            checked={imun_dpthbhiblanjut === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_dpthbhiblanjut"
                            value={"Akan"}
                            onChange={handleAnswerDPTHBHIBLanjut}
                            checked={imun_dpthbhiblanjut === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_dpthbhiblanjut"
                            value={"Sudah"}
                            onChange={handleAnswerDPTHBHIBLanjut}
                            checked={imun_dpthbhiblanjut === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
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
                    <b>Tanyakan! </b>Sudah diberi Campak (lanjutan)
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_campaklanjut"
                            value={"Belum"}
                            onChange={handleAnswerCampakLanjut}
                            checked={imun_campaklanjut === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_campaklanjut"
                            value={"Akan"}
                            onChange={handleAnswerCampakLanjut}
                            checked={imun_campaklanjut === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_campaklanjut"
                            value={"Sudah"}
                            onChange={handleAnswerCampakLanjut}
                            checked={imun_campaklanjut === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
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
            <Link to="Imunisasi3" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundColor: "#fe8d3b", border: "0" }} block>
                <FontAwesomeIcon icon={faChevronLeft} />
                Sebelumnya
              </Button>
            </Link>
          </Col>
          <Col sm="4">
            <Button
              style={{ backgroundColor: "#46d0fe", border: "0" }}
              type="submit"
              block
            >
              Pemeriksaan Vitamin A <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default Imunisasi;
