(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(31),o=a(55),i=a(59),r=a(56),d=a(54),s=a(51),b=a(50),m=a(60),p=Object(o.a)(Object(l.b)((function(e){return{languageSetting:e.language.languageSetting}}))),u=[{id:"list",title:"<dib> .btb-react-table",children:[{id:"table",title:"<table> .table_list]",children:[{id:"thead",title:"<thead> .list_head",children:[{id:"thead_tr",title:"<tr> .head_tr",children:[{id:"tr_th",title:"<th> .tr_th .th_[headObj.id]"}]}]},{id:"tbody",title:"<tbody> .list_body",children:[{id:"body_tr",title:"<tr> .body_tr .tr_[data order]",children:[{id:"tr_td",title:"<th> .tr_td .td_[headObj.id]"}]}]}]}]}],y=[{id:"table",title:"<div> .btb-react-table",children:[{id:"info",title:"<table> .table_info .info-[data order]",children:[{id:"tbody",title:"<tbody> .info_body",children:[{id:"tr",title:"<tr> .body_tr .tr-[headObj.id]",children:[{id:"th",title:"<th> .tr_th .th-[headObj.id]"},{id:"td",title:"<td> .tr_td .td-[headObj.id]"}]}]}]}]}],h=[{id:"table",title:"<div> .btb-react-table",children:[{id:"compare",title:"<table> .table_compare",children:[{id:"tbody",title:"<tbody> .compare_body",children:[{id:"tr",title:"<tr> .tbody_tr .tr-[headObj.id]",children:[{id:"th",title:"<th> .tr_th .th-[headObj.id]"},{id:"td",title:"<td> .tr_td .td-[headObj.id] .td-[data order]"}]}]}]}]}],f=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],j=[{name:"Name",id:"title"},{name:"Type",id:"type"},{name:"Notice",id:"notice"}],_=[{title:"headData",type:"package.paramType.array",default:"[]",notice:"package.table.property.headData"},{title:"bodyData",type:"package.paramType.array",default:"[]",notice:"package.table.property.bodyData"},{title:"mode",type:"package.paramType.string",default:'"list"',notice:"package.table.property.mode"},{title:"styleObj",type:"package.paramType.object",default:"{}",notice:"package.table.property.styleObj"},{title:"slotObj",type:"package.paramType.object",default:"{}",notice:"package.table.property.slotObj"},{title:"onDataClick",type:"package.paramType.function",default:"undefined",notice:"package.table.property.onDataClick"},{title:"ref",type:"useRef",default:"undefined",notice:"package.table.property.ref"}],g=[{title:"id",type:"package.paramType.string",default:"[]",notice:"package.table.headObj.id"},{title:"name",type:"package.paramType.string",default:"[]",notice:"package.table.headObj.name"}],k=[{title:"[ th_${ headObj.id } ]",type:"package.paramType.string||package.paramType.node||package.paramType.function",notice:"package.table.slotObj.th"},{title:"[ td_${ headObj.id } ]",type:"package.paramType.string||package.paramType.node||package.paramType.function",notice:"package.table.slotObj.td"}],O={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return d.a.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":d.a.translate(e[t.id])},"td-notice":function(e,t){return d.a.translate(e[t.id])}},E=p((function(){return c.a.createElement(b.c,{className:"btb-pkg-table-basic"},c.a.createElement(b.d,{title:d.a.translate("package.table.name"),clickBtn:s.a,linkList:m.a.linkList}),c.a.createElement(b.e,{head:c.a.createElement(c.a.Fragment,null,"".concat(d.a.translate("package.version_colon")).concat(m.a.version),c.a.createElement("br",null),"".concat(d.a.translate("package.release_colon")).concat(m.a.updated))},c.a.createElement("p",null,d.a.translate(m.a.description))),c.a.createElement(b.e,{head:d.a.translate("package.section.installation")},c.a.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-table\n\nimport BTBTable from '@blacktoolbox/react-table'\nimport '@blacktoolbox/react-table/lib/index.css'")),c.a.createElement(b.e,{head:d.a.translate("package.section.render")},c.a.createElement("pre",{className:"page_pre"},'<BTBTable\n        headData=" Array of headObj" \n        bodyData=" Array of bodyObj "\n        mode=" String "\n        styleObj=" Object "\n        slotObj=" Object "\n        onDataClick=" function(bodyObj){} "/>')),c.a.createElement(b.e,{head:d.a.translate("package.section.parameters")},c.a.createElement(r.a,{className:"page_table",mode:"list",headData:f,bodyData:_,slotObj:O}),c.a.createElement(b.a,{title:"headObj"},c.a.createElement("pre",{className:"page_pre"},"headObj = {\n        id: '',\n        name: ''\n}"),c.a.createElement(r.a,{className:"page_table",mode:"list",headData:j,bodyData:g,slotObj:O})),c.a.createElement(b.a,{title:"bodyObj"},c.a.createElement("pre",{className:"page_pre"},"bodyObj = {\n        [ headObj.index ] : ''\n}")),c.a.createElement(b.a,{title:"styleObj"},c.a.createElement("p",null,d.a.translate("package.table.parameters.styleObj")),c.a.createElement("pre",{className:"page_pre"},"styleObj = {\n        [ className ]: { inline CSS }\n}")),c.a.createElement(b.a,{title:"slotObj"},c.a.createElement("p",null,d.a.translate("package.table.parameters.slotObj")),c.a.createElement("pre",{className:"page_pre"},"slotObj = {\n        [ `th_${ headObj.id }` ] : '',\n        [ `td_${ headObj.id }` ] : ''\n}"),c.a.createElement(r.a,{className:"page_table",mode:"list",headData:j,bodyData:k,slotObj:O}))),c.a.createElement(b.e,{head:d.a.translate("package.section.nodeTree")},c.a.createElement(b.a,{title:d.a.translate("package.table.nodeTree.list")},c.a.createElement(i.a,{className:"page_node_tree",dataList:u}),c.a.createElement("p",null,d.a.translate("package.table.nodeTree.notice"))),c.a.createElement(b.a,{title:d.a.translate("package.table.nodeTree.info")},c.a.createElement(i.a,{className:"page_node_tree",dataList:y}),c.a.createElement("p",null,d.a.translate("package.table.nodeTree.notice"))),c.a.createElement(b.a,{title:d.a.translate("package.table.nodeTree.compare")},c.a.createElement(i.a,{className:"page_node_tree",dataList:h}),c.a.createElement("p",null,d.a.translate("package.table.nodeTree.notice")))))}));t.default=function(){return c.a.createElement(E,null)}},50:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return b}));var n=a(0),c=a.n(n),l=function(e){return c.a.createElement("div",{className:["module-page",e.className].join(" ")},e.children)},o=a(53),i=a.n(o),r=a(38),d=function(e){return c.a.createElement("div",{className:"module-page-head"},c.a.createElement("div",{className:"head_title"},e.title||""),(e.linkList||[]).map((function(t){return c.a.createElement("div",{className:i()("head_btn","btn-".concat(t.id)),key:t.id,onClick:function(){var a;a=t,e.clickBtn&&e.clickBtn(a)}},c.a.createElement(r.FontAwesomeIcon,{icon:t.fa,fixedWidth:!0}))})))},s=function(e){return c.a.createElement("div",{className:["module-section",e.className].join(" ")},e.head?c.a.createElement("div",{className:"section_head"},e.head):[],c.a.createElement("div",{className:"section_body"},e.children))},b=function(e){return c.a.createElement("div",{className:"module-block"},e.title?c.a.createElement("div",{className:"block_title"},e.title):[],c.a.createElement("div",{className:"block_body"},e.children))},m=function(){return c.a.createElement("div",{className:"module-divider"},c.a.createElement("div",{className:"divider_line"}),c.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement(r.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),c.a.createElement("div",{className:"divider_line"}))}},51:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},52:function(e,t,a){"use strict";var n=a(18),c={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.1",updated:"2020-07-07",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}}};t.a=c},56:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(53),o=a.n(l);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,d(e,t))})),a},d=function(e,t){var a={};return"object"===i(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},s=c.a.createContext(),b=c.a.createContext(),m=function(){var e=Object(n.useContext)(s);return c.a.createElement("thead",{className:"list_head",style:r(e.styleObj,["list_head"])},e.headData.length?c.a.createElement("tr",{className:"head_tr",style:r(e.styleObj,["head_tr"])},e.headData.map((function(t){return c.a.createElement("th",{className:o()("tr_th","th-".concat(t.id)),key:t.id,style:r(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},p=function(){var e=Object(n.useContext)(s);return c.a.createElement("tbody",{className:"list_body",style:r(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return c.a.createElement("tr",{className:o()("body_tr","tr-".concat(a)),style:r(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return c.a.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:r(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},u=function(){var e=Object(n.useContext)(s);return c.a.createElement("table",{className:"table_list",style:r(e.styleObj,["table_list"])},c.a.createElement(m,null),c.a.createElement(p,null))},y=function(){var e=Object(n.useContext)(s);return c.a.createElement(c.a.Fragment,null,e.bodyData.map((function(t,a){return c.a.createElement("table",{className:o()("table_info","info-".concat(a)),style:r(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},c.a.createElement("tbody",{className:"info_body",style:r(e.styleObj,["info_body"])},e.headData.map((function(a){return c.a.createElement("tr",{className:o()("body_tr","tr-".concat(a.id)),style:r(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},c.a.createElement("th",{className:o()("tr_th","th-".concat(a.id)),style:r(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),c.a.createElement("td",{className:o()("tr_td","td-".concat(a.id)),style:r(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},h=function(){var e=Object(n.useContext)(s);return c.a.createElement("table",{className:"table_compare",style:r(e.styleObj,["table_compare"])},c.a.createElement("tbody",{className:"compare_body",style:r(e.styleObj,["compare_body"])},e.headData.map((function(t){return c.a.createElement("tr",{className:o()("body_tr","tr-".concat(t.id)),style:r(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},c.a.createElement("th",{className:o()("tr_th","th-".concat(t.id)),style:r(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,n){return c.a.createElement("td",{className:o()("tr_td","td-".concat(t.id),"td-".concat(n)),style:r(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(n)]),key:"".concat(a.id,"_").concat(n)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},f=c.a.forwardRef((function(e,t){var a,n,l={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},n={},Object.keys(a).forEach((function(e){n[e]={},Object.keys(a[e]).forEach((function(t){var c=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));n[e][c]=a[e][t]}))})),n),slotObj:e.slotObj||{}},i={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return c.a.createElement(s.Provider,{value:l},c.a.createElement(b.Provider,{value:i},c.a.createElement("div",{ref:t,className:o()("btb-react-table",e.className),style:r(l.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return c.a.createElement(y,null);case"compare":return c.a.createElement(h,null);case"list":default:return c.a.createElement(u,null)}}())))}));t.a=f},60:function(e,t,a){"use strict";var n=a(52),c={version:n.a.table.version,updated:n.a.table.updated,description:n.a.table.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.table.link.github},{id:"npm",fa:["fab","npm"],url:n.a.table.link.npm}]};t.a=c}}]);