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
            id:'_09_back_jiaoche',
            type:'image',
            rect:[196,284,640,884],
            fill:["rgba(0,0,0,0)",im+"09_back_jiaoche.jpg"],
            transform:[[-196,-288]]
         },
         {
            id:'_09_text_jiaoche1',
            type:'image',
            rect:[184,654,270,205],
            fill:["rgba(0,0,0,0)",im+"09_text_jiaoche1.png"],
            transform:[[-173,-318]]
         },
         {
            id:'_09_front_jiaoche1',
            type:'image',
            rect:[160,634,237,144],
            fill:["rgba(0,0,0,0)",im+"09_front_jiaoche1.png"],
            transform:[[-130,-125],[-15]]
         },
         {
            id:'_09_text_jiaoche2',
            type:'image',
            rect:[314,526,217,141],
            fill:["rgba(0,0,0,0)",im+"09_text_jiaoche2.png"],
            transform:[[-95,-126]]
         },
         {
            id:'_09_front_jiaoche2',
            type:'image',
            rect:[496,694,548,285],
            fill:["rgba(0,0,0,0)",im+"09_front_jiaoche2.png"],
            transform:[[-483,-122],[],[],[1.043,1.063]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__09_front_jiaoche2}": [
            ["transform", "scaleX", '0.53242'],
            ["transform", "scaleY", '0.54242'],
            ["transform", "translateY", '-278.97px'],
            ["transform", "translateX", '-130.11px']
         ],
         "${__09_text_jiaoche1}": [
            ["transform", "translateX", '-113.99px'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-367.59px'],
            ["transform", "scaleY", '0']
         ],
         "${__09_text_jiaoche2}": [
            ["transform", "translateX", '-98.45px'],
            ["transform", "scaleX", '0.03282'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-80.29px'],
            ["transform", "scaleY", '0.01']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '870px'],
            ["style", "width", '640px']
         ],
         "${__09_front_jiaoche1}": [
            ["transform", "translateY", '-29.91px'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '-133.38px'],
            ["transform", "rotateZ", '-15deg']
         ],
         "${_09}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__09_back_jiaoche}": [
            ["transform", "translateX", '-196px'],
            ["transform", "translateY", '-288.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1170,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${__09_text_jiaoche1}", "opacity", '1', { fromValue: '0'}], position: 370, duration: 265, easing: "easeInExpo" },
            { id: "eid8", tween: [ "transform", "${__09_front_jiaoche2}", "scaleY", '1.06338', { fromValue: '0.54242'}], position: 0, duration: 585 },
            { id: "eid43", tween: [ "transform", "${__09_text_jiaoche1}", "translateX", '-113.99px', { fromValue: '-113.99px'}], position: 1170, duration: 0 },
            { id: "eid6", tween: [ "transform", "${__09_front_jiaoche2}", "scaleX", '1.04379', { fromValue: '0.53242'}], position: 0, duration: 585 },
            { id: "eid26", tween: [ "transform", "${__09_text_jiaoche2}", "scaleY", '1.05', { fromValue: '0.01'}], position: 585, duration: 585, easing: "easeInExpo" },
            { id: "eid16", tween: [ "transform", "${__09_front_jiaoche1}", "translateY", '-125.91px', { fromValue: '-29.91px'}], position: 370, duration: 215, easing: "easeInExpo" },
            { id: "eid18", tween: [ "style", "${__09_front_jiaoche1}", "opacity", '1', { fromValue: '0'}], position: 370, duration: 265, easing: "easeInExpo" },
            { id: "eid44", tween: [ "transform", "${__09_text_jiaoche1}", "translateY", '-367.59px', { fromValue: '-367.59px'}], position: 1170, duration: 0 },
            { id: "eid24", tween: [ "transform", "${__09_text_jiaoche2}", "scaleX", '1', { fromValue: '0.03282'}], position: 585, duration: 285, easing: "easeInExpo" },
            { id: "eid45", tween: [ "transform", "${__09_text_jiaoche2}", "scaleX", '1.05', { fromValue: '1'}], position: 870, duration: 300 },
            { id: "eid2", tween: [ "transform", "${__09_front_jiaoche2}", "translateX", '-483.99px', { fromValue: '-130.11px'}], position: 0, duration: 585 },
            { id: "eid4", tween: [ "transform", "${__09_front_jiaoche2}", "translateY", '-122.97px', { fromValue: '-278.97px'}], position: 0, duration: 585 },
            { id: "eid22", tween: [ "style", "${__09_text_jiaoche2}", "opacity", '1', { fromValue: '0'}], position: 585, duration: 335, easing: "easeInExpo" },
            { id: "eid35", tween: [ "transform", "${__09_text_jiaoche2}", "translateY", '-138.28px', { fromValue: '-80.29px'}], position: 585, duration: 585, easing: "easeInExpo" },
            { id: "eid30", tween: [ "transform", "${__09_text_jiaoche1}", "scaleY", '1', { fromValue: '0'}], position: 370, duration: 430, easing: "easeInExpo" },
            { id: "eid40", tween: [ "transform", "${__09_text_jiaoche1}", "scaleY", '1.2', { fromValue: '1'}], position: 800, duration: 370 },
            { id: "eid14", tween: [ "transform", "${__09_front_jiaoche1}", "translateX", '-130.61px', { fromValue: '-133.38px'}], position: 370, duration: 215, easing: "easeInExpo" },
            { id: "eid34", tween: [ "transform", "${__09_text_jiaoche2}", "translateX", '-27.99px', { fromValue: '-98.45px'}], position: 585, duration: 585, easing: "easeInExpo" },
            { id: "eid28", tween: [ "transform", "${__09_text_jiaoche1}", "scaleX", '1', { fromValue: '0'}], position: 370, duration: 265, easing: "easeInExpo" },
            { id: "eid39", tween: [ "transform", "${__09_text_jiaoche1}", "scaleX", '1.1', { fromValue: '1'}], position: 800, duration: 370 }         ]
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
})(jQuery, AdobeEdge, "EDGE-16787344");
