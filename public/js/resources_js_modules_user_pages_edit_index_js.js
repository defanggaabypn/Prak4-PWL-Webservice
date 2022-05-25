(self["webpackChunklaravel_react"] = self["webpackChunklaravel_react"] || []).push([["resources_js_modules_user_pages_edit_index_js"],{

/***/ "./resources/js/modules/user/pages/edit/Page.js":
/*!******************************************************!*\
  !*** ./resources/js/modules/user/pages/edit/Page.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ "./resources/js/modules/user/service.js");
/* harmony import */ var ree_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ree-validate */ "./node_modules/ree-validate/dist/ree-validate.esm.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Form */ "./resources/js/modules/user/pages/edit/components/Form.js");
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
      'name': 'required|min:3',
      'email': 'required|email',
      'phone': 'min:8|numeric',
      'about': 'min:10|max:1024'
    });

    var user = _this.props.user.toJson();

    _this.state = {
      user: user,
      errors: _this.validator.errors
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Page, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var user = nextProps.user.toJson();

      if (!lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqual(this.state.user, user)) {
        this.setState({
          user: user
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(name, value) {
      var _this2 = this;

      var errors = this.validator.errors;
      this.setState({
        user: _objectSpread(_objectSpread({}, this.props.user), {}, _defineProperty({}, name, value))
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
      var user = this.state.user;
      var errors = this.validator.errors;
      this.validator.validateAll(user).then(function (success) {
        if (success) {
          _this3.submit(user);
        } else {
          _this3.setState({
            errors: errors
          });
        }
      });
    }
  }, {
    key: "submit",
    value: function submit(user) {
      var _this4 = this;

      this.props.dispatch((0,_service__WEBPACK_IMPORTED_MODULE_3__.userUpdateRequest)(user))["catch"](function (_ref) {
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("main", {
        className: "col-sm-9 ml-sm-auto col-md-10 pt-3",
        role: "main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          children: "Profile"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-12 col-md-9 col-sm-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, this.state), {}, {
              onChange: this.handleChange,
              onSubmit: this.handleSubmit
            }))
          })
        })]
      });
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Page, "displayName", 'UserPage');

_defineProperty(Page, "propTypes", {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/modules/user/pages/edit/components/Form.js":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/user/pages/edit/components/Form.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var displayName = 'UserFrom';
var propTypes = {
  user: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};

var Form = function Form(_ref) {
  var user = _ref.user,
      errors = _ref.errors,
      _onChange = _ref.onChange,
      _onSubmit = _ref.onSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "name",
        className: "col-sm-2 col-form-label",
        children: "Name"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-sm-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "text",
          id: "name",
          name: "name",
          className: "form-control ".concat(errors.has('name') && 'is-invalid'),
          placeholder: "Full Name",
          value: user.name || '',
          onChange: function onChange(e) {
            return _onChange(e.target.name, e.target.value);
          }
        }), errors.has('name') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "invalid-feedback",
          children: errors.first('name')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "email",
        className: "col-sm-2 col-form-label",
        children: "Email"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-sm-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "email",
          id: "email",
          name: "email",
          className: "form-control ".concat(errors.has('email') && 'is-invalid'),
          placeholder: "Email",
          value: user.email || '',
          onChange: function onChange(e) {
            return _onChange(e.target.name, e.target.value);
          }
        }), errors.has('email') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "invalid-feedback",
          children: errors.first('email')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "phone",
        className: "col-sm-2 col-form-label",
        children: "Phone"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-sm-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "text",
          id: "phone",
          name: "phone",
          className: "form-control ".concat(errors.has('phone') && 'is-invalid'),
          placeholder: "Phone",
          value: user.phone || '',
          onChange: function onChange(e) {
            return _onChange(e.target.name, e.target.value);
          }
        }), errors.has('phone') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "invalid-feedback",
          children: errors.first('phone')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "about",
        className: "col-sm-2 col-form-label",
        children: "About"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-sm-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
          id: "about",
          name: "about",
          className: "form-control ".concat(errors.has('about') && 'is-invalid'),
          rows: "3",
          placeholder: "About",
          value: user.about || '',
          onChange: function onChange(e) {
            return _onChange(e.target.name, e.target.value);
          }
        }), errors.has('about') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "invalid-feedback",
          children: errors.first('about')
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

/***/ "./resources/js/modules/user/pages/edit/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/modules/user/pages/edit/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../User */ "./resources/js/modules/user/User.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/js/modules/user/pages/edit/Page.js");
/* ============
 * Container
 * ============.
 *
 * Containers are used fetch the data from state
 * and disperse to the components.
 */
// import libs

 // import components

 // map store state as properties of the component

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: new _User__WEBPACK_IMPORTED_MODULE_1__.default(state.user)
  };
}; // binding store with component


/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_Page__WEBPACK_IMPORTED_MODULE_2__.default));

/***/ }),

/***/ "./resources/js/modules/user/service.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/user/service.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userUpdateRequest": function() { return /* binding */ userUpdateRequest; }
/* harmony export */ });
/* harmony import */ var _utils_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Http */ "./resources/js/utils/Http.js");
/* harmony import */ var _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Transformer */ "./resources/js/utils/Transformer.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ "./resources/js/modules/user/store/actions.js");



function userUpdateRequest(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      _utils_Http__WEBPACK_IMPORTED_MODULE_0__.default.patch("/users/".concat(params.id), _utils_Transformer__WEBPACK_IMPORTED_MODULE_1__.default.send(params)).then(function (res) {
        dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.userUpdate(_utils_Transformer__WEBPACK_IMPORTED_MODULE_1__.default.fetch(res.data.user)));
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

/***/ }),

/***/ "./resources/js/modules/user/store/actions.js":
/*!****************************************************!*\
  !*** ./resources/js/modules/user/store/actions.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userUpdate": function() { return /* binding */ userUpdate; },
/* harmony export */   "unsetUser": function() { return /* binding */ unsetUser; }
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./resources/js/modules/user/store/action-types.js");
/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

function userUpdate(payload) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.USER_UPDATE,
    payload: payload
  };
}
function unsetUser() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.USER_UNSET
  };
}

/***/ })

}]);
//# sourceMappingURL=resources_js_modules_user_pages_edit_index_js.js.map