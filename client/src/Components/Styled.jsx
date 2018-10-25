import styled from 'styled-components';

import bgImage1 from '../images/bg_code.jpg';
import bgImage2 from '../images/bg_code2.jpg';

export const TopContent = styled.div`
  position: relative;
  display: inline-block;
  height: 100vh;
  width: 100vw;
  z-index:-1;
`;

export const BGScreen = styled.div`
  position: absolute;
  height: 105vh;
  width: 100vw;
  background-image: url(${bgImage1});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: blur(7px);
  z-index: -1;
`;

export const Descriptor = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 3em;
  padding: 0 0 5% 0;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-evenly;
  align-content: center;

  div{
    background: white;
    padding: 15px;
  }
`;