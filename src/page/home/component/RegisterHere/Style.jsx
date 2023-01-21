import styled from "@emotion/styled";
import reg from "../../../../shared/assets/regest.jpg";

export const RegisterWarper = styled("section")`
  label: RegisterWarper;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${reg}) fixed;
  height: 400px;
  padding: 4rem 0 2rem 0;
`;
export const FormWarper = styled("div")`
  label: FormWarper;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RegisterContiner = styled("div")`
  label: RegisterContiner;
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`;
export const Title = styled("span")`
  label: Title;
  color: white;
  font-size: 2rem;
  padding: 0.3rem;
`;
export const ColoredTitle = styled("span")`
  label: ColoredTitle;
  color: Red;
  font-size: 2rem;
`;
export const Text = styled("p")`
  label: Text;
  color: white;
  font-size: 1rem;
`;
export const RInput = styled("input")`
  label: input;
  color: white;
  font-size: 1rem;
  padding: 0.6rem;
  border-radius: 5px;
  border: 2px solid white;
  background-color: transparent;
  placeholder: {
    font-size: 1rem;
  }
`;
export const RegButton = styled("button")`
  label: RegButton;
  color: white;
  padding: 1rem 3rem;
  background: peru;
  font-size: 1rem;
  border: 1px solid white;
  border-radius: 25px;
  margin-top: 0.5rem;
  cursor: pointer;
  &:hover {
    color: black;
    background: red;
  }
  transition: all 0.3ms;
`;
