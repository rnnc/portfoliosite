import React, {PureComponent} from 'react';
import Observer from 'react-intersection-observer';

import '../Styles/Logos.scss';

import { pathAnimate } from '../Animations';

export class ReactLogo extends PureComponent {

  react_color = "#00d8ff";

  pathStyle = {
    fill: "none",
    stroke: this.react_color,
    strokeWidth: "35px",
  };

  render(){
    return (
      <Observer threshold={0.75}>
        {({inView, ref})=>{
        
          pathAnimate(inView, ".svgLogos.react .path");
          const visible = inView ? "visible" : "";
          
          return (
            <svg className="svgLogos react" viewBox="0 0 1001.13 890.65" ref={ref}>
              <circle className={`circle ${visible}`} fill={this.react_color} cx="504.59" cy="444.48" r="89.57" />
              <path className="path" style={this.pathStyle} d="M504.59,262.37c120.25,0,232,17.26,316.2,46.26,101.49,34.94,163.88,87.9,163.88,135.85,0,50-66.13,106.24-175.11,142.35-82.4,27.3-190.82,41.55-305,41.55-117,0-227.87-13.38-311.18-41.85-105.42-36-168.91-93-168.91-142,0-47.57,59.57-100.11,159.64-135C268.68,280,383.16,262.37,504.59,262.37Z" />
              <path className="path" style={this.pathStyle} d="M346.06,354c60.07-104.17,130.83-192.32,198-250.81,81-70.46,158-98,199.56-74.1,43.29,25,59,110.36,35.83,222.81-17.52,85-59.34,186-116.37,284.95C604.64,638.18,537.69,727.51,471.4,785.45c-83.87,73.32-165,99.85-207.43,75.37-41.2-23.77-57-101.63-37.2-205.74C243.48,567.11,285.39,459.15,346.06,354Z" />
              <path className="path" style={this.pathStyle} d="M346.21,537.06C286,433,244.92,327.66,227.82,240.23c-20.61-105.33-6-185.87,35.46-209.9,43.25-25,125.08,4,210.93,80.24C539.12,168.2,605.77,254.89,663,353.69,721.6,455,765.55,557.59,782.65,644c21.63,109.29,4.12,192.79-38.31,217.35-41.16,23.83-116.49-1.4-196.81-70.52C479.66,732.39,407.05,642.15,346.21,537.06Z" />
            </svg>
          )
        }}
      </Observer>
    );
  }
}

export class ReduxLogo extends PureComponent{

  redux_color = "#4F00E9";

  pathStyle = {
    fill: "none",
    stroke: this.redux_color,
    strokeWidth: 4
  };

  circleStyle = { fill: this.redux_color };

