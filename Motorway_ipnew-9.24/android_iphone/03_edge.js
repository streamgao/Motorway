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
            id:'_01_back_xiangyu',
            type:'image',
            rect:[0,0,640,800],
            clip:['rect(0px 586px 800px 0px)'],
            fill:["rgba(0,0,0,0)",im+"01_back_xiangyu.jpg"],
            transform:[[28,79],[],[],[1.09,1.2]]
         },
         {
            id:'_01_front_xiangyu1',
            type:'image',
            rect:[0,0,457,369],
            fill:["rgba(0,0,0,0)",im+"01_front_xiangyu1.png"],
            transform:[[-457,290]]
         },
         {
            id:'_01_text_xiangyu',
            type:'image',
            rect:[0,0,467,45],
            fill:["rgba(0,0,0,0)",im+"01_text_xiangyu.png"],
            transform:[[0,799],[],[],[1,1.43]]
         },
         {
            id:'_01_front_xiangyu2',
            type:'image',
            rect:[0,0,234,385],
            fill:["rgba(0,0,0,0)",im+"01_front_xiangyu2.png"],
            transform:[[550,31]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__01_text_xiangyu}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '36.87px'],
            ["transform", "scaleX", '1.20239'],
            ["style", "opacity", '0'],
            ["style", "width", '461px'],
            ["transform", "scaleY", '1.43045'],
            ["style", "height", '45px'],
            ["transform", "translateY", '859.46px'],
            ["style", "clip", [0,10,44,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${__01_back_xiangyu}": [
            ["transform", "scaleY", '1.2'],
            ["transform", "scaleX", '1.09061'],
            ["style", "clip", [0,586,800,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '79.99px'],
            ["transform", "translateX", '28.99px']
         ],
         "${_02}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '688px'],
            ["style", "width", '550px']
         ],
         "${__01_front_xiangyu1}": [
            ["transform", "translateX", '-457px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '1.2'],
            ["transform", "translateY", '290px'],
            ["transform", "scaleY", '1.2']
         ],
         "${_03}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${__01_front_xiangyu2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.2'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-7px'],
            ["transform", "translateX", '562.4px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2042,
         autoPlay: true,
         labels: {
            "swing": 1124
         },
         timeline: [
            { id: "eid102", tween: [ "transform", "${__01_text_xiangyu}", "translateX", '55.54px', { fromValue: '36.87px'}], position: 1124, duration: 582 },
            { id: "eid142", tween: [ "transform", "${__01_text_xiangyu}", "translateX", '46.54px', { fromValue: '55.54px'}], position: 1706, duration: 336 },
            { id: "eid48", tween: [ "transform", "${__01_front_xiangyu2}", "rotateZ", '19deg', { fromValue: '0deg'}], position: 1000, duration: 68 },
            { id: "eid49", tween: [ "transform", "${__01_front_xiangyu2}", "rotateZ", '0deg', { fromValue: '19deg'}], position: 1068, duration: 56 },
            { id: "eid50", tween: [ "transform", "${__01_front_xiangyu2}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1124, duration: 148 },
            { id: "eid51", tween: [ "transform", "${__01_front_xiangyu2}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 1272, duration: 228 },
            { id: "eid156", tween: [ "transform", "${__01_front_xiangyu2}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1500, duration: 148 },
            { id: "eid157", tween: [ "transform", "${__01_front_xiangyu2}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 1648, duration: 228 },
            { id: "eid110", tween: [ "transform", "${__01_front_xiangyu1}", "scaleX", '1.2', { fromValue: '1.2'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${__01_front_xiangyu1}", "translateY", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "transform", "${__01_front_xiangyu1}", "translateY", '378px', { fromValue: '290px'}], position: 500, duration: 418 },
            { id: "eid52", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 1000, duration: 0 },
            { id: "eid118", tween: [ "style", "${__01_front_xiangyu2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid137", tween: [ "transform", "${__01_front_xiangyu2}", "scaleY", '1.30989', { fromValue: '1.2'}], position: 0, duration: 1500 },
            { id: "eid112", tween: [ "transform", "${__01_front_xiangyu2}", "translateX", '550px', { fromValue: '562.4px'}], position: 0, duration: 250 },
            { id: "eid5", tween: [ "transform", "${__01_front_xiangyu2}", "translateX", '316px', { fromValue: '550px'}], position: 250, duration: 250 },
            { id: "eid82", tween: [ "transform", "${__01_front_xiangyu2}", "translateX", '337.99px', { fromValue: '316px'}], position: 500, duration: 418 },
            { id: "eid127", tween: [ "transform", "${__01_front_xiangyu2}", "translateX", '365.59px', { fromValue: '337.99px'}], position: 918, duration: 582 },
            { id: "eid111", tween: [ "transform", "${__01_front_xiangyu1}", "scaleY", '1.2', { fromValue: '1.2'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${__01_front_xiangyu1}", "translateX", '-457px', { fromValue: '-457px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "transform", "${__01_front_xiangyu1}", "translateX", '0px', { fromValue: '-457px'}], position: 500, duration: 250 },
            { id: "eid84", tween: [ "transform", "${__01_front_xiangyu1}", "translateX", '9px', { fromValue: '0px'}], position: 750, duration: 168 },
            { id: "eid114", tween: [ "style", "${__01_front_xiangyu2}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${__01_front_xiangyu2}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 0, duration: 0 },
            { id: "eid175", tween: [ "style", "${__01_front_xiangyu2}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${__01_front_xiangyu2}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${__01_front_xiangyu2}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${__01_text_xiangyu}", "opacity", '1', { fromValue: '0.000000'}], position: 1124, duration: 918 },
            { id: "eid44", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 1000, duration: 68 },
            { id: "eid45", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '-0deg', { fromValue: '-14deg'}], position: 1068, duration: 56 },
            { id: "eid46", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 1124, duration: 148 },
            { id: "eid47", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '-0deg', { fromValue: '11deg'}], position: 1272, duration: 228 },
            { id: "eid158", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 1500, duration: 68 },
            { id: "eid159", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '-0deg', { fromValue: '-14deg'}], position: 1568, duration: 56 },
            { id: "eid164", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 1624, duration: 148 },
            { id: "eid165", tween: [ "transform", "${__01_front_xiangyu1}", "rotateZ", '-0deg', { fromValue: '11deg'}], position: 1772, duration: 228 },
            { id: "eid136", tween: [ "transform", "${__01_front_xiangyu2}", "scaleX", '1.34529', { fromValue: '1.2'}], position: 0, duration: 1500 },
            { id: "eid143", tween: [ "transform", "${__01_text_xiangyu}", "translateY", '859.46px', { fromValue: '859.46px'}], position: 2042, duration: 0 },
            { id: "eid99", tween: [ "style", "${__01_text_xiangyu}", "clip", [0,468,44,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,10,44,0]}], position: 1124, duration: 918 }         ]
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
})(jQuery, AdobeEdge, "EDGE-190796");
