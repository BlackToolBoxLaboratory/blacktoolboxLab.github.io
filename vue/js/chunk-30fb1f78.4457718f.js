(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30fb1f78"],{"148e":function(t,a,e){"use strict";var n=e("fac4"),i=e.n(n);i.a},"55de":function(t,a,e){},"87fa":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BTBLayout",[e("router-view")],1)},i=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btb-layout"},[e("BTBHead",{staticClass:"layout_head",on:{togglePageMenu:function(a){return t.togglePageMenu()}}}),e("div",{class:["layout_body",{"aside-hidden":t.env.isHidden}]},[e("div",{staticClass:"body_container"},[e("div",{staticClass:"container_content"},[e("router-view")],1),e("BTBFoot",{staticClass:"container_foot"})],1),e("BTBAside",{staticClass:"body_aside"})],1)],1)},l=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"btb-head"},[t._m(0),t._m(1),e("div",{staticClass:"head_item"},[e("FAI",{staticClass:"header_button",attrs:{icon:["fas","home"],"fixed-width":""},on:{click:t.redirectHomepage}})],1),e("div",{staticClass:"head_item"},[e("FAI",{staticClass:"header_button",attrs:{icon:["fas","globe"],"fixed-width":""}})],1),e("div",{staticClass:"head_item"},[e("FAI",{staticClass:"header_button",attrs:{icon:["fas","bars"],"fixed-width":""},on:{click:t.togglePageMenu}})],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head_logo"},[e("div",{staticClass:"logo_content"},[t._v(" BV ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head_title"},[e("div",{staticClass:"title_main hidden-down-md"},[t._v(" Black Tool Box Laboratory ")]),e("div",{staticClass:"title_main hidden-up-md"},[t._v(" BTB Lab. ")]),e("div",{staticClass:"title_sub"},[t._v(" For Vue.js ")])])}],c={name:"btb-head",methods:{redirectHomepage:function(){location.href="".concat(location.origin,"/vue/")},togglePageMenu:function(){this.$emit("togglePageMenu")}}},d=c,u=(e("b5df"),e("2877")),f=Object(u["a"])(d,o,r,!1,null,null,null),b=f.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btb-aside"},[e("btb-vue-list",{attrs:{listdata:t.translatedmenu,collapseEnable:"",defaultActiveID:"APPLICATIONS_VALIDATOR"},on:{clickEntry:t.clickEntry}})],1)},p=[],v=[{id:"ABOUT",pathname:"about",title:"About",langIndex:"route.about"},{id:"PACKAGES",pathname:"packages",title:"Packages",langIndex:"route.packages",defaultCollapsed:!1,children:[{id:"PACKAGES_LIST",pathname:"packages.list",title:"List",langIndex:"route.list"}]},{id:"APPLICATIONS",pathname:"applications",title:"Applications",langIndex:"route.applications",defaultCollapsed:!1,children:[{id:"APPLICATIONS_LANGUAGES",pathname:"applications.languages",title:"Languages",langIndex:"route.languages"},{id:"APPLICATIONS_VALIDATOR",pathname:"applications.validator",title:"Validator",langIndex:"route.validator"}]}],_=v,m={name:"btb-aside",props:{test:Array},computed:{translatedmenu:function(){var t=_;return t}},methods:{clickEntry:function(t){this.$router.push({name:t.pathname})}}},g=m,k=(e("148e"),Object(u["a"])(g,h,p,!1,null,null,null)),B=k.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btb-foot"},[e("div",{staticClass:"foot_navbar"},[e("a",{staticClass:"navbar_linkBtn linkBtn-paypal",attrs:{href:"https://www.paypal.me/vannoel0628",target:"_blank"}},[e("FAI",{attrs:{icon:["fab","paypal"],"fixed-width":""}})],1),e("a",{staticClass:"navbar_linkBtn linkBtn-github",attrs:{href:"https://github.com/BlackToolBoxLaboratory",target:"_blank"}},[e("FAI",{attrs:{icon:["fab","github"],"fixed-width":""}})],1),e("a",{staticClass:"navbar_linkBtn linkBtn-npm",attrs:{href:"https://www.npmjs.com/org/blacktoolbox",target:"_blank"}},[e("FAI",{attrs:{icon:["fab","npm"],"fixed-width":""}})],1),e("a",{staticClass:"navbar_linkBtn linkBtn-linkedin",attrs:{href:"https://www.linkedin.com/company/black-tool-box-laboratory/",target:"_blank"}},[e("FAI",{attrs:{icon:["fab","linkedin"],"fixed-width":""}})],1),e("a",{staticClass:"navbar_linkBtn linkBtn-wordpress",attrs:{href:"https://vannoel0628.wordpress.com/",target:"_blank"}},[e("FAI",{attrs:{icon:["fab","wordpress"],"fixed-width":""}})],1),e("a",{staticClass:"navbar_linkBtn linkBtn-email",attrs:{href:"mailto://vannoel0628@gmail.com",target:"_blank"}},[e("FAI",{attrs:{icon:["far","envelope"],"fixed-width":""}})],1)]),e("footer",{staticClass:"foot_copyright"},[t._v(" Copyright © Black Tool Box Laboratory. All rights reserved. ")])])},A=[],w={name:"btb-foot"},I=w,x=(e("a9d0"),Object(u["a"])(I,C,A,!1,null,null,null)),y=x.exports,T={name:"btb-layout",components:{BTBHead:b,BTBAside:B,BTBFoot:y},data:function(){return{env:{isHidden:!1}}},methods:{togglePageMenu:function(){this.env.isHidden=!this.env.isHidden}}},P=T,L=(e("d0e5"),Object(u["a"])(P,s,l,!1,null,null,null)),E=L.exports,F={name:"btb-main-container",components:{BTBLayout:E}},O=F,$=Object(u["a"])(O,n,i,!1,null,null,null);a["default"]=$.exports},a9d0:function(t,a,e){"use strict";var n=e("ec07"),i=e.n(n);i.a},b5df:function(t,a,e){"use strict";var n=e("55de"),i=e.n(n);i.a},d0e5:function(t,a,e){"use strict";var n=e("fd81"),i=e.n(n);i.a},ec07:function(t,a,e){},fac4:function(t,a,e){},fd81:function(t,a,e){}}]);
//# sourceMappingURL=chunk-30fb1f78.4457718f.js.map