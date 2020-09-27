(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{120:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(32),r=a(58),i=a(57),l=a(56),s=a(54),d=a(53),p=a(62),u=[{id:"button",title:"<div> .btb-react-button",children:[{id:"prepend",title:"<div> .button_item .item-prepend"},{id:"core",title:"<div> .button_item .item-core"},{id:"append",title:"<div> .button_item .item-append"}]}],b=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],m=[{title:"prependNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.button.property.prependNode"},{title:"appendNode",type:"package.paramType.string||package.paramType.node",default:"undefined",notice:"package.button.property.appendNode"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.button.property.styleObj"},{title:"onClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onButtonClick"},{title:"onPrependClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onPrependClick"},{title:"onCoreClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onCoreClick"},{title:"onAppendClick",type:"package.paramType.function",default:"undefined",notice:"package.button.property.onAppendClick"},{title:"ref",type:"useRef",default:"undefined",notice:"package.button.property.ref"}],f={"td-type":function(t,e){var a=t[e.id].split("||");return a.length>0?a.map((function(t){return l.a.translate(t)})).join(" || "):"useRef"===t[e.id]?"useRef":l.a.translate(t[e.id])},"td-notice":function(t,e){return l.a.translate(t[e.id])}},y=function(){return Object(c.c)((function(t){return{languageSetting:t.language.languageSetting}})),o.a.createElement(d.c,{id:"btb-pkg-button-basic-button"},o.a.createElement(d.d,{title:l.a.translate("package.button.name.button"),clickBtn:s.a,linkList:p.a.linkList}),o.a.createElement(d.e,{head:o.a.createElement(o.a.Fragment,null,"".concat(l.a.translate("package.version_colon")).concat(p.a.version),o.a.createElement("br",null),"".concat(l.a.translate("package.release_colon")).concat(p.a.updated))},o.a.createElement("p",null,l.a.translate(p.a.descriptionButton))),o.a.createElement(d.e,{head:l.a.translate("package.section.installation")},o.a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-button\n\nimport { Button } from '@blacktoolbox/react-button'\nimport '@blacktoolbox/react-button/lib/index.css'")),o.a.createElement(d.e,{head:l.a.translate("package.section.render")},o.a.createElement("pre",{className:"page_pre"},'<BTBButton \n        prependNode=" String || Node " \n        appendNode=" String || Node "\n        styleObj=" Object " \n        onClick=" function(props){} " \n        onPrependClick=" function(props){} "\n        onCoreClick=" function(props){} "\n        onAppendClick=" function(props){} ">\n        {button\'s content}\n</BTBButton>')),o.a.createElement(d.e,{head:l.a.translate("package.section.parameters")},o.a.createElement(i.a,{className:"page_table",mode:"list",headData:b,bodyData:m,slotObj:f}),o.a.createElement(d.a,{title:"styleObj"},o.a.createElement("p",null,l.a.translate("package.button.parameters.styleObj")),o.a.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),o.a.createElement(d.e,{head:l.a.translate("package.section.nodeTree")},o.a.createElement(r.a,{className:"page_node_tree",dataList:u})))};e.default=function(){return o.a.createElement(y,null)}},53:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return b})),a.d(e,"e",(function(){return y})),a.d(e,"b",(function(){return v})),a.d(e,"a",(function(){return k}));var n=a(0),o=a.n(n),c=a(8),r=a.n(c);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=function(t){var e=t.className,a=t.children,n=l(t,["className","children"]);return o.a.createElement("div",i({className:r()("module-page",e)},n),a)},d=a(41);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var b=function(t){var e=t.id,a=t.title,n=void 0===a?"":a,c=t.linkList,i=t.clickBtn,l=void 0===i?function(){}:i,s=u(t,["id","title","linkList","clickBtn"]);return o.a.createElement("div",p({id:e,className:"module-page-head"},s),o.a.createElement("div",{className:"head_title"},n||""),(c||[]).map((function(t){return o.a.createElement("div",{className:r()("head_btn","btn-".concat(e)),key:t.id,onClick:function(){l(t)}},o.a.createElement(d.FontAwesomeIcon,{icon:t.fa,fixedWidth:!0}))})))};function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var y=function(t){var e=t.className,a=t.head,n=t.children,c=f(t,["className","head","children"]);return o.a.createElement("div",m({className:r()("module-section",e)},c),t.head?o.a.createElement("div",{className:"section_head"},a):[],o.a.createElement("div",{className:"section_body"},n))};function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function h(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var k=function(t){var e=t.title,a=t.children,n=t.className,c=h(t,["title","children","className"]);return o.a.createElement("div",g({className:r()("module-block",n)},c),e?o.a.createElement("div",{className:"block_title"},e):[],o.a.createElement("div",{className:"block_body"},a))};function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var v=function(t){var e=t.className,a=t.dividerProps;return o.a.createElement("div",O({className:r()("module-divider",e)},a),o.a.createElement("div",{className:"divider_line"}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement("div",{className:"divider_line"}))}},54:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(t){window.open(t.url)}},55:function(t,e,a){"use strict";var n=a(19),o={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:n.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};e.a=o},57:function(t,e,a){"use strict";var n=a(0),o=a.n(n),c=a(8),r=a.n(c);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,s(t,e))})),a},s=function(t,e){var a={};return"object"===i(t)&&Object.keys(t).find((function(n){if(n===e)return a=Object.assign({},t[n]),!0})),a},d=o.a.createContext(),p=o.a.createContext(),u=function(){var t=Object(n.useContext)(d);return o.a.createElement("thead",{className:"list_head",style:l(t.styleObj,["list_head"])},t.headData.length?o.a.createElement("tr",{className:"head_tr",style:l(t.styleObj,["head_tr"])},t.headData.map((function(e){return o.a.createElement("th",{className:r()("tr_th","th-".concat(e.id)),key:e.id,style:l(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name)}))):[])},b=function(){var t=Object(n.useContext)(d);return o.a.createElement("tbody",{className:"list_body",style:l(t.styleObj,["list_body"])},t.bodyData.map((function(e,a){return o.a.createElement("tr",{className:r()("body_tr","tr-".concat(a)),style:l(t.styleObj,["body_tr","tr-".concat(a)]),key:a},t.headData.map((function(a){return o.a.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(t.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},t.slotObj["td-".concat(a.id)]?"function"==typeof t.slotObj["td-".concat(a.id)]?t.slotObj["td-".concat(a.id)](e,a):t.slotObj["td-".concat(a.id)]:e[a.id])})))})))},m=function(){var t=Object(n.useContext)(d);return o.a.createElement("table",{className:"table_list",style:l(t.styleObj,["table_list"])},o.a.createElement(u,null),o.a.createElement(b,null))},f=function(){var t=Object(n.useContext)(d);return o.a.createElement(o.a.Fragment,null,t.bodyData.map((function(e,a){return o.a.createElement("table",{className:r()("table_info","info-".concat(a)),style:l(t.styleObj,["table_info","info-".concat(a)]),key:"".concat(e.id,"_").concat(a)},o.a.createElement("tbody",{className:"info_body",style:l(t.styleObj,["info_body"])},t.headData.map((function(a){return o.a.createElement("tr",{className:r()("body_tr","tr-".concat(a.id)),style:l(t.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},o.a.createElement("th",{className:r()("tr_th","th-".concat(a.id)),style:l(t.styleObj,["tr_th","th-".concat(a.id)])},t.slotObj["th-".concat(a.id)]?"function"==typeof t.slotObj["th-".concat(a.id)]?t.slotObj["th-".concat(a.id)](a):t.slotObj["th-".concat(a.id)]:a.name),o.a.createElement("td",{className:r()("tr_td","td-".concat(a.id)),style:l(t.styleObj,["tr_td","td-".concat(a.id)])},t.slotObj["td-".concat(a.id)]?"function"==typeof t.slotObj["td-".concat(a.id)]?t.slotObj["td-".concat(a.id)](e,a):t.slotObj["td-".concat(a.id)]:e[a.id]))}))))})))},y=function(){var t=Object(n.useContext)(d);return o.a.createElement("table",{className:"table_compare",style:l(t.styleObj,["table_compare"])},o.a.createElement("tbody",{className:"compare_body",style:l(t.styleObj,["compare_body"])},t.headData.map((function(e){return o.a.createElement("tr",{className:r()("body_tr","tr-".concat(e.id)),style:l(t.styleObj,["body_tr","tr-".concat(e.id)]),key:e.id},o.a.createElement("th",{className:r()("tr_th","th-".concat(e.id)),style:l(t.styleObj,["tr_th","th-".concat(e.id)])},t.slotObj["th-".concat(e.id)]?"function"==typeof t.slotObj["th-".concat(e.id)]?t.slotObj["th-".concat(e.id)](e):t.slotObj["th-".concat(e.id)]:e.name),t.bodyData.map((function(a,n){return o.a.createElement("td",{className:r()("tr_td","td-".concat(e.id),"td-".concat(n)),style:l(t.styleObj,["tr_td","td-".concat(e.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},t.slotObj["td-".concat(e.id)]?"function"==typeof t.slotObj["td-".concat(e.id)]?t.slotObj["td-".concat(e.id)](a,e):t.slotObj["td-".concat(e.id)]:a[e.id])})))}))))},g=o.a.forwardRef((function(t,e){var a,n,c={headData:t.headData||[],bodyData:t.bodyData||[],styleObj:(a=t.styleObj||{},n={},Object.keys(a).forEach((function(t){n[t]={},Object.keys(a[t]).forEach((function(e){var o=e.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}));n[t][o]=a[t][e]}))})),n),slotObj:t.slotObj||{}},i={clickData:function(e){t.onDataClick&&t.onDataClick(e)}};return o.a.createElement(d.Provider,{value:c},o.a.createElement(p.Provider,{value:i},o.a.createElement("div",{ref:e,className:r()("btb-react-table",t.className),style:l(c.styleObj,["btb-react-table"])},function(){switch(t.mode){case"info":return o.a.createElement(f,null);case"compare":return o.a.createElement(y,null);case"list":default:return o.a.createElement(m,null)}}())))}));e.a=g},62:function(t,e,a){"use strict";var n=a(55),o={version:n.a.button.version,updated:n.a.button.updated,descriptionButton:n.a.button.description_button,descriptionGroup:n.a.button.description_group,linkList:[{id:"github",fa:["fab","github"],url:n.a.button.link.github},{id:"npm",fa:["fab","npm"],url:n.a.button.link.npm}]};e.a=o}}]);