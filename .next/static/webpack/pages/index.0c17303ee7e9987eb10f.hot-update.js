webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/micaela-designs/components/Form.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Form = function Form() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    name: '',\n    email: '',\n    text: ''\n  }),\n      message = _useState[0],\n      writeMessage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      submitted = _useState2[0],\n      setSubmit = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      hover = _useState3[0],\n      setHover = _useState3[1];\n\n  var handleNameChange = function handleNameChange(event) {\n    event.persist();\n    writeMessage(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, {\n        name: event.target.value\n      });\n    });\n  };\n\n  var handleEmailChange = function handleEmailChange(event) {\n    event.persist();\n    writeMessage(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, {\n        email: event.target.value\n      });\n    });\n  };\n\n  var handleTextChange = function handleTextChange(event) {\n    event.persist();\n    writeMessage(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, {\n        text: event.target.value\n      });\n    });\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var res;\n      return _Users_henryfradley_personalProjects_micaela_designs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return fetch('/api/send', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(message)\n              });\n\n            case 3:\n              res = _context.sent;\n              setSubmit(true);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"formHolder\",\n    children: !submitted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      \"class\": \"contactForm\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        distance: \"5vh\",\n        delay: 500,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          required: true,\n          onChange: handleNameChange,\n          value: message.name,\n          name: \"name\",\n          type: \"text\",\n          placeholder: \"Your Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        distance: \"5vh\",\n        delay: 700,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          required: true,\n          onChange: handleEmailChange,\n          value: message.email,\n          name: \"email\",\n          type: \"email\",\n          placeholder: \"Your Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        distance: \"5vh\",\n        delay: 900,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          required: true,\n          onChange: handleTextChange,\n          value: message.text,\n          name: \"message\",\n          type: \"text\",\n          \"class\": \"bigInput\",\n          placeholder: \"Let's chat! What can I do for you?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        distance: \"5vh\",\n        delay: 1100,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          \"class\": \"submitButton\",\n          type: \"submit\",\n          value: \"LET'S DO THIS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"thanks\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"airplane\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          src: \"/Airplane.png\",\n          alt: \"airplane\",\n          layout: \"fill\",\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        distance: \"5vh\",\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"THANKS FOR YOUR MESSAGE!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        distance: \"5vh\",\n        delay: 100,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"I will be in touch with you soon!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Form, \"YE8kW0aVVWkEceBhzsvRdNWhEX4=\");\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD83MzI0Il0sIm5hbWVzIjpbIkZvcm0iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInRleHQiLCJtZXNzYWdlIiwid3JpdGVNZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0IiwiaG92ZXIiLCJzZXRIb3ZlciIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInBlcnNpc3QiLCJ2YWx1ZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlVGV4dENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFHZUMsc0RBQVEsQ0FBQztBQUN2Q0MsUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxTQUFLLEVBQUUsRUFGZ0M7QUFHdkNDLFFBQUksRUFBRTtBQUhpQyxHQUFELENBSHZCO0FBQUEsTUFHVkMsT0FIVTtBQUFBLE1BR0RDLFlBSEM7O0FBQUEsbUJBVWNMLHNEQUFRLENBQUMsS0FBRCxDQVZ0QjtBQUFBLE1BVVZNLFNBVlU7QUFBQSxNQVVDQyxTQVZEOztBQUFBLG1CQVdTUCxzREFBUSxDQUFDLElBQUQsQ0FYakI7QUFBQSxNQVdWUSxLQVhVO0FBQUEsTUFXSEMsUUFYRzs7QUFjakIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENBLFNBQUssQ0FBQ0MsT0FBTjtBQUNBUCxnQkFBWSxDQUFDLFVBQUNRLE1BQUQ7QUFBQSw2Q0FDUkEsTUFEUTtBQUVYWixZQUFJLEVBQUVVLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUZSO0FBQUEsS0FBRCxDQUFaO0FBSUQsR0FORDs7QUFRQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNMLEtBQUQsRUFBVztBQUNuQ0EsU0FBSyxDQUFDQyxPQUFOO0FBQ0FQLGdCQUFZLENBQUMsVUFBQ1EsTUFBRDtBQUFBLDZDQUNSQSxNQURRO0FBRVhYLGFBQUssRUFBRVMsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBRlQ7QUFBQSxLQUFELENBQVo7QUFJRCxHQU5EOztBQVFBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ04sS0FBRCxFQUFXO0FBQ2xDQSxTQUFLLENBQUNDLE9BQU47QUFDQVAsZ0JBQVksQ0FBQyxVQUFDUSxNQUFEO0FBQUEsNkNBQ1JBLE1BRFE7QUFFWFYsWUFBSSxFQUFFUSxLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFGUjtBQUFBLEtBQUQsQ0FBWjtBQUlELEdBTkQ7O0FBVUEsTUFBTUcsWUFBWTtBQUFBLGtVQUFHLGlCQUFPUCxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsbUJBQUssQ0FBQ1EsY0FBTjtBQURtQjtBQUFBLHFCQUVEQyxLQUFLLENBQUMsV0FBRCxFQUFjO0FBQ25DQyxzQkFBTSxFQUFFLE1BRDJCO0FBRW5DQyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRjBCO0FBS25DQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXJCLE9BQWY7QUFMNkIsZUFBZCxDQUZKOztBQUFBO0FBRWJzQixpQkFGYTtBQVVuQm5CLHVCQUFTLENBQUMsSUFBRCxDQUFUOztBQVZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWNBLHNCQUNFO0FBQUssYUFBTSxZQUFYO0FBQUEsY0FDRyxDQUFDWixTQUFELGdCQUNDO0FBQU0sY0FBUSxFQUFFWSxZQUFoQjtBQUE4QixlQUFNLGFBQXBDO0FBQUEsOEJBQ0EscUVBQUMsd0RBQUQ7QUFBTSxnQkFBUSxFQUFDLEtBQWY7QUFBcUIsYUFBSyxFQUFFLEdBQTVCO0FBQWlDLGNBQU0sTUFBdkM7QUFBQSwrQkFDRTtBQUFPLGtCQUFRLE1BQWY7QUFBZ0Isa0JBQVEsRUFBRVIsZ0JBQTFCO0FBQTRDLGVBQUssRUFBRU4sT0FBTyxDQUFDSCxJQUEzRDtBQUFpRSxjQUFJLEVBQUMsTUFBdEU7QUFBNkUsY0FBSSxFQUFDLE1BQWxGO0FBQXlGLHFCQUFXLEVBQUM7QUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlBLHFFQUFDLHdEQUFEO0FBQU0sZ0JBQVEsRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRSxHQUE1QjtBQUFpQyxjQUFNLE1BQXZDO0FBQUEsK0JBQ0U7QUFBTyxrQkFBUSxNQUFmO0FBQWdCLGtCQUFRLEVBQUVlLGlCQUExQjtBQUE2QyxlQUFLLEVBQUVaLE9BQU8sQ0FBQ0YsS0FBNUQ7QUFBbUUsY0FBSSxFQUFDLE9BQXhFO0FBQWdGLGNBQUksRUFBQyxPQUFyRjtBQUE2RixxQkFBVyxFQUFDO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkEsZUFPQSxxRUFBQyx3REFBRDtBQUFNLGdCQUFRLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUUsR0FBNUI7QUFBaUMsY0FBTSxNQUF2QztBQUFBLCtCQUNFO0FBQVUsa0JBQVEsTUFBbEI7QUFBbUIsa0JBQVEsRUFBRWUsZ0JBQTdCO0FBQStDLGVBQUssRUFBRWIsT0FBTyxDQUFDRCxJQUE5RDtBQUFvRSxjQUFJLEVBQUMsU0FBekU7QUFBbUYsY0FBSSxFQUFDLE1BQXhGO0FBQStGLG1CQUFNLFVBQXJHO0FBQWdILHFCQUFXLEVBQUM7QUFBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQQSxlQVVBLHFFQUFDLHdEQUFEO0FBQU0sZ0JBQVEsRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRSxJQUE1QjtBQUFrQyxjQUFNLE1BQXhDO0FBQUEsK0JBQ0U7QUFBTyxtQkFBTSxjQUFiO0FBQTRCLGNBQUksRUFBQyxRQUFqQztBQUEwQyxlQUFLLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxnQkFnQkM7QUFBSyxlQUFNLFFBQVg7QUFBQSw4QkFFRTtBQUFLLGlCQUFNLFVBQVg7QUFBQSwrQkFDRSxxRUFBQyxpREFBRDtBQUNFLGFBQUcsRUFBQyxlQUROO0FBRUUsYUFBRyxFQUFDLFVBRk47QUFHRSxnQkFBTSxFQUFDLE1BSFQ7QUFJRSxtQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVdFLHFFQUFDLHdEQUFEO0FBQU0sZ0JBQVEsRUFBQyxLQUFmO0FBQXFCLGNBQU0sTUFBM0I7QUFBQSwrQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQWNFLHFFQUFDLHdEQUFEO0FBQU0sZ0JBQVEsRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRSxHQUE1QjtBQUFpQyxjQUFNLE1BQXZDO0FBQUEsK0JBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQWpHRDs7R0FBTUosSTs7S0FBQUEsSTtBQW9HU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgRm9ybSA9ICgpID0+IHtcblxuXG4gIGNvbnN0IFttZXNzYWdlLCB3cml0ZU1lc3NhZ2VdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICB0ZXh0OiAnJ1xuICB9KTtcblxuXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHdyaXRlTWVzc2FnZSgodmFsdWVzKSA9PiAoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICB3cml0ZU1lc3NhZ2UoKHZhbHVlcykgPT4gKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgd3JpdGVNZXNzYWdlKCh2YWx1ZXMpID0+ICh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICB0ZXh0OiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NlbmQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpXG4gICAgfSk7XG5cbiAgICBzZXRTdWJtaXQodHJ1ZSk7XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJmb3JtSG9sZGVyXCI+XG4gICAgICB7IXN1Ym1pdHRlZCA/XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzPVwiY29udGFjdEZvcm1cIj5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17NTAwfSBib3R0b20+XG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSB2YWx1ZT17bWVzc2FnZS5uYW1lfSBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIj48L2lucHV0PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezcwMH0gYm90dG9tPlxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9IHZhbHVlPXttZXNzYWdlLmVtYWlsfSBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIj48L2lucHV0PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezkwMH0gYm90dG9tPlxuICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZCBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX0gdmFsdWU9e21lc3NhZ2UudGV4dH0gbmFtZT1cIm1lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmlnSW5wdXRcIiBwbGFjZWhvbGRlcj1cIkxldCdzIGNoYXQhIFdoYXQgY2FuIEkgZG8gZm9yIHlvdT9cIj48L3RleHRhcmVhPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezExMDB9IGJvdHRvbT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzdWJtaXRCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMRVQnUyBETyBUSElTXCI+PC9pbnB1dD5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdiBjbGFzcz1cInRoYW5rc1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFpcnBsYW5lXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL0FpcnBsYW5lLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImFpcnBsYW5lXCJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgYm90dG9tPlxuICAgICAgICAgIDxoMz5USEFOS1MgRk9SIFlPVVIgTUVTU0FHRSE8L2gzPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXsxMDB9IGJvdHRvbT5cbiAgICAgICAgICA8cD5JIHdpbGwgYmUgaW4gdG91Y2ggd2l0aCB5b3Ugc29vbiE8L3A+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgfVxuXG5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.jsx\n");

/***/ })

})