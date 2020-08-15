const initState = {
    //makanan : null,
    makanan_isDisusui: null,
    makanan_jumlahDisusui: null,
    makanan_malam: null,
    makanan_lainnya: null,
    makanan_lainnya_keterangan: "",
    makanan_lainnya_jumlah: null,
    makanan_lainnya_alat: null,
    //jika gizi kurus
    makanan_kurus_jumlah: null,
    makanan_kurus_makananTersendiri: null,
    makanan_kurus_keteranganCara: null,
    makanan_kurus_perubahanPemberian: null,
    makanan_kurus_perubahanPemberian_keterangan: null
}

const ansPemberianMakanan = (state = initState, action) => {
    switch (action.type) {
        case 'DISUSUI':
            return Object.assign({}, state, {
                makanan_isDisusui: action.answer
            });
        case 'JUMLAH_DISUSUI':
            return Object.assign({}, state, {
                makanan_jumlahDisusui: action.answer
            });
        case 'MALAM':
            return Object.assign({}, state, {
                makanan_malam: action.answer
            });
        case 'LAINNYA':
            return Object.assign({}, state, {
                makanan_lainnya: action.answer
            });
        case 'KETERANGAN_LAIN':
            return Object.assign({}, state, {
                makanan_lainnya_keterangan: action.answer
            });
        case 'JUMLAH_LAIN':
            return Object.assign({}, state, {
                makanan_lainnya_jumlah: action.answer
            });
        case 'ALAT_LAIN':
            return Object.assign({}, state, {
                makanan_lainnya_alat: action.answer
            });
        case 'KURUS_JUMLAH':
            return Object.assign({}, state, {
                makanan_kurus_jumlah: action.answer
            });
        case 'TERSENDIRI':
            return Object.assign({}, state, {
                makanan_kurus_makananTersendiri: action.answer
            });
        case 'KETERANGAN_CARA':
            return Object.assign({}, state, {
                makanan_kurus_keteranganCara: action.answer
            });
        case 'PERUBAHAN_PEMBERIAN':
            return Object.assign({}, state, {
                makanan_kurus_perubahanPemberian: action.answer
            });
        case 'PERUBAHAN_PEMBERIAN_KET':
            return Object.assign({}, state, {
                makanan_kurus_perubahanPemberian_keterangan: action.answer
            });
        default:
            return state;
    }
}

export default ansPemberianMakanan;