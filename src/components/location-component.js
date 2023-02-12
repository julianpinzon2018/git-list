import styled from "styled-components";
import FollowComponent from "./follow-component";

const LocationComponentStyled = styled.div`
  .info {
    color: var(--grey-2);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column-reverse;
    .info {
      margin: 0.2rem;
    }
  }
`;

function LocationComponent({
  newBackButton,

  twitter_username,
  blog,
  bio,
  followers,
  following,
  location,
}) {
  return (
    <LocationComponentStyled>
      <FollowComponent newBackButton={newBackButton} />
      <div>
        <p className="bio info">{bio}</p>
        <p className="followers info">
          • {followers}
          <span>followers</span>
          <span> •</span>
          {following}
          <span>following</span>
        </p>
        <p className="location info">• {location}</p>
        <a className="info info" href={blog} target="_blank" rel="noreferrer">
          {blog}
        </a>
        <a
          className="info"
          href={`http://twitter.com/${twitter_username}`}
          target="_blanck"
          rel="noreferrer"
        >
          @{twitter_username}
        </a>
      </div>
    </LocationComponentStyled>
  );
}

export default LocationComponent;
