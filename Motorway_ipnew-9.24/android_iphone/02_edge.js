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
            id:'_00_back_zenan2',
            type:'image',
            rect:[388,568,616,398],
            fill:["rgba(0,0,0,0)",im+"00_back_zenan2.jpg"],
            transform:[[-374,-270],[0,0],[0],[1.041,1.045]]
         },
         {
            id:'wheelstill2',
            type:'image',
            rect:[469,288,126,125],
            fill:["rgba(0,0,0,0)",im+"wheelstill2.png"]
         },
         {
            id:'wheelout2',
            type:'image',
            rect:[481,288,183,183],
            fill:["rgba(0,0,0,0)",im+"wheelout2.png"]
         },
         {
            id:'Symbol_12',
            type:'rect',
            rect:[-253,345,0,0]
         },
         {
            id:'Symbol_4',
            type:'rect',
            rect:[389,368,0,0]
         },
         {
            id:'text_symbol',
            type:'rect',
            rect:[227,419,0,0]
         },
         {
            id:'smoke',
            type:'image',
            rect:[331,356,300,249],
            fill:["rgba(0,0,0,0)",im+"smoke.png"],
            transform:[[-100,-226]]
         },
         {
            id:'touch1',
            type:'image',
            rect:[135,218,628,317],
            opacity:0.79870132269797,
            fill:["rgba(0,0,0,0)",im+"touch1.gif"],
            transform:[[-279,-230],[],[],[0.4,0.4]]
         }],
         symbolInstances: [
         {
            id:'Symbol_12',
            symbolName:'Symbol_1'
         },
         {
            id:'text_symbol',
            symbolName:'text_symbol'
         },
         {
            id:'Symbol_4',
            symbolName:'Symbol_4'
         }
         ]
      },
   states: {
      "Base State": {
         "${_01-wheel}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '960px'],
            ["style", "width", '640px']
         ],
         "${_wheelstill2}": [
            ["transform", "translateX", '-51.74px'],
            ["transform", "translateY", '-104.42px']
         ],
         "${_wheelout2}": [
            ["transform", "translateX", '-91.32px'],
            ["transform", "rotateZ", '36000deg'],
            ["transform", "scaleX", '1'],
            ["transform", "translateY", '-132.52px'],
            ["transform", "scaleY", '1']
         ],
         "${_touch1}": [
            ["transform", "translateX", '-279.02px'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0.79870132269797'],
            ["transform", "translateY", '-230.61px'],
            ["transform", "scaleY", '0.4']
         ],
         "${_Stage}": [
            ["style", "height", '960px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '640px']
         ],
         "${__00_back_zenan2}": [
            ["transform", "scaleX", '1.04156'],
            ["transform", "scaleY", '1.04541'],
            ["transform", "translateY", '-270.34px'],
            ["transform", "translateX", '-374.44px']
         ],
         "${_smoke}": [
            ["style", "opacity", '1'],
            ["transform", "translateY", '-226.82px'],
            ["transform", "translateX", '-100.78px']
         ],
         "${_Symbol_12}": [
            ["transform", "translateX", '-31.94px'],
            ["transform", "translateY", '12.5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1125,
         autoPlay: true,
         timeline: [
            { id: "eid562", tween: [ "transform", "${_wheelstill2}", "translateY", '-104.42px', { fromValue: '-104.42px'}], position: 1125, duration: 0 },
            { id: "eid551", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 19, duration: 0 },
            { id: "eid574", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 38, duration: 0 },
            { id: "eid579", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 58, duration: 0 },
            { id: "eid611", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 75, duration: 0 },
            { id: "eid584", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 77, duration: 0 },
            { id: "eid612", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 94, duration: 0 },
            { id: "eid589", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 97, duration: 0 },
            { id: "eid613", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 114, duration: 0 },
            { id: "eid594", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 116, duration: 0 },
            { id: "eid614", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 133, duration: 0 },
            { id: "eid599", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 135, duration: 0 },
            { id: "eid615", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 153, duration: 0 },
            { id: "eid604", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 155, duration: 0 },
            { id: "eid616", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 172, duration: 0 },
            { id: "eid617", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 192, duration: 0 },
            { id: "eid618", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 211, duration: 0 },
            { id: "eid654", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 250, duration: 0 },
            { id: "eid655", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 269, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 289, duration: 0 },
            { id: "eid657", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 308, duration: 0 },
            { id: "eid658", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 327, duration: 0 },
            { id: "eid659", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 347, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 366, duration: 0 },
            { id: "eid661", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 386, duration: 0 },
            { id: "eid697", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 424, duration: 0 },
            { id: "eid609", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 435, duration: 0 },
            { id: "eid698", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 444, duration: 0 },
            { id: "eid699", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 463, duration: 0 },
            { id: "eid700", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 483, duration: 0 },
            { id: "eid701", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 502, duration: 0 },
            { id: "eid702", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 521, duration: 0 },
            { id: "eid703", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 541, duration: 0 },
            { id: "eid704", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 560, duration: 0 },
            { id: "eid740", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 599, duration: 0 },
            { id: "eid741", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 619, duration: 0 },
            { id: "eid742", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 638, duration: 0 },
            { id: "eid743", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 657, duration: 0 },
            { id: "eid744", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 677, duration: 0 },
            { id: "eid745", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 696, duration: 0 },
            { id: "eid746", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 716, duration: 0 },
            { id: "eid747", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 735, duration: 0 },
            { id: "eid783", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 774, duration: 0 },
            { id: "eid784", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 793, duration: 0 },
            { id: "eid785", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 813, duration: 0 },
            { id: "eid786", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 832, duration: 0 },
            { id: "eid787", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 851, duration: 0 },
            { id: "eid788", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 871, duration: 0 },
            { id: "eid789", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 890, duration: 0 },
            { id: "eid790", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 910, duration: 0 },
            { id: "eid826", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 948, duration: 0 },
            { id: "eid827", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 968, duration: 0 },
            { id: "eid828", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 987, duration: 0 },
            { id: "eid829", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 1007, duration: 0 },
            { id: "eid830", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 1026, duration: 0 },
            { id: "eid831", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 1046, duration: 0 },
            { id: "eid832", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 1065, duration: 0 },
            { id: "eid833", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 1084, duration: 0 },
            { id: "eid869", tween: [ "transform", "${_wheelout2}", "translateX", '-91.32px', { fromValue: '-91.32px'}], position: 1123, duration: 0 },
            { id: "eid69", tween: [ "transform", "${_Symbol_12}", "translateX", '-31.94px', { fromValue: '-31.94px'}], position: 878, duration: 0 },
            { id: "eid561", tween: [ "transform", "${_wheelstill2}", "translateX", '-51.74px', { fromValue: '-51.74px'}], position: 1125, duration: 0 },
            { id: "eid564", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 0, duration: 19 },
            { id: "eid571", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 19, duration: 19 },
            { id: "eid576", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 38, duration: 17 },
            { id: "eid643", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 56, duration: 19 },
            { id: "eid644", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 75, duration: 19 },
            { id: "eid645", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 94, duration: 19 },
            { id: "eid591", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 114, duration: 9 },
            { id: "eid646", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 114, duration: 19 },
            { id: "eid596", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 133, duration: 2 },
            { id: "eid647", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 133, duration: 19 },
            { id: "eid648", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 153, duration: 19 },
            { id: "eid606", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 172, duration: 1 },
            { id: "eid649", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 172, duration: 19 },
            { id: "eid650", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 192, duration: 19 },
            { id: "eid651", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 211, duration: 19 },
            { id: "eid686", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 230, duration: 19 },
            { id: "eid687", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 250, duration: 19 },
            { id: "eid688", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 269, duration: 19 },
            { id: "eid689", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 289, duration: 19 },
            { id: "eid690", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 308, duration: 19 },
            { id: "eid691", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 327, duration: 19 },
            { id: "eid692", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 347, duration: 19 },
            { id: "eid693", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 366, duration: 19 },
            { id: "eid694", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 386, duration: 19 },
            { id: "eid729", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 405, duration: 19 },
            { id: "eid730", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 424, duration: 19 },
            { id: "eid731", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 444, duration: 19 },
            { id: "eid732", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 463, duration: 19 },
            { id: "eid733", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 483, duration: 19 },
            { id: "eid734", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 502, duration: 19 },
            { id: "eid735", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 521, duration: 19 },
            { id: "eid736", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 541, duration: 19 },
            { id: "eid737", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 560, duration: 19 },
            { id: "eid772", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 580, duration: 19 },
            { id: "eid773", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 599, duration: 19 },
            { id: "eid774", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 619, duration: 19 },
            { id: "eid775", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 638, duration: 19 },
            { id: "eid776", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 657, duration: 19 },
            { id: "eid777", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 677, duration: 19 },
            { id: "eid778", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 696, duration: 19 },
            { id: "eid779", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 716, duration: 19 },
            { id: "eid780", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 735, duration: 19 },
            { id: "eid815", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 754, duration: 19 },
            { id: "eid816", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 774, duration: 19 },
            { id: "eid817", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 793, duration: 19 },
            { id: "eid818", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 813, duration: 19 },
            { id: "eid819", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 832, duration: 19 },
            { id: "eid820", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 851, duration: 19 },
            { id: "eid821", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 871, duration: 19 },
            { id: "eid822", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 890, duration: 19 },
            { id: "eid823", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 910, duration: 19 },
            { id: "eid858", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 929, duration: 19 },
            { id: "eid859", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 948, duration: 19 },
            { id: "eid860", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 968, duration: 19 },
            { id: "eid861", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 987, duration: 19 },
            { id: "eid862", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 1007, duration: 19 },
            { id: "eid863", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 1026, duration: 19 },
            { id: "eid864", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 1046, duration: 19 },
            { id: "eid865", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 1065, duration: 19 },
            { id: "eid866", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 1084, duration: 19 },
            { id: "eid901", tween: [ "transform", "${_wheelout2}", "rotateZ", '0deg', { fromValue: '36000deg'}], position: 1104, duration: 19 },
            { id: "eid568", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid572", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 19, duration: 0 },
            { id: "eid577", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 38, duration: 0 },
            { id: "eid652", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 56, duration: 0 },
            { id: "eid582", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 58, duration: 0 },
            { id: "eid627", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 75, duration: 0 },
            { id: "eid587", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 77, duration: 0 },
            { id: "eid628", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 94, duration: 0 },
            { id: "eid592", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 97, duration: 0 },
            { id: "eid629", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 114, duration: 0 },
            { id: "eid597", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 116, duration: 0 },
            { id: "eid630", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 133, duration: 0 },
            { id: "eid602", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 135, duration: 0 },
            { id: "eid631", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 153, duration: 0 },
            { id: "eid607", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 155, duration: 0 },
            { id: "eid632", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 172, duration: 0 },
            { id: "eid633", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 192, duration: 0 },
            { id: "eid634", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 211, duration: 0 },
            { id: "eid695", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 230, duration: 0 },
            { id: "eid670", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
            { id: "eid671", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 269, duration: 0 },
            { id: "eid672", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 289, duration: 0 },
            { id: "eid673", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 308, duration: 0 },
            { id: "eid674", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 327, duration: 0 },
            { id: "eid675", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 347, duration: 0 },
            { id: "eid676", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 366, duration: 0 },
            { id: "eid677", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 386, duration: 0 },
            { id: "eid738", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 405, duration: 0 },
            { id: "eid713", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 424, duration: 0 },
            { id: "eid714", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 444, duration: 0 },
            { id: "eid715", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 463, duration: 0 },
            { id: "eid716", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 483, duration: 0 },
            { id: "eid717", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 502, duration: 0 },
            { id: "eid718", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 521, duration: 0 },
            { id: "eid719", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 541, duration: 0 },
            { id: "eid720", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 560, duration: 0 },
            { id: "eid781", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 580, duration: 0 },
            { id: "eid756", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 599, duration: 0 },
            { id: "eid757", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 619, duration: 0 },
            { id: "eid758", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 638, duration: 0 },
            { id: "eid759", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 657, duration: 0 },
            { id: "eid760", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 677, duration: 0 },
            { id: "eid761", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 696, duration: 0 },
            { id: "eid762", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 716, duration: 0 },
            { id: "eid763", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 735, duration: 0 },
            { id: "eid824", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 754, duration: 0 },
            { id: "eid799", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 774, duration: 0 },
            { id: "eid800", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 793, duration: 0 },
            { id: "eid801", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 813, duration: 0 },
            { id: "eid802", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 832, duration: 0 },
            { id: "eid803", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 851, duration: 0 },
            { id: "eid804", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 871, duration: 0 },
            { id: "eid805", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 890, duration: 0 },
            { id: "eid806", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 910, duration: 0 },
            { id: "eid867", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 929, duration: 0 },
            { id: "eid842", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 948, duration: 0 },
            { id: "eid843", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 968, duration: 0 },
            { id: "eid844", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 987, duration: 0 },
            { id: "eid845", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 1007, duration: 0 },
            { id: "eid846", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 1026, duration: 0 },
            { id: "eid847", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 1046, duration: 0 },
            { id: "eid848", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 1065, duration: 0 },
            { id: "eid849", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 1084, duration: 0 },
            { id: "eid910", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 1104, duration: 0 },
            { id: "eid885", tween: [ "transform", "${_wheelout2}", "scaleX", '1', { fromValue: '1'}], position: 1123, duration: 0 },
            { id: "eid552", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 19, duration: 0 },
            { id: "eid575", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 38, duration: 0 },
            { id: "eid580", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 58, duration: 0 },
            { id: "eid619", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 75, duration: 0 },
            { id: "eid585", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 77, duration: 0 },
            { id: "eid620", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 94, duration: 0 },
            { id: "eid590", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 97, duration: 0 },
            { id: "eid621", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 114, duration: 0 },
            { id: "eid595", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 116, duration: 0 },
            { id: "eid622", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 133, duration: 0 },
            { id: "eid600", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 135, duration: 0 },
            { id: "eid623", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 153, duration: 0 },
            { id: "eid605", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 155, duration: 0 },
            { id: "eid624", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 172, duration: 0 },
            { id: "eid625", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 192, duration: 0 },
            { id: "eid626", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 211, duration: 0 },
            { id: "eid662", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 250, duration: 0 },
            { id: "eid663", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 269, duration: 0 },
            { id: "eid664", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 289, duration: 0 },
            { id: "eid665", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 308, duration: 0 },
            { id: "eid666", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 327, duration: 0 },
            { id: "eid667", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 347, duration: 0 },
            { id: "eid668", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 366, duration: 0 },
            { id: "eid669", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 386, duration: 0 },
            { id: "eid705", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 424, duration: 0 },
            { id: "eid610", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 435, duration: 0 },
            { id: "eid706", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 444, duration: 0 },
            { id: "eid707", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 463, duration: 0 },
            { id: "eid708", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 483, duration: 0 },
            { id: "eid709", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 502, duration: 0 },
            { id: "eid710", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 521, duration: 0 },
            { id: "eid711", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 541, duration: 0 },
            { id: "eid712", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 560, duration: 0 },
            { id: "eid748", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 599, duration: 0 },
            { id: "eid749", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 619, duration: 0 },
            { id: "eid750", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 638, duration: 0 },
            { id: "eid751", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 657, duration: 0 },
            { id: "eid752", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 677, duration: 0 },
            { id: "eid753", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 696, duration: 0 },
            { id: "eid754", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 716, duration: 0 },
            { id: "eid755", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 735, duration: 0 },
            { id: "eid791", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 774, duration: 0 },
            { id: "eid792", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 793, duration: 0 },
            { id: "eid793", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 813, duration: 0 },
            { id: "eid794", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 832, duration: 0 },
            { id: "eid795", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 851, duration: 0 },
            { id: "eid796", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 871, duration: 0 },
            { id: "eid797", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 890, duration: 0 },
            { id: "eid798", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 910, duration: 0 },
            { id: "eid834", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 948, duration: 0 },
            { id: "eid835", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 968, duration: 0 },
            { id: "eid836", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 987, duration: 0 },
            { id: "eid837", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 1007, duration: 0 },
            { id: "eid838", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 1026, duration: 0 },
            { id: "eid839", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 1046, duration: 0 },
            { id: "eid840", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 1065, duration: 0 },
            { id: "eid841", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 1084, duration: 0 },
            { id: "eid877", tween: [ "transform", "${_wheelout2}", "translateY", '-132.52px', { fromValue: '-132.52px'}], position: 1123, duration: 0 },
            { id: "eid511", tween: [ "style", "${_smoke}", "opacity", '0.58219178082192', { fromValue: '1'}], position: 0, duration: 500 },
            { id: "eid512", tween: [ "style", "${_smoke}", "opacity", '0.85616438356164', { fromValue: '0.582192'}], position: 500, duration: 625 },
            { id: "eid570", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid573", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 19, duration: 0 },
            { id: "eid578", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 38, duration: 0 },
            { id: "eid653", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 56, duration: 0 },
            { id: "eid583", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 58, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 75, duration: 0 },
            { id: "eid588", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 77, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 94, duration: 0 },
            { id: "eid593", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 97, duration: 0 },
            { id: "eid637", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 114, duration: 0 },
            { id: "eid598", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 116, duration: 0 },
            { id: "eid638", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 133, duration: 0 },
            { id: "eid603", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 135, duration: 0 },
            { id: "eid639", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 153, duration: 0 },
            { id: "eid608", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 155, duration: 0 },
            { id: "eid640", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 172, duration: 0 },
            { id: "eid641", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 192, duration: 0 },
            { id: "eid642", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 211, duration: 0 },
            { id: "eid696", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 230, duration: 0 },
            { id: "eid678", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 250, duration: 0 },
            { id: "eid679", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 269, duration: 0 },
            { id: "eid680", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 289, duration: 0 },
            { id: "eid681", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 308, duration: 0 },
            { id: "eid682", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 327, duration: 0 },
            { id: "eid683", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 347, duration: 0 },
            { id: "eid684", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 366, duration: 0 },
            { id: "eid685", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 386, duration: 0 },
            { id: "eid739", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 405, duration: 0 },
            { id: "eid721", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 424, duration: 0 },
            { id: "eid722", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 444, duration: 0 },
            { id: "eid723", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 463, duration: 0 },
            { id: "eid724", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 483, duration: 0 },
            { id: "eid725", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 502, duration: 0 },
            { id: "eid726", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 521, duration: 0 },
            { id: "eid727", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 541, duration: 0 },
            { id: "eid728", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 560, duration: 0 },
            { id: "eid782", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 580, duration: 0 },
            { id: "eid764", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 599, duration: 0 },
            { id: "eid765", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 619, duration: 0 },
            { id: "eid766", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 638, duration: 0 },
            { id: "eid767", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 657, duration: 0 },
            { id: "eid768", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 677, duration: 0 },
            { id: "eid769", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 696, duration: 0 },
            { id: "eid770", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 716, duration: 0 },
            { id: "eid771", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 735, duration: 0 },
            { id: "eid825", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 754, duration: 0 },
            { id: "eid807", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 774, duration: 0 },
            { id: "eid808", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 793, duration: 0 },
            { id: "eid809", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 813, duration: 0 },
            { id: "eid810", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 832, duration: 0 },
            { id: "eid811", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 851, duration: 0 },
            { id: "eid812", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 871, duration: 0 },
            { id: "eid813", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 890, duration: 0 },
            { id: "eid814", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 910, duration: 0 },
            { id: "eid868", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 929, duration: 0 },
            { id: "eid850", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 948, duration: 0 },
            { id: "eid851", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 968, duration: 0 },
            { id: "eid852", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 987, duration: 0 },
            { id: "eid853", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 1007, duration: 0 },
            { id: "eid854", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 1026, duration: 0 },
            { id: "eid855", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 1046, duration: 0 },
            { id: "eid856", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 1065, duration: 0 },
            { id: "eid857", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 1084, duration: 0 },
            { id: "eid911", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 1104, duration: 0 },
            { id: "eid893", tween: [ "transform", "${_wheelout2}", "scaleY", '1', { fromValue: '1'}], position: 1123, duration: 0 },
            { id: "eid70", tween: [ "transform", "${_Symbol_12}", "translateY", '12.5px', { fromValue: '12.5px'}], position: 878, duration: 0 }         ]
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
      transform: [[0,64]],
      id: '_00_front_zenan1',
      type: 'image',
      rect: [253,-345,253,336],
      fill: ['rgba(0,0,0,0)','images/00_front_zenan1.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__00_front_zenan1}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-253px'],
            ["transform", "translateY", '346px'],
            ["transform", "rotateZ", '-0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '336px'],
            ["style", "width", '252px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 627,
         autoPlay: true,
         timeline: [
            { id: "eid33", tween: [ "transform", "${__00_front_zenan1}", "translateY", '332px', { fromValue: '346px'}], position: 127, duration: 500 },
            { id: "eid24", tween: [ "transform", "${__00_front_zenan1}", "translateX", '111.8px', { fromValue: '-253px'}], position: 127, duration: 500 }         ]
      }
   }
},
"Symbol_2": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-11,301],{},{},[1.037]],
      id: '_00_back_zenan2',
      type: 'image',
      rect: [24,-300,640,398],
      fill: ['rgba(0,0,0,0)','images/00_back_zenan2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '398px'],
            ["style", "width", '664.032px']
         ],
         "${__00_back_zenan2}": [
            ["transform", "translateX", '-11.99px'],
            ["transform", "rotateZ", '-0deg'],
            ["transform", "scaleX", '1.03755'],
            ["style", "height", '398px'],
            ["transform", "translateY", '301px'],
            ["style", "width", '640px']
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
"Symbol_3": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[148,23]],
      id: '_00_text_zenan',
      type: 'image',
      rect: [-268,-368,127,79],
      fill: ['rgba(0,0,0,0)','images/00_text_zenan.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__00_text_zenan}": [
            ["transform", "translateX", '274.21px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '1.096'],
            ["transform", "translateY", '330.59px'],
            ["transform", "scaleY", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '138.096px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 877,
         autoPlay: true,
         timeline: [
            { id: "eid53", tween: [ "transform", "${__00_text_zenan}", "scaleX", '1.096', { fromValue: '1.096'}], position: 877, duration: 0 },
            { id: "eid29", tween: [ "transform", "${__00_text_zenan}", "rotateZ", '0', { fromValue: '0deg'}], position: 627, duration: 0 },
            { id: "eid52", tween: [ "transform", "${__00_text_zenan}", "translateY", '330.59px', { fromValue: '330.59px'}], position: 877, duration: 0 },
            { id: "eid31", tween: [ "transform", "${__00_text_zenan}", "scaleY", '1.40394', { fromValue: '0'}], position: 627, duration: 250 },
            { id: "eid54", tween: [ "transform", "${__00_text_zenan}", "translateX", '274.21px', { fromValue: '274.21px'}], position: 877, duration: 0 }         ]
      }
   }
},
"Symbol_4": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[389,368]],
      id: '_00_front_zenan2',
      type: 'image',
      rect: [-389,-368,161,337],
      fill: ['rgba(0,0,0,0)','images/00_front_zenan2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__00_front_zenan2}": [
            ["transform", "translateX", '389px'],
            ["transform", "translateY", '368.45px']
         ],
         "${symbolSelector}": [
            ["style", "height", '336px'],
            ["style", "width", '160px']
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
"text_symbol": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: '_00_text_zenan2',
      rect: [65,-7,180,111],
      transform: [[-61,-99],[0,0],[0],[1,1]],
      fill: ['rgba(0,0,0,0)','images/00_text_zenan2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '2.10915px'],
            ["style", "width", '0.49940999999998px']
         ],
         "${__00_text_zenan2}": [
            ["transform", "scaleX", '0.00279'],
            ["transform", "scaleY", '0.01935'],
            ["transform", "translateY", '-44.71px'],
            ["transform", "translateX", '-151.19px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 720.32469602157,
         autoPlay: true,
         timeline: [
            { id: "eid542", tween: [ "transform", "${__00_text_zenan2}", "scaleX", '1', { fromValue: '0.00279'}], position: 406, duration: 314 },
            { id: "eid544", tween: [ "transform", "${__00_text_zenan2}", "scaleY", '1', { fromValue: '0.01935'}], position: 406, duration: 314 },
            { id: "eid538", tween: [ "transform", "${__00_text_zenan2}", "translateX", '-61.36px', { fromValue: '-151.19px'}], position: 406, duration: 314 },
            { id: "eid540", tween: [ "transform", "${__00_text_zenan2}", "translateY", '-99.92px', { fromValue: '-44.71px'}], position: 406, duration: 314 }         ]
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
})(jQuery, AdobeEdge, "EDGE-44552977");
