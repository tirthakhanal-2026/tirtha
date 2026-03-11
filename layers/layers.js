ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([77.671367, 26.358267, 86.316400, 31.065482]);
var wms_layers = [];

var format_Districtcopy_0 = new ol.format.GeoJSON();
var features_Districtcopy_0 = format_Districtcopy_0.readFeatures(json_Districtcopy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Districtcopy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtcopy_0.addFeatures(features_Districtcopy_0);
var lyr_Districtcopy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtcopy_0, 
                style: style_Districtcopy_0,
                popuplayertitle: 'District copy',
                interactive: true,
                title: '<img src="styles/legend/Districtcopy_0.png" /> District copy'
            });
var format_Police_Units_fina_Newl_2079_1 = new ol.format.GeoJSON();
var features_Police_Units_fina_Newl_2079_1 = format_Police_Units_fina_Newl_2079_1.readFeatures(json_Police_Units_fina_Newl_2079_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Police_Units_fina_Newl_2079_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Police_Units_fina_Newl_2079_1.addFeatures(features_Police_Units_fina_Newl_2079_1);
var lyr_Police_Units_fina_Newl_2079_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Police_Units_fina_Newl_2079_1, 
                style: style_Police_Units_fina_Newl_2079_1,
                popuplayertitle: 'Police_Units_fina_Newl_2079',
                interactive: true,
                title: '<img src="styles/legend/Police_Units_fina_Newl_2079_1.png" /> Police_Units_fina_Newl_2079'
            });
