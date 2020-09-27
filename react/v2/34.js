(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),c=a(2),i=a(41),l=a(56),s=a(55),m=a.p+"files/BTB_React.png",d=a(53),p=function(e){return o.a.createElement("div",{id:"btb-about-package-card",className:["grid-row",e.className].join(" ")},o.a.createElement("div",{className:"grid-col-md-3"},o.a.createElement("div",{className:"card_title"},l.a.translate(e.info.name)),o.a.createElement(i.FontAwesomeIcon,{className:"card_link",icon:["fas","link"],fixedWidth:!0,onClick:function(){e.redirectRoute(e.info.routename)}})),o.a.createElement("div",{className:"grid-col-md"},o.a.createElement("div",{className:"card_description"},l.a.translate(e.info.description)),o.a.createElement("div",{className:"card_version"},"".concat(l.a.translate("package.version_colon")).concat(e.info.version)),o.a.createElement("div",{className:"card_updated"},"".concat(l.a.translate("package.release_colon")).concat(e.info.updated))))},u=function(){Object(r.c)((function(e){return{languageSetting:e.language.languageSetting}}));var e=Object(c.k)();function t(t){e.push(t)}return o.a.createElement(d.c,{id:"btb-about"},o.a.createElement(d.e,{className:"about_title grid-row direction-column align-items-center"},o.a.createElement("img",{className:"title_image",src:m,alt:"BTB_React"}),o.a.createElement("h1",{className:"title_main hidden-down-md"},"Black Tool Box Laboratory"),o.a.createElement("h1",{className:"title_main hidden-up-md"},"BTB Lab."),o.a.createElement("p",{className:"title_sub"},"With React")),o.a.createElement(d.e,null,o.a.createElement("span",null,l.a.translate("about.description"))),o.a.createElement(d.e,{className:"grid-row justify-content-center"},o.a.createElement("a",{href:"mailto://vannoel0628@gmail.com",target:"_blank",rel:"noreferrer"},o.a.createElement(i.FontAwesomeIcon,{icon:["far","envelope"],fixedWidth:!0}),o.a.createElement("span",null,"vannoel0628@gmail.com"))),o.a.createElement(d.b,null),o.a.createElement(d.e,{className:"grid-row justify-content-center"},o.a.createElement("span",null,l.a.translate("about.donate.1")),o.a.createElement("a",{href:"https://www.paypal.me/vannoel0628",target:"_blank",rel:"noreferrer"},o.a.createElement(i.FontAwesomeIcon,{icon:["fab","paypal"],fixedWidth:!0}),o.a.createElement("span",null,l.a.translate("about.donate.2"))),o.a.createElement("span",null,l.a.translate("about.donate.3"))),o.a.createElement(d.b,null),Object.keys(s.a).map((function(e){return o.a.createElement("div",{key:e},"list"!==e?o.a.createElement(d.b,null):[],o.a.createElement(d.e,{className:"about_package"},o.a.createElement(p,{info:s.a[e],redirectRoute:t})))})))};t.default=function(){return o.a.createElement(u,null)}},53:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return g})),a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return k}));var n=a(0),o=a.n(n),r=a(8),c=a.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=function(e){var t=e.className,a=e.children,n=l(e,["className","children"]);return o.a.createElement("div",i({className:c()("module-page",t)},n),a)},m=a(41);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=function(e){var t=e.id,a=e.title,n=void 0===a?"":a,r=e.linkList,i=e.clickBtn,l=void 0===i?function(){}:i,s=p(e,["id","title","linkList","clickBtn"]);return o.a.createElement("div",d({id:t,className:"module-page-head"},s),o.a.createElement("div",{className:"head_title"},n||""),(r||[]).map((function(e){return o.a.createElement("div",{className:c()("head_btn","btn-".concat(t)),key:e.id,onClick:function(){l(e)}},o.a.createElement(m.FontAwesomeIcon,{icon:e.fa,fixedWidth:!0}))})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var g=function(e){var t=e.className,a=e.head,n=e.children,r=f(e,["className","head","children"]);return o.a.createElement("div",b({className:c()("module-section",t)},r),e.head?o.a.createElement("div",{className:"section_head"},a):[],o.a.createElement("div",{className:"section_body"},n))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var k=function(e){var t=e.title,a=e.children,n=e.className,r=h(e,["title","children","className"]);return o.a.createElement("div",v({className:c()("module-block",n)},r),t?o.a.createElement("div",{className:"block_title"},t):[],o.a.createElement("div",{className:"block_body"},a))};function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var y=function(e){var t=e.className,a=e.dividerProps;return o.a.createElement("div",E({className:c()("module-divider",t)},a),o.a.createElement("div",{className:"divider_line"}),o.a.createElement(m.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(m.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(m.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(m.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(m.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(m.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(m.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement("div",{className:"divider_line"}))}},55:function(e,t,a){"use strict";var n=a(19),o={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.2",updated:"2020-09-12",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}},message:{name:"package.message.name.message",routename:n.b.PACKAGES_MESSAGE_BASIC,description:"package.message.description.basic",description_message:"package.message.description.message",description_notice:"package.message.description.notice",version:"1.1.0",updated:"2020-09-27",link:{github:"https://github.com/BlackToolBoxLaboratory/react-message",npm:"https://www.npmjs.com/package/@blacktoolbox/react-message"}},folder:{name:"package.folder.name",routename:n.b.PACKAGES_FOLDER,description:"package.folder.description",version:"1.0.1",updated:"2020-09-20",link:{github:"https://github.com/BlackToolBoxLaboratory/react-component-folder",npm:"https://www.npmjs.com/package/@blacktoolbox/react-component-folder"}},facebookSDK:{name:"application.facebookSDK.name",routename:n.b.PACKAGES_LIST_BASIC,description:"application.facebookSDK.description",version:"8.0.0",updated:"2020-09-05",link:{github:"https://github.com/BlackToolBoxLaboratory/react-facebook-sdk",npm:"https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk"}}};t.a=o}}]);