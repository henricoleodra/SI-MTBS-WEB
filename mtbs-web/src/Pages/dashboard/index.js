import React, { useState } from "react";
import { LayoutDashboard, Dashboard } from "../../Containers";

const Index = (props) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <LayoutDashboard
      isOpen={isOpen}
      page={"dashboard"}
      setIsOpen={setIsOpen}
      title={"Dashboard"}
      userName={"Admin MTBS"}
    >
      <Dashboard />
    </LayoutDashboard>
  );
};

export default Index;
