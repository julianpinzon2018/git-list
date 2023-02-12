import styled from "styled-components";

import FotoComponent from "./foto-component";

import LocationComponent from "./location-component";

const ProfileStyled = styled.div`
  grid-area: profile;
`;

function Profile(props, { newBackButton }) {
  const {
    name,
    login,
    avatar_url,
    twitter_username,
    blog,
    bio,
    followers,
    following,
    location,
  } = props;

  return (
    <ProfileStyled>
      <FotoComponent
        newBackButton={newBackButton}
        name={name}
        login={login}
        avatar_url={avatar_url}
      />
      <LocationComponent
        newBackButton={newBackButton}
        twitter_username={twitter_username}
        blog={blog}
        bio={bio}
        followers={followers}
        following={following}
        location={location}
      />
    </ProfileStyled>
  );
}

export default Profile;
