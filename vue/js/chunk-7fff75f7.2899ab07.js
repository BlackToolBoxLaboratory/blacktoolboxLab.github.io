(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fff75f7"],{"148e":function(t,e,n){"use strict";var a=n("fac4"),i=n.n(a);i.a},"55de":function(t,e,n){},"65f0":function(t,e,n){var a=n("861d"),i=n("e8b5"),r=n("b622"),o=r("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"7db0":function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").find,r=n("44d2"),o=n("ae40"),s="find",l=!0,c=o(s);s in[]&&Array(1)[s]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},"87fa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BTBLayout",[n("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btb-layout"},[n("BTBHead",{staticClass:"layout_head",on:{togglePageMenu:function(e){return t.togglePageMenu()}}}),n("div",{class:["layout_body",{"aside-hidden":t.env.isHidden}]},[n("div",{staticClass:"body_container"},[n("div",{staticClass:"container_content"},[n("router-view")],1),n("BTBFoot",{staticClass:"container_foot"})],1),n("BTBAside",{staticClass:"body_aside",on:{clickEntry:t.clickEntry}})],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"btb-layout-head"},[t._m(0),t._m(1),n("div",{staticClass:"head_item"},[n("FAI",{staticClass:"header_button",attrs:{icon:["fas","home"],"fixed-width":""},on:{click:t.redirectHomepage}})],1),n("div",{staticClass:"head_item"},[n("FAI",{staticClass:"header_button",attrs:{icon:["fas","globe"],"fixed-width":""}})],1),n("div",{staticClass:"head_item"},[n("FAI",{staticClass:"header_button",attrs:{icon:["fas","bars"],"fixed-width":""},on:{click:t.togglePageMenu}})],1)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head_logo"},[n("div",{staticClass:"logo_content"},[t._v(" BV ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head_title"},[n("div",{staticClass:"title_main hidden-down-md"},[t._v(" Black Tool Box Laboratory ")]),n("div",{staticClass:"title_main hidden-up-md"},[t._v(" BTB Lab. ")]),n("div",{staticClass:"title_sub"},[t._v(" For VueJS ")])])}],c={name:"btb-layout-head",methods:{redirectHomepage:function(){this.$router.push({name:"root"})},togglePageMenu:function(){this.$emit("togglePageMenu")}}},u=c,d=(n("b5df"),n("2877")),f=Object(d["a"])(u,s,l,!1,null,null,null),h=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btb-layout-aside"},[n("btb-vue-list",{attrs:{listdata:t.translatedmenu,collapseEnable:"",activeID:t.currentActiveID},on:{clickEntry:t.clickEntry}})],1)},v=[],m=(n("7db0"),n("b0c0"),[{id:"ABOUT",routename:"about",title:"About",langIndex:"route.about"},{id:"PACKAGES",routename:"packages",title:"Packages",langIndex:"route.packages",defaultCollapsed:!1,children:[{id:"PACKAGES_LIST",routename:"packages.list",title:"List",langIndex:"route.list",children:[{id:"PACKAGES_LIST_BASIC",routename:"packages.list.basic",title:"Basic",langIndex:"route.basic"},{id:"PACKAGES_LIST_EXAMPLE",routename:"packages.list.example",title:"Example",langIndex:"route.example"}]}]},{id:"APPLICATIONS",routename:"applications",title:"Applications",langIndex:"route.applications",defaultCollapsed:!1,children:[{id:"APPLICATIONS_LANGUAGES",routename:"applications.languages",title:"Languages",langIndex:"route.languages"},{id:"APPLICATIONS_VALIDATOR",routename:"applications.validator",title:"Validator",langIndex:"route.validator"}]}]),p=m,g={name:"btb-layout-aside",data:function(){return{env:{activeID:this.getRouteIDFromName(this.$route.name)}}},computed:{translatedmenu:function(){var t=p;return t},currentActiveID:{get:function(){return this.env.activeID},set:function(t){this.env.activeID=this.getRouteIDFromName(t.name)}}},watch:{$route:function(t,e){this.currentActiveID=t}},methods:{getRouteIDFromName:function(t){return this.getRouteIDFromName_Recursive(t,p)||""},getRouteIDFromName_Recursive:function(t,e){var n=this,a="";return e.find((function(e){if(e.children){if(a=n.getRouteIDFromName_Recursive(t,e.children),0!==a.length)return!0}else if(e.routename===t)return a=e.id,!0;return!1})),a},clickEntry:function(t){this.$route.name!==t.routename&&(this.$router.push({name:t.routename}),this.$emit("clickEntry"))}}},_=g,A=(n("148e"),Object(d["a"])(_,b,v,!1,null,null,null)),k=A.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btb-layout-foot"},[n("div",{staticClass:"foot_navbar"},[n("a",{staticClass:"navbar_linkBtn linkBtn-paypal",attrs:{href:"https://www.paypal.me/vannoel0628",target:"_blank"}},[n("FAI",{attrs:{icon:["fab","paypal"],"fixed-width":""}})],1),n("a",{staticClass:"navbar_linkBtn linkBtn-github",attrs:{href:"https://github.com/BlackToolBoxLaboratory",target:"_blank"}},[n("FAI",{attrs:{icon:["fab","github"],"fixed-width":""}})],1),n("a",{staticClass:"navbar_linkBtn linkBtn-npm",attrs:{href:"https://www.npmjs.com/org/blacktoolbox",target:"_blank"}},[n("FAI",{attrs:{icon:["fab","npm"],"fixed-width":""}})],1),n("a",{staticClass:"navbar_linkBtn linkBtn-linkedin",attrs:{href:"https://www.linkedin.com/company/black-tool-box-laboratory/",target:"_blank"}},[n("FAI",{attrs:{icon:["fab","linkedin"],"fixed-width":""}})],1),n("a",{staticClass:"navbar_linkBtn linkBtn-wordpress",attrs:{href:"https://vannoel0628.wordpress.com/",target:"_blank"}},[n("FAI",{attrs:{icon:["fab","wordpress"],"fixed-width":""}})],1),n("a",{staticClass:"navbar_linkBtn linkBtn-email",attrs:{href:"mailto://vannoel0628@gmail.com",target:"_blank"}},[n("FAI",{attrs:{icon:["far","envelope"],"fixed-width":""}})],1)]),n("footer",{staticClass:"foot_copyright"},[t._v(" Copyright © Black Tool Box Laboratory. All rights reserved. ")])])},y=[],I={name:"btb-layout-foot"},B=I,w=(n("a9d0"),Object(d["a"])(B,C,y,!1,null,null,null)),x=w.exports,E=768,T={name:"btb-layout",components:{BTBHead:h,BTBAside:k,BTBFoot:x},data:function(){return{env:{isHidden:!1}}},created:function(){window.innerWidth<E&&(this.env.isHidden=!0)},methods:{clickEntry:function(){window.innerWidth<E&&(this.env.isHidden=!0)},togglePageMenu:function(){this.env.isHidden=!this.env.isHidden}}},P=T,S=(n("d0e5"),Object(d["a"])(P,r,o,!1,null,null,null)),F=S.exports,L={name:"btb-main-container",components:{BTBLayout:F}},D=L,$=Object(d["a"])(D,a,i,!1,null,null,null);e["default"]=$.exports},a9d0:function(t,e,n){"use strict";var a=n("ec07"),i=n.n(a);i.a},ae40:function(t,e,n){var a=n("83ab"),i=n("d039"),r=n("5135"),o=Object.defineProperty,s={},l=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var n=[][t],c=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:l,d=r(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(c&&!a)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,u,d)}))}},b5df:function(t,e,n){"use strict";var a=n("55de"),i=n.n(a);i.a},b727:function(t,e,n){var a=n("0366"),i=n("44ad"),r=n("7b0b"),o=n("50c4"),s=n("65f0"),l=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,b,v,m){for(var p,g,_=r(h),A=i(_),k=a(b,v,3),C=o(A.length),y=0,I=m||s,B=e?I(h,C):n?I(h,0):void 0;C>y;y++)if((f||y in A)&&(p=A[y],g=k(p,y,_),t))if(e)B[y]=g;else if(g)switch(t){case 3:return!0;case 5:return p;case 6:return y;case 2:l.call(B,p)}else if(u)return!1;return d?-1:c||u?u:B}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d0e5:function(t,e,n){"use strict";var a=n("fd81"),i=n.n(a);i.a},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},ec07:function(t,e,n){},fac4:function(t,e,n){},fd81:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7fff75f7.2899ab07.js.map