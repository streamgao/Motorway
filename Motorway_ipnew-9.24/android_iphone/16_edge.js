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
            id:'back_1',
            type:'image',
            rect:[290,500,640,960],
            fill:["rgba(0,0,0,0)",im+"back_1.jpg"],
            transform:[[-289,-499]]
         },
         {
            id:'front_wu',
            type:'image',
            rect:[286,564,640,960],
            fill:["rgba(0,0,0,0)",im+"front_wu.png"],
            transform:[[-285,-563]]
         },
         {
            id:'front_huangche',
            type:'image',
            rect:[442,718,640,500],
            fill:["rgba(0,0,0,0)",im+"front_huangche.png"],
            transform:[[-425,-217]]
         },
         {
            id:'front_yinche',
            type:'image',
            rect:[186,422,519,654],
            fill:["rgba(0,0,0,0)",im+"front_yinche.png"],
            transform:[[-189,-404],[20]]
         },
         {
            id:'front_huo',
            type:'image',
            rect:[138,806,434,834],
            fill:["rgba(0,0,0,0)",im+"front_huo.png"],
            transform:[[-137,-679]]
         },
         {
            id:'text_shengyin',
            type:'image',
            rect:[446,558,258,116],
            fill:["rgba(0,0,0,0)",im+"text_shengyin.png"],
            transform:[[-120,-146],[],[],[1.395,1.775]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_back_1}": [
            ["transform", "translateX", '-289.99px'],
            ["transform", "translateY", '-499.99px']
         ],
         "${_front_huo}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-679.99px'],
            ["transform", "translateX", '-137.99px']
         ],
         "${_text_shengyin}": [
            ["transform", "translateX", '-315.49px'],
            ["transform", "rotateZ", '-45deg'],
            ["transform", "scaleX", '0.0349'],
            ["transform", "translateY", '-273.99px'],
            ["transform", "scaleY", '0.06902']
         ],
         "${_front_wu}": [
            ["transform", "translateX", '-285.99px'],
            ["transform", "translateY", '-563.99px']
         ],
         "${_front_yinche}": [
            ["transform", "translateX", '-212.47px'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.69802'],
            ["transform", "translateY", '-437.07px'],
            ["transform", "scaleY", '0.75']
         ],
         "${_16}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${_front_huangche}": [
            ["style", "clip", [0,582,360,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateX", '-383.99px'],
            ["transform", "translateY", '-117.99px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2540,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "transform", "${_front_yinche}", "translateX", '-189.97px', { fromValue: '-212.47px'}], position: 500, duration: 1500 },
            { id: "eid28", tween: [ "transform", "${_front_yinche}", "translateX", '-142.97px', { fromValue: '-189.97px'}], position: 2000, duration: 195, easing: "easeInOutBack" },
            { id: "eid4", tween: [ "transform", "${_front_yinche}", "translateY", '-410.99px', { fromValue: '-437.07px'}], position: 500, duration: 1500 },
            { id: "eid29", tween: [ "transform", "${_front_yinche}", "translateY", '-438.97px', { fromValue: '-410.99px'}], position: 2000, duration: 195, easing: "easeInOutBack" },
            { id: "eid10", tween: [ "transform", "${_front_yinche}", "rotateZ", '20deg', { fromValue: '5deg'}], position: 500, duration: 1500 },
            { id: "eid8", tween: [ "transform", "${_front_yinche}", "scaleY", '1.052', { fromValue: '0.75'}], position: 500, duration: 1500 },
            { id: "eid31", tween: [ "transform", "${_front_yinche}", "scaleY", '1.32321', { fromValue: '1.052'}], position: 2000, duration: 195, easing: "easeInOutBack" },
            { id: "eid35", tween: [ "transform", "${_front_huangche}", "translateY", '-257.99px', { fromValue: '-117.99px'}], position: 2080, duration: 115, easing: "easeInOutBack" },
            { id: "eid34", tween: [ "transform", "${_front_huangche}", "translateX", '-441.99px', { fromValue: '-383.99px'}], position: 2080, duration: 115, easing: "easeInOutBack" },
            { id: "eid27", tween: [ "style", "${_front_huo}", "opacity", '1', { fromValue: '0'}], position: 2080, duration: 115, easing: "easeInOutBounce" },
            { id: "eid33", tween: [ "transform", "${_text_shengyin}", "rotateZ", '-45deg', { fromValue: '-45deg'}], position: 2195, duration: 0, easing: "easeInOutBounce" },
            { id: "eid41", tween: [ "style", "${_16}", "height", '960px', { fromValue: '960px'}], position: 2195, duration: 0 },
            { id: "eid42", tween: [ "color", "${_16}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 2195, duration: 0 },
            { id: "eid16", tween: [ "transform", "${_text_shengyin}", "translateY", '-167.98px', { fromValue: '-273.99px'}], position: 2000, duration: 70 },
            { id: "eid52", tween: [ "transform", "${_text_shengyin}", "translateY", '-167.98px', { fromValue: '-181.16px'}], position: 2070, duration: 9 },
            { id: "eid20", tween: [ "transform", "${_text_shengyin}", "translateY", '-396.99px', { fromValue: '-181.16px'}], position: 2080, duration: 115, easing: "easeInOutBack" },
            { id: "eid44", tween: [ "transform", "${_text_shengyin}", "translateY", '-396.99px', { fromValue: '-181.16px'}], position: 2195, duration: 115, easing: "easeInOutBack" },
            { id: "eid48", tween: [ "transform", "${_text_shengyin}", "translateY", '-396.99px', { fromValue: '-181.16px'}], position: 2310, duration: 115, easing: "easeInOutBack" },
            { id: "eid56", tween: [ "transform", "${_text_shengyin}", "translateY", '-396.99px', { fromValue: '-181.16px'}], position: 2425, duration: 115, easing: "easeInOutBack" },
            { id: "eid39", tween: [ "style", "${_16}", "width", '640px', { fromValue: '640px'}], position: 2195, duration: 0 },
            { id: "eid15", tween: [ "transform", "${_text_shengyin}", "translateX", '-162.29px', { fromValue: '-315.49px'}], position: 2000, duration: 70 },
            { id: "eid51", tween: [ "transform", "${_text_shengyin}", "translateX", '-162.29px', { fromValue: '-183.14px'}], position: 2070, duration: 9 },
            { id: "eid19", tween: [ "transform", "${_text_shengyin}", "translateX", '-186.73px', { fromValue: '-183.14px'}], position: 2080, duration: 115, easing: "easeInOutBack" },
            { id: "eid43", tween: [ "transform", "${_text_shengyin}", "translateX", '-186.73px', { fromValue: '-183.14px'}], position: 2195, duration: 115, easing: "easeInOutBack" },
            { id: "eid47", tween: [ "transform", "${_text_shengyin}", "translateX", '-186.73px', { fromValue: '-183.14px'}], position: 2310, duration: 115, easing: "easeInOutBack" },
            { id: "eid55", tween: [ "transform", "${_text_shengyin}", "translateX", '-186.73px', { fromValue: '-183.14px'}], position: 2425, duration: 115, easing: "easeInOutBack" },
            { id: "eid6", tween: [ "transform", "${_front_yinche}", "scaleX", '1.03362', { fromValue: '0.69802'}], position: 500, duration: 1500 },
            { id: "eid30", tween: [ "transform", "${_front_yinche}", "scaleX", '1.29847', { fromValue: '1.03362'}], position: 2000, duration: 195, easing: "easeInOutBack" },
            { id: "eid38", tween: [ "style", "${_front_huangche}", "clip", [0,638,500,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,582,360,0]}], position: 2080, duration: 115, easing: "easeInOutBack" },
            { id: "eid17", tween: [ "transform", "${_text_shengyin}", "scaleX", '1.22249', { fromValue: '0.0349'}], position: 2000, duration: 70 },
            { id: "eid53", tween: [ "transform", "${_text_shengyin}", "scaleX", '1.22249', { fromValue: '1.06087'}], position: 2070, duration: 9 },
            { id: "eid21", tween: [ "transform", "${_text_shengyin}", "scaleX", '1.70325', { fromValue: '1.06087'}], position: 2080, duration: 115, easing: "easeInOutBack" },
            { id: "eid45", tween: [ "transform", "${_text_shengyin}", "scaleX", '1.70325', { fromValue: '1.06087'}], position: 2195, duration: 115, easing: "easeInOutBack" },
            { id: "eid49", tween: [ "transform", "${_text_shengyin}", "scaleX", '1.70325', { fromValue: '1.06087'}], position: 2310, duration: 115, easing: "easeInOutBack" },
            { id: "eid57", tween: [ "transform", "${_text_shengyin}", "scaleX", '1.70325', { fromValue: '1.06087'}], position: 2425, duration: 115, easing: "easeInOutBack" },
            { id: "eid18", tween: [ "transform", "${_text_shengyin}", "scaleY", '1.89677', { fromValue: '0.06902'}], position: 2000, duration: 70 },
            { id: "eid54", tween: [ "transform", "${_text_shengyin}", "scaleY", '1.89677', { fromValue: '1.66955'}], position: 2070, duration: 9 },
            { id: "eid22", tween: [ "transform", "${_text_shengyin}", "scaleY", '2.34974', { fromValue: '1.66955'}], position: 2080, duration: 115, easing: "easeInOutBack" },
            { id: "eid46", tween: [ "transform", "${_text_shengyin}", "scaleY", '2.34974', { fromValue: '1.66955'}], position: 2195, duration: 115, easing: "easeInOutBack" },
            { id: "eid50", tween: [ "transform", "${_text_shengyin}", "scaleY", '2.34974', { fromValue: '1.66955'}], position: 2310, duration: 115, easing: "easeInOutBack" },
            { id: "eid58", tween: [ "transform", "${_text_shengyin}", "scaleY", '2.34974', { fromValue: '1.66955'}], position: 2425, duration: 115, easing: "easeInOutBack" }         ]
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
})(jQuery, AdobeEdge, "EDGE-13851952");
