import React from 'react';
import classnames from 'classnames';

import TrackVisibility from 'react-on-screen';
import anime from 'animejs';

import './Logos.css';

export const NodeJSLogo =()=> {

  const nodegreen = "#83CD29"

  const pathStyle = {
    fill: "none",
    stroke: nodegreen,
    strokeWidth: 2.5,
    strokeMiterlimit: 10
  };

  return (
    <TrackVisibility partialVisibility>
      {({isVisible})=>{
  
        if(isVisible)
          anime({
            targets: ".nodejsLogo_path",
            strokeDashoffset: [anime.setDashoffset,0],
            easing: 'easeInOutSine',
            duration: 1000
          })
        else
          anime({
            targets: ".nodejsLogo_path",
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 750
          })

        return (
          <svg className="logos" viewBox="0 0 36.8 40.8">
            <path className={classnames("nodejsLogo_S",{"nodejsLogo_S_entered":isVisible})} 
            fill={nodegreen} d="M23,28.8c-6.4,0-7.8-3-7.8-5.4c0-0.2,0.2-0.4,0.4-0.4h1.9c0.2,0,0.4,0.2,0.4,0.4c0.3,1.9,1.1,2.9,5,2.9
            	c3.1,0,4.4-0.7,4.4-2.3c0-0.9-0.4-1.7-5.2-2.1c-4-0.4-6.5-1.3-6.5-4.5c0-3,2.5-4.7,6.7-4.7c4.7,0,7,1.6,7.3,5.1c0,0.1,0,0.2-0.1,0.3
            	c-0.1,0.1-0.2,0.1-0.3,0.1h-1.9c-0.2,0-0.4-0.1-0.4-0.3c-0.5-2-1.6-2.7-4.6-2.7c-3.4,0-3.8,1.2-3.8,2.1c0,1.1,0.5,1.4,5,2
            	c4.5,0.6,6.7,1.4,6.7,4.6C30.3,27,27.7,28.8,23,28.8"/>
            <path className="nodejsLogo_path" style={pathStyle} d="M13,36.1c0,0,3.4,2.3,4.6,3c1,0.5,2.4-0.3,2.4-0.3s13.3-7.4,14.2-8.4c0.5-0.5,0.7-1.7,0.7-1.7s0-15.7,0-16.8
            	c0-1.1-1.1-1.7-1.1-1.7S21.3,2.8,19.8,2c-1.3-0.8-2.4,0-2.4,0S3.9,9.5,2.8,10.2C1.9,10.9,2,12.1,2,12.1S1.9,27.8,1.9,28.9
            	c0,1.3,1.4,1.9,1.4,1.9s4.2,2.7,6,2.7c1.4,0,1.8-0.3,2.3-0.6c0.9-0.7,0.9-2,0.9-2l0.1-18"/>
          </svg>
        )
      }}
    </TrackVisibility>
  )
}

export const WebpackLogo = () => {
  
  return (
    <TrackVisibility partialVisibility>
      {({isVisible})=>{
      
        return (
        <svg className="logos" viewBox="0 0 700 786.1">
          <path fill="#1C78C0" d="M336.3,605.5L148.7,502.3V298l187.6,108.3V605.5z M363.1,605.5l187.6-103.1V298L363.1,406.3V605.5z
	          M161.4,274.4l188.3-103.5L538,274.4L349.7,383.1L161.4,274.4z"/>
          <path fill="#8ED6FB" d="M668.2,597.9L363.1,770.5V636.1l190.1-104.6L668.2,597.9L668.2,597.9z M689.1,579V218.1l-111.6,64.5v232
          	L689.1,579L689.1,579z M31.2,597.9l305.1,172.6V636.1L146.1,531.5L31.2,597.9L31.2,597.9z M10.3,579V218.1l111.6,64.5v232L10.3,579z
          	M23.4,194.7l312.9-177v129.9L135.8,257.9l-1.6,0.9L23.4,194.7L23.4,194.7z M676,194.7l-312.9-177v129.9l200.5,110.2l1.6,0.9
          	L676,194.7L676,194.7z"/>
        </svg>
        );
      }}
    </TrackVisibility>
  )
}

export const ExpressLogo = () =>{

  const textStyle = {
    font: "400% helvetica neue,open sans,sans-serif",
    textShadow: "2px 1px black",
    fontWeight: "100",
    lineHeight: "300%",
    color: "#969696"
  };

  return (
    <TrackVisibility partialVisibility>
      {({isVisible})=>{
        return (
          <span className="expressLogo">
            Express
          </span>
        )
      }}
    </TrackVisibility>
  )
}

