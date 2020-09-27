(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),o=a(58),l=a(57),i=a(56),s=a(54),d=a(53),b=a(61),p=[{id:"list",title:"<dib> .btb-react-table",children:[{id:"table",title:"<table> .table_list]",children:[{id:"thead",title:"<thead> .list_head",children:[{id:"thead_tr",title:"<tr> .head_tr",children:[{id:"tr_th",title:"<th> .tr_th .th_[headObj.id]"}]}]},{id:"tbody",title:"<tbody> .list_body",children:[{id:"body_tr",title:"<tr> .body_tr .tr_[data order]",children:[{id:"tr_td",title:"<th> .tr_td .td_[headObj.id]"}]}]}]}]}],m=[{id:"table",title:"<div> .btb-react-table",children:[{id:"info",title:"<table> .table_info .info-[data order]",children:[{id:"tbody",title:"<tbody> .info_body",children:[{id:"tr",title:"<tr> .body_tr .tr-[headObj.id]",children:[{id:"th",title:"<th> .tr_th .th-[headObj.id]"},{id:"td",title:"<td> .tr_td .td-[headObj.id]"}]}]}]}]}],u=[{id:"table",title:"<div> .btb-react-table",children:[{id:"compare",title:"<table> .table_compare",children:[{id:"tbody",title:"<tbody> .compare_body",children:[{id:"tr",title:"<tr> .tbody_tr .tr-[headObj.id]",children:[{id:"th",title:"<th> .tr_th .th-[headObj.id]"},{id:"td",title:"<td> .tr_td .td-[headObj.id] .td-[data order]"}]}]}]}]}],y=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],f=[{name:"Name",id:"title"},{name:"Type",id:"type"},{name:"Notice",id:"notice"}],h=[{title:"headData",type:"package.paramType.array",default:"[]",notice:"package.table.property.headData"},{title:"bodyData",type:"package.paramType.array",default:"[]",notice:"package.table.property.bodyData"},{title:"mode",type:"package.paramType.string",default:'"list"',notice:"package.table.property.mode"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.table.property.styleObj"},{title:"slotObj",type:"package.paramType.object",default:"{}",notice:"package.table.property.slotObj"},{title:"onDataClick",type:"package.paramType.function",default:"undefined",notice:"package.table.property.onDataClick"},{title:"ref",type:"useRef",default:"undefined",notice:"package.table.property.ref"}],g=[{title:"id",type:"package.paramType.string",default:"[]",notice:"package.table.headObj.id"},{title:"name",type:"package.paramType.string",default:"[]",notice:"package.table.headObj.name"}],O=[{title:"[ th_${ headObj.id } ]",type:"package.paramType.string||package.paramType.node||package.paramType.function",notice:"package.table.slotObj.th"},{title:"[ td_${ headObj.id } ]",type:"package.paramType.string||package.paramType.node||package.paramType.function",notice:"package.table.slotObj.td"}],j={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return i.a.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":i.a.translate(e[t.id])},"td-notice":function(e,t){return i.a.translate(e[t.id])}},k=function(){return Object(r.c)((function(e){return{languageSetting:e.language.languageSetting}})),c.a.createElement(d.c,{id:"btb-pkg-table-basic"},c.a.createElement(d.d,{title:i.a.translate("package.table.name"),clickBtn:s.a,linkList:b.a.linkList}),c.a.createElement(d.e,{head:c.a.createElement(c.a.Fragment,null,"".concat(i.a.translate("package.version_colon")).concat(b.a.version),c.a.createElement("br",null),"".concat(i.a.translate("package.release_colon")).concat(b.a.updated))},c.a.createElement("p",null,i.a.translate(b.a.description))),c.a.createElement(d.e,{head:i.a.translate("package.section.installation")},c.a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-table\n\nimport BTBTable from '@blacktoolbox/react-table'\nimport '@blacktoolbox/react-table/lib/index.css'")),c.a.createElement(d.e,{head:i.a.translate("package.section.render")},c.a.createElement("pre",{className:"page_pre"},'<BTBTable\n        headData=" Array of headObj" \n        bodyData=" Array of bodyObj "\n        mode=" String "\n        styleObj=" Object "\n        slotObj=" Object "\n        onDataClick=" function(bodyObj){} "/>')),c.a.createElement(d.e,{head:i.a.translate("package.section.parameters")},c.a.createElement(l.a,{className:"page_table",mode:"list",headData:y,bodyData:h,slotObj:j}),c.a.createElement(d.a,{title:"headObj"},c.a.createElement("pre",{className:"page_pre"},"headObj = {\n        id: '',\n        name: ''\n}"),c.a.createElement(l.a,{className:"page_table",mode:"list",headData:f,bodyData:g,slotObj:j})),c.a.createElement(d.a,{title:"bodyObj"},c.a.createElement("pre",{className:"page_pre"},"bodyObj = {\n        [ headObj.index ] : ''\n}")),c.a.createElement(d.a,{title:"styleObj"},c.a.createElement("p",null,i.a.translate("package.table.parameters.styleObj")),c.a.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}")),c.a.createElement(d.a,{title:"slotObj"},c.a.createElement("p",null,i.a.translate("package.table.parameters.slotObj")),c.a.createElement("pre",{className:"page_pre"},"slotObj = {\n        [ `th_${ headObj.id }` ] : '',\n        [ `td_${ headObj.id }` ] : ''\n}"),c.a.createElement(l.a,{className:"page_table",mode:"list",headData:f,bodyData:O,slotObj:j}))),c.a.createElement(d.e,{head:i.a.translate("package.section.nodeTree")},c.a.createElement(d.a,{title:i.a.translate("package.table.nodeTree.list")},c.a.createElement(o.a,{className:"page_node_tree",dataList:p}),c.a.createElement("p",null,i.a.translate("package.table.nodeTree.notice"))),c.a.createElement(d.a,{title:i.a.translate("package.table.nodeTree.info")},c.a.createElement(o.a,{className:"page_node_tree",dataList:m}),c.a.createElement("p",null,i.a.translate("package.table.nodeTree.notice"))),c.a.createElement(d.a,{title:i.a.translate("package.table.nodeTree.compare")},c.a.createElement(o.a,{className:"page_node_tree",dataList:u}),c.a.createElement("p",null,i.a.translate("package.table.nodeTree.notice")))))};t.default=function(){return c.a.createElement(k,null)}},53:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return k})),a.d(t,"a",(function(){return O}));var n=a(0),c=a.n(n),r=a(8),o=a.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=function(e){var t=e.className,a=e.children,n=i(e,["className","children"]);return c.a.createElement("div",l({className:o()("module-page",t)},n),a)},d=a(41);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var m=function(e){var t=e.id,a=e.title,n=void 0===a?"":a,r=e.linkList,l=e.clickBtn,i=void 0===l?function(){}:l,s=p(e,["id","title","linkList","clickBtn"]);return c.a.createElement("div",b({id:t,className:"module-page-head"},s),c.a.createElement("div",{className:"head_title"},n||""),(r||[]).map((function(e){return c.a.createElement("div",{className:o()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){i(e)}},c.a.createElement(d.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var f=function(e){var t=e.className,a=e.head,n=e.children,r=y(e,["className","head","children"]);return c.a.createElement("div",u({className:o()("module-section",t)},r),e.head?c.a.createElement("div",{className:"section_head"},a):[],c.a.createElement("div",{className:"section_body"},n))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var O=function(e){var t=e.title,a=e.children,n=e.className,r=g(e,["title","children","className"]);return c.a.createElement("div",h({className:o()("module-block",n)},r),t?c.a.createElement("div",{className:"block_title"},t):[],c.a.createElement("div",{className:"block_body"},a))};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k=function(e){var t=e.className,a=e.dividerProps;return c.a.createElement("div",j({className:o()("module-divider",t)},a),c.a.createElement("div",{className:"divider_line"}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(d.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement("div",{className:"divider_line"}))}},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},55:function(e,t,a){"use strict";var n=a(19),c={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:n.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=c},57:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(8),o=a.n(r);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,s(e,t))})),a},s=function(e,t){var a={};return"object"===l(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},d=c.a.createContext(),b=c.a.createContext(),p=function(){var e=Object(n.useContext)(d);return c.a.createElement("thead",{className:"list_head",style:i(e.styleObj,["list_head"])},e.headData.length?c.a.createElement("tr",{className:"head_tr",style:i(e.styleObj,["head_tr"])},e.headData.map((function(t){return c.a.createElement("th",{className:o()("tr_th","th-".concat(t.id)),key:t.id,style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=Object(n.useContext)(d);return c.a.createElement("tbody",{className:"list_body",style:i(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return c.a.createElement("tr",{className:o()("body_tr","tr-".concat(a)),style:i(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return c.a.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},u=function(){var e=Object(n.useContext)(d);return c.a.createElement("table",{className:"table_list",style:i(e.styleObj,["table_list"])},c.a.createElement(p,null),c.a.createElement(m,null))},y=function(){var e=Object(n.useContext)(d);return c.a.createElement(c.a.Fragment,null,e.bodyData.map((function(t,a){return c.a.createElement("table",{className:o()("table_info","info-".concat(a)),style:i(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},c.a.createElement("tbody",{className:"info_body",style:i(e.styleObj,["info_body"])},e.headData.map((function(a){return c.a.createElement("tr",{className:o()("body_tr","tr-".concat(a.id)),style:i(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},c.a.createElement("th",{className:o()("tr_th","th-".concat(a.id)),style:i(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),c.a.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:i(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},f=function(){var e=Object(n.useContext)(d);return c.a.createElement("table",{className:"table_compare",style:i(e.styleObj,["table_compare"])},c.a.createElement("tbody",{className:"compare_body",style:i(e.styleObj,["compare_body"])},e.headData.map((function(t){return c.a.createElement("tr",{className:o()("body_tr","tr-".concat(t.id)),style:i(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},c.a.createElement("th",{className:o()("tr_th","th-".concat(t.id)),style:i(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,n){return c.a.createElement("td",{className:o()("tr_td","td-".concat(t.id),"td-".concat(n)),style:i(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},h=c.a.forwardRef((function(e,t){var a,n,r={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},n={},Object.keys(a).forEach((function(e){n[e]={},Object.keys(a[e]).forEach((function(t){var c=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));n[e][c]=a[e][t]}))})),n),slotObj:e.slotObj||{}},l={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return c.a.createElement(d.Provider,{value:r},c.a.createElement(b.Provider,{value:l},c.a.createElement("div",{ref:t,className:o()("btb-react-table",e.className),style:i(r.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return c.a.createElement(y,null);case"compare":return c.a.createElement(f,null);case"list":default:return c.a.createElement(u,null)}}())))}));t.a=h},61:function(e,t,a){"use strict";var n=a(55),c={version:n.a.table.version,updated:n.a.table.updated,description:n.a.table.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.table.link.github},{id:"npm",fa:["fab","npm"],url:n.a.table.link.npm}]};t.a=c}}]);