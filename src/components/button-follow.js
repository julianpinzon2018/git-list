import styled from "styled-components";
import { isValidElement } from "react";

const ButtonFollowStyled = styled.button`
  font: var(--button);
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  /* background-color: var(--buttonBG); */
  /* background: transparent; */
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

function ButtonFollow({ text, link, className, icon, newBackButton }) {
  const component = link ? "a" : "button";
  let IconComponent = null;
  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }
  return (
    <ButtonFollowStyled
      style={{
        background: `${newBackButton}`,
      }}
      as={component}
      href={link}
      className={className}
    >
      {IconComponent}
      {text}
    </ButtonFollowStyled>
  );
}

export default ButtonFollow;
