(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhuangbei/zhuangbei"],{1019:function(t,e,n){"use strict";n.r(e);var a=n("32ef"),o=n("e98e");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("88da");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"32ef":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"88da":function(t,e,n){"use strict";var a=n("980c"),o=n.n(a);o.a},"980c":function(t,e,n){},ad30:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(n("f1ba"));function a(t){return t&&t.__esModule?t:{default:t}}var o=n("f64a"),u=n("7c2b"),i=0,r=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"b83a"))},s=function(){return n.e("components/empty").then(n.bind(null,"e878"))},d={components:{uniLoadMore:r,empty:s},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"装备列表",loadingType:"more",orderList:[]},{state:1,text:"我的准备",loadingType:"more",orderList:[]},{state:2,text:"过期装备",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,this.mylist()},methods:{mylist:function(){var e=this;u.request(o.getequipment,{data:t.getStorageSync("userId"),token:t.getStorageSync("token")}).then(function(t){console.log("装备列表",t," at pages\\zhuangbei\\zhuangbei.vue:104"),e.navList[0].orderList=t.data.data,console.log("装备列表",e.navList[0].orderList," at pages\\zhuangbei\\zhuangbei.vue:106")})},myZhuangbei:function(){var e=this;u.request(o.getuserequipment,{data:t.getStorageSync("userId"),token:t.getStorageSync("token")}).then(function(t){console.log(t," at pages\\zhuangbei\\zhuangbei.vue:114"),e.navList[1].orderList=t.data.data})},overdue:function(){var e=this;i++,u.request(o.getuseroverequipment,{page:i,data:t.getStorageSync("userId"),token:t.getStorageSync("token")}).then(function(t){console.log(t," at pages\\zhuangbei\\zhuangbei.vue:124"),e.navList[2].orderList=t.data.data})},loadData:function(t){var e=this.tabCurrentIndex,n=this.navList[e];n.state;console.log("触底2",n," at pages\\zhuangbei\\zhuangbei.vue:134"),this.overdue(),console.log("触底",e," at pages\\zhuangbei\\zhuangbei.vue:136")},changeTab:function(t){i=0,this.tabCurrentIndex=t.target.current,0==this.tabCurrentIndex?this.mylist():1==this.tabCurrentIndex?this.myZhuangbei():2==this.tabCurrentIndex&&this.overdue(),this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t}}};e.default=d}).call(this,n("6e42")["default"])},e98e:function(t,e,n){"use strict";n.r(e);var a=n("ad30"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a}},[["2ab9","common/runtime","common/vendor"]]]);