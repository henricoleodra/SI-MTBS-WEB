import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Example = () => (
  <div>
    <Button className="btn btn-light" id="toggler" style={{ marginBottom: '1rem' }}>
      Tanda Bahaya Umum
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Penyakit Berat
        </CardBody>
      </Card>
    </UncontrolledCollapse>
    <br></br>

    <Button className="btn btn-light" id="toggler2" style={{ marginBottom: '1rem' }}>
      Batuk/Sukar Bernapas
    </Button>
    <UncontrolledCollapse toggler="#toggler2">
      <Card>
        <CardBody>
          Batuk Berat
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Example;