(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fff75f7"],{"148e":function(t,e,a){"use strict";var n=a("fac4"),i=a.n(n);i.a},"55de":function(t,e,a){},"65f0":function(t,e,a){var n=a("861d"),i=a("e8b5"),r=a("b622"),o=r("species");t.exports=function(t,e){var a;return i(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?n(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"7db0":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").find,r=a("44d2"),o=a("ae40"),s="find",l=!0,c=o(s);s in[]&&Array(1)[s]((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},"87fa":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BTBLayout",[a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btb-layout"},[a("BTBHead",{staticClass:"layout_head",on:{togglePageMenu:function(e){return t.togglePageMenu()}}}),a("div",{class:["layout_body",{"aside-hidden":t.env.isHidden}]},[a("div",{staticClass:"body_container"},[a("div",{staticClass:"container_content"},[a("router-view")],1),a("BTBFoot",{staticClass:"container_foot"})],1),a("BTBAside",{staticClass:"body_aside",on:{clickEntry:t.clickEntry}})],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"btb-layout-head"},[t._m(0),t._m(1),a("div",{staticClass:"head_item"},[a("FAI",{staticClass:"header_button",attrs:{icon:["fas","home"],"fixed-width":""},on:{click:t.redirectHomepage}})],1),a("div",{staticClass:"head_item"},[a("FAI",{staticClass:"header_button",attrs:{icon:["fas","globe"],"fixed-width":""}})],1),a("div",{staticClass:"head_item"},[a("FAI",{staticClass:"header_button",attrs:{icon:["fas","bars"],"fixed-width":""},on:{click:t.togglePageMenu}})],1)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head_logo"},[a("div",{staticClass:"logo_content"},[t._v(" BV ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head_title"},[a("div",{staticClass:"title_main hidden-down-md"},[t._v(" Black Tool Box Laboratory ")]),a("div",{staticClass:"title_main hidden-up-md"},[t._v(" BTB Lab. ")]),a("div",{staticClass:"title_sub"},[t._v(" For VueJS ")])])}],c={name:"btb-layout-head",methods:{redirectHomepage:function(){this.$router.push({name:"root"})},togglePageMenu:function(){this.$emit("togglePageMenu")}}},u=c,d=(a("b5df"),a("2877")),f=Object(d["a"])(u,s,l,!1,null,null,null),m=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btb-layout-aside"},[a("btb-vue-list",{attrs:{dataList:t.translatedmenu,collapseEnable:"",activeID:t.currentActiveID},on:{clickEntry:t.clickEntry}})],1)},h=[],p=(a("7db0"),a("b0c0"),[{id:"ABOUT",routename:"about",title:"About",langIndex:"route.about"},{id:"PACKAGES",routename:"packages",title:"Packages",langIndex:"route.packages",defaultCollapsed:!1,children:[{id:"PACKAGES_LIST",routename:"packages.list",title:"List",langIndex:"route.list",defaultCollapsed:!1,children:[{id:"PACKAGES_LIST_BASIC",routename:"packages.list.basic",title:"Basic",langIndex:"route.basic"},{id:"PACKAGES_LIST_EXAMPLE_LIST",routename:"packages.list.exampleList",title:"Example-List",langIndex:"route.example.list"},{id:"PACKAGES_LIST_EXAMPLE_MENU",routename:"packages.list.exampleMenu",title:"Example-Menu",langIndex:"route.example.menu"},{id:"PACKAGES_LIST_EXAMPLE_STYLE",routename:"packages.list.exampleStyle",title:"Example-Style",langIndex:"route.example.style"},{id:"PACKAGES_LIST_EXAMPLE_SLOT",routename:"packages.list.exampleSlot",title:"Example-Slot",langIndex:"route.example.slot"}]},{id:"PACKAGES_TABLE",routename:"packages.table",title:"Table",langIndex:"route.table",defaultCollapsed:!1,children:[{id:"PACKAGES_TABLE_BASIC",routename:"packages.table.basic",title:"Basic",langIndex:"route.basic"}]}]},{id:"APPLICATIONS",routename:"applications",title:"Applications",langIndex:"route.applications",defaultCollapsed:!1,children:[{id:"APPLICATIONS_LANGUAGES",routename:"applications.languages",title:"Languages",langIndex:"route.languages"},{id:"APPLICATIONS_VALIDATOR",routename:"applications.validator",title:"Validator",langIndex:"route.validator"}]}]),v=p,g={name:"btb-layout-aside",data:function(){return{env:{activeID:this.getRouteIDFromName(this.$route.name)}}},computed:{translatedmenu:function(){var t=v;return t},currentActiveID:{get:function(){return this.env.activeID},set:function(t){this.env.activeID=this.getRouteIDFromName(t.name)}}},watch:{$route:function(t,e){this.currentActiveID=t}},methods:{getRouteIDFromName:function(t){return this.getRouteIDFromName_Recursive(t,v)||""},getRouteIDFromName_Recursive:function(t,e){var a=this,n="";return e.find((function(e){if(e.children){if(n=a.getRouteIDFromName_Recursive(t,e.children),0!==n.length)return!0}else if(e.routename===t)return n=e.id,!0;return!1})),n},clickEntry:function(t){this.$route.name!==t.routename&&(this.$router.push({name:t.routename}),this.$emit("clickEntry"))}}},_=g,A=(a("148e"),Object(d["a"])(_,b,h,!1,null,null,null)),C=A.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btb-layout-foot"},[a("div",{staticClass:"foot_navbar"},[a("a",{staticClass:"navbar_linkBtn linkBtn-paypal",attrs:{href:"https://www.paypal.me/vannoel0628",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","paypal"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-github",attrs:{href:"https://github.com/BlackToolBoxLaboratory",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","github"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-npm",attrs:{href:"https://www.npmjs.com/org/blacktoolbox",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","npm"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-linkedin",attrs:{href:"https://www.linkedin.com/company/black-tool-box-laboratory/",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","linkedin"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-wordpress",attrs:{href:"https://vannoel0628.wordpress.com/",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","wordpress"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-email",attrs:{href:"mailto://vannoel0628@gmail.com",target:"_blank"}},[a("FAI",{attrs:{icon:["far","envelope"],"fixed-width":""}})],1)]),a("footer",{staticClass:"foot_copyright"},[t._v(" Copyright © Black Tool Box Laboratory. All rights reserved. ")])])},k=[],x={name:"btb-layout-foot"},y=x,B=(a("a9d0"),Object(d["a"])(y,I,k,!1,null,null,null)),E=B.exports,w=768,S={name:"btb-layout",components:{BTBHead:m,BTBAside:C,BTBFoot:E},data:function(){return{env:{isHidden:!1}}},created:function(){window.innerWidth<w&&(this.env.isHidden=!0)},methods:{clickEntry:function(){window.innerWidth<w&&(this.env.isHidden=!0)},togglePageMenu:function(){this.env.isHidden=!this.env.isHidden}}},L=S,T=(a("d0e5"),Object(d["a"])(L,r,o,!1,null,null,null)),P=T.exports,F={name:"btb-main-container",components:{BTBLayout:P}},D=F,O=Object(d["a"])(D,n,i,!1,null,null,null);e["default"]=O.exports},a9d0:function(t,e,a){"use strict";var n=a("ec07"),i=a.n(n);i.a},ae40:function(t,e,a){var n=a("83ab"),i=a("d039"),r=a("5135"),o=Object.defineProperty,s={},l=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var a=[][t],c=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:l,d=r(e,1)?e[1]:void 0;return s[t]=!!a&&!i((function(){if(c&&!n)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,a.call(t,u,d)}))}},b5df:function(t,e,a){"use strict";var n=a("55de"),i=a.n(n);i.a},b727:function(t,e,a){var n=a("0366"),i=a("44ad"),r=a("7b0b"),o=a("50c4"),s=a("65f0"),l=[].push,c=function(t){var e=1==t,a=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d;return function(m,b,h,p){for(var v,g,_=r(m),A=i(_),C=n(b,h,3),I=o(A.length),k=0,x=p||s,y=e?x(m,I):a?x(m,0):void 0;I>k;k++)if((f||k in A)&&(v=A[k],g=C(v,k,_),t))if(e)y[k]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:l.call(y,v)}else if(u)return!1;return d?-1:c||u?u:y}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d0e5:function(t,e,a){"use strict";var n=a("fd81"),i=a.n(n);i.a},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ec07:function(t,e,a){},fac4:function(t,e,a){},fd81:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7fff75f7.a4fd4ec2.js.map