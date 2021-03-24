const klasifikasiAnemia = (ansAnemia) => {
  if (ansAnemia.anemia_isPucat == "sangatPucat") {
    const ans = {
      hasilKlasifkasi: "Anemia berat",
      statusKlasifikasi: "danger",
    };
    return ans;
  } else if (ansAnemia.anemia_isPucat == "agakPucat") {
    const ans = {
      hasilKlasifkasi: "Anemia",
      statusKlasifikasi: "warning",
    };
    return ans;
  } else {
    const ans = {
      hasilKlasifkasi: "Tidak anemia",
      statusKlasifikasi: "success",
    };
    return ans;
  }
};

module.exports = {
  klasifikasiAnemia,
};
