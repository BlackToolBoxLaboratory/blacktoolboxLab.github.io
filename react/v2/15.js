(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),c=a(58),i=a(57),l=a(56),s=a(54),p=a(53),d=a(65),u=[{id:"popover",title:"<div> .btb-react-popover .popover-align-{begin || center || end} .popover-arrow",children:[{id:"trigger",title:"<div> .popover_trigger"},{id:"content",title:"<div> .popover_content .content-show .content-position-{top || bottom || left || right}"}]}],m=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],b=[{title:"showState",type:"package.paramType.boolean",default:"false",notice:"package.popover.property.showState"},{title:"showPosition",type:"package.paramType.string",default:'"bottom"',notice:"package.popover.property.showPosition"},{title:"showAlign",type:"package.paramType.string",default:'"begin"',notice:"package.popover.property.showAlign"},{title:"withArrow",type:"package.paramType.boolean",default:"true",notice:"package.popover.property.withArrow"},{title:"autoDetect",type:"package.paramType.boolean",default:"true",notice:"package.popover.property.autoDetect"},{title:"trigger",type:"package.paramType.string||package.paramType.node",default:'"Trigger"',notice:"package.popover.property.trigger"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.popover.property.styleObj"},{title:"onToggle",type:"package.paramType.function",default:"undefined",notice:"package.popover.property.onToggle"},{title:"onShow",type:"package.paramType.function",default:"undefined",notice:"package.popover.property.onShow"},{title:"onHide",type:"package.paramType.function",default:"undefined",notice:"package.popover.property.onHide"},{title:"ref",type:"useRef",default:"undefined",notice:"package.popover.property.ref"}],f={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return l.a.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":l.a.translate(e[t.id])},"td-notice":function(e,t){return l.a.translate(e[t.id])}},y=function(){return Object(r.c)((function(e){return{languageSetting:e.language.languageSetting}})),o.a.createElement(p.c,{id:"btb-pkg-popover-basic"},o.a.createElement(p.d,{title:l.a.translate("package.popover.name"),clickBtn:s.a,linkList:d.a.linkList}),o.a.createElement(p.e,{head:o.a.createElement(o.a.Fragment,null,"".concat(l.a.translate("package.version_colon")).concat(d.a.version),o.a.createElement("br",null),"".concat(l.a.translate("package.release_colon")).concat(d.a.updated))},o.a.createElement("p",null,l.a.translate(d.a.description))),o.a.createElement(p.e,{head:l.a.translate("package.section.installation")},o.a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-popover\n\nimport BTBPopover from '@blacktoolbox/react-popover'\nimport '@blacktoolbox/react-popover/lib/index.css'")),o.a.createElement(p.e,{head:l.a.translate("package.section.render")},o.a.createElement("pre",{className:"page_pre"},'<BTBPopover\n        showState=" Boolean " \n        showPosition=" String "\n        showAlign=" String "\n        withArrow=" Boolean "\n        autoDetect=" Boolean "\n        trigger=" String || Node "\n        styleObj=" Object "\n        onToggle=" function(){} "\n        onShow=" function(){} "\n        onHide=" function(){} "/>\n        {popover\'s content}\n</BTBPopover>')),o.a.createElement(p.e,{head:l.a.translate("package.section.parameters")},o.a.createElement(i.a,{className:"page_table",mode:"list",headData:m,bodyData:b,slotObj:f}),o.a.createElement(p.a,{title:"styleObj"},o.a.createElement("p",null,l.a.translate("package.popover.parameters.styleObj")),o.a.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}"))),o.a.createElement(p.e,{head:l.a.translate("package.section.nodeTree")},o.a.createElement(c.a,{className:"page_node_tree",dataList:u})))};t.default=function(){return o.a.createElement(y,null)}},53:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return y})),a.d(t,"b",(function(){return O})),a.d(t,"a",(function(){return v}));var n=a(0),o=a.n(n),r=a(8),c=a.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=function(e){var t=e.className,a=e.children,n=l(e,["className","children"]);return o.a.createElement("div",i({className:c()("module-page",t)},n),a)},p=a(41);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=function(e){var t=e.id,a=e.title,n=void 0===a?"":a,r=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,s=u(e,["id","title","linkList","clickBtn"]);return o.a.createElement("div",d({id:t,className:"module-page-head"},s),o.a.createElement("div",{className:"head_title"},n||""),(r||[]).map((function(e){return o.a.createElement("div",{className:c()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},o.a.createElement(p.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var y=function(e){var t=e.className,a=e.head,n=e.children,r=f(e,["className","head","children"]);return o.a.createElement("div",b({className:c()("module-section",t)},r),e.head?o.a.createElement("div",{className:"section_head"},a):[],o.a.createElement("div",{className:"section_body"},n))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var v=function(e){var t=e.title,a=e.children,n=e.className,r=h(e,["title","children","className"]);return o.a.createElement("div",g({className:c()("module-block",n)},r),t?o.a.createElement("div",{className:"block_title"},t):[],o.a.createElement("div",{className:"block_body"},a))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var O=function(e){var t=e.className,a=e.dividerProps;return o.a.createElement("div",k({className:c()("module-divider",t)},a),o.a.createElement("div",{className:"divider_line"}),o.a.createElement(p.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(p.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(p.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(p.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(p.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(p.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(p.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement("div",{className:"divider_line"}))}},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},55:function(e,t,a){"use strict";var n=a(19),o={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.0",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:n.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=o},57:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(8),c=a.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,s(e,t))})),a},s=function(e,t){var a={};return"object"===i(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},p=o.a.createContext(),d=o.a.createContext(),u=function(){var e=Object(n.useContext)(p);return o.a.createElement("thead",{className:"list_head",style:l(e.styleObj,["list_head"])},e.headData.length?o.a.createElement("tr",{className:"head_tr",style:l(e.styleObj,["head_tr"])},e.headData.map((function(t){return o.a.createElement("th",{className:c()("tr_th","th-".concat(t.id)),key:t.id,style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=Object(n.useContext)(p);return o.a.createElement("tbody",{className:"list_body",style:l(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return o.a.createElement("tr",{className:c()("body_tr","tr-".concat(a)),style:l(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return o.a.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},b=function(){var e=Object(n.useContext)(p);return o.a.createElement("table",{className:"table_list",style:l(e.styleObj,["table_list"])},o.a.createElement(u,null),o.a.createElement(m,null))},f=function(){var e=Object(n.useContext)(p);return o.a.createElement(o.a.Fragment,null,e.bodyData.map((function(t,a){return o.a.createElement("table",{className:c()("table_info","info-".concat(a)),style:l(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},o.a.createElement("tbody",{className:"info_body",style:l(e.styleObj,["info_body"])},e.headData.map((function(a){return o.a.createElement("tr",{className:c()("body_tr","tr-".concat(a.id)),style:l(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},o.a.createElement("th",{className:c()("tr_th","th-".concat(a.id)),style:l(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),o.a.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},y=function(){var e=Object(n.useContext)(p);return o.a.createElement("table",{className:"table_compare",style:l(e.styleObj,["table_compare"])},o.a.createElement("tbody",{className:"compare_body",style:l(e.styleObj,["compare_body"])},e.headData.map((function(t){return o.a.createElement("tr",{className:c()("body_tr","tr-".concat(t.id)),style:l(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},o.a.createElement("th",{className:c()("tr_th","th-".concat(t.id)),style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,n){return o.a.createElement("td",{className:c()("tr_td","td-".concat(t.id),"td-".concat(n)),style:l(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},g=o.a.forwardRef((function(e,t){var a,n,r={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},n={},Object.keys(a).forEach((function(e){n[e]={},Object.keys(a[e]).forEach((function(t){var o=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));n[e][o]=a[e][t]}))})),n),slotObj:e.slotObj||{}},i={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return o.a.createElement(p.Provider,{value:r},o.a.createElement(d.Provider,{value:i},o.a.createElement("div",{ref:t,className:c()("btb-react-table",e.className),style:l(r.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return o.a.createElement(f,null);case"compare":return o.a.createElement(y,null);case"list":default:return o.a.createElement(b,null)}}())))}));t.a=g},65:function(e,t,a){"use strict";var n=a(55),o={version:n.a.popover.version,updated:n.a.popover.updated,description:n.a.popover.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.popover.link.github},{id:"npm",fa:["fab","npm"],url:n.a.popover.link.npm}]};t.a=o}}]);