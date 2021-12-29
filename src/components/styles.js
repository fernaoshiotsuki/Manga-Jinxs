import styled from "styled-components";

export const StyledMain = styled.main`
  height: 80vh;
  width: 100vw;
  img {
    height: 100%;
    width: 100%;
    background-image: initial;
    background-color: rgb(0, 0, 0);
  }
  p {
    display: none;
  }

  button {
    color: #38ccff;
    position: absolute;
    border: none;
    position: absolute;
    left: 20px;
    bottom: 100px;
    padding: 13px 20px;
    border: solid 2px #1d1d6163;
    background-color: #1d1d6163;
    font-weight: 700;
    border-radius: 5px;
    width: 30%;
  }
  button:hover {
    border: solid 2px #38ccff;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 21px;
      width: 30%;
      display: block;
      color: rgb(187 187 187);
      opacity: 1;
      font-weight: 700;
      position: absolute;
    }
  }
`;

export const StyledFooter = styled.footer`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: #f11dd1d4;
  background-color: #28093a;
  p {
    align-self: center;

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
    margin: 0px 20px;
    border: solid 2px #1d1d6163;
  }
  button:hover {
    border: solid 2px #38ccff;
  }
`;
