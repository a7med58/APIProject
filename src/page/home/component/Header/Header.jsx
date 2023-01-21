import React from "react";
import { H1, H3, HeaderWarper, Learn, Reg } from "./Style";

export default function Header() {
  return (
    <HeaderWarper>
      <H3>Event Date </H3>
      <H1>Event Name</H1>
      <Learn>Reg For Event</Learn>
      <Reg>Learn More</Reg>
    </HeaderWarper>
  );
}
