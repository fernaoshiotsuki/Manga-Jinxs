import styled from "styled-components";

export const StyledChapterHeader = styled.header`
  background-color: #28093a;
  color: #f11dd1d4;
  h4 {
    color: #38ccff;
  }
  height: 15vh;
  button {
    color: #38ccff;
    border: none;
    padding: 15px 25px;
    background-color: #1d1d6163;
    border: 2px #1d1d6163 solid;
    border-radius: 5px;
    font-weight: 700;
    border-radius: 5px;
    align-self: center;
    margin: 10px 0px 0px 20px;
  }
  button:hover {
    border: 2px #38ccff solid;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const StyledChapterContainer = styled.div`
  overflow-y: scroll;
  background-color: #28093a;
  display: flex;
  flex-direction: column;
  height: 45vh;
  align-items: center;

  div {
    color: #dedede;
    margin: 5px;
    font-size: 20px;
    border: solid 2px rgb(116 60 125 / 56%);
    border-radius: 7px 15px;
    margin-bottom: 10px;
    width: 50vw;
  }
  div:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    div {
      width: 20vw;
    }
  }
`;
export const StyledSection = styled.section`
  display: none;
  @media screen and (min-width: 768px) {
    text-align: center;
    align-self: center;
    justify-content: center;
    display: flex;
    width: 100vw;
    height: 15vh;
    background-color: #28093a;
    color: #38ccff;
    p {
      font-weight: 650;
      width: 80vw;
      overflow-y: scroll;
      text-overflow: ellipsis;
    }
  }
`;

export const StyledMain = styled.main`
  display: flex;
  background-color: #28093a;
  flex-direction: column;
  width: 100vw;
  height: 75vh;
  justify-content: space-evenly;
  div: first-of-type {
    display: none;
  }
  img {
    width: 15vw;
    height: 10vh;
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 60vh;

    div: first-of-type {
      display: block;
    }
    div {
      margin-top: 20px;
    }

    img {
      width: 20vw;
      height: 45vh;
      border-radius: 5px;
    }
  }
`;
export const StyledFooter = styled.footer`
  height: 10vh;
  background-color: #28093a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f11dd1d4;
  p {
    display: flex;
    align-content: center;
    justify-content: center;
    max-height: 5vh;
    margin: 0;
  }
  button {
    color: #38ccff;
    border: none;
    padding: 15px 25px;
    background-color: #1d1d6163;
    font-weight: 700;
    border-radius: 5px;
    align-self: center;
    margin-left: 20px;
  }
`;
