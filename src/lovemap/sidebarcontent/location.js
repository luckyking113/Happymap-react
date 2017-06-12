import React, { Component } from 'react';
import $ from 'jquery';
// import Stepnavigation from './stepnavigation';
// import './lovemap.css';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setLocation }   from '../../actions'
import { connect }      from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (lat, lng) => {
      dispatch(setLocation(lat, lng))
    }
  }
}

class Location extends Component { 
  constructor(props) {
    super(props)
    this.state = { 
        address: 'San Francisco, CA',
        locationlatLng: {}
                
    }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
      console.log(event.target)
      if (event.target && event.target.id == 'button') event.preventDefault()
    
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>{
        //   console.log(event)
        this.props.setLocation(latLng.lat, latLng.lng)
        //console.log(latLng);
      })
      .catch(error => console.error('Error', error))   
  }

  searchClick(){
    $(".place-block").toggleClass("focus");
  }
  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
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
                            <form onFocus={this.searchClick}>
                                <PlacesAutocomplete 
                                id="key"
                                onEnterKeyDown={this.handleFormSubmit} 
                                inputProps={inputProps} 
                                highlightFirstSuggestion={true}/>
                                <button id='button' onClick={this.handleFormSubmit} className="search-submit"></button>
                            </form>
                            {/*<input type="search" placeholder="Search for city or country" name="search" onFocus={this.searchClick} />

                            <div className="search-submit">
                                <input type="submit" />
                            </div>*/}
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

export default connect(null, mapDispatchToProps)(Location)