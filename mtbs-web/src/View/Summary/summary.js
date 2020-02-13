import React from "react";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <div class="rujuk">
        <h3>Rujuk Segera</h3>
      </div>
      <br></br>
      <div class="penyakit" id="tbu">
        <Accordion
          title="Tanda Bahaya Umum"
          content="<h6>Penyakit Sangat Berat</h6>"
        />
      </div>
      <div class="penyakit" id="bsb">
        <Accordion
          title="Batuk/Sukar Bernafas"
          content="Pneumonia Berat"
        />
      </div>
      <div class="penyakit" id="diare">
        <Accordion
          title="Diare"
          content="<p>Diare Dehidrasi Berat</p>"
        />
      </div>
      <div class="penyakit" id="telinga">
        <Accordion
          title="Masalah Telinga"
          content="<p>Telinga Sehat</p>"
        />
      </div>
      <div class="penyakit" id="gizi">
        <Accordion
          title="Status Gizi"
          content="<p>Gizi Sehat</p>"
        />
      </div>
      <div class="penyakit" id="anemia">
        <Accordion
          title="Anemia"
          content="<p>Anemia Berat</p>"
        />
      </div>
      <div class="penyakit" id="hiv">
        <Accordion
          title="Status HIV"
          content="<p>Terkena HIV</p>"
        />
      </div>
      <div class="penyakit" id="imunisasi">
        <Accordion
          title="Status Imunisasi"
          content="<p>Diberikan Polio 4 Hari Ini</p>"
        />
      </div>
      <div class="penyakit" id="vita">
        <Accordion
          title="Vitamin A"
          content="<p>Vitamin A</p>"
        />
      </div>
      <div class="penyakit" id="keluhanlain">
        <Accordion
          title="Keluhan Lain"
          content="<p>Sakit leher</p>"
        />
      </div>
      <div class="penyakit" id="pemberianmakan">
        <Accordion
          title="Pemberian Makan"
          content="<p>Sudah Baik</p>"
        />
      </div>
    </div>
  );
}

export default App;