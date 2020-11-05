import React from "react";
import { Row, Col } from "reactstrap";
import { Wrapper } from "./style";

const Index = (props) => {
  return (
    <Wrapper>
      <div className="trend-wrapper">
        <Row>
          <Col>
            <h4 className="px-2 pt-2 text-muted trend-title font-weight-light">
              Trend
            </h4>
            <hr className="my-0" />
          </Col>
        </Row>
        {/* Isi Disini */}
      </div>
    </Wrapper>
  );
};

export default Index;
