(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Details/Details"],{"1e23":function(t,n,e){"use strict";e.r(n);var o=e("b98d"),a=e("afc2");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("55a7");var r=e("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},"37a5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r={data:function(){return{}},methods:a({},(0,o.mapMutations)(["logout"]),{navTo:function(n){this.hasLogin,t.navigateTo({url:n})},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=r}).call(this,e("6e42")["default"])},"55a7":function(t,n,e){"use strict";var o=e("af59"),a=e.n(o);a.a},af59:function(t,n,e){},afc2:function(t,n,e){"use strict";e.r(n);var o=e("37a5"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},b98d:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})}},[["e96e","common/runtime","common/vendor"]]]);