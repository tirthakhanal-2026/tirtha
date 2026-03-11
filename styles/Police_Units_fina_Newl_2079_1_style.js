var size = 0;
var placement = 'point';

var style_Police_Units_fina_Newl_2079_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#f219f2";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("name_1") !== null) {
        labelText = String(feature.get("name_1"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 5,
            radius2: 5.0, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(60,16,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(249,11,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
