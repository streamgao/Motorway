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
            id:'_14_back_zhongshang',
            type:'image',
            rect:[196,488,640,427],
            clip:['rect(0px 636px 426px 72px)'],
            fill:["rgba(0,0,0,0)",im+"14_back_zhongshang.jpg"],
            transform:[[-233,-290],[],[],[1.137,1.727]]
         },
         {
            id:'_14_front_zhongshang',
            type:'image',
            rect:[288,545,465,397],
            fill:["rgba(0,0,0,0)",im+"14_front_zhongshang.png"]
         },
         {
            id:'_14_text_zhongshang2',
            type:'image',
            rect:[350,612,341,247],
            fill:["rgba(0,0,0,0)",im+"14_text_zhongshang.png"],
            transform:[[-89,-177],[],[],[1.2,1.2]]
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
         "${_13}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${_12-injured}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${_Stage}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__14_back_zhongshang}": [
            ["transform", "scaleY", '1.72771'],
            ["transform", "scaleX", '1.1375'],
            ["transform", "translateY", '-290.99px'],
            ["style", "clip", [0,636,426,72], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateX", '-233.99px']
         ],
         "${__14_front_zhongshang}": [
            ["style", "clip", [0,210,396,2], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-459.99px'],
            ["transform", "translateX", '15.99px']
         ],
         "${__14_text_zhongshang2}": [
            ["transform", "translateX", '-86.99px'],
            ["transform", "scaleX", '1.21761'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-170.39px'],
            ["transform", "scaleY", '1.25691']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${__14_front_zhongshang}", "clip", [0,466,396,2], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,210,396,2]}], position: 0, duration: 2000, easing: "easeInOutBounce" },
            { id: "eid46", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 110, easing: "easeInBounce" },
            { id: "eid47", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '0', { fromValue: '1'}], position: 110, duration: 185 },
            { id: "eid48", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '1', { fromValue: '0'}], position: 295, duration: 80, easing: "easeOutBounce" },
            { id: "eid49", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 80, easing: "easeOutBounce" },
            { id: "eid50", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '1', { fromValue: '0'}], position: 455, duration: 90, easing: "easeOutBounce" },
            { id: "eid51", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '0', { fromValue: '1'}], position: 545, duration: 80, easing: "easeOutBounce" },
            { id: "eid52", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 17, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '0', { fromValue: '1'}], position: 642, duration: 68, easing: "easeOutBounce" },
            { id: "eid54", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '1', { fromValue: '0'}], position: 710, duration: 85, easing: "easeOutBounce" },
            { id: "eid55", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '0', { fromValue: '1'}], position: 795, duration: 80, easing: "easeOutBounce" },
            { id: "eid56", tween: [ "style", "${__14_text_zhongshang2}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 50, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "transform", "${__14_front_zhongshang}", "translateY", '-459.99px', { fromValue: '-459.99px'}], position: 0, duration: 0, easing: "easeInOutBounce" },
            { id: "eid35", tween: [ "transform", "${__14_front_zhongshang}", "translateX", '-226.01px', { fromValue: '15.99px'}], position: 0, duration: 2000, easing: "easeInOutBounce" },
            { id: "eid43", tween: [ "transform", "${__14_text_zhongshang2}", "scaleX", '1.21761', { fromValue: '1.21761'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid45", tween: [ "transform", "${__14_text_zhongshang2}", "scaleX", '1.37903', { fromValue: '0'}], position: 110, duration: 140 },
            { id: "eid58", tween: [ "transform", "${__14_text_zhongshang2}", "scaleX", '1.26138', { fromValue: '1.37903'}], position: 250, duration: 675, easing: "easeOutBounce" },
            { id: "eid57", tween: [ "transform", "${__14_text_zhongshang2}", "translateX", '-106.99px', { fromValue: '-86.99px'}], position: 0, duration: 925, easing: "easeOutBounce" },
            { id: "eid42", tween: [ "transform", "${__14_text_zhongshang2}", "translateY", '-170.39px', { fromValue: '-170.39px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid44", tween: [ "transform", "${__14_text_zhongshang2}", "scaleY", '1.25691', { fromValue: '1.25691'}], position: 0, duration: 0, easing: "easeOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-3192627");
