const initState = {
  namaAnak: "",
  namaIbu: "",
  jenisKelamin: null,
  tglLahir: "",
  provinsiAnak: "",
  kotaAnak: "",
  alamatAnak: "",
  rtAnak: "",
  rwAnak: "",
  kelDesAnak: "",
  kecamatanAnak: "",
  umurAnak: "",
  umurAnakBulan: "",
  umurAnakTahun: "",
  displayUmurAnak: "",
  suhuAnak: "",
  beratAnak: "",
  tinggiAnak: "",
  kunjunganKe: "",
  keluhanAwal: "",
  tglKunjungan: "",
  kunjunganPertama: null,
  kunjunganUlang: null,
  pilihDataAnak: false,
};

const dataAnakReducer = (state = initState, action) => {
  switch (action.type) {
    case "NAMA_ANAK":
      return Object.assign({}, state, {
        namaAnak: action.answer,
      });
    case "NAMA_IBU":
      return Object.assign({}, state, {
        namaIbu: action.answer,
      });
    case "JENIS_KELAMIN":
      return Object.assign({}, state, {
        jenisKelamin: action.answer,
      });
    case "TANGGAL_LAHIR":
      return Object.assign({}, state, {
        tglLahir: action.answer,
      });
    case "PROVINSI":
      return Object.assign({}, state, {
        provinsiAnak: action.answer,
      });
    case "KOTA":
      return Object.assign({}, state, {
        kotaAnak: action.answer,
      });
    case "ALAMAT":
      return Object.assign({}, state, {
        alamatAnak: action.answer,
      });
    case "RT":
      return Object.assign({}, state, {
        rtAnak: action.answer,
      });
    case "RW":
      return Object.assign({}, state, {
        rwAnak: action.answer,
      });
    case "KELURAHAN_DESA":
      return Object.assign({}, state, {
        kelDesAnak: action.answer,
      });
    case "KECAMATAN":
      return Object.assign({}, state, {
        kecamatanAnak: action.answer,
      });
    case "SUHU_ANAK":
      return Object.assign({}, state, {
        suhuAnak: action.answer,
      });
    case "BERAT_ANAK":
      return Object.assign({}, state, {
        beratAnak: action.answer,
      });
    case "TINGGI_ANAK":
      return Object.assign({}, state, {
        tinggiAnak: action.answer,
      });
    case "UMUR_ANAK":
      return Object.assign({}, state, {
        umurAnak: action.answer,
      });
    case "UMUR_ANAK_BULAN":
      return Object.assign({}, state, {
        umurAnakBulan: action.answer,
      });
    case "UMUR_ANAK_TAHUN":
      return Object.assign({}, state, {
        umurAnakTahun: action.answer,
      });
    case "DISPLAY_UMUR_ANAK":
      return Object.assign({}, state, {
        displayUmurAnak: action.answer,
      });
    case "KUNJUNGAN_KE":
      return Object.assign({}, state, {
        kunjunganKe: action.answer,
      });
    case "KELUHAN_AWAL":
      return Object.assign({}, state, {
        keluhanAwal: action.answer,
      });
    case "TANGGAL_KUNJUNGAN":
      return Object.assign({}, state, {
        tglKunjungan: action.answer,
      });
    case "KUNJUNGAN_PERTAMA":
      return Object.assign({}, state, {
        kunjunganPertama: action.answer,
      });
    case "KUNJUNGAN_ULANG":
      return Object.assign({}, state, {
        kunjunganUlang: action.answer,
      });
    case "PILIH_DATA_ANAK":
      return Object.assign({}, state, {
        pilihDataAnak: action.answer,
      });
    default:
      return state;
  }
};

export default dataAnakReducer;
