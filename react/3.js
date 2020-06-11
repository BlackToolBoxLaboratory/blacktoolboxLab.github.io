(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ pageLayout_Page; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ pageLayout_PageHead; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ pageLayout_Section; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ pageLayout_Divider; });

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
var classnames = __webpack_require__(35);
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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var packageObj = {
  list: {
    name: 'List',
    routename: 'packages.list.basic',
    description: 'This module of list creator based on React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.',
    version: '2.0.0',
    updated: 'Jun, 8, 2020'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (packageObj);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@blacktoolbox/react-list/esm/index.js
var esm = __webpack_require__(38);

// EXTERNAL MODULE: ./src/modules/pageLayout/index.js + 4 modules
var pageLayout = __webpack_require__(34);

// EXTERNAL MODULE: ./src/assets/definitions/packageObj.js
var packageObj = __webpack_require__(37);

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
    'url': 'https://github.com/BlackToolBoxLaboratory/react-list'
  }, {
    'id': 'npm',
    'fa': ['fab', 'npm'],
    'url': 'https://www.npmjs.com/package/@blacktoolbox/react-list'
  }]
};
var preInstall = "$ npm install --save @blacktoolbox/reat-list\n\nimport BTBList from '@blacktoolbox/reat-list'\nimport '@blacktoolbox/react-list/lib/index.css'";
var preRender = "<BTBList dataList={ Array } \n        dataList=\" Array of entryObj\" \n        defaultActiveID=\" String \"\n        activeID=\" String \"\n        collapseEnable=\" Boolean \"\n        onEntryClick=\" function(entryObj){} \"\n        onToggle=\" function(entryObj){} \"/>";
var preEntryObj = "entryObj = {\n        id: '',\n        title: '',\n        defaultCollapsed: false,\n        children: [...]\n}";
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
        title: '<div> .container_entry .entry-[id] .entry-active',
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

var Basic_Basic = function Basic() {
  return /*#__PURE__*/react_default.a.createElement(pageLayout["b" /* Page */], {
    className: "btb-pkg-list-basic"
  }, /*#__PURE__*/react_default.a.createElement(pageLayout["c" /* PageHead */], {
    title: 'List Basic',
    clickBtn: functions["a" /* openLink */],
    btnList: packageInfo.btnList
  }), /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* Section */], {
    head: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, "Version: ".concat(packageInfo.version), /*#__PURE__*/react_default.a.createElement("br", null), "Release Date: ".concat(packageInfo.updated))
  }, /*#__PURE__*/react_default.a.createElement("p", null, packageInfo.description)), /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* Section */], {
    head: "INSTALLATION"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preInstall)), /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* Section */], {
    head: "RENDER"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preRender)), /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* Section */], {
    head: "PARAMETERS"
  }, /*#__PURE__*/react_default.a.createElement("pre", {
    className: "page_pre"
  }, preEntryObj)), /*#__PURE__*/react_default.a.createElement(pageLayout["d" /* Section */], {
    head: "NODE TREE"
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], {
    className: "page_node_tree",
    dataList: nodeTree
  }), /*#__PURE__*/react_default.a.createElement("p", null, 'Note: The layer count is counted base on 0.')));
};

/* harmony default export */ var list_Basic = (Basic_Basic);
// CONCATENATED MODULE: ./src/routes/packages/list/BasicContainer.jsx



var BasicContainer_PackagesContaier = function PackagesContaier() {
  return /*#__PURE__*/react_default.a.createElement(list_Basic, null);
};

/* harmony default export */ var BasicContainer = __webpack_exports__["default"] = (BasicContainer_PackagesContaier);

/***/ })

}]);