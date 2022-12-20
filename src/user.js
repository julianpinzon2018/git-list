import { useState } from "react";
import styled from "styled-components";

const Avatar = styled.img`
  border: 10px solid green;
`;

function User({ name, avatar, counter }) {
  const [calculatedName, setCalculatedName] = useState(name);
  const newName = `${calculatedName} es muy Cool!!!`;
  function superClick() {
    setCalculatedName("Pikachu");
    console.info(`Hola ${calculatedName}, este es un click genial`);
  }

  return (
    <div className="User" onClick={superClick}>
      <Avatar src={avatar} width="96" height="96" title={name} alt={name} />
      <p>
        Hemos dado click en {newName} por {counter} vaces
      </p>
    </div>
  );
}

export default User;
