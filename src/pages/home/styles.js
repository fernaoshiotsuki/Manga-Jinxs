import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: black;
  height: 80vh;
  img {
    margin: 10px 0px;
    border-radius: 3px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    div {
      flex-basis: 20%;
    }
    img {
      height: 310px;
      width: 190px;
    }
  }
`;
