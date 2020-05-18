(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67148785"],{"958e":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BTBListExampleMenu")},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("module-page",{staticClass:"btb-pkg-list-example"},[n("module-page-head",{attrs:{title:"Example - Menu",btnList:e.env.btnList},on:{clickBtn:e.openLink}}),n("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("Version: "+e.env.version)+" "),n("br"),e._v(" "+e._s("Release Date: "+e.env.updated)+" ")]},proxy:!0}])},[n("p",[e._v(" "+e._s("When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the @toggleCollapsed event function while clicked. Every entry can be active status after being clicked. Surely it will trigger the @clickEntry event function too. Besides for a menu, it can tag one as defaultActiveID. Also use the v-model to listen the value from activeID")+" ")])]),n("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("EXAMPLE")+" ")]},proxy:!0}])},[n("btb-vue-list",{attrs:{dataList:e.menuData,collapseEnable:""}})],1),n("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("CONFIGURATION")+" ")]},proxy:!0}])},[n("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("Render")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[e._v(e._s(e.exampleRender)+"\n")])])],1),n("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("menuData")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[e._v("const menuData = [\n        { id: 'f1', title: 'Folder: 1', children: [\n                { id: 't11', title: 'Menu: 1-1' },\n                { id: 't12', title: 'Menu: 1-2' }\n        ]},\n        { id: 'f2', title: 'Folder: 2', defaultCollapsed: true, children: [\n                { id: 't21', title: 'Menu: 2-1' },\n                { id: 't22', title: 'Menu: 2-2' },\n                { id: 't23', title: 'Menu: 2-3' }\n        ]}\n]\n")])])],1)],1)],1)},o=[],s=n("fc08"),u='<btb-vue-list :dataList="menuData" collapseEnable/>',r=[{id:"f1",title:"Folder: 1",children:[{id:"t11",title:"Menu: 1-1"},{id:"t12",title:"Menu: 1-2"}]},{id:"f2",title:"Folder: 2",defaultCollapsed:!0,children:[{id:"t21",title:"Menu: 2-1"},{id:"t22",title:"Menu: 2-2"},{id:"t23",title:"Menu: 2-3"}]}],d={name:"btb-pkg-list-example",data:function(){return{env:{version:s["a"].list.version,updated:s["a"].list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}]},exampleRender:u,menuData:r}}},c=d,p=n("2877"),m=Object(p["a"])(c,i,o,!1,null,null,null),b=m.exports,f={name:"btb-pkg-list-example-menu-container",components:{BTBListExampleMenu:b}},v=f,h=Object(p["a"])(v,l,a,!1,null,null,null);t["default"]=h.exports},fc08:function(e,t,n){"use strict";var l={list:{name:"List",routename:"packages.list.basic",description:"This module of list creator based on VueJS can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.",version:"1.4.2",updated:"May. 18, 2020"},table:{name:"Table",routename:"packages.table.basic",description:"This module of table creator based on VueJS can do the help to make a table component to our page.",version:"0.1.0",updated:"Apr. 27, 2020"}};t["a"]=l}}]);
//# sourceMappingURL=chunk-67148785.60391ca1.js.map