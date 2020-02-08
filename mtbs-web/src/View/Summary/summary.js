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
        content="
        <p>Diare Dehidrasi Berat</p>
        "
      />
    </div>
  );
}

export default App;