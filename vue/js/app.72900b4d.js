(function(e){function t(t){for(var a,i,o=t[0],u=t[1],s=t[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},i={app:0},c={app:0},r=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2ba174c6":"6801c179","chunk-2d0a40d9":"4a535a07","chunk-2d0b362e":"6fa4cd6a","chunk-2d0b6d1a":"a60791b5","chunk-2d0e4a6e":"c0e27b38","chunk-2d21082b":"1d148497","chunk-704ef72b":"d2f8be22","chunk-7fff75f7":"58458cca","chunk-8368b7fa":"d7b88c17"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-7fff75f7":1,"chunk-8368b7fa":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2ba174c6":"31d6cfe0","chunk-2d0a40d9":"31d6cfe0","chunk-2d0b362e":"31d6cfe0","chunk-2d0b6d1a":"31d6cfe0","chunk-2d0e4a6e":"31d6cfe0","chunk-2d21082b":"31d6cfe0","chunk-704ef72b":"31d6cfe0","chunk-7fff75f7":"b79edea5","chunk-8368b7fa":"eef5d4cc"}[e]+".css",c=u.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var s=r[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],f.parentNode.removeChild(f),n(r)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0863":function(e,t,n){},"45f5":function(e,t,n){},"45f7":function(e,t,n){"use strict";var a=n("0863"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),i=n("31bd"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={name:"btb-app"},u=o,s=(n("5c0b"),n("2877")),l=Object(s["a"])(u,c,r,!1,null,null,null),d=l.exports,f=(n("d3b7"),n("8c4f"));a["a"].use(f["a"]);var p=new f["a"]({mode:"hash",base:"/vue/",routes:[{path:"/",name:"root",component:function(){return n.e("chunk-7fff75f7").then(n.bind(null,"87fa"))},redirect:{name:"about"},children:[{path:"about",name:"about",component:function(){return n.e("chunk-8368b7fa").then(n.bind(null,"a769"))}},{path:"packages",name:"packages",component:function(){return n.e("chunk-2d0b362e").then(n.bind(null,"27c6"))},redirect:{name:"packages.list.basic"},children:[{path:"list",name:"packages.list",component:function(){return n.e("chunk-2d0a40d9").then(n.bind(null,"0597"))},redirect:{name:"packages.list.basic"},children:[{path:"basic",name:"packages.list.basic",component:function(){return n.e("chunk-704ef72b").then(n.bind(null,"0355"))}},{path:"example",name:"packages.list.example",component:function(){return n.e("chunk-2ba174c6").then(n.bind(null,"24e4"))}},{path:"*",redirect:{name:"packages.list"}}]},{path:"*",redirect:{name:"packages"}}]},{path:"applications",name:"applications",component:function(){return n.e("chunk-2d0b6d1a").then(n.bind(null,"1f7f"))},redirect:{name:"applications.languages"},children:[{path:"languages",name:"applications.languages",component:function(){return n.e("chunk-2d0e4a6e").then(n.bind(null,"90ab"))}},{path:"validator",name:"applications.validator",component:function(){return n.e("chunk-2d21082b").then(n.bind(null,"b7cc"))}},{path:"*",redirect:{name:"applications"}}]},{path:"*",redirect:{name:"root"}}]},{path:"*",redirect:{name:"root"}}]}),h=p,m=n("2f62");a["a"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=n("ecee"),k=n("f2d1"),g=n("b702"),_=n("c074"),y=n("ad3d");v["c"].add(k["d"],k["a"],k["c"],k["b"],k["e"],g["a"],_["d"],_["c"],_["a"],_["b"],_["f"],_["e"]),a["a"].component("FAI",y["a"]);var w=n("f596"),C=n.n(w);n("517e");a["a"].use(C.a);var x=n("62f2"),O=n.n(x);n("d20e");a["a"].use(O.a);var j={methods:{openLink:function(e){window.open(e.url)},redirectRoute:function(e){this.$router.push({name:e})}}};a["a"].mixin(j);var A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in t)n&&t[n]&&e.use(t[n])},E=function(e){"undefined"!==typeof window&&window.Vue&&window.Vue.use(e)},$=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-page"},[e._t("default")],2)}),P=[],S={name:"module-page"},F=S,I=(n("b514"),Object(s["a"])(F,$,P,!1,null,null,null)),L=I.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-page-head"},[n("div",{staticClass:"head_title"},[e._v(" "+e._s(e.$props.title)+" ")]),e._l(e.$props.btnList,(function(t){return[n("div",{key:t.id,class:["head_btn","btn-"+t.id],on:{click:function(n){return e.clickBtn(t)}}},[n("FAI",{attrs:{icon:t.fa,"fixed-width":""}})],1)]}))],2)},B=[],N={name:"module-page-head",props:{title:{type:String,default:""},btnList:{type:Array,default:function(){return[]}}},methods:{clickBtn:function(e){this.$emit("clickBtn",e)}}},M=N,D=(n("e406"),Object(s["a"])(M,T,B,!1,null,null,null)),q=D.exports;L.install=function(e){e.component(L.name,L),e.component(q.name,q)};var J=L,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-section"},[e.$slots.head?[n("div",{staticClass:"section_head"},[e._t("head")],2)]:e._e(),n("div",{staticClass:"section_body"},[e._t("default")],2)],2)},H=[],K={name:"module-section"},R=K,U=(n("8f2b"),Object(s["a"])(R,V,H,!1,null,null,null)),z=U.exports;z.install=function(e){e.component(z.name,z)};var G=z,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-block"},[e.$slots.title?[n("div",{staticClass:"block_title"},[e._t("title")],2)]:e._e(),n("div",{staticClass:"block_body"},[e._t("default")],2)],2)},W=[],X={name:"module-block"},Y=X,Z=(n("f6f2"),Object(s["a"])(Y,Q,W,!1,null,null,null)),ee=Z.exports;ee.install=function(e){e.component(ee.name,ee)};var te=ee,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-pre"},[e._t("default")],2)},ae=[],ie={name:"module-pre"},ce=ie,re=(n("45f7"),Object(s["a"])(ce,ne,ae,!1,null,null,null)),oe=re.exports;oe.install=function(e){e.component(oe.name,oe)};var ue=oe,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-divider"},[n("div",{staticClass:"divider_line"}),n("FAI",{staticClass:"divider_icon",attrs:{icon:["fas","tools"],"fixed-width":""}}),n("FAI",{staticClass:"divider_icon",attrs:{icon:["fas","tools"],"fixed-width":""}}),n("FAI",{staticClass:"divider_icon",attrs:{icon:["fas","tools"],"fixed-width":""}}),n("FAI",{staticClass:"divider_icon",attrs:{icon:["fas","tools"],"fixed-width":""}}),n("FAI",{staticClass:"divider_icon",attrs:{icon:["fas","tools"],"fixed-width":""}}),n("FAI",{staticClass:"divider_icon",attrs:{icon:["fas","tools"],"fixed-width":""}}),n("FAI",{staticClass:"divider_icon",attrs:{icon:["fas","tools"],"fixed-width":""}}),n("div",{staticClass:"divider_line"})],1)},le=[],de={name:"module-divider"},fe=de,pe=(n("964b"),Object(s["a"])(fe,se,le,!1,null,null,null)),he=pe.exports;he.install=function(e){e.component(he.name,he)};var me=he,be={Page:J,Section:G,Block:te,Pre:ue,Divider:me},ve=function e(t){e.installed||(e.installed=!0,A(t,be))};ve.installed=!1;var ke={install:ve};E(ke);var ge=ke;a["a"].use(ge),a["a"].config.productionTip=!1,Object(i["sync"])(b,h),new a["a"]({router:h,store:b,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"8f2b":function(e,t,n){"use strict";var a=n("c888"),i=n.n(a);i.a},"964b":function(e,t,n){"use strict";var a=n("c68c"),i=n.n(a);i.a},"9c0c":function(e,t,n){},b514:function(e,t,n){"use strict";var a=n("b5b2"),i=n.n(a);i.a},b5b2:function(e,t,n){},c68c:function(e,t,n){},c888:function(e,t,n){},e406:function(e,t,n){"use strict";var a=n("f09a"),i=n.n(a);i.a},f09a:function(e,t,n){},f6f2:function(e,t,n){"use strict";var a=n("45f5"),i=n.n(a);i.a}});
//# sourceMappingURL=app.72900b4d.js.map