import React, { useState } from "react";
import {
  tab1,
  tab2,
  tab3,
} from "../../../../design-system/component/OurProgram/DataProgram";
import OurProgram from "../../../../design-system/component/OurProgram/OurProgram";
import { Line, Span, Warper } from "./Style";
export default function Tabs() {
  const [tab, setTab] = useState("tab1");
  const switchTab = (tab) => {
    setTab(tab);
  };
  return (
    <div>
      <Warper>
        <Span
          style={{ color: tab === "tab1" ? "red" : "" }}
          onClick={() => switchTab("tab1")}
        >
          First Day
        </Span>
        <Span
          style={{ color: tab === "tab2" ? "red" : "" }}
          onClick={() => switchTab("tab2")}
        >
          Seconde Day
        </Span>
        <Span
          style={{ color: tab === "tab3" ? "red" : "" }}
          onClick={() => switchTab("tab3")}
        >
          Thired Day
        </Span>
      </Warper>
      <Line />
      <div>
        {tab === "tab2"
          ? tab2.map((item) => {
              return (
                <OurProgram
                  key={item.id}
                  img={item.img}
                  alt={item.alt}
                  time={item.time}
                  location={item.location}
                  title={item.title}
                  by={item.by}
                  artical={item.artical}
                />
              );
            })
          : tab === "tab3"
          ? tab3.map((item) => {
              return (
                <OurProgram
                  key={item.id}
                  img={item.img}
                  alt={item.alt}
                  time={item.time}
                  location={item.location}
                  title={item.title}
                  by={item.by}
                  artical={item.artical}
                />
              );
            })
          : tab1.map((item) => {
              return (
                <OurProgram
                  key={item.id}
                  img={item.img}
                  alt={item.alt}
                  time={item.time}
                  location={item.location}
                  title={item.title}
                  by={item.by}
                  artical={item.artical}
                />
              );
            })}
      </div>
    </div>
  );
}