  render() {
    return (
      <Observer threshold={0.75}>
        {({inView, ref})=>{
  
          pathAnimate(inView, ".svgLogos.redux .path")
          const circleClass = `circle ${inView ? 'visible' : ''}`;
          
          return (
            <svg className="svgLogos redux" viewBox="0 0 83 76.8" ref={ref}>
              <path className="path" style={this.pathStyle} d="M26.9,50.6c-0.6-0.9-1.3-2.1-2-3.5c-0.5-1.1-1.9-4-2.8-8.2c-0.9-4.3-0.9-7.6-0.8-9.6c0-1.4,0.1-3.5,0.6-6.2
                c0.3-1.8,0.9-4.8,2.6-8.1c1-1.9,2.3-4.6,5.3-7.1c1.3-1.1,4.6-3.6,9.4-4.3c1.6-0.2,4.4-0.6,7.7,0.6c2.8,1,4.6,2.6,5.8,3.7
                c2.3,2.2,3.4,4.3,4.2,5.7c0.4,0.8,1.4,2.8,2.2,5.7c0.5,1.9,0.7,3.5,0.8,4.8"/>
              <path className="path" style={this.pathStyle} d="M55.4,52.1c-0.5,1-1.1,2.2-2,3.6c-0.6,1-2.5,3.8-5.6,6.8c-3.2,3.1-6.1,4.8-7.9,5.8c-1.3,0.7-3.1,1.8-5.6,2.8
                c-1.8,0.7-4.6,1.8-8.4,2.1c-2.2,0.2-5.2,0.5-8.9-0.7c-1.6-0.5-5.5-2-8.6-5.7c-1-1.2-2.8-3.4-3.5-6.8c-0.6-2.9-0.1-5.3,0.2-6.9
                C5.8,50.1,7,48,7.8,46.6c0.5-0.8,1.7-2.7,3.8-4.9c1.4-1.4,2.7-2.5,3.8-3.2"/>
              <path className="path" style={this.pathStyle} d="M41.9,29.4c1.1-0.1,2.4-0.1,4.1,0c1.2,0.1,4.5,0.3,8.6,1.5c4.2,1.3,7.2,3,8.9,4c1.3,0.7,3.1,1.8,5.2,3.5
                c1.5,1.2,3.8,3.1,6,6.2c1.2,1.8,3,4.3,3.8,8.1c0.4,1.7,1,5.8-0.8,10.3c-0.6,1.5-1.6,4.1-4.2,6.4c-2.2,2-4.6,2.7-6.1,3.2
                c-3,0.9-5.5,0.9-7.1,0.9c-0.9,0-3.2-0.1-6.1-0.9c-1.9-0.5-3.5-1.1-4.7-1.7"/>
              <circle className={circleClass} style={this.circleStyle} cx="29.8" cy="54.6" r="5.7"/>
              <circle className={circleClass} style={this.circleStyle} cx="37.1" cy="29.7" r="5.7"/>
              <circle className={circleClass} style={this.circleStyle} cx="56.8" cy="47.6" r="5.7"/>
            </svg>
          )
        }}
      </Observer>
    )
  }
}

export class ApolloLogo extends PureComponent{

  apollo_blue = "#112B49";

  pathStyle = {
    fill: "none",
    stroke: this.apollo_blue,
    strokeWidth: 24,
    strokeMiterlimit: 10
  };

  render(){
    return (
      <Observer threshold={0.75}>

        {({inView, ref})=>{
        
          pathAnimate(inView, ".svgLogos.apollo .path")
          const visible = inView ? "visible" : "";

          return (
            <svg className="svgLogos apollo" viewBox="0 0 503 505" ref={ref}>
              <path  className={`letter_A ${visible}`} fill={this.apollo_blue} d="M322.9,368.3H385L285.9,111h-68.7l-99.1,257.3h62.1l16.2-43.6h93.7l-17-48.2h-61.7l40.1-110.7L322.9,368.3z"/>
              <path className={`circle ${visible}`} 
                fill={this.apollo_blue} d="M452,95c0,18.2-14.8,33-33,33s-33-14.8-33-33c0-10.4,4.8-19.7,12.4-25.8c5.6-4.5,12.8-7.2,20.6-7.2
                C437.2,62,452,76.8,452,95z"/>
              <path className="path" style={this.pathStyle} d="M473.8,179.6c26.8,76.8,12.1,161.6-38.9,223.9c-80.9,98.9-230.1,112.6-330.5,30.5s-116.3-231.1-35.4-330              S299.2-8.7,399.5,73.5"/>
            </svg>
          )
        }}

      </Observer>
    )
  }
}

export class HTMLLogo extends PureComponent{
  render() {
    return (
      <svg className="svgLogos html" viewBox="0 0 512 512">
        <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/>
        <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/>
        <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/>
        <path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>
      </svg>
    )
  }
}

