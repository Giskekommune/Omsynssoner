var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.414000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1 = new ol.format.GeoJSON();
var features_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1 = format_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1.readFeatures(json_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1.addFeatures(features_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1);
var lyr_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1, 
                style: style_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1,
                popuplayertitle: 'KpSikringSone H190_2 og 3 - restriksjoner rundt flyplass',
                interactive: true,
                title: '<img src="styles/legend/KpSikringSoneH190_2og3restriksjonerrundtflyplass_1.png" /> KpSikringSone H190_2 og 3 - restriksjoner rundt flyplass'
            });
var format_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2 = new ol.format.GeoJSON();
var features_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2 = format_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2.readFeatures(json_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2.addFeatures(features_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2);
var lyr_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2, 
                style: style_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2,
                popuplayertitle: 'KpSikringSone H190_1 - prosessvatn til næringsmiddelindustri',
                interactive: true,
                title: '<img src="styles/legend/KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2.png" /> KpSikringSone H190_1 - prosessvatn til næringsmiddelindustri'
            });
var format_KpSikringSoneH130byggeforbudvedflyplass_3 = new ol.format.GeoJSON();
var features_KpSikringSoneH130byggeforbudvedflyplass_3 = format_KpSikringSoneH130byggeforbudvedflyplass_3.readFeatures(json_KpSikringSoneH130byggeforbudvedflyplass_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpSikringSoneH130byggeforbudvedflyplass_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpSikringSoneH130byggeforbudvedflyplass_3.addFeatures(features_KpSikringSoneH130byggeforbudvedflyplass_3);
var lyr_KpSikringSoneH130byggeforbudvedflyplass_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpSikringSoneH130byggeforbudvedflyplass_3, 
                style: style_KpSikringSoneH130byggeforbudvedflyplass_3,
                popuplayertitle: 'KpSikringSone H130 - byggeforbud ved flyplass',
                interactive: true,
                title: '<img src="styles/legend/KpSikringSoneH130byggeforbudvedflyplass_3.png" /> KpSikringSone H130 - byggeforbud ved flyplass'
            });
var format_KpSikringSoneH110nedslagsfeltdrikkevatn_4 = new ol.format.GeoJSON();
var features_KpSikringSoneH110nedslagsfeltdrikkevatn_4 = format_KpSikringSoneH110nedslagsfeltdrikkevatn_4.readFeatures(json_KpSikringSoneH110nedslagsfeltdrikkevatn_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpSikringSoneH110nedslagsfeltdrikkevatn_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpSikringSoneH110nedslagsfeltdrikkevatn_4.addFeatures(features_KpSikringSoneH110nedslagsfeltdrikkevatn_4);
var lyr_KpSikringSoneH110nedslagsfeltdrikkevatn_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpSikringSoneH110nedslagsfeltdrikkevatn_4, 
                style: style_KpSikringSoneH110nedslagsfeltdrikkevatn_4,
                popuplayertitle: 'KpSikringSone H110 - nedslagsfelt drikkevatn',
                interactive: true,
                title: '<img src="styles/legend/KpSikringSoneH110nedslagsfeltdrikkevatn_4.png" /> KpSikringSone H110 - nedslagsfelt drikkevatn'
            });
var format_KpStySoneH210ogH220raudoggulstysone_5 = new ol.format.GeoJSON();
var features_KpStySoneH210ogH220raudoggulstysone_5 = format_KpStySoneH210ogH220raudoggulstysone_5.readFeatures(json_KpStySoneH210ogH220raudoggulstysone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpStySoneH210ogH220raudoggulstysone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpStySoneH210ogH220raudoggulstysone_5.addFeatures(features_KpStySoneH210ogH220raudoggulstysone_5);
var lyr_KpStySoneH210ogH220raudoggulstysone_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpStySoneH210ogH220raudoggulstysone_5, 
                style: style_KpStySoneH210ogH220raudoggulstysone_5,
                popuplayertitle: 'KpStøySone - H210 og H220 - raud og gul støysone',
                interactive: true,
    title: 'KpStøySone - H210 og H220 - raud og gul støysone<br />\
    <img src="styles/legend/KpStySoneH210ogH220raudoggulstysone_5_0.png" /> H_210_flystøy<br />\
    <img src="styles/legend/KpStySoneH210ogH220raudoggulstysone_5_1.png" /> H_210_vegstøy<br />\
    <img src="styles/legend/KpStySoneH210ogH220raudoggulstysone_5_2.png" /> H_220_vegstøy<br />\
    <img src="styles/legend/KpStySoneH210ogH220raudoggulstysone_5_3.png" /> H_220_flystøy<br />' });
