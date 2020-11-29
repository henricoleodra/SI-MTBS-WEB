import React from "react";
import {
  IsiDataAnak1,
  IsiDataAnak2,
  KonfirmasiDataAnak,
} from "../../Containers";

const Index = (props) => {
  const Content = () => {
    switch (props.location.pathname) {
      case `/IsiDataAnak/1`:
        return <IsiDataAnak1 />;
      case `/IsiDataAnak/2`:
        return <IsiDataAnak2 />;
      case `/IsiDataAnak/Konfirmasi`:
        return <KonfirmasiDataAnak />;
      default:
        console.log(props.location.pathname);
        return "404 not found";
    }
  };

  return <Content />;
};

export default Index;