export class CSSLogo extends PureComponent {
  render() {
    return (
      <svg className="svgLogos css" viewBox="0 0 362.7 412">
	      <polygon fill="#264DE4" points="362.7,0.6 329.7,370.8 181.1,412 33,370.9 0,0.6 	"/>
	      <polygon fill="#2965F1" points="301.4,347.2 329.6,30.9 181.4,30.9 181.4,380.5 	"/>
	      <polygon fill="#EBEBEB" points="75.7,168.2 79.7,213.6 181.4,213.6 181.4,168.2 	"/>
	      <polygon fill="#EBEBEB" points="181.4,76.3 181.2,76.3 67.5,76.3 71.6,121.7 181.4,121.7 	"/>
	      <polygon fill="#EBEBEB" points="181.4,333.4 181.4,286.2 181.2,286.2 130.6,272.5 127.4,236.3 102.8,236.3 
	      	81.8,236.3 88.1,307.6 181.2,333.5 	"/>
	      <polygon fill="#FFFFFF" points="237.1,213.6 231.9,272.5 181.2,286.2 181.2,333.4 274.3,307.6 275,300 285.7,180.4 
	      	286.8,168.2 295,76.3 181.2,76.3 181.2,121.7 245.2,121.7 241.1,168.2 181.2,168.2 181.2,213.6 	"/>
      </svg>
    )
  }
}

