import styled from "styled-components";
import Language from "./language";
import Icon from "./icon";

const RepoItemStyled = styled.div`
  padding-block: 1rem;
  border-block-end: 1px solid var(--grey);
  display: flex;
  gap: 1rem;
  flex-direction: column;
  &:last-child {
    border-block-end: none;
  }
  .title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  .public {
    border: 1px solid var(--grey);
    padding-inline: 0.5rem;
    padding-block: 0.125rem;
    font: var(--caption-regular);
    border-radius: 0.5rem;
  }
  .description {
    margin: 0;
    font: var(--body2-regular);
  }
  .topicList {
    display: flex;
    gap: 0.25rem;
  }
  .topicItem {
    font: var(--caption-madium);
    color: var(--primary);
    background-color: #15223a;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    border-radius: 2rem;
    overflow: hidden;
  }
  .details {
    display: flex;
    gap: 1rem;
    font: var(--caption-regular);
  }
  .details-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--grey-1);
    & span::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 780px) {
    /* font-size: 0.7rem; */
    .topicList {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, auto));
      font-size: 0.8rem;
    }
  }
`;

function RepoItem({ ...props }) {
  const updateAt = new Date(props.updated_at);
  const today = new Date();
  const diffMillseconds = updateAt - today;
  const diffDays = Math.ceil(diffMillseconds / (1000 * 60 * 60 * 24));
  const timeAgo = new Intl.RelativeTimeFormat("es").format(diffDays, "days");
  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url}>{props.name}</a>
        {!props.private ? <span className="public">Public</span> : null}
      </h3>
      {props.description ? (
        <p className="description">{props.description}</p>
      ) : null}
      {props.topics.length ? (
        <div className="topicList">
          {props.topics.map((item) => (
            <span className="topicItem" key={item}>
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <div className="details">
        {props.language ? <Language name={props.language} /> : null}
        <span className="details-item">
          <Icon name="start" />
          <span>{props.stargazers_count}</span>
        </span>
        <span className="details-item">
          <Icon name="branch" />
          <span>{props.forks_count}</span>
        </span>
        <span className="details-item">
          <span>{timeAgo}</span>
        </span>
      </div>
    </RepoItemStyled>
  );
}

export default RepoItem;
