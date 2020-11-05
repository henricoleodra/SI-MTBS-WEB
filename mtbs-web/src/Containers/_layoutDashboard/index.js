import React from "react";
import { SidebarDashboard, HeaderDashboard } from "../../Components";
import { Container } from "reactstrap";
import { Wrapper } from "./style";

const Index = (props) => {
  console.log(props.isOpen);
  return (
    <Wrapper style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <SidebarDashboard isOpen={props.isOpen} page={props.page} />
      <div className={`right ${props.isOpen ? "active" : ""}`}>
        <Container fluid className="min-vh-100 p-0">
          <HeaderDashboard isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
          <div className="wrapper-title text-muted py-2 px-3 mt-1">
            <h3>{props.title}</h3>
          </div>
          {props.children}
        </Container>
      </div>
    </Wrapper>
  );
};

export default Index;