var format_District_2 = new ol.format.GeoJSON();
var features_District_2 = format_District_2.readFeatures(json_District_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_District_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_2.addFeatures(features_District_2);
var lyr_District_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_2, 
                style: style_District_2,
                popuplayertitle: 'District',
                interactive: true,
    title: 'District<br />\
    <img src="styles/legend/District_2_0.png" /> ACHHAM District<br />\
    <img src="styles/legend/District_2_1.png" /> ARGHAKHANCHI District<br />\
    <img src="styles/legend/District_2_2.png" /> BAGLUNG District<br />\
    <img src="styles/legend/District_2_3.png" /> BAITADI District<br />\
    <img src="styles/legend/District_2_4.png" /> BAJHANG District<br />\
    <img src="styles/legend/District_2_5.png" /> BAJURA District<br />\
    <img src="styles/legend/District_2_6.png" /> BANKE District<br />\
    <img src="styles/legend/District_2_7.png" /> BARA District<br />\
    <img src="styles/legend/District_2_8.png" /> BARDIYA District<br />\
    <img src="styles/legend/District_2_9.png" /> BHAKTAPUR District<br />\
    <img src="styles/legend/District_2_10.png" /> BHOJPUR District<br />\
    <img src="styles/legend/District_2_11.png" /> CHITAWAN District<br />\
    <img src="styles/legend/District_2_12.png" /> DADELDHURA District<br />\
    <img src="styles/legend/District_2_13.png" /> DAILEKH District<br />\
    <img src="styles/legend/District_2_14.png" /> DANG District<br />\
    <img src="styles/legend/District_2_15.png" /> DARCHULA District<br />\
    <img src="styles/legend/District_2_16.png" /> DHADING District<br />\
    <img src="styles/legend/District_2_17.png" /> DHANKUTA District<br />\
    <img src="styles/legend/District_2_18.png" /> DHANUSHA District<br />\
    <img src="styles/legend/District_2_19.png" /> DOLAKHA District<br />\
    <img src="styles/legend/District_2_20.png" /> DOLPA District<br />\
    <img src="styles/legend/District_2_21.png" /> DOTI District<br />\
    <img src="styles/legend/District_2_22.png" /> GORKHA District<br />\
    <img src="styles/legend/District_2_23.png" /> GULMI District<br />\
    <img src="styles/legend/District_2_24.png" /> HUMLA District<br />\
    <img src="styles/legend/District_2_25.png" /> ILAM District<br />\
    <img src="styles/legend/District_2_26.png" /> JAJARKOT District<br />\
    <img src="styles/legend/District_2_27.png" /> JHAPA District<br />\
    <img src="styles/legend/District_2_28.png" /> JUMLA District<br />\
    <img src="styles/legend/District_2_29.png" /> KABHREPALANCHOK District<br />\
    <img src="styles/legend/District_2_30.png" /> KAILALI District<br />\
    <img src="styles/legend/District_2_31.png" /> KALIKOT District<br />\
    <img src="styles/legend/District_2_32.png" /> KANCHANPUR District<br />\
    <img src="styles/legend/District_2_33.png" /> KAPILBASTU District<br />\
    <img src="styles/legend/District_2_34.png" /> KASKI District<br />\
    <img src="styles/legend/District_2_35.png" /> KATHMANDU District<br />\
    <img src="styles/legend/District_2_36.png" /> KHOTANG District<br />\
    <img src="styles/legend/District_2_37.png" /> LALITPUR District<br />\
    <img src="styles/legend/District_2_38.png" /> LAMJUNG District<br />\
    <img src="styles/legend/District_2_39.png" /> MAHOTTARI District<br />\
    <img src="styles/legend/District_2_40.png" /> MAKAWANPUR District<br />\
    <img src="styles/legend/District_2_41.png" /> MANANG District<br />\
    <img src="styles/legend/District_2_42.png" /> MORANG District<br />\
    <img src="styles/legend/District_2_43.png" /> MUGU District<br />\
    <img src="styles/legend/District_2_44.png" /> MUSTANG District<br />\
    <img src="styles/legend/District_2_45.png" /> MYAGDI District<br />\
    <img src="styles/legend/District_2_46.png" /> NAWALPARASI_E District<br />\
    <img src="styles/legend/District_2_47.png" /> NAWALPARASI_W District<br />\
    <img src="styles/legend/District_2_48.png" /> NUWAKOT District<br />\
    <img src="styles/legend/District_2_49.png" /> OKHALDHUNGA District<br />\
    <img src="styles/legend/District_2_50.png" /> PALPA District<br />\
    <img src="styles/legend/District_2_51.png" /> PANCHTHAR District<br />\
    <img src="styles/legend/District_2_52.png" /> PARBAT District<br />\
    <img src="styles/legend/District_2_53.png" /> PARSA District<br />\
    <img src="styles/legend/District_2_54.png" /> PYUTHAN District<br />\
    <img src="styles/legend/District_2_55.png" /> RAMECHHAP District<br />\
    <img src="styles/legend/District_2_56.png" /> RASUWA District<br />\
    <img src="styles/legend/District_2_57.png" /> RAUTAHAT District<br />\
    <img src="styles/legend/District_2_58.png" /> ROLPA District<br />\
    <img src="styles/legend/District_2_59.png" /> RUKUM_E District<br />\
    <img src="styles/legend/District_2_60.png" /> RUKUM_W District<br />\
    <img src="styles/legend/District_2_61.png" /> RUPANDEHI District<br />\
    <img src="styles/legend/District_2_62.png" /> SALYAN District<br />\
    <img src="styles/legend/District_2_63.png" /> SANKHUWASABHA District<br />\
    <img src="styles/legend/District_2_64.png" /> SAPTARI District<br />\
    <img src="styles/legend/District_2_65.png" /> SARLAHI District<br />\
    <img src="styles/legend/District_2_66.png" /> SINDHULI District<br />\
    <img src="styles/legend/District_2_67.png" /> SINDHUPALCHOK District<br />\
    <img src="styles/legend/District_2_68.png" /> SIRAHA District<br />\
    <img src="styles/legend/District_2_69.png" /> SOLUKHUMBU District<br />\
    <img src="styles/legend/District_2_70.png" /> SUNSARI District<br />\
    <img src="styles/legend/District_2_71.png" /> SURKHET District<br />\
    <img src="styles/legend/District_2_72.png" /> SYANGJA District<br />\
    <img src="styles/legend/District_2_73.png" /> TANAHU District<br />\
    <img src="styles/legend/District_2_74.png" /> TAPLEJUNG District<br />\
    <img src="styles/legend/District_2_75.png" /> TERHATHUM District<br />\
    <img src="styles/legend/District_2_76.png" /> UDAYAPUR District<br />\
    <img src="styles/legend/District_2_77.png" /> <br />' });
