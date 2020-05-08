(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c19d0e53"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-otc-app/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1355:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"bem",rawName:"v-bem:app",arg:"app"}]},[n("h1",[e._v(e._s(e.msg))]),n("div",{directives:[{name:"bem",rawName:"v-bem:network-status",value:e.showDetectNetwork?"show":"hide",expression:"showDetectNetwork ? 'show' : 'hide'",arg:"network-status"}]},[e.isOnline?n("div",{directives:[{name:"bem",rawName:"v-bem:online",arg:"online"}]},[n("span",{domProps:{textContent:e._s(e.$t("g_network_reachable"))}})]):e._e(),e.isOnline?e._e():n("div",{directives:[{name:"bem",rawName:"v-bem:offline",arg:"offline"}]},[n("span",{domProps:{textContent:e._s(e.$t("g_network_unreachable"))}})])])])},p=[],v={name:"HelloWorld",props:{msg:String},data:function(){return{showDetectNetwork:!1,isOnline:!0}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("online",e.handleOnline,!0),window.addEventListener("offline",e.handleOffline,!0)}))},methods:{handleOnline:function(){var e=this;this.isOnline=!0,window.setTimeout((function(){e.showDetectNetwork=!1}),3e3)},handleOffline:function(){this.isOnline=!1,this.showDetectNetwork=!0},destroyed:function(){window.removeEventListener("online",this.handleOnline,!0),window.removeEventListener("offline",this.handleOffline,!0)}}},h=v,b=(n("7d5b"),Object(i["a"])(h,m,p,!1,null,null,null)),w=b.exports,g={name:"Home",components:{HelloWorld:w}},_=g,O=Object(i["a"])(_,d,f,!1,null,null,null),k=O.exports;r["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],j=new l["a"]({mode:"history",base:"/vue-otc-app/",routes:y}),N=j,x=n("2f62");r["a"].use(x["a"]);var E=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=(n("99af"),n("4de4"),n("c975"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("498a"),"ez-root"),T="data-ez-root",S="data-bem-id",$="__",A="--",C="|",H=" ",L="";function W(e){e.directive("bem",{bind:function(t,n,r){var o=document.createAttribute(S);o.value=n.arg||t.localName,t.attributes.setNamedItem(o),n.modifiers&&n.modifiers.root&&t.attributes.setNamedItem(document.createAttribute(T)),e.nextTick((function(){D(t,n,r)}))},update:function(e,t,n){D(e,t,n)}})}function D(e,t,n){var r=z(n.elm),o=t.value&&t.value.split(C)||[],a=I(r,o),i=(e.className.split(H)||[]).filter((function(e){return e.indexOf(P)<0})).join(H);e.className=[a,H,i].join(L).trim()}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e&&e.attributes.getNamedItem(S);return n&&n.value?e.attributes.getNamedItem(T)?(t.unshift([P,n.value].join($)),t):(t.unshift(n.value),z(e.parentElement,t)):(t.unshift(P),t)}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.join($),r=[n];return r=r.concat(t.map((function(e){return[n,e].join(A)}))),r.join(H)}var M=n("a925"),J={g_network_reachable:"Reconnected to internet",g_network_unreachable:"No internet connection"},U={g_network_reachable:"已重新连上网路",g_network_unreachable:"没有网路连线"},q={g_network_reachable:"已重新連上網路",g_network_unreachable:"沒有網路連線"};r["a"].use(M["a"]);var R=new M["a"]({locale:"en-US",messages:{"en-US":J,"zh-CN":U,"zh-TW":q},sync:!1,silentTranslationWarn:-1!=="production".indexOf("production")}),V=R;r["a"].config.productionTip=!1,r["a"].use(W),new r["a"]({router:N,store:E,i18n:V,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"7d5b":function(e,t,n){"use strict";var r=n("1355"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.7c2447f3.js.map