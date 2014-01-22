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
            id:'_08_back_qiujiao1',
            type:'image',
            rect:[0,0,640,427],
            fill:["rgba(0,0,0,0)",im+"08_back_qiujiao1.jpg"],
            transform:[[-1,177]]
         },
         {
            id:'_08_front_qiujiao',
            type:'image',
            rect:[0,0,640,427],
            fill:["rgba(0,0,0,0)",im+"08_front_qiujiao.png"],
            transform:[[-5,169]]
         },
         {
            id:'_08_text_qiujiao1',
            type:'image',
            rect:[0,0,283,231],
            fill:["rgba(0,0,0,0)",im+"08_text_qiujiao1.png"],
            transform:[[114,40],[],[],[0.6,0.6]]
         },
         {
            id:'_08',
            type:'image',
            rect:[183,404,64,56],
            opacity:0.50684931506849,
            fill:["rgba(0,0,0,0)",im+"light1.png"]
         },
         {
            id:'_08_text_qiujiao2',
            type:'image',
            rect:[423,311,283,139],
            fill:["rgba(0,0,0,0)",im+"08_text_qiujiao2.png"]
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
         "${__08_front_qiujiao}": [
            ["transform", "translateX", '-5.18px'],
            ["transform", "translateY", '169.34px']
         ],
         "${__08_text_qiujiao1}": [
            ["transform", "scaleX", '0'],
            ["transform", "translateY", '253.06px'],
            ["transform", "translateX", '156.66px'],
            ["transform", "scaleY", '0.82637']
         ],
         "${__08_back_qiujiao1}": [
            ["transform", "translateX", '-1.52px'],
            ["transform", "translateY", '177.98px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '427px'],
            ["style", "width", '640px']
         ],
         "${__08_text_qiujiao2}": [
            ["transform", "scaleX", '0.00177'],
            ["transform", "translateX", '-285.29px'],
            ["transform", "scaleY", '0.06451'],
            ["transform", "translateY", '-142.68px']
         ],
         "${__08}": [
            ["transform", "translateX", '-53.63px'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '90.23px'],
            ["transform", "scaleY", '0.9']
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
         duration: 3000,
         autoPlay: true,
         labels: {
            "twinkle": 2000
         },
         timeline: [
            { id: "eid125", tween: [ "transform", "${__08_text_qiujiao2}", "scaleY", '1.1', { fromValue: '0.06451'}], position: 500, duration: 250 },
            { id: "eid89", tween: [ "transform", "${__08}", "translateY", '82.42px', { fromValue: '90.23px'}], position: 1000, duration: 1500 },
            { id: "eid79", tween: [ "transform", "${__08_text_qiujiao1}", "translateY", '311.9px', { fromValue: '253.06px'}], position: 1000, duration: 750 },
            { id: "eid122", tween: [ "transform", "${__08_text_qiujiao2}", "translateX", '-130.63px', { fromValue: '-285.29px'}], position: 500, duration: 250 },
            { id: "eid93", tween: [ "transform", "${__08}", "scaleY", '0.89337', { fromValue: '0.83716'}], position: 1950, duration: 550 },
            { id: "eid124", tween: [ "transform", "${__08_text_qiujiao2}", "scaleX", '1.1', { fromValue: '0.00177'}], position: 500, duration: 250 },
            { id: "eid84", tween: [ "transform", "${__08_text_qiujiao1}", "translateX", '177.9px', { fromValue: '156.66px'}], position: 1000, duration: 750 },
            { id: "eid102", tween: [ "transform", "${__08_text_qiujiao1}", "scaleY", '1.19461', { fromValue: '0.82637'}], position: 1460, duration: 290 },
            { id: "eid123", tween: [ "transform", "${__08_text_qiujiao2}", "translateY", '-222.91px', { fromValue: '-142.68px'}], position: 500, duration: 250 },
            { id: "eid51", tween: [ "style", "${__08}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid52", tween: [ "style", "${__08}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
            { id: "eid92", tween: [ "transform", "${__08}", "scaleX", '0.7', { fromValue: '0.9'}], position: 1950, duration: 550 },
            { id: "eid35", tween: [ "transform", "${__08_text_qiujiao1}", "scaleX", '1.14843', { fromValue: '0'}], position: 1460, duration: 290 },
            { id: "eid98", tween: [ "transform", "${__08}", "translateX", '-53.63px', { fromValue: '-53.63px'}], position: 2500, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-4967296");
