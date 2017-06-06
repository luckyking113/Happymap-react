import React, { Component } from 'react';
import _ from 'lodash';
import '../lovemap.css';
import $ from 'jquery';


class Customise extends Component { 
    constructor() {
        super();		
        this.state = {
            data: [
                {"id":"radio1", "stylename": "style0", "imgsrc":"1.png"}, 
                {"id":"radio2", "stylename": "style1", "imgsrc":"2.png"},
                {"id":"radio3", "stylename": "style2", "imgsrc":"3.png"},
                {"id":"radio4", "stylename": "style3", "imgsrc":"4.png"},
                {"id":"radio5", "stylename": "style4", "imgsrc":"5.png"},
                {"id":"radio6", "stylename": "style5", "imgsrc":"6.png"}
            ]
        }
    }

    colorRadio(){
        return _.map(this.state.data, (datum, index) => {            
            return(
                <div key={index} className="color-radio">
                    <input id={datum.id} type="radio" name="filter" onChange={this.radioColor}/>
                    <label>
                        <span onClick={this.mapcolor}>
                            <img className={datum.stylename} src={`../images/map-styles/${datum.imgsrc}`} alt="" />
                        </span>
                    </label>
                </div>
            )
        });
    }

    radioColor(e){
        console.log(e.target.id);
    }
    mapcolor(e){
        switch (e.target.className){
            case 'style0':
            {
                // $("span").css("border-color","#93d4f7");
                $(".heart-shape").addClass("heart-color0"); 
                $(".heart-shape").removeClass("heart-color1");
                $(".heart-shape").removeClass("heart-color2");
                $(".heart-shape").removeClass("heart-color3");
                $(".heart-shape").removeClass("heart-color4");
                $(".heart-shape").removeClass("heart-color5");

                $("#radio1").attr('checked', true);
                $("#radio2").attr('checked', false);
                $("#radio3").attr('checked', false);
                $("#radio4").attr('checked', false);
                $("#radio5").attr('checked', false);
                $("#radio6").attr('checked', false);



                break;
            }
            case 'style1':
            {                       
                $(".heart-shape").addClass("heart-color1");
                $(".heart-shape").removeClass("heart-color2");
                $(".heart-shape").removeClass("heart-color3");
                $(".heart-shape").removeClass("heart-color4");
                $(".heart-shape").removeClass("heart-color5");  
                
                $("#radio1").attr('checked', false);
                $("#radio2").attr('checked', true);
                $("#radio3").attr('checked', false);
                $("#radio4").attr('checked', false);
                $("#radio5").attr('checked', false);
                $("#radio6").attr('checked', false);
                break;
            }
            case 'style2':
            {
                $(".heart-shape").addClass("heart-color2"); 
                $(".heart-shape").removeClass("heart-color3");
                $(".heart-shape").removeClass("heart-color4");
                $(".heart-shape").removeClass("heart-color5");  
                $("#radio1").attr('checked', false);
                $("#radio2").attr('checked', false);
                $("#radio3").attr('checked', true);
                $("#radio4").attr('checked', false);
                $("#radio5").attr('checked', false);
                $("#radio6").attr('checked', false);
                break;
            }
            case 'style3':
            {
                $(".heart-shape").addClass("heart-color3");
                $(".heart-shape").removeClass("heart-color4");
                $(".heart-shape").removeClass("heart-color5");  

                $("#radio1").attr('checked', false);
                $("#radio2").attr('checked', false);
                $("#radio3").attr('checked', false);
                $("#radio4").attr('checked', true);
                $("#radio5").attr('checked', false);
                $("#radio6").attr('checked', false);
                break; 
            }
            case 'style4':
            {
                $(".heart-shape").addClass("heart-color4");
                $(".heart-shape").removeClass("heart-color5");

                $("#radio1").attr('checked', false);
                $("#radio2").attr('checked', false);
                $("#radio3").attr('checked', false);
                $("#radio4").attr('checked', false);
                $("#radio5").attr('checked', true);
                $("#radio6").attr('checked', false);
                break; 
            }
            case 'style5':  
            {
                $(".heart-shape").addClass("heart-color5");

                $("#radio1").attr('checked', false);
                $("#radio2").attr('checked', false);
                $("#radio3").attr('checked', false);
                $("#radio4").attr('checked', false);
                $("#radio5").attr('checked', false);
                $("#radio6").attr('checked', true);
                break; 
            }
            default:
                break;
            
          
        }
    }
    render() {
        return (    
            <div className="toolbar-content">
                {/*<Stepnavigation />*/}
                    <div id="tab-customize" className="toolbar-container">
                        <a href="#" className="toggle-link"><span><img src="../images/toggle.png" alt="" /></span></a>
                        <div className="color-block">
                            <div className="subtitle">Choose Your Color </div>
                            <div className="color-radio-wrap">
                                {this.colorRadio()}
                            </div>
                        </div>
                        <div className="custom-txt">
                            <div className="subtitle">Text Customisation </div>
                            <div className="input-row input-row-title">
                                <label>Title </label>
                                <input type="text" name="title" />
                            </div>
                            <div className="input-row input-row-subtitle">
                                <label>Subtitle </label>
                                <input type="text" name="subtitle" />
                            </div>
                            <div className="input-row input-row-tagline">
                                <label>Tagline </label>
                                {/*<input type="text" name="tagline" value="" autocomplete="off" />*/}
                                <input type="text" name="tagline"/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

    export default Customise;