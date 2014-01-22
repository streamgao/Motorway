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
   build: "0.11.0.150",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'_012',
            type:'image',
            rect:[408,542,640,960],
            fill:["rgba(0,0,0,0)",im+"01.jpg"],
            transform:[[-407,-558]]
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:[0,209,0,0]
         },
         {
            id:'guangquan3',
            type:'image',
            rect:[347,480,350,350],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"guangquan3.png"],
            transform:[[-172,-245],[],[],[1.104,1.104]]
         },
         {
            id:'chedeng',
            type:'image',
            rect:[142,778,307,274],
            fill:["rgba(0,0,0,0)",im+"chedeng.png"],
            transform:[[-171,-264],[],[],[2.96,2.96]]
         },
         {
            id:'chedengCopy',
            type:'image',
            rect:[142,778,307,274],
            fill:["rgba(0,0,0,0)",im+"chedeng.png"],
            transform:[[263,-276],[],[],[2.96,2.96]]
         },
         {
            id:'_8000',
            type:'image',
            rect:[310,204,588,204],
            fill:["rgba(0,0,0,0)",im+"8000.png"]
         },
         {
            id:'wannabe',
            type:'image',
            rect:[256,434,588,204],
            fill:["rgba(0,0,0,0)",im+"wannabe.png"]
         },
         {
            id:'_2new2',
            type:'image',
            rect:[246,584,640,960],
            fill:["rgba(0,0,0,0)",im+"2new2.jpg"]
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
         "${_chedeng}": [
            ["transform", "translateX", '-171.06px'],
            ["transform", "scaleX", '2.96019'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-264.45px'],
            ["transform", "scaleY", '2.9602']
         ],
         "${_chedengCopy}": [
            ["transform", "scaleY", '2.9602'],
            ["transform", "scaleX", '2.96019'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-276.45px'],
            ["transform", "translateX", '263.9px']
         ],
         "${_Symbol_1}": [
            ["transform", "scaleY", '1.00266'],
            ["transform", "translateY", '0.99px']
         ],
         "${__2new2}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-585.99px'],
            ["transform", "translateX", '-245.99px']
         ],
         "${_wannabe}": [
            ["style", "clip", [0,50,80,50], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-435.99px'],
            ["transform", "translateX", '-150px']
         ],
         "${__8000}": [
            ["style", "clip", [0,20,204,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-185.99px'],
            ["transform", "translateX", '-338.99px']
         ],
         "${__012}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-558px'],
            ["transform", "translateX", '-407.99px']
         ],
         "${_Stage}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_01}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_00-poaster}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_guangquan3}": [
            ["transform", "translateX", '-171.96px'],
            ["transform", "scaleX", '1.10476'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-263.73px'],
            ["transform", "scaleY", '1.10476']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12391,
         autoPlay: true,
         labels: {
            "loop": 10500
         },
         timeline: [
            { id: "eid124", tween: [ "style", "${_chedengCopy}", "opacity", '0.99', { fromValue: '1'}], position: 7750, duration: 2750 },
            { id: "eid135", tween: [ "style", "${_chedengCopy}", "opacity", '0', { fromValue: '0.99'}], position: 10500, duration: 967 },
            { id: "eid104", tween: [ "style", "${_chedengCopy}", "opacity", '0.99', { fromValue: '0.000000'}], position: 11467, duration: 924 },
            { id: "eid137", tween: [ "transform", "${__2new2}", "translateX", '-245.99px', { fromValue: '-245.99px'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_wannabe}", "clip", [0,344,94,36], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,50,80,50]}], position: 4000, duration: 1000 },
            { id: "eid123", tween: [ "style", "${_chedeng}", "opacity", '0.99', { fromValue: '1'}], position: 7750, duration: 2750 },
            { id: "eid136", tween: [ "style", "${_chedeng}", "opacity", '0.000000', { fromValue: '0.99'}], position: 10500, duration: 967 },
            { id: "eid102", tween: [ "style", "${_chedeng}", "opacity", '0.99', { fromValue: '0.000000'}], position: 11467, duration: 924 },
            { id: "eid82", tween: [ "style", "${__8000}", "clip", [0,20,204,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,20,204,0]}], position: 4000, duration: 0 },
            { id: "eid83", tween: [ "style", "${__8000}", "clip", [0,566,204,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,20,204,0]}], position: 4750, duration: 2000 },
            { id: "eid75", tween: [ "transform", "${_wannabe}", "translateX", '-150px', { fromValue: '-150px'}], position: 4000, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_Symbol_1}", "scaleY", '1.00266', { fromValue: '1.00266'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "transform", "${_Symbol_1}", "translateY", '0.99px', { fromValue: '0.99px'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "transform", "${__8000}", "translateY", '-185.99px', { fromValue: '-185.99px'}], position: 4000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_guangquan3}", "opacity", '0.96575342465753', { fromValue: '0.000000'}], position: 7750, duration: 0 },
            { id: "eid88", tween: [ "style", "${_guangquan3}", "opacity", '1', { fromValue: '0.96575342465753'}], position: 8000, duration: 250 },
            { id: "eid89", tween: [ "style", "${_guangquan3}", "opacity", '0.000000', { fromValue: '1'}], position: 8250, duration: 2343 },
            { id: "eid23", tween: [ "style", "${_guangquan3}", "opacity", '1', { fromValue: '0'}], position: 10593, duration: 875 },
            { id: "eid24", tween: [ "style", "${_guangquan3}", "opacity", '0', { fromValue: '1'}], position: 11468, duration: 875 },
            { id: "eid166", tween: [ "transform", "${_guangquan3}", "translateX", '-171.96px', { fromValue: '-171.96px'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "transform", "${__8000}", "translateX", '-234px', { fromValue: '-338.99px'}], position: 4000, duration: 750 },
            { id: "eid84", tween: [ "transform", "${__8000}", "translateX", '-290.99px', { fromValue: '-234px'}], position: 4750, duration: 2000 },
            { id: "eid139", tween: [ "transform", "${__2new2}", "translateY", '-585.99px', { fromValue: '-585.99px'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "transform", "${_wannabe}", "translateY", '-435.99px', { fromValue: '-435.99px'}], position: 4000, duration: 0 },
            { id: "eid149", tween: [ "style", "${__012}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 750 },
            { id: "eid141", tween: [ "style", "${__2new2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
            { id: "eid142", tween: [ "style", "${__2new2}", "opacity", '0', { fromValue: '1'}], position: 2832, duration: 1000 }         ]
      }
   }
},
"Symbol_1": {
   version: "0.1.6",
   build: "0.11.0.150",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-461,-433],[0,0],[0],[1,1]],
      rect: [463,434,640,750],
      id: 'title3',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/title3.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '750px'],
            ["style", "width", '640px']
         ],
         "${_title3}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-433.99px'],
            ["transform", "translateX", '-461.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7750,
         autoPlay: true,
         timeline: [
            { id: "eid86", tween: [ "style", "${_title3}", "opacity", '1', { fromValue: '0'}], position: 7750, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-6037919");
