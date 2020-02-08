import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup} from "reactstrap";

const TandaBahayaUmum = (props) => {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
        cSelected.push(selected);
        } else {
        cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }
    return (
        <div>
          <h5>Tidak bisa minum/menyusu</h5>
          <ButtonGroup className="sm-2">
            <Button color="primary" onClick={() => setRSelected('Ya')} active={rSelected === 'Ya'}>Ya</Button>
          </ButtonGroup>
          <ButtonGroup className="sm-2">
            <Button color="primary" onClick={() => setRSelected('Tidak')} active={rSelected === 'Tidak'}>Tidak</Button>
          </ButtonGroup>
          <p>Terpilih: {rSelected}</p>
        </div>
      );
}

export default TandaBahayaUmum