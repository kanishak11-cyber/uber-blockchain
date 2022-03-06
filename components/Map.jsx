import mapboxGl from "mapbox-gl";
import {useEffect} from "react";
const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxGl.accessToken = 'pk.eyJ1Ijoia2FuaXNoYWstY2hhdXJhc2lhIiwiYSI6ImNsMGU2bDI4azBmd3ozZG4wbGV1eWwweHIifQ.01fJeQ-_GXFDkBsBeOV3sg'
// console.log(object)
const Map = () => {
  useEffect(() => {
    const map = new mapboxGl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  }, [])

  return <div className={style.wrapper} id="map" />;
};

export default Map;
