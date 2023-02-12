import styled from "styled-components";

const LightStyled = styled.div`
  position: fixed;
  inset-block-end: 2rem;
  inset-inline-end: 5.5rem;
  z-index: 1;
  min-inline-size: initial;

  .boton {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lblSwitch {
    display: inline-block;
    width: 55px;
    height: 30px;
    background: #aaa;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
  }
  #btn-switch:checked ~ .lblSwitch {
    background: var(--primary);
  }
  #btn-switch:checked ~ .lblSwitch::after {
    left: 28px;
  }
  .lblSwitch::after {
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 100px;
    top: 4px;
    left: 5px;
    transition: 0.3s;
  }
  #btn-switch {
    display: none;
  }
`;

function Light({ setBackLight, newBackLight, setBackButton, newBackButton }) {
  function handleClick() {
    newBackButton === "#FFFFFE"
      ? setBackButton("#22262c")
      : setBackButton("#FFFFFE");

    newBackLight === "#0d1117"
      ? setBackLight("#fffffe")
      : setBackLight("#0d1117");
  }
  return (
    <LightStyled>
      <div className="boton">
        <input type="checkbox" id="btn-switch" onClick={handleClick} />
        <label htmlFor="btn-switch" className="lblSwitch" />
      </div>
    </LightStyled>
  );
}

export default Light;
