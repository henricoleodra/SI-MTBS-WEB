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
import { useDispatch, useSelector } from "react-redux";
import {
  faCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Actions
import {
  KlasifikasiKeluhanLain,
  AnsKeluhanLainChange,
  compStatusChange,
} from "../../Actions";

let outlineColor = {
  borderColor: "#46d0fe ",
};

const Keluhan = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansKeluhanLain = useSelector((state) => state.ansKeluhanLain);
  let [keluhan_adaTidak, set_keluhan_adaTidak] = useState(
    ansKeluhanLain.keluhan_adaTidak
  );
  let [keluhan_isiKeluhan, set_isiKeluhan] = useState(
    ansKeluhanLain.keluhan_isiKeluhan === null
      ? ""
      : ansKeluhanLain.keluhan_isiKeluhan
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(KlasifikasiKeluhanLain("KELUHAN_KLASIFIKASI", ""));
    dispatch(KlasifikasiKeluhanLain("KELUHAN_STATUS", "info"));
    history.push("PemberianMakanan1");
    dispatch(compStatusChange("MAKAN"));
  };

  const handleAnswer1 = (event) => {
    if (event.target.value === "1") {
      set_keluhan_adaTidak(true);
      dispatch(AnsKeluhanLainChange("ADA_KELUHAN", true));
    } else if (event.target.value === "2") {
      set_keluhan_adaTidak(false);
      dispatch(AnsKeluhanLainChange("ADA_KELUHAN", false));
      set_isiKeluhan("");
    }
  };

  const handleAnswer2 = (event) => {
    set_isiKeluhan(event.target.value);
    dispatch(AnsKeluhanLainChange("ISI_KELUHAN", event.target.value));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12">
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#46d0fe " }} />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Keluhan Lain</h3>
            <hr
              style={{
                color: "#41E8B3",
                backgroundColor: "#46d0fe ",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "510px" }}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-center w-75">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Apakah ada keluhan lain?
                  </CardTitle>
                  <div>
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
                              checked={keluhan_adaTidak === true}
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
                              checked={keluhan_adaTidak === false}
                            />
                            <span
                              style={{ left: "0px" }}
                              className="checkmark"
                            ></span>
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <FormGroup check className="d-inline pr-2">
                      <Input
                        type="textarea"
                        value={keluhan_isiKeluhan}
                        onChange={handleAnswer2}
                        disabled={
                          keluhan_adaTidak === false ||
                          keluhan_adaTidak === null
                            ? true
                            : false
                        }
                      />
                    </FormGroup>
                  </div>
                </CardBody>
              </Card>
            </Row>
          </div>
        </div>

        <Row className="justify-content-between px-5 py-0">
          <Col sm="4">
            <Link to="VitaminA" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundColor: "#fe8d3b", border: "0" }} block>
                <FontAwesomeIcon icon={faChevronLeft} />
                Pemberian Vitamin A
              </Button>
            </Link>
          </Col>
          <Col sm="4">
            <Button
              style={{ backgroundColor: "#46d0fe ", border: "0" }}
              type="submit"
              block
            >
              Pemeriksaan Pemberian Makanan{" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default Keluhan;
