(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[8745],{652:function(e,t,n){"use strict";var a=n(7294),i=n(4184),o=n.n(i);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,l(e,t))})),n},l=function(e,t){var n={};return"object"===r(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},s=a.forwardRef((function(e,t){var n,i,r=e.position,l=void 0===r?"left":r,s=e.align,p=void 0===s?"begin":s,m=e.nodeList,d=void 0===m?[]:m,u=e.typeObj,b=void 0===u?{}:u,f=(n=e.styleObj||{},i={},Object.keys(n).forEach((function(e){i[e]={},Object.keys(n[e]).forEach((function(t){var a=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));i[e][a]=n[e][t]}))})),i);return a.createElement("div",{ref:t,className:o()("btb-react-timeline",e.className,"timeline-position-".concat(l),"timeline-align-".concat(p)),style:c(f,["btb-react-timeline","timeline-position-".concat(l),"timeline-align-".concat(p)])},d.map((function(e,t){return a.createElement("div",{className:"timeline_node",style:c(f,["timeline_node"]),key:"".concat(Date.now(),"_").concat(t)},a.createElement("div",{className:"node_point",style:c(f,["node_point"])}),a.createElement("div",{className:"node_content",style:c(f,["node_content"])},void 0!==e.type&&"function"==typeof b[e.type]?b[e.type](e):e))})))}));t.Z=s},4989:function(e,t,n){"use strict";var a=n(5044),i={list:{name:"package.list.name",routename:a.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:a.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:a.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:a.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:a.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.message.name.timeline",routename:a.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:a.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:a.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=i},7839:function(e,t,n){"use strict";var a=n(4989),i={version:a.Z.timeline.version,updated:a.Z.timeline.updated,description:a.Z.timeline.description,linkList:[{id:"github",fa:["fab","github"],url:a.Z.timeline.link.github},{id:"npm",fa:["fab","npm"],url:a.Z.timeline.link.npm}]};t.Z=i},6520:function(e,t,n){"use strict";n.d(t,{gO:function(){return v},iz:function(){return O},T3:function(){return l},yG:function(){return d},$0:function(){return f}});var a=n(7294),i=n(4184),o=n.n(i);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=function(e){var t=e.className,n=e.children,i=c(e,["className","children"]);return a.createElement("div",r({className:o()("module-page",t)},i),n)},s=n(7814);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=function(e){var t=e.id,n=e.title,i=void 0===n?"":n,r=e.linkList,c=e.clickBtn,l=void 0===c?function(){}:c,d=m(e,["id","title","linkList","clickBtn"]);return a.createElement("div",p({id:t,className:"module-page-head"},d),a.createElement("div",{className:"head_title"},i||""),(r||[]).map((function(e){return a.createElement("div",{className:o()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},a.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=function(e){var t=e.className,n=e.head,i=e.children,r=b(e,["className","head","children"]);return a.createElement("div",u({className:o()("module-section",t)},r),e.head?a.createElement("div",{className:"section_head"},n):[],a.createElement("div",{className:"section_body"},i))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var v=function(e){var t=e.title,n=e.children,i=e.className,r=y(e,["title","children","className"]);return a.createElement("div",g({className:o()("module-block",i)},r),t?a.createElement("div",{className:"block_title"},t):[],a.createElement("div",{className:"block_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,n=e.dividerProps;return a.createElement("div",h({className:o()("module-divider",t)},n),a.createElement("div",{className:"divider_line"}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.createElement("div",{className:"divider_line"}))}},8745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),i=n(6593),o=n(652),r=n(6742),c=n(2007),l=n(6520),s=n(7839),p=["pure test event",{type:"customized",description:"description for type 1"}],m={customized:function(e){return a.createElement(a.Fragment,null,a.createElement("div",null,"Type: ".concat(e.type)),a.createElement("div",null,"Description: ".concat(e.description)))}},d={node_content:{border:"1px solid black",borderRadius:"0.5rem",padding:"0.5rem",whiteSpace:"nowrap",background:"white"}},u=function(){return(0,i.v9)((function(e){return{languageSetting:e.language.languageSetting}})),a.createElement(l.T3,{id:"btb-pkg-timeline-example-position"},a.createElement(l.yG,{title:r.K.translate("package.timeline.example.position.title"),clickBtn:c.n,linkList:s.Z.linkList}),a.createElement(l.$0,{head:a.createElement(a.Fragment,null,"".concat(r.K.translate("package.version_colon")).concat(s.Z.version),a.createElement("br",null),"".concat(r.K.translate("package.release_colon")).concat(s.Z.updated))},a.createElement("p",null,r.K.translate("package.timeline.example.position.description"))),a.createElement(l.$0,{head:r.K.translate("package.section.example")},a.createElement(l.gO,{title:r.K.translate("package.timeline.example.vertical")},a.createElement("div",{className:"align_vertical"},a.createElement(o.Z,{nodeList:p,typeObj:m,styleObj:d,position:"left"})),a.createElement(l.iz,null),a.createElement("div",{className:"align_vertical"},a.createElement(o.Z,{nodeList:p,typeObj:m,styleObj:d,position:"right"})),a.createElement(l.iz,null),a.createElement("div",{className:"align_vertical"},a.createElement(o.Z,{nodeList:p,typeObj:m,styleObj:d,position:"x"}))),a.createElement(l.gO,{title:r.K.translate("package.timeline.example.horizontal")},a.createElement("div",{className:"align_horizontal"},a.createElement(o.Z,{nodeList:p,typeObj:m,styleObj:d,position:"top"})),a.createElement(l.iz,{className:"align_horizontal"}),a.createElement("div",{className:"align_horizontal"},a.createElement(o.Z,{nodeList:p,typeObj:m,styleObj:d,position:"bottom"})),a.createElement(l.iz,{className:"align_horizontal"}),a.createElement(o.Z,{nodeList:p,typeObj:m,styleObj:d,position:"y"}))),a.createElement(l.$0,{head:r.K.translate("package.section.sourceCode")},a.createElement("pre",{className:"page_pre"},'<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="right" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="x" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="bottom" />\n\n<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="y" />\n'),a.createElement(l.gO,{title:"headData"},a.createElement("pre",{className:"page_pre"},"const nodeList = [\n        'pure test event',\n        {\n                type: 'customized',\n                description: 'description for type 1'\n        }\n];")),a.createElement(l.gO,{title:"headData"},a.createElement("pre",{className:"page_pre"},"const typeObj = {\n        'customized': (node)=>{\n                return (\n                        <>\n                                <div>{`Type: ${node.type}`}</div>\n                                <div>{`Description: ${node.description}`}</div>\n                        </>\n                )\n        }\n};")),a.createElement(l.gO,{title:"headData"},a.createElement("pre",{className:"page_pre"},"const styleObj = {\n        'node_content' : {\n                'border': '1px solid black',\n                'borderRadius': '0.5rem',\n                'padding': '0.5rem',\n                'whiteSpace': 'nowrap',\n                'background': 'white',\n        }\n};"))))},b=function(){return a.createElement(u,null)}},2007:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var a=function(e){window.open(e.url)}}}]);