var format_polling_booths_all_districts_3 = new ol.format.GeoJSON();
var features_polling_booths_all_districts_3 = format_polling_booths_all_districts_3.readFeatures(json_polling_booths_all_districts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_polling_booths_all_districts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polling_booths_all_districts_3.addFeatures(features_polling_booths_all_districts_3);
var lyr_polling_booths_all_districts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polling_booths_all_districts_3, 
                style: style_polling_booths_all_districts_3,
                popuplayertitle: 'polling_booths_all_districts',
                interactive: true,
                title: '<img src="styles/legend/polling_booths_all_districts_3.png" /> polling_booths_all_districts'
            });
var format_AllFilesGapaNapaBorder_4 = new ol.format.GeoJSON();
var features_AllFilesGapaNapaBorder_4 = format_AllFilesGapaNapaBorder_4.readFeatures(json_AllFilesGapaNapaBorder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AllFilesGapaNapaBorder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllFilesGapaNapaBorder_4.addFeatures(features_AllFilesGapaNapaBorder_4);
var lyr_AllFilesGapaNapaBorder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllFilesGapaNapaBorder_4, 
                style: style_AllFilesGapaNapaBorder_4,
                popuplayertitle: 'All Files — Gapa Napa Border',
                interactive: true,
                title: 'All Files — Gapa Napa Border'
            });

