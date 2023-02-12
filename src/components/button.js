import styled from "styled-components";
import { isValidElement } from "react";

const ButtonStyled = styled.button`
  font: var(--button);
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  background-color: var(--buttonBG);
  color: var(--white);
  border: 1px solid var(--grey);
  min-inline-size: 135px;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none !important;
  &:hover {
    background-color: var(--white);
    color: var(--button);
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex: 1;
  }
`;

function Button({ text, link, className, icon, newBackButton }) {
  const component = link ? "a" : "button";
  let IconComponent = null;
  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }
  return (
    <ButtonStyled
      style={{
        background: `${newBackButton}`,
      }}
      as={component}
      href={link}
      className={className}
    >
      {IconComponent}
      {text}
    </ButtonStyled>
  );
}

export const ButtonContrast = styled(Button)`
  background-color: var(--white);
  color: var(--buttonBG);
  &:hover {
    background-color: var(--buttonBG);
    color: var(--white);
  }
`;

export const ButtonRounded = styled(Button)`
  border: 5px solid red;
  min-inline-size: initial;
  border-radius: 50%;
  padding: 0.75rem;
  border: 2px solid var(--grey-1);
  background-color: var(--buttonBG);

  &:hover {
    background-color: var(--buttonBG);
    transform: scale(1.1);
  }
`;

export default Button;