var format_KpFareSoneH310rasogskredfare_6 = new ol.format.GeoJSON();
var features_KpFareSoneH310rasogskredfare_6 = format_KpFareSoneH310rasogskredfare_6.readFeatures(json_KpFareSoneH310rasogskredfare_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpFareSoneH310rasogskredfare_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpFareSoneH310rasogskredfare_6.addFeatures(features_KpFareSoneH310rasogskredfare_6);
var lyr_KpFareSoneH310rasogskredfare_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpFareSoneH310rasogskredfare_6, 
                style: style_KpFareSoneH310rasogskredfare_6,
                popuplayertitle: 'KpFareSone H310 - ras- og skredfare',
                interactive: true,
                title: '<img src="styles/legend/KpFareSoneH310rasogskredfare_6.png" /> KpFareSone H310 - ras- og skredfare'
            });
var format_KpFareSoneH320flomfare_7 = new ol.format.GeoJSON();
var features_KpFareSoneH320flomfare_7 = format_KpFareSoneH320flomfare_7.readFeatures(json_KpFareSoneH320flomfare_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpFareSoneH320flomfare_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpFareSoneH320flomfare_7.addFeatures(features_KpFareSoneH320flomfare_7);
var lyr_KpFareSoneH320flomfare_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpFareSoneH320flomfare_7, 
                style: style_KpFareSoneH320flomfare_7,
                popuplayertitle: 'KpFareSone H320 - flomfare',
                interactive: true,
                title: '<img src="styles/legend/KpFareSoneH320flomfare_7.png" /> KpFareSone H320 - flomfare'
            });
var format_KpFareSoneH370hgspenningsanlegg_8 = new ol.format.GeoJSON();
var features_KpFareSoneH370hgspenningsanlegg_8 = format_KpFareSoneH370hgspenningsanlegg_8.readFeatures(json_KpFareSoneH370hgspenningsanlegg_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpFareSoneH370hgspenningsanlegg_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpFareSoneH370hgspenningsanlegg_8.addFeatures(features_KpFareSoneH370hgspenningsanlegg_8);
var lyr_KpFareSoneH370hgspenningsanlegg_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpFareSoneH370hgspenningsanlegg_8, 
                style: style_KpFareSoneH370hgspenningsanlegg_8,
                popuplayertitle: 'KpFareSone H370 - høgspenningsanlegg',
                interactive: true,
                title: '<img src="styles/legend/KpFareSoneH370hgspenningsanlegg_8.png" /> KpFareSone H370 - høgspenningsanlegg'
            });
var format_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9 = new ol.format.GeoJSON();
var features_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9 = format_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9.readFeatures(json_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9.addFeatures(features_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9);
var lyr_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9, 
                style: style_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9,
                popuplayertitle: 'KpInfrastrukturSone H410 - krav vedrørende infrastruktur',
                interactive: true,
                title: '<img src="styles/legend/KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9.png" /> KpInfrastrukturSone H410 - krav vedrørende infrastruktur'
            });
var format_KpAngittHensynSoneH510omsynlandbruk_10 = new ol.format.GeoJSON();
var features_KpAngittHensynSoneH510omsynlandbruk_10 = format_KpAngittHensynSoneH510omsynlandbruk_10.readFeatures(json_KpAngittHensynSoneH510omsynlandbruk_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpAngittHensynSoneH510omsynlandbruk_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpAngittHensynSoneH510omsynlandbruk_10.addFeatures(features_KpAngittHensynSoneH510omsynlandbruk_10);
var lyr_KpAngittHensynSoneH510omsynlandbruk_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpAngittHensynSoneH510omsynlandbruk_10, 
                style: style_KpAngittHensynSoneH510omsynlandbruk_10,
                popuplayertitle: 'KpAngittHensynSone H510 - omsyn landbruk',
                interactive: true,
                title: '<img src="styles/legend/KpAngittHensynSoneH510omsynlandbruk_10.png" /> KpAngittHensynSone H510 - omsyn landbruk'
            });
