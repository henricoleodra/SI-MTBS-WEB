const initState = {
  diare: null,
  diare_berapaLama: "",
  diare_tinjaBerdarah: null,
  diare_isAnakTidakSadar: null,
  diare_rewelMudahMarah: null,
  diare_isMataCekung: null,
  diare_isNotMinum: null,
  diare_kulitPerutLambat: null,
};

const ansDiareReducer = (state = initState, action) => {
  switch (action.type) {
    case "DIARE":
      return Object.assign({}, state, {
        diare: action.answer,
      });
    case "BERAPA_LAMA_DIARE":
      return Object.assign({}, state, {
        diare_berapaLama: action.answer,
      });
    case "TINJA_BERDARAH":
      return Object.assign({}, state, {
        diare_tinjaBerdarah: action.answer,
      });
    case "ANAK_TIDAK_SADAR":
      return Object.assign({}, state, {
        diare_isAnakTidakSadar: action.answer,
      });
    case "REWEL_MUDAH_MARAH":
      return Object.assign({}, state, {
        diare_rewelMudahMarah: action.answer,
      });
    case "MATA_CEKUNG":
      return Object.assign({}, state, {
        diare_isMataCekung: action.answer,
      });
    case "TIDAK_MINUM":
      return Object.assign({}, state, {
        diare_isNotMinum: action.answer,
      });
    case "KULIT_PERUT_LAMBAT":
      return Object.assign({}, state, {
        diare_kulitPerutLambat: action.answer,
      });
    case "RESET_DIARE":
      return Object.assign({}, state, initState);
    default:
      return state;
  }
};

export default ansDiareReducer;
