const dataanak = async function (req, res, next) {
  const dataAnak = Array(
    {
      id: 0,
      nama: "John Doe Leodra Yabai Kirito Kazuto",
      ibu: "Jane Doe Leodra Yabai Harahap",
      tanggallahir: "2020-01-31",
      jeniskelamin: "Laki-laki",
      provinsi: 1,
      alamat: "Contoh Alamat",
      rtrw: "Contoh RT/RW",
      keldes: "Contoh Kelurahan/Desa",
      kotkec: "Contoh Kota/Kecamatan",
    },
    {
      id: 1,
      nama: "Yovan",
      ibu: "Navoy",
      tanggallahir: "2020-02-21",
      jeniskelamin: "Perempuan",
    },
    {
      id: 2,
      nama: "Naomi",
      ibu: "Shinna",
      tanggallahir: "2018-05-05",
      jeniskelamin: "Laki-laki",
    },
    {
      id: 3,
      nama: "Ignatius",
      ibu: "Chritiana",
      tanggallahir: "2020-05-25",
      jeniskelamin: "Perempuan",
    },
    {
      id: 4,
      nama: "Archgod",
      ibu: "Gafties",
      tanggallahir: "2020-02-05",
      jeniskelamin: "Laki-laki",
    },
    {
      id: 5,
      nama: "Friska",
      ibu: "Michael",
      tanggallahir: "2020-02-21",
      jeniskelamin: "Perempuan",
    },
    {
      id: 6,
      nama: "Rachel",
      ibu: "Florencia",
      tanggallahir: "2020-02-29",
      jeniskelamin: "Perempuan",
    },
    {
      id: 7,
      nama: "Lydia",
      ibu: "Mutiara",
      tanggallahir: "2020-09-30",
      jeniskelamin: "Perempuan",
    },
    {
      id: 8,
      nama: "Harry",
      ibu: "Senjaya",
      tanggallahir: "2020-08-22",
      jeniskelamin: "Laki-laki",
    },
    {
      id: 9,
      nama: "Kenny",
      ibu: "Sonya",
      tanggallahir: "2020-02-01",
      jeniskelamin: "Perempuan",
    },
    {
      id: 10,
      nama: "Tifani",
      ibu: "Novi",
      tanggallahir: "2020-03-11",
      jeniskelamin: "Perempuan",
    },
    {
      id: 11,
      nama: "Kiki",
      ibu: "Tanza",
      tanggallahir: "2020-04-15",
      jeniskelamin: "Perempuan",
    },
    {
      id: 12,
      nama: "Susan",
      ibu: "Onya",
      tanggallahir: "2020-05-25",
      jeniskelamin: "Laki-laki",
    },
    {
      id: 13,
      nama: "Henry",
      ibu: "Rico",
      tanggallahir: "2020-08-30",
      jeniskelamin: "Perempuan",
    },
    {
      id: 14,
      nama: "Leo",
      ibu: "Tobias",
      tanggallahir: "2020-02-01",
      jeniskelamin: "Laki-laki",
    },
    {
      id: 15,
      nama: "Ujang",
      ibu: "Mole",
      tanggallahir: "2020-08-22",
      jeniskelamin: "Perempuan",
    },
    {
      id: 16,
      nama: "Kungfu",
      ibu: "Wombat",
      tanggallahir: "2020-01-17",
      jeniskelamin: "Laki-laki",
    },
    {
      id: 17,
      nama: "Christian",
      ibu: "Saul",
      tanggallahir: "2020-01-01",
      jeniskelamin: "Perempuan",
    },
    {
      id: 18,
      nama: "Gerald",
      ibu: "Patrick",
      tanggallahir: "2020-02-01",
      jeniskelamin: "Laki-laki",
    },
    {
      id: 19,
      nama: "Fidelis",
      ibu: "Gonzales",
      tanggallahir: "2020-04-20",
      jeniskelamin: "Perempuan",
    }
  );
  res.json(dataAnak);
};

const infoanak = async function (req, res, next) {
  var tmp = req.params.id;
  console.log(tmp);
  const data = {
    nama: "Harry Senjaya",
    ibu: "Friska Christiana",
    jeniskelamin: "Laki-laki",
    tanggallahir: "2019-04-20",
    alamat: "Jln. Holis No.4",
  };
  res.json(data);
};

module.exports = {
  dataanak,
  infoanak,
};
