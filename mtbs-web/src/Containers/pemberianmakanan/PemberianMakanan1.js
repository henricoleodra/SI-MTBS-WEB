import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Label, Form, Card, CardBody, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  compStatusChange,
  FlagChange,
  KlasifikasiPemberianMakananChange,
} from "../../Actions";

let outlineColor = {
  borderColor: "#46d0fe",
};

const PemberianMakanan1 = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataAnak = useSelector((state) => state.dataAnak);
  const ansGizi = useSelector((state) => state.ansGizi);
  const klasifikasiTBU = useSelector((state) => state.klasifikasiTBU);
  const klasifikasiBatuk = useSelector((state) => state.klasifikasiBatuk);
  const klasifikasiDiare = useSelector((state) => state.klasifikasiDiare);
  const klasifikasiDemam = useSelector((state) => state.klasifikasiDemam);
  const klasifikasiTelinga = useSelector((state) => state.klasifikasiTelinga);
  const klasifikasiGizi = useSelector((state) => state.klasifikasiGizi);
  const klasifikasiAnemia = useSelector((state) => state.klasifikasiAnemia);
  const klasifikasiHIV = useSelector((state) => state.klasifikasiHIV);

  let [rujukSegera, set_rujukSegera] = useState("Tidak");

  useEffect(() => {
    let cek = false;
    if (klasifikasiTBU.tbu_status === "danger") {
      cek = true;
    } else if (
      klasifikasiBatuk.bsb_status === "danger" ||
      klasifikasiBatuk.bsb_status === "warning"
    ) {
      cek = true;
    } else if (
      klasifikasiDiare.diare_status === "danger" ||
      klasifikasiDiare.diare_status === "warning"
    ) {
      cek = true;
    } else if (
      klasifikasiDemam.demam_status === "danger" ||
      klasifikasiDemam.demam_status === "warning"
    ) {
      cek = true;
    } else if (
      klasifikasiTelinga.telinga_status === "danger" ||
      klasifikasiTelinga.telinga_status === "warning"
    ) {
      cek = true;
    } else if (
      klasifikasiGizi.gizi_status === "danger" ||
      klasifikasiGizi.gizi_status === "warning"
    ) {
      cek = true;
    } else if (
      klasifikasiHIV.hiv_status === "danger" ||
      klasifikasiHIV.hiv_status === "warning"
    ) {
      cek = true;
    }
    if (cek) {
      set_rujukSegera("Ya");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let umur = dataAnak.umurAnak / 12;
    dispatch(
      KlasifikasiPemberianMakananChange("PEMBERIANMAKANAN_STATUS", "info")
    );
    if (
      (umur < 2 ||
        ansGizi.gizi_BBmenurutPBAtauTB ===
          "-3 SD ≥ BB/PB (TB) ≤ -2 SD (Kurus)" ||
        klasifikasiAnemia.anemia_status === "danger") &&
      rujukSegera === "Tidak"
    ) {
      dispatch(FlagChange("FLAG_PEMBERIAN_MAKANAN", 1));
      history.push("PemberianMakanan2");
    } else {
      dispatch(compStatusChange("TINDAKAN"));
      dispatch(FlagChange("FLAG_PEMBERIAN_MAKANAN", 2));
      history.push("Klasifikasi");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12">
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Pemberian Makanan</h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "510px" }}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-justify w-75 mt-3">
                <CardBody>
                  <Row className="justify-content-center">
                    <Label>Umur: {dataAnak.umurAnak}</Label>
                  </Row>
                  <Row className="justify-content-center">
                    <Label>Gizi: {ansGizi.gizi_BBmenurutPBAtauTB}</Label>
                  </Row>
                  <Row className="justify-content-center">
                    <Label>
                      Anemia:{" "}
                      {klasifikasiAnemia.anemia_status === "danger"
                        ? "Ya"
                        : " Tidak"}
                    </Label>
                  </Row>
                  <Row className="justify-content-center">
                    <Label>Anak akan dirujuk segera: {rujukSegera}</Label>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </div>
        </div>
        <Row className="justify-content-between px-5 py-0">
          <Col sm="4">
            <Link to="TandaBahayaUmum1" style={{ textDecoration: "none" }}>
              <Button block className="button-orange">
                <FontAwesomeIcon icon={faChevronLeft} /> Pemeriksaan Keluhan
                Lain
              </Button>
            </Link>
          </Col>
          <Col sm="4">
            <Button type="submit" block className="button-pepper-mint">
              Selanjutnya <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default PemberianMakanan1;
