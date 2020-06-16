(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ pageLayout_Page; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ pageLayout_PageHead; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ pageLayout_Section; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ pageLayout_Divider; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ pageLayout_Block; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/modules/pageLayout/Page.jsx


var Page_Page = function Page(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['module-page', props.className].join(' ')
  }, props.children);
};

/* harmony default export */ var pageLayout_Page = (Page_Page);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(37);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(29);

// CONCATENATED MODULE: ./src/modules/pageLayout/PageHead.jsx




var PageHead_PageHead = function PageHead(props) {
  function _clickBtn(event) {
    if (props.clickBtn) {
      props.clickBtn(event);
    }
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-page-head"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "head_title"
  }, props.title || ''), (props.btnList || []).map(function (btn) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: classnames_default()('head_btn', "btn-".concat(btn.id)),
      key: btn.id,
      onClick: function onClick() {
        _clickBtn(btn);
      }
    }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      icon: btn.fa,
      fixedWidth: true
    }));
  }));
};

/* harmony default export */ var pageLayout_PageHead = (PageHead_PageHead);
// CONCATENATED MODULE: ./src/modules/pageLayout/Section.jsx


var Section_Section = function Section(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['module-section', props.className].join(' ')
  }, props.head ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "section_head"
  }, props.head) : [], /*#__PURE__*/react_default.a.createElement("div", {
    className: "section_body"
  }, props.children));
};

/* harmony default export */ var pageLayout_Section = (Section_Section);
// CONCATENATED MODULE: ./src/modules/pageLayout/Block.jsx


var Block_Block = function Block(props) {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-block"
  }, props.title ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "block_title"
  }, props.title) : [], /*#__PURE__*/react_default.a.createElement("div", {
    className: "block_body"
  }, props.children));
};

/* harmony default export */ var pageLayout_Block = (Block_Block);
// CONCATENATED MODULE: ./src/modules/pageLayout/Divider.jsx



var Divider_Divider = function Divider() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-divider"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "divider_line"
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "divider_icon",
    icon: ['fas', 'tools'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "divider_line"
  }));
};

/* harmony default export */ var pageLayout_Divider = (Divider_Divider);
// CONCATENATED MODULE: ./src/modules/pageLayout/index.js







/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openLink; });
var openLink = function openLink(link) {
  window.open(link.url);
};



/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

