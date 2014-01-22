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
            id:'_11_back_zuifan',
            type:'image',
            rect:[310,498,640,427],
            fill:["rgba(0,0,0,0)",im+"11_back_zuifan.jpg"],
            transform:[[-309,-282]]
         },
         {
            id:'_11_front_zuifan22',
            type:'image',
            rect:[78,158,191,204],
            fill:["rgba(0,0,0,0)",im+"11_front_zuifan22.png"],
            transform:[[-87,-157]]
         },
         {
            id:'_11_front_zuifan3',
            type:'image',
            rect:[534,117,199,134],
            fill:["rgba(0,0,0,0)",im+"11_front_zuifan3.png"],
            transform:[[-93,-116]]
         },
         {
            id:'_11_text_zuifan2',
            type:'image',
            rect:[266,844,231,186],
            fill:["rgba(0,0,0,0)",im+"11_text_zuifan2.png"]
         },
         {
            id:'_11_text_zuifan12',
            type:'image',
            rect:[242,315,211,156],
            fill:["rgba(0,0,0,0)",im+"11_text_zuifan1.png"],
            transform:[[-102,-218]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_11}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__11_text_zuifan12}": [
            ["transform", "scaleX", '0.00238'],
            ["transform", "translateY", '-132.99px'],
            ["transform", "translateX", '13.25px'],
            ["transform", "scaleY", '0.01025']
         ],
         "${__11_text_zuifan2}": [
            ["transform", "scaleX", '0.00217'],
            ["transform", "translateY", '-363px'],
            ["transform", "translateX", '-349.24px'],
            ["transform", "scaleY", '0.043']
         ],
         "${__11_back_zuifan}": [
            ["transform", "translateX", '-309.99px'],
            ["transform", "translateY", '-282.99px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '430px'],
            ["style", "width", '640px']
         ],
         "${_10-crime}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${__11_front_zuifan22}": [
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '55px'],
            ["transform", "translateX", '-76px']
         ],
         "${__11_front_zuifan3}": [
            ["transform", "translateX", '-52.57px'],
            ["transform", "scaleX", '0.65924'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '124.32px'],
            ["transform", "scaleY", '1.36549']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2175,
         autoPlay: true,
         labels: {
            "loop": 675
         },
         timeline: [
            { id: "eid99", tween: [ "transform", "${__11_front_zuifan3}", "scaleX", '0.62321', { fromValue: '0.65924'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "transform", "${__11_front_zuifan22}", "translateX", '-76px', { fromValue: '-76px'}], position: 1675, duration: 0 },
            { id: "eid67", tween: [ "transform", "${__11_text_zuifan2}", "translateX", '-172px', { fromValue: '-349.24px'}], position: 360, duration: 315 },
            { id: "eid90", tween: [ "transform", "${__11_text_zuifan12}", "translateY", '-218px', { fromValue: '-132.99px'}], position: 0, duration: 360 },
            { id: "eid92", tween: [ "transform", "${__11_text_zuifan12}", "scaleY", '1.1', { fromValue: '0.01025'}], position: 0, duration: 360 },
            { id: "eid88", tween: [ "transform", "${__11_text_zuifan12}", "translateX", '-102px', { fromValue: '13.25px'}], position: 0, duration: 360 },
            { id: "eid68", tween: [ "transform", "${__11_text_zuifan2}", "translateY", '-227px', { fromValue: '-363px'}], position: 360, duration: 315 },
            { id: "eid10", tween: [ "style", "${__11_front_zuifan3}", "opacity", '1', { fromValue: '0'}], position: 675, duration: 250 },
            { id: "eid22", tween: [ "style", "${__11_front_zuifan3}", "opacity", '1', { fromValue: '0'}], position: 925, duration: 165 },
            { id: "eid26", tween: [ "style", "${__11_front_zuifan3}", "opacity", '1', { fromValue: '0'}], position: 1090, duration: 335 },
            { id: "eid27", tween: [ "style", "${__11_front_zuifan3}", "opacity", '1', { fromValue: '0'}], position: 1425, duration: 250 },
            { id: "eid58", tween: [ "style", "${__11_front_zuifan3}", "opacity", '0.99', { fromValue: '1'}], position: 1675, duration: 500 },
            { id: "eid8", tween: [ "style", "${__11_front_zuifan22}", "opacity", '1', { fromValue: '0'}], position: 675, duration: 250 },
            { id: "eid24", tween: [ "style", "${__11_front_zuifan22}", "opacity", '1', { fromValue: '0'}], position: 925, duration: 165 },
            { id: "eid29", tween: [ "style", "${__11_front_zuifan22}", "opacity", '1', { fromValue: '0'}], position: 1090, duration: 335 },
            { id: "eid30", tween: [ "style", "${__11_front_zuifan22}", "opacity", '1', { fromValue: '0'}], position: 1425, duration: 250 },
            { id: "eid32", tween: [ "transform", "${__11_front_zuifan22}", "translateY", '55px', { fromValue: '55px'}], position: 1675, duration: 0 },
            { id: "eid97", tween: [ "transform", "${__11_front_zuifan3}", "translateY", '119.69px', { fromValue: '124.32px'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "transform", "${__11_text_zuifan12}", "scaleX", '1.1', { fromValue: '0.00238'}], position: 0, duration: 360 },
            { id: "eid94", tween: [ "transform", "${__11_front_zuifan3}", "scaleY", '1.36549', { fromValue: '1.36549'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "transform", "${__11_front_zuifan3}", "translateX", '-56.14px', { fromValue: '-52.57px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "transform", "${__11_text_zuifan2}", "scaleY", '1.50537', { fromValue: '0.043'}], position: 360, duration: 315 },
            { id: "eid69", tween: [ "transform", "${__11_text_zuifan2}", "scaleX", '1.53912', { fromValue: '0.00217'}], position: 360, duration: 315 }         ]
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
})(jQuery, AdobeEdge, "EDGE-342574");
