import styled from "styled-components";
import RepoItem from "./repo-item";
import Noexiste from "./noexiste";

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function RepoList({ repoList, search, language }) {
  let list = repoList;

  if (language !== "" && language !== "todos") {
    list = list.filter((repo) => {
      if (repo.language) {
        return repo.language.toLowerCase() === language;
      }
    });
  } else {
    <Noexiste />;
  }
  search !== "" ? (
    (list = list.filter((item) => {
      return item.name.search(search.toLowerCase()) >= 0;
    }))
  ) : (
    <Noexiste />
  );

  return (
    <RepoListStyled>
      {list.map((item) => {
        return <RepoItem {...item} key={item.id} />;
      })}
    </RepoListStyled>
  );
}

export default RepoList;
