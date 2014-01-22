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
            id:'_09-backup',
            type:'image',
            rect:[251,252,640,450],
            fill:["rgba(0,0,0,0)",im+"09-backup.png"],
            transform:[[390,-240]]
         },
         {
            id:'_10_back2',
            type:'image',
            rect:[325,622,640,450],
            fill:["rgba(0,0,0,0)",im+"10_back2.png"],
            transform:[[-323,-285]]
         },
         {
            id:'_10_front_goutong',
            type:'image',
            rect:[218,580,343,365],
            fill:["rgba(0,0,0,0)",im+"10_front_goutong.png"],
            transform:[[16,-139]]
         },
         {
            id:'_10_front_goutong2',
            type:'image',
            rect:[190,290,407,440],
            fill:["rgba(0,0,0,0)",im+"10_front_goutong2.png"],
            transform:[[-154,-336]]
         },
         {
            id:'_10_text_goutong2',
            type:'image',
            rect:[234,700,183,119],
            fill:["rgba(0,0,0,0)",im+"10_text_goutong2.png"],
            transform:[[-129,-177]]
         },
         {
            id:'_10_text_goutong12',
            type:'image',
            rect:[432,414,300,256],
            fill:["rgba(0,0,0,0)",im+"10_text_goutong1.png"],
            transform:[[-111,-382],[0,0],[0],[1,1]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_08}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__10_front_goutong}": [
            ["transform", "translateX", '-58.99px'],
            ["transform", "translateY", '206px']
         ],
         "${__09-backup}": [
            ["transform", "translateX", '390px'],
            ["transform", "translateY", '-240.99px']
         ],
         "${_10}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__10_text_goutong12}": [
            ["transform", "scaleX", '0.00166'],
            ["transform", "scaleY", '0.00195'],
            ["transform", "translateY", '-254.24px'],
            ["transform", "translateX", '-262.23px']
         ],
         "${__10_text_goutong2}": [
            ["transform", "translateX", '-136.96px'],
            ["transform", "rotateZ", '-0deg'],
            ["transform", "scaleX", '1.3'],
            ["transform", "scaleY", '0.00423'],
            ["transform", "translateY", '-137.23px'],
            ["transform", "skewY", '11.64deg']
         ],
         "${_Stage}": [
            ["style", "height", '787px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__10_front_goutong2}": [
            ["transform", "translateX", '-106.99px'],
            ["transform", "translateY", '-746.98px']
         ],
         "${_09-shing}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__10_back2}": [
            ["transform", "translateX", '-963.99px'],
            ["transform", "translateY", '-141.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1180.5944819555,
         autoPlay: true,
         timeline: [
            { id: "eid81", tween: [ "transform", "${__10_back2}", "translateY", '-141.99px', { fromValue: '-141.99px'}], position: 1000, duration: 0 },
            { id: "eid174", tween: [ "transform", "${__10_text_goutong2}", "rotateZ", '-0deg', { fromValue: '-0deg'}], position: 1180, duration: 0 },
            { id: "eid150", tween: [ "style", "${_10}", "width", '640px', { fromValue: '640px'}], position: 1000, duration: 0 },
            { id: "eid201", tween: [ "transform", "${__10_text_goutong12}", "scaleY", '1.05', { fromValue: '0.00195'}], position: 840, duration: 73 },
            { id: "eid16", tween: [ "transform", "${__10_front_goutong2}", "translateY", '-336.99px', { fromValue: '-746.98px'}], position: 110, duration: 270 },
            { id: "eid71", tween: [ "transform", "${__10_front_goutong2}", "translateY", '-172.99px', { fromValue: '-336.99px'}], position: 380, duration: 620 },
            { id: "eid195", tween: [ "transform", "${__10_text_goutong12}", "translateX", '-111.99px', { fromValue: '-262.23px'}], position: 840, duration: 73 },
            { id: "eid202", tween: [ "transform", "${__10_text_goutong12}", "translateX", '-97.98px', { fromValue: '-111.99px'}], position: 914, duration: 0 },
            { id: "eid199", tween: [ "transform", "${__10_text_goutong12}", "scaleX", '1.05', { fromValue: '0.00166'}], position: 840, duration: 73 },
            { id: "eid135", tween: [ "transform", "${__09-backup}", "translateY", '-134.99px', { fromValue: '-240.99px'}], position: 0, duration: 250 },
            { id: "eid14", tween: [ "transform", "${__10_text_goutong2}", "translateY", '-126.71px', { fromValue: '-137.23px'}], position: 1081, duration: 98 },
            { id: "eid2", tween: [ "transform", "${__10_back2}", "translateX", '-323.99px', { fromValue: '-963.99px'}], position: 0, duration: 250 },
            { id: "eid77", tween: [ "transform", "${__10_back2}", "translateX", '-323.99px', { fromValue: '-323.99px'}], position: 250, duration: 750 },
            { id: "eid12", tween: [ "transform", "${__10_text_goutong2}", "translateX", '-152.48px', { fromValue: '-136.96px'}], position: 1081, duration: 98 },
            { id: "eid173", tween: [ "transform", "${__10_text_goutong2}", "skewY", '11.64deg', { fromValue: '11.64deg'}], position: 1180, duration: 0 },
            { id: "eid4", tween: [ "transform", "${__10_front_goutong2}", "translateX", '-154px', { fromValue: '-106.99px'}], position: 110, duration: 270 },
            { id: "eid82", tween: [ "transform", "${__10_front_goutong2}", "translateX", '-190px', { fromValue: '-154px'}], position: 380, duration: 620 },
            { id: "eid8", tween: [ "transform", "${__10_front_goutong}", "translateX", '16px', { fromValue: '-58.99px'}], position: 380, duration: 250 },
            { id: "eid51", tween: [ "transform", "${__10_front_goutong}", "translateX", '33px', { fromValue: '16px'}], position: 630, duration: 370 },
            { id: "eid197", tween: [ "transform", "${__10_text_goutong12}", "translateY", '-382px', { fromValue: '-254.24px'}], position: 840, duration: 73 },
            { id: "eid203", tween: [ "transform", "${__10_text_goutong12}", "translateY", '-374px', { fromValue: '-382px'}], position: 914, duration: 0 },
            { id: "eid23", tween: [ "transform", "${__10_text_goutong2}", "scaleY", '1.44245', { fromValue: '0.00423'}], position: 1081, duration: 98 },
            { id: "eid191", tween: [ "transform", "${__10_text_goutong2}", "scaleX", '1.3', { fromValue: '1.3'}], position: 1180, duration: 0 },
            { id: "eid10", tween: [ "transform", "${__10_front_goutong}", "translateY", '-139.99px', { fromValue: '206px'}], position: 380, duration: 250 },
            { id: "eid52", tween: [ "transform", "${__10_front_goutong}", "translateY", '-28.99px', { fromValue: '-139.99px'}], position: 630, duration: 370 },
            { id: "eid152", tween: [ "color", "${_10}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 1000, duration: 0 },
            { id: "eid134", tween: [ "transform", "${__09-backup}", "translateX", '-249.99px', { fromValue: '390px'}], position: 0, duration: 250 },
            { id: "eid151", tween: [ "style", "${_10}", "height", '960px', { fromValue: '960px'}], position: 1000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-7172732");
