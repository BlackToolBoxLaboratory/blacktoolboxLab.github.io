(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(31),c=a(55),r=a(63),l=a(54),s=a(51),m=a(50),p=a(62),d=Object(c.a)(Object(i.b)((function(e){return{languageSetting:e.language.languageSetting}}))),u=d((function(){return o.a.createElement(m.c,{className:"btb-pkg-popover-example-position"},o.a.createElement(m.d,{title:l.a.translate("package.popover.example.position.title"),clickBtn:s.a,linkList:p.a.linkList}),o.a.createElement(m.e,{head:o.a.createElement(o.a.Fragment,null,"".concat(l.a.translate("package.version_colon")).concat(p.a.version),o.a.createElement("br",null),"".concat(l.a.translate("package.release_colon")).concat(p.a.updated))},o.a.createElement("p",null,l.a.translate("package.popover.example.position.description"))),o.a.createElement(m.e,{head:l.a.translate("package.section.example")},o.a.createElement("div",{className:"align_vertical"},o.a.createElement(r.a,{showPosition:"left",trigger:o.a.createElement("button",null,"Left")},"Example: Left")),o.a.createElement("div",{className:"align_vertical"},o.a.createElement(r.a,{showPosition:"top",trigger:o.a.createElement("button",null,"Top")},"Example: Top")),o.a.createElement("div",{className:"align_vertical"},o.a.createElement(r.a,{showPosition:"bottom",trigger:o.a.createElement("button",null,"Bottom")},"Example: Bottom")),o.a.createElement("div",{className:"align_vertical"},o.a.createElement(r.a,{showPosition:"right",trigger:o.a.createElement("button",null,"Right")},"EXample: Right"))),o.a.createElement(m.e,{head:l.a.translate("package.section.sourceCode")},o.a.createElement("pre",{className:"page_pre"},'<BTBPopover showPosition={"left"} trigger={(<button>Left</button>)}>\n        Example: Left\n</BTBPopover>\n\n<BTBPopover showPosition={"top"} trigger={(<button>Top</button>)}>\n        Example: Top\n</BTBPopover>\n\n<BTBPopover showPosition={"bottom"} trigger={(<button>Bottom</button>)}>\n        Example: Bottom\n</BTBPopover>\n\n<BTBPopover showPosition={"right"} trigger={(<button>Right</button>)}>\n        EXample: Right\n</BTBPopover>')))}));t.default=function(){return o.a.createElement(u,null)}},50:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return p}));var n=a(0),o=a.n(n),i=function(e){return o.a.createElement("div",{className:["module-page",e.className].join(" ")},e.children)},c=a(53),r=a.n(c),l=a(38),s=function(e){return o.a.createElement("div",{className:"module-page-head"},o.a.createElement("div",{className:"head_title"},e.title||""),(e.linkList||[]).map((function(t){return o.a.createElement("div",{className:r()("head_btn","btn-".concat(t.id)),key:t.id,onClick:function(){var a;a=t,e.clickBtn&&e.clickBtn(a)}},o.a.createElement(l.FontAwesomeIcon,{icon:t.fa,fixedWidth:!0}))})))},m=function(e){return o.a.createElement("div",{className:["module-section",e.className].join(" ")},e.head?o.a.createElement("div",{className:"section_head"},e.head):[],o.a.createElement("div",{className:"section_body"},e.children))},p=function(e){return o.a.createElement("div",{className:"module-block"},e.title?o.a.createElement("div",{className:"block_title"},e.title):[],o.a.createElement("div",{className:"block_body"},e.children))},d=function(){return o.a.createElement("div",{className:"module-divider"},o.a.createElement("div",{className:"divider_line"}),o.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement(l.FontAwesomeIcon,{className:"divider_icon",icon:["fas","tools"],fixedWidth:!0}),o.a.createElement("div",{className:"divider_line"}))}},51:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){window.open(e.url)}},52:function(e,t,a){"use strict";var n=a(18),o={list:{name:"package.list.name",routename:n.b.PACKAGES_LIST_BASIC,description:"package.list.description.basic",version:"2.2.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-list",npm:"https://www.npmjs.com/package/@blacktoolbox/react-list"}},table:{name:"package.table.name",routename:n.b.PACKAGES_TABLE_BASIC,description:"package.table.description.basic",version:"1.4.0",updated:"2020-06-21",link:{github:"https://github.com/BlackToolBoxLaboratory/react-table",npm:"https://www.npmjs.com/package/@blacktoolbox/react-table"}},popover:{name:"package.popover.name",routename:n.b.PACKAGES_POPOVER_BASIC,description:"package.popover.description.basic",version:"1.2.1",updated:"2020-07-07",link:{github:"https://github.com/BlackToolBoxLaboratory/react-popover",npm:"https://www.npmjs.com/package/@blacktoolbox/react-popover"}},button:{name:"package.button.name.button",routename:n.b.PACKAGES_BUTTON_BASIC,description:"package.button.description.basic",description_button:"package.button.description.button",description_group:"package.button.description.group",version:"1.2.1",updated:"2020-08-09",link:{github:"https://github.com/BlackToolBoxLaboratory/react-button",npm:"https://www.npmjs.com/package/@blacktoolbox/react-button"}}};t.a=o},62:function(e,t,a){"use strict";var n=a(52),o={version:n.a.popover.version,updated:n.a.popover.updated,description:n.a.popover.description,linkList:[{id:"github",fa:["fab","github"],url:n.a.popover.link.github},{id:"npm",fa:["fab","npm"],url:n.a.popover.link.npm}]};t.a=o}}]);