var packageObj = {
  list: {
    name: 'List',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_LIST_BASIC,
    description: 'This module of list creator made with React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.',
    version: '2.1.6',
    updated: 'Jun, 14, 2020',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-list',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-list'
    }
  },
  table: {
    name: 'Table',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_TABLE_BASIC,
    description: 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.',
    version: '1.1.0',
    updated: 'Jun, 16, 2020',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/react-table',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/react-table'
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=function(t,e){var a;return e.forEach((function(e){a=Object.assign({},a,o(t,e))})),a},o=function(t,e){var a={};return"object"===n(t)&&Object.keys(t).find((function(n){if(n===e)return a=Object.assign({},t[n]),!0})),a},l=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),r=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),s=function(){var n=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",{className:"list_head",style:c(n.styleObj,["list_head"])},n.headData.length?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:"head_tr",style:c(n.styleObj,["head_tr"])},n.headData.map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(e.id)),key:e.id,style:c(n.styleObj,["tr_th","th-".concat(e.id)])},n.slotObj["th-".concat(e.id)]?"function"==typeof n.slotObj["th-".concat(e.id)]?n.slotObj["th-".concat(e.id)](e):n.slotObj["th-".concat(e.id)]:e.name)}))):[])},i=function(){var n=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"list_body",style:c(n.styleObj,["list_body"])},n.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o)),style:c(n.styleObj,["body_tr","tr-".concat(o)]),key:o},n.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:c(n.styleObj,["tr_td","td-".concat(o.id)]),key:o.id},n.slotObj["td-".concat(o.id)]?"function"==typeof n.slotObj["td-".concat(o.id)]?n.slotObj["td-".concat(o.id)](e,o):n.slotObj["td-".concat(o.id)]:e[o.id])})))})))},d=function(){var a=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table_list",style:c(a.styleObj,["table_list"])},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(s,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i,null))},b=function(){var n=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,n.bodyData.map((function(e,o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("table_info","info-".concat(o)),style:c(n.styleObj,["table_info","info-".concat(o)]),key:"".concat(e.id,"_").concat(o)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",{className:"info_body",style:c(n.styleObj,["info_body"])},n.headData.map((function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("body_tr","tr-".concat(o.id)),style:c(n.styleObj,["body_tr","tr-".concat(o.id)]),key:o.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_th","th-".concat(o.id)),style:c(n.styleObj,["tr_th","th-".concat(o.id)])},n.slotObj["th-".concat(o.id)]?"function"==typeof n.slotObj["th-".concat(o.id)]?n.slotObj["th-".concat(o.id)](o):n.slotObj["th-".concat(o.id)]:o.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("tr_td","td-".concat(o.id)),style:c(n.styleObj,["tr_td","td-".concat(o.id)])},n.slotObj["td-".concat(o.id)]?"function"==typeof n.slotObj["td-".concat(o.id)]?n.slotObj["td-".concat(o.id)](e,o):n.slotObj["td-".concat(o.id)]:e[o.id]))}))))})))};/* harmony default export */ __webpack_exports__["a"] = (function(e){var n={headData:e.headData||[],bodyData:e.bodyData||[],styleObj:e.styleObj||{},slotObj:e.slotObj||{}},o={clickData:function(t){e.onDataClick&&e.onDataClick(t)}},s="info"===e.mode?e.mode:"list";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l.Provider,{value:n},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r.Provider,{value:o},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("btb-react-table",e.className),style:c(n.styleObj,["btb-react-table"])},function(){switch(s){case"list":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,null);case"info":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b,null)}}())))});


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-table/esm/index.js
var react_table_esm = __webpack_require__(40);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(35);

// EXTERNAL MODULE: ./src/assets/definitions/packageObj.js
var packageObj = __webpack_require__(38);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(36);

// CONCATENATED MODULE: ./src/components/packages/list/Basic.jsx






