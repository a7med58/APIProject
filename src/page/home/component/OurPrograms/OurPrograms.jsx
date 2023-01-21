import React from "react";
import { Description, OurProgramsWarper, Programs, TabsWrapper } from "./Style";
import Tabs from "./Tabs";

export default function OurPrograms() {
  return (
    <div className="container">
      <OurProgramsWarper>
        <div>
          <Programs>Evet Time Table</Programs>
          <Description>This Table For All Data to Event</Description>
        </div>
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
      </OurProgramsWarper>
    </div>
  );
}
