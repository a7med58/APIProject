import React, { useState } from "react";
import data from "./data";
import { AcordingWarper, Content, H2, Item, P, Title, Warper } from "./Style";
export default function Acording() {
  const [active, setActive] = useState(null);
  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };

  return (
    <div style={{ height: "150px", margin: "2rem 0" }}>
      <Warper>
        <AcordingWarper>
          {data.map((item, i) => {
            return (
              <Item key={i} onClick={() => toggle(i)}>
                <Title>
                  <H2>{item.question} ?</H2>
                  <span>{active === i ? "-" : "+"}</span>
                </Title>
                <Content className={active === i ? "show" : ""}>
                  <P>{item.answer1}</P>
                  <P>{item.answer2}</P>
                </Content>
              </Item>
            );
          })}
        </AcordingWarper>
      </Warper>
    </div>
  );
}
