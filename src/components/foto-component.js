import styled from "styled-components";

const FotoComponentStyled = styled.div`
  grid-area: a;

  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
    width: 278px;
    height: 278px;
  }
  .name {
    font: var(--headline1);
    /* color: var(--white); */
    margin: 0;
    margin-block-end: 0.5rem;
  }
  .username {
    margin-block: 0.5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }
  @media screen and (max-width: 780px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    .avatar {
      width: 100px;
      height: auto;
      margin: 0;
    }
  }
`;

function FotoComponent({ name, avatar_url, login, newBackButton }) {
  return (
    <FotoComponentStyled>
      <img src={avatar_url} className="avatar" alt="" />
      <div>
        <p className="name">{name}</p>
        <p className="username">{login}</p>
      </div>
    </FotoComponentStyled>
  );
}

export default FotoComponent;
