webpackJsonp([5],{38:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5);o(i);t["default"]={ready:function(){var e=this;e.menus=[{id:1,name:"分享创造1.1"},{id:2,name:"分享创造1.2"},{id:3,name:"分享创造1.3"}],console.log("----- enter infolist ready -----")},data:function(){return{menus:[],queryData:{}}},methods:{onClickMenuItem:function(e){var t=this;t.$router.go({path:"/info/infoDetail",query:$.extend(!0,{},t.queryData,{id:e})})}}}},74:function(e,t){e.exports=' <section> <title>分享创造</title> <div v-for="item in menus" @click=onClickMenuItem(item.id)>{{item.name}}</div> </section> '},82:function(e,t,n){var o,i;o=n(38),i=n(74),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},98:function(e,t,n){function o(e){return n(i(e))}function i(e){return r[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var r={"./views/info/infoList.vue":82};o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=98}});