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
            id:'back_liaotian',
            type:'image',
            rect:[246,618,640,960],
            fill:["rgba(0,0,0,0)",im+"back_liaotian.jpg"],
            transform:[[-245,-617],[0,0],[0],[1,1]]
         },
         {
            id:'text_liaotian',
            type:'image',
            rect:[132,804,244,389],
            fill:["rgba(0,0,0,0)",im+"text_liaotian.png"],
            transform:[[-102,-409]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_back_liaotian}": [
            ["transform", "translateX", '-245.99px'],
            ["transform", "translateY", '-617.99px']
         ],
         "${_Stage}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_text_liaotian}": [
            ["transform", "scaleX", '0.00818'],
            ["transform", "translateY", '-604.98px'],
            ["transform", "translateX", '-49.01px'],
            ["transform", "scaleY", '0.00515']
         ],
         "${_14-B}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 600,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "transform", "${_text_liaotian}", "translateX", '-102px', { fromValue: '-49.01px'}], position: 250, duration: 350 },
            { id: "eid6", tween: [ "transform", "${_text_liaotian}", "scaleX", '1', { fromValue: '0.00818'}], position: 250, duration: 350 },
            { id: "eid8", tween: [ "transform", "${_text_liaotian}", "scaleY", '1', { fromValue: '0.00515'}], position: 250, duration: 350 },
            { id: "eid4", tween: [ "transform", "${_text_liaotian}", "translateY", '-409.99px', { fromValue: '-604.98px'}], position: 250, duration: 350 }         ]
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
})(jQuery, AdobeEdge, "EDGE-9198759");