var format_KpAngittHensynSoneH530omsynfriluftsliv_11 = new ol.format.GeoJSON();
var features_KpAngittHensynSoneH530omsynfriluftsliv_11 = format_KpAngittHensynSoneH530omsynfriluftsliv_11.readFeatures(json_KpAngittHensynSoneH530omsynfriluftsliv_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpAngittHensynSoneH530omsynfriluftsliv_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpAngittHensynSoneH530omsynfriluftsliv_11.addFeatures(features_KpAngittHensynSoneH530omsynfriluftsliv_11);
var lyr_KpAngittHensynSoneH530omsynfriluftsliv_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpAngittHensynSoneH530omsynfriluftsliv_11, 
                style: style_KpAngittHensynSoneH530omsynfriluftsliv_11,
                popuplayertitle: 'KpAngittHensynSone H530 - omsyn friluftsliv',
                interactive: true,
                title: '<img src="styles/legend/KpAngittHensynSoneH530omsynfriluftsliv_11.png" /> KpAngittHensynSone H530 - omsyn friluftsliv'
            });
var format_KpAngittHensynSoneH560bevaringnaturmilj_12 = new ol.format.GeoJSON();
var features_KpAngittHensynSoneH560bevaringnaturmilj_12 = format_KpAngittHensynSoneH560bevaringnaturmilj_12.readFeatures(json_KpAngittHensynSoneH560bevaringnaturmilj_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpAngittHensynSoneH560bevaringnaturmilj_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpAngittHensynSoneH560bevaringnaturmilj_12.addFeatures(features_KpAngittHensynSoneH560bevaringnaturmilj_12);
var lyr_KpAngittHensynSoneH560bevaringnaturmilj_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpAngittHensynSoneH560bevaringnaturmilj_12, 
                style: style_KpAngittHensynSoneH560bevaringnaturmilj_12,
                popuplayertitle: 'KpAngittHensynSone H560 - bevaring naturmiljø',
                interactive: true,
                title: '<img src="styles/legend/KpAngittHensynSoneH560bevaringnaturmilj_12.png" /> KpAngittHensynSone H560 - bevaring naturmiljø'
            });
var format_KpAngittHensynSoneH570bevaringkulturmilj_13 = new ol.format.GeoJSON();
var features_KpAngittHensynSoneH570bevaringkulturmilj_13 = format_KpAngittHensynSoneH570bevaringkulturmilj_13.readFeatures(json_KpAngittHensynSoneH570bevaringkulturmilj_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpAngittHensynSoneH570bevaringkulturmilj_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpAngittHensynSoneH570bevaringkulturmilj_13.addFeatures(features_KpAngittHensynSoneH570bevaringkulturmilj_13);
var lyr_KpAngittHensynSoneH570bevaringkulturmilj_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpAngittHensynSoneH570bevaringkulturmilj_13, 
                style: style_KpAngittHensynSoneH570bevaringkulturmilj_13,
                popuplayertitle: 'KpAngittHensynSone H570 - bevaring kulturmiljø',
                interactive: true,
                title: '<img src="styles/legend/KpAngittHensynSoneH570bevaringkulturmilj_13.png" /> KpAngittHensynSone H570 - bevaring kulturmiljø'
            });
var format_KpAngittHensynSoneH590omsynmineralressurser_14 = new ol.format.GeoJSON();
var features_KpAngittHensynSoneH590omsynmineralressurser_14 = format_KpAngittHensynSoneH590omsynmineralressurser_14.readFeatures(json_KpAngittHensynSoneH590omsynmineralressurser_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpAngittHensynSoneH590omsynmineralressurser_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpAngittHensynSoneH590omsynmineralressurser_14.addFeatures(features_KpAngittHensynSoneH590omsynmineralressurser_14);
var lyr_KpAngittHensynSoneH590omsynmineralressurser_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpAngittHensynSoneH590omsynmineralressurser_14, 
                style: style_KpAngittHensynSoneH590omsynmineralressurser_14,
                popuplayertitle: 'KpAngittHensynSone H590 - omsyn mineralressurser',
                interactive: true,
                title: '<img src="styles/legend/KpAngittHensynSoneH590omsynmineralressurser_14.png" /> KpAngittHensynSone H590 - omsyn mineralressurser'
            });
