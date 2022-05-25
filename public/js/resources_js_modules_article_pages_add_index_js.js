(self["webpackChunklaravel_react"] = self["webpackChunklaravel_react"] || []).push([["resources_js_modules_article_pages_add_index_js"],{

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

/***/ "./resources/js/modules/article/pages/add/Page.js":
/*!********************************************************!*\
  !*** ./resources/js/modules/article/pages/add/Page.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/article/service.js");
/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ree-validate */ "./node_modules/ree-validate/dist/ree-validate.esm.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Form */ "./resources/js/modules/article/pages/add/components/Form.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    _this.validator = new ree_validate__WEBPACK_IMPORTED_MODULE_4__.Validator({
      title: 'required|min:3',
      content: 'required|min:10',
      description: 'required|min:10'
    });

    var article = _this.props.article.toJson();

    _this.state = {
      article: article,
      errors: _this.validator.errors
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Page, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var article = nextProps.article.toJson();

      if (!lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqual(this.state.article, article)) {
        this.setState({
          article: article
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(name, value) {
      var _this2 = this;

      var errors = this.validator.errors;
      this.setState({
        article: _objectSpread(_objectSpread({}, this.state.article), {}, _defineProperty({}, name, value))
      });
      errors.remove(name);
      this.validator.validate(name, value).then(function () {
        _this2.setState({
          errors: errors
        });
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var article = this.state.article;
      var errors = this.validator.errors;
      this.validator.validateAll(article).then(function (success) {
        if (success) {
          _this3.submit(article);
        } else {
          _this3.setState({
            errors: errors
          });
        }
      });
    }
  }, {
    key: "submit",
    value: function submit(article) {
      var _this4 = this;

      this.props.dispatch((0,_service__WEBPACK_IMPORTED_MODULE_3__.articleAddRequest)(article))["catch"](function (_ref) {
        var error = _ref.error,
            statusCode = _ref.statusCode;
        var errors = _this4.validator.errors;

        if (statusCode === 422) {
          lodash__WEBPACK_IMPORTED_MODULE_2___default().forOwn(error, function (message, field) {
            errors.add(field, message);
          });
        }

        _this4.setState({
          errors: errors
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "col-sm-9 ml-sm-auto col-md-10 pt-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          children: "Create"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, this.state), {}, {
          onChange: this.handleChange,
          onSubmit: this.handleSubmit
        }))]
      });
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Page, "displayName", 'AddArticle');

_defineProperty(Page, "propTypes", {
  article: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/article/pages/add/components/Form.js":
/*!*******************************************************************!*\
  !*** ./resources/js/modules/article/pages/add/components/Form.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var displayName = 'ArticleFrom';
var propTypes = {
  article: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};

var Form = function Form(_ref) {
  var article = _ref.article,
      errors = _ref.errors,
      onChange = _ref.onChange,
      _onSubmit = _ref.onSubmit;

  function handleChange(name, value) {
    if (value !== article[name]) {
      onChange(name, value);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "title",
        className: "col-sm-2 col-form-label",
        children: "Title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-sm-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "text",
          id: "title",
          name: "title",
          className: "form-control ".concat(errors.has('title') && 'is-invalid'),
          placeholder: "Title",
          value: article.title || '',
          onChange: function onChange(e) {
            return handleChange(e.target.name, e.target.value);
          }
        }), errors.has('title') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "invalid-feedback",
          children: errors.first('title')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "description",
        className: "col-sm-2 col-form-label",
        children: "Description"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-sm-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
          id: "description",
          name: "description",
          className: "form-control ".concat(errors.has('description') && 'is-invalid'),
          rows: "3",
          placeholder: "Description",
          value: article.description,
          onChange: function onChange(e) {
            return handleChange(e.target.name, e.target.value);
          }
        }), errors.has('description') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "invalid-feedback",
          children: errors.first('description')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "content",
        className: "col-sm-2 col-form-label",
        children: "Content"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-sm-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
          id: "content",
          name: "content",
          className: "form-control ".concat(errors.has('content') && 'is-invalid'),
          rows: "3",
          placeholder: "Content",
          value: article.content,
          onChange: function onChange(e) {
            return handleChange(e.target.name, e.target.value);
          }
        }), errors.has('content') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "invalid-feedback",
          children: errors.first('content')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "form-group row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-sm-10 ml-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          disabled: errors.any(),
          type: "submit",
          className: "btn btn-primary",
          children: "Update"
        })
      })
    })]
  });
};

Form.displayName = displayName;
Form.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/modules/article/pages/add/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/article/pages/add/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Article */ "./resources/js/modules/article/Article.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/article/pages/add/Page.js");

 // import components



var mapStateToProps = function mapStateToProps() {
  var article = new _Article__WEBPACK_IMPORTED_MODULE_1__.default({});
  return {
    article: article
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
//# sourceMappingURL=resources_js_modules_article_pages_add_index_js.js.map