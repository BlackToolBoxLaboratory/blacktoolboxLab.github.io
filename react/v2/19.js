(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(31),l=a(54),o=a(58),r=a(53),s=a(50),d=a(49),m=a(60),p=Object(l.a)(Object(c.b)((function(e){return{languageSetting:e.language.languageSetting}}))),u=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],b=p((function(){return i.a.createElement(d.c,{className:"btb-pkg-list-example-list"},i.a.createElement(d.d,{title:r.a.translate("package.list.example.list.title"),clickBtn:s.a,linkList:m.a.linkList}),i.a.createElement(d.e,{head:i.a.createElement(i.a.Fragment,null,"".concat(r.a.translate("package.version_colon")).concat(m.a.version),i.a.createElement("br",null),"".concat(r.a.translate("package.release_colon")).concat(m.a.updated))},i.a.createElement("p",null,r.a.translate("package.list.example.list.description"))),i.a.createElement(d.e,{head:r.a.translate("package.section.example")},i.a.createElement(o.a,{dataList:u})),i.a.createElement(d.e,{head:r.a.translate("package.section.sourceCode")},i.a.createElement("pre",{className:"page_pre"},"<btb-react-list dataList={listData} />"),i.a.createElement(d.a,{title:"listData"},i.a.createElement("pre",{className:"page_pre"},"const listData = [\n        { id: 'b1', title: 'Branch: 1', children: [\n                { id: 'l11', title: 'Leaf: 1-1' },\n                { id: 'b12', title: 'Branch: 1-2', children: [\n                        { id: 'l121', title: 'Leaf: 1-2-1' },\n                        { id: 'l122', title: 'Leaf: 1-2-2' }\n                ]},\n                { id: 'l13', title: 'Leaf: 1-3' }\n        ]},\n        { id: 'b2', title: 'Branch: 2', children: [\n                { id: 'l21', title: 'Leaf: 2-1' },\n                { id: 'l22', title: 'Leaf: 2-2' }\n        ]}\n]"))))}));t.default=function(){return i.a.createElement(b,null)}},49:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n),c=function(e){return i.a.createElement("div",{className:["module-page",e.className].join(" ")},e.children)},l=a(52),o=a.n(l),r=a(38),s=function(e){return i.a.createElement("div",{className:"module-page-head"},i.a.createElement("div",{className:"head_title"},e.title||""),(e.linkList||[]).map((function(t){return i.a.createElement("div",{className:o()("head_btn","btn-".concat(t.id)),key:t.id,onClick:function(){var a;a=t,e.clickBtn&&e.clickBtn(a)}},i.a.createElement(r.FontAwesomeIcon,{icon:t.fa,fixedWidth:!0}))})))},d=function(e){return i.a.createElement("div",{className:["module-section",e.className].join(" ")},e.head?i.a.createElement("div",{className:"section_head"},e.head):[],i.a.createElement("div",{className:"section_body"},e.children))},m=function(e){return i.a.createElement("div",{className:"module-block"},e.title?i.a.createElement("div",{className:"block_title"},e.title):[],i.a.createElement("div",{className:"block_body"},e.children))},p=function(){return i.a.createElement("div",{className:"module-divider"},i.a.createElement("div",{className:"divider_line"}),i.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement("div",{className:"divider_line"}))}},50:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},51:function(e,t,a){"use strict";var n=a(18),i={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.1",updated:"2020-07-07",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}}};t.a=i},60:function(e,t,a){"use strict";var n=a(51),i={version:n.a.list.version,updated:n.a.list.updated,description:n.a.list.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.list.link.github},{id:"npm",fa:["fab","npm"],url:n.a.list.link.npm}]};t.a=i}}]);