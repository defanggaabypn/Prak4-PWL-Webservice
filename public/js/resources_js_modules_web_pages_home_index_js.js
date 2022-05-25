(self["webpackChunklaravel_react"] = self["webpackChunklaravel_react"] || []).push([["resources_js_modules_web_pages_home_index_js"],{

/***/ "./resources/js/common/articles/listing/components/Article.js":
/*!********************************************************************!*\
  !*** ./resources/js/common/articles/listing/components/Article.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// import libs

 // import components




var displayName = 'ArticleComponent';
var propTypes = {
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  article: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
}; // const renderAuthor = (article) => {
//   return article.user && `By ${ article.user.name }`
// }

var renderPublishedAt = function renderPublishedAt(article) {
  return article.publishedAt && "at ".concat(article.publishedAt.format('MMMM D, YYYY'));
};

function render(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "col-12 col-sm-9 mb-5 mx-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
          className: "card-title",
          children: article.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
          className: "card-subtitle mb-2 text-muted",
          children: renderPublishedAt(article)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "card-text",
          children: article.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          to: "blog/".concat(article.slug),
          className: "card-link",
          children: "Read More"
        })]
      })
    })
  });
}

render.displayName = displayName;
render.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./resources/js/common/articles/listing/components/Articles.js":
/*!*********************************************************************!*\
  !*** ./resources/js/common/articles/listing/components/Articles.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ "./resources/js/common/articles/listing/components/Article.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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






var Articles = /*#__PURE__*/function (_Component) {
  _inherits(Articles, _Component);

  var _super = _createSuper(Articles);

  function Articles(props) {
    var _this;

    _classCallCheck(this, Articles);

    _this = _super.call(this, props);
    _this.state = {//
    };
    return _this;
  }

  _createClass(Articles, [{
    key: "renderArticles",
    value: function renderArticles() {
      return this.props.articles.map(function (article, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
          index: index,
          article: article
        }, "article-".concat(index));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        id: "components-articles",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "row",
            children: this.props.articles && this.renderArticles()
          })
        })
      });
    }
  }]);

  return Articles;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Articles, "displayName", 'Articles');

_defineProperty(Articles, "propTypes", {
  articles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ }),

/***/ "./resources/js/common/articles/listing/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/common/articles/listing/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_article_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/article/Article */ "./resources/js/modules/article/Article.js");
/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Articles */ "./resources/js/common/articles/listing/components/Articles.js");
var _excluded = ["data"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// libs

 // components



var mapStateToProps = function mapStateToProps(state) {
  var _state$articles = state.articles,
      data = _state$articles.data,
      meta = _objectWithoutProperties(_state$articles, _excluded);

  return {
    articles: data === null || data === void 0 ? void 0 : data.map(function (article) {
      return new _modules_article_Article__WEBPACK_IMPORTED_MODULE_1__.default(article);
    }),
    meta: Object.assign({}, meta)
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_components_Articles__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ }),

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

/***/ }),

/***/ "./resources/js/modules/web/pages/home/Page.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/web/pages/home/Page.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./resources/js/modules/web/pages/home/components/Header.js");
/* harmony import */ var _common_articles_listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/articles/listing */ "./resources/js/common/articles/listing/index.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../article/service */ "./resources/js/modules/article/service.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 // import components


 // import services




function Page(_ref) {
  var dispatch = _ref.dispatch;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    dispatch((0,_article_service__WEBPACK_IMPORTED_MODULE_4__.articleListRequest)({
      url: 'api/v1/articles/published'
    }));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_articles_listing__WEBPACK_IMPORTED_MODULE_3__.default, {})]
  });
}
Page.displayName = 'HomePage';
Page.propTypes = {
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};

/***/ }),

/***/ "./resources/js/modules/web/pages/home/components/Header.js":
/*!******************************************************************!*\
  !*** ./resources/js/modules/web/pages/home/components/Header.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header", {
    className: "bg-primary text-white",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container text-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        width: "125",
        height: "125",
        src: "https://media-exp1.licdn.com/dms/image/C4E03AQHTAalgVTxUdw/profile-displayphoto-shrink_400_400/0/1610905424722?e=1658966400&v=beta&t=OllGxba2xIRtZtB9DfcaYwP_00c1_iD9Lu7CGMPluU0",
        alt: "...",
        className: "rounded-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        children: "Defangga Aby Vonega"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "lead",
        children: "Teknik Informatika"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        className: "lead",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
        
        }), "{ Project Manager }"]
      })]
    })
  });
}
Header.displayName = 'HomePageHeader';

/***/ }),

/***/ "./resources/js/modules/web/pages/home/index.js":
/*!******************************************************!*\
  !*** ./resources/js/modules/web/pages/home/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/web/pages/home/Page.js");
// import libs
 // import components


/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)()(_Page__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_web_pages_home_index_js.js.map