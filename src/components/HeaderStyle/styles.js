import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 10vh;
  width: 100vw;
  display: flex;
  background-color: #28093a;
  color: rgba(242, 49, 213, 0.83);
  h2,
  h4 {
    margin: 0;
  }
  h4 {
    margin: 7px;
  }
  button {
    color: #38ccff;
    border: none;
    padding: 15px 25px;
    background-color: #1d1d6163;
    font-weight: 700;
    border: 2px #28093a solid;
    border-radius: 5px;
    align-self: center;
    margin-left: 20px;
  }
  button:hover {
    border: 2px #38ccff solid;
    border-radius: 5px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    h2 {
      margin: 20px;
      font-size: 35px;
    }
    h4 {
      margin-top: 37px;
    }
  }
`;
