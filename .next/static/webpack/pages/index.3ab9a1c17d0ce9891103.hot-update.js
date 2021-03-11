webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/micaela-designs/components/Carousel.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://d2k5lcv0ndozn2.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var images = props.project.images;\n  var types = props.project.types;\n  var typeList = types.map(function (type) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"type\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n        children: type\n      }, types.indexOf(type), false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 30\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 12\n    }, _this);\n  });\n\n  var setClass = function setClass(num) {\n    if (num === index) {\n      return 'selected';\n    }\n\n    return 'notSelected';\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"project\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"description\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        distance: \"5vh\",\n        delay: 500,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.project.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        distance: \"5vh\",\n        delay: 550,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: props.project.mainText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        distance: \"5vh\",\n        delay: 600,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: props.project.secondaryText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 600,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"types\",\n            children: typeList\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projectImage\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 500,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            loader: myLoader,\n            src: images[index],\n            width: \"906\",\n            height: \"600\"\n          }, images[index], false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"changeImage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 500,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 600,\n          bottom: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 700,\n          bottom: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 800,\n          bottom: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n};\n\n_s(Carousel, \"x2oTrUAHknTo02Ld7gcDOqaxQ8E=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3g/NTJjNyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIkNhcm91c2VsIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJpbWFnZXMiLCJwcm9qZWN0IiwidHlwZXMiLCJ0eXBlTGlzdCIsIm1hcCIsInR5cGUiLCJpbmRleE9mIiwic2V0Q2xhc3MiLCJudW0iLCJuYW1lIiwibWFpblRleHQiLCJzZWNvbmRhcnlUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QjtBQUFBLE1BQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzVDLHlEQUFnREYsR0FBaEQsZ0JBQXlEQyxLQUF6RCxnQkFBb0VDLE9BQU8sSUFBSSxFQUEvRTtBQUNELENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsS0FBVCxFQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLENBQUQsQ0FESDtBQUFBLE1BQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxRQURpQjs7QUFFL0IsTUFBTUMsTUFBTSxHQUFHSixLQUFLLENBQUNLLE9BQU4sQ0FBY0QsTUFBN0I7QUFJQSxNQUFNRSxLQUFLLEdBQUdOLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxLQUE1QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO0FBQ2pDLHdCQUFPO0FBQUssZUFBTSxNQUFYO0FBQUEsNkJBQWtCO0FBQUEsa0JBQStCQTtBQUEvQixTQUFTSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0QsSUFBZCxD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QUFEO0FBQU0sa0JBQVEsRUFBQyxLQUFmO0FBQXFCLGVBQUssRUFBRSxHQUE1QjtBQUFpQyxnQkFBTTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0RUQsQ0FqR0Q7O0dBQU1ILFE7O0tBQUFBLFE7QUFtR1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgcmV0dXJuIGBodHRwczovL2QyazVsY3YwbmRvem4yLmNsb3VkZnJvbnQubmV0LyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cblxuY29uc3QgQ2Fyb3VzZWwgPSBmdW5jdGlvbihwcm9wcykge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBpbWFnZXMgPSBwcm9wcy5wcm9qZWN0LmltYWdlcztcblxuXG5cbiAgY29uc3QgdHlwZXMgPSBwcm9wcy5wcm9qZWN0LnR5cGVzO1xuICBjb25zdCB0eXBlTGlzdCA9IHR5cGVzLm1hcCh0eXBlID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzcz1cInR5cGVcIj48aDUga2V5PXt0eXBlcy5pbmRleE9mKHR5cGUpfT57dHlwZX08L2g1PjwvZGl2PlxuICB9KVxuXG4gIGNvbnN0IHNldENsYXNzID0gKG51bSkgPT4ge1xuICAgIGlmIChudW0gPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJztcbiAgICB9XG4gICAgcmV0dXJuICdub3RTZWxlY3RlZCc7XG4gIH07XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezUwMH0gYm90dG9tPlxuICAgICAgICAgIDxoMz57cHJvcHMucHJvamVjdC5uYW1lfTwvaDM+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17NTUwfSBib3R0b20+XG4gICAgICAgICAgPHA+e3Byb3BzLnByb2plY3QubWFpblRleHR9PC9wPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezYwMH0gYm90dG9tPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgIHtwcm9wcy5wcm9qZWN0LnNlY29uZGFyeVRleHR9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezYwMH0gYm90dG9tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0eXBlc1wiPlxuICAgICAgICAgIHt0eXBlTGlzdH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RJbWFnZVwiPlxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezUwMH0gYm90dG9tPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgIGtleT17aW1hZ2VzW2luZGV4XX1cbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxuICAgICAgICAgIHNyYz17aW1hZ2VzW2luZGV4XX1cbiAgICAgICAgICB3aWR0aD1cIjkwNlwiXG4gICAgICAgICAgaGVpZ2h0PVwiNjAwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiA8bGkgY2xhc3M9XCJjaGFuZ2VJbWFnZVwiPlxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezUwMH0gYm90dG9tPlxuICAgICAgICAgICAgPHVsPjxkaXYgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgc2V0SW5kZXgoMCl9IGNsYXNzPXtzZXRDbGFzcygwKX0+MDE8L2Rpdj48L3VsPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs2MDB9IGJvdHRvbT5cbiAgICAgICAgICAgIDx1bD48ZGl2IG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHNldEluZGV4KDEpfSBjbGFzcz17c2V0Q2xhc3MoMSl9PjAyPC9kaXY+PC91bD5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17NzAwfSBib3R0b20+XG4gICAgICAgICAgICA8dWw+PGRpdiBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBzZXRJbmRleCgyKX0gY2xhc3M9e3NldENsYXNzKDIpfT4wMzwvZGl2PjwvdWw+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezgwMH0gYm90dG9tPlxuICAgICAgICAgICAgPHVsPjxkaXYgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgc2V0SW5kZXgoMyl9IGNsYXNzPXtzZXRDbGFzcygzKX0+MDQ8L2Rpdj48L3VsPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICA8bGkgY2xhc3M9XCJjaGFuZ2VJbWFnZVwiPlxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezUwMH0gYm90dG9tPlxuICAgICAgICAgICAgPHVsPjxwPjwvcD48L3VsPlxuXG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezYwMH0gYm90dG9tPlxuXG5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17NzAwfSBib3R0b20+XG5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17ODAwfSBib3R0b20+XG5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.jsx\n");

/***/ })

})