export const GraphQlLogo = () => {

  const graphqlColor = "#E535AB"

  const pathStyle = {
    fill: "none",
    stroke: graphqlColor,
    strokeWidth: 17,
    strokeMiterlimit: 10
  };
  
  return (
    <TrackVisibility partialVisibility>
      {({isVisible})=>{
      
        if(isVisible)
          anime({
            targets: ".graphqlLogo_path",
            strokeDashoffset: [anime.setDashoffset,0],
            easing: 'easeInOutSine',
            duration: 750
          });
        else
          anime({
            targets: ".graphqlLogo_path",
            strokeDashoffset: [0,anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 100
          });

        const circleClassname = classnames("graphqlLogo_circle",{"graphqlLogo_circle_entered":isVisible});
        const lineClassname = "graphqlLogo_path";
        
        return (
          <svg className="logos" viewBox="0 0 400 400">
            <line className={lineClassname} style={pathStyle} x1="60.8" y1="280.5" x2="60.8" y2="119.6"/>
            <line className={lineClassname} style={pathStyle} x1="60.8" y1="119.6" x2="200" y2="39.1"/>
            <line className={lineClassname} style={pathStyle} x1="200" y1="39.1" x2="339.4" y2="119.6"/>
            <line className={lineClassname} style={pathStyle} x1="339.4" y1="119.6" x2="339.2" y2="280.2"/>
            <line className={lineClassname} style={pathStyle} x1="339.2" y1="280.2" x2="60.8" y2="280.5"/>
            <line className={lineClassname} style={pathStyle} x1="60.8" y1="280.5" x2="200" y2="360.9"/>
            <line className={lineClassname} style={pathStyle} x1="200" y1="360.9" x2="339.2" y2="280.5"/>
            <line className={lineClassname} style={pathStyle} x1="60.8" y1="280.5" x2="200" y2="39.1"/>
            <line className={lineClassname} style={pathStyle} x1="339.2" y1="280.5" x2="200" y2="39.1"/>
            <circle className={circleClassname} fill={graphqlColor} cx="60.9" cy="120.1" r="35.4"/>
            <circle className={circleClassname} fill={graphqlColor} cx="200" cy="39.1" r="35.4"/>
            <circle className={circleClassname} fill={graphqlColor} cx="339.4" cy="119.6" r="35.4"/>
            <circle className={circleClassname} fill={graphqlColor} cx="200" cy="360.9" r="35.4"/>
            <circle className={circleClassname} fill={graphqlColor} cx="60.7" cy="280.5" r="35.4"/>
            <circle className={circleClassname} fill={graphqlColor} cx="339.4" cy="280.2" r="35.4"/>
          </svg>
        );
      }}
    </TrackVisibility>
  )

}

export const MongoDBLogo = () => {
  return (
    <TrackVisibility partialVisibility>
      {({isVisible})=>{
        return (
          <svg className="mongoLogo" viewBox="0 0 512 146"
            style={{
              filter: `blur(${isVisible?'0px':'20px'})`,
              transition: `all 0.5s`
              }}
          >
            <path fill="#8E714E" d="M466.2,62c-0.4,0.1-0.9,1-0.9,1.6c-0.1,3.5-0.2,12.7-0.2,19c0,0.2,0.3,0.5,0.5,0.5c1.3,0.1,4.4,0.2,7.1,0.2
              c3.7,0,5.9-0.5,7.1-1c3.1-1.6,4.6-5,4.6-8.7c0-8.4-5.9-11.7-14.7-11.7C469.2,61.7,467.5,61.7,466.2,62L466.2,62L466.2,62z
               M488.6,100.9c0-8.6-6.3-13.4-17.8-13.4c-0.5,0-4.2-0.1-5,0.1c-0.3,0.1-0.6,0.3-0.6,0.5c0,6.2-0.1,16,0.2,19.8
              c0.2,1.7,1.4,4,2.9,4.7c1.6,0.9,5.1,1,7.6,1C482.6,113.6,488.6,109.8,488.6,100.9L488.6,100.9L488.6,100.9z M448.4,57.2
              c0.9,0,3.5,0.3,10.2,0.3c6.3,0,11.4-0.2,17.6-0.2c7.6,0,18,2.7,18,14c0,5.6-3.9,10-9,12.2c-0.3,0.1-0.3,0.3,0,0.3
              c7.3,1.8,13.7,6.3,13.7,14.9c0,8.3-5.2,13.7-12.8,17c-4.6,2-10.3,2.7-16.2,2.7c-4.4,0-16.3-0.5-23-0.3c-0.7-0.3,0.6-3.4,1.2-3.9
              c1.6-0.1,2.8-0.2,4.4-0.7c2.3-0.6,2.6-1.3,3-4.9c0.2-3,0.2-13.8,0.2-21.5c0-10.5,0.1-17.7,0-21.1c-0.1-2.7-1-3.6-3-4.1
              c-1.5-0.3-3.9-0.6-5.9-0.9C446.4,60.5,447.9,57.5,448.4,57.2L448.4,57.2L448.4,57.2z M398.3,111.3c2.1,1.7,6.2,2.3,9.8,2.3
              c4.7,0,9.4-0.9,13.9-5c4.6-4.2,7.8-10.6,7.8-20.9c0-9.8-3.7-17.8-11.4-22.5c-4.3-2.7-9.9-3.8-16.3-3.8c-1.9,0-3.7,0.1-4.9,0.6
              c-0.3,0.2-0.9,1-0.9,1.4c-0.2,1.7-0.2,15.1-0.2,23c0,8.1,0,19.4,0.2,20.7C396.4,108.4,397,110.4,398.3,111.3L398.3,111.3
              L398.3,111.3z M378.5,57.2c1.7,0,8,0.3,11,0.3c5.5,0,9.4-0.3,19.7-0.3c8.7,0,16,2.3,21.2,6.8c6.3,5.5,9.7,13,9.7,22.3
              c0,13.1-6,20.7-12,25c-6,4.4-13.8,7-25,7c-5.9,0-16.1-0.2-24.5-0.3h-0.1c-0.4-0.8,0.7-3.8,1.4-3.9c2.3-0.3,2.9-0.3,4-0.8
              c1.8-0.7,2.2-1.7,2.4-4.9c0.3-6,0.2-13.2,0.2-21.4c0-5.8,0.1-17.2-0.1-20.9c-0.3-3-1.6-3.8-4.2-4.3c-1.3-0.3-3-0.6-5.5-0.9
              C376.5,60.4,378.1,57.7,378.5,57.2L378.5,57.2L378.5,57.2z"/>
            <path fill="#442D22" d="M273.3,114.7c-2.2-0.3-3.7-0.6-5.7-1.5c-0.3-0.2-0.7-1-0.7-1.4c-0.2-3-0.2-11.7-0.2-17.6
              c0-4.7-0.8-8.8-2.8-11.7c-2.3-3.3-5.7-5.2-10.1-5.2c-3.8,0-9,2.6-13.2,6.3c-0.1,0.1-0.8,0.7-0.7-0.3c0-1,0.2-2.9,0.3-4.2
              c0.1-1.2-0.6-1.8-0.6-1.8c-2.8,1.4-10.6,3.2-13.5,3.5c-2.1,0.4-2.6,2.4-0.4,3.1h0.1c2.3,0.7,3.9,1.5,5.1,2.3
              c0.9,0.7,0.8,1.7,0.8,2.4c0.1,6.5,0.1,16.5-0.2,22c-0.1,2.2-0.7,3-2.3,3.3l0.2-0.1c-1.2,0.3-2.2,0.5-3.7,0.7
              c-0.5,0.5-0.5,3.3,0,3.9c1,0,6-0.3,10.2-0.3c5.7,0,8.7,0.3,10.2,0.3c0.6-0.7,0.8-3.3,0.4-3.9c-1.7-0.1-2.9-0.3-4-0.6
              c-1.6-0.3-2-1.1-2.1-3c-0.2-4.6-0.2-14.3-0.2-21c0-1.8,0.5-2.7,1-3.2c2-1.7,5.2-3,8.1-3c2.8,0,4.6,0.9,6,2
              c1.9,1.6,2.5,3.8,2.8,5.5c0.4,3.7,0.3,11.1,0.3,17.6c0,3.5-0.3,4.3-1.6,4.8c-0.6,0.3-2.2,0.6-4,0.8c-0.6,0.6-0.4,3.3,0,3.9
              c2.5,0,5.5-0.3,9.8-0.3c5.4,0,8.9,0.3,10.3,0.3C273.5,117.9,273.7,115.4,273.3,114.7L273.3,114.7L273.3,114.7z M297.4,81.5
              c-4.6,0-7.5,3.6-7.5,9.1c0,5.7,2.5,12.2,9.7,12.2c1.2,0,3.5-0.5,4.5-1.7c1.7-1.6,2.8-4.7,2.8-8C306.9,85.8,303.3,81.5,297.4,81.5
              L297.4,81.5L297.4,81.5z M296.8,119.9c-1.7,0-3,0.5-3.7,1c-3.7,2.3-5.3,4.6-5.3,7.3c0,2.5,1,4.5,3,6.3c2.5,2.2,6,3.2,10.4,3.2
              c8.9,0,12.8-4.8,12.8-9.5c0-3.3-1.7-5.5-5-6.7C306.5,120.4,302.1,119.9,296.8,119.9L296.8,119.9L296.8,119.9z M297.4,142.5
              c-5.3,0-9.1-1.1-12.4-3.7c-3.2-2.4-4.6-6.1-4.6-8.6c0-0.7,0.2-2.6,1.7-4.3c1-1,3-3,8-6.4c0.2-0.1,0.3-0.2,0.3-0.3
              c0-0.2-0.2-0.3-0.3-0.4c-4.1-1.6-5.3-4.1-5.7-5.5V113c-0.1-0.5-0.3-1,0.5-1.6c0.6-0.4,1.5-1,2.4-1.6c1.5-0.9,3-1.8,4-2.6
              c0.2-0.2,0.2-0.3,0.2-0.5s-0.2-0.3-0.3-0.4c-6.1-2-9.1-6.5-9.1-13.3c0-4.4,2-8.4,5.6-11c2.4-1.9,8.5-4.3,12.5-4.3h0.3
              c4.1,0.1,6.3,1,9.6,2.1c1.7,0.6,3.4,0.9,5.7,0.9c3.4,0,4.9-1,6.1-2.3c0.1,0.2,0.3,0.6,0.3,1.7c0.1,1.1-0.3,2.8-1.1,4
              c-0.7,1-2.3,1.7-3.8,1.7h-0.4c-1.6-0.2-2.3-0.3-2.3-0.3l-0.3,0.2c-0.1,0.2,0,0.3,0.1,0.6l0.1,0.2c0.2,0.8,0.5,3.1,0.5,3.7
              c0,7.1-2.9,10.3-5.9,12.6c-3,2.2-6.3,3.6-10.2,3.9c-0.1,0-0.4,0-1.2,0.1c-0.4,0-1,0.1-1.1,0.1h-0.1c-0.7,0.2-2.4,1-2.4,2.5
              c0,1.3,0.8,2.9,4.5,3.1c0.8,0.1,1.6,0.1,2.4,0.2c5,0.3,11.1,0.8,14,1.7c4,1.5,6.5,5,6.5,9.3c0,6.4-4.6,12.4-12.3,16.2
              C305.2,141.6,301.5,142.5,297.4,142.5L297.4,142.5L297.4,142.5z M347,81.9c-1.8,0-3.5,0.4-4.7,1.3c-3.4,2.1-5.1,6.3-5.1,12.3
              c0,11.4,5.7,19.4,13.9,19.4c2.4,0,4.3-0.7,6-2.1c2.5-2.1,3.8-6.3,3.8-12.1C360.9,89.5,355.2,81.9,347,81.9L347,81.9L347,81.9z
               M348.5,119.1c-14.8,0-20.1-10.9-20.1-21c0-7.1,2.9-12.6,8.6-16.5c4.1-2.5,9-3.9,13.3-3.9c11.3,0,19.2,8.1,19.2,19.7
              c0,7.9-3.1,14.2-9.1,18C357.6,117.3,352.6,119.1,348.5,119.1L348.5,119.1L348.5,119.1z M193.6,81.9c-1.8,0-3.5,0.4-4.7,1.3
              c-3.4,2.1-5.1,6.3-5.1,12.3c0,11.4,5.7,19.4,13.9,19.4c2.4,0,4.3-0.7,6-2.1c2.5-2.1,3.8-6.3,3.8-12.1
              C207.5,89.5,201.9,81.9,193.6,81.9L193.6,81.9L193.6,81.9z M195.2,119.1c-14.8,0-20.1-10.9-20.1-21c0-7.1,2.9-12.6,8.6-16.5
              c4.1-2.5,9-3.9,13.3-3.9c11.3,0,19.2,8.1,19.2,19.7c0,7.9-3.1,14.2-9.1,18C204.3,117.3,199.3,119.1,195.2,119.1L195.2,119.1
              L195.2,119.1z M95.8,118.2c-0.2-0.3-0.3-1-0.3-2c0-0.7,0.2-1.1,0.3-1.3c1.8-0.3,2.8-0.5,3.8-0.8c1.7-0.4,2.4-1.4,2.5-3.6
              c0.3-5.2,0.3-15.1,0.2-22v-0.2c0-0.8,0-1.7-1-2.4c-1.4-0.9-3-1.7-5.2-2.3c-0.8-0.3-1.3-0.7-1.2-1.2c0-0.5,0.5-1.1,1.7-1.3
              c2.9-0.3,10.3-2.1,13.3-3.4c0.2,0.2,0.4,0.7,0.4,1.4l-0.1,1c-0.1,1-0.2,2.1-0.2,3.2c0,0.3,0.3,0.6,0.7,0.6c0.2,0,0.3-0.1,0.5-0.2
              c5.6-4.3,10.6-5.9,13.2-5.9c4.3,0,7.6,2,10.1,6.2c0.2,0.3,0.3,0.3,0.6,0.3c0.2,0,0.4-0.1,0.5-0.3c5.1-3.9,10.3-6.3,13.7-6.3
              c8.1,0,12.9,6,12.9,16.2c0,2.9,0,6.6-0.1,10c0,3-0.1,5.8-0.1,7.8c0,0.4,0.6,1.8,1.6,2.1c1.2,0.6,2.9,0.9,5,1.2h0.1
              c0.2,0.6-0.2,2.9-0.5,3.3c-0.5,0-1.3,0-2.2-0.1c-1.7-0.1-4-0.2-6.6-0.2c-5.4,0-8.2,0.1-10.9,0.3c-0.2-0.7-0.3-2.8,0-3.3
              c1.6-0.3,2.3-0.5,3.3-0.8c1.7-0.5,2.2-1.3,2.3-3.6c0-1.7,0.3-15.7-0.2-19.1c-0.5-3.5-3.1-7.6-8.9-7.6c-2.2,0-5.6,0.9-8.9,3.4
              c-0.2,0.2-0.3,0.6-0.3,0.9v0.1c0.3,1.8,0.3,3.9,0.3,7.1v5.7c0,3.9-0.1,7.6,0,10.3c0,1.9,1.1,2.3,2.1,2.7c0.5,0.1,0.9,0.2,1.3,0.3
              c0.8,0.2,1.6,0.3,2.8,0.6c0.2,0.3,0.2,1.5-0.1,2.4c-0.1,0.5-0.3,0.8-0.3,0.9c-3-0.1-6-0.2-10.4-0.2c-1.3,0-3.6,0.1-5.5,0.1
              c-1.6,0-3,0.1-3.9,0.1c-0.1-0.2-0.3-0.8-0.3-1.7c0-0.8,0.2-1.4,0.3-1.6c0.4-0.1,0.8-0.2,1.2-0.2c1-0.2,1.9-0.3,2.8-0.5
              c1.5-0.4,2-1.2,2.1-3.1c0.3-4.3,0.5-16.8-0.1-19.9c-1-5-3.9-7.6-8.5-7.6c-2.7,0-6.1,1.3-8.9,3.4c-0.4,0.3-0.8,1.2-0.8,2v5.1
              c0,6.3,0,14.1,0.1,17.5c0.1,1,0.4,2.3,2.4,2.7c0.4,0.1,1.1,0.3,2,0.3l1.6,0.3c0.2,0.5,0.1,2.6-0.3,3.3c-0.9,0-1.9-0.1-3.1-0.1
              c-1.8-0.1-4.2-0.2-6.8-0.2c-3,0-5.2,0.1-7,0.2C97.8,118.2,96.8,118.2,95.8,118.2L95.8,118.2L95.8,118.2z"/>
            <g>
              <path fill="#A6A385" d="M50,139.1l-3.6-1.2c0,0,0.4-18.2-6.1-19.5c-4.3-5,0.7-213.9,16.3-0.7c0,0-5.4,2.7-6.3,7.3
                C49.3,129.5,50,139.1,50,139.1L50,139.1L50,139.1z"/>
              <path fill="499D4A" d="M51.9,121.5c0,0,31.2-20.5,23.9-63.2c-7-31-23.7-41.2-25.5-45.1c-2-2.8-3.9-7.7-3.9-7.7l1.3,86.3
                C47.8,92,45.1,118.3,51.9,121.5"/>
              <path fill="#FFFFFF" d="M44.6,122.7c0,0-29.3-20-27.6-55.2C18.7,32.3,39.3,15,43.3,11.8C46,9,46.1,8,46.3,5.2
                c1.8,3.9,1.5,58.5,1.7,65C48.8,94.9,46.6,118,44.6,122.7L44.6,122.7L44.6,122.7z"/>
              <path fill="#58AA50" d="M44.6,122.7c0,0-29.3-20-27.6-55.2C18.7,32.3,39.3,15,43.3,11.8C46,9,46.1,8,46.3,5.2
                c1.8,3.9,1.5,58.5,1.7,65C48.8,94.9,46.6,118,44.6,122.7L44.6,122.7L44.6,122.7z"/>
            </g>
          </svg>
        )
      }}
    </TrackVisibility>
  )
}