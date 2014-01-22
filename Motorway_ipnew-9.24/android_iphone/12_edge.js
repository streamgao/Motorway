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
            id:'back_duijue1',
            type:'image',
            rect:[0,0,640,427],
            fill:["rgba(0,0,0,0)",im+"back_duijue1.png"],
            transform:[[640,374]]
         },
         {
            id:'back_duijue2',
            type:'image',
            rect:[0,0,640,241],
            fill:["rgba(0,0,0,0)",im+"back_duijue2.png"],
            transform:[]
         },
         {
            id:'s2',
            type:'image',
            rect:[0,0,100,100],
            fill:["rgba(0,0,0,0)",im+"s2.png"],
            transform:[[543,334],[],[],[5.952,5.952]]
         },
         {
            id:'v',
            type:'image',
            rect:[0,0,100,100],
            fill:["rgba(0,0,0,0)",im+"v.png"],
            transform:[[-48,289],[],[],[7.137,7.137]]
         },
         {
            id:'_12_text_jx',
            type:'image',
            rect:[178,214,210,121],
            fill:["rgba(0,0,0,0)",im+"12_text_jx.png"]
         },
         {
            id:'_13_text_lf',
            type:'image',
            rect:[444,672,230,177],
            fill:["rgba(0,0,0,0)",im+"13_text_lf.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_11-escape}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${_back_duijue1}": [
            ["transform", "translateY", '521.99px'],
            ["transform", "translateX", '640px']
         ],
         "${_v}": [
            ["transform", "translateX", '159.46px'],
            ["transform", "scaleX", '7.13747'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '395.5px'],
            ["transform", "scaleY", '7.13747']
         ],
         "${_s2}": [
            ["transform", "translateX", '493.93px'],
            ["transform", "scaleX", '5.95243'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '490.93px'],
            ["transform", "scaleY", '5.95243']
         ],
         "${__13_text_lf}": [
            ["transform", "translateX", '-217.68px'],
            ["transform", "scaleX", '0.04615'],
            ["transform", "scaleY", '0.05101'],
            ["transform", "translateY", '-86.19px'],
            ["style", "clip", [0,260,196,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '800px'],
            ["style", "width", '640px']
         ],
         "${_12}": [
            ["style", "height", '800px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_back_duijue2}": [
            ["transform", "translateY", '148px'],
            ["transform", "translateX", '-639.99px']
         ],
         "${__12_text_jx}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-12.99px'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-48.99px'],
            ["transform", "scaleY", '0']
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
            { id: "eid164", tween: [ "transform", "${__12_text_jx}", "scaleX", '1.2', { fromValue: '0'}], position: 750, duration: 237 },
            { id: "eid193", tween: [ "transform", "${__13_text_lf}", "translateY", '-217.34px', { fromValue: '-86.19px'}], position: 890, duration: 860 },
            { id: "eid194", tween: [ "transform", "${__13_text_lf}", "scaleX", '1.1', { fromValue: '0.04615'}], position: 890, duration: 360 },
            { id: "eid196", tween: [ "transform", "${__13_text_lf}", "scaleX", '1.14615', { fromValue: '1.1'}], position: 1250, duration: 500 },
            { id: "eid60", tween: [ "transform", "${_s2}", "scaleX", '2.4', { fromValue: '5.95243'}], position: 1250, duration: 250 },
            { id: "eid91", tween: [ "transform", "${_s2}", "scaleX", '2.4', { fromValue: '5.95243'}], position: 1500, duration: 250 },
            { id: "eid101", tween: [ "transform", "${_s2}", "scaleX", '2.4', { fromValue: '5.95243'}], position: 1750, duration: 250 },
            { id: "eid185", tween: [ "style", "${__13_text_lf}", "clip", [0,260,196,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,260,196,0]}], position: 1750, duration: 0 },
            { id: "eid171", tween: [ "transform", "${__12_text_jx}", "scaleY", '1.2', { fromValue: '0'}], position: 750, duration: 237 },
            { id: "eid179", tween: [ "transform", "${__12_text_jx}", "scaleY", '1.35', { fromValue: '1.2'}], position: 987, duration: 763 },
            { id: "eid125", tween: [ "transform", "${_s2}", "translateY", '476.52px', { fromValue: '490.93px'}], position: 0, duration: 1000 },
            { id: "eid141", tween: [ "transform", "${_s2}", "translateY", '426.93px', { fromValue: '476.52px'}], position: 1000, duration: 250 },
            { id: "eid59", tween: [ "transform", "${_s2}", "translateY", '265.99px', { fromValue: '426.93px'}], position: 1250, duration: 250 },
            { id: "eid92", tween: [ "transform", "${_s2}", "translateY", '265.99px', { fromValue: '342.93px'}], position: 1500, duration: 250 },
            { id: "eid102", tween: [ "transform", "${_s2}", "translateY", '375.98px', { fromValue: '342.93px'}], position: 1750, duration: 250 },
            { id: "eid123", tween: [ "transform", "${_v}", "translateY", '400.83px', { fromValue: '395.5px'}], position: 0, duration: 1000 },
            { id: "eid139", tween: [ "transform", "${_v}", "translateY", '408.16px', { fromValue: '400.83px'}], position: 1000, duration: 250 },
            { id: "eid144", tween: [ "transform", "${_v}", "translateY", '247.5px', { fromValue: '408.16px'}], position: 1250, duration: 250 },
            { id: "eid131", tween: [ "transform", "${_v}", "translateY", '357.49px', { fromValue: '247.5px'}], position: 1750, duration: 250 },
            { id: "eid173", tween: [ "transform", "${__12_text_jx}", "translateY", '-246px', { fromValue: '-48.99px'}], position: 750, duration: 237 },
            { id: "eid178", tween: [ "transform", "${__12_text_jx}", "translateY", '-174px', { fromValue: '-246px'}], position: 987, duration: 763 },
            { id: "eid195", tween: [ "transform", "${__13_text_lf}", "scaleY", '1.1', { fromValue: '0.05101'}], position: 890, duration: 360 },
            { id: "eid197", tween: [ "transform", "${__13_text_lf}", "scaleY", '1.2653', { fromValue: '1.1'}], position: 1250, duration: 500 },
            { id: "eid50", tween: [ "transform", "${_v}", "translateX", '159.46px', { fromValue: '159.46px'}], position: 1500, duration: 0 },
            { id: "eid130", tween: [ "transform", "${_v}", "translateX", '160.55px', { fromValue: '159.46px'}], position: 1750, duration: 250 },
            { id: "eid176", tween: [ "style", "${__12_text_jx}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 237 },
            { id: "eid58", tween: [ "transform", "${_s2}", "translateX", '403.98px', { fromValue: '493.93px'}], position: 1250, duration: 250 },
            { id: "eid93", tween: [ "transform", "${_s2}", "translateX", '403.98px', { fromValue: '493.93px'}], position: 1500, duration: 250 },
            { id: "eid103", tween: [ "transform", "${_s2}", "translateX", '405.06px', { fromValue: '493.93px'}], position: 1750, duration: 250 },
            { id: "eid192", tween: [ "transform", "${__13_text_lf}", "translateX", '-91.19px', { fromValue: '-217.68px'}], position: 890, duration: 860 },
            { id: "eid57", tween: [ "style", "${_s2}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid94", tween: [ "style", "${_s2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid104", tween: [ "style", "${_s2}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid42", tween: [ "transform", "${_v}", "scaleX", '2.76943', { fromValue: '7.13747'}], position: 1250, duration: 250 },
            { id: "eid86", tween: [ "transform", "${_v}", "scaleX", '2.76943', { fromValue: '7.13747'}], position: 1500, duration: 250 },
            { id: "eid96", tween: [ "transform", "${_v}", "scaleX", '2.76943', { fromValue: '7.13747'}], position: 1750, duration: 250 },
            { id: "eid61", tween: [ "transform", "${_s2}", "scaleY", '2.4', { fromValue: '5.95243'}], position: 1250, duration: 250 },
            { id: "eid95", tween: [ "transform", "${_s2}", "scaleY", '2.4', { fromValue: '5.95243'}], position: 1500, duration: 250 },
            { id: "eid105", tween: [ "transform", "${_s2}", "scaleY", '2.4', { fromValue: '5.95243'}], position: 1750, duration: 250 },
            { id: "eid43", tween: [ "transform", "${_v}", "scaleY", '2.76943', { fromValue: '7.13747'}], position: 1250, duration: 250 },
            { id: "eid87", tween: [ "transform", "${_v}", "scaleY", '2.76943', { fromValue: '7.13747'}], position: 1500, duration: 250 },
            { id: "eid97", tween: [ "transform", "${_v}", "scaleY", '2.76943', { fromValue: '7.13747'}], position: 1750, duration: 250 },
            { id: "eid175", tween: [ "style", "${__12_text_jx}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 750, duration: 0 },
            { id: "eid202", tween: [ "style", "${__12_text_jx}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 750, duration: 0 },
            { id: "eid203", tween: [ "style", "${__12_text_jx}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 750, duration: 0 },
            { id: "eid204", tween: [ "style", "${__12_text_jx}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 750, duration: 0 },
            { id: "eid205", tween: [ "style", "${__12_text_jx}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 750, duration: 0 },
            { id: "eid172", tween: [ "transform", "${__12_text_jx}", "translateX", '-86px', { fromValue: '-12.99px'}], position: 750, duration: 237 },
            { id: "eid177", tween: [ "transform", "${__12_text_jx}", "translateX", '-72.5px', { fromValue: '-86px'}], position: 987, duration: 763 },
            { id: "eid127", tween: [ "transform", "${_back_duijue1}", "translateY", '374px', { fromValue: '521.99px'}], position: 0, duration: 250 },
            { id: "eid137", tween: [ "transform", "${_back_duijue1}", "translateY", '525.13px', { fromValue: '374px'}], position: 250, duration: 750 },
            { id: "eid143", tween: [ "transform", "${_back_duijue1}", "translateY", '598.84px', { fromValue: '525.13px'}], position: 1000, duration: 250 },
            { id: "eid145", tween: [ "transform", "${_back_duijue1}", "translateY", '483.99px', { fromValue: '598.84px'}], position: 1250, duration: 750 },
            { id: "eid8", tween: [ "transform", "${_back_duijue1}", "translateX", '2px', { fromValue: '640px'}], position: 250, duration: 500 },
            { id: "eid62", tween: [ "transform", "${_back_duijue1}", "translateX", '0px', { fromValue: '2px'}], position: 750, duration: 500 },
            { id: "eid136", tween: [ "transform", "${_back_duijue1}", "translateX", '1.09px', { fromValue: '0px'}], position: 1250, duration: 750 },
            { id: "eid39", tween: [ "style", "${_v}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid88", tween: [ "style", "${_v}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid98", tween: [ "style", "${_v}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid4", tween: [ "transform", "${_back_duijue2}", "translateX", '2.34px', { fromValue: '-639.99px'}], position: 0, duration: 500 },
            { id: "eid63", tween: [ "transform", "${_back_duijue2}", "translateX", '-1.09px', { fromValue: '2.34px'}], position: 500, duration: 750 },
            { id: "eid128", tween: [ "transform", "${_back_duijue2}", "translateX", '0px', { fromValue: '-1.09px'}], position: 1250, duration: 750 },
            { id: "eid64", tween: [ "transform", "${_back_duijue2}", "translateY", '138.4px', { fromValue: '148px'}], position: 0, duration: 1000 },
            { id: "eid138", tween: [ "transform", "${_back_duijue2}", "translateY", '90px', { fromValue: '138.4px'}], position: 1000, duration: 250 },
            { id: "eid129", tween: [ "transform", "${_back_duijue2}", "translateY", '116px', { fromValue: '90px'}], position: 1250, duration: 750 }         ]
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
})(jQuery, AdobeEdge, "EDGE-26068991");
