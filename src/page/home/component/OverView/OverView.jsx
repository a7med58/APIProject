import React from "react";
import dataOverview from "../../../../design-system/component/Overview/DataOverview";
import OverviewComponent from "../../../../design-system/component/Overview/Overview";
import { OverViewContainer, OverViewWarper } from "./Style";

export default function OverView() {
  return (
    <OverViewWarper>
      <div className="container">
        <OverViewContainer>
          {dataOverview.map((item) => {
            return (
              <OverviewComponent
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                by={item.by}
              />
            );
          })}
        </OverViewContainer>
      </div>
    </OverViewWarper>
  );
}
