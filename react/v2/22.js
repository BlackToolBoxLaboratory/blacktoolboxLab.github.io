(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(31),r=a(52),o=a(54),l=a(51),s=a(48),d=a(47),u=a(58);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,i=!1,c=void 0;try{for(var r,o=e[Symbol.iterator]();!(n=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(e){i=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var b=Object(r.a)(Object(c.b)((function(e){return{languageSetting:e.language.languageSetting}}))),f=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],v={container_entry:{cursor:"pointer"},"entry-active":{"background-color":"#00d8ff"}};var h=b((function(){var e,t,a,c,r=(e="l13",t=m(Object(n.useState)(e),2),a=t[0],c=t[1],{value:a,onChange:function(e){c(e.id)}});return i.a.createElement(d.c,{className:"btb-pkg-list-example-style"},i.a.createElement(d.d,{title:l.a.translate("package.list.example.style.title"),clickBtn:s.a,linkList:u.a.linkList}),i.a.createElement(d.e,{head:i.a.createElement(i.a.Fragment,null,"".concat(l.a.translate("package.version_colon")).concat(u.a.version),i.a.createElement("br",null),"".concat(l.a.translate("package.release_colon")).concat(u.a.updated))},i.a.createElement("p",null,l.a.translate("package.list.example.style.description"))),i.a.createElement(d.e,{head:l.a.translate("package.section.example")},i.a.createElement("p",{className:"example_activeID"},"Active ID: ".concat(r.value)),i.a.createElement(o.a,{dataList:f,styleObj:v,activeID:r.value,onEntryClick:r.onChange})),i.a.createElement(d.e,{head:l.a.translate("package.section.sourceCode")},i.a.createElement("pre",{className:"page_pre"},"<BTBList \n        dataList={listData} \n        styleObj={styleObj} \n        activeID={activeID.value} \n        onEntryClick={activeID.onChange}/>"),i.a.createElement(d.a,{title:"listData"},i.a.createElement("pre",{className:"page_pre"},"const listData = [\n        { id: 'b1', title: 'Branch: 1', children: [\n                { id: 'l11', title: 'Leaf: 1-1' },\n                { id: 'b12', title: 'Branch: 1-2', children: [\n                        { id: 'l121', title: 'Leaf: 1-2-1' },\n                        { id: 'l122', title: 'Leaf: 1-2-2' }\n                ]},\n                { id: 'l13', title: 'Leaf: 1-3' }\n        ]},\n        { id: 'b2', title: 'Branch: 2', children: [\n                { id: 'l21', title: 'Leaf: 2-1' },\n                { id: 'l22', title: 'Leaf: 2-2' }\n        ]}\n]")),i.a.createElement(d.a,{title:"activeID & useState"},i.a.createElement("pre",{className:"page_pre"},"const activeID = useActiveState('l13');\n\nfunction useActiveState (defaultSate) {\n        const [value, setState] = useState(defaultSate);\n        return {\n                value,\n                onChange : (data) => {\n                        setState(data.id);\n                }\n        };\n}")),i.a.createElement(d.a,{title:"styleObj"},i.a.createElement("pre",{className:"page_pre"},"const _styleObj = {\n        'container_entry': {\n                cursor: 'pointer'\n        },\n        'entry-active': {\n                'background-color': '#b8dec9'\n        }\n}"))))}));t.default=function(){return i.a.createElement(h,null)}},47:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return u}));var n=a(0),i=a.n(n),c=function(e){return i.a.createElement("div",{className:["module-page",e.className].join(" ")},e.children)},r=a(50),o=a.n(r),l=a(36),s=function(e){return i.a.createElement("div",{className:"module-page-head"},i.a.createElement("div",{className:"head_title"},e.title||""),(e.linkList||[]).map((function(t){return i.a.createElement("div",{className:o()("head_btn","btn-".concat(t.id)),key:t.id,onClick:function(){var a;a=t,e.clickBtn&&e.clickBtn(a)}},i.a.createElement(l.FontAwesomeIcon,{icon:t.fa,fixedWidth:!0}))})))},d=function(e){return i.a.createElement("div",{className:["module-section",e.className].join(" ")},e.head?i.a.createElement("div",{className:"section_head"},e.head):[],i.a.createElement("div",{className:"section_body"},e.children))},u=function(e){return i.a.createElement("div",{className:"module-block"},e.title?i.a.createElement("div",{className:"block_title"},e.title):[],i.a.createElement("div",{className:"block_body"},e.children))},m=function(){return i.a.createElement("div",{className:"module-divider"},i.a.createElement("div",{className:"divider_line"}),i.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),i.a.createElement("div",{className:"divider_line"}))}},48:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},49:function(e,t,a){"use strict";var n=a(18),i={list:{name:"package.list.name",routename:n.a.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.a.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.a.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.1",updated:"2020-07-07",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name",routename:n.a.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.0.0",updated:"2020-07-08",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}}};t.a=i},58:function(e,t,a){"use strict";var n=a(49),i={version:n.a.list.version,updated:n.a.list.updated,description:n.a.list.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.list.link.github},{id:"npm",fa:["fab","npm"],url:n.a.list.link.npm}]};t.a=i}}]);