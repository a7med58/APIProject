import React from "react";
import Slider from "./Slider";
import { Creative, CreativeSpeakersWrapper } from "./Style";

export default function CreativeSpeakersComponent() {
  return (
    <CreativeSpeakersWrapper>
      <div className="container">
        <Creative>Speaker</Creative>
      </div>
      <div>
        <Slider />
      </div>
    </CreativeSpeakersWrapper>
  );
}