var format_KpBndleggingSoneH720bandleggingnaturmangfald_15 = new ol.format.GeoJSON();
var features_KpBndleggingSoneH720bandleggingnaturmangfald_15 = format_KpBndleggingSoneH720bandleggingnaturmangfald_15.readFeatures(json_KpBndleggingSoneH720bandleggingnaturmangfald_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpBndleggingSoneH720bandleggingnaturmangfald_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpBndleggingSoneH720bandleggingnaturmangfald_15.addFeatures(features_KpBndleggingSoneH720bandleggingnaturmangfald_15);
var lyr_KpBndleggingSoneH720bandleggingnaturmangfald_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpBndleggingSoneH720bandleggingnaturmangfald_15, 
                style: style_KpBndleggingSoneH720bandleggingnaturmangfald_15,
                popuplayertitle: 'KpBåndleggingSone H720 - bandlegging naturmangfald',
                interactive: true,
                title: '<img src="styles/legend/KpBndleggingSoneH720bandleggingnaturmangfald_15.png" /> KpBåndleggingSone H720 - bandlegging naturmangfald'
            });
var format_KpBndleggingSoneH730bandleggingkulturminner_16 = new ol.format.GeoJSON();
var features_KpBndleggingSoneH730bandleggingkulturminner_16 = format_KpBndleggingSoneH730bandleggingkulturminner_16.readFeatures(json_KpBndleggingSoneH730bandleggingkulturminner_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpBndleggingSoneH730bandleggingkulturminner_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpBndleggingSoneH730bandleggingkulturminner_16.addFeatures(features_KpBndleggingSoneH730bandleggingkulturminner_16);
var lyr_KpBndleggingSoneH730bandleggingkulturminner_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpBndleggingSoneH730bandleggingkulturminner_16, 
                style: style_KpBndleggingSoneH730bandleggingkulturminner_16,
                popuplayertitle: 'KpBåndleggingSone H730 - bandlegging kulturminner',
                interactive: true,
                title: '<img src="styles/legend/KpBndleggingSoneH730bandleggingkulturminner_16.png" /> KpBåndleggingSone H730 - bandlegging kulturminner'
            });
var format_KpGjennomfringSoneH810kravomfellesplanlegging_17 = new ol.format.GeoJSON();
var features_KpGjennomfringSoneH810kravomfellesplanlegging_17 = format_KpGjennomfringSoneH810kravomfellesplanlegging_17.readFeatures(json_KpGjennomfringSoneH810kravomfellesplanlegging_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KpGjennomfringSoneH810kravomfellesplanlegging_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KpGjennomfringSoneH810kravomfellesplanlegging_17.addFeatures(features_KpGjennomfringSoneH810kravomfellesplanlegging_17);
var lyr_KpGjennomfringSoneH810kravomfellesplanlegging_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KpGjennomfringSoneH810kravomfellesplanlegging_17, 
                style: style_KpGjennomfringSoneH810kravomfellesplanlegging_17,
                popuplayertitle: 'KpGjennomføringSone H810 - krav om felles planlegging',
                interactive: true,
                title: '<img src="styles/legend/KpGjennomfringSoneH810kravomfellesplanlegging_17.png" /> KpGjennomføringSone H810 - krav om felles planlegging'
            });
var group_Samferdselplanforslag = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Samferdsel planforslag'});
var group_Omsynssonerplanforslag = new ol.layer.Group({
                                layers: [lyr_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1,lyr_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2,lyr_KpSikringSoneH130byggeforbudvedflyplass_3,lyr_KpSikringSoneH110nedslagsfeltdrikkevatn_4,lyr_KpStySoneH210ogH220raudoggulstysone_5,lyr_KpFareSoneH310rasogskredfare_6,lyr_KpFareSoneH320flomfare_7,lyr_KpFareSoneH370hgspenningsanlegg_8,lyr_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9,lyr_KpAngittHensynSoneH510omsynlandbruk_10,lyr_KpAngittHensynSoneH530omsynfriluftsliv_11,lyr_KpAngittHensynSoneH560bevaringnaturmilj_12,lyr_KpAngittHensynSoneH570bevaringkulturmilj_13,lyr_KpAngittHensynSoneH590omsynmineralressurser_14,lyr_KpBndleggingSoneH720bandleggingnaturmangfald_15,lyr_KpBndleggingSoneH730bandleggingkulturminner_16,lyr_KpGjennomfringSoneH810kravomfellesplanlegging_17,],
                                fold: 'open',
                                title: 'Omsynssoner planforslag'});
