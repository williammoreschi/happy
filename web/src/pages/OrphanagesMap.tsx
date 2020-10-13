import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../assets/styles/pages/OrphanagesMap.css';

import mapMarketImg from '../assets/images/map-marker.svg';

function OrphanagesMap(){
  const [urlMap,setUrlMap] = useState('');
  useEffect(()=>{
    if(process.env.REACT_APP_MAPBOX_TOKEN){
      setUrlMap(`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);
    }else{
      setUrlMap('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png');
    }
  },[]);
  return (
    <div id="page-app">
      <aside>
        <header>
          <img src={mapMarketImg} alt="Happy"/>

          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Maringá</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
      center={[-23.4352717,-51.9686006]}
      zoom={15}
      style={{width:'100%',height:'100%'}}
      >
        <TileLayer url={urlMap} />
      </Map>

      <Link to="/" className="create-orphanage" >
      <FiPlus size={26} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;