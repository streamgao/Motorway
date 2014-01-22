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
            id:'_03_back_zhuiqiu03',
            type:'image',
            rect:[0,0,640,920],
            fill:["rgba(0,0,0,0)",im+"03_back_zhuiqiu03.png"]
         },
         {
            id:'_03_back_zhuiqiu01',
            type:'image',
            rect:[0,0,640,920],
            fill:["rgba(0,0,0,0)",im+"03_back_zhuiqiu01.png"],
            transform:[[-640]]
         },
         {
            id:'_03_back_zhuiqiu02',
            type:'image',
            rect:[0,0,640,920],
            fill:["rgba(0,0,0,0)",im+"03_back_zhuiqiu02.png"],
            transform:[[640]]
         },
         {
            id:'_03_text_zhuiqiu',
            type:'image',
            rect:[0,0,193,131],
            fill:["rgba(0,0,0,0)",im+"03_text_zhuiqiu.png"],
            transform:[[423,39]]
         },
         {
            id:'_04_text_jiayi',
            type:'image',
            rect:[416,684,244,184],
            fill:["rgba(0,0,0,0)",im+"04_text_jiayi.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_04}": [
            ["style", "height", '920px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_05}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__03_text_zhuiqiu}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '0'],
            ["transform", "translateY", '28.49px'],
            ["transform", "translateX", '410.49px']
         ],
         "${__04_text_jiayi}": [
            ["transform", "translateX", '-60.99px'],
            ["transform", "rotateZ", '12deg'],
            ["transform", "scaleX", '0'],
            ["transform", "translateY", '-197.33px'],
            ["transform", "scaleY", '0']
         ],
         "${_Stage}": [
            ["style", "height", '920px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__03_back_zhuiqiu02}": [
            ["transform", "translateX", '640px'],
            ["transform", "translateY", '62px']
         ],
         "${__03_back_zhuiqiu01}": [
            ["transform", "translateX", '-640px'],
            ["transform", "translateY", '-42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid53", tween: [ "transform", "${__03_text_zhuiqiu}", "translateX", '410.49px', { fromValue: '410.49px'}], position: 1210, duration: 0 },
            { id: "eid54", tween: [ "transform", "${__03_text_zhuiqiu}", "translateY", '28.49px', { fromValue: '28.49px'}], position: 1210, duration: 0 },
            { id: "eid38", tween: [ "transform", "${__04_text_jiayi}", "rotateZ", '12deg', { fromValue: '12deg'}], position: 1750, duration: 0 },
            { id: "eid56", tween: [ "transform", "${__04_text_jiayi}", "scaleY", '1.20167', { fromValue: '0'}], position: 1250, duration: 500 },
            { id: "eid23", tween: [ "transform", "${__03_back_zhuiqiu02}", "translateY", '-6px', { fromValue: '62px'}], position: 250, duration: 750 },
            { id: "eid25", tween: [ "transform", "${__03_back_zhuiqiu01}", "translateY", '6px', { fromValue: '-42px'}], position: 250, duration: 500 },
            { id: "eid55", tween: [ "transform", "${__04_text_jiayi}", "scaleX", '1.24075', { fromValue: '0'}], position: 1250, duration: 500 },
            { id: "eid12", tween: [ "transform", "${__03_text_zhuiqiu}", "scaleY", '1', { fromValue: '0'}], position: 850, duration: 190 },
            { id: "eid52", tween: [ "transform", "${__03_text_zhuiqiu}", "scaleY", '1.34614', { fromValue: '1'}], position: 1040, duration: 170 },
            { id: "eid3", tween: [ "transform", "${__03_back_zhuiqiu01}", "translateX", '-450.66px', { fromValue: '-640px'}], position: 0, duration: 250 },
            { id: "eid18", tween: [ "transform", "${__03_back_zhuiqiu01}", "translateX", '0px', { fromValue: '-450.66px'}], position: 250, duration: 500 },
            { id: "eid8", tween: [ "transform", "${__03_back_zhuiqiu02}", "translateX", '0px', { fromValue: '640px'}], position: 250, duration: 750 },
            { id: "eid47", tween: [ "transform", "${__04_text_jiayi}", "translateX", '-60.99px', { fromValue: '-60.99px'}], position: 1750, duration: 0 },
            { id: "eid48", tween: [ "transform", "${__04_text_jiayi}", "translateY", '-197.33px', { fromValue: '-197.33px'}], position: 1750, duration: 0 },
            { id: "eid9", tween: [ "transform", "${__03_text_zhuiqiu}", "scaleX", '1', { fromValue: '1'}], position: 850, duration: 0 },
            { id: "eid51", tween: [ "transform", "${__03_text_zhuiqiu}", "scaleX", '1.39061', { fromValue: '1'}], position: 1040, duration: 170 }         ]
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
})(jQuery, AdobeEdge, "EDGE-19771959");