export class SassLogo extends PureComponent{
  render() {
    return (
      <Observer>
        { ({ inView, ref }) => {

          pathAnimate(inView, ".svgLogos.sass .path", {in:2200});
          
          return (
            <svg className="svgLogos sass" viewBox="0 0 560 423" ref={ref}>
              <path className={`path ${inView?'visible':''}`} fill="#CD6799" 
                d="M471.4,236c-19.1,0.1-35.7,4.7-49.6,11.5c-5.1-10.1-10.2-19.1-11.1-25.7c-1-7.7-2.2-12.4-1-21.6
              	c1.2-9.2,6.6-22.3,6.5-23.3s-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5c-1.1,2.9-3.2,9.5-4.6,16.3c-1.9,10-22,45.7-33.5,64.4
              	c-3.7-7.3-6.9-13.7-7.6-18.8c-1-7.7-2.2-12.4-1-21.6c1.2-9.2,6.6-22.3,6.5-23.3c-0.1-1-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5
              	c-1.1,2.9-2.3,9.7-4.6,16.3c-2.3,6.6-29,66.2-36,81.6c-3.6,7.9-6.7,14.2-8.9,18.5c0,0,0,0,0,0s-0.1,0.3-0.4,0.8
              	c-1.9,3.7-3,5.7-3,5.7s0,0,0,0.1c-1.5,2.7-3.1,5.2-3.9,5.2c-0.6,0-1.7-7.2,0.2-17c4-20.7,13.5-52.9,13.4-54c0-0.6,1.8-6.2-6.2-9.1
              	c-7.8-2.9-10.6,1.9-11.3,1.9c-0.7,0-1.2,1.7-1.2,1.7s8.7-36.2-16.6-36.2c-15.8,0-37.6,17.3-48.4,32.9c-6.8,3.7-21.3,11.6-36.8,20.1
              	c-5.9,3.3-12,6.6-17.7,9.7c-0.4-0.4-0.8-0.9-1.2-1.3c-30.6-32.7-87.2-55.8-84.8-99.7c0.9-16,6.4-58,108.7-109
              	C233.9,19,300.9,30.5,312.5,56c16.6,36.4-35.9,104-122.9,113.8c-33.2,3.7-50.6-9.1-55-13.9c-4.6-5-5.3-5.3-7-4.3c-2.8,1.5-1,6,0,8.6
              	c2.6,6.8,13.3,18.8,31.4,24.7c16,5.2,54.9,8.1,102-10.1c52.7-20.4,93.9-77.1,81.8-124.6C330.7,2,250.7-13.9,175,13
              	C130,29,81.2,54.2,46.1,87c-41.7,39-48.3,72.9-45.6,87.1c9.7,50.4,79.2,83.2,107,107.5c-1.4,0.8-2.7,1.5-3.8,2.1
              	c-13.9,6.9-66.9,34.6-80.1,63.9c-15,33.2,2.4,57,13.9,60.2c35.7,9.9,72.4-7.9,92.1-37.3c19.7-29.4,17.3-67.6,8.2-85.1
              	c-0.1-0.2-0.2-0.4-0.4-0.6c3.6-2.1,7.3-4.3,10.9-6.4c7.1-4.2,14.1-8.1,20.1-11.3c-3.4,9.3-5.9,20.4-7.1,36.4
              	c-1.5,18.8,6.2,43.2,16.3,52.8c4.5,4.2,9.8,4.3,13.2,4.3c11.8,0,17.1-9.8,23-21.4c7.2-14.2,13.7-30.7,13.7-30.7s-8.1,44.6,13.9,44.6
              	c8,0,16.1-10.4,19.7-15.7c0,0.1,0,0.1,0,0.1s0.2-0.3,0.6-1c0.8-1.3,1.3-2.1,1.3-2.1s0-0.1,0-0.2c3.2-5.6,10.4-18.3,21.1-39.4
              	c13.8-27.2,27.1-61.2,27.1-61.2s1.2,8.3,5.3,22.1c2.4,8.1,7.4,17,11.4,25.6c-3.2,4.5-5.2,7-5.2,7s0,0,0.1,0.1
              	c-2.6,3.4-5.4,7.1-8.5,10.7c-10.9,13-23.9,27.9-25.7,32.2c-2.1,5.1-1.6,8.8,2.4,11.8c2.9,2.2,8.1,2.5,13.4,2.2
              	c9.8-0.7,16.7-3.1,20.1-4.6c5.3-1.9,11.5-4.8,17.3-9.1c10.7-7.9,17.2-19.2,16.6-34.1c-0.3-8.2-3-16.4-6.3-24.1
              	c1-1.4,1.9-2.8,2.9-4.2c16.9-24.7,30-51.8,30-51.8s1.2,8.3,5.3,22.1c2,7,6.1,14.6,9.7,22c-15.9,12.9-25.7,27.9-29.2,37.7
              	c-6.3,18.2-1.4,26.4,7.9,28.3c4.2,0.9,10.2-1.1,14.6-3c5.6-1.8,12.2-4.9,18.5-9.5c10.7-7.9,21-18.9,20.4-33.8
              	c-0.3-6.8-2.1-13.5-4.6-20c13.5-5.6,30.9-8.7,53.1-6.1c47.6,5.6,57,35.3,55.2,47.8c-1.8,12.5-11.8,19.3-15.1,21.4
              	c-3.3,2.1-4.4,2.8-4.1,4.3c0.4,2.2,2,2.1,4.8,1.7c3.9-0.7,25-10.1,25.9-33.1C548.9,267.8,520.9,235.7,471.4,236z M104.2,359.8
              	C88.4,377,66.4,383.5,56.9,378c-10.2-5.9-6.2-31.3,13.2-49.5c11.8-11.1,27-21.4,37.1-27.7c2.3-1.4,5.7-3.4,9.8-5.9
              	c0.7-0.4,1.1-0.6,1.1-0.6l0,0c0.8-0.5,1.6-1,2.4-1.5C127.6,318.8,120.8,341.7,104.2,359.8z M219.2,281.6c-5.5,13.4-17,47.7-24,45.8
              	c-6-1.6-9.7-27.6-1.2-53.3c4.3-12.9,13.4-28.3,18.7-34.3c8.6-9.6,18.1-12.8,20.4-8.9C236,236,222.6,273.2,219.2,281.6z M314.1,327
              	c-2.3,1.2-4.5,2-5.5,1.4c-0.7-0.4,1-2,1-2s11.9-12.8,16.6-18.6c2.7-3.4,5.9-7.4,9.3-11.9c0,0.4,0,0.9,0,1.3
              	C335.5,312.5,320.7,322.8,314.1,327z M387.3,310.3c-1.7-1.2-1.4-5.2,4.3-17.7c2.2-4.9,7.4-13.1,16.3-21c1,3.2,1.7,6.3,1.6,9.2
              	C409.4,300.1,395.6,307.3,387.3,310.3z"/>
            </svg>
          )
        }}
      </Observer>
    )
  }
}