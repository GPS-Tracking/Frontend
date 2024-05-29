import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Polyline, Tooltip, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import localforage from 'localforage';

localforage.config({
  name: 'map-tile-cache'
});

class CachedTileLayer extends Component {
  createTile = (coords, done) => {
    const tile = document.createElement('img');

    const url = this.props.url.replace('{s}', 'a')
                              .replace('{z}', coords.z)
                              .replace('{x}', coords.x)
                              .replace('{y}', coords.y);

    localforage.getItem(url).then((data) => {
      if (data) {
        tile.src = data;
      } else {
        tile.src = url;
        tile.crossOrigin = 'Anonymous';
        tile.onload = () => {

          const canvas = document.createElement('canvas');
          canvas.width = tile.naturalWidth;
          canvas.height = tile.naturalHeight;
          const context = canvas.getContext('2d');
          context.drawImage(tile, 0, 0);
          const base64Url = canvas.toDataURL('image/png');

          localforage.setItem(url, base64Url);
        };
      }
      done(null, tile);
    }).catch(() => {
      tile.src = url;
      done(null, tile);
    });

    return tile;
  };

  render() {
    return (
      <TileLayer
        {...this.props}
        tileSize={256}
        createTile={this.createTile}
      />
    );
  }
}

class MapComponent extends Component {
  render() {
    const { data, groupedData, warnaMarker } = this.props;

    return (
      <MapContainer center={[-6.354881750178463, 106.84146110607826]} zoom={12} className=''>
        <CachedTileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution="&copy; <a>Kompres IOT 'Bismillah Juara'</a>" 
        />

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
