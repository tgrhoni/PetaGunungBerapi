// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","../BaseFeatureAction","jimu/dijit/FieldStatistics"],function(c,d,e){return c(d,{iconClass:"icon-statistics",isFeatureSupported:function(b,a){return 1<b.features.length&&a&&"esri.layers.GraphicsLayer"!==a.declaredClass&&0<this.getNumbericFields(a).length},onExecute:function(b,a){var f=new e;b={featureSet:b,layer:a,fieldNames:this.getNumbericFields(a).map(function(g){return g.name})};f.showContentAsPopup(b)},getNumbericFields:function(b){return b.fields.filter(function(a){return-1<
["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"].indexOf(a.type)})}})});