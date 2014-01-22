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
            id:'back_zhuibu',
            type:'image',
            rect:[266,544,640,960],
            fill:["rgba(0,0,0,0)",im+"back_zhuibu.jpg"],
            transform:[[-265,-543]]
         },
         {
            id:'_17_front_zhuibu',
            type:'image',
            rect:[296,514,535,339],
            clip:['rect(0px 530px 338px 0px)'],
            fill:["rgba(0,0,0,0)",im+"17_front_zhuibu.png"],
            transform:[[-208,-233],[1]]
         },
         {
            id:'front_xiang',
            type:'image',
            rect:[346,596,592,404],
            fill:["rgba(0,0,0,0)",im+"front_xiang.png"],
            transform:[[-297,-308]]
         },
         {
            id:'front_huoyan',
            type:'image',
            rect:[266,698,640,960],
            fill:["rgba(0,0,0,0)",im+"front_huoyan.png"],
            transform:[[-265,-697]]
         },
         {
            id:'text_zhuibu',
            type:'image',
            rect:[194,584,394,50],
            fill:["rgba(0,0,0,0)",im+"text_zhuibu.png"],
            transform:[[-143,52],[],[],[1.253,1.379]]
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:[46,418,0,0]
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
         "${_text_zhuibu}": [
            ["transform", "scaleX", '1.2538'],
            ["transform", "translateX", '-143.99px'],
            ["transform", "scaleY", '1.37999'],
            ["transform", "translateY", '52.5px']
         ],
         "${__17_front_zhuibu}": [
            ["style", "clip", [0,530,338,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-233.36px'],
            ["transform", "translateX", '-208.09px'],
            ["transform", "rotateZ", '1deg']
         ],
         "${_front_huoyan}": [
            ["transform", "translateX", '-265.99px'],
            ["transform", "translateY", '-697.99px']
         ],
         "${_Symbol_1}": [
            ["transform", "scaleX", '1.07295'],
            ["transform", "scaleY", '1.06481'],
            ["transform", "translateY", '-75.99px'],
            ["transform", "translateX", '-35.01px']
         ],
         "${_front_xiang}": [
            ["transform", "translateX", '-297.99px'],
            ["transform", "translateY", '-308px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${_15}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_back_zhuibu}": [
            ["transform", "translateX", '-265.99px'],
            ["transform", "translateY", '-543.99px']
         ],
         "${_14-fire}": [
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
         duration: 333,
         autoPlay: true,
         timeline: [
            { id: "eid474", tween: [ "transform", "${_Symbol_1}", "scaleX", '1.07295', { fromValue: '1.07295'}], position: 0, duration: 0 },
            { id: "eid476", tween: [ "transform", "${_Symbol_1}", "translateX", '-24.5px', { fromValue: '-24.5px'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "transform", "${_Symbol_1}", "translateY", '266.99px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid475", tween: [ "transform", "${_Symbol_1}", "scaleY", '1.06481', { fromValue: '1.06481'}], position: 0, duration: 0 },
            { id: "eid319", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Symbol_1}', [] ], ""], position: 333 }         ]
      }
   }
},
"fire": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-276,-391],[-180],{},[1,1.91]],
      id: '_17-2fireCopy',
      type: 'image',
      rect: [277,589,640,427],
      fill: ['rgba(0,0,0,0)','images/17%E9%99%88%E7%BF%94%E8%BF%BD%E6%8D%95%E9%99%8D%E8%96%AA-2fire.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '813.97524px'],
            ["style", "width", '640px']
         ],
         "${__17-2fireCopy}": [
            ["transform", "scaleY", '1.91074'],
            ["transform", "translateY", '-391.99px'],
            ["transform", "translateX", '-276.33px'],
            ["transform", "rotateZ", '-180deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fire2": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-95,-481],[-180,0],[0],[1.565,2.333]],
      id: '_17-2fire',
      type: 'image',
      rect: [277,764,640,427],
      fill: ['rgba(0,0,0,0)','images/17%E9%99%88%E7%BF%94%E8%BF%BD%E6%8D%95%E9%99%8D%E8%96%AA-2fire.png']
   },
   {
      id: 'fire',
      type: 'rect',
      rect: [0,174,0,0]
   }],
   symbolInstances: [
   {
      id: 'fire',
      symbolName: 'fire'
   }   ]
   },
   states: {
      "Base State": {
         "${_fire}": [
            ["transform", "translateY", '6px']
         ],
         "${__17-2fire}": [
            ["transform", "translateX", '-95.33px'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '1.56562'],
            ["transform", "translateY", '-476px'],
            ["transform", "scaleY", '2.33333']
         ],
         "${symbolSelector}": [
            ["style", "height", '993.99858px'],
            ["style", "width", '1001.998417px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "transform", "${__17-2fire}", "translateY", '-476px', { fromValue: '-476px'}], position: 500, duration: 0 },
            { id: "eid1", tween: [ "transform", "${_fire}", "translateY", '6px', { fromValue: '6px'}], position: 500, duration: 0 }         ]
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
      transform: [[-86,132]],
      type: 'image',
      id: '_17_text_zhuibu2',
      rect: [141,-90,181,135],
      clip: ['rect(0px 180px 4px 180px)'],
      fill: ['rgba(0,0,0,0)','images/17_text_zhuibu2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__17_text_zhuibu2}": [
            ["transform", "translateX", '-86.99px'],
            ["transform", "scaleX", '1.6'],
            ["style", "clip", [0,180,4,180], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '132.5px'],
            ["transform", "scaleY", '1.61925']
         ],
         "${symbolSelector}": [
            ["style", "height", '216.9795px'],
            ["style", "width", '288px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: true,
         timeline: [
            { id: "eid314", tween: [ "style", "${__17_text_zhuibu2}", "clip", [0,180,134,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,180,4,180]}], position: 0, duration: 333 }         ]
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
})(jQuery, AdobeEdge, "EDGE-4774468");
