(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"1b83":function(t,e,n){"use strict";n.r(e);var a=n("584b"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},"26c0":function(t,e,n){"use strict";n.r(e);var a=n("eca8"),i=n("1b83");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("c8f8");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"584b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,a,i,c,o){try{var r=t[c](o),u=r.value}catch(s){return void n(s)}r.done?e(u):Promise.resolve(u).then(a,i)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var o=t.apply(e,n);function r(t){c(o,a,i,r,u,"next",t)}function u(t){c(o,a,i,r,u,"throw",t)}r(void 0)})}}var r=n("f64a"),u=n("7c2b"),s={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flistone:[],flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=o(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,u.request(r.goodsCategoryList,{}).then(function(t){console.log(t," at pages\\category\\category.vue:45"),e.flist=t.data.data,e.slist=e.flist[0].list});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),tabtap:function(t){console.log(t," at pages\\category\\category.vue:65"),this.sizeCalcState||this.calcSize(),this.slist=t.list,this.currentId=t.id},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,n=this.slist.filter(function(t){return t.top<=e}).reverse();n.length>0&&(this.currentId=n[0].pid)},calcSize:function(){var e=0;this.slist.forEach(function(n){var a=t.createSelectorQuery().select("#main-"+n.id);a.fields({size:!0},function(t){n.top=e,e+=t.height,n.bottom=e}).exec()}),this.sizeCalcState=!0},navToList:function(e,n){t.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(e,"&id=").concat(n)})}}};e.default=s}).call(this,n("6e42")["default"])},b5c7:function(t,e,n){},c8f8:function(t,e,n){"use strict";var a=n("b5c7"),i=n.n(a);i.a},eca8:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["91cd","common/runtime","common/vendor"]]]);