(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(32),c=n(60),i=n(56),l=n(54),s=n(53),u=n(62);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m=function(e){var t=p(Object(a.useState)(e),2),n=t[0],o=t[1];return{activeID:n,onEntryClick:function(e,t){console.log("page",e,t),o(e)},onPrevClick:function(e){console.log("prev",e);var t=p(n.split("_"),2),a=t[0],r=t[1],c=Math.max(parseInt(r,10)-1,0);o("".concat(a,"_").concat(c))},onNextClick:function(e){console.log("next",e);var t=p(n.split("_"),2),a=t[0],r=t[1],c=Math.min(parseInt(r,10)+1,9);o("".concat(a,"_").concat(c))}}},b=function(){Object(r.c)((function(e){return{languageSetting:e.language.languageSetting}}));var e=m("list_0");return o.a.createElement(s.c,{id:"btb-pkg-button-example-pagination"},o.a.createElement(s.d,{title:i.a.translate("package.button.example.pagination.title"),clickBtn:l.a,linkList:u.a.linkList}),o.a.createElement(s.e,{head:o.a.createElement(o.a.Fragment,null,"".concat(i.a.translate("package.version_colon")).concat(u.a.version),o.a.createElement("br",null),"".concat(i.a.translate("package.release_colon")).concat(u.a.updated))},o.a.createElement("p",null,i.a.translate("package.button.example.pagination.description"))),o.a.createElement(s.e,{head:i.a.translate("package.section.example")},o.a.createElement(c.a,{className:"pagination_tools",prependNode:"<< Prev",appendNode:"Next >>",onPrependClick:e.onPrevClick,onAppendClick:e.onNextClick},o.a.createElement(c.b,{className:"pagination_pages",buttonList:["1","2","3","4","5","6","7","8","9"],activeID:e.activeID,onEntryClick:e.onEntryClick}))),o.a.createElement(s.e,{head:i.a.translate("package.section.sourceCode")},o.a.createElement("pre",{className:"page_pre"},'<BTBButton\n        className="pagination_tools"\n        prependNode="<< Prev"\n        appendNode="Next >>"\n        onPrependClick={statePage.onPrevClick}\n        onAppendClick={statePage.onNextClick}\n>\n        <BTBButtonGroup\n                className="pagination_pages"\n                buttonList={buttonList}\n                activeID={statePage.activeID}\n                onEntryClick={statePage.onEntryClick}\n        />\n</BTBButton>'),o.a.createElement(s.a,{title:"useState"},o.a.createElement("pre",{className:"page_pre"},"statePage = usePageState('list_0');\n\nconst usePageState = (dafaultPageID) => {\n        const [activeID, updatePageID] = useState(dafaultPageID);\n        return {\n                activeID,\n                onEntryClick: (id, content) => {\n                        updatePageID(id);\n                },\n                onPrevClick: (event) => {\n                        const minPage = 0;\n                        const [type, index] = activeID.split('_');\n                        const page = Math.max(parseInt(index, 10) - 1, minPage);\n                        updatePageID(`${type}_${page}`);\n                },\n                onNextClick: (event) => {\n                        const maxPage = 9;\n                        const [type, index] = activeID.split('_');\n                        const page = Math.min(parseInt(index, 10) + 1, maxPage);\n                        updatePageID(`${type}_${page}`);\n                },\n        };\n};")),o.a.createElement(s.a,{title:"style: LESS"},o.a.createElement("pre",{className:"page_pre"},".pagination_tools {\n        .button_item{\n                &.itme-core {\n                        border-left: 1px solid #808080;\n                        border-right: 1px solid #808080;\n                        padding: 0;\n                }\n        }\n}\n.pagination_pages {\n        border: none;\n        border-radius: unset;\n        .group_button {\n                &:first-child,\n                &:last-child {\n                        padding: 0.25rem;\n                }\n                &.button-active {\n                        background-color: #cdcdcd;\n                }\n        }\n}"))))};t.default=function(){return o.a.createElement(b,null)}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return h}));var a=n(0),o=n.n(a),r=n(8),c=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=function(e){var t=e.className,n=e.children,a=l(e,["className","children"]);return o.a.createElement("div",i({className:c()("module-page",t)},a),n)},u=n(41);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=function(e){var t=e.id,n=e.title,a=void 0===n?"":n,r=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,s=d(e,["id","title","linkList","clickBtn"]);return o.a.createElement("div",p({id:t,className:"module-page-head"},s),o.a.createElement("div",{className:"head_title"},a||""),(r||[]).map((function(e){return o.a.createElement("div",{className:c()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},o.a.createElement(u.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=function(e){var t=e.className,n=e.head,a=e.children,r=f(e,["className","head","children"]);return o.a.createElement("div",b({className:c()("module-section",t)},r),e.head?o.a.createElement("div",{className:"section_head"},n):[],o.a.createElement("div",{className:"section_body"},a))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=function(e){var t=e.title,n=e.children,a=e.className,r=y(e,["title","children","className"]);return o.a.createElement("div",v({className:c()("module-block",a)},r),t?o.a.createElement("div",{className:"block_title"},t):[],o.a.createElement("div",{className:"block_body"},n))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=function(e){var t=e.className,n=e.dividerProps;return o.a.createElement("div",k({className:c()("module-divider",t)},n),o.a.createElement("div",{className:"divider_line"}),o.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(u.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement("div",{className:"divider_line"}))}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){window.open(e.url)}},55:function(e,t,n){"use strict";var a=n(19),o={list:{name:"package.list.name",routename:a.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:a.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:a.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:a.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:a.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.0",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:a.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:a.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=o},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a),r=n(8),c=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,p(e,t))})),n},p=function(e,t){var n={};return"object"===i(e)&&Object.keys(e).find((function(a){if(a===t)return n=Object.assign({},e[a]),!0})),n},d=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(a){var o=a.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][o]=e[n][a]}))})),t},m=o.a.forwardRef((function(e,t){var n={styleObj:d(e.styleObj||{})};return o.a.createElement("div",{ref:t,className:c()("btb-react-button",e.className),style:u(n.styleObj,["btb-react-button"]),onClick:function(){void 0!==e.onClick&&e.onClick(e)}},e.prependNode?o.a.createElement("div",{className:"button_item item-prepend",style:u(n.styleObj,["button_item","item-prepend"]),onClick:function(){void 0!==e.onPrependClick&&e.onPrependClick(e)}},e.prependNode):[],o.a.createElement("div",{className:"button_item itme-core",style:u(n.styleObj,["button_item","itme-core"]),onClick:function(){void 0!==e.onCoreClick&&e.onCoreClick(e)}},e.children||"Button"),e.appendNode?o.a.createElement("div",{className:"button_item item-append",style:u(n.styleObj,["button_item","item-append"]),onClick:function(){void 0!==e.onAppendClick&&e.onAppendClick(e)}},e.appendNode):[])})),b=o.a.forwardRef((function(e,t){var n,r,i,s,p={state_activeID:(n=Object(a.useState)(void 0),r=l(n,2),i=r[0],s=r[1],{value:i,onChange:function(e){s(e)}}),direction:e.direction?e.direction:"horizontal",styleObj:d(e.styleObj||{}),slotObj:e.slotObj||{}};function m(t,n){p.state_activeID.onChange(t),void 0!==e.onEntryClick&&e.onEntryClick(t,n)}return Object(a.useEffect)((function(){p.state_activeID.onChange(e.activeID||e.defaultActiveID||"")}),[]),Object(a.useEffect)((function(){void 0!==e.activeID&&p.state_activeID.value!==e.activeID&&p.state_activeID.onChange(e.activeID)})),o.a.createElement("div",{ref:t,className:c()("btb-react-button-group",e.className,"group-".concat(p.direction)),style:u(p.styleObj,["btb-react-button-group","group-".concat(p.direction)])},e.buttonList?e.buttonList.map((function(e,t){return o.a.createElement("div",{className:c()("group_button","button-list_".concat(t),{"button-active":p.state_activeID.value==="list_".concat(t)}),style:u(p.styleObj,["group_button","button-list_".concat(t),p.state_activeID.value===t?"button-active":""]),key:"".concat(Date.now(),"_list_").concat(t),onClick:function(){m("list_".concat(t),e)}},e)})):[],e.children?e.children.map((function(e,t){return o.a.createElement("div",{className:c()("group_button","button-children_".concat(t),{"button-active":p.state_activeID.value==="children_".concat(t)}),style:u(p.styleObj,["group_button","button-children_".concat(t)]),key:"".concat(Date.now(),"_children_").concat(t),onClick:function(){m("children_".concat(t),e)}},e)})):[],e.buttonList||e.children?[]:o.a.createElement("div",{className:"group_button button-empty",style:u(p.styleObj,["group_button","button-empty"])},"Empty"))}))},62:function(e,t,n){"use strict";var a=n(55),o={version:a.a.button.version,updated:a.a.button.updated,descriptionButton:a.a.button.description_button,descriptionGroup:a.a.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:a.a.button.link.github},{id:"npm",fa:["fab","npm"],url:a.a.button.link.npm}]};t.a=o}}]);