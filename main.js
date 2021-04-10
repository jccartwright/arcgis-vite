import ArcGISMap from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import esriConfig from "@arcgis/core/config.js"
import './style.css'

// esriConfig.assetsPath = "./assets"

const map = new ArcGISMap({
  basemap: "oceans",
});

const view = new MapView({
  map,
  container: "mapDiv",
  extent: {
    spatialReference: {
      wkid: 102100,
    },
    xmax: -13581772,
    xmin: -13584170,
    ymax: 4436367,
    ymin: 4435053,
  },
});
