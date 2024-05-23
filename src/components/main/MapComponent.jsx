import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet';

class MapComponent extends Component {
  render() {
    const { data, groupedData, warnaMarker } = this.props;

    return (
      <MapContainer center={[-6.354881750178463, 106.84146110607826]} zoom={10} className=''>
        <TileLayer attribution="&copy; <a>Kompres IOT 'Bismillah Juara'</a>" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {Object.entries(groupedData).map(([name, polylinePoints], index) => (
          <div key={index}>
            <h2>{name}</h2>
            {polylinePoints.length > 1 && (
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
                  <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false} className="custom-tooltip">
                    <span>
                      Data ke-{titik.ID}
                      <br />
                      Alat : {titik.Name}
                      <br />
                      Status : {titik.Status}
                      <br />
                      Catatan : {titik.Catatan}
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