var group_subgroup1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'sub-group1'});
var group_Juridiskelinjermedletterelesbaretegneregler = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Juridiske linjer  (med lettere lesbare tegneregler)'});
var group_Arealinnspeloppstart = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Arealinnspel oppstart'});
var group_Registreringerbarnehage2023 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Registreringer barnehage 2023'});
var group_Temakartpr26022026 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Temakart, pr 26.02.2026'});
var group_PlanforfriluftslivetsferdselsrerPFF = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Plan for friluftslivets ferdselsårer (PFF)'});
var group_NrhettiltenesterfraPAKT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nærhet til tenester (fra PAKT)'});
var group_Openstreetmap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'close',
                                title: 'Open street map'});

lyr_OSMStandard_0.setVisible(true);lyr_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1.setVisible(true);lyr_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2.setVisible(true);lyr_KpSikringSoneH130byggeforbudvedflyplass_3.setVisible(true);lyr_KpSikringSoneH110nedslagsfeltdrikkevatn_4.setVisible(true);lyr_KpStySoneH210ogH220raudoggulstysone_5.setVisible(true);lyr_KpFareSoneH310rasogskredfare_6.setVisible(true);lyr_KpFareSoneH320flomfare_7.setVisible(true);lyr_KpFareSoneH370hgspenningsanlegg_8.setVisible(true);lyr_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9.setVisible(true);lyr_KpAngittHensynSoneH510omsynlandbruk_10.setVisible(true);lyr_KpAngittHensynSoneH530omsynfriluftsliv_11.setVisible(true);lyr_KpAngittHensynSoneH560bevaringnaturmilj_12.setVisible(true);lyr_KpAngittHensynSoneH570bevaringkulturmilj_13.setVisible(true);lyr_KpAngittHensynSoneH590omsynmineralressurser_14.setVisible(true);lyr_KpBndleggingSoneH720bandleggingnaturmangfald_15.setVisible(true);lyr_KpBndleggingSoneH730bandleggingkulturminner_16.setVisible(true);lyr_KpGjennomfringSoneH810kravomfellesplanlegging_17.setVisible(true);
var layersList = [group_Openstreetmap,group_Omsynssonerplanforslag];
lyr_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'KPSIKRING': 'KPSIKRING', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPSIKRING': 'KPSIKRING', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpSikringSoneH130byggeforbudvedflyplass_3.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPSIKRING': 'KPSIKRING', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpSikringSoneH110nedslagsfeltdrikkevatn_4.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPSIKRING': 'KPSIKRING', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpStySoneH210ogH220raudoggulstysone_5.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'KPSTØY': 'KPSTØY', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpFareSoneH310rasogskredfare_6.set('fieldAliases', {'BESKRIVELS': 'BESKRIVELS', 'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPFARE': 'KPFARE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpFareSoneH320flomfare_7.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'KPFARE': 'KPFARE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpFareSoneH370hgspenningsanlegg_8.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPFARE': 'KPFARE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'KPINFRASTR': 'KPINFRASTR', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpAngittHensynSoneH510omsynlandbruk_10.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPANGITTHE': 'KPANGITTHE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpAngittHensynSoneH530omsynfriluftsliv_11.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPANGITTHE': 'KPANGITTHE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpAngittHensynSoneH560bevaringnaturmilj_12.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'KPANGITTHE': 'KPANGITTHE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpAngittHensynSoneH570bevaringkulturmilj_13.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPANGITTHE': 'KPANGITTHE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpAngittHensynSoneH590omsynmineralressurser_14.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'KPANGITTHE': 'KPANGITTHE', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpBndleggingSoneH720bandleggingnaturmangfald_15.set('fieldAliases', {'AREALST': 'AREALST', 'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPBÅNDLEGG': 'KPBÅNDLEGG', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpBndleggingSoneH730bandleggingkulturminner_16.set('fieldAliases', {'AREALST': 'AREALST', 'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPBÅNDLEGG': 'KPBÅNDLEGG', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpGjennomfringSoneH810kravomfellesplanlegging_17.set('fieldAliases', {'FØRSTEDIGI': 'FØRSTEDIGI', 'HENSYNSONE': 'HENSYNSONE', 'KPGJENNOMF': 'KPGJENNOMF', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'IDENT_LOKA': 'TextEdit', 'IDENT_NAVN': 'TextEdit', 'KPSIKRING': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPSIKRING': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpSikringSoneH130byggeforbudvedflyplass_3.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPSIKRING': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpSikringSoneH110nedslagsfeltdrikkevatn_4.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPSIKRING': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpStySoneH210ogH220raudoggulstysone_5.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'IDENT_LOKA': 'TextEdit', 'IDENT_NAVN': 'TextEdit', 'KPSTØY': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpFareSoneH310rasogskredfare_6.set('fieldImages', {'BESKRIVELS': 'TextEdit', 'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPFARE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpFareSoneH320flomfare_7.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'IDENT_LOKA': 'TextEdit', 'IDENT_NAVN': 'TextEdit', 'KPFARE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpFareSoneH370hgspenningsanlegg_8.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPFARE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'IDENT_LOKA': 'TextEdit', 'IDENT_NAVN': 'TextEdit', 'KPINFRASTR': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpAngittHensynSoneH510omsynlandbruk_10.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPANGITTHE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpAngittHensynSoneH530omsynfriluftsliv_11.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPANGITTHE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpAngittHensynSoneH560bevaringnaturmilj_12.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'IDENT_LOKA': 'TextEdit', 'IDENT_NAVN': 'TextEdit', 'KPANGITTHE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpAngittHensynSoneH570bevaringkulturmilj_13.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPANGITTHE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpAngittHensynSoneH590omsynmineralressurser_14.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'IDENT_LOKA': 'TextEdit', 'IDENT_NAVN': 'TextEdit', 'KPANGITTHE': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpBndleggingSoneH720bandleggingnaturmangfald_15.set('fieldImages', {'AREALST': 'TextEdit', 'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPBÅNDLEGG': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpBndleggingSoneH730bandleggingkulturminner_16.set('fieldImages', {'AREALST': 'TextEdit', 'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPBÅNDLEGG': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpGjennomfringSoneH810kravomfellesplanlegging_17.set('fieldImages', {'FØRSTEDIGI': 'TextEdit', 'HENSYNSONE': 'TextEdit', 'KPGJENNOMF': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_KpSikringSoneH190_2og3restriksjonerrundtflyplass_1.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'IDENT_LOKA': 'header label - visible with data', 'IDENT_NAVN': 'header label - visible with data', 'KPSIKRING': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpSikringSoneH190_1prosessvatntilnringsmiddelindustri_2.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPSIKRING': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpSikringSoneH130byggeforbudvedflyplass_3.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPSIKRING': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpSikringSoneH110nedslagsfeltdrikkevatn_4.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPSIKRING': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpStySoneH210ogH220raudoggulstysone_5.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'IDENT_LOKA': 'header label - visible with data', 'IDENT_NAVN': 'header label - visible with data', 'KPSTØY': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpFareSoneH310rasogskredfare_6.set('fieldLabels', {'BESKRIVELS': 'header label - visible with data', 'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPFARE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpFareSoneH320flomfare_7.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'IDENT_LOKA': 'header label - visible with data', 'IDENT_NAVN': 'header label - visible with data', 'KPFARE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpFareSoneH370hgspenningsanlegg_8.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPFARE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpInfrastrukturSoneH410kravvedrrendeinfrastruktur_9.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'IDENT_LOKA': 'header label - visible with data', 'IDENT_NAVN': 'header label - visible with data', 'KPINFRASTR': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpAngittHensynSoneH510omsynlandbruk_10.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPANGITTHE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpAngittHensynSoneH530omsynfriluftsliv_11.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPANGITTHE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpAngittHensynSoneH560bevaringnaturmilj_12.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'IDENT_LOKA': 'header label - visible with data', 'IDENT_NAVN': 'header label - visible with data', 'KPANGITTHE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpAngittHensynSoneH570bevaringkulturmilj_13.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPANGITTHE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpAngittHensynSoneH590omsynmineralressurser_14.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'IDENT_LOKA': 'header label - visible with data', 'IDENT_NAVN': 'header label - visible with data', 'KPANGITTHE': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpBndleggingSoneH720bandleggingnaturmangfald_15.set('fieldLabels', {'AREALST': 'header label - visible with data', 'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPBÅNDLEGG': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpBndleggingSoneH730bandleggingkulturminner_16.set('fieldLabels', {'AREALST': 'header label - visible with data', 'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPBÅNDLEGG': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpGjennomfringSoneH810kravomfellesplanlegging_17.set('fieldLabels', {'FØRSTEDIGI': 'header label - visible with data', 'HENSYNSONE': 'header label - visible with data', 'KPGJENNOMF': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_KpGjennomfringSoneH810kravomfellesplanlegging_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});