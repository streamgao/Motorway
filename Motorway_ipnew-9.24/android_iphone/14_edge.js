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
            id:'_15_back_qushi',
            type:'image',
            rect:[376,628,640,892],
            fill:["rgba(0,0,0,0)",im+"15_back_qushi.jpg"],
            transform:[[-375,-559],[0,0],[0],[1,1]]
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:[0,449,0,0]
         },
         {
            id:'_15_text_2',
            type:'image',
            rect:[148,262,220,238],
            fill:["rgba(0,0,0,0)",im+"15_text_2.png"],
            transform:[[-1,-172],[],[],[1.018,1.142]]
         },
         {
            id:'_15_front_chenxiang2',
            type:'image',
            rect:[356,810,560,464],
            fill:["rgba(0,0,0,0)",im+"15_front_chenxiang.png"],
            transform:[[-266,-313],[0,0],[0],[1,1]]
         },
         {
            id:'_15_text_12',
            type:'image',
            rect:[140,894,416,33],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"15_text_12.png"],
            transform:[[-139,34]]
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_13-shock}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__15_text_12}": [
            ["transform", "translateX", '1px'],
            ["style", "clip", [0,28,32,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '1.39903'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '26px'],
            ["transform", "scaleY", '1.5625']
         ],
         "${_14}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '641px']
         ],
         "${__15_front_chenxiang2}": [
            ["transform", "translateX", '-266px'],
            ["transform", "translateY", '-313.99px']
         ],
         "${__15_back_qushi}": [
            ["transform", "translateX", '-375.99px'],
            ["transform", "translateY", '-559.99px']
         ],
         "${_Stage}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__15_text_2}": [
            ["transform", "scaleX", '0.00227'],
            ["transform", "translateY", '-284.66px'],
            ["transform", "translateX", '109.01px'],
            ["transform", "scaleY", '0.0168']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6055,
         autoPlay: true,
         labels: {
            "loop": 1250
         },
         timeline: [
            { id: "eid8", tween: [ "transform", "${__15_text_2}", "scaleY", '1.1', { fromValue: '0.0168'}], position: 394, duration: 356 },
            { id: "eid62", tween: [ "color", "${_14}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 6055, duration: 0 },
            { id: "eid31", tween: [ "style", "${__15_text_12}", "opacity", '0.77397260273973', { fromValue: '0'}], position: 903, duration: 346 },
            { id: "eid57", tween: [ "style", "${_14}", "height", '960px', { fromValue: '960px'}], position: 6055, duration: 0 },
            { id: "eid4", tween: [ "transform", "${__15_text_2}", "translateX", '3px', { fromValue: '109.01px'}], position: 250, duration: 356 },
            { id: "eid10", tween: [ "transform", "${__15_text_2}", "translateX", '3px', { fromValue: '3px'}], position: 606, duration: 713 },
            { id: "eid64", tween: [ "style", "${__15_text_12}", "clip", [0,414,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,28,32,0]}], position: 903, duration: 346 },
            { id: "eid6", tween: [ "transform", "${__15_text_2}", "scaleX", '1.1', { fromValue: '0.00227'}], position: 394, duration: 356 },
            { id: "eid15", tween: [ "transform", "${__15_text_2}", "translateY", '-170.09px', { fromValue: '-284.66px'}], position: 250, duration: 356 },
            { id: "eid54", tween: [ "transform", "${__15_text_12}", "translateX", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "style", "${_14}", "width", '641px', { fromValue: '641px'}], position: 6055, duration: 0 },
            { id: "eid55", tween: [ "transform", "${__15_text_12}", "translateY", '26px', { fromValue: '26px'}], position: 0, duration: 0 },
            { id: "eid34", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_Symbol_1}', [] ], ""], position: 2000 },
            { id: "eid36", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Symbol_1}', [] ], ""], position: 4000 }         ]
      }
   }
},
"Symbol_1": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-425,-203]],
      id: '_15_front_shandian',
      type: 'image',
      rect: [426,204,640,522],
      fill: ['rgba(0,0,0,0)','images/15_front_shandian.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '522px'],
            ["style", "width", '640px']
         ],
         "${__15_front_shandian}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-203.99px'],
            ["transform", "translateX", '-425.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2055,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${__15_front_shandian}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 60 },
            { id: "eid21", tween: [ "style", "${__15_front_shandian}", "opacity", '0.63698601722717', { fromValue: '0.000000'}], position: 1310, duration: 50 },
            { id: "eid22", tween: [ "style", "${__15_front_shandian}", "opacity", '0.047944904109589', { fromValue: '0.636986'}], position: 1360, duration: 50 },
            { id: "eid23", tween: [ "style", "${__15_front_shandian}", "opacity", '0.45890390410959', { fromValue: '0.047945'}], position: 1410, duration: 40 },
            { id: "eid24", tween: [ "style", "${__15_front_shandian}", "opacity", '0', { fromValue: '0.458904'}], position: 1450, duration: 50 },
            { id: "eid25", tween: [ "style", "${__15_front_shandian}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 70 },
            { id: "eid26", tween: [ "style", "${__15_front_shandian}", "opacity", '0', { fromValue: '1'}], position: 1570, duration: 75 },
            { id: "eid27", tween: [ "style", "${__15_front_shandian}", "opacity", '1', { fromValue: '0.000000'}], position: 1895, duration: 160 }         ]
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
})(jQuery, AdobeEdge, "EDGE-4159660");
