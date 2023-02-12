import styled from "styled-components";

const LanguageStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  &:before {
    content: "";
    inline-size: 1rem;
    block-size: 1rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }
`;

const languages = {
  ruby: {
    color: "red",
  },
  css: {
    color: "#563d7c",
  },
  javascript: {
    color: "#f1e05a",
  },
  html: {
    color: "#e34c26",
  },
  phyton: {
    color: "purple",
  },
  typescript: {
    color: "#3178c6",
  },
  python: {
    color: "#3572A5",
  },
  kotlin: {
    color: "#A97BFF",
  },
  php: {
    color: "#4F5D95",
  },
  java: {
    color: "#b07219",
  },
};

function Language({ name }) {
  const formattedName = name.toLowerCase();
  const color = languages[formattedName]
    ? languages[formattedName].color
    : "white";
  return <LanguageStyled color={color}>{name}</LanguageStyled>;
}

export default Language;
