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
            id:'_05_back_jiangxin4',
            type:'image',
            rect:[0,0,640,960],
            fill:["rgba(0,0,0,0)",im+"05_back_jiangxin4.png"],
            transform:[[-640]]
         },
         {
            id:'_05_back_jiangxin5',
            type:'image',
            rect:[0,0,640,960],
            fill:["rgba(0,0,0,0)",im+"05_back_jiangxin5.png"],
            transform:[[640]]
         },
         {
            id:'_05_text_jiangxin',
            type:'image',
            rect:[0,0,194,155],
            fill:["rgba(0,0,0,0)",im+"05_text_jiangxin.png"],
            transform:[[0,81]]
         },
         {
            id:'_06_text_jiuhz',
            type:'image',
            rect:[443,748,240,187],
            fill:["rgba(0,0,0,0)",im+"06_text_jiuhz.png"]
         },
         {
            id:'_05_back_jiangxin3',
            type:'image',
            rect:[478,558,640,960],
            fill:["rgba(0,0,0,0)",im+"05_back_jiangxin3.png"],
            transform:[[-476,-556],[0,0],[0],[1,1]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__05_back_jiangxin4}": [
            ["transform", "translateX", '-640px'],
            ["transform", "translateY", '0']
         ],
         "${__05_back_jiangxin5}": [
            ["transform", "translateX", '640px'],
            ["transform", "translateY", '0']
         ],
         "${_05}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${__06_text_jiuhz}": [
            ["transform", "scaleX", '0.02079'],
            ["transform", "translateY", '-105.31px'],
            ["transform", "translateX", '-239.16px'],
            ["transform", "scaleY", '0.03225']
         ],
         "${_Stage}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__05_text_jiangxin}": [
            ["transform", "scaleX", '1'],
            ["transform", "translateX", '63.99px'],
            ["transform", "translateY", '96.98px'],
            ["transform", "scaleY", '0']
         ],
         "${__05_back_jiangxin3}": [
            ["transform", "translateX", '-476.66px'],
            ["transform", "translateY", '-556.66px']
         ],
         "${_06}": [
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
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid84", tween: [ "transform", "${__06_text_jiuhz}", "translateX", '-81.66px', { fromValue: '-239.16px'}], position: 1165, duration: 335 },
            { id: "eid85", tween: [ "transform", "${__06_text_jiuhz}", "translateY", '-230.7px', { fromValue: '-105.31px'}], position: 1165, duration: 335 },
            { id: "eid60", tween: [ "transform", "${__05_text_jiangxin}", "translateX", '63.99px', { fromValue: '63.99px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "transform", "${__05_text_jiangxin}", "translateX", '73.98px', { fromValue: '63.99px'}], position: 250, duration: 1250 },
            { id: "eid6", tween: [ "transform", "${__05_back_jiangxin5}", "translateX", '0px', { fromValue: '640px'}], position: 250, duration: 750 },
            { id: "eid87", tween: [ "transform", "${__06_text_jiuhz}", "scaleY", '1.3853', { fromValue: '0.03225'}], position: 1165, duration: 335 },
            { id: "eid10", tween: [ "transform", "${__05_text_jiangxin}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 250 },
            { id: "eid24", tween: [ "transform", "${__05_text_jiangxin}", "scaleY", '1.88309', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid23", tween: [ "transform", "${__05_text_jiangxin}", "scaleX", '1.49483', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid66", tween: [ "transform", "${__05_text_jiangxin}", "scaleX", '1.59792', { fromValue: '1.49483'}], position: 1250, duration: 250 },
            { id: "eid3", tween: [ "transform", "${__05_back_jiangxin4}", "translateX", '-639.99px', { fromValue: '-640px'}], position: 0, duration: 340 },
            { id: "eid38", tween: [ "transform", "${__05_back_jiangxin4}", "translateX", '0px', { fromValue: '-639.99px'}], position: 340, duration: 410 },
            { id: "eid5", tween: [ "transform", "${__05_back_jiangxin5}", "translateY", '0', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "eid86", tween: [ "transform", "${__06_text_jiuhz}", "scaleX", '1.3333', { fromValue: '0.02079'}], position: 1165, duration: 335 },
            { id: "eid39", tween: [ "transform", "${__05_back_jiangxin4}", "translateY", '495.99px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "transform", "${__05_text_jiangxin}", "translateY", '96.98px', { fromValue: '102.53px'}], position: 0, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-24281270");
