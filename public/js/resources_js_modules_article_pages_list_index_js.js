(self["webpackChunklaravel_react"] = self["webpackChunklaravel_react"] || []).push([["resources_js_modules_article_pages_list_index_js"],{

/***/ "./resources/js/modules/article/Article.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/article/Article.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Model */ "./resources/js/utils/Model.js");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/User */ "./resources/js/modules/user/User.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Article = /*#__PURE__*/function (_Model) {
  _inherits(Article, _Model);

  var _super = _createSuper(Article);

  function Article(props) {
    var _this;

    _classCallCheck(this, Article);

    _this = _super.call(this, props);

    _this.initialize(props);

    return _this;
  }

  _createClass(Article, [{
    key: "initialize",
    value: function initialize(props) {
      _get(_getPrototypeOf(Article.prototype), "initialize", this).call(this, props);

      this.slug = props.slug || '';
      this.title = props.title || '';
      this.description = props.description || '';
      this.content = props.content || '';
      this.published = props.published || false;
      this.publishedAt = props.publishedAt ? moment__WEBPACK_IMPORTED_MODULE_0___default()(props.publishedAt) : null; // relate user model

      this.user = props.user ? new _user_User__WEBPACK_IMPORTED_MODULE_2__.default(props.user) : null;
    }
  }]);

  return Article;
}(_utils_Model__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./resources/js/modules/article/pages/list/Page.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/article/pages/list/Page.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/article/service.js");
/* harmony import */ var _components_ArticleRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ArticleRow */ "./resources/js/modules/article/pages/list/components/ArticleRow.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Pagination */ "./resources/js/modules/article/pages/list/components/Pagination.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import libs



 // import components







var Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "pageChange", function (pageNumber) {
      _this.props.dispatch((0,_service__WEBPACK_IMPORTED_MODULE_3__.articleListRequest)({
        pageNumber: pageNumber
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "togglePublish", function (id) {
      var article = _this.props.articles.find(function (article) {
        return article.id === id;
      });

      if (!article) return;
      article.published = !article.published;

      if (article.published) {
        article.publishedAt = moment__WEBPACK_IMPORTED_MODULE_2___default()();
      } else {
        article.publishedAt = null;
      }

      _this.props.dispatch((0,_service__WEBPACK_IMPORTED_MODULE_3__.articleUpdateRequest)(article.toJson()));
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemove", function (id) {
      _this.props.dispatch((0,_service__WEBPACK_IMPORTED_MODULE_3__.articleRemoveRequest)(id));
    });

    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch((0,_service__WEBPACK_IMPORTED_MODULE_3__.articleListRequest)({}));
    }
  }, {
    key: "renderArticles",
    value: function renderArticles() {
      var _this2 = this;

      return this.props.articles.map(function (article, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ArticleRow__WEBPACK_IMPORTED_MODULE_4__.default, {
          article: article,
          index: index,
          togglePublish: _this2.togglePublish,
          handleRemove: _this2.handleRemove
        }, index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("main", {
        className: "col-sm-9 ml-sm-auto col-md-10 pt-3",
        role: "main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          children: "Portfolio"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
          className: "table table-responsive table-striped",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
            className: "thead-inverse",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: "#"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: "Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: "Description"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: "Created At"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: "Updated At"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: "Published At"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
                  to: "/articles/create",
                  className: "btn btn-success",
                  children: "Add"
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
            children: this.renderArticles()
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__.default, {
          meta: this.props.meta,
          onChange: this.pageChange
        })]
      });
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Page, "displayName", 'ArticlesPage');

_defineProperty(Page, "propTypes", {
  meta: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  articles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/article/pages/list/components/ArticleRow.js":
/*!**************************************************************************!*\
  !*** ./resources/js/modules/article/pages/list/components/ArticleRow.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var displayName = 'ArticleRow';
var propTypes = {
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  article: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  togglePublish: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  handleRemove: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};

var ArticleRow = function ArticleRow(_ref) {
  var index = _ref.index,
      article = _ref.article,
      togglePublish = _ref.togglePublish,
      handleRemove = _ref.handleRemove;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
      scope: "row",
      children: index + 1
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: article.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: article.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: article.createdAt && article.createdAt.format('MMMM, DD YYYY')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: article.updatedAt && article.updatedAt.format('MMMM, DD YYYY')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: article.publishedAt && article.publishedAt.format('MMMM, DD YYYY')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "btn-group",
        role: "group",
        "aria-label": "Actions",
        children: [article.published ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "btn btn-warning",
          onClick: function onClick() {
            return togglePublish(article.id);
          },
          children: "Un Published"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "btn btn-success",
          onClick: function onClick() {
            return togglePublish(article.id);
          },
          children: "Publish"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          className: "btn btn-primary",
          to: "articles/".concat(article.id, "/edit"),
          children: "Edit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "btn btn-danger",
          onClick: function onClick() {
            return handleRemove(article.id);
          },
          children: "Delete"
        })]
      })
    })]
  }, index);
};

ArticleRow.displayName = displayName;
ArticleRow.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ArticleRow);

/***/ }),

/***/ "./resources/js/modules/article/pages/list/components/Pagination.js":
/*!**************************************************************************!*\
  !*** ./resources/js/modules/article/pages/list/components/Pagination.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Pagination = /*#__PURE__*/function (_Component) {
  _inherits(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, props);
    _this.state = {//
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "renderLinks",
    value: function renderLinks() {
      var _this2 = this;

      var meta = this.props.meta;

      var range = _toConsumableArray(Array(meta.lastPage).keys());

      return range.map(function (n) {
        var className = meta.currentPage === n + 1 ? 'primary' : 'light';
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "btn btn-".concat(className),
          onClick: function onClick() {
            return _this2.props.onChange(n + 1);
          },
          children: n + 1
        }, n);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "btn-toolbar",
        role: "toolbar",
        "aria-label": "Toolbar with button groups",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "btn-group mr-2",
          role: "group",
          "aria-label": "First group",
          children: this.renderLinks()
        })
      });
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Pagination, "displayName", 'Pagination');

_defineProperty(Pagination, "propTypes", {
  meta: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./resources/js/modules/article/pages/list/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/modules/article/pages/list/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Article */ "./resources/js/modules/article/Article.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/article/pages/list/Page.js");
var _excluded = ["data"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import libs

 // import components



var mapStateToProps = function mapStateToProps(state) {
  var _state$articles = state.articles,
      data = _state$articles.data,
      meta = _objectWithoutProperties(_state$articles, _excluded);

  return {
    articles: data === null || data === void 0 ? void 0 : data.map(function (article) {
      return new _Article__WEBPACK_IMPORTED_MODULE_1__.default(article);
    }),
    meta: Object.assign({}, meta)
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ }),

/***/ "./resources/js/modules/article/service.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/article/service.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleAddRequest": function() { return /* binding */ articleAddRequest; },
/* harmony export */   "articleUpdateRequest": function() { return /* binding */ articleUpdateRequest; },
/* harmony export */   "articleRemoveRequest": function() { return /* binding */ articleRemoveRequest; },
/* harmony export */   "articleListRequest": function() { return /* binding */ articleListRequest; },
/* harmony export */   "articleEditRequest": function() { return /* binding */ articleEditRequest; },
/* harmony export */   "articleFetchRequest": function() { return /* binding */ articleFetchRequest; }
/* harmony export */ });
/* harmony import */ var _utils_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Http */ "./resources/js/utils/Http.js");
/* harmony import */ var _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Transformer */ "./resources/js/utils/Transformer.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ "./resources/js/modules/article/store/actions.js");




function transformRequest(parms) {
  return _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__.default.send(parms);
}

function transformResponse(params) {
  return _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__.default.fetch(params);
}

function articleAddRequest(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _utils_Http__WEBPACK_IMPORTED_MODULE_0__.default.post('api/v1/articles', transformRequest(params)).then(function (res) {
        dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.add(transformResponse(res.data)));
        return resolve();
      })["catch"](function (err) {
        var statusCode = err.response.status;
        var data = {
          error: null,
          statusCode: statusCode
        };

        if (statusCode === 422) {
          var resetErrors = {
            errors: err.response.data,
            replace: false,
            searchStr: '',
            replaceStr: ''
          };
          data.error = _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__.default.resetValidationFields(resetErrors);
        } else if (statusCode === 401) {
          data.error = err.response.data.message;
        }

        return reject(data);
      });
    });
  };
}
function articleUpdateRequest(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _utils_Http__WEBPACK_IMPORTED_MODULE_0__.default.patch("api/v1/articles/".concat(params.id), transformRequest(params)).then(function (res) {
        dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.add(transformResponse(res.data)));
        return resolve();
      })["catch"](function (err) {
        var statusCode = err.response.status;
        var data = {
          error: null,
          statusCode: statusCode
        };

        if (statusCode === 422) {
          var resetErrors = {
            errors: err.response.data,
            replace: false,
            searchStr: '',
            replaceStr: ''
          };
          data.error = _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__.default.resetValidationFields(resetErrors);
        } else if (statusCode === 401) {
          data.error = err.response.data.message;
        }

        return reject(data);
      });
    });
  };
}
function articleRemoveRequest(id) {
  return function (dispatch) {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__.default.delete("api/v1/articles/".concat(id)).then(function () {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.remove(id));
    })["catch"](function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}
function articleListRequest(params) {
  var _params$pageNumber = params.pageNumber,
      pageNumber = _params$pageNumber === void 0 ? 1 : _params$pageNumber,
      _params$url = params.url,
      url = _params$url === void 0 ? 'api/v1/articles' : _params$url;
  return function (dispatch) {
    if (pageNumber > 1) {
      url = url + "?page=".concat(pageNumber);
    }

    _utils_Http__WEBPACK_IMPORTED_MODULE_0__.default.get(url).then(function (res) {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.list(transformResponse(res.data)));
    })["catch"](function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}
function articleEditRequest(id) {
  return function (dispatch) {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__.default.get("api/v1/articles/".concat(id)).then(function (res) {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.add(transformResponse(res.data)));
    })["catch"](function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}
function articleFetchRequest(slug) {
  return function (dispatch) {
    _utils_Http__WEBPACK_IMPORTED_MODULE_0__.default.get("api/v1/articles/published/".concat(slug)).then(function (res) {
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.add(transformResponse(res.data)));
    })["catch"](function (err) {
      // TODO: handle err
      console.error(err.response);
    });
  };
}

/***/ }),

/***/ "./resources/js/modules/article/store/actions.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/article/store/actions.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "update": function() { return /* binding */ update; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "list": function() { return /* binding */ list; }
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./resources/js/modules/article/store/action-types.js");
/* ============
 * Actions for the article module
 * ============
 *
 * The actions that are available on the
 * article module.
 */

function add(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ARTICLE_ADD,
    payload: payload
  };
}
function update(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ARTICLE_UPDATE,
    payload: payload
  };
}
function remove(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ARTICLE_REMOVE,
    payload: payload
  };
}
function list(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ARTICLE_LIST,
    payload: payload
  };
}

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_article_pages_list_index_js.js.map