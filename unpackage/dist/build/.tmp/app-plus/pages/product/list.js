(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"324b":function(t,e,n){"use strict";var o=n("eddb"),i=n.n(o);i.a},"9ae7":function(t,e,n){"use strict";n.r(e);var o=n("febe"),i=n("baf7");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("324b");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},baf7:function(t,e,n){"use strict";n.r(e);var o=n("f02d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},eddb:function(t,e,n){},f02d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,i,a,r){try{var s=t[a](r),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(o,i)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function s(t){a(r,o,i,s,u,"next",t)}function u(t){a(r,o,i,s,u,"throw",t)}s(void 0)})}}var s=n("44c8"),u=n("e1e7"),c=0,d=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"32ad"))},l={components:{uniLoadMore:d},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[]}},onLoad:function(t){this.cateId=t.id,this.loadCateList(t.fid,t.id),this.getList(t.id)},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.getList()},methods:{getList:function(t){var e=this;c++;var n=this;u.request(s.goodsList,{page:c,limit:10,id:t}).then(function(t){console.log(t," at pages\\product\\list.vue:95"),1==t.data.retcode?(n.goodsList=n.goodsList.concat(t.data.data),e.reload=!1,e.loadingType="loading"):e.loadingType="kong"})},loadCateList:function(){var t=r(o.default.mark(function t(e,n){var i,a;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:i=t.sent,a=i.filter(function(t){return t.pid==e}),a.forEach(function(t){var e=i.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=a;case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),tabClick:function(e){this.filterIndex===e&&2!==e||(this.filterIndex=e,this.priceOrder=2===e?1===this.priceOrder?2:1:0,t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,n="show"===t?10:300,o="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=o},n)},changeCate:function(e){this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},navToDetailPage:function(e){var n=e.title;t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};e.default=l}).call(this,n("6e42")["default"])},febe:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["efe9","common/runtime","common/vendor"]]]);