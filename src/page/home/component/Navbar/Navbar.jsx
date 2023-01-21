import React from "react";
import NavItems from "./NavItems";
import { LinksWarper, NavbarWarper, Navcontainer, Navtitle } from "./Style";
export default function Navbar() {
  return (
    <NavbarWarper>
      <div className="container">
        <Navcontainer>
          <Navtitle>The Eagle </Navtitle>
          <LinksWarper>
            <NavItems />
          </LinksWarper>
        </Navcontainer>
      </div>
    </NavbarWarper>
  );
}