lyr_Districtcopy_0.setVisible(true);lyr_Police_Units_fina_Newl_2079_1.setVisible(true);lyr_District_2.setVisible(true);lyr_polling_booths_all_districts_3.setVisible(true);lyr_AllFilesGapaNapaBorder_4.setVisible(true);
var layersList = [lyr_Districtcopy_0,lyr_Police_Units_fina_Newl_2079_1,lyr_District_2,lyr_polling_booths_all_districts_3,lyr_AllFilesGapaNapaBorder_4];
lyr_Districtcopy_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'pr_name': 'pr_name', 'Name': 'Name', 'nepali_nam': 'nepali_nam', 'state': 'state', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'nnn': 'nnn', 'area': 'area', });
lyr_Police_Units_fina_Newl_2079_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'sn': 'sn', 's': 's', 'name_1': 'name_1', 'ofctypenp': 'ofctypenp', 'class': 'class', 'local': 'local', 'ward': 'ward', 'tol': 'tol', 'no': 'no', 'ino': 'ino', 'dis': 'dis', 'EngName': 'EngName', 'EngLocatio': 'EngLocatio', 'Neplocatio': 'Neplocatio', 'Provinces': 'Provinces', 'Engshortfo': 'Engshortfo', 'Nepaliname': 'Nepaliname', 'Nepali_Nam': 'Nepali_Nam', 'OfcTypNP': 'OfcTypNP', 'ShrtOfcTyp': 'ShrtOfcTyp', 'EngShort': 'EngShort', 'longitude': 'longitude', 'latitude': 'latitude', 'phone_numb': 'phone_numb', 'Typ_Full': 'Typ_Full', });
lyr_District_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'pr_name': 'pr_name', 'Name': 'Name', 'nepali_nam': 'nepali_nam', 'state': 'state', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'nnn': 'nnn', 'area': 'area', });
lyr_polling_booths_all_districts_3.set('fieldAliases', {'districtId': 'districtId', 'lat': 'lat', 'vdcMunId': 'vdcMunId', 'wardId': 'wardId', 'wardName': 'wardName', 'constituency': 'constituency', 'reg_centreId': 'reg_centreId', 'districtName': 'districtName', 'vdcMunName': 'vdcMunName', 'stateId': 'stateId', 'lng': 'lng', 'stateName': 'stateName', 'reg_centreName': 'reg_centreName', });
lyr_AllFilesGapaNapaBorder_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Districtcopy_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'pr_name': 'TextEdit', 'Name': 'TextEdit', 'nepali_nam': 'TextEdit', 'state': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'nnn': 'TextEdit', 'area': 'TextEdit', });
lyr_Police_Units_fina_Newl_2079_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'sn': 'TextEdit', 's': 'TextEdit', 'name_1': 'TextEdit', 'ofctypenp': 'TextEdit', 'class': 'TextEdit', 'local': 'TextEdit', 'ward': 'TextEdit', 'tol': 'TextEdit', 'no': 'TextEdit', 'ino': 'TextEdit', 'dis': 'TextEdit', 'EngName': 'TextEdit', 'EngLocatio': 'TextEdit', 'Neplocatio': 'TextEdit', 'Provinces': 'TextEdit', 'Engshortfo': 'TextEdit', 'Nepaliname': 'TextEdit', 'Nepali_Nam': 'TextEdit', 'OfcTypNP': 'TextEdit', 'ShrtOfcTyp': 'TextEdit', 'EngShort': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'phone_numb': 'TextEdit', 'Typ_Full': 'TextEdit', });
lyr_District_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'pr_name': 'TextEdit', 'Name': 'TextEdit', 'nepali_nam': 'TextEdit', 'state': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'nnn': 'TextEdit', 'area': 'TextEdit', });
lyr_polling_booths_all_districts_3.set('fieldImages', {'districtId': 'Range', 'lat': 'TextEdit', 'vdcMunId': 'Range', 'wardId': 'Range', 'wardName': 'Range', 'constituency': 'Range', 'reg_centreId': 'Range', 'districtName': 'TextEdit', 'vdcMunName': 'TextEdit', 'stateId': 'Range', 'lng': 'TextEdit', 'stateName': 'TextEdit', 'reg_centreName': 'TextEdit', });
lyr_AllFilesGapaNapaBorder_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_Districtcopy_0.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINCE': 'no label', 'DISTRICT': 'inline label - always visible', 'pr_name': 'no label', 'Name': 'inline label - always visible', 'nepali_nam': 'no label', 'state': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'nnn': 'no label', 'area': 'no label', });
lyr_Police_Units_fina_Newl_2079_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'PopupInfo': 'no label', 'sn': 'no label', 's': 'no label', 'name_1': 'no label', 'ofctypenp': 'inline label - always visible', 'class': 'no label', 'local': 'inline label - always visible', 'ward': 'no label', 'tol': 'no label', 'no': 'no label', 'ino': 'no label', 'dis': 'no label', 'EngName': 'inline label - always visible', 'EngLocatio': 'no label', 'Neplocatio': 'no label', 'Provinces': 'no label', 'Engshortfo': 'no label', 'Nepaliname': 'no label', 'Nepali_Nam': 'no label', 'OfcTypNP': 'no label', 'ShrtOfcTyp': 'no label', 'EngShort': 'no label', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', 'phone_numb': 'inline label - always visible', 'Typ_Full': 'no label', });
lyr_District_2.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINCE': 'no label', 'DISTRICT': 'inline label - always visible', 'pr_name': 'inline label - always visible', 'Name': 'no label', 'nepali_nam': 'inline label - always visible', 'state': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'nnn': 'no label', 'area': 'no label', });
lyr_polling_booths_all_districts_3.set('fieldLabels', {'districtId': 'inline label - always visible', 'lat': 'inline label - always visible', 'vdcMunId': 'inline label - always visible', 'wardId': 'no label', 'wardName': 'inline label - always visible', 'constituency': 'no label', 'reg_centreId': 'no label', 'districtName': 'inline label - always visible', 'vdcMunName': 'no label', 'stateId': 'no label', 'lng': 'no label', 'stateName': 'no label', 'reg_centreName': 'no label', });
lyr_AllFilesGapaNapaBorder_4.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'inline label - always visible', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_AllFilesGapaNapaBorder_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});