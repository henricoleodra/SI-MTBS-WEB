import {
    Beranda,
    ApaItuMTBS,
    DataAnak,
    PemeriksaanAnak,
    MulaiPemeriksaan,
    PencarianDataAnak,
    IsiDataAnak1,
    IsiDataAnak2,
} from '../Pages';

import {
    MTBS
} from '../Containers';

const routes = [
    { path: '/ApaItuMTBS', component: ApaItuMTBS },
    { path: '/DataAnak', component: DataAnak },
    { path: '/PemeriksaanAnak', component: PemeriksaanAnak },
    { path: '/MulaiPemeriksaan', component: MulaiPemeriksaan },
    { path: '/PencarianDataAnak', component: PencarianDataAnak },
    { path: '/IsiDataAnak1', component: IsiDataAnak1 },
    { path: '/IsiDataAnak2', component: IsiDataAnak2 },
    { path: '/MTBS', component: MTBS },
    { path: '/', component: Beranda },
];

export default routes;