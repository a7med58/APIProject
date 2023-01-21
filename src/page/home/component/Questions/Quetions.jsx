import React from "react";
import Acording from "./Acording/Acording";
import { ColoredTitle, RegisterContiner, Text, Title } from "./Style";

export default function Quetions() {
  return (
    <div className="container">
      <RegisterContiner>
        <Title>
          Answer <ColoredTitle>For Youer Quetions</ColoredTitle>
        </Title>
        <Text>Register Here To Follow All News </Text>
      </RegisterContiner>
      <Acording />
    </div>
  );
}
