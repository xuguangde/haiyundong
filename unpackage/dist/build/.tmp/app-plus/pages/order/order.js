(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"42dc":function(t,e,n){"use strict";n.r(e);var a=n("f575"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},"5d2f":function(t,e,n){"use strict";var a=n("6e8e"),r=n.n(a);r.a},"6e8e":function(t,e,n){},a78a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},bc40:function(t,e,n){"use strict";n.r(e);var a=n("a78a"),r=n("42dc");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("5d2f");var i=n("2877"),d=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},f575:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("7199"));function r(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"32ad"))},i=function(){return n.e("components/empty").then(n.bind(null,"2a85"))},d={components:{uniLoadMore:o,empty:i},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待发货",loadingType:"more",orderList:[]},{state:3,text:"待收货",loadingType:"more",orderList:[]},{state:4,text:"已完成",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,this.loadData()},methods:{loadData:function(t){var e=this,n=this.tabCurrentIndex,r=this.navList[n],o=r.state;"tabChange"===t&&!0===r.loaded||"loading"!==r.loadingType&&(r.loadingType="loading",setTimeout(function(){var t=a.default.orderList.filter(function(t){return t=Object.assign(t,e.orderStateExp(t.state)),0===o?t:t.state===o});t.forEach(function(t){r.orderList.push(t)}),e.$set(r,"loaded",!0),r.loadingType="more"},600))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},deleteOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout(function(){n.navList[n.tabCurrentIndex].orderList.splice(e,1),t.hideLoading()},600)},cancelOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout(function(){var a=n.orderStateExp(9),r=a.stateTip,o=a.stateTipColor;e=Object.assign(e,{state:9,stateTip:r,stateTipColor:o});var i=n.navList[1].orderList,d=i.findIndex(function(t){return t.id===e.id});-1!==d&&i.splice(d,1),t.hideLoading()},600)},orderStateExp:function(t){var e="",n="#4fbeed";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",n="#909399";break}return{stateTip:e,stateTipColor:n}}}};e.default=d}).call(this,n("6e42")["default"])}},[["a589","common/runtime","common/vendor"]]]);