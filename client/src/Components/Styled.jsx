import styled from 'styled-components';

import topBgImage from '../images/bg_code.jpg';

const cbTransition = `cubic-bezier(.2,1.08,.68,.96) 0.5s`;

export const TopContent = styled.div`
  position: relative;
  display: inline-block;
  height: 105vh;
  width: 100vw;
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
  z-index: -1;
`;

export const Descriptor = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 2.5em;
`;