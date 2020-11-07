import React from "react";
import { Layout, Lobby } from "../../Containers";

const Index = () => {
  return (
    <Layout step={1} userName={"Petugas MTBS"} cur={"lobby"}>
      <Lobby />
    </Layout>
  );
};

export default Index;
