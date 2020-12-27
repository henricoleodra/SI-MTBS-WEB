import React from "react";
import { NavBar, Footer } from "../../Components";

const Index = (props) => {
  return (
    <div>
      <NavBar step={props.step} cur={props.cur} userName={props.userName} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Index;