var packageInfo = {
  'version': packageObj["a" /* default */].list.version,
  'updated': packageObj["a" /* default */].list.updated,
  'description': packageObj["a" /* default */].list.description,
  'btnList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': packageObj["a" /* default */].list.link.github
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': packageObj["a" /* default */].list.link.npm
  }]
};
var preInstall = "$ npm install --save @blacktoolbox/reat-list\n\nimport BTBList from '@blacktoolbox/reat-list'\nimport '@blacktoolbox/react-list/lib/index.css'";
var preRender = "<BTBList\n        dataList=\" Array of entryObj\" \n        defaultActiveID=\" String \"\n        activeID=\" String \"\n        collapseEnable=\" Boolean \"\n        styleObj=\" Object \"\n        slotObj=\" Object \"\n        onEntryClick=\" function(entryObj){} \"\n        onToggle=\" function(entryObj){} \"/>";
var preEntryObj = "entryObj = {\n        id: '',\n        title: '',\n        defaultCollapsed: false,\n        children: []\n}";
var preStyleObj = "styleObj = {\n        [ className ]: { inline CSS }\n}";
var preSlotObj = "slotObj = {\n        [ entryObj.id ]: ''\n}";
var nodeTree = [{
  id: 'list',
  title: '<div> .btb-react-list',
  children: [{
    id: 'layer',
    title: '<ul> .btb-react-list-layer .layer-[layer count]',
    children: [{
      id: 'container',
      title: '<li> .layer-container .layer-[layer count]',
      children: [{
        id: 'entry',
        title: '<div> .container_entry .entry-[entryObj.id] .entry-active',
        children: [{
          id: 'title',
          title: '<div> .entry_title'
        }, {
          id: 'collapseBtn',
          title: '<div> .entry_collapseBtn .collapseBtn-default',
          children: [{
            id: 'arrow',
            title: '<div> .collapseBtn_arrow'
          }]
        }]
      }, {
        id: 'sublayer',
        title: '<div>.list_sublayer',
        children: [{
          id: 'next',
          title: '<ul>.btb-vue-list-layer.layer-[layer count + 1]'
        }]
      }]
    }]
  }]
}];
var tableHeadArr_property = [{
  name: 'Property Name',
  id: 'title'
}, {
  name: 'Type',
  id: 'type'
}, {
  name: 'Default',
  id: 'default'
}, {
  name: 'Notice',
  id: 'notice'
}];
var tableHeadArr_entry = [{
  name: 'Name',
  id: 'title'
}, {
  name: 'Type',
  id: 'type'
}, {
  name: 'Notice',
  id: 'notice'
}];
var tableBodyArr_basic = [{
  title: 'dataList',
  type: 'Array',
  default: '[]',
  notice: 'List of dataObj.'
}, {
  title: 'activeID',
  type: 'String',
  default: 'undefined',
  notice: 'Actived entry.'
}, {
  title: 'defaultActiveID',
  type: 'String',
  default: 'undefined',
  notice: 'Default actived entry.'
}, {
  title: 'collapseEnable',
  type: 'Boolean',
  default: 'false',
  notice: 'Width of table.'
}, {
  title: 'styleObj',
  type: 'Object',
  default: '{}',
  notice: 'Object of customized style.'
}, {
  title: 'slotObj',
  type: 'Object',
  default: '{}',
  notice: 'Object of slot which for render specific entry.'
}, {
  title: 'onEntryClick',
  type: 'Function',
  default: 'undefined',
  notice: 'Function for entry clicked.'
}, {
  title: 'onToggle',
  type: 'Function',
  default: 'undefined',
  notice: 'Fuction for while collapseEnable is ture and some collapsing triggered.'
}];
var tableBodyArr_entry = [{
  title: 'id',
  type: 'String',
  notice: 'Identity of entry.'
}, {
  title: 'title',
  type: 'String || Node',
  notice: 'Name of entry.'
}, {
  title: 'defaultCollapsed',
  type: 'String',
  notice: 'Default value to collapsed of extend.'
}, {
  title: 'children',
  type: 'Array',
  notice: 'sublist'
}];
var tableBodyArr_slot = [{
  title: '[ id of entryObj ]',
  type: 'String || Node || Function',
  notice: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id.", /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, "(entry) => {}"))
}];

var Basic_Basic = function Basic() {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-list-basic"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: 'List Basic',
    clickBtn: functions["a" /* openLink */],
    btnList: packageInfo.btnList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "Version: ".concat(packageInfo.version), /*#__PURE__*/react_default.a.createElement("br", null), "Release Date: ".concat(packageInfo.updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, packageInfo.description)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "INSTALLATION"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preInstall)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "RENDER"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "PARAMETERS"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "Basic"
  }, /*#__PURE__*/react_default.a.createElement(react_table_esm["a" /* default */], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_property,
    bodyData: tableBodyArr_basic
  })), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "entryObj"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "If entry.children is defined. While clicking this entry will trigger onToggle. If not, it will trigger onEntryClick."), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preEntryObj), /*#__PURE__*/react_default.a.createElement(react_table_esm["a" /* default */], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_entry,
    bodyData: tableBodyArr_entry
  })), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "styleObj"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "Any className in this module could add inline CSS by styleObj."), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preStyleObj)), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "slotObj"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "We could replace the default node with entryobj.id by slotObj. "), /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preSlotObj), /*#__PURE__*/react_default.a.createElement(react_table_esm["a" /* default */], {
    className: "page_table",
    mode: "list",
    headData: tableHeadArr_entry,
    bodyData: tableBodyArr_slot
  }))), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "NODE TREE"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    className: "page_node_tree",
    dataList: nodeTree
  }), /*#__PURE__*/react_default.a.createElement("p", null, 'Note: The layer count is counted base on 0.')));
};

/* harmony default export */ var list_Basic = (Basic_Basic);
// CONCATENATED MODULE: ./src/routes/packages/list/BasicContainer.jsx



var BasicContainer_BasicContaier = function BasicContaier() {
  return /*#__PURE__*/react_default.a.createElement(list_Basic, null);
};

/* harmony default export */ var BasicContainer = __webpack_exports__["default"] = (BasicContainer_BasicContaier);

/***/ })

}]);