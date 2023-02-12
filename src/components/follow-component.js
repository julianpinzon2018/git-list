import styled from "styled-components";
import Button from "./button";
import Icon from "./icon";
// import ButtonFollow from "./button-follow";

const FollowComponentStyled = styled.div`
  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }

  @media screen and (max-width: 780px) {
    .buttons {
      justify-content: space-between;
    }
  }
`;

function FollowComponent({ newBackButton }) {
  return (
    <FollowComponentStyled>
      <div className="buttons">
        <Button text="Follow" link="#" />

        <Button
          newBackButton={newBackButton}
          text="Sponsor"
          icon={<Icon size={24} name="heart" color="var(--pink)" />}
        />
      </div>
    </FollowComponentStyled>
  );
}

export default FollowComponent;
