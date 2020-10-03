const Point = require('./point');
const Interpolator = require('./interpolator');

const classifierGizi = (ansGizi) => {
    console.log(ansGizi);   
    if( (ansGizi.gizi_tampakSangatKurus === true || ansGizi.gizi_pembengkakanKeduaPunggungKakiAtauTangan === true || 
        ansGizi.gizi_BBmenurutPBAtauTB === "BB/PB (TB) < -3 SD (Sangat Kurus)" || ansGizi.gizi_lingkarLenganAtas === "LiLA < 11,5 cm") &&
        (ansGizi.gizi_tandaBahayaUmum === true || ansGizi.gizi_batuk === true || ansGizi.gizi_diare === true || ansGizi.gizi_demam === true || ansGizi.gizi_telinga === true || ansGizi.gizi_masalahPemberianASI === true)
        ){
            const ans = {
                hasilKlasifikasi: 'Sangat Kurus Dengan Komplikasi',
                statusKlasifikasi: 'danger', 
            }
            return ans;
    }
    else if(ansGizi.gizi_tampakSangatKurus === true || ansGizi.gizi_BBmenurutPBAtauTB === "BB/PB (TB) < -3 SD (Sangat Kurus)" || ansGizi.gizi_lingkarLenganAtas === "LiLA < 11,5 cm"){
        const ans = {
            hasilKlasifikasi: 'Sangat Kurus Tanpa Komplikasi',
            statusKlasifikasi: 'warning', 
        }
        return ans;

    }
    else if(ansGizi.gizi_BBmenurutPBAtauTB === "-3 SD ≥ BB/PB (TB) ≤ -2 SD (Kurus)" || ansGizi.gizi_lingkarLenganAtas === "LiLA < 11,5 cm - < 12,5 cm"){
        const ans = {
            hasilKlasifikasi: 'Kurus',
            statusKlasifikasi: 'warning', 
        }
        return ans;
    }
    else{
        const ans = {
            hasilKlasifikasi: 'Gizi Normal',
            statusKlasifikasi: 'success', 
        }
        return ans;
    }

};

const perhitunganSD = (dataAnak) => {
    let jenisKelamin = dataAnak.jenisKelamin;
    let beratBadan = dataAnak.beratAnak;
    let tinggiBadan = dataAnak.tinggiAnak;
    let min3 = null;
    let min2 = null;
    let min1 = null;
    let nol = null;
    let satu = null;
    let dua = null
    let tiga = null

    if (jenisKelamin === 1) {
        min3 = new Interpolator(Array(new Point(65, 6), new Point(120, 17)), tinggiBadan);
        min2 = new Interpolator(Array(new Point(65, 6.5), new Point(120, 18.5)), tinggiBadan);
        min1 = new Interpolator(Array(new Point(65, 7), new Point(120, 20.5)), tinggiBadan);
        nol = new Interpolator(Array(new Point(65, 7.5), new Point(120, 22.5)), tinggiBadan);
        satu = new Interpolator(Array(new Point(65, 8), new Point(120, 24.5)), tinggiBadan);
        dua = new Interpolator(Array(new Point(65, 9), new Point(120, 27)), tinggiBadan);
        tiga = new Interpolator(Array(new Point(65, 9.5), new Point(120, 30)), tinggiBadan);

    } else {
        min3 = new Interpolator(Array(new Point(65, 5.5), new Point(120, 17.25)), tinggiBadan);
        min2 = new Interpolator(Array(new Point(65, 6), new Point(120, 18.25)), tinggiBadan);
        min1 = new Interpolator(Array(new Point(65, 6.5), new Point(120, 20.5)), tinggiBadan);
        nol = new Interpolator(Array(new Point(65, 7), new Point(120, 23)), tinggiBadan);
        satu = new Interpolator(Array(new Point(65, 8), new Point(120, 35)), tinggiBadan);
        dua = new Interpolator(Array(new Point(65, 8.75), new Point(120, 28)), tinggiBadan);
        tiga = new Interpolator(Array(new Point(65, 9.5), new Point(120, 31)), tinggiBadan);
    }

    let hasilmin3 = min3.interpolateCalculate(tinggiBadan);
    let hasilmin2 = min2.interpolateCalculate(tinggiBadan);
    let hasilmin1 = min1.interpolateCalculate(tinggiBadan);
    let hasilnol = nol.interpolateCalculate(tinggiBadan);
    let hasil1 = satu.interpolateCalculate(tinggiBadan);
    let hasil2 = dua.interpolateCalculate(tinggiBadan);
    let hasil3 = tiga.interpolateCalculate(tinggiBadan);

    let hasilSD = "";

    // hasil yang mengenai standar deviasi
    let nilaiSD = "";


    if (beratBadan < hasilmin3) {
        hasilSD = "BB/PB (TB) < -3 SD (Sangat Kurus)";
        nilaiSD = "Dengan nilai -3 SD : " + hasilmin3.toFixed(2) + "kg";
    } else if (beratBadan >= hasilmin3 && beratBadan <= hasilmin2) {
        hasilSD = "-3 SD ≥ BB/PB (TB) ≤ -2 SD (Kurus)";
        nilaiSD = "Dengan nilai -3 SD : " + hasilmin3.toFixed(2) + "kg dan nilai -2 SD : " + hasilmin2.toFixed(2) + "kg";
    } else
    if (beratBadan >= hasilmin2 && beratBadan <= hasil2) {
        hasilSD = "-2 SD ≥ BB/PB (TB) ≤ 2 SD (Normal)";
        nilaiSD = "Dengan nilai -2 SD : " + hasilmin2.toFixed(2) + " kg dan nilai 2 SD : " + hasil2.toFixed(2) + "kg";
    } else if (beratBadan > hasil2) {
        hasilSD = "BB/PB (TB) > 2 SD (Gemuk)";
        nilaiSD = "Dengan nilai 2 SD : " + hasil2.toFixed(2) + "kg";
    }

    const ans = {
        hasilSDGizi: hasilSD,
        nilaiSDGizi: nilaiSD,
    }
    return ans;
}

module.exports = {
    classifierGizi,
    perhitunganSD
};