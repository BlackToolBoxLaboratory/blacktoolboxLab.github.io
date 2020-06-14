(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
    updated: 'Jun, 14, 2020'
  },
  table: {
    name: 'Table',
    routename: _routeMap__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].PACKAGES_TABLE_BASIC,
    description: 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.',
    version: '1.0.1',
    updated: 'Jun, 13, 2020'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(39);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 5 modules
var pageLayout = __webpack_require__(35);

// EXTERNAL MODULE: ./src/assets/definitions/packageObj.js
var packageObj = __webpack_require__(38);

// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(36);

// CONCATENATED MODULE: ./src/components/packages/list/exampleSlot.jsx





var packageInfo = {
  'version': packageObj["a" /* default */].list.version,
  'updated': packageObj["a" /* default */].list.updated,
  'description': 'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to dataList can be customized by slotObj in String, Node, or Function way.',
  'btnList': [{
    'id': 'github',
    'fa': ['fab', 'github'],
    'url': 'https://github.com/BlackToolBoxLaboratory/react-list'
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': 'https://www.npmjs.com/package/@blacktoolbox/react-list'
  }]
};
var _listData = [{
  id: 'b1',
  title: 'Branch: 1',
  children: [{
    id: 'l11',
    title: 'Leaf: 1-1'
  }, {
    id: 'b12',
    title: 'Branch: 1-2',
    children: [{
      id: 'l121',
      title: 'Leaf: 1-2-1'
    }, {
      id: 'l122',
      title: 'Leaf: 1-2-2'
    }]
  }, {
    id: 'l13',
    title: 'Leaf: 1-3'
  }]
}, {
  id: 'b2',
  title: 'Branch: 2',
  children: [{
    id: 'l21',
    title: 'Leaf: 2-1'
  }, {
    id: 'l22',
    title: 'Leaf: 2-2'
  }]
}];
var _slotObj = {
  'b2': function b2(entry) {
    return /*#__PURE__*/react_default.a.createElement("div", null, "".concat(entry.id, " overwrited by Function"));
  },
  'l22': /*#__PURE__*/react_default.a.createElement("div", null, 'l22 overwrited by Node')
};
var preRender = "<BTBList \n        dataList={listData} \n        slotObj={slotObj}/>";
var preListData = "const listData = [\n  { id: 'b1', title: 'Branch: 1', children: [\n          { id: 'l11', title: 'Leaf: 1-1' },\n          { id: 'b12', title: 'Branch: 1-2', children: [\n                  { id: 'l121', title: 'Leaf: 1-2-1' },\n                  { id: 'l122', title: 'Leaf: 1-2-2' }\n          ]},\n          { id: 'l13', title: 'Leaf: 1-3' }\n  ]},\n  { id: 'b2', title: 'Branch: 2', children: [\n          { id: 'l21', title: 'Leaf: 2-1' },\n          { id: 'l22', title: 'Leaf: 2-2' }\n  ]}\n]";
var preSlotObj = "const _slotObj = {\n  'b2': (entry) => {\n    return (\n      <div>\n      {`${entry.id} overwrited by Function`}\n      </div>\n      )\n    },\n    'l22': (\n      <div>\n        {'l22 overwrited by Node'}\n      </div>\n    )\n  }";

var exampleSlot_ExampleSlot = function ExampleSlot() {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* Page */], {
    className: "btb-pkg-list-example-slot"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* PageHead */], {
    title: 'Example - Slot',
    clickBtn: functions["a" /* openLink */],
    btnList: packageInfo.btnList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "Version: ".concat(packageInfo.version), /*#__PURE__*/react_default.a.createElement("br", null), "Release Date: ".concat(packageInfo.updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, packageInfo.description)), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "EXAMPLE"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    dataList: _listData,
    slotObj: _slotObj
  })), /*#__PURE__*/react_default.a.createElement(pageLayout["e" /* Section */], {
    head: "CONFIGURATION"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "Render"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "listData"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preListData)), /*#__PURE__*/react_default.a.createElement(pageLayout["a" /* Block */], {
    title: "styleObj"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preSlotObj))));
};

/* harmony default export */ var exampleSlot = (exampleSlot_ExampleSlot);
// CONCATENATED MODULE: ./src/routes/packages/list/ExampleSlotContainer.jsx



var ExampleSlotContainer_ExampleSlotContaier = function ExampleSlotContaier() {
  return /*#__PURE__*/react_default.a.createElement(exampleSlot, null);
};

/* harmony default export */ var ExampleSlotContainer = __webpack_exports__["default"] = (ExampleSlotContainer_ExampleSlotContaier);

/***/ })

}]);