(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),i=a(58),c=a(56),l=a(54),s=a(53),u=a(63);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var m=[{id:"b1",title:"Branch: 1",children:[{id:"l11",title:"Leaf: 1-1"},{id:"b12",title:"Branch: 1-2",children:[{id:"l121",title:"Leaf: 1-2-1"},{id:"l122",title:"Leaf: 1-2-2"}]},{id:"l13",title:"Leaf: 1-3"}]},{id:"b2",title:"Branch: 2",children:[{id:"l21",title:"Leaf: 2-1"},{id:"l22",title:"Leaf: 2-2"}]}],b={container_entry:{cursor:"pointer"},"entry-active":{"background-color":"#00d8ff"}};var f=function(){Object(o.c)((function(e){return{languageSetting:e.language.languageSetting}}));var e,t,a,d,f=(e="l13",t=p(Object(n.useState)(e),2),a=t[0],d=t[1],{value:a,onChange:function(e){d(e.id)}});return r.a.createElement(s.c,{id:"btb-pkg-list-example-style"},r.a.createElement(s.d,{title:c.a.translate("package.list.example.style.title"),clickBtn:l.a,linkList:u.a.linkList}),r.a.createElement(s.e,{head:r.a.createElement(r.a.Fragment,null,"".concat(c.a.translate("package.version_colon")).concat(u.a.version),r.a.createElement("br",null),"".concat(c.a.translate("package.release_colon")).concat(u.a.updated))},r.a.createElement("p",null,c.a.translate("package.list.example.style.description"))),r.a.createElement(s.e,{head:c.a.translate("package.section.example")},r.a.createElement("p",{className:"example_activeID"},"Active ID: ".concat(f.value)),r.a.createElement(i.a,{dataList:m,styleObj:b,activeID:f.value,onEntryClick:f.onChange})),r.a.createElement(s.e,{head:c.a.translate("package.section.sourceCode")},r.a.createElement("pre",{className:"page_pre"},"<BTBList \n        dataList={listData} \n        styleObj={styleObj} \n        activeID={activeID.value} \n        onEntryClick={activeID.onChange}/>"),r.a.createElement(s.a,{title:"listData"},r.a.createElement("pre",{className:"page_pre"},"const listData = [\n        { id: 'b1', title: 'Branch: 1', children: [\n                { id: 'l11', title: 'Leaf: 1-1' },\n                { id: 'b12', title: 'Branch: 1-2', children: [\n                        { id: 'l121', title: 'Leaf: 1-2-1' },\n                        { id: 'l122', title: 'Leaf: 1-2-2' }\n                ]},\n                { id: 'l13', title: 'Leaf: 1-3' }\n        ]},\n        { id: 'b2', title: 'Branch: 2', children: [\n                { id: 'l21', title: 'Leaf: 2-1' },\n                { id: 'l22', title: 'Leaf: 2-2' }\n        ]}\n]")),r.a.createElement(s.a,{title:"activeID & useState"},r.a.createElement("pre",{className:"page_pre"},"const activeID = useActiveState('l13');\n\nfunction useActiveState (defaultSate) {\n        const [value, setState] = useState(defaultSate);\n        return {\n                value,\n                onChange : (data) => {\n                        setState(data.id);\n                }\n        };\n}")),r.a.createElement(s.a,{title:"styleObj"},r.a.createElement("pre",{className:"page_pre"},"const _styleObj = {\n        'container_entry': {\n                cursor: 'pointer'\n        },\n        'entry-active': {\n                'background-color': '#b8dec9'\n        }\n}"))))};t.default=function(){return r.a.createElement(f,null)}},53:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return v})),a.d(t,"b",(function(){return O})),a.d(t,"a",(function(){return y}));var n=a(0),r=a.n(n),o=a(8),i=a.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=function(e){var t=e.className,a=e.children,n=l(e,["className","children"]);return r.a.createElement("div",c({className:i()("module-page",t)},n),a)},u=a(41);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=function(e){var t=e.id,a=e.title,n=void 0===a?"":a,o=e.linkList,c=e.clickBtn,l=void 0===c?function(){}:c,s=d(e,["id","title","linkList","clickBtn"]);return r.a.createElement("div",p({id:t,className:"module-page-head"},s),r.a.createElement("div",{className:"head_title"},n||""),(o||[]).map((function(e){return r.a.createElement("div",{className:i()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},r.a.createElement(u.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var v=function(e){var t=e.className,a=e.head,n=e.children,o=f(e,["className","head","children"]);return r.a.createElement("div",b({className:i()("module-section",t)},o),e.head?r.a.createElement("div",{className:"section_head"},a):[],r.a.createElement("div",{className:"section_body"},n))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=function(e){var t=e.title,a=e.children,n=e.className,o=h(e,["title","children","className"]);return r.a.createElement("div",g({className:i()("module-block",n)},o),t?r.a.createElement("div",{className:"block_title"},t):[],r.a.createElement("div",{className:"block_body"},a))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,a=e.dividerProps;return r.a.createElement("div",k({className:i()("module-divider",t)},a),r.a.createElement("div",{className:"divider_line"}),r.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),r.a.createElement("div",{className:"divider_line"}))}},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},55:function(e,t,a){"use strict";var n=a(19),r={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:n.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=r},63:function(e,t,a){"use strict";var n=a(55),r={version:n.a.list.version,updated:n.a.list.updated,description:n.a.list.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.list.link.github},{id:"npm",fa:["fab","npm"],url:n.a.list.link.npm}]};t.a=r}}]);