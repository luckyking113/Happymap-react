import React, { Component } from 'react';
import './lovemap.css';


class Posterposition extends Component { 
  render() {
    return (
        <div className="poster-position">
            {/*<h1 style={{marginTop:'300px', marginLeft: '460px'}}>Please set map on this area</h1>*/}
            <div className="control-zoom">
                <a className="control-zoom-left zoom-in" href="#" title="Zoom in">+ </a>
                <a className="control-zoom-right zoom-out" href="#" title="Zoom out">- </a>
            </div>
            <div className="poster borders-double orientation-portrait size-18x24">
                <div className="poster__frame">
                    <div className="poster-border heart-shape">
                        <div className="poster__paper ">
                            <div className="poster__map__wrap__row">
                                <div className="poster__map__wrap">
                                    <div className="poster__map">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="poster__labels">
                        <h2 className="title">
                            <span>Where You Stole My </span>
                        </h2>
                        <h3 className="subtitle">
                            <span>Paris, France </span>
                        </h3>
                        <h4 className="tagline">
                            <span>48.856°N / 2.3522°E </span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Posterposition;