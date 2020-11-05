import React, { useState } from "react";
import { LayoutDashboard, Trend } from "../../Containers";

const Index = (props) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <LayoutDashboard
      isOpen={isOpen}
      page={"trend"}
      setIsOpen={setIsOpen}
      title={"Trend"}
    >
      <Trend />
    </LayoutDashboard>
  );
};

export default Index;
