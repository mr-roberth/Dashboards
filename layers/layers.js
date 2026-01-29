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
var format_28012026Mapa_Modelo_2 = new ol.format.GeoJSON();
var features_28012026Mapa_Modelo_2 = format_28012026Mapa_Modelo_2.readFeatures(json_28012026Mapa_Modelo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28012026Mapa_Modelo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28012026Mapa_Modelo_2.addFeatures(features_28012026Mapa_Modelo_2);
var lyr_28012026Mapa_Modelo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28012026Mapa_Modelo_2, 
                style: style_28012026Mapa_Modelo_2,
                popuplayertitle: '28.01.2026.Mapa_Modelo',
                interactive: true,
                title: '<img src="styles/legend/28012026Mapa_Modelo_2.png" /> 28.01.2026.Mapa_Modelo'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_28012026Mapa_Modelo_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleTerrainHybrid_1,lyr_28012026Mapa_Modelo_2];
lyr_28012026Mapa_Modelo_2.set('fieldAliases', {'Zafra': 'Zafra', 'Zona': 'Zona', 'Zona Nombre': 'Zona Nombre', 'Supervisor de Produccion': 'Supervisor de Produccion', 'Supervisor de Cosecha': 'Supervisor de Cosecha', 'Ejido': 'Ejido', 'Predio': 'Predio', 'Lote': 'Lote', 'kms Batey': 'kms Batey', 'Gps': 'Gps', 'Id_Cropwise': 'Id_Cropwise', 'ORDEN': 'ORDEN', 'Clave': 'Clave', 'Fraccion': 'Fraccion', 'Nombre del Productor': 'Nombre del Productor', 'origen': 'origen', 'Tenencia': 'Tenencia', 'avio': 'avio', 'Tipo Caña': 'Tipo Caña', 'Contrato': 'Contrato', 'Agrupacion': 'Agrupacion', 'Municipio': 'Municipio', 'Riego': 'Riego', 'Tipo riego': 'Tipo riego', 'tipo energia': 'tipo energia', 'fuente de agua': 'fuente de agua', 'Concesión CONAGUA': 'Concesión CONAGUA', 'Ciclo': 'Ciclo', 'Clase Ciclo': 'Clase Ciclo', 'Variedad': 'Variedad', 'Madurez actual': 'Madurez actual', 'Madurez Correcta': 'Madurez Correcta', 'Fecha corte': 'Fecha corte', 'Fecha fertil': 'Fecha fertil', 'Distancia Surco': 'Distancia Surco', 'tipo suelo': 'tipo suelo', 'Tipo Corte': 'Tipo Corte', 'Gpo. Cosecha': 'Gpo. Cosecha', 'Superficie estimada': 'Superficie estimada', 'TCH Estimado': 'TCH Estimado', 'CLASIFICACION': 'CLASIFICACION', 'Toneladas': 'Toneladas', 'Superficie cosechada': 'Superficie cosechada', 'TCH cosechado': 'TCH cosechado', 'Toneladas cosechada': 'Toneladas cosechada', 'Regimen': 'Regimen', 'Frente_Corte': 'Frente_Corte', 'C_Ejido': 'C_Ejido', 'SHP': 'SHP', });
lyr_28012026Mapa_Modelo_2.set('fieldImages', {'Zafra': 'TextEdit', 'Zona': 'TextEdit', 'Zona Nombre': 'TextEdit', 'Supervisor de Produccion': 'TextEdit', 'Supervisor de Cosecha': 'TextEdit', 'Ejido': 'TextEdit', 'Predio': 'TextEdit', 'Lote': 'TextEdit', 'kms Batey': 'TextEdit', 'Gps': 'TextEdit', 'Id_Cropwise': 'TextEdit', 'ORDEN': 'TextEdit', 'Clave': 'TextEdit', 'Fraccion': 'TextEdit', 'Nombre del Productor': 'TextEdit', 'origen': 'TextEdit', 'Tenencia': 'TextEdit', 'avio': 'TextEdit', 'Tipo Caña': 'TextEdit', 'Contrato': 'TextEdit', 'Agrupacion': 'TextEdit', 'Municipio': 'TextEdit', 'Riego': 'TextEdit', 'Tipo riego': 'TextEdit', 'tipo energia': 'TextEdit', 'fuente de agua': 'TextEdit', 'Concesión CONAGUA': 'TextEdit', 'Ciclo': 'TextEdit', 'Clase Ciclo': 'TextEdit', 'Variedad': 'TextEdit', 'Madurez actual': 'TextEdit', 'Madurez Correcta': 'TextEdit', 'Fecha corte': 'TextEdit', 'Fecha fertil': 'TextEdit', 'Distancia Surco': 'TextEdit', 'tipo suelo': 'TextEdit', 'Tipo Corte': 'TextEdit', 'Gpo. Cosecha': 'TextEdit', 'Superficie estimada': 'TextEdit', 'TCH Estimado': 'TextEdit', 'CLASIFICACION': 'TextEdit', 'Toneladas': 'TextEdit', 'Superficie cosechada': 'TextEdit', 'TCH cosechado': 'TextEdit', 'Toneladas cosechada': 'TextEdit', 'Regimen': 'TextEdit', 'Frente_Corte': 'TextEdit', 'C_Ejido': 'TextEdit', 'SHP': 'TextEdit', });
lyr_28012026Mapa_Modelo_2.set('fieldLabels', {'Zafra': 'no label', 'Zona': 'inline label - always visible', 'Zona Nombre': 'inline label - always visible', 'Supervisor de Produccion': 'inline label - always visible', 'Supervisor de Cosecha': 'no label', 'Ejido': 'inline label - always visible', 'Predio': 'inline label - always visible', 'Lote': 'no label', 'kms Batey': 'no label', 'Gps': 'inline label - always visible', 'Id_Cropwise': 'no label', 'ORDEN': 'inline label - always visible', 'Clave': 'no label', 'Fraccion': 'no label', 'Nombre del Productor': 'inline label - always visible', 'origen': 'no label', 'Tenencia': 'no label', 'avio': 'inline label - visible with data', 'Tipo Caña': 'no label', 'Contrato': 'no label', 'Agrupacion': 'inline label - always visible', 'Municipio': 'no label', 'Riego': 'no label', 'Tipo riego': 'no label', 'tipo energia': 'no label', 'fuente de agua': 'no label', 'Concesión CONAGUA': 'no label', 'Ciclo': 'inline label - always visible', 'Clase Ciclo': 'no label', 'Variedad': 'no label', 'Madurez actual': 'no label', 'Madurez Correcta': 'no label', 'Fecha corte': 'inline label - always visible', 'Fecha fertil': 'inline label - always visible', 'Distancia Surco': 'no label', 'tipo suelo': 'no label', 'Tipo Corte': 'no label', 'Gpo. Cosecha': 'no label', 'Superficie estimada': 'no label', 'TCH Estimado': 'inline label - always visible', 'CLASIFICACION': 'inline label - always visible', 'Toneladas': 'no label', 'Superficie cosechada': 'no label', 'TCH cosechado': 'no label', 'Toneladas cosechada': 'no label', 'Regimen': 'no label', 'Frente_Corte': 'no label', 'C_Ejido': 'no label', 'SHP': 'no label', });
lyr_28012026Mapa_Modelo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});