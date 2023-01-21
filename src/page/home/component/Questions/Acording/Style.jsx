import styled from "@emotion/styled";

export const Warper = styled("div")`
  label: Warper;
  display: flex;
  hight: 500px;
  justify-content: center;
  align-items: center;
`;
export const AcordingWarper = styled("div")`
  label: AcordingWarper;
  width: 70%;
`;
export const Item = styled("div")`
  label: Item;
  box-shadow: 3px 4px 6px -4px #777;
`;
export const Title = styled("div")`
  label: Title;
  padding: 0 1rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  background-color: whitesmoke;
  align-items: center;
  justify-content: space-between;
`;
export const H2 = styled("div")`
  label: H2;
  font-size: 1rem;
  color: black;
  font-weight: bold;
`;
export const Content = styled("div")`
  label: Content;
  padding: 0 1rem;
  max-height: 0;
  overflow: hidden;
  transition: 0.6s all cubic-bez(1, 0, 1, 0);
  &.show {
    height: auto;
    max-height: 9999px;
    transition: 0.6s all cubic-bez(0, 1, 0, 1);
  }
`;
export const P = styled("p")`
  label: P;
  color: #565151;
  padding-bottom: 0.5rem;
  font-size: 1rem;
`;
