import React from "react";
import { SideBar, Summary } from "../../Components";

const Index = (props) => {
  let location = props.location.split("/");

  if (location[location.length - 1] === "") {
    location = location[location.length - 2];
  } else {
    location = location[location.length - 1];
  }

  return (
    <div className="d-flex w-100">
      <SideBar location={location} />
      <div className="w-75">{props.children}</div>
      {(() => {
        let x = location;
        if (x !== "Klasifikasi" && x !== "Tindakan")
          return (
            <div className="mt-2 w-25 mr-1">
              <Summary />
            </div>
          );
      })()}
    </div>
  );
};

export default Index;
