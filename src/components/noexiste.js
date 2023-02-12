import styled from "styled-components";

const NoexisteStyled = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

function Noexiste() {
  return (
    <NoexisteStyled>
      <h2>There are no repositories</h2>
    </NoexisteStyled>
  );
}

export default Noexiste;
