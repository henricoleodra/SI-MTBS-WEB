const initState = {
  tbu: 0,
  batuk: 0,
  diare: 0,
  demam: 0,
  telinga: 0,
  gizi: 0,
  anemia: 0,
  hiv: 0,
  imunisasi: 0,
  vitamina: 0,
  keluhanlain: 0,
  pemberianmakanan: 0,
};

const flagReducer = (state = initState, action) => {
  switch (action.type) {
    case "FLAG_TBU":
      return Object.assign({}, state, {
        tbu: action.value,
      });
    case "FLAG_BATUK":
      return Object.assign({}, state, {
        batuk: action.value,
      });
    case "FLAG_DIARE":
      return Object.assign({}, state, {
        diare: action.value,
      });
    case "FLAG_DEMAM":
      return Object.assign({}, state, {
        demam: action.value,
      });
    case "FLAG_TELINGA":
      return Object.assign({}, state, {
        telinga: action.value,
      });
    case "FLAG_GIZI":
      return Object.assign({}, state, {
        gizi: action.value,
      });
    case "FLAG_ANEMIA":
      return Object.assign({}, state, {
        anemia: action.value,
      });
    case "FLAG_HIV":
      return Object.assign({}, state, {
        hiv: action.value,
      });
    case "FLAG_IMUNISASI":
      return Object.assign({}, state, {
        imunisasi: action.value,
      });
    case "FLAG_VITAMIN_A":
      return Object.assign({}, state, {
        vitamina: action.value,
      });
    case "FLAG_KELUHAN_LAIN":
      return Object.assign({}, state, {
        keluhanlain: action.value,
      });
    case "FLAG_PEMBERIAN_MAKANAN":
      return Object.assign({}, state, {
        pemberianmakanan: action.value,
      });
    default:
      return state;
  }
};

export default flagReducer;
