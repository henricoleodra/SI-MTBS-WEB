const classifierDiare = (ansDiare) => {
  var status = null;
  var klasifikasi = null;
  var berat = 0;
  var ringan = 0;
  var dehidrasi = null;
  if (ansDiare.diare_tinjaBerdarah != null) {
    if (ansDiare.diare_tinjaBerdarah === true) {
      if (status === null) {
        status = 2;
      } else {
        if (status != 1) {
          status = 2;
        }
      }
      if (klasifikasi === null) {
        klasifikasi = "Disentri";
      } else {
        klasifikasi += "\nDisentri";
      }
    }
  }
  if (ansDiare.diare_isAnakTidakSadar != null) {
    if (ansDiare.diare_isAnakTidakSadar === true) {
      berat++;
    }
  }
  if (ansDiare.diare_isMataCekung != null) {
    if (ansDiare.diare_isMataCekung === true) {
      berat++;
      ringan++;
    }
  }
  if (ansDiare.diare_rewelMudahMarah != null) {
    if (ansDiare.diare_rewelMudahMarah === true) {
      ringan++;
    }
  }
  if (ansDiare.diare_isNotMinum != null) {
    if (ansDiare.diare_isNotMinum === true) {
      berat++;
    } else {
      ringan++;
    }
  }
  if (ansDiare.diare_kulitPerutLambat != null) {
    if (ansDiare.diare_kulitPerutLambat === "SangatLambat") {
      berat++;
    } else if (ansDiare.diare_kulitPerutLambat === "Lambat") {
      ringan++;
    }
  }
  if (berat >= 2) {
    status = 1;
    dehidrasi = true;
    if (klasifikasi === null) {
      klasifikasi = "Diare dehidrasi berat";
    } else {
      klasifikasi += "\nDiare dehidrasi berat";
    }
  } else if (ringan >= 2) {
    dehidrasi = true;
    if (status === null) {
      status = 2;
    } else {
      if (status != 1) {
        status = 2;
      }
    }
    if (klasifikasi === null) {
      klasifikasi = "Diare dehidrasi ringan/sedang";
    } else {
      klasifikasi += "\nDiare dehidrasi ringan/sedang";
    }
  } else {
    dehidrasi = false;
    if (status === null) {
      status = 3;
    } else {
      if (status != 1 && status != 2) {
        status = 3;
      }
    }
    if (klasifikasi === null) {
      klasifikasi = "Diare tanpa dehidrasi";
    } else {
      klasifikasi += "\nDiare tanpa dehidrasi";
    }
  }
  if (dehidrasi != null) {
    if (ansDiare.diare_berapaLama !== "") {
      if (ansDiare.diare_berapaLama >= 14 && dehidrasi === true) {
        status = 1;
        if (klasifikasi === null) {
          klasifikasi = "Diare persisten berat";
        } else {
          klasifikasi += "\nDiare persisten berat";
        }
      } else {
        if (status === null) {
          status = 2;
        } else {
          if (status != 1) {
            status = 2;
          }
        }
        if (klasifikasi === null && ansDiare.diare_berapaLama >= 14) {
          klasifikasi = "Diare Persisten";
        } else if (klasifikasi !== null && ansDiare.diare_berapaLama >= 14) {
          klasifikasi += "\nDiare Persisten";
        }
      }
    }
  }

  if (klasifikasi === "Diare tanpa dehidrasi") {
    status = 3;
  }

  var resStatus = "";
  if (status === 1) {
    resStatus = "danger";
  } else if (status === 2) {
    resStatus = "warning";
  } else if (status === 3) {
    resStatus = "success";
  } else {
    resStatus = "dark";
  }
  const ans = {
    hasilKlasifikasi: klasifikasi,
    statusKlasifikasi: resStatus,
  };
  return ans;
};

module.exports = {
  classifierDiare,
};
