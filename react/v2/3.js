(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{122:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(32),r=n(60),i=n(56),l=n(54),s=n(53),u=n(62),p=function(){return Object(c.c)((function(e){return{languageSetting:e.language.languageSetting}})),a.a.createElement(s.c,{id:"btb-pkg-button-example-button"},a.a.createElement(s.d,{title:i.a.translate("package.button.example.button.title"),clickBtn:l.a,linkList:u.a.linkList}),a.a.createElement(s.e,{head:a.a.createElement(a.a.Fragment,null,"".concat(i.a.translate("package.version_colon")).concat(u.a.version),a.a.createElement("br",null),"".concat(i.a.translate("package.release_colon")).concat(u.a.updated))},a.a.createElement("p",null,i.a.translate("package.button.example.button.description"))),a.a.createElement(s.e,{head:i.a.translate("package.section.example")},a.a.createElement(r.a,{prependNode:"<<",appendNode:a.a.createElement("span",null,">>"),onClick:function(){console.log("onClick")},onPrependClick:function(){console.log("onPrependClick")},onCoreClick:function(){console.log("onCoreClick")},onAppendClick:function(){console.log("onAppendClick")}},"Click Me!")),a.a.createElement(s.e,{head:i.a.translate("package.section.sourceCode")},a.a.createElement("pre",{className:"page_pre"},"<BTBButton \n        prependNode=\"<<\" \n        appendNode={<span>{'>>'}</span>} \n        onClick={onClick} \n        onPrependClick={onPrependClick} \n        onCoreClick={onCoreClick} \n        onAppendClick={onAppendClick}>\n        {'Click Me!'}\n</BTBButton>"),a.a.createElement(s.a,{title:"Click"},a.a.createElement("pre",{className:"page_pre"},"function onClick () {\n        console.log('onClick');\n};\n\nfunction onPrependClick () {\n        console.log('onPrependClick');\n};\n\nfunction onCoreClick () {\n        console.log('onCoreClick');\n};\n\nfunction onAppendClick () {\n        console.log('onAppendClick');\n};"))))};t.default=function(){return a.a.createElement(p,null)}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return v})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return y}));var o=n(0),a=n.n(o),c=n(8),r=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=function(e){var t=e.className,n=e.children,o=l(e,["className","children"]);return a.a.createElement("div",i({className:r()("module-page",t)},o),n)},u=n(41);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=function(e){var t=e.id,n=e.title,o=void 0===n?"":n,c=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,s=d(e,["id","title","linkList","clickBtn"]);return a.a.createElement("div",p({id:t,className:"module-page-head"},s),a.a.createElement("div",{className:"head_title"},o||""),(c||[]).map((function(e){return a.a.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},a.a.createElement(u.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=function(e){var t=e.className,n=e.head,o=e.children,c=f(e,["className","head","children"]);return a.a.createElement("div",m({className:r()("module-section",t)},c),e.head?a.a.createElement("div",{className:"section_head"},n):[],a.a.createElement("div",{className:"section_body"},o))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=function(e){var t=e.title,n=e.children,o=e.className,c=k(e,["title","children","className"]);return a.a.createElement("div",g({className:r()("module-block",o)},c),t?a.a.createElement("div",{className:"block_title"},t):[],a.a.createElement("div",{className:"block_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,n=e.dividerProps;return a.a.createElement("div",h({className:r()("module-divider",t)},n),a.a.createElement("div",{className:"divider_line"}),a.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),a.a.createElement("div",{className:"divider_line"}))}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e){window.open(e.url)}},55:function(e,t,n){"use strict";var o=n(19),a={list:{name:"package.list.name",routename:o.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:o.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:o.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:o.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:o.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:o.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:o.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=a},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o),c=n(8),r=n.n(c);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,a=!1,c=void 0;try{for(var r,i=e[Symbol.iterator]();!(o=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,c=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,p(e,t))})),n},p=function(e,t){var n={};return"object"===i(e)&&Object.keys(e).find((function(o){if(o===t)return n=Object.assign({},e[o]),!0})),n},d=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(o){var a=o.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][a]=e[n][o]}))})),t},b=a.a.forwardRef((function(e,t){var n={styleObj:d(e.styleObj||{})};return a.a.createElement("div",{ref:t,className:r()("btb-react-button",e.className),style:u(n.styleObj,["btb-react-button"]),onClick:function(){void 0!==e.onClick&&e.onClick(e)}},e.prependNode?a.a.createElement("div",{className:"button_item item-prepend",style:u(n.styleObj,["button_item","item-prepend"]),onClick:function(){void 0!==e.onPrependClick&&e.onPrependClick(e)}},e.prependNode):[],a.a.createElement("div",{className:"button_item itme-core",style:u(n.styleObj,["button_item","itme-core"]),onClick:function(){void 0!==e.onCoreClick&&e.onCoreClick(e)}},e.children||"Button"),e.appendNode?a.a.createElement("div",{className:"button_item item-append",style:u(n.styleObj,["button_item","item-append"]),onClick:function(){void 0!==e.onAppendClick&&e.onAppendClick(e)}},e.appendNode):[])})),m=a.a.forwardRef((function(e,t){var n,c,i,s,p={state_activeID:(n=Object(o.useState)(void 0),c=l(n,2),i=c[0],s=c[1],{value:i,onChange:function(e){s(e)}}),direction:e.direction?e.direction:"horizontal",styleObj:d(e.styleObj||{}),slotObj:e.slotObj||{}};function b(t,n){p.state_activeID.onChange(t),void 0!==e.onEntryClick&&e.onEntryClick(t,n)}return Object(o.useEffect)((function(){p.state_activeID.onChange(e.activeID||e.defaultActiveID||"")}),[]),Object(o.useEffect)((function(){void 0!==e.activeID&&p.state_activeID.value!==e.activeID&&p.state_activeID.onChange(e.activeID)})),a.a.createElement("div",{ref:t,className:r()("btb-react-button-group",e.className,"group-".concat(p.direction)),style:u(p.styleObj,["btb-react-button-group","group-".concat(p.direction)])},e.buttonList?e.buttonList.map((function(e,t){return a.a.createElement("div",{className:r()("group_button","button-list_".concat(t),{"button-active":p.state_activeID.value==="list_".concat(t)}),style:u(p.styleObj,["group_button","button-list_".concat(t),p.state_activeID.value===t?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(t),onClick:function(){b("list_".concat(t),e)}},e)})):[],e.children?e.children.map((function(e,t){return a.a.createElement("div",{className:r()("group_button","button-children_".concat(t),{"button-active":p.state_activeID.value==="children_".concat(t)}),style:u(p.styleObj,["group_button","button-children_".concat(t)]),key:"".concat(Date.now(),"_children_").concat(t),onClick:function(){b("children_".concat(t),e)}},e)})):[],e.buttonList||e.children?[]:a.a.createElement("div",{className:"group_button button-empty",style:u(p.styleObj,["group_button","button-empty"])},"Empty"))}))},62:function(e,t,n){"use strict";var o=n(55),a={version:o.a.button.version,updated:o.a.button.updated,descriptionButton:o.a.button.description_button,descriptionGroup:o.a.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:o.a.button.link.github},{id:"npm",fa:["fab","npm"],url:o.a.button.link.npm}]};t.a=a}}]);