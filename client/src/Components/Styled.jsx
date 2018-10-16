import styled from 'styled-components';

import topBgImage from '../images/bg_code.jpg';

const cbTransition = `cubic-bezier(.2,1.08,.68,.96) 0.5s`;

export const TopContent = styled.div`
  position: relative;
  height: 105vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 0.75fr 10vw 10vw 1fr;
`;

export const BGScreen = styled.div`
  position: absolute;
  height: 105vh;
  width: 100vw;
  background-image: url(${topBgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: blur(7px);
`;

export const IntroHeader = styled.h1`
  grid-row: 2;
  position: absolute;
  left: 20vw;
  color: #FFF;
  z-index: 1;
  display: inline-block;
  font-size: 4em;

  :hover{
    transition: ${cbTransition};
    text-shadow: 5px 4px #4c585e;
  }

  @media only screen and (max-width:1000px){
    transition: ${cbTransition};
    font-size: 3em;
  }
`;

export const IntroPara = styled.div`
  grid-row: 3;
  position: absolute;
  left: 20vw;
  color: #FFF;
  z-index: 1;
  display: inline-block;

  :hover{
    transition: ${cbTransition};
    text-shadow: 2px 2px #4c585e;
  }

  @media only screen and (max-width:1000px){
    transition: ${cbTransition};
    font-size: 2.5vw;
    top: 20px;
  }

  font-size: 2vw;
`;