/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'_07_back_hui',
            type:'image',
            rect:[294,774,640,960],
            fill:["rgba(0,0,0,0)",im+"07_back_hui.jpg"],
            transform:[[-293,-773]]
         },
         {
            id:'_07_text_hui',
            type:'image',
            rect:[384,392,240,187],
            fill:["rgba(0,0,0,0)",im+"07_text_hui.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__07_text_hui}": [
            ["transform", "scaleX", '0.00206'],
            ["transform", "translateX", '-193.74px'],
            ["transform", "scaleY", '0.00268'],
            ["transform", "translateY", '-108.74px']
         ],
         "${_Stage}": [
            ["style", "height", '427px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_06}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${__07_back_hui}": [
            ["transform", "translateX", '-293.99px'],
            ["transform", "translateY", '-773.99px']
         ],
         "${_07}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 870,
         autoPlay: true,
         timeline: [
            { id: "eid64", tween: [ "transform", "${__07_text_hui}", "translateX", '-43.99px', { fromValue: '-193.74px'}], position: 500, duration: 370 },
            { id: "eid67", tween: [ "transform", "${__07_text_hui}", "scaleY", '1.33333', { fromValue: '0.00268'}], position: 500, duration: 370 },
            { id: "eid66", tween: [ "transform", "${__07_text_hui}", "scaleX", '1.25', { fromValue: '0.00206'}], position: 500, duration: 370 },
            { id: "eid65", tween: [ "transform", "${__07_text_hui}", "translateY", '-232.99px', { fromValue: '-108.74px'}], position: 500, duration: 370 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-10881230");
