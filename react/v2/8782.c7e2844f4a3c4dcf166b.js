(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[8782],{1719:function(e,t,a){"use strict";var n=a(7294),o=a(4184),c=a.n(o);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t){var a;return t.forEach((function(t){a=Object.assign({},a,i(e,t))})),a},i=function(e,t){var a={};return"object"===r(e)&&Object.keys(e).find((function(n){if(n===t)return a=Object.assign({},e[n]),!0})),a},s=n.createContext(),d=n.createContext(),p=function(){var e=(0,n.useContext)(s);return n.createElement("thead",{className:"list_head",style:l(e.styleObj,["list_head"])},e.headData.length?n.createElement("tr",{className:"head_tr",style:l(e.styleObj,["head_tr"])},e.headData.map((function(t){return n.createElement("th",{className:c()("tr_th","th-".concat(t.id)),key:t.id,style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name)}))):[])},m=function(){var e=(0,n.useContext)(s);return n.createElement("tbody",{className:"list_body",style:l(e.styleObj,["list_body"])},e.bodyData.map((function(t,a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a)),style:l(e.styleObj,["body_tr","tr-".concat(a)]),key:a},e.headData.map((function(a){return n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)]),key:a.id},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id])})))})))},u=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_list",style:l(e.styleObj,["table_list"])},n.createElement(p,null),n.createElement(m,null))},b=function(){var e=(0,n.useContext)(s);return n.createElement(n.Fragment,null,e.bodyData.map((function(t,a){return n.createElement("table",{className:c()("table_info","info-".concat(a)),style:l(e.styleObj,["table_info","info-".concat(a)]),key:"".concat(t.id,"_").concat(a)},n.createElement("tbody",{className:"info_body",style:l(e.styleObj,["info_body"])},e.headData.map((function(a){return n.createElement("tr",{className:c()("body_tr","tr-".concat(a.id)),style:l(e.styleObj,["body_tr","tr-".concat(a.id)]),key:a.id},n.createElement("th",{className:c()("tr_th","th-".concat(a.id)),style:l(e.styleObj,["tr_th","th-".concat(a.id)])},e.slotObj["th-".concat(a.id)]?"function"==typeof e.slotObj["th-".concat(a.id)]?e.slotObj["th-".concat(a.id)](a):e.slotObj["th-".concat(a.id)]:a.name),n.createElement("td",{className:c()("tr_td","td-".concat(a.id)),style:l(e.styleObj,["tr_td","td-".concat(a.id)])},e.slotObj["td-".concat(a.id)]?"function"==typeof e.slotObj["td-".concat(a.id)]?e.slotObj["td-".concat(a.id)](t,a):e.slotObj["td-".concat(a.id)]:t[a.id]))}))))})))},f=function(){var e=(0,n.useContext)(s);return n.createElement("table",{className:"table_compare",style:l(e.styleObj,["table_compare"])},n.createElement("tbody",{className:"compare_body",style:l(e.styleObj,["compare_body"])},e.headData.map((function(t){return n.createElement("tr",{className:c()("body_tr","tr-".concat(t.id)),style:l(e.styleObj,["body_tr","tr-".concat(t.id)]),key:t.id},n.createElement("th",{className:c()("tr_th","th-".concat(t.id)),style:l(e.styleObj,["tr_th","th-".concat(t.id)])},e.slotObj["th-".concat(t.id)]?"function"==typeof e.slotObj["th-".concat(t.id)]?e.slotObj["th-".concat(t.id)](t):e.slotObj["th-".concat(t.id)]:t.name),e.bodyData.map((function(a,o){return n.createElement("td",{className:c()("tr_td","td-".concat(t.id),"td-".concat(o)),style:l(e.styleObj,["tr_td","td-".concat(t.id),"td-".concat(o)]),key:"".concat(a.id,"_").concat(o)},e.slotObj["td-".concat(t.id)]?"function"==typeof e.slotObj["td-".concat(t.id)]?e.slotObj["td-".concat(t.id)](a,t):e.slotObj["td-".concat(t.id)]:a[t.id])})))}))))},y=n.forwardRef((function(e,t){var a,o,r={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:(a=e.styleObj||{},o={},Object.keys(a).forEach((function(e){o[e]={},Object.keys(a[e]).forEach((function(t){var n=t.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));o[e][n]=a[e][t]}))})),o),slotObj:e.slotObj||{}},i={clickData:function(t){e.onDataClick&&e.onDataClick(t)}};return n.createElement(s.Provider,{value:r},n.createElement(d.Provider,{value:i},n.createElement("div",{ref:t,className:c()("btb-react-table",e.className),style:l(r.styleObj,["btb-react-table"])},function(){switch(e.mode){case"info":return n.createElement(b,null);case"compare":return n.createElement(f,null);case"list":default:return n.createElement(u,null)}}())))}));t.Z=y},4989:function(e,t,a){"use strict";var n=a(5044),o={list:{name:"package.list.name",routename:n.l.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.l.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.l.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.3",updated:"2020-12-13",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.l.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.l.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.1",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},timeline:{name:"package.message.name.timeline",routename:n.l.PACKAGES_TIMELINE_BASIC,description:"package.timeline.description.basic",version:"1.0.1",updated:"2020-12-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-timeline",npm:"https://www.npmjs.com/package/@blacktoolbox/react-timeline"}},folder:{name:"package.folder.name",routename:n.l.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.l.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.Z=o},6520:function(e,t,a){"use strict";a.d(t,{gO:function(){return g},iz:function(){return v},T3:function(){return i},yG:function(){return m},$0:function(){return f}});var n=a(7294),o=a(4184),c=a.n(o);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=function(e){var t=e.className,a=e.children,o=l(e,["className","children"]);return n.createElement("div",r({className:c()("module-page",t)},o),a)},s=a(7814);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=function(e){var t=e.id,a=e.title,o=void 0===a?"":a,r=e.linkList,l=e.clickBtn,i=void 0===l?function(){}:l,m=p(e,["id","title","linkList","clickBtn"]);return n.createElement("div",d({id:t,className:"module-page-head"},m),n.createElement("div",{className:"head_title"},o||""),(r||[]).map((function(e){return n.createElement("div",{className:c()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){i(e)}},n.createElement(s.G,{icon:e.fa,fixedWidth:!0}))})))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=function(e){var t=e.className,a=e.head,o=e.children,r=b(e,["className","head","children"]);return n.createElement("div",u({className:c()("module-section",t)},r),e.head?n.createElement("div",{className:"section_head"},a):[],n.createElement("div",{className:"section_body"},o))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var g=function(e){var t=e.title,a=e.children,o=e.className,r=h(e,["title","children","className"]);return n.createElement("div",y({className:c()("module-block",o)},r),t?n.createElement("div",{className:"block_title"},t):[],n.createElement("div",{className:"block_body"},a))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var v=function(e){var t=e.className,a=e.dividerProps;return n.createElement("div",k({className:c()("module-divider",t)},a),n.createElement("div",{className:"divider_line"}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement(s.G,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),n.createElement("div",{className:"divider_line"}))}},8782:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),o=a(6593),c=a(1719),r=a(6742),l=a(2007),i=a(6520),s=a(4989),d={version:s.Z.folder.version,updated:s.Z.folder.updated,description:s.Z.folder.description,linkList:[{id:"github",fa:["fab","github"],url:s.Z.folder.link.github},{id:"npm",fa:["fab","npm"],url:s.Z.folder.link.npm}]},p=[{name:"Property Name",id:"title"},{name:"Type",id:"type"},{name:"Default",id:"default"},{name:"Notice",id:"notice"}],m=[{title:"components",type:"package.paramType.array",default:"[]",notice:"package.folder.property.components"}],u={"td-type":function(e,t){var a=e[t.id].split("||");return a.length>0?a.map((function(e){return r.K.translate(e)})).join(" || "):"useRef"===e[t.id]?"useRef":r.K.translate(e[t.id])},"td-notice":function(e,t){return r.K.translate(e[t.id])}},b=function(){return(0,o.v9)((function(e){return{languageSetting:e.language.languageSetting}})),n.createElement(i.T3,{id:"btb-pkg-folder-basic"},n.createElement(i.yG,{title:r.K.translate("package.folder.name"),clickBtn:l.n,linkList:d.linkList}),n.createElement(i.$0,{head:n.createElement(n.Fragment,null,"".concat(r.K.translate("package.version_colon")).concat(d.version),n.createElement("br",null),"".concat(r.K.translate("package.release_colon")).concat(d.updated))},n.createElement("p",null,r.K.translate(d.description))),n.createElement(i.$0,{head:r.K.translate("package.section.installation")},n.createElement("pre",{className:"page_pre"},"$ npm install --save @blacktoolbox/react-component-folder\n\nimport BTBPopover from '@blacktoolbox/react-component-folder'")),n.createElement(i.$0,{head:r.K.translate("package.section.render")},n.createElement("pre",{className:"page_pre"},'<BTBComponentFolder components=" Array of Node ">\n        {component\'s content}\n</BTBComponentFolder>')),n.createElement(i.$0,{head:r.K.translate("package.section.parameters")},n.createElement(c.Z,{className:"page_table",mode:"list",headData:p,bodyData:m,slotObj:u})),n.createElement(i.$0,{head:r.K.translate("package.section.example")},n.createElement(i.gO,{title:r.K.translate("package.folder.example.old.title")},n.createElement("p",null,r.K.translate("package.folder.example.old.description")),n.createElement("pre",{className:"page_pre"},"<Provider store={store} >\n        <HashRouter>\n                <Suspense fallback={<div>Loading...</div>}>\n                        <Switch>\n                                <Route path={...} component={...} />\n                        </Switch>\n                </Suspense>\n        </HashRouter>\n</Provider>")),n.createElement(i.gO,{title:r.K.translate("package.folder.example.new.title")},n.createElement("p",null,r.K.translate("package.folder.example.new.description")),n.createElement("pre",{className:"page_pre"},"<BTBComponentFolder components={componentList} >\n        <Suspense fallback={<div>Loading...</div>}>\n                <Switch>\n                        <Route path={...} component={...} />\n                </Switch>\n        </Suspense>\n</BTBComponentFolder>"),n.createElement("p",null,r.K.translate("package.folder.example.new.notice")),n.createElement("pre",{className:"page_pre"},"/* eslint-disable react/jsx-key */\nconst componentList = [\n        <Provider store={store} />,\n        <HashRouter />,\n];\n/* eslint-enable react/jsx-key */"))))},f=function(){return n.createElement(b,null)}},2007:function(e,t,a){"use strict";a.d(t,{n:function(){return n}});var n=function(e){window.open(e.url)}}}]);