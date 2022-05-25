(self["webpackChunklaravel_react"] = self["webpackChunklaravel_react"] || []).push([["resources_js_modules_auth_pages_register_index_js"],{

/***/ "./resources/js/modules/auth/pages/register/Page.js":
/*!**********************************************************!*\
  !*** ./resources/js/modules/auth/pages/register/Page.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/auth/service.js");
/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ree-validate */ "./node_modules/ree-validate/dist/ree-validate.esm.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Form */ "./resources/js/modules/auth/pages/register/components/Form.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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

//import libs






 // import components

 // initialize component




var Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this, props);
    _this.validator = new ree_validate__WEBPACK_IMPORTED_MODULE_5__.Validator({
      name: 'required|min:6',
      email: 'required|email',
      password: 'required|min:6',
      passwordConfirmation: 'required|min:6'
    });
    _this.state = {
      credentials: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: _this.validator.errors,
      fields: _this.validator.fields
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').attr('style', 'background-color: #eee');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').removeAttr('style');
    } // event to handle input change

  }, {
    key: "handleChange",
    value: function handleChange(name, value) {
      var _this2 = this;

      var errors = this.validator.errors;
      this.setState({
        credentials: _objectSpread(_objectSpread({}, this.state.credentials), {}, _defineProperty({}, name, value))
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
      var credentials = this.state.credentials;
      var errors = this.validator.errors;
      this.validator.validateAll(credentials).then(function (success) {
        if (success) {
          _this3.submit(credentials);
        } else {
          _this3.setState({
            errors: errors
          });
        }
      });
    }
  }, {
    key: "submit",
    value: function submit(credentials) {
      var _this4 = this;

      this.props.dispatch((0,_service__WEBPACK_IMPORTED_MODULE_4__.register)(credentials))["catch"](function (_ref) {
        var error = _ref.error,
            statusCode = _ref.statusCode;
        var errors = _this4.validator.errors;

        if (statusCode === 422) {
          lodash__WEBPACK_IMPORTED_MODULE_3___default().forOwn(error, function (message, field) {
            errors.add(field, message);
          });
        } else if (statusCode === 401) {
          errors.add('password', error);
        }

        _this4.setState({
          errors: errors
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      // check if user is authenticated then redirect him to home page
      if (this.props.isAuthenticated) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
          to: "/"
        });
      }

      var _this$state$credentia = this.state.credentials,
          name = _this$state$credentia.name,
          email = _this$state$credentia.email,
          password = _this$state$credentia.password,
          passwordConfirmation = _this$state$credentia.passwordConfirmation;
      var props = {
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        errors: this.state.errors,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "container py-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "col-md-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "mx-auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "anchor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "card has-shadow",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "card-body",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread({}, props))
                  })
                })]
              })
            })
          })
        })
      });
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Page, "displayName", 'RegisterPage');

_defineProperty(Page, "propTypes", {
  isAuthenticated: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/auth/pages/register/components/Form.js":
/*!*********************************************************************!*\
  !*** ./resources/js/modules/auth/pages/register/components/Form.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var displayName = 'RegisterFrom';
var propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  email: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  password: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  passwordConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  handleChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};

var Form = function Form(_ref) {
  var name = _ref.name,
      email = _ref.email,
      password = _ref.password,
      passwordConfirmation = _ref.passwordConfirmation,
      errors = _ref.errors,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    className: "form",
    role: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      className: "card-title",
      children: "Sign up"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "name",
        className: "sr-only",
        children: "Email"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        className: "form-control form-control-lg rounded-0 ".concat(errors.has('name') && 'is-invalid'),
        name: "name",
        id: "name",
        placeholder: "Full Name",
        value: name || '',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        required: true,
        autoFocus: true
      }), errors.has('name') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "invalid-feedback",
        children: errors.first('name')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "email",
        className: "sr-only",
        children: "Email"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "email",
        className: "form-control form-control-lg rounded-0 ".concat(errors.has('email') && 'is-invalid'),
        name: "email",
        id: "email",
        placeholder: "Email address",
        value: email || '',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        required: true,
        autoFocus: true
      }), errors.has('email') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "invalid-feedback",
        children: errors.first('email')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "password",
        className: "sr-only",
        children: "Password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "password",
        className: "form-control form-control-lg rounded-0 ".concat(errors.has('password') && 'is-invalid'),
        id: "password",
        name: "password",
        placeholder: "Password",
        value: password || '',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        required: true
      }), errors.has('password') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "invalid-feedback",
        children: errors.first('password')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "passwordConfirmation",
        className: "sr-only",
        children: "Confirm Password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "password",
        className: "form-control form-control-lg rounded-0 ".concat(errors.has('passwordConfirmation') && 'is-invalid'),
        id: "passwordConfirmation",
        name: "passwordConfirmation",
        placeholder: "Confirm Password",
        value: passwordConfirmation || '',
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        required: true
      }), errors.has('passwordConfirmation') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "invalid-feedback",
        children: errors.first('passwordConfirmation')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: "btn btn-lg btn-primary btn-block",
      type: "submit",
      disabled: errors.any(),
      children: "Sign Up"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["Back to", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "/login",
        className: "btn btn-link",
        children: "Login"
      })]
    })]
  });
};

Form.displayName = displayName;
Form.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/modules/auth/pages/register/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/modules/auth/pages/register/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/auth/pages/register/Page.js");
// import libs
 // import components



var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_auth_pages_register_index_js.js.map