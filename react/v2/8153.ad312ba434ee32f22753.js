(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[8153],{6034:function(t,e,n){"use strict";n.d(e,{zx:function(){return d},hE:function(){return m}});var o=n(7294),r=n(4184),a=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s=function(t,e){var n;return e.forEach((function(e){n=Object.assign({},n,u(t,e))})),n},u=function(t,e){var n={};return"object"===i(t)&&Object.keys(t).find((function(o){if(o===e)return n=Object.assign({},t[o]),!0})),n},p=function(t){var e={};return Object.keys(t).forEach((function(n){e[n]={},Object.keys(t[n]).forEach((function(o){var r=o.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));e[n][r]=t[n][o]}))})),e},d=o.forwardRef((function(t,e){var n={styleObj:p(t.styleObj||{})};return o.createElement("div",{ref:e,className:a()("btb-react-button",t.className),style:s(n.styleObj,["btb-react-button"]),onClick:function(){void 0!==t.onClick&&t.onClick(t)}},t.prependNode?o.createElement("div",{className:"button_item item-prepend",style:s(n.styleObj,["button_item","item-prepend"]),onClick:function(){void 0!==t.onPrependClick&&t.onPrependClick(t)}},t.prependNode):[],o.createElement("div",{className:"button_item itme-core",style:s(n.styleObj,["button_item","itme-core"]),onClick:function(){void 0!==t.onCoreClick&&t.onCoreClick(t)}},t.children||"Button"),t.appendNode?o.createElement("div",{className:"button_item item-append",style:s(n.styleObj,["button_item","item-append"]),onClick:function(){void 0!==t.onAppendClick&&t.onAppendClick(t)}},t.appendNode):[])})),m=o.forwardRef((function(t,e){var n,r,i,l,u={state_activeID:(n=(0,o.useState)(undefined),r=c(n,2),i=r[0],l=r[1],{value:i,onChange:function(t){l(t)}}),direction:t.direction?t.direction:"horizontal",styleObj:p(t.styleObj||{}),slotObj:t.slotObj||{}};function d(e,n){u.state_activeID.onChange(e),void 0!==t.onEntryClick&&t.onEntryClick(e,n)}return(0,o.useEffect)((function(){u.state_activeID.onChange(t.activeID||t.defaultActiveID||"")}),[]),(0,o.useEffect)((function(){void 0!==t.activeID&&u.state_activeID.value!==t.activeID&&u.state_activeID.onChange(t.activeID)})),o.createElement("div",{ref:e,className:a()("btb-react-button-group",t.className,"group-".concat(u.direction)),style:s(u.styleObj,["btb-react-button-group","group-".concat(u.direction)])},t.buttonList?t.buttonList.map((function(t,e){return o.createElement("div",{className:a()("group_button","button-list_".concat(e),{"button-active":u.state_activeID.value==="list_".concat(e)}),style:s(u.styleObj,["group_button","button-list_".concat(e),u.state_activeID.value===e?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(e),onClick:function(){d("list_".concat(e),t)}},t)})):[],t.children?t.children.map((function(t,e){return o.createElement("div",{className:a()("group_button","button-children_".concat(e),{"button-active":u.state_activeID.value==="children_".concat(e)}),style:s(u.styleObj,["group_button","button-children_".concat(e)]),key:"".concat(Date.now(),"_children_").concat(e),onClick:function(){d("children_".concat(e),t)}},t)})):[],t.buttonList||t.children?[]:o.createElement("div",{className:"group_button button-empty",style:s(u.styleObj,["group_button","button-empty"])},"Empty"))}))},4989:function(t,e,n){"use strict";var o=n(5044),r={list:{name:"package.list.name",routename:o.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:o.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:o.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:o.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:o.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.message.name.timeline",routename:o.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:o.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:o.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};e.Z=r},7176:function(t,e,n){"use strict";var o=n(4989),r={version:o.Z.button.version,updated:o.Z.button.updated,descriptionButton:o.Z.button.description_button,descriptionGroup:o.Z.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:o.Z.button.link.github},{id:"npm",fa:["fab","npm"],url:o.Z.button.link.npm}]};e.Z=r},6520:function(t,e,n){"use strict";n.d(e,{gO:function(){return h},iz:function(){return k},T3:function(){return l},yG:function(){return d},$0:function(){return f}});var o=n(7294),r=n(4184),a=n.n(r);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=function(t){var e=t.className,n=t.children,r=c(t,["className","children"]);return o.createElement("div",i({className:a()("module-page",e)},r),n)},s=n(7814);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=function(t){var e=t.id,n=t.title,r=void 0===n?"":n,i=t.linkList,c=t.clickBtn,l=void 0===c?function(){}:c,d=p(t,["id","title","linkList","clickBtn"]);return o.createElement("div",u({id:e,className:"module-page-head"},d),o.createElement("div",{className:"head_title"},r||""),(i||[]).map((function(t){return o.createElement("div",{className:a()("head_btn","btn-".concat(e)),key:t.id,onClick:function(){l(t)}},o.createElement(s.G,{icon:t.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var f=function(t){var e=t.className,n=t.head,r=t.children,i=b(t,["className","head","children"]);return o.createElement("div",m({className:a()("module-section",e)},i),t.head?o.createElement("div",{className:"section_head"},n):[],o.createElement("div",{className:"section_body"},r))};function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var h=function(t){var e=t.title,n=t.children,r=t.className,i=g(t,["title","children","className"]);return o.createElement("div",v({className:a()("module-block",r)},i),e?o.createElement("div",{className:"block_title"},e):[],o.createElement("div",{className:"block_body"},n))};function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var k=function(t){var e=t.className,n=t.dividerProps;return o.createElement("div",y({className:a()("module-divider",e)},n),o.createElement("div",{className:"divider_line"}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement("div",{className:"divider_line"}))}},8153:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var o=n(7294),r=n(6593),a=n(6034),i=n(6742),c=n(2007),l=n(6520),s=n(7176),u=["List 1",o.createElement("div",{key:"list_2"},"List 2")],p=function(){(0,r.v9)((function(t){return{languageSetting:t.language.languageSetting}}));var t=function(t,e){console.log(t,e)};return o.createElement(l.T3,{id:"btb-pkg-button-example-group"},o.createElement(l.yG,{title:i.K.translate("package.button.example.group.title"),clickBtn:c.n,linkList:s.Z.linkList}),o.createElement(l.$0,{head:o.createElement(o.Fragment,null,"".concat(i.K.translate("package.version_colon")).concat(s.Z.version),o.createElement("br",null),"".concat(i.K.translate("package.release_colon")).concat(s.Z.updated))},o.createElement("p",null,i.K.translate("package.button.example.group.description"))),o.createElement(l.$0,{head:i.K.translate("package.section.example")},o.createElement(l.gO,{title:"Horizontal"},o.createElement(a.hE,{direction:"horizontal",buttonList:u,onEntryClick:t,activeID:"list_1"},"Children 1",o.createElement("div",{id:"text2"},"Children 2"))),o.createElement(l.gO,{title:"Vertical"},o.createElement(a.hE,{direction:"vertical",buttonList:u,onEntryClick:t,defaultActiveID:"children_1"},"Children 1",o.createElement("div",null,"Children 2")))),o.createElement(l.$0,{head:i.K.translate("package.section.sourceCode")},o.createElement("pre",{className:"page_pre"},'<BTBButtonGroup \n        direction="horizontal" \n        buttonList={buttonList} \n        onEntryClick={onEntryClick} \n        activeID="list_1"\n>\n        Children 1\n        <div>Children 2</div>\n</BTBButtonGroup>\n\n<BTBButtonGroup \n        direction="vertical" \n        buttonList={buttonList} \n        onEntryClick={onEntryClick} \n        defaultActiveID="children_1"\n>\n        Children 1\n        <div>Children 2</div>\n</BTBButtonGroup>'),o.createElement(l.gO,{title:"buttonList"},o.createElement("pre",{className:"page_pre"},"const buttonList = [\n        'List 1',\n        (<div key=\"list_2\">List 2</div>)\n]")),o.createElement(l.gO,{title:"onEntryClick"},o.createElement("pre",{className:"page_pre"},"const onEntryClick = (id, content) => {\n        console.log( id, content)\n}"))))},d=function(){return o.createElement(p,null)}},2007:function(t,e,n){"use strict";n.d(e,{n:function(){return o}});var o=function(t){window.open(t.url)}}}]);