import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Index = ( props ) => {

  useEffect(()=>{
    console.log(props.tindakan);
  })
  return (
    <div>
      <div className="d-flex justify-content-center flex-column ml-4">
          <div>
            <h4 className="text-center">{props.judul}</h4>
          </div>
          <div>
            <h6 className="text-center">Hasil Klasifikasi: {props.klasifikasi}</h6>
          </div>
      </div>
      <Container className="ml-5 w-100">
          <Row className="pt-3">
              <Col sm={1} className={`bg-` + props.status + ` indicator border-left border-top border-bottom border-right`}></Col>
              <Col sm={10}>
                 {
                    props.tindakan.map((tindakan, idx) => {
                      return(
                        <Row key={idx}>
                          <Col sm={12} className="border-right border-top border-left border-bottom">
                              <h6 className="py-2">{tindakan}</h6>
                          </Col>
                        </Row>
                      )
                    })
                 }
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Index;