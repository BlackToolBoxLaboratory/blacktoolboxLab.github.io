(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[658],{6034:function(e,t,n){"use strict";n.d(t,{zx:function(){return b},hE:function(){return m}});var o=n(7294),a=n(4184),r=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,a=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,u(e,t))})),n},u=function(e,t){var n={};return"object"===c(e)&&Object.keys(e).find((function(o){if(o===t)return n=Object.assign({},e[o]),!0})),n},p=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(o){var a=o.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][a]=e[n][o]}))})),t},b=o.forwardRef((function(e,t){var n={styleObj:p(e.styleObj||{})};return o.createElement("div",{ref:t,className:r()("btb-react-button",e.className),style:s(n.styleObj,["btb-react-button"]),onClick:function(){void 0!==e.onClick&&e.onClick(e)}},e.prependNode?o.createElement("div",{className:"button_item item-prepend",style:s(n.styleObj,["button_item","item-prepend"]),onClick:function(){void 0!==e.onPrependClick&&e.onPrependClick(e)}},e.prependNode):[],o.createElement("div",{className:"button_item itme-core",style:s(n.styleObj,["button_item","itme-core"]),onClick:function(){void 0!==e.onCoreClick&&e.onCoreClick(e)}},e.children||"Button"),e.appendNode?o.createElement("div",{className:"button_item item-append",style:s(n.styleObj,["button_item","item-append"]),onClick:function(){void 0!==e.onAppendClick&&e.onAppendClick(e)}},e.appendNode):[])})),m=o.forwardRef((function(e,t){var n,a,c,l,u={state_activeID:(n=(0,o.useState)(undefined),a=i(n,2),c=a[0],l=a[1],{value:c,onChange:function(e){l(e)}}),direction:e.direction?e.direction:"horizontal",styleObj:p(e.styleObj||{}),slotObj:e.slotObj||{}};function b(t,n){u.state_activeID.onChange(t),void 0!==e.onEntryClick&&e.onEntryClick(t,n)}return(0,o.useEffect)((function(){u.state_activeID.onChange(e.activeID||e.defaultActiveID||"")}),[]),(0,o.useEffect)((function(){void 0!==e.activeID&&u.state_activeID.value!==e.activeID&&u.state_activeID.onChange(e.activeID)})),o.createElement("div",{ref:t,className:r()("btb-react-button-group",e.className,"group-".concat(u.direction)),style:s(u.styleObj,["btb-react-button-group","group-".concat(u.direction)])},e.buttonList?e.buttonList.map((function(e,t){return o.createElement("div",{className:r()("group_button","button-list_".concat(t),{"button-active":u.state_activeID.value==="list_".concat(t)}),style:s(u.styleObj,["group_button","button-list_".concat(t),u.state_activeID.value===t?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(t),onClick:function(){b("list_".concat(t),e)}},e)})):[],e.children?e.children.map((function(e,t){return o.createElement("div",{className:r()("group_button","button-children_".concat(t),{"button-active":u.state_activeID.value==="children_".concat(t)}),style:s(u.styleObj,["group_button","button-children_".concat(t)]),key:"".concat(Date.now(),"_children_").concat(t),onClick:function(){b("children_".concat(t),e)}},e)})):[],e.buttonList||e.children?[]:o.createElement("div",{className:"group_button button-empty",style:s(u.styleObj,["group_button","button-empty"])},"Empty"))}))},4989:function(e,t,n){"use strict";var o=n(5044),a={list:{name:"package.list.name",routename:o.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:o.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:o.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:o.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:o.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.message.name.timeline",routename:o.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:o.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:o.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=a},7176:function(e,t,n){"use strict";var o=n(4989),a={version:o.Z.button.version,updated:o.Z.button.updated,descriptionButton:o.Z.button.description_button,descriptionGroup:o.Z.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:o.Z.button.link.github},{id:"npm",fa:["fab","npm"],url:o.Z.button.link.npm}]};t.Z=a},6520:function(e,t,n){"use strict";n.d(t,{gO:function(){return y},iz:function(){return k},T3:function(){return l},yG:function(){return b},$0:function(){return f}});var o=n(7294),a=n(4184),r=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=function(e){var t=e.className,n=e.children,a=i(e,["className","children"]);return o.createElement("div",c({className:r()("module-page",t)},a),n)},s=n(7814);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=function(e){var t=e.id,n=e.title,a=void 0===n?"":n,c=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,b=p(e,["id","title","linkList","clickBtn"]);return o.createElement("div",u({id:t,className:"module-page-head"},b),o.createElement("div",{className:"head_title"},a||""),(c||[]).map((function(e){return o.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},o.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.className,n=e.head,a=e.children,c=d(e,["className","head","children"]);return o.createElement("div",m({className:r()("module-section",t)},c),e.head?o.createElement("div",{className:"section_head"},n):[],o.createElement("div",{className:"section_body"},a))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=function(e){var t=e.title,n=e.children,a=e.className,c=v(e,["title","children","className"]);return o.createElement("div",g({className:r()("module-block",a)},c),t?o.createElement("div",{className:"block_title"},t):[],o.createElement("div",{className:"block_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var k=function(e){var t=e.className,n=e.dividerProps;return o.createElement("div",h({className:r()("module-divider",t)},n),o.createElement("div",{className:"divider_line"}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.createElement("div",{className:"divider_line"}))}},658:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(7294),a=n(6593),r=n(6034),c=n(6742),i=n(2007),l=n(6520),s=n(7176),u=["1","2","3"],p={button_item:{color:"blue"},"itme-core":{color:"red"}},b={"button-list_1":{color:"red"},"button-children_2":{color:"blue"}},m=function(){return(0,a.v9)((function(e){return{languageSetting:e.language.languageSetting}})),o.createElement(l.T3,{id:"btb-pkg-button-example-style"},o.createElement(l.yG,{title:c.K.translate("package.button.example.style.title"),clickBtn:i.n,linkList:s.Z.linkList}),o.createElement(l.$0,{head:o.createElement(o.Fragment,null,"".concat(c.K.translate("package.version_colon")).concat(s.Z.version),o.createElement("br",null),"".concat(c.K.translate("package.release_colon")).concat(s.Z.updated))},o.createElement("p",null,c.K.translate("package.button.example.style.description"))),o.createElement(l.$0,{head:c.K.translate("package.section.example")},o.createElement(l.gO,{title:c.K.translate("package.button.name.button")},o.createElement(r.zx,{prependNode:"<<",appendNode:">>",styleObj:p},"Click")),o.createElement(l.gO,{title:c.K.translate("package.button.name.group")},o.createElement(r.hE,{buttonList:u,styleObj:b},o.createElement("span",null,"4"),o.createElement("span",null,"5"),o.createElement("span",null,"6")))),o.createElement(l.$0,{head:c.K.translate("package.section.sourceCode")},o.createElement("pre",{className:"page_pre"},'<BTBButton \n        prependNode="<<" \n        appendNode=">>" \n        styleObj={styleObj_button}\n>\n        Click\n</BTBButton>\n\n<BTBButtonGroup \n        buttonList={buttonList} \n        styleObj={styleObj_group}\n>\n        <span>4</span>\n        <span>5</span>\n        <span>6</span>\n</BTBButtonGroup>'),o.createElement(l.gO,{title:"buttonList"},o.createElement("pre",{className:"page_pre"},"const buttonList = ['1', '2', '3'];")),o.createElement(l.gO,{title:"styleObj"},o.createElement("pre",{className:"page_pre"},"const styleObj_button = {\n        button_item: {\n                color: 'blue',\n        },\n        'itme-core': {\n                color: 'red',\n        },\n};\n\nconst styleObj_group = {\n        'button-list_1': {\n                color: 'red',\n        },\n        'button-children_2': {\n                color: 'red',\n        },\n};"))))},d=function(){return o.createElement(m,null)}},2007:function(e,t,n){"use strict";n.d(t,{n:function(){return o}});var o=function(e){window.open(e.url)}}}]);