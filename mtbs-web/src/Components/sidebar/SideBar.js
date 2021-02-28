import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavItem,
  Nav,
  Row,
  Col,
  NavLink,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import SideBarItem from "./sidebarItem/SideBarItem";
import { Wrapper } from "./style";
import "../../Assets/style/style.css";

let bgColor = {
  backgroundColor: "#46d0fe",
};

let bold = {
  fontWeight: "bold",
};

const SideBar = (props) => {
  // var x = window.location.pathname;
  // console.log(x);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  let url = props.location.replace(/[0-9]/g, "");

  const compStatus = useSelector((state) => state.compStatus);
  const klasifikasiTBU = useSelector((state) => state.klasifikasiTBU);
  const klasifikasiBatuk = useSelector((state) => state.klasifikasiBatuk);
  const dataAnak = useSelector((state) => state.dataAnak);
  const klasifikasiDiare = useSelector((state) => state.klasifikasiDiare);
  const klasifikasiDemam = useSelector((state) => state.klasifikasiDemam);
  const klasifikasiTelinga = useSelector((state) => state.klasifikasiTelinga);
  const klasifikasiGizi = useSelector((state) => state.klasifikasiGizi);
  const klasifikasiAnemia = useSelector((state) => state.klasifikasiAnemia);
  const klasifikasiHIV = useSelector((state) => state.klasifikasiHIV);
  const klasifikasiImunisasi = useSelector(
    (state) => state.klasifikasiImunisasi
  );
  const klasifikasiVitaminA = useSelector((state) => state.klasifikasiVitaminA);
  const klasifikasiKeluhanLain = useSelector(
    (state) => state.klasifikasiKeluhanLain
  );
  const klasifikasiPemberianMakanan = useSelector(
    (state) => state.klasifikasiPemberianMakanan
  );
  const flag = useSelector((state) => state.flag);

  // useEffect(() => {
  //     console.log(klasifikasiGizi.gizi_status);
  // }, []);

  let sidebar = [
    {
      title: "Tanda Bahaya Umum",
      link: "TandaBahayaUmum1",
      active: url === "TandaBahayaUmum",
      color:
        klasifikasiTBU.tbu_status === null ? "dark" : klasifikasiTBU.tbu_status,
      disabled: compStatus.tandabahayaumum,
      status: flag.tbu,
    },
    {
      title: "Batuk",
      link: "BatukYaTidak",
      active: url === "BatukYaTidak" || url === "Batuk",
      color:
        klasifikasiBatuk.bsb_status === null
          ? "dark"
          : klasifikasiBatuk.bsb_status,
      disabled: compStatus.batuk,
      status: flag.batuk,
    },
    {
      title: "Diare",
      link: "DiareYaTidak",
      active: url === "DiareYaTidak" || url === "Diare",
      color:
        klasifikasiDiare.diare_status === null
          ? "dark"
          : klasifikasiDiare.diare_status,
      disabled: compStatus.diare,
      status: flag.diare,
    },
    {
      title: "Demam",
      link: "DemamYaTidak",
      active:
        url === "DemamYaTidak" ||
        url === "DemamDaerah" ||
        url === "DemamKonfirmasiDaerah" ||
        url === "DemamPerhatian" ||
        url === "Demam",
      color:
        klasifikasiDemam.demam_status === null
          ? "dark"
          : klasifikasiDemam.demam_status,
      disabled: compStatus.demam,
      status: flag.demam,
    },
    {
      title: "Telinga",
      link: "TelingaYaTidak",
      active: url === "TelingaYaTidak" || url === "Telinga",
      color:
        klasifikasiTelinga.telinga_status === null
          ? "dark"
          : klasifikasiTelinga.telinga_status,
      disabled: compStatus.telinga,
      status: flag.telinga,
    },
    {
      title: "Gizi",
      link: "Gizi1",
      active: url === "Gizi",
      color:
        klasifikasiGizi.gizi_status === null
          ? "dark"
          : klasifikasiGizi.gizi_status,
      disabled: compStatus.gizi,
      status: flag.gizi,
    },
    {
      title: "Anemia",
      link: "Anemia",
      active: url === "Anemia",
      color:
        klasifikasiAnemia.anemia_status === null
          ? "dark"
          : klasifikasiAnemia.anemia_status,
      disabled: compStatus.anemia,
      status: flag.anemia,
    },
    {
      title: "HIV",
      link: "HIV1",
      active: url === "HIV",
      color:
        klasifikasiHIV.hiv_status === null ? "dark" : klasifikasiHIV.hiv_status,
      disabled: compStatus.hiv,
      status: flag.hiv,
    },
    {
      title: "Imunisasi",
      link: "Imunisasi1",
      active: url === "Imunisasi",
      color:
        klasifikasiImunisasi.imun_status === null
          ? "dark"
          : klasifikasiImunisasi.imun_status,
      disabled: compStatus.imunisasi,
      status: flag.imunisasi,
    },
    {
      title: "Vitamin A",
      link: "VitaminA",
      active: url === "VitaminA",
      color:
        klasifikasiVitaminA.vit_status === null
          ? "dark"
          : klasifikasiVitaminA.vit_status,
      disabled: compStatus.vitamina,
      status: flag.vitamina,
    },
    {
      title: "Keluhan Lain",
      link: "KeluhanLain",
      active: url === "KeluhanLain",
      color:
        klasifikasiKeluhanLain.kel_status === null
          ? "dark"
          : klasifikasiKeluhanLain.kel_status,
      disabled: compStatus.keluhanlain,
      status: flag.keluhanlain,
    },
    {
      title: "Pemberian Makanan",
      link: "PemberianMakanan1",
      active: url === "PemberianMakanan",
      color:
        klasifikasiPemberianMakanan.pemberianMakanan_status === null
          ? "dark"
          : klasifikasiPemberianMakanan.pemberianMakanan_status,
      disabled: compStatus.makan,
      status: flag.pemberianmakanan,
    },
  ];

  let jenisKelamin = dataAnak.jenisKelamin === true ? "Laki-laki" : "Perempuan";
  const renderSideBar = sidebar.map((curr, index) => {
    return (
      <SideBarItem
        key={"sidebar" + index}
        title={curr.title}
        link={curr.link}
        active={curr.active}
        color={curr.color}
        disabled={curr.disabled}
        location={url}
        status={curr.status}
      />
    );
  });

  return (
    <Wrapper className="w-25">
      <div className="wrapper-sidebar p-0">
        <Nav vertical className="w-100">
          <NavItem>
            <NavLink
              href="#"
              className="btn btn-light text-left pr-0 pl-0 pt-2 pb-0"
              style={{ backgroundColor: "#46d0fe" }}
              onClick={toggle}
            >
              <Row className="">
                <Col sm="2" className="mt-1">
                  <FontAwesomeIcon icon={faBaby} className="fa-3x" />
                </Col>
                <Col sm="10" className="">
                  <div>
                    <Label>Nama Anak :</Label>{" "}
                    <strong>{dataAnak.namaAnak}</strong>
                  </div>
                  <div>
                    <Label>Click disini untuk Detail Anak!</Label>
                  </div>
                </Col>
              </Row>
            </NavLink>
          </NavItem>
          {renderSideBar}
          <NavItem>
            <NavLink
              className="btn pb-1 pt-1 btn-light text-left"
              id="klasifikasi"
              tag={Link}
              active={props.location === "Klasifikasi"}
              to="Klasifikasi"
            >
              <Row className="">
                <Col xs="12 pl-2 pr-0">
                  <span className="text-left fontSideBar">Klasifikasi</span>
                </Col>
              </Row>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="btn pb-1 pt-1 btn-light text-left"
              id="tindakan"
              tag={Link}
              disabled={compStatus.tindakan}
              to="Tindakan"
            >
              <Row className="">
                <Col xs="12 pl-2 pr-0">
                  <span className="text-left fontSideBar">Tindakan</span>
                </Col>
              </Row>
            </NavLink>
          </NavItem>
        </Nav>

        <Modal isOpen={modal} toggle={toggle} size="lg" centered>
          <ModalHeader toggle={toggle} style={bgColor}>
            Profile Anak
          </ModalHeader>
          <ModalBody className="d-flex">
            <div>
              <div>
                <Label style={bold}>Nama Anak :</Label> {dataAnak.namaAnak}
              </div>
              <div>
                <Label style={bold}>Nama Ibu :</Label> {dataAnak.namaIbu}
              </div>
              <div>
                <Label style={bold}>Jenis Kelamin :</Label> {jenisKelamin}
              </div>
              <div>
                <Label style={bold}>Tanggal Lahir: </Label> {dataAnak.tglLahir}
              </div>
              <div>
                <Label style={bold}>Umur: </Label> {dataAnak.displayUmurAnak}
              </div>
              <div>
                <Label style={bold}>Suhu: </Label> {dataAnak.suhuAnak} °C
              </div>
            </div>
            <hr
              style={{ backgroundColor: "#75C9E6", width: 1, height: "20vh" }}
              className="ml-5 mr-5"
            />
            <div className="ml-0">
              <div>
                <Label style={bold}>Berat Badan: </Label> {dataAnak.beratAnak}{" "}
                Kg
              </div>
              <div>
                <Label style={bold}>Tinggi Badan: </Label> {dataAnak.tinggiAnak}{" "}
                cm
              </div>
              <div>
                <Label style={bold}>Keluhan Anak: </Label>{" "}
                {dataAnak.keluhanAwal}
              </div>
              <div>
                <Label style={bold}>Kunjungan Ke: </Label>{" "}
                {dataAnak.kunjunganKe}
              </div>
              <div>
                <Label style={bold}>Alamat: </Label> {dataAnak.alamatAnak}
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-center">
            <Button
              style={{ backgroundColor: "#fe8d3b", border: "0" }}
              onClick={toggle}
            >
              Tutup
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    </Wrapper>
  );
};

export default SideBar;
