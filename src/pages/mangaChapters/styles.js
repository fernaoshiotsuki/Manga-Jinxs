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
    /* position: absolute; */
    border: none;
    /* position: absolute; */
    /* left: 20px; */
    /* bottom: 100px; */
    padding: 15px 25px;
    background-color: #1d1d6163;
    border: 2px #1d1d6163 solid;
    border-radius: 5px;
    font-weight: 700;
    border-radius: 5px;

    /* width: 30%; */
    align-self: center;
    margin-left: 20px;
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
  div {
    color: #dedede;
    margin: 5px;
    font-size: 20px;
    border: solid 2px rgb(116 60 125 / 56%);
    border-radius: 7px 15px;
    margin-bottom: 10px;
    width: 20vw;
  }
  div:hover {
    cursor: pointer;
  }
`;
export const StyledSection = styled.section`
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
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  background-color: #28093a;
  flex-direction: row;
  width: 100vw;
  height: 60vh;
  justify-content: space-evenly;
  img {
    width: 20vw;
    height: 45vh;
    border-radius: 5px;
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
    /* position: absolute; */
    border: none;
    /* position: absolute; */
    /* left: 20px; */
    /* bottom: 100px; */
    padding: 15px 25px;
    background-color: #1d1d6163;
    font-weight: 700;
    border-radius: 5px;
    /* width: 30%; */
    align-self: center;
    margin-left: 20px;
  }
`;
