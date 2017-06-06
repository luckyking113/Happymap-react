import React, { Component } from 'react';
import $ from 'jquery';
// import Stepnavigation from './stepnavigation';
// import './lovemap.css';


class Location extends Component { 
  searchClick(){
    $(".place-block").toggleClass("focus");
  }
  render() {
    return (
        <div className="toolbar-content">
            {/*<Stepnavigation />*/}
            <div id="tab-location" className="toolbar-container active">
                <a href="#" className="toggle-link"><span><img src="../images/toggle.png" alt="" /></span></a>
                <div className="place-block">
                    <div className="place-bg"><img src="../images/place-bg.png" alt="" />
                        <div className="place-bg-hover"><img src="../images/place-bg-hover.png" alt="" />
                        </div>
                    </div>
                    <div className="place-content">
                        <div className="subtitle"><i>Find your favorite place</i></div>
                        <div className="search-field">
                            <input type="search" placeholder="Search for city or country" name="search" onFocus={this.searchClick} />

                            <div className="search-submit">
                                <input type="submit" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="story-block">
                    <div className="subtitle">Tell Your Story </div>
                    <div className="story-content">
                        <div className="story-met"><a href="#"><span>where we met </span></a>
                        </div>
                        <div className="story-engaged"><a href="#"><span>where we got engaged </span></a>
                        </div>
                        <div className="story-married"><a href="#"><span>where we married </span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
}

export default Location;