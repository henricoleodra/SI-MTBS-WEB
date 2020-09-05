import {
    Beranda,
    ApaItuMTBS,
    DataAnak,
    PemeriksaanAnak,
    MulaiPemeriksaan,
    PencarianDataAnak,
    IsiDataAnak,
    MTBS
} from '../Pages';

const routes = [
    { path: '/ApaItuMTBS', component: ApaItuMTBS },
    { path: '/DataAnak', component: DataAnak },
    { path: '/PemeriksaanAnak', component: PemeriksaanAnak },
    { path: '/MulaiPemeriksaan', component: MulaiPemeriksaan },
    { path: '/PencarianDataAnak', component: PencarianDataAnak },
    { path: '/IsiDataAnak', component: IsiDataAnak },
    { path: '/MTBS', component: MTBS },
    { path: '/', component: Beranda },
];

export default routes;