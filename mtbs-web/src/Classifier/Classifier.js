import axios from "axios";
import {
  KlasifikasiTBUChange,
  KlasifikasiBatukChange,
  KlasifikasiDiareChange,
  KlasifikasiDemamChange,
  KlasifikasiTelingaChange,
  KlasifikasiGiziChange,
  KlasifikasiAnemiaChange,
  KlasifikasiHIVChange,
  AnsDemamChange,
  AnsGiziChange,
} from "../Actions";

const Classifier = async (
  cur,
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
) => {
  if (flag.tbu !== 0 && cur !== "tbu") {
    const tbu = await axios.post(`http://localhost:8000/TBU`, {
      ansTBU: ansTBU,
    });
    dispatch(KlasifikasiTBUChange("TBU_KLASIFIKASI", tbu.data.hasilKlasifkasi));
    dispatch(KlasifikasiTBUChange("TBU_STATUS", tbu.data.statusKlasifikasi));
    if (tbu.data.statusKlasifikasi === "danger") {
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
  }
  if (ansBatuk.bsb === true && flag.batuk !== 0 && cur !== "batuk") {
    const batuk = await axios.post(`http://localhost:8000/Batuk`, {
      ansBatuk: ansBatuk,
    });
    dispatch(
      KlasifikasiBatukChange("BATUK_KLASIFIKASI", batuk.data.hasilKlasifikasi)
    );
    dispatch(
      KlasifikasiBatukChange("BATUK_STATUS", batuk.data.statusKlasifikasi)
    );
    if (
      batuk.data.statusKlasifikasi === "danger" ||
      batuk.data.statusKlasifikasi === "warning"
    ) {
      ansGizi.gizi_batuk = true;
      dispatch(AnsGiziChange("GIZI_BATUK", true));
    } else {
      ansGizi.gizi_batuk = false;
      dispatch(AnsGiziChange("GIZI_BATUK", false));
    }
  }
  if (ansDiare.diare === true && flag.diare !== 0 && cur !== "diare") {
    const diare = await axios.post(`http://localhost:8000/Diare`, {
      ansDiare: ansDiare,
    });
    dispatch(
      KlasifikasiDiareChange("DIARE_KLASIFIKASI", diare.data.hasilKlasifikasi)
    );
    dispatch(
      KlasifikasiDiareChange("DIARE_STATUS", diare.data.statusKlasifikasi)
    );
    if (
      diare.data.statusKlasifikasi === "danger" ||
      diare.data.statusKlasifikasi === "warning"
    ) {
      ansGizi.gizi_diare = true;
      dispatch(AnsGiziChange("GIZI_DIARE", true));
    } else {
      ansGizi.gizi_diare = false;
      dispatch(AnsGiziChange("GIZI_DIARE", false));
    }
  }
  if (ansDemam.demam === true && flag.demam !== 0 && cur !== "demam") {
    console.log(flag.demam);
    const demam = await axios.post(`http://localhost:8000/Demam`, {
      ansDemam: ansDemam,
    });
    dispatch(
      KlasifikasiDemamChange("DEMAM_KLASIFIKASI", demam.data.hasilKlasifikasi)
    );
    dispatch(
      KlasifikasiDemamChange("DEMAM_STATUS", demam.data.statusKlasifikasi)
    );
    if (
      demam.data.statusKlasifikasi === "danger" ||
      demam.data.statusKlasifikasi === "warning"
    ) {
      ansGizi.gizi_demam = true;
      dispatch(AnsGiziChange("GIZI_DEMAM", true));
    } else {
      ansGizi.gizi_demam = false;
      dispatch(AnsGiziChange("GIZI_DEMAM", false));
    }
  }
  if (ansTelinga.telinga === true && flag.telinga !== 0 && cur !== "telinga") {
    const telinga = await axios.post(`http://localhost:8000/Telinga`, {
      ansTelinga: ansTelinga,
    });
    dispatch(
      KlasifikasiTelingaChange(
        "TELINGA_KLASIFIKASI",
        telinga.data.hasilKlasifikasi
      )
    );
    dispatch(
      KlasifikasiTelingaChange("TELINGA_STATUS", telinga.data.statusKlasifikasi)
    );
    if (
      telinga.data.statusKlasifikasi === "danger" ||
      telinga.data.statusKlasifikasi === "warning"
    ) {
      ansGizi.gizi_telinga = true;
      dispatch(AnsGiziChange("GIZI_TELINGA", true));
    } else {
      ansGizi.gizi_telinga = false;
      dispatch(AnsGiziChange("GIZI_TELINGA", false));
    }
  }
  if (flag.gizi !== 0 && cur !== "gizi") {
    axios
      .post(`http://localhost:8000/Gizi`, {
        ansGizi: ansGizi,
      })
      .then((res) => {
        dispatch(
          KlasifikasiGiziChange("GIZI_KLASIFIKASI", res.data.hasilKlasifikasi)
        );
        dispatch(
          KlasifikasiGiziChange("GIZI_STATUS", res.data.statusKlasifikasi)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (flag.anemia !== 0 && cur !== "anemia") {
    axios
      .post(`http://localhost:8000/Anemia`, {
        ansAnemia: ansAnemia,
      })
      .then((res) => {
        dispatch(
          KlasifikasiAnemiaChange(
            "ANEMIA_KLASIFIKASI",
            res.data.hasilKlasifkasi
          )
        );
        dispatch(
          KlasifikasiAnemiaChange("ANEMIA_STATUS", res.data.statusKlasifikasi)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (flag.hiv !== 0 && cur !== "hiv") {
    axios
      .post(`http://localhost:8000/HIV`, {
        ansHIV: ansHIV,
      })
      .then((res) => {
        dispatch(
          KlasifikasiHIVChange("HIV_KLASIFIKASI", res.data.hasilKlasifikasi)
        );
        dispatch(
          KlasifikasiHIVChange("HIV_STATUS", res.data.statusKlasifikasi)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default Classifier;
