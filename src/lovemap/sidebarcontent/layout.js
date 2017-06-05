import React, { Component } from 'react';
// import Stepnavigation from './stepnavigation';
// import './lovemap.css';



class Layout extends Component { 
  render() {
    return (
        <div className="toolbar-content">
            {/*<Stepnavigation />*/}
            <div id="tab-layout" className="toolbar-container">
                <a href="#" className="toggle-link"><span><img src="../images/toggle.png" alt="" /></span></a>
                <div className="option-block">
                    <div className="subtitle">Borders </div>
                    <div className="option-radio-wrap">
                        <div className="option-radio">  
                            <input type="radio" id="borders__single" name="border" value="single" />
                            {/*<label for="borders__none">*/}
                            <label>
                                <span className="option-radio-img"><img src="../images/border0.png" alt="" /></span>
                                <span className="option-radio-txt">Single </span>
                            </label>
                        </div>
                        <div className="option-radio">
                            <input type="radio" id="borders__double" name="border" value="double" />
                            <label>
                                <span className="option-radio-img"><img src="../images/border1.png" alt="" /></span>
                                <span className="option-radio-txt">Double </span>
                            </label>
                        </div>
                        <div className="option-radio">
                            <input type="radio" id="borders__none" name="border" value="none" />
                            <label>
                                <span className="option-radio-img"><img src="../images/border2.png" alt="" /></span>
                                <span className="option-radio-txt">None </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="option-block">
                    <div className="subtitle">Orientation </div>
                    <div className="option-radio-wrap">
                        <div className="option-radio option-radio-portrait">
                            <input type="radio" id="orientation__portrait" name="orientation" value="portrait" />
                            {/*<label for="orientation__portrait">*/}
                            <label>
                                <span className="option-radio-img"><img src="../images/layout-portrait.png" alt="" /></span>
                                <span className="option-radio-txt">Portrait </span>
                            </label>
                        </div>
                        <div className="option-radio option-radio-landscape">
                            <input type="radio" id="orientation__landscape" name="orientation" value="landscape" />
                            <label>
                                <span className="option-radio-img"><img src="../images/layout-portrait.png" alt="" /></span>
                                <span className="option-radio-txt">Landscape </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="option-block option-block-poster">
                    <div className="subtitle">Poster Size </div>
                    <div className="option-radio-wrap">
                        <div className="option-radio option-radio-size">
                            <input type="radio" id="size__8x10" name="size" value="8x10" />
                            {/*<label for="size__8x10">*/}
                            <label>
                                <span className="option-radio-img">
                                <img src="../images/size.png" alt="" />
                                <span className="option-size-txt">8x10 </span>
                                </span>
                                <span className="option-radio-txt">$ 30 </span>
                            </label>
                        </div>
                        <div className="option-radio option-radio-size">
                            <input type="radio" id="size__12x16" name="size" value="12x16" />
                            <label>
                                <span className="option-radio-img">
                                <img src="../images/size.png" alt="" />
                                <span className="option-size-txt">12x16 </span>
                                </span>
                                <span className="option-radio-txt">$ 40 </span>
                            </label>
                        </div>
                        <div className="option-radio option-radio-size">
                            <input type="radio" id="size__18x24" name="size" value="18x24" />
                            <label>
                                <span className="option-radio-img">
                                <img src="../images/size.png" alt="" />
                                <span className="option-size-txt">18x24 </span>
                                </span>
                                <span className="option-radio-txt">$ 50 </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Layout;