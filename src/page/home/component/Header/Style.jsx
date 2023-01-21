import styled from "@emotion/styled";
import header from "../../../../shared/assets/header/h3.png";
export const HeaderWarper = styled("div")`
  label: HeaderWarper;
  height: 600px;
  padding: 20px 0;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${header}) fixed;
`;

export const H3 = styled("h3")`
  label: H3;
  color: Red;
  font-size: 2rem;
  padding-top: 250px;
`;
export const H1 = styled("h1")`
  label: H1;
  color: Red;
  font-size: 2.8rem;
`;

export const Learn = styled("button")`
  label: Learn;
  color: black;
  margin-right: 1rem;
  padding: 1rem 3rem;
  background: white;
  font-size: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    background: peru;
  }
  transition: all 0.3ms;
`;
export const Reg = styled("button")`
  label: Reg;
  color: white;
  padding: 1rem 3rem;
  background: peru;
  font-size: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: black;
    background: red;
  }
  transition: all 0.3ms;
`;
