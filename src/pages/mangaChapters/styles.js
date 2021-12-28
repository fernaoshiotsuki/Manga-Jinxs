import styled from "styled-components";

export const StyledChapterHeader = styled.header`
  background-color: #28093a;
  color: #f11dd1d4;
  h4 {
    color: #38ccff;
  }
  height: 15vh;
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
  color: #f11dd1d4;
`;
