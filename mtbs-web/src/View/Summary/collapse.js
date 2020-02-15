import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Badge } from 'reactstrap';

const Example = () => (
  <div className="w-100">
    <div>
      <h2><Badge href="#" className="p-3" color="danger" style={{ width: '100%'}} pill>Rujuk Segera</Badge></h2>
    </div>
    <br></br>

    <div>
      <Button  className="btn" color="success" id="toggler" style={{ width: '100%', marginBottom: '5px' }}>
        Tanda Bahaya Umum
      </Button>
      <UncontrolledCollapse toggler="#toggler" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Tidak Ada Penyakit Berat
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
    
    <div>
      <Button className="btn" color="warning" id="toggler2" style={{ width: '100%', marginBottom: '5px' }}>
        Batuk
      </Button>
      <UncontrolledCollapse toggler="#toggler2" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Pneumonia
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
    
    <div>
      <Button className="btn" color="danger" id="toggler3" style={{ width: '100%', marginBottom: '5px' }}>
        Diare
      </Button>
      <UncontrolledCollapse toggler="#toggler3" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Diare Dehidrasi Berat
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler4" style={{ width: '100%', marginBottom: '5px' }}>
        Demam
      </Button>
      <UncontrolledCollapse toggler="#toggler4" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Tidak Deman
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler5" style={{ width: '100%', marginBottom: '5px' }}>
        Telinga
      </Button>
      <UncontrolledCollapse toggler="#toggler5" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Tidak Ada Gangguan
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler6" style={{ width: '100%', marginBottom: '5px' }}>
        Anemia
      </Button>
      <UncontrolledCollapse toggler="#toggler6" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Tidak Anemia
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler7" style={{ width: '100%', marginBottom: '5px' }}>
        HIV
      </Button>
      <UncontrolledCollapse toggler="#toggler7" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Terkena HIV
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler8" style={{ width: '100%', marginBottom: '5px' }}>
       Imunisasi
      </Button>
      <UncontrolledCollapse toggler="#toggler8" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Beri Polio 4
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler9" style={{ width: '100%', marginBottom: '5px' }}>
        Vitamin A
      </Button>
      <UncontrolledCollapse toggler="#toggler9" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Beri Vitamin A
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler10" style={{ width: '100%', marginBottom: '5px' }}>
        Keluhan Lain
      </Button>
      <UncontrolledCollapse toggler="#toggler10" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Tidak Ada Keluhan
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>

    <div>
      <Button className="btn" color="secondary" id="toggler11" style={{ width: '100%', marginBottom: '5px' }}>
        Pemberian Makan
      </Button>
      <UncontrolledCollapse toggler="#toggler11" style={{width: '100%'}}>
        <Card>
          <CardBody>
            Sudah Baik
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
    
  </div>
);

export default Example;