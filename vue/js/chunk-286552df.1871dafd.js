(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-286552df"],{"36a1":function(e,t,n){"use strict";var l=n("409d"),i=n.n(l);i.a},"409d":function(e,t,n){},"721f":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BTBListExampleStyle")},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("module-page",{staticClass:"btb-pkg-list-example"},[n("module-page-head",{attrs:{title:"Example - Style",btnList:e.env.btnList},on:{clickBtn:e.openLink}}),n("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("Version: "+e.env.version)+" "),n("br"),e._v(" "+e._s("Release Date: "+e.env.updated)+" ")]},proxy:!0}])},[n("p",[e._v(" "+e._s("Here is going to show you about how to use the styleObj and the example of defaultActiveID and v-model of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly.")+" ")])]),n("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("EXAMPLE")+" ")]},proxy:!0}])},[n("p",{staticClass:"example_activeID"},[e._v(" "+e._s("Active ID: "+e.activeID)+" ")]),n("btb-vue-list",{attrs:{dataList:e.listData,defaultActiveID:e.defaultActiveID,styleObj:e.styleObj},model:{value:e.activeID,callback:function(t){e.activeID=t},expression:"activeID"}})],1),n("module-section",{scopedSlots:e._u([{key:"head",fn:function(){return[e._v(" "+e._s("CONFIGURATION")+" ")]},proxy:!0}])},[n("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("Render")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[e._v(e._s(e.exampleRender)+"\n")])])],1),n("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("defaultActiveID")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[e._v("const defaultActiveID = 'l13'\n")])])],1),n("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("listData")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[e._v("const listData = [\n        { id: 'b1', title: 'Branch: 1', children: [\n                { id: 'l11', title: 'Leaf: 1-1' },\n                { id: 'b12', title: 'Branch: 1-2', children: [\n                        { id: 'l121', title: 'Leaf: 1-2-1' },\n                        { id: 'l122', title: 'Leaf: 1-2-2' }\n                ]},\n                { id: 'l13', title: 'Leaf: 1-3' }\n        ]},\n        { id: 'b2', title: 'Branch: 2', children: [\n                { id: 'l21', title: 'Leaf: 2-1' },\n                { id: 'l22', title: 'Leaf: 2-2' }\n        ]}\n]\n")])])],1),n("module-block",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s("styleObj")+" ")]},proxy:!0}])},[n("module-pre",[n("pre",[e._v("const _styleObj = {\n        'container_entry': {\n                cursor: 'pointer'\n        },\n        'entry-active': {\n                'background-color': '#b8dec9'\n        }\n}\n")])])],1)],1)],1)},o=[],s=n("fc08"),c='<btb-vue-list \n        v-model="activeID"\n        :dataList="listData"\n        :defaultActiveID="defaultActiveID" \n        :styleObj="styleObj"/>',r=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],d={container_entry:{cursor:"pointer"},"entry-active":{"background-color":"#b8dec9"}},u="l13",p={name:"btb-pkg-list-example",data:function(){return{env:{version:s["a"].list.version,updated:s["a"].list.updated,btnList:[{id:"github",fa:["fab","github"],url:"https://github.com/BlackToolBoxLaboratory/vue-list"},{id:"npm",fa:["fab","npm"],url:"https://www.npmjs.com/package/@blacktoolbox/vue-list"}]},exampleRender:c,listData:r,styleObj:d,defaultActiveID:u,activeID:""}}},b=p,f=(n("36a1"),n("2877")),v=Object(f["a"])(b,a,o,!1,null,null,null),m=v.exports,y={name:"btb-pkg-list-example-style-container",components:{BTBListExampleStyle:m}},_=y,h=Object(f["a"])(_,l,i,!1,null,null,null);t["default"]=h.exports},fc08:function(e,t,n){"use strict";var l={list:{name:"List",routename:"packages.list.basic",description:"The list creating. We can enable some features to make it into menu.",version:"1.4.1",updated:"May. 17, 2020"},table:{name:"Table",routename:"packages.table.basic",description:"The table creator.",version:"0.1.0",updated:"Apr. 27, 2020"}};t["a"]=l}}]);
//# sourceMappingURL=chunk-286552df.1871dafd.js.map