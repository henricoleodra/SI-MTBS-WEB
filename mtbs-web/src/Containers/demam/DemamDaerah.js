import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Actions
import { AnsDemamChange } from "../../Actions";

import Classifier from "../../Classifier/Classifier";

var outlineColor = {
  borderColor: "#46d0fe",
};

const DemamDaerah = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansDemam = useSelector((state) => state.ansDemam);
  let [demam_isDaerahEndemis, set_demam_isDaerahEndemis] = useState(
    ansDemam.demam_isDaerahEndemis
  );

  const flag = useSelector((state) => state.flag);
  const ansTBU = useSelector((state) => state.ansTBU);
  const ansBatuk = useSelector((state) => state.ansBatuk);
  const ansDiare = useSelector((state) => state.ansDiare);
  const ansTelinga = useSelector((state) => state.ansTelinga);
  const ansGizi = useSelector((state) => state.ansGizi);
  const ansAnemia = useSelector((state) => state.ansGizi);
  const ansHIV = useSelector((state) => state.ansHIV);

  const handleDaerahEndemis = (event) => {
    set_demam_isDaerahEndemis(event.target.value);
    dispatch(AnsDemamChange("DAERAH_ENDEMIS", event.target.value));
  };

  const handleSubmit = (event) => {
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
    if (demam_isDaerahEndemis === "Tinggi") {
      history.push("DemamPerhatian");
    } else if (demam_isDaerahEndemis === "Rendah") {
      history.push("Demam1");
    } else {
      history.push("DemamKonfirmasiDaerah");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12">
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Demam</h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "510px" }}>
            <Row className="justify-content-around">
              <Card style={outlineColor} className="text-center w-75">
                <CardBody>
                  <CardTitle className="h5">
                    <span className="font-weight-bold">Tentukan! </span>Tipe
                    endemis dari daerah
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="1"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn" style={{ left: "10px" }}>
                          Tinggi
                          <Input
                            type="radio"
                            name="radio2"
                            value={"Tinggi"}
                            onChange={handleDaerahEndemis}
                            checked={demam_isDaerahEndemis === "Tinggi"}
                            required
                          />
                          <span
                            style={{ left: "6px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn" style={{ left: "10px" }}>
                          Rendah
                          <Input
                            type="radio"
                            name="radio2"
                            value={"Rendah"}
                            onChange={handleDaerahEndemis}
                            checked={demam_isDaerahEndemis === "Rendah"}
                          />
                          <span
                            style={{ left: "-1px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn" style={{ left: "10px" }}>
                          Non Endemis
                          <Input
                            type="radio"
                            name="radio2"
                            value={"Non Endemis"}
                            onChange={handleDaerahEndemis}
                            checked={demam_isDaerahEndemis === "Non Endemis"}
                          />
                          <span
                            style={{ left: "-1px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1"></Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </div>
        </div>
        <Row className="justify-content-between px-5 py-0">
          <Col sm="4">
            <Link to="DemamYaTidak" style={{ textDecoration: "none" }}>
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
export default DemamDaerah;
