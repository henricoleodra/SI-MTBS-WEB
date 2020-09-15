import React from 'react';
import { 
    Row, 
    Col 
} from 'reactstrap';
import { Wrapper } from './style';

const Index = ( props ) => {
    let klasifikasi = props.klasifikasi.split("\n");
    return (
        <Wrapper>
            <Row className="wrapper-klasifikasi my-3">
                {
                    props.status === "success" ? 
                        <Col sm={1} className="bg-success indicator"></Col>
                    : props.status === "warning" ?
                        <Col sm={1} className="bg-warning indicator"></Col>
                    :
                        <Col sm={1} className="bg-danger indicator"></Col>
                }
                
                <Col sm={3} className="border-right">
                    <h3 className="title font-weight-bold mt-2">{props.title}</h3>
                </Col>
                <Col sm={6}>
                    {
                        klasifikasi.map((klasifikasi, idx) => {
                            if(klasifikasi!==""){
                                return <h3 key={idx} className="klasifikasi mt-2">{klasifikasi}</h3>
                            }
                        })
                    }
                </Col>
            </Row>
        </Wrapper>
    );
}

export default Index;