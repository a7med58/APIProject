import React from "react";
import {
  ColoredTitle,
  FormWarper,
  RegButton,
  RegisterContiner,
  RegisterWarper,
  RInput,
  Text,
  Title,
} from "./Style";

export default function RegisterHere() {
  return (
    <RegisterWarper>
      <div className="container">
        <RegisterContiner>
          <div style={{ width: "60%" }}>
            <Title>Register</Title>
            <ColoredTitle>Here</ColoredTitle>
            <Text>Register Here To Follow All News </Text>
          </div>

          <FormWarper style={{ width: "35%" }}>
            <RInput type="text" placeholder="First Name" />
            <RInput type="text" placeholder="Last Name" />
            <RInput type="number" placeholder="Phone Number" />
            <RInput type="email" placeholder="Email Address" />
          </FormWarper>
        </RegisterContiner>
        <div style={{ textAlign: "right" }}>
          <RegButton>Register</RegButton>
        </div>
      </div>
    </RegisterWarper>
  );
}
