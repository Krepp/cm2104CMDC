//set the map and initial coordinates
var mymap = L.map('mapid').setView([0,0], 1);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution:'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16 });

Esri_WorldGrayCanvas.addTo(mymap);

$.getJSON('world-countries.json', function(json) {

		geoLayer = L.geoJson(json).addTo(mymap);
		
		map.fitBounds( geoLayer.getBounds() )
			.setMaxBounds( geoLayer.getBounds().pad(0.5) );

		geoList = new L.Control.GeoJSONSelector(geoLayer, {
			zoomToLayer: true,
			listOnlyVisibleLayers: true
		});

		geoList.on('change', function(e) {

			$('#selection').text( JSON.stringify(e.layers[0].feature.properties) );
		});

		map.addControl(geoList);

	});
