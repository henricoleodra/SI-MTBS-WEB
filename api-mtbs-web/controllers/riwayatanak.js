const riwayatanak = async function (req, res, next) {
  const riwayatAnak = Array({
    id: 0,
    tanggal: "2020-01-31",
    keluhananak: ["batuk", "flu", "pusing"],
    hasilpemeriksaan: [
      {
        judul: "Tanda Bahaya Umum",
        status: "success",
        klasifikasi: "",
      },
      {
        judul: "Batuk",
        status: "success",
        klasifikasi: "Batuk bukan pneunomia",
      },
      {
        judul: "Diare",
        status: "danger",
        klasifikasi: "Diare dehidrasi berat",
      },
      {
        judul: "Demam",
        status: "warning",
        klasifikasi: "Malaria",
      },
      {
        judul: "Telinga",
        status: "success",
        klasifikasi: "Tidak ada infeksi telinga",
      },
      {
        judul: "Gizi",
        status: "warning",
        klasifikasi: "Sangat kurus tanpa kompilikasi",
      },
      {
        judul: "Anemia",
        status: "success",
        klasifikasi: "Tidak anemia",
      },
      {
        judul: "HIV",
        status: "success",
        klasifikasi: "Infeksi HIV terkonfirmasi",
      },
    ],
  });
  res.json(riwayatAnak);
};

const detailriwayatanak = async function (req, res, next) {
  const detailRiwayat = {
    id: 0,
    tanggal: "2020-01-31",
    keluhananak: ["batuk", "flu", "pusing"],
    hasilpemeriksaan: [
      {
        judul: "Tanda Bahaya Umum",
        status: "success",
        klasifikasi: "",
      },
      {
        judul: "Batuk",
        status: "success",
        klasifikasi: "Batuk bukan pneunomia",
      },
      {
        judul: "Diare",
        status: "danger",
        klasifikasi: "Diare dehidrasi berat",
      },
      {
        judul: "Demam",
        status: "warning",
        klasifikasi: "Malaria",
      },
      {
        judul: "Telinga",
        status: "success",
        klasifikasi: "Tidak ada infeksi telinga",
      },
      {
        judul: "Gizi",
        status: "warning",
        klasifikasi: "Sangat kurus tanpa kompilikasi",
      },
      {
        judul: "Anemia",
        status: "success",
        klasifikasi: "Tidak anemia",
      },
      {
        judul: "HIV",
        status: "success",
        klasifikasi: "Infeksi HIV terkonfirmasi",
      },
    ],
  };
  res.json(detailRiwayat);
};

module.exports = {
  riwayatanak,
  detailriwayatanak,
};
