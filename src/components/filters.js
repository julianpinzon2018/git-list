import styled from "styled-components";
import InputText from "./input-text";
import Selector from "./selector";
import Separator from "./separator";

const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block: 1.5rem;
  }
  .action-list {
    display: flex;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: 0.5rem;
  }
  @media screen and (max-width: 780px) {
    .action-list {
      flex-direction: column;
    }
    .select-list {
      justify-content: space-between;
    }
  }
`;

function Filters({ repoListCount, setSearch, setLanguage }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <FiltersStyled>
      <h2 className="count">Repositories {repoListCount}</h2>
      <div className="action-list">
        <InputText
          placeholder="Busca un repositorio"
          type="search"
          onChange={handleChange}
        />
        <div className="select-list">
          <Selector defaultValue="">
            <option value="" disabled>
              Type
            </option>
            <option value="all">All</option>
            <option value="sources">Sources</option>
            <option value="fork">Forks</option>
            <option value="archived">Archived</option>
            <option value="mirrors">Mirrors</option>
          </Selector>

          <Selector setLanguage={setLanguage} defaultValue="">
            <option value="" disabled>
              Lenguaje
            </option>
            <option value="todos">All</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
            <option value="dart">Dart</option>
          </Selector>

          <Selector defaultValue="">
            <option value="" disabled>
              Sort
            </option>
            <option value="actualizados">Last updated</option>
            <option value="nombre">Name</option>
            <option value="estrellas">Stars</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  );
}

export default Filters;
