(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bba3c5c"],{f008:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("BTBListExampleList")},l=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("module-page",{staticClass:"btb-pkg-list-example"},[i("module-page-head",{attrs:{title:"Example - List",btnList:e.env.btnList},on:{clickBtn:e.openLink}}),i("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("Version: "+e.env.version)+" "),i("br"),e._v(" "+e._s("Release Date: "+e.env.updated)+" ")]},proxy:!0}])},[i("p",[e._v(" "+e._s("Here is a very simple example for a list, if we just give a data list.")+" ")])]),i("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("EXAMPLE")+" ")]},proxy:!0}])},[i("btb-vue-list",{attrs:{dataList:e.listData}})],1),i("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("CONFIGURATION")+" ")]},proxy:!0}])},[i("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("Render")+" ")]},proxy:!0}])},[i("module-pre",[i("pre",[e._v(e._s(e.exampleRender)+"\n")])])],1),i("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("listData")+" ")]},proxy:!0}])},[i("module-pre",[i("pre",[e._v("const listData = [\n        { id: 'b1', title: 'Branch: 1', children: [\n                { id: 'l11', title: 'Leaf: 1-1' },\n                { id: 'b12', title: 'Branch: 1-2', children: [\n                        { id: 'l121', title: 'Leaf: 1-2-1' },\n                        { id: 'l122', title: 'Leaf: 1-2-2' }\n                ]},\n                { id: 'l13', title: 'Leaf: 1-3' }\n        ]},\n        { id: 'b2', title: 'Branch: 2', children: [\n                { id: 'l21', title: 'Leaf: 2-1' },\n                { id: 'l22', title: 'Leaf: 2-2' }\n        ]}\n]\n")])])],1)],1)],1)},o=[],s=i("fc08"),r='<btb-vue-list :dataList="listData"/>',c=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],d={name:"btb-pkg-list-example",data:function(){return{env:{version:s["a"].list.version,updated:s["a"].list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}]},exampleRender:r,listData:c}}},u=d,p=i("2877"),m=Object(p["a"])(u,n,o,!1,null,null,null),b=m.exports,f={name:"btb-pkg-list-example-list-container",components:{BTBListExampleList:b}},h=f,v=Object(p["a"])(h,a,l,!1,null,null,null);t["default"]=v.exports},fc08:function(e,t,i){"use strict";var a={list:{name:"List",routename:"packages.list.basic",description:"This module of list creator with Vue can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.",version:"1.4.3",updated:"May. 24, 2020"},table:{name:"Table",routename:"packages.table.basic",description:"This module of table creator with Vue can do the help to make a table component to our page.",version:"0.1.0",updated:"Apr. 27, 2020"}};t["a"]=a}}]);
//# sourceMappingURL=chunk-7bba3c5c.5301dc9f.js.map