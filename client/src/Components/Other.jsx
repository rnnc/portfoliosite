import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import CardContainer from './Cards/Container';

import { AIllustratorLogo, APhotoshopLogo, APremiereProLogo, AAfterEffectsLogo } from './Logos/OtherLogos';

export default class Other extends Component {

  render() {

    const Other = [
      [
        AIllustratorLogo,
        "https://www.adobe.com/ca/products/illustrator.html",
        "Adobe Illustrator",
        "Vector Graphics editor"
      ],
      [
        APhotoshopLogo,
        "https://www.adobe.com/ca/products/photoshop.html",
        "Adobe Photoshop",
        "Raster graphics editor and image manipulation"
      ],
      [
        APremiereProLogo,
        "https://www.adobe.com/ca/products/premiere.html",
        "Adobe Premiere Pro",
        "Timeline based video editing application"
      ],
      [
        AAfterEffectsLogo,
        "https://www.adobe.com/ca/products/aftereffects.html",
        "Adobe After Effects",
        "Visual motion graphics and compositing app"
      ]
    ];

    const blurbDescription =
      `Other useful software I've picked up over the years`;

    return (
      <Observer threshold={ 0.3 }>
        { ({ inView, ref }) => {
          const entered = inView ? "enter" : "";
          return (
            <div className="masterContainer" ref={ ref }>
              <div className={ `background other ${entered}` } />

              <div className={ `descriptor ${entered}` }>

                <div className="titleContainer">
                  <div className="title">
                    <div className={ `animationContainer ${entered}` }>
                      <div className="animationText">
                        { "Other" }
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className={ `content ${entered}` }>
                <CardContainer>
                  { Other }
                </CardContainer>
              </div>

              <div className="blurbContainer">
                <div className="blurb">
                  <div className="bg" />
                  <div className="blurbText">
                    { blurbDescription }
                  </div>
                </div>
              </div>

            </div>
          )
        } }
      </Observer>
    )
  }
}
