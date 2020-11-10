import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./style";

const Index = (props) => {
  return (
    <Wrapper>
      <Link to="DataAnak" className="text-dark text-decoration-none">
        <Card className="mb-3 wrapper-data-anak">
          <CardBody>
            <div className="d-flex justify-content-around">
              <div>
                <div>
                  <FontAwesomeIcon icon={faBaby} className="fa-3x" />
                </div>
              </div>
              <div className="ml-3">
                <div>
                  <Label className="font-weight-bold">Nama Anak : </Label>{" "}
                  {props.namaAnak}
                </div>
                <div>
                  <Label className="font-weight-bold">Nama Ibu : </Label>{" "}
                  {props.namaIbu}
                </div>
              </div>
              <div className="ml-3">
                <div>
                  <Label className="font-weight-bold">Jenis Kelamin : </Label>{" "}
                  {props.jenisKelamin}
                </div>
                <div>
                  <Label className="font-weight-bold">Tanggal Lahir : </Label>{" "}
                  {props.tanggalLahir}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Link>
    </Wrapper>
  );
};

export default Index;
