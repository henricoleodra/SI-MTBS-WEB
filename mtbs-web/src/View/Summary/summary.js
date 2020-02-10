import React from "react";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion
        title="Tanda Bahaya Umum"
        content="Penyakit Sangat Berat"
      />
      <Accordion
        title="Batuk/Sukar Bernafas"
        content="Pneumonia Berat"
      />
      <Accordion
        title="Diare"
        content="<p>Diare Dehidrasi Berat</p>"
      />
      <Accordion
        title="Masalah Telinga"
        content="<p>Telinga Sehat</p>"
      />
      <Accordion
        title="Status Gizi"
        content="<p>Gizi Sehat</p>"
      />
      <Accordion
        title="Anemia"
        content="<p>Anemia Berat</p>"
      />
      <Accordion
        title="Status HIV"
        content="<p>Terkena HIV</p>"
      />
      <Accordion
        title="Status Imunisasi"
        content="<p>Diberikan Polio 4 Hari Ini</p>"
      />
      <Accordion
        title="Vitamin A"
        content="<p>Vitamin A</p>"
      />
      <Accordion
        title="Keluhan Lain"
        content="<p>Sakit leher</p>"
      />
      <Accordion
        title="Pemberian Makan"
        content="<p>Sudah Baik</p>"
      />
    </div>
  );
}

export default App;