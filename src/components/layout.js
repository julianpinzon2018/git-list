import styled from "styled-components";

const LayoutStyled = styled.main`
  min-block-size: 100vh;
  margin: auto;
  padding-inline: 1.25rem;
  max-inline-size: 100%;
  padding-block: 2.5rem;
  padding-inline: 15%;
  overflow-x: hidden;
  @media screen and (min-width: 780px) {
    display: grid;
    grid-template-columns: 278px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
    grid-template-areas: "profile filters" "profile repo-list";
  }
  @media screen and (max-width: 1200px) {
    padding-inline: 1rem;
  }
  @media screen and (max-width: 780px) {
    padding-inline: 1rem;
  }
`;

function Layout({ children, newBackLight }) {
  return (
    <LayoutStyled
      style={{
        background: `${newBackLight}`,
      }}
    >
      {children}
    </LayoutStyled>
  );
}

export default Layout;
