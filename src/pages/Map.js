import React from "react";

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import LeafletSearch from "react-leaflet-search";

//Currently, Florida is loaded in upon first entering the app
//we need to change this so the user's selected state is loaded in from his/her account schema
const position = [27.6648, -81.5158]

const map = () => (
    <div style={{height: "100%"}}>
        <div class="spacer2"></div>
        <Map class="container mapbox" center={position} zoom={7}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
            <LeafletSearch position="topleft"/>
            
            <div class="spacer"></div>
            <div class="row taskbar rounded-pill mx-auto">
                <div class="col-1"></div>
                <div class="col">
                    <div class="spacer"></div>
                    <div class="halfspacer"></div>
                <div class="row">
                    <label class= "protestlabel">Filter by Protest Type:</label>
                        <form action="">
                            <div class="form-check">
                                <input type="checkbox" class="checkbox-round peaceful" id="peacefulCheck"></input>
                                <label class="form-check-label" for="check1">Peaceful</label>
                            </div>
                        </form>
                        <form action="">
                            <div class="form-check">
                                <input type="checkbox" class="checkbox-round nonpeaceful" id="nonpeacefulCheck1"></input>
                                <label class="form-check-label" for="check2">Non-peaceful</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-3">
                    <div class="halfspacer"></div>
                    <button type="button" class="btn btn-block rounded-pill blue">Add Protest </button>
                </div>
                <div class="col-3">
                    <div class="halfspacer"></div>
                        <button type="button" class="btn btn-block rounded-pill blue">Delete Protest</button>
                </div>
            </div>
            </Map>
    </div>
)

export default map;