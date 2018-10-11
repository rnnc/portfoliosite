import React, {Component} from 'react';
import classnames from 'classnames';

import TrackVisibility from 'react-on-screen';
import anime from 'animejs';

import './Logos.css';

export const ReactLogo = () => {

  const react_color = "#00d8ff";

  const pathStyle = {
    fill: "none",
    stroke: react_color,
    strokeWidth: "35px",
  };

  const animate = (isVisible) => (
    (isVisible)
    ?
      anime({
        targets: ".reactLogo_path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 750
      })
    :
      anime({
        targets: ".reactLogo_path",
        strokeDashoffset: [0,anime.setDashoffset],
        easing: 'easeInOutSine',
        duration: 100
      })
  );

  return (
    <React.Fragment>
      
      <TrackVisibility partialVisibility>
        {({isVisible})=>{

          animate(isVisible);

          return (
            <svg className="svgLogos" viewBox="0 0 1001.13 890.65">
              <circle className={classnames("reactLogo_circle", {"visible":isVisible})} fill={react_color} cx="504.59" cy="444.48" r="89.57" />
              <path className="reactLogo_path" style={pathStyle} d="M504.59,262.37c120.25,0,232,17.26,316.2,46.26,101.49,34.94,163.88,87.9,163.88,135.85,0,50-66.13,106.24-175.11,142.35-82.4,27.3-190.82,41.55-305,41.55-117,0-227.87-13.38-311.18-41.85-105.42-36-168.91-93-168.91-142,0-47.57,59.57-100.11,159.64-135C268.68,280,383.16,262.37,504.59,262.37Z" />
              <path className="reactLogo_path" style={pathStyle} d="M346.06,354c60.07-104.17,130.83-192.32,198-250.81,81-70.46,158-98,199.56-74.1,43.29,25,59,110.36,35.83,222.81-17.52,85-59.34,186-116.37,284.95C604.64,638.18,537.69,727.51,471.4,785.45c-83.87,73.32-165,99.85-207.43,75.37-41.2-23.77-57-101.63-37.2-205.74C243.48,567.11,285.39,459.15,346.06,354Z" />
              <path className="reactLogo_path" style={pathStyle} d="M346.21,537.06C286,433,244.92,327.66,227.82,240.23c-20.61-105.33-6-185.87,35.46-209.9,43.25-25,125.08,4,210.93,80.24C539.12,168.2,605.77,254.89,663,353.69,721.6,455,765.55,557.59,782.65,644c21.63,109.29,4.12,192.79-38.31,217.35-41.16,23.83-116.49-1.4-196.81-70.52C479.66,732.39,407.05,642.15,346.21,537.06Z" />
            </svg>
          )
        }}
      </TrackVisibility>

    </React.Fragment>
  );
}

export const ReduxLogo = () => {

  const redux_color = "#4F00E9";

  const pathStyle= {
    fill: "none",
    stroke: redux_color,
    strokeWidth: 4
  };

  const circleStyle = { fill: redux_color };

  return(
    <TrackVisibility partialVisibility>
      {({isVisible})=>{

        if(isVisible)
          anime({
            targets: ".reduxLogo_path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 750
          });
        else
          anime({
            targets: ".reduxLogo_path",
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 100
          });

        const circleClassname = classnames("reduxLogo_circle", {"visible":isVisible});

        return (
          <svg className="svgLogos redux" x="0px" y="0px" viewBox="0 0 83 76.8">
            <path className="reduxLogo_path" style={pathStyle} d="M26.9,50.6c-0.6-0.9-1.3-2.1-2-3.5c-0.5-1.1-1.9-4-2.8-8.2c-0.9-4.3-0.9-7.6-0.8-9.6c0-1.4,0.1-3.5,0.6-6.2
            	c0.3-1.8,0.9-4.8,2.6-8.1c1-1.9,2.3-4.6,5.3-7.1c1.3-1.1,4.6-3.6,9.4-4.3c1.6-0.2,4.4-0.6,7.7,0.6c2.8,1,4.6,2.6,5.8,3.7
            	c2.3,2.2,3.4,4.3,4.2,5.7c0.4,0.8,1.4,2.8,2.2,5.7c0.5,1.9,0.7,3.5,0.8,4.8"/>
            <path className="reduxLogo_path" style={pathStyle} d="M55.4,52.1c-0.5,1-1.1,2.2-2,3.6c-0.6,1-2.5,3.8-5.6,6.8c-3.2,3.1-6.1,4.8-7.9,5.8c-1.3,0.7-3.1,1.8-5.6,2.8
            	c-1.8,0.7-4.6,1.8-8.4,2.1c-2.2,0.2-5.2,0.5-8.9-0.7c-1.6-0.5-5.5-2-8.6-5.7c-1-1.2-2.8-3.4-3.5-6.8c-0.6-2.9-0.1-5.3,0.2-6.9
            	C5.8,50.1,7,48,7.8,46.6c0.5-0.8,1.7-2.7,3.8-4.9c1.4-1.4,2.7-2.5,3.8-3.2"/>
            <path className="reduxLogo_path" style={pathStyle} d="M41.9,29.4c1.1-0.1,2.4-0.1,4.1,0c1.2,0.1,4.5,0.3,8.6,1.5c4.2,1.3,7.2,3,8.9,4c1.3,0.7,3.1,1.8,5.2,3.5
            	c1.5,1.2,3.8,3.1,6,6.2c1.2,1.8,3,4.3,3.8,8.1c0.4,1.7,1,5.8-0.8,10.3c-0.6,1.5-1.6,4.1-4.2,6.4c-2.2,2-4.6,2.7-6.1,3.2
            	c-3,0.9-5.5,0.9-7.1,0.9c-0.9,0-3.2-0.1-6.1-0.9c-1.9-0.5-3.5-1.1-4.7-1.7"/>
            <circle className={circleClassname} style={circleStyle} cx="29.8" cy="54.6" r="5.7"/>
            <circle className={circleClassname} style={circleStyle} cx="37.1" cy="29.7" r="5.7"/>
            <circle className={circleClassname} style={circleStyle} cx="56.8" cy="47.6" r="5.7"/>
          </svg>
        )
      }}
    </TrackVisibility>
  )
}

export const ApolloLogo = () => {

  const apollo_blue = "#112B49";

  const pathStyle = {
    fill: "none",
    stroke: apollo_blue,
    strokeWidth: 24,
    strokeMiterlimit: 10
  };

  return (
    <TrackVisibility partialVisibility>
      {({isVisible})=>{

        if(isVisible)
          anime({
            targets: ".apolloLogo_path",
            strokeDashoffset: [anime.setDashoffset,0],
            easing: 'easeInOutSine',
            duration: 750
          })
        else
          anime({
            targets: ".apolloLogo_path",
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 100
          })

        return (
          <svg className="svgLogos" viewBox="0 0 503 505">
            <path  className={classnames("apolloLogo_A", {"visible":isVisible})} fill={apollo_blue} d="M322.9,368.3H385L285.9,111h-68.7l-99.1,257.3h62.1l16.2-43.6h93.7l-17-48.2h-61.7l40.1-110.7L322.9,368.3z"/>
            <path className={classnames("apolloLogo_circle",{"visible":isVisible})} 
              fill={apollo_blue} d="M452,95c0,18.2-14.8,33-33,33s-33-14.8-33-33c0-10.4,4.8-19.7,12.4-25.8c5.6-4.5,12.8-7.2,20.6-7.2
              C437.2,62,452,76.8,452,95z"/>
            <path className="apolloLogo_path" style={pathStyle} d="M473.8,179.6c26.8,76.8,12.1,161.6-38.9,223.9c-80.9,98.9-230.1,112.6-330.5,30.5s-116.3-231.1-35.4-330              S299.2-8.7,399.5,73.5"/>
          </svg>
        )
      }}
    </TrackVisibility>
  )
}

