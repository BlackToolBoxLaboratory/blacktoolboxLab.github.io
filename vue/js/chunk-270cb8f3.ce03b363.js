(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270cb8f3"],{"148e":function(t,e,a){"use strict";var n=a("fac4"),i=a.n(n);i.a},"55de":function(t,e,a){},"7db0":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").find,l=a("44d2"),s=a("ae40"),o="find",r=!0,c=s(o);o in[]&&Array(1)[o]((function(){r=!1})),n({target:"Array",proto:!0,forced:r||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),l(o)},"87fa":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BTBLayout",[a("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btb-layout"},[a("BTBHead",{staticClass:"layout_head",on:{togglePageMenu:function(e){return t.togglePageMenu()}}}),a("div",{ref:"body",staticClass:"layout_content"},[a("router-view")],1),a("BTBFoot",{staticClass:"layout_foot"}),a("BTBAside",{class:["layout_aside",{"aside-hidden":t.env.isHidden}],on:{clickEntry:t.clickEntry}})],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"btb-layout-head"},[t._m(0),t._m(1),a("div",{staticClass:"head_item"},[a("FAI",{staticClass:"header_button",attrs:{icon:["fas","home"],"fixed-width":""},on:{click:t.redirectHomepage}})],1),a("div",{staticClass:"head_item"},[a("FAI",{staticClass:"header_button",attrs:{icon:["fas","globe"],"fixed-width":""}})],1),a("div",{staticClass:"head_item"},[a("FAI",{staticClass:"header_button",attrs:{icon:["fas","bars"],"fixed-width":""},on:{click:t.togglePageMenu}})],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head_logo"},[a("div",{staticClass:"logo_content"},[t._v(" BV ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head_title"},[a("div",{staticClass:"title_main hidden-down-md"},[t._v(" Black Tool Box Laboratory ")]),a("div",{staticClass:"title_main hidden-up-md"},[t._v(" BTB Lab. ")]),a("div",{staticClass:"title_sub"},[t._v(" For VueJS ")])])}],c={name:"btb-layout-head",methods:{redirectHomepage:function(){this.$router.push({name:"root"})},togglePageMenu:function(){this.$emit("togglePageMenu")}}},u=c,d=(a("b5df"),a("2877")),f=Object(d["a"])(u,o,r,!1,null,null,null),m=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btb-layout-aside"},[a("btb-vue-list",{staticClass:"aside_menu",attrs:{dataList:t.translatedmenu,collapseEnable:"",activeID:t.currentActiveID},on:{clickEntry:t.clickEntry}})],1)},b=[],p=(a("7db0"),a("b0c0"),[{id:"ABOUT",routename:"about",title:"About",langIndex:"route.about"},{id:"PACKAGES",routename:"packages",title:"Packages",langIndex:"route.packages",defaultCollapsed:!1,children:[{id:"PACKAGES_LIST",routename:"packages.list",title:"List",langIndex:"route.list",defaultCollapsed:!0,children:[{id:"PACKAGES_LIST_BASIC",routename:"packages.list.basic",title:"Basic",langIndex:"route.basic"},{id:"PACKAGES_LIST_EXAMPLE_LIST",routename:"packages.list.exampleList",title:"Example-List",langIndex:"route.example.list"},{id:"PACKAGES_LIST_EXAMPLE_MENU",routename:"packages.list.exampleMenu",title:"Example-Menu",langIndex:"route.example.menu"},{id:"PACKAGES_LIST_EXAMPLE_STYLE",routename:"packages.list.exampleStyle",title:"Example-Style",langIndex:"route.example.style"},{id:"PACKAGES_LIST_EXAMPLE_SLOT",routename:"packages.list.exampleSlot",title:"Example-Slot",langIndex:"route.example.slot"}]},{id:"PACKAGES_TABLE",routename:"packages.table",title:"Table",langIndex:"route.table",defaultCollapsed:!0,children:[{id:"PACKAGES_TABLE_BASIC",routename:"packages.table.basic",title:"Basic",langIndex:"route.basic"}]}]},{id:"APPLICATIONS",routename:"applications",title:"Applications",langIndex:"route.applications",defaultCollapsed:!1,children:[{id:"APPLICATIONS_LANGUAGES",routename:"applications.languages",title:"Languages",langIndex:"route.languages"},{id:"APPLICATIONS_VALIDATOR",routename:"applications.validator",title:"Validator",langIndex:"route.validator"}]}]),g=p,v={name:"btb-layout-aside",data:function(){return{env:{activeID:this.getRouteIDFromName(this.$route.name)}}},computed:{translatedmenu:function(){var t=g;return t},currentActiveID:{get:function(){return this.env.activeID},set:function(t){this.env.activeID=this.getRouteIDFromName(t.name)}}},watch:{$route:function(t,e){this.currentActiveID=t}},methods:{getRouteIDFromName:function(t){return this.getRouteIDFromName_Recursive(t,g)||""},getRouteIDFromName_Recursive:function(t,e){var a=this,n="";return e.find((function(e){if(e.children){if(n=a.getRouteIDFromName_Recursive(t,e.children),0!==n.length)return!0}else if(e.routename===t)return n=e.id,!0;return!1})),n},clickEntry:function(t){this.$route.name!==t.routename&&(this.$router.push({name:t.routename}),this.$emit("clickEntry"))}}},_=v,A=(a("148e"),Object(d["a"])(_,h,b,!1,null,null,null)),C=A.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btb-layout-foot"},[a("div",{staticClass:"foot_navbar"},[a("a",{staticClass:"navbar_linkBtn linkBtn-paypal",attrs:{href:"https://www.paypal.me/vannoel0628",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","paypal"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-github",attrs:{href:"https://github.com/BlackToolBoxLaboratory",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","github"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-npm",attrs:{href:"https://www.npmjs.com/org/blacktoolbox",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","npm"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-linkedin",attrs:{href:"https://www.linkedin.com/company/black-tool-box-laboratory/",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","linkedin"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-wordpress",attrs:{href:"https://vannoel0628.wordpress.com/",target:"_blank"}},[a("FAI",{attrs:{icon:["fab","wordpress"],"fixed-width":""}})],1),a("a",{staticClass:"navbar_linkBtn linkBtn-email",attrs:{href:"mailto://vannoel0628@gmail.com",target:"_blank"}},[a("FAI",{attrs:{icon:["far","envelope"],"fixed-width":""}})],1)]),a("footer",{staticClass:"foot_copyright"},[t._v(" Copyright © Black Tool Box Laboratory. All rights reserved. ")])])},k=[],x={name:"btb-layout-foot"},B=x,E=(a("a9d0"),Object(d["a"])(B,I,k,!1,null,null,null)),y=E.exports,w=768,S={name:"btb-layout",components:{BTBHead:m,BTBAside:C,BTBFoot:y},data:function(){return{env:{isHidden:!1}}},watch:{$route:function(t,e){this.$refs.body.scrollTop=0}},created:function(){window.innerWidth<w&&(this.env.isHidden=!0)},methods:{clickEntry:function(){window.innerWidth<w&&(this.env.isHidden=!0)},togglePageMenu:function(){this.env.isHidden=!this.env.isHidden}}},L=S,T=(a("d0e5"),Object(d["a"])(L,l,s,!1,null,null,null)),P=T.exports,F={name:"btb-main-container",components:{BTBLayout:P}},$=F,D=Object(d["a"])($,n,i,!1,null,null,null);e["default"]=D.exports},a9d0:function(t,e,a){"use strict";var n=a("ec07"),i=a.n(n);i.a},ae40:function(t,e,a){var n=a("83ab"),i=a("d039"),l=a("5135"),s=Object.defineProperty,o={},r=function(t){throw t};t.exports=function(t,e){if(l(o,t))return o[t];e||(e={});var a=[][t],c=!!l(e,"ACCESSORS")&&e.ACCESSORS,u=l(e,0)?e[0]:r,d=l(e,1)?e[1]:void 0;return o[t]=!!a&&!i((function(){if(c&&!n)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:r}):t[1]=1,a.call(t,u,d)}))}},b5df:function(t,e,a){"use strict";var n=a("55de"),i=a.n(n);i.a},d0e5:function(t,e,a){"use strict";var n=a("fd81"),i=a.n(n);i.a},ec07:function(t,e,a){},fac4:function(t,e,a){},fd81:function(t,e,a){}}]);
//# sourceMappingURL=chunk-270cb8f3.ce03b363.js.map