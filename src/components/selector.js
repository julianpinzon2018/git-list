import styled from "styled-components";

const SelectorStyled = styled.select`
  border: none;
  background-color: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  border-radius: 0.5rem;
  @media screen and (max-width: 780px) {
    width: 100%;
    block-size: 2rem;
  }
`;

function Selector({ children, setLanguage }) {
  function handleLanguage(e) {
    if (setLanguage) {
      setLanguage(e.target.value);
    }
  }
  return <SelectorStyled onChange={handleLanguage}>{children}</SelectorStyled>;
}

export default Selector;
