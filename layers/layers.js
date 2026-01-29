var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Modelo_TCH_2 = new ol.format.GeoJSON();
var features_Modelo_TCH_2 = format_Modelo_TCH_2.readFeatures(json_Modelo_TCH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modelo_TCH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modelo_TCH_2.addFeatures(features_Modelo_TCH_2);
var lyr_Modelo_TCH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Modelo_TCH_2, 
                style: style_Modelo_TCH_2,
                popuplayertitle: 'Modelo_TCH',
                interactive: true,
    title: 'Modelo_TCH<br />\
    <img src="styles/legend/Modelo_TCH_2_0.png" /> 10 - 30<br />\
    <img src="styles/legend/Modelo_TCH_2_1.png" /> 30 - 50<br />\
    <img src="styles/legend/Modelo_TCH_2_2.png" /> 50 - 55.6<br />\
    <img src="styles/legend/Modelo_TCH_2_3.png" /> 55.6 - 60<br />\
    <img src="styles/legend/Modelo_TCH_2_4.png" /> 60 - 60<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_Modelo_TCH_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleTerrainHybrid_1,lyr_Modelo_TCH_2];
lyr_Modelo_TCH_2.set('fieldAliases', {'Zafra': 'Zafra', 'Zona': 'Zona', 'Zona Nombr': 'Zona Nombr', 'Supervisor': 'Supervisor', 'Ejido': 'Ejido', 'Predio': 'Predio', 'Gps': 'Gps', 'Id_Cropwis': 'Id_Cropwis', 'ORDEN': 'ORDEN', 'Clave': 'Clave', 'Nombre del': 'Nombre del', 'Tenencia': 'Tenencia', 'avio': 'avio', 'Tipo Caña': 'Tipo Caña', 'Contrato': 'Contrato', 'Agrupacion': 'Agrupacion', 'Municipio': 'Municipio', 'Riego': 'Riego', 'Tipo riego': 'Tipo riego', 'fuente de': 'fuente de', 'Ciclo': 'Ciclo', 'Variedad': 'Variedad', 'Madurez': 'Madurez', 'Fecha cort': 'Fecha cort', 'Fecha fert': 'Fecha fert', 'Suelo': 'Suelo', 'Tipo Corte': 'Tipo Corte', 'Superficie': 'Superficie', 'TCH estima': 'TCH estima', 'TIPO produ': 'TIPO produ', 'CLASIFICAC': 'CLASIFICAC', 'Toneladas': 'Toneladas', 'Regimen': 'Regimen', 'TCH': 'TCH', });
lyr_Modelo_TCH_2.set('fieldImages', {'Zafra': 'TextEdit', 'Zona': 'TextEdit', 'Zona Nombr': 'TextEdit', 'Supervisor': 'TextEdit', 'Ejido': 'TextEdit', 'Predio': 'TextEdit', 'Gps': 'TextEdit', 'Id_Cropwis': 'TextEdit', 'ORDEN': 'TextEdit', 'Clave': 'TextEdit', 'Nombre del': 'TextEdit', 'Tenencia': 'TextEdit', 'avio': 'TextEdit', 'Tipo Caña': 'TextEdit', 'Contrato': 'TextEdit', 'Agrupacion': 'TextEdit', 'Municipio': 'TextEdit', 'Riego': 'TextEdit', 'Tipo riego': 'TextEdit', 'fuente de': 'TextEdit', 'Ciclo': 'TextEdit', 'Variedad': 'TextEdit', 'Madurez': 'TextEdit', 'Fecha cort': 'TextEdit', 'Fecha fert': 'TextEdit', 'Suelo': 'TextEdit', 'Tipo Corte': 'TextEdit', 'Superficie': 'TextEdit', 'TCH estima': 'TextEdit', 'TIPO produ': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'Toneladas': 'TextEdit', 'Regimen': 'TextEdit', 'TCH': 'TextEdit', });
lyr_Modelo_TCH_2.set('fieldLabels', {'Zafra': 'no label', 'Zona': 'inline label - always visible', 'Zona Nombr': 'inline label - always visible', 'Supervisor': 'inline label - always visible', 'Ejido': 'inline label - always visible', 'Predio': 'inline label - always visible', 'Gps': 'inline label - always visible', 'Id_Cropwis': 'inline label - always visible', 'ORDEN': 'inline label - always visible', 'Clave': 'no label', 'Nombre del': 'inline label - always visible', 'Tenencia': 'inline label - always visible', 'avio': 'inline label - always visible', 'Tipo Caña': 'no label', 'Contrato': 'no label', 'Agrupacion': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Riego': 'inline label - always visible', 'Tipo riego': 'inline label - always visible', 'fuente de': 'no label', 'Ciclo': 'inline label - always visible', 'Variedad': 'inline label - always visible', 'Madurez': 'no label', 'Fecha cort': 'inline label - always visible', 'Fecha fert': 'inline label - always visible', 'Suelo': 'inline label - always visible', 'Tipo Corte': 'no label', 'Superficie': 'no label', 'TCH estima': 'inline label - always visible', 'TIPO produ': 'no label', 'CLASIFICAC': 'inline label - always visible', 'Toneladas': 'no label', 'Regimen': 'inline label - always visible', 'TCH': 'no label', });
lyr_Modelo_TCH_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});