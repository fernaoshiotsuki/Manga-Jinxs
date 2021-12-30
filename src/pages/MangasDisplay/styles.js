import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: black;
  height: 80vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  div {
    display: flex;
    align-items: center;

    flex-basis: 50%;
    justify-content: center;
  }
  img {
    margin: 10px 0px;
    border-radius: 3px;
    border: 2px black solid;
    border-radius: 5px;
  }

  img:hover {
    border: 2px #38ccff solid;
    border-radius: 5px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    div {
      flex-wrap: wrap;
      width: 30vw;
    }
    img {
      height: 390px;
      width: 275px;
    }
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    div {
      display: flex;
      align-items: center;

      flex-basis: 20%;
      justify-content: center;
    }
    img {
      height: 310px;
      width: 190px;
    }
  }
`;
