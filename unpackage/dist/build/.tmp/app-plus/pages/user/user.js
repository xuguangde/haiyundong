(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"285b":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})},"2b2a":function(e,n,t){},"374d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("2f62");function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){a(e,n,t[n])})}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=t("f64a"),u=t("7c2b"),c=function(){return t.e("components/mix-list-cell").then(t.bind(null,"f3c8"))},s=0,f=0,l=!0,v={components:{listCell:c},data:function(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,userInfoone:[{head_pic:""},{nickname:""}]}},onLoad:function(){var n=this;console.log(e.getStorage("token")," at pages\\user\\user.vue:153"),u.request(i.userInfo,{token:e.getStorageSync("token"),user_id:e.getStorageSync("userId")}).then(function(e){1==e.data.retcode&&(n.userInfoone=e.data.data)})},onNavigationBarButtonTap:function(n){var t=n.index;if(0===t)e.navigateTo({url:"/pages/set/set"});else if(1===t){var o=getCurrentPages(),r=o[o.length-1],a=r.$getAppWebview();a.hideTitleNViewButtonRedDot({index:t}),e.navigateTo({url:"/pages/notice/notice"})}},computed:r({},(0,o.mapState)(["hasLogin","userInfo"])),methods:{navTo:function(n){e.navigateTo({url:n})},coverTouchstart:function(e){!1!==l&&(this.coverTransition="transform .1s linear",s=e.touches[0].clientY)},coverTouchmove:function(e){f=e.touches[0].clientY;var n=f-s;n<0?this.moving=!1:(this.moving=!0,n>=80&&n<100&&(n=80),n>0&&n<=80&&(this.coverTransform="translateY(".concat(n,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}}};n.default=v}).call(this,t("6e42")["default"])},"6dc9":function(e,n,t){"use strict";t.r(n);var o=t("285b"),r=t("a71e");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("8440");var i=t("2877"),u=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},8440:function(e,n,t){"use strict";var o=t("2b2a"),r=t.n(o);r.a},a71e:function(e,n,t){"use strict";t.r(n);var o=t("374d"),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=r.a}},[["f92f","common/runtime","common/vendor"]]]);