webpackJsonp([1],{43:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),n=o(i);t["default"]={ready:function(){var e=this;e.menus=[{name:"程序员1.1",type:3,resource_id:"developer_1",partner_id:"partner_2",user_id:"doctor_1",doctor_grade:"doctor_grade_1",promotion_id:"promotion_7"},{name:"程序员1.2",type:3,resource_id:"developer_2",partner_id:"partner_2",user_id:"doctor_1",doctor_grade:"doctor_grade_1",promotion_id:"promotion_8"},{name:"程序员1.3",type:3,resource_id:"developer_3",partner_id:"partner_2",user_id:"doctor_1",doctor_grade:"doctor_grade_1",promotion_id:"promotion_9"}],n["default"].ajax({url:"http://10.90.0.15/v2/api/menu/list",info:"获取菜单",result:n["default"].ajax.resultEnum.normal,data:{request_id:111},success:function(e){}})},data:function(){return{menus:[],queryData:{}}},methods:{onClickMenuItem:function(e,t,r,o,i,n){var d=this;d.$router.go({path:"/video/detail",query:$.extend(!0,{},d.queryData,{type:e,resource_id:t,partner_id:r,user_id:o,doctor_grade:i,promotion_id:n})})}}}},80:function(e,t){e.exports=' <section> <title>程序员</title> <div v-for="item in menus" @click="onClickMenuItem(item.type, item.resource_id, item.partner_id, item.user_id, item.doctor_grade, item.promotion_id)">{{item.name}}</div> </section> '},89:function(e,t,r){var o,i;o=r(43),i=r(80),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},106:function(e,t,r){function o(e){return r(i(e))}function i(e){return n[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var n={"./views/video/list.vue":89};o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=106}});