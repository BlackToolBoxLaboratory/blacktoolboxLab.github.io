(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-364752a0"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?l(t):o(r(t))}},"46fb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BTBTableBasic")},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("module-page",{staticClass:"btb-pkg-table-basic"},[n("module-page-head",{attrs:{title:"Table",btnList:t.env.btnList},on:{clickBtn:t.openLink}}),n("module-section",{scopedSlots:t._u([{key:"head",fn:function(){return[t._v(" "+t._s("Version: "+t.env.version)+" "),n("br"),t._v(" "+t._s("Release Date: "+t.env.updated)+" ")]},proxy:!0}])},[n("p",[t._v(" "+t._s(t.env.description)+" ")])]),n("module-section",{scopedSlots:t._u([{key:"head",fn:function(){return[t._v(" "+t._s("INSTALLATION")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[t._v("$ npm install --save @blacktoolbox/vue-table\n\n"),n("code",{staticClass:"pre_notice"},[t._v("// create a plugin for vue to use table")]),t._v("\nimport Vue from 'vue'\n\nimport BTBTable from '@blacktoolbox/vue-table'\nimport '@blacktoolbox/vue-table/lib/index.css'\n\nVue.use(BTBTable)\n")])])],1),n("module-section",{scopedSlots:t._u([{key:"head",fn:function(){return[t._v(" "+t._s("RENDER")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[t._v(t._s(t.exampleRender)+"\n")])])],1),n("module-section",{scopedSlots:t._u([{key:"head",fn:function(){return[t._v(" "+t._s("PARAMETERS")+" ")]},proxy:!0}])},[n("module-block",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s("Basic")+" ")]},proxy:!0}])},[n("btb-vue-table",{staticClass:"page_table block_item",attrs:{headData:t.tableHeadArr_property,bodyData:t.tableBodyArr_basic,xScrollable:""}})],1),n("module-block",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s("headObj")+" ")]},proxy:!0}])},[n("module-pre",{staticClass:"block_item"},[n("pre",[t._v(t._s(t.exampleEntryObj)+"\n")])]),n("btb-vue-table",{staticClass:"page_table block_item",attrs:{headData:t.tableHeadArr_property,bodyData:t.tableBodyArr_head,xScrollable:""}})],1),n("module-block",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s("dataObj")+" ")]},proxy:!0}])},[n("p",[t._v(" "+t._s("It's avaliable to use original data or revised data. But the key name need to be corresponding to id of headObj from headData.")+" ")])])],1),n("module-section",{scopedSlots:t._u([{key:"head",fn:function(){return[t._v(" "+t._s("NODE TREE")+" ")]},proxy:!0}])},[n("btb-vue-list",{staticClass:"page_node_tree",attrs:{dataList:t.nodeTree}}),n("p",[t._v(" "+t._s("Note: The data order is counted base on 0.")+" ")])],1)],1)},i=[],l=(n("a4d3"),n("e01a"),n("fc08")),c='<btb-vue-table\n        :headData=" Array " \n        :bodyData=" Array " \n        :bodyWidth=" String || Number"\n        :xScrollable=" Boolean "/>',u="entryObj = {\n        id: '',\n        name: ''\n}",s=[{id:"table",title:"<div> .btb-vue-table .table-x-scrollable",children:[{id:"container",title:"<table> .table_container",children:[{id:"head",title:"<thead> .container_head",children:[{id:"head_tr",title:"<tr> .head_tr",children:[{id:"tr_th",title:"<th> .tr_th .th-[column id]"}]}]},{id:"body",title:"<tbody> .container_body",children:[{id:"body_tr",title:"<tr> .body_tr .tr-[data order]",children:[{id:"tr_td",title:"<td> .tr_td .td-[column id]"}]}]}]}]}],d={name:"btb-pkg-list-basic",data:function(){return{env:{version:l["a"].table.version,updated:l["a"].table.updated,description:l["a"].table.description,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-table"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-table"}]},exampleRender:c,exampleEntryObj:u,tableHeadArr_property:[{name:"Property Name",index:"title"},{name:"Type",index:"type"},{name:"Default",index:"default"},{name:"Notice",index:"notice"}],tableBodyArr_basic:[{title:"headData",type:"Array",default:"[]",notice:"List of headObj for table."},{title:"bodyData",type:"Array",default:"[]",notice:"List of dataObj for table"},{title:"bodyWidth",type:"String || Number",default:"undefined",notice:"Width of table."},{title:"xScrollable",type:"Boolean",default:"undefined",notice:"Active's table x scroll bar.."}],tableBodyArr_head:[{title:"index",type:"String",default:"undefined",notice:"As an identity to column and also an index to key name of dataObj"},{title:"name",type:"String",default:"undefined",notice:"The name of table's head."}],tableBodyArr_body:[{title:"id",type:"String",default:"undefined",notice:"Identity of entry"},{title:"title",type:"String",default:"''",notice:"Show name of entry."},{title:"defaultCollapsed",type:"String",default:"undefined",notice:"Default value to collapsed of extend."},{title:"children",type:"Array",default:"[]",notice:"sublist"}],nodeTree:s}}},f=d,b=n("2877"),p=Object(b["a"])(f,a,i,!1,null,null,null),y=p.exports,v={name:"btb-pkg-table-basic-container",components:{BTBTableBasic:y}},m=v,h=Object(b["a"])(m,r,o,!1,null,null,null);e["default"]=h.exports},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),i=a("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),a=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),a=n("d066"),i=n("c430"),l=n("83ab"),c=n("4930"),u=n("fdbf"),s=n("d039"),d=n("5135"),f=n("e8b5"),b=n("861d"),p=n("825a"),y=n("7b0b"),v=n("fc6a"),m=n("c04e"),h=n("5c6c"),_=n("7c73"),g=n("df75"),S=n("241c"),x=n("057f"),k=n("7418"),w=n("06cf"),O=n("9bf2"),A=n("d1e7"),T=n("9112"),j=n("6eeb"),B=n("5692"),E=n("f772"),D=n("d012"),N=n("90e3"),L=n("b622"),P=n("e538"),C=n("746f"),R=n("d44e"),I=n("69f3"),V=n("b727").forEach,$=E("hidden"),J="Symbol",W="prototype",H=L("toPrimitive"),F=I.set,M=I.getterFor(J),Q=Object[W],q=o.Symbol,z=a("JSON","stringify"),G=w.f,K=O.f,U=x.f,X=A.f,Y=B("symbols"),Z=B("op-symbols"),tt=B("string-to-symbol-registry"),et=B("symbol-to-string-registry"),nt=B("wks"),rt=o.QObject,ot=!rt||!rt[W]||!rt[W].findChild,at=l&&s((function(){return 7!=_(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(Q,e);r&&delete Q[e],K(t,e,n),r&&t!==Q&&K(Q,e,r)}:K,it=function(t,e){var n=Y[t]=_(q[W]);return F(n,{type:J,tag:t,description:e}),l||(n.description=e),n},lt=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,n){t===Q&&ct(Z,e,n),p(t);var r=m(e,!0);return p(n),d(Y,r)?(n.enumerable?(d(t,$)&&t[$][r]&&(t[$][r]=!1),n=_(n,{enumerable:h(0,!1)})):(d(t,$)||K(t,$,h(1,{})),t[$][r]=!0),at(t,r,n)):K(t,r,n)},ut=function(t,e){p(t);var n=v(e),r=g(n).concat(pt(n));return V(r,(function(e){l&&!dt.call(n,e)||ct(t,e,n[e])})),t},st=function(t,e){return void 0===e?_(t):ut(_(t),e)},dt=function(t){var e=m(t,!0),n=X.call(this,e);return!(this===Q&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,$)&&this[$][e])||n)},ft=function(t,e){var n=v(t),r=m(e,!0);if(n!==Q||!d(Y,r)||d(Z,r)){var o=G(n,r);return!o||!d(Y,r)||d(n,$)&&n[$][r]||(o.enumerable=!0),o}},bt=function(t){var e=U(v(t)),n=[];return V(e,(function(t){d(Y,t)||d(D,t)||n.push(t)})),n},pt=function(t){var e=t===Q,n=U(e?Z:v(t)),r=[];return V(n,(function(t){!d(Y,t)||e&&!d(Q,t)||r.push(Y[t])})),r};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===Q&&n.call(Z,t),d(this,$)&&d(this[$],e)&&(this[$][e]=!1),at(this,e,h(1,t))};return l&&ot&&at(Q,e,{configurable:!0,set:n}),it(e,t)},j(q[W],"toString",(function(){return M(this).tag})),j(q,"withoutSetter",(function(t){return it(N(t),t)})),A.f=dt,O.f=ct,w.f=ft,S.f=x.f=bt,k.f=pt,P.f=function(t){return it(L(t),t)},l&&(K(q[W],"description",{configurable:!0,get:function(){return M(this).description}}),i||j(Q,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),V(g(nt),(function(t){C(t)})),r({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!lt(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!l},{create:st,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(y(t))}}),z){var yt=!c||s((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,n){var r,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(r=e,(b(e)||void 0!==t)&&!lt(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!lt(e))return e}),o[1]=e,z.apply(null,o)}})}q[W][H]||T(q[W],H,q[W].valueOf),R(q,J),D[$]=!0},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),a=n("7b0b"),i=n("50c4"),l=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,s=4==t,d=6==t,f=5==t||d;return function(b,p,y,v){for(var m,h,_=a(b),g=o(_),S=r(p,y,3),x=i(g.length),k=0,w=v||l,O=e?w(b,x):n?w(b,0):void 0;x>k;k++)if((f||k in g)&&(m=g[k],h=S(m,k,_),t))if(e)O[k]=h;else if(h)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:c.call(O,m)}else if(s)return!1;return d?-1:u||s?s:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),a=n("da84"),i=n("5135"),l=n("861d"),c=n("9bf2").f,u=n("e893"),s=a.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new s(t):void 0===t?s():s(t);return""===t&&(d[e]=!0),e};u(f,s);var b=f.prototype=s.prototype;b.constructor=f;var p=b.toString,y="Symbol(test)"==String(s("test")),v=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=p.call(t);if(i(d,t))return"";var n=y?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fc08:function(t,e,n){"use strict";var r={list:{name:"List",routename:"packages.list.basic",description:"This module of list creator with Vue can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.",version:"1.4.3",updated:"May. 24, 2020"},table:{name:"Table",routename:"packages.table.basic",description:"This module of table creator with Vue can do the help to make a table component to our page.",version:"0.1.0",updated:"Apr. 27, 2020"}};e["a"]=r}}]);
//# sourceMappingURL=chunk-364752a0.f074779d.js.map