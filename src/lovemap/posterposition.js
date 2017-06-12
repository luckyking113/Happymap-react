import React, { Component } from 'react';
import { connect } from 'react-redux';
import './lovemap.css';
import { Map, TileLayer } from 'react-leaflet';

const mapStateToProps = (state) => {
    return {
        location: state.location
    }
}

class Posterposition extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            position : {
                lat: 48.856614, 
                lng: 2.3522219000000177
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location !== nextProps.location) {
            this.setState({ position: nextProps.location })
        }     
    }
	
   
  render() {
    return (
        
        <div className="poster-position">
            <div className="control-zoom">
                <a className="control-zoom-left zoom-in" href="#" title="Zoom in">+ </a>
                <a className="control-zoom-right zoom-out" href="#" title="Zoom out">- </a>
            </div>
            <div className="poster borders-double orientation-portrait size-18x24">
                <div className="poster__frame">
                    <div className="poster-border heart-shape">
                        <div className="poster__paper ">
                            {/*<div className="poster__map__wrap__row">
                                <div className="poster__map__wrap">
                                    <div className="poster__map">
                                        */}
                                            <Map
                                                style={{height: "55vh"}}
                                                center={this.state.position}
                                                zoom={12}>
                                                <TileLayer
                                                    url="https://api.mapbox.com/styles/v1/luckyking113/cj3o7ex8d00402rqm9j1a5xzv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVja3lraW5nMTEzIiwiYSI6ImNqM28xOXd2YzAwMG4yd3A2ejlwazV4ZGoifQ.p953hPmHj3G24x0BVMZqlw"
                                                    attribution="<attribution>" />
                                            </Map>
{/*                                        
                                    </div>
                                </div>
                            </div>*/}
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
                            <span>{this.state.position.lat }°N / {this.state.position.lng }°E </span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default connect(mapStateToProps)(Posterposition)