import Layout from "./components/layout";
import Profile from "./components/profile";
import Filters from "./components/filters";
import RepoList from "./components/repo-list";
import Search from "./components/search";
import { useState, useEffect } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";
import Modal from "./components/modal";
import Light from "./components/light";
import GlobalStylesStyled from "./components/global-styles";

function App() {
  const backButton = "#22262c";
  const [newBackButton, setBackButton] = useState(backButton);

  const backLight = "#0d1117";
  const [newBackLight, setBackLight] = useState(backLight);

  const params = useParams();
  let username = params.user;
  if (!username) {
    username = "julianpinzon2018";
  }
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("no hemos encontrado a este crack");
        return;
      }
      setUser(data);
    });
    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log("no hemos encontrado los repos  de este crack");
        return;
      }
      setRepos(data);
    });
  }, [username]);

  return (
    <Layout newBackLight={newBackLight}>
      <Modal isActive={modal} setModal={setModal} />
      <Profile newBackButton={newBackButton} {...user} />
      <Filters
        setLanguage={setLanguage}
        setSearch={setSearch}
        repoListCount={repos.length}
      />
      <RepoList language={language} search={search} repoList={repos} />
      <Search setModal={setModal} />
      <Light
        setBackButton={setBackButton}
        newBackButton={newBackButton}
        setBackLight={setBackLight}
        newBackLight={newBackLight}
      />
      <GlobalStylesStyled newBackLight={newBackLight} />
    </Layout>
  );
}
export default App;
