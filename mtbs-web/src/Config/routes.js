import {
  Beranda,
  Dashboard,
  Statistik,
  Trend,
  Login,
  Lobby,
  ApaItuMTBS,
  DataAnak,
  RiwayatAnak,
  MulaiPemeriksaan,
  PemilihanDataAnak,
  PencarianDataAnak,
  IsiDataAnak,
  MTBS,
} from "../Pages";

const routes = [
  { path: "/ApaItuMTBS", component: ApaItuMTBS },
  { path: "/DataAnak/:id", component: DataAnak },
  { path: "/RiwayatAnak/:ida&:idp", component: RiwayatAnak },
  { path: "/MulaiPemeriksaan", component: MulaiPemeriksaan },
  { path: "/PemilihanDataAnak", component: PemilihanDataAnak },
  { path: "/PencarianDataAnak", component: PencarianDataAnak },
  { path: "/IsiDataAnak", component: IsiDataAnak },
  { path: "/MTBS", component: MTBS },
  { path: "/Login", component: Login },
  { path: "/Lobby", component: Lobby },
  { path: "/Dashboard", component: Dashboard },
  { path: "/Statistik", component: Statistik },
  { path: "/Trend", component: Trend },
  { path: "/", component: Beranda },
];

export default routes;
