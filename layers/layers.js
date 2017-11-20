var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_TitulosMinerosSeptiembre2017_0 = new ol.format.GeoJSON();
var features_TitulosMinerosSeptiembre2017_0 = format_TitulosMinerosSeptiembre2017_0.readFeatures(json_TitulosMinerosSeptiembre2017_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitulosMinerosSeptiembre2017_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TitulosMinerosSeptiembre2017_0.addFeatures(features_TitulosMinerosSeptiembre2017_0);var lyr_TitulosMinerosSeptiembre2017_0 = new ol.layer.Vector({
                source:jsonSource_TitulosMinerosSeptiembre2017_0, 
                style: style_TitulosMinerosSeptiembre2017_0,
                title: '<img src="styles/legend/TitulosMinerosSeptiembre2017_0.png" /> Titulos Mineros Septiembre 2017'
            });var format_SolicitudesMinerasAgosto2017_1 = new ol.format.GeoJSON();
var features_SolicitudesMinerasAgosto2017_1 = format_SolicitudesMinerasAgosto2017_1.readFeatures(json_SolicitudesMinerasAgosto2017_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolicitudesMinerasAgosto2017_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SolicitudesMinerasAgosto2017_1.addFeatures(features_SolicitudesMinerasAgosto2017_1);var lyr_SolicitudesMinerasAgosto2017_1 = new ol.layer.Vector({
                source:jsonSource_SolicitudesMinerasAgosto2017_1, 
                style: style_SolicitudesMinerasAgosto2017_1,
                title: '<img src="styles/legend/SolicitudesMinerasAgosto2017_1.png" /> Solicitudes Mineras Agosto 2017'
            });

lyr_TitulosMinerosSeptiembre2017_0.setVisible(true);lyr_SolicitudesMinerasAgosto2017_1.setVisible(true);
var layersList = [baseLayer,lyr_TitulosMinerosSeptiembre2017_0,lyr_SolicitudesMinerasAgosto2017_1];
lyr_TitulosMinerosSeptiembre2017_0.set('fieldAliases', {'CODIGO_EXP': 'CODIGO_EXP', 'CODIGO_RMN': 'CODIGO_RMN', 'FECHA_INSC': 'FECHA_INSC', 'ESTADO_EXP': 'ESTADO_EXP', 'CMC_TB_CON': 'CMC_TB_CON', 'MODALIDADE': 'MODALIDADE', 'MINERALES': 'MINERALES', 'TITULARES': 'TITULARES', 'MUNICIPIOS': 'MUNICIPIOS', 'FECHA_TERM': 'FECHA_TERM', });
lyr_SolicitudesMinerasAgosto2017_1.set('fieldAliases', {'CODIGO_EXP': 'CODIGO_EXP', 'FECHA_RADI': 'FECHA_RADI', 'ESTADO_EXP': 'ESTADO_EXP', 'AREA_DEFIN': 'AREA_DEFIN', 'MODALIDAD': 'MODALIDAD', 'MINERALES': 'MINERALES', 'TITULARES': 'TITULARES', 'MUNICIPIOS': 'MUNICIPIOS', });
lyr_TitulosMinerosSeptiembre2017_0.set('fieldImages', {'CODIGO_EXP': 'TextEdit', 'CODIGO_RMN': 'TextEdit', 'FECHA_INSC': 'TextEdit', 'ESTADO_EXP': 'TextEdit', 'CMC_TB_CON': 'TextEdit', 'MODALIDADE': 'TextEdit', 'MINERALES': 'TextEdit', 'TITULARES': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'FECHA_TERM': 'TextEdit', });
lyr_SolicitudesMinerasAgosto2017_1.set('fieldImages', {'CODIGO_EXP': 'Hidden', 'FECHA_RADI': 'TextEdit', 'ESTADO_EXP': 'Hidden', 'AREA_DEFIN': 'TextEdit', 'MODALIDAD': 'TextEdit', 'MINERALES': 'Hidden', 'TITULARES': 'Hidden', 'MUNICIPIOS': 'TextEdit', });
lyr_TitulosMinerosSeptiembre2017_0.set('fieldLabels', {'CODIGO_EXP': 'no label', 'CODIGO_RMN': 'no label', 'FECHA_INSC': 'no label', 'ESTADO_EXP': 'no label', 'CMC_TB_CON': 'no label', 'MODALIDADE': 'no label', 'MINERALES': 'no label', 'TITULARES': 'no label', 'MUNICIPIOS': 'no label', 'FECHA_TERM': 'no label', });
lyr_SolicitudesMinerasAgosto2017_1.set('fieldLabels', {'FECHA_RADI': 'no label', 'AREA_DEFIN': 'no label', 'MODALIDAD': 'no label', 'MUNICIPIOS': 'no label', });
lyr_SolicitudesMinerasAgosto2017_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_SolicitudesMinerasAgosto2017_1.on("postcompose", update);

    var listenerKey = lyr_SolicitudesMinerasAgosto2017_1.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });