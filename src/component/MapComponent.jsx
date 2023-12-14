import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet';

class MapComponent extends Component {
  render() {
    const { data, groupedData, warnaMarker } = this.props;

    return (
      <MapContainer center={[-6.760105360614504, 107.20951551421041]} zoom={25} className=''>
        <TileLayer attribution="&copy; <a>PKKM IF Kartanagari Kelompok 2</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {Object.entries(groupedData).map(([name, polylinePoints], index) => (
          <div key={index}>
            <h2>{name}</h2>
            {polylinePoints.length > 1 && (
              <Polyline key={index} positions={polylinePoints} color="gray" />
            )}

            {data
              .filter(titik => titik.Name === name)
              .map(titik => (
                <Marker key={titik.id} position={[titik.Lattitude, titik.Longitude]} icon={new L.Icon({ iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${warnaMarker(index)}.png`, iconSize: [25, 41] })}>
                  <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                    {titik.Name}
                    <br />
                    {titik.Status}
                  </Tooltip>
                </Marker>
              ))}
          </div>
        ))}
      </MapContainer>
    );
  }
}

export default MapComponent;
