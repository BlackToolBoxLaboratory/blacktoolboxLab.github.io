(self.webpackChunkhomepage_react=self.webpackChunkhomepage_react||[]).push([[4318],{6742:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var a=n(8749),r=n(4076),l=n(8239);(0,a.z)([{index:"en",label:"Eglish",dictionary:r.Z},{index:"zh",label:"繁體中文",dictionary:l.Z}]);var i=new a.Z},4318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a=n(7294),r=n(6550),l=n(5044),i=n(4184),o=n.n(i),c=n(6593),s=n(6742),u=n(3486),d=n(7814),m=n(119),p=n(1215);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=function(e){var t,n,i,g,b,h=(0,r.k6)(),_=(0,c.I0)(),O=e.toggleMenu,v=e.className,S=y(e,["toggleMenu","className"]),P={state_showPopover:(t=!1,n=(0,a.useState)(t),i=f(n,2),g=i[0],b=i[1],{showState:g,onToggle:function(e){b(e)}})};return a.createElement("header",E({className:o()("module-layout-head",v)},S),a.createElement("div",{className:"head_logo"},a.createElement("div",{className:"logo_content"},"BR")),a.createElement("div",{className:"head_title"},a.createElement("div",{className:"title_main hidden-down-md"},"Black Tool Box Laboratory"),a.createElement("div",{className:"title_main hidden-up-md"},"BTB"),a.createElement("div",{className:"title_sub"},"For React")),a.createElement("div",{className:"head_item item-org"},a.createElement(d.G,{className:"item_button",icon:["fas","building"],fixedWidth:!0,onClick:function(){window.open("https://blacktoolboxlaboratory.github.io/")}})),a.createElement("div",{className:"head_item item-home"},a.createElement(d.G,{className:"item_button",icon:["fas","home"],fixedWidth:!0,onClick:function(){h.push(l.l.ABOUT)}})),a.createElement("div",{className:"head_item item-lang"},a.createElement(p.Z,E({className:"head_langPopover"},P.state_showPopover,{withArrow:!0,trigger:a.createElement(d.G,{className:"item_button",icon:["fas","globe"],fixedWidth:!0})}),a.createElement(m.Z,{dataList:s.K.menu().map((function(e){return A(A({},e),{},{id:e.index,title:e.label})})),activeID:s.K.get().index,onEntryClick:function(e){_(u.v.setLang(e.index)),s.K.set(e.index),P.state_showPopover.onToggle(!1)}}))),a.createElement("div",{className:"head_item item-menu"},a.createElement(d.G,{className:"item_button",icon:["fas","bars"],fixedWidth:!0,onClick:O})))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=function(e){var t=e.className,n=v(e,["className"]);return a.createElement("div",O({className:o()("module-layout-foot",t)},n),a.createElement("div",{className:"foot_navbar"},a.createElement("a",{className:"navbar_linkBtn linkBtn-paypal",href:"https://www.paypal.me/vannoel0628",target:"_blank",rel:"noreferrer"},a.createElement(d.G,{icon:["fab","paypal"],fixedWidth:!0})),a.createElement("a",{className:"navbar_linkBtn linkBtn-github",href:"https://github.com/BlackToolBoxLaboratory",target:"_blank",rel:"noreferrer"},a.createElement(d.G,{icon:["fab","github"],fixedWidth:!0})),a.createElement("a",{className:"navbar_linkBtn linkBtn-npm",href:"https://www.npmjs.com/org/blacktoolbox",target:"_blank",rel:"noreferrer"},a.createElement(d.G,{icon:["fab","npm"],fixedWidth:!0})),a.createElement("a",{className:"navbar_linkBtn linkBtn-linkedin",href:"https://www.linkedin.com/company/black-tool-box-laboratory/",target:"_blank",rel:"noreferrer"},a.createElement(d.G,{icon:["fab","linkedin"],fixedWidth:!0})),a.createElement("a",{className:"navbar_linkBtn linkBtn-wordpress",href:"https://vannoel0628.wordpress.com/",target:"_blank",rel:"noreferrer"},a.createElement(d.G,{icon:["fab","wordpress"],fixedWidth:!0})),a.createElement("a",{className:"navbar_linkBtn linkBtn-email",href:"mailto://vannoel0628@gmail.com",target:"_blank",rel:"noreferrer"},a.createElement(d.G,{icon:["far","envelope"],fixedWidth:!0}))),a.createElement("footer",{className:"foot_copyright"},"Copyright © Black Tool Box Laboratory. All rights reserved."))},P=[{id:"ABOUT",title:"About",langIndex:"menu.about"},{id:"OVERVIEW",title:"Overview",langIndex:"menu.overview"},{id:"PACKAGES",title:"Packages",langIndex:"menu.packages.root",defaultCollapsed:!1,children:[{id:"PACKAGES_LIST",title:"List",langIndex:"menu.packages.list.root",defaultCollapsed:!0,children:[{id:"PACKAGES_LIST_BASIC",title:"Basic",langIndex:"menu.packages.basic"},{id:"PACKAGES_LIST_EXAMPLE_LIST",title:"Example: List",langIndex:"menu.packages.list.example.list"},{id:"PACKAGES_LIST_EXAMPLE_MENU",title:"Example: Menu",langIndex:"menu.packages.list.example.menu"},{id:"PACKAGES_LIST_EXAMPLE_STYLE",title:"Example: Style",langIndex:"menu.packages.list.example.style"},{id:"PACKAGES_LIST_EXAMPLE_SLOT",title:"Example: Slot",langIndex:"menu.packages.list.example.slot"}]},{id:"PACKAGES_TABLE",title:"Table",langIndex:"menu.packages.table.root",defaultCollapsed:!0,children:[{id:"PACKAGES_TABLE_BASIC",title:"Basic",langIndex:"menu.packages.basic"},{id:"PACKAGES_TABLE_EXAMPLE_LIST",title:"Example: List",langIndex:"menu.packages.table.example.list"},{id:"PACKAGES_TABLE_EXAMPLE_INFO",title:"Example: Info",langIndex:"menu.packages.table.example.info"},{id:"PACKAGES_TABLE_EXAMPLE_COMPARE",title:"Example: Compare",langIndex:"menu.packages.table.example.compare"},{id:"PACKAGES_TABLE_EXAMPLE_STYLE",title:"Example: Style",langIndex:"menu.packages.table.example.style"},{id:"PACKAGES_TABLE_EXAMPLE_SLOT",title:"Example: Slot",langIndex:"menu.packages.table.example.slot"}]},{id:"PACKAGES_POPOVER",title:"Popover",langIndex:"menu.packages.popover.root",defaultCollapsed:!0,children:[{id:"PACKAGES_POPOVER_BASIC",title:"Basic",langIndex:"menu.packages.basic"},{id:"PACKAGES_POPOVER_EXAMPLE_POSITION",title:"Example: Position",langIndex:"menu.packages.popover.example.position"},{id:"PACKAGES_POPOVER_EXAMPLE_ALIGN",title:"Example: Align",langIndex:"menu.packages.popover.example.align"}]},{id:"PACKAGES_BUTTON",title:"Button",langIndex:"menu.packages.button.root",defaultCollapsed:!0,children:[{id:"PACKAGES_BUTTON_BASIC_BUTTON",title:"Basic: Button",langIndex:"menu.packages.button.basic.button"},{id:"PACKAGES_BUTTON_BASIC_GROUP",title:"Basic: Group",langIndex:"menu.packages.button.basic.group"},{id:"PACKAGES_BUTTON_EXAMPLE_BUTTON",title:"Example: Button",langIndex:"menu.packages.button.example.button"},{id:"PACKAGES_BUTTON_EXAMPLE_GROUP",title:"Example: Group",langIndex:"menu.packages.button.example.group"},{id:"PACKAGES_BUTTON_EXAMPLE_PAGINATION",title:"Example: Pagination",langIndex:"menu.packages.button.example.pagination"},{id:"PACKAGES_BUTTON_EXAMPLE_STYLE",title:"Example: Style",langIndex:"menu.packages.button.example.style"}]},{id:"PACKAGES_MESSAGE",title:"Message",langIndex:"menu.packages.message.root",defaultCollapsed:!0,children:[{id:"PACKAGES_MESSAGE_BASIC_MESSAGE",title:"Basic: Message",langIndex:"menu.packages.message.basic.message"},{id:"PACKAGES_MESSAGE_BASIC_NOTICE",title:"Basic: Notice",langIndex:"menu.packages.message.basic.notice"},{id:"PACKAGES_MESSAGE_EXAMPLE_MESSAGE",title:"Basic: Message",langIndex:"menu.packages.message.example.message"},{id:"PACKAGES_MESSAGE_EXAMPLE_NOTICE",title:"Basic: Notice",langIndex:"menu.packages.message.example.notice"}]},{id:"PACKAGES_TIMELINE",title:"Timeline",langIndex:"menu.packages.timeline.root",defaultCollapsed:!0,children:[{id:"PACKAGES_TIMELINE_BASIC",title:"Basic",langIndex:"menu.packages.basic"},{id:"PACKAGES_TIMELINE_EXAMPLE_POSITION",title:"Example: Position",langIndex:"menu.packages.timeline.example.position"},{id:"PACKAGES_TIMELINE_EXAMPLE_ALIGN",title:"Example: Align",langIndex:"menu.packages.timeline.example.align"}]},{id:"PACKAGES_FOLDER",title:"Folder",langIndex:"menu.packages.folder"}]},{id:"APPLICATIONS",title:"Applications",defaultCollapsed:!1,langIndex:"menu.application.root",children:[{id:"APPLICATIONS_FACEBOOK_SDK",title:"FackBook SDK",defaultCollapsed:!0,langIndex:"menu.application.fbsdk.root",children:[{id:"APPLICATIONS_FACEBOOK_SDK_BASIC",title:"Basic",langIndex:"menu.application.fbsdk.basic"},{id:"APPLICATIONS_FACEBOOK_SDK_API",title:"APIs",langIndex:"menu.application.fbsdk.apis"},{id:"APPLICATIONS_FACEBOOK_SDK_COMPONENTS",title:"Components",langIndex:"menu.application.fbsdk.components"}]},{id:"APPLICATIONS_LANGUAGES",title:"Languages",langIndex:"menu.application.languages"},{id:"APPLICATIONS_VALIDATOR",title:"Validator",langIndex:"menu.application.validator"}]},{id:"VERSION_1",title:"Version 1",langIndex:"menu.version_1"}];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function T(e){var t=x(x({},e),{},{title:e.langIndex?s.K.translate(e.langIndex):e.title});return e.children&&(t.children=e.children.map((function(e){return T(e)}))),t}var B=function(e){var t,n,i,c,s,u,d=(0,r.k6)(),p=e.className,f=e.clickEntry,g=void 0===f?function(){}:f,E=L(e,["className","clickEntry"]),b={state_activeID:(n=(0,a.useState)(t),i=C(n,2),c=i[0],s=i[1],{value:c,onChange:function(e){s(e)}})};return(0,a.useEffect)((function(){b.state_activeID.onChange(Object.keys(l.l).find((function(e){return l.l[e]===d.location.pathname})))})),a.createElement("div",N({className:o()("module-layout-aside",p)},E),a.createElement(m.Z,{className:"aside_menu",dataList:(u=P.map((function(e){return T(e)})),u),activeID:b.state_activeID.value,collapseEnable:!0,onEntryClick:function(e){"VERSION_1"===e.id?window.open("https://blacktoolboxlaboratory.github.io/react/v1/"):l.l[e.id]!==d.location.pathname&&(d.push(l.l[e.id]),b.state_activeID.onChange(e.id),g())}}))};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=function(e){var t,n,i,d,m,p=(0,r.k6)(),f=(0,c.I0)(),g=(0,c.v9)((function(e){return{languageSetting:e.language.languageSetting}})),E=e.className,b=e.children,A=M(e,["className","children"]),h={state_hiddenMenu:(t=window.innerWidth<l.H.MD,n=(0,a.useState)(t),i=G(n,2),d=i[0],m=i[1],{value:d,onToggle:function(e){m(void 0!==e?e:!d)}})};(0,a.useEffect)((function(){return y(),function(){window.removeEventListener("click",v)}}),[]),(0,a.useEffect)((function(){return window.removeEventListener("click",v,!1),h.state_hiddenMenu.value||window.addEventListener("click",v,!1),function(){window.removeEventListener("click",v,!1)}}),[h.state_hiddenMenu.value]),(0,a.useEffect)((function(){window.scrollTo(0,0)}),[p.location.pathname]);var y=function(){if(g.languageSetting.length)s.K.set(g.languageSetting);else{var e=navigator.language||navigator.userLanguage,t=s.K.menu().find((function(t){return e.search(new RegExp(t.index,"i"))>=0}));s.K.set(t.index),f(u.v.setLang(t.index))}};function O(){window.innerWidth<l.H.MD&&h.state_hiddenMenu.onToggle(!0)}function v(e){window.test=e.path,void 0===e.path.find((function(e){return!!e.classList&&(e.classList.value.search("layout_aside")>0||e.classList.value.search("item-menu")>0)}))&&O()}return a.createElement("div",K({className:o()("module-layout",E)},A),a.createElement(_,{className:"layout_head",toggleMenu:function(){h.state_hiddenMenu.onToggle()}}),a.createElement("div",{className:"layout_content"},b),a.createElement(S,{className:"layout_foot"}),a.createElement(B,{className:o()("layout_aside",{"aside-hidden":h.state_hiddenMenu.value}),clickEntry:O}))},U=function(){return a.createElement(D,null,a.createElement(a.Suspense,{fallback:a.createElement("div",null,"Loading...")},a.createElement(r.AW,{exact:!0,path:l.l.PACKAGES},a.createElement(r.l_,{to:l.l.PACKAGES_LIST})),a.createElement(r.AW,{exact:!0,path:l.l.APPLICATIONS},a.createElement(r.l_,{to:l.l.APPLICATIONS_LANGUAGES})),a.createElement(r.rs,null,a.createElement(r.AW,{path:l.l.ABOUT,component:a.lazy((function(){return n.e(2141).then(n.bind(n,2141))}))}),a.createElement(r.AW,{path:l.l.OVERVIEW,component:a.lazy((function(){return Promise.all([n.e(5927),n.e(5019),n.e(2383),n.e(6024)]).then(n.bind(n,8878))}))}),a.createElement(r.AW,{path:l.l.PACKAGES,component:a.lazy((function(){return n.e(9992).then(n.bind(n,9992))}))}),a.createElement(r.AW,{path:l.l.APPLICATIONS,component:a.lazy((function(){return n.e(128).then(n.bind(n,128))}))}))))}}}]);