(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(32),r=a(58),i=a(57),l=a(56),s=a(54),d=a(53),m=a(64),u=[{id:"notice",title:"<div> .btb-react-notice .notice-type-{type}"}],p=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],b=[{title:"type",type:"package.paramType.string",default:"''",notice:"package.message.property.type"},{title:"context",type:"package.paramType.string",default:"''",notice:"package.message.property.context"}],f={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return l.a.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":l.a.translate(e[t.id])},"td-notice":function(e,t){return l.a.translate(e[t.id])}},y=function(){return Object(c.c)((function(e){return{languageSetting:e.language.languageSetting}})),o.a.createElement(d.c,{id:"btb-pkg-message-basic-notice"},o.a.createElement(d.d,{title:l.a.translate("package.message.name.notice"),clickBtn:s.a,linkList:m.a.linkList}),o.a.createElement(d.e,{head:o.a.createElement(o.a.Fragment,null,"".concat(l.a.translate("package.version_colon")).concat(m.a.version),o.a.createElement("br",null),"".concat(l.a.translate("package.release_colon")).concat(m.a.updated))},o.a.createElement("p",null,l.a.translate(m.a.descriptionNotice))),o.a.createElement(d.e,{head:l.a.translate("package.section.installation")},o.a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-message\n\nimport { Notice } from '@blacktoolbox/react-message';\nimport '@blacktoolbox/react-message/lib/index.css'")),o.a.createElement(d.e,{head:l.a.translate("package.section.render")},o.a.createElement("pre",{className:"page_pre"},'<Notice\n        type = " String ", \n        context = " String || Node "\n>\n        {message\'s content}\n</MessageProvider>')),o.a.createElement(d.e,{head:l.a.translate("package.section.parameters")},o.a.createElement(i.a,{className:"page_table",mode:"list",headData:p,bodyData:b,slotObj:f})),o.a.createElement(d.e,{head:l.a.translate("package.section.nodeTree")},o.a.createElement(r.a,{className:"page_node_tree",dataList:u})))};t.default=function(){return o.a.createElement(y,null)}},53:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return y})),a.d(t,"b",(function(){return k})),a.d(t,"a",(function(){return O}));var n=a(0),o=a.n(n),c=a(8),r=a.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=function(e){var t=e.className,a=e.children,n=l(e,["className","children"]);return o.a.createElement("div",i({className:r()("module-page",t)},n),a)},d=a(41);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=function(e){var t=e.id,a=e.title,n=void 0===a?"":a,c=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,s=u(e,["id","title","linkList","clickBtn"]);return o.a.createElement("div",m({id:t,className:"module-page-head"},s),o.a.createElement("div",{className:"head_title"},n||""),(c||[]).map((function(e){return o.a.createElement("div",{className:r()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},o.a.createElement(d.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var y=function(e){var t=e.className,a=e.head,n=e.children,c=f(e,["className","head","children"]);return o.a.createElement("div",b({className:r()("module-section",t)},c),e.head?o.a.createElement("div",{className:"section_head"},a):[],o.a.createElement("div",{className:"section_body"},n))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var O=function(e){var t=e.title,a=e.children,n=e.className,c=h(e,["title","children","className"]);return o.a.createElement("div",g({className:r()("module-block",n)},c),t?o.a.createElement("div",{className:"block_title"},t):[],o.a.createElement("div",{className:"block_body"},a))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k=function(e){var t=e.className,a=e.dividerProps;return o.a.createElement("div",v({className:r()("module-divider",t)},a),o.a.createElement("div",{className:"divider_line"}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement("div",{className:"divider_line"}))}},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},55:function(e,t,a){"use strict";var n=a(19),o={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:n.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=o},57:function(e,t,a){"use strict";var n=a(0),o=a.n(n),c=a(8),r=a.n(c);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,s(e,t))})),a},s=function(e,t){var a={};return"object"===i(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},d=o.a.createContext(),m=o.a.createContext(),u=function(){var e=Object(n.useContext)(d);return o.a.createElement("thead",{className:"list_head",style:l(e.styleObj,["list_head"])},e.headData.length?o.a.createElement("tr",{className:"head_tr",style:l(e.styleObj,["head_tr"])},e.headData.map((function(t){return o.a.createElement("th",{className:r()("tr_th","th-".concat(t.id)),key:t.id,style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},p=function(){var e=Object(n.useContext)(d);return o.a.createElement("tbody",{className:"list_body",style:l(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return o.a.createElement("tr",{className:r()("body_tr","tr-".concat(a)),style:l(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return o.a.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},b=function(){var e=Object(n.useContext)(d);return o.a.createElement("table",{className:"table_list",style:l(e.styleObj,["table_list"])},o.a.createElement(u,null),o.a.createElement(p,null))},f=function(){var e=Object(n.useContext)(d);return o.a.createElement(o.a.Fragment,null,e.bodyData.map((function(t,a){return o.a.createElement("table",{className:r()("table_info","info-".concat(a)),style:l(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},o.a.createElement("tbody",{className:"info_body",style:l(e.styleObj,["info_body"])},e.headData.map((function(a){return o.a.createElement("tr",{className:r()("body_tr","tr-".concat(a.id)),style:l(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},o.a.createElement("th",{className:r()("tr_th","th-".concat(a.id)),style:l(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),o.a.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},y=function(){var e=Object(n.useContext)(d);return o.a.createElement("table",{className:"table_compare",style:l(e.styleObj,["table_compare"])},o.a.createElement("tbody",{className:"compare_body",style:l(e.styleObj,["compare_body"])},e.headData.map((function(t){return o.a.createElement("tr",{className:r()("body_tr","tr-".concat(t.id)),style:l(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},o.a.createElement("th",{className:r()("tr_th","th-".concat(t.id)),style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,n){return o.a.createElement("td",{className:r()("tr_td","td-".concat(t.id),"td-".concat(n)),style:l(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},g=o.a.forwardRef((function(e,t){var a,n,c={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},n={},Object.keys(a).forEach((function(e){n[e]={},Object.keys(a[e]).forEach((function(t){var o=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));n[e][o]=a[e][t]}))})),n),slotObj:e.slotObj||{}},i={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return o.a.createElement(d.Provider,{value:c},o.a.createElement(m.Provider,{value:i},o.a.createElement("div",{ref:t,className:r()("btb-react-table",e.className),style:l(c.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return o.a.createElement(f,null);case"compare":return o.a.createElement(y,null);case"list":default:return o.a.createElement(b,null)}}())))}));t.a=g},64:function(e,t,a){"use strict";var n=a(55),o={version:n.a.message.version,updated:n.a.message.updated,descriptionMessage:n.a.message.description_message,descriptionNotice:n.a.message.description_notice,linkList:[{id:"github",fa:["fab","github"],url:n.a.message.link.github},{id:"npm",fa:["fab","npm"],url:n.a.message.link.npm}]};t.a=o}}]);