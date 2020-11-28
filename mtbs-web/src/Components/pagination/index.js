import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { Wrapper } from "./style";

/* 
  PROPS USED:
  changePage
  currentPage
  numDataAnak
  totalDataAnak
*/

const Index = (props) => {
  const numOfPages = Math.ceil(props.totalDataAnak / props.numDataAnak);
  const pageNumbers = [];

  if (props.currentPage - 1 > 0) {
    pageNumbers.push(props.currentPage - 1);
  }
  pageNumbers.push(props.currentPage);
  if (props.currentPage + 1 <= numOfPages) {
    pageNumbers.push(props.currentPage + 1);
  }

  return (
    <Wrapper>
      <Row className="wrapper-pagination justify-content-center">
        <Col xs={3}>
          <Button
            color="link"
            className={`${props.currentPage === 1 ? "disabled" : ""}`}
            onClick={() => {
              props.changePage(props.currentPage - 1);
            }}
          >
            &lt; Sebelumnya
          </Button>
        </Col>
        <Col
          xs={1}
          className={`${
            props.currentPage <= 2 || numOfPages <= 2 ? "d-none" : ""
          }`}
        >
          <Button color="link" disabled>
            ...
          </Button>
        </Col>
        {pageNumbers.map((number) => (
          <Col key={number} xs={1}>
            <Button
              color="link"
              className={`button-pagination  ${
                props.currentPage === number ? "active" : ""
              } `}
              onClick={() => {
                props.changePage(number);
              }}
            >
              {number}
            </Button>
          </Col>
        ))}
        <Col
          xs={1}
          className={`${
            props.currentPage >= numOfPages - 1 || numOfPages <= 2
              ? "d-none"
              : ""
          }`}
        >
          <Button color="link" disabled>
            ...
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            color="link"
            className={`${props.currentPage === numOfPages ? "disabled" : ""}`}
            onClick={() => {
              props.changePage(props.currentPage + 1);
            }}
          >
            Selanjutnya &gt;
          </Button>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Index;
