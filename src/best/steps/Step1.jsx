import React, { Component, Fragment, createRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// type Position = [number, number];

// type Props = {|
//   content: string,
//   position: Position,
// |};

// type MarkerData = {| ...Props, key: string |};

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <Fragment>{items}</Fragment>;
};

export default class CustomComponent extends Component {
  state = {
    markers: [
      { key: 'marker1', position: [46.82, -71.22], content: 'My first popup' },
      { key: 'marker2', position: [46.8, -71.21], content: 'My second popup' },
      { key: 'marker3', position: [46.79, -71.23], content: 'My third popup' },
    ],
  };

  incr = 4;

  handleClick = (e) => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          key: `marker${this.incr}`,
          position: [e.latlng.lat, e.latlng.lng],
          content: `mon popup ${this.incr++}`,
        },
      ],
    });
  };

  render() {
    return (
      <Map
        center={[46.8141244, -71.2258312]}
        zoom={13}
        onClick={this.handleClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MyMarkersList markers={this.state.markers} />
      </Map>
    );
  }
}
