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
            id:'_02_front_jiaoxun23',
            type:'image',
            rect:[514,306,484,232],
            fill:["rgba(0,0,0,0)",im+"02_front_jiaoxun2.png"],
            transform:[[-997,-143]]
         },
         {
            id:'_02_front_jiaoxun23Copy2',
            type:'image',
            rect:[514,306,484,232],
            fill:["rgba(0,0,0,0)",im+"02_front_jiaoxun2.png"],
            transform:[[-997,-143]]
         },
         {
            id:'_02_front_jiaoxun23Copy',
            type:'image',
            rect:[514,306,484,232],
            fill:["rgba(0,0,0,0)",im+"02_front_jiaoxun2.png"],
            transform:[[-998,-143]]
         },
         {
            id:'_02_back_xiang2',
            type:'image',
            rect:[0,0,640,407],
            fill:["rgba(0,0,0,0)",im+"02_back_xiang2.png"],
            transform:[[0,190]]
         },
         {
            id:'_02_text_jiaoxun',
            type:'image',
            rect:[166,826,206,162],
            fill:["rgba(0,0,0,0)",im+"02_text_jiaoxun.png"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__02_back_xiang2}": [
            ["transform", "translateY", '190px']
         ],
         "${_04}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__02_text_jiaoxun}": [
            ["transform", "scaleX", '0.04852'],
            ["transform", "translateX", '8.99px'],
            ["transform", "scaleY", '0.04937'],
            ["transform", "translateY", '-411px']
         ],
         "${__02_front_jiaoxun23Copy}": [
            ["transform", "translateX", '-996.33px'],
            ["transform", "translateY", '-143.55px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '407px'],
            ["style", "width", '640px']
         ],
         "${__02_front_jiaoxun23}": [
            ["transform", "translateY", '-143.55px'],
            ["transform", "translateX", '-998.99px']
         ],
         "${_03}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${__02_front_jiaoxun23Copy2}": [
            ["transform", "translateY", '-143.55px'],
            ["transform", "translateX", '-998.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         labels: {
            "loop": 3333
         },
         timeline: [
            { id: "eid193", tween: [ "transform", "${__02_front_jiaoxun23}", "translateY", '-142.99px', { fromValue: '-143.55px'}], position: 3333, duration: 2667 },
            { id: "eid187", tween: [ "transform", "${__02_front_jiaoxun23}", "translateX", '-839.33px', { fromValue: '-998.99px'}], position: 0, duration: 1500 },
            { id: "eid188", tween: [ "transform", "${__02_front_jiaoxun23}", "translateX", '-513.33px', { fromValue: '-839.33px'}], position: 1500, duration: 1833 },
            { id: "eid192", tween: [ "transform", "${__02_front_jiaoxun23}", "translateX", '-30.33px', { fromValue: '-513.33px'}], position: 3333, duration: 2667 },
            { id: "eid168", tween: [ "transform", "${__02_text_jiaoxun}", "translateX", '-52px', { fromValue: '8.99px'}], position: 320, duration: 285 },
            { id: "eid186", tween: [ "transform", "${__02_front_jiaoxun23Copy2}", "translateX", '-356.33px', { fromValue: '-998.99px'}], position: 0, duration: 1500 },
            { id: "eid189", tween: [ "transform", "${__02_front_jiaoxun23Copy2}", "translateX", '-30.33px', { fromValue: '-356.33px'}], position: 1500, duration: 1833 },
            { id: "eid194", tween: [ "transform", "${__02_front_jiaoxun23Copy2}", "translateX", '452.65px', { fromValue: '-30.33px'}], position: 3333, duration: 2667 },
            { id: "eid169", tween: [ "transform", "${__02_text_jiaoxun}", "translateY", '-237.96px', { fromValue: '-411px'}], position: 320, duration: 285 },
            { id: "eid195", tween: [ "transform", "${__02_front_jiaoxun23Copy2}", "translateY", '-142.99px', { fromValue: '-143.55px'}], position: 3333, duration: 2667 },
            { id: "eid170", tween: [ "transform", "${__02_text_jiaoxun}", "scaleX", '1.73785', { fromValue: '0.04852'}], position: 320, duration: 285 },
            { id: "eid190", tween: [ "transform", "${__02_front_jiaoxun23Copy}", "translateX", '-513.33px', { fromValue: '-996.33px'}], position: 3333, duration: 2667 },
            { id: "eid171", tween: [ "transform", "${__02_text_jiaoxun}", "scaleY", '2.01234', { fromValue: '0.04937'}], position: 320, duration: 285 },
            { id: "eid191", tween: [ "transform", "${__02_front_jiaoxun23Copy}", "translateY", '-142.99px', { fromValue: '-143.55px'}], position: 3333, duration: 2667 }         ]
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
})(jQuery, AdobeEdge, "EDGE-3593712");
