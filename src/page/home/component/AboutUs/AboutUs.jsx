import React from "react";
import aboutus from "../../../../../src/shared/assets/aboutus.jpg";
import { AboutUsWrapper, DivOne, DivTow, P, Span } from "./Style";
export default function AboutUs() {
  return (
    <div className="container">
      <AboutUsWrapper>
        <DivOne>
          <Span>
            Dear All This Is First Company For Security and Programing{" "}
          </Span>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            cupiditate illo exercitationem dicta omnis provident velit, non
            necessitatibus eaque laboriosam obcaecati tempora quaerat molestiae
            animi possimus quibusdam eos ea natus?
          </P>
        </DivOne>
        <DivTow>
          <img src={aboutus} alt="Imag About Us" />
        </DivTow>
      </AboutUsWrapper>
    </div>
  );
}
