import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet';

class MapComponent extends Component {
  render() {
    const { data, groupedData, warnaMarker } = this.props;

    return (
      <MapContainer center={[-6.354881750178463, 106.84146110607826]} zoom={30} className=''>
        <TileLayer attribution="&copy; <a>PKKM IF Kartanagari Kelompok 2</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {Object.entries(groupedData).map(([name, polylinePoints], index) => (
          <div key={index}>
            <h2>{name}</h2>
            {polylinePoints.length > 3 && (
              <Polyline key={index} positions={polylinePoints} color="black" />
            )}

            {data
              .filter(titik => titik.Name === name)
              .map(titik => (
                <Marker
                  key={titik.id}
                  position={[titik.Lattitude, titik.Longitude]}
                  icon={new L.Icon({
                    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${warnaMarker(titik.Status)}.png`,
                    iconSize: [25, 41],
                  })}
                >
                  {/* klo ga mau di hover , permanent ganti ke true */}
                  <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent={true} className="custom-tooltip">
                    <span>
                      {titik.Name}
                      </span>
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
