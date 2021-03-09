webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel.jsx":
/*!*********************************!*\
  !*** ./components/Carousel.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/henryfradley/personalProjects/micaela-designs/components/Carousel.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar myLoader = function myLoader(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      quality = _ref.quality;\n  return \"https://d2k5lcv0ndozn2.cloudfront.net/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\n\nvar Carousel = function Carousel(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var images = props.project.images;\n  var types = props.project.types;\n  var typeList = types.map(function (type) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"type\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n        children: type\n      }, types.indexOf(type), false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 30\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"project\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"description\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        distance: \"5vh\",\n        delay: 500,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.project.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        distance: \"5vh\",\n        delay: 550,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: props.project.mainText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        distance: \"5vh\",\n        delay: 600,\n        bottom: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: props.project.secondaryText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 600,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"types\",\n            children: typeList\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"projectImage\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 500,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            loader: myLoader,\n            src: images[index],\n            width: \"906\",\n            height: \"600\"\n          }, images[index], false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"changeImage\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 500,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            onClick: function onClick() {\n              return setIndex(0);\n            },\n            children: [\"01\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 30\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 600,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            onClick: function onClick() {\n              return setIndex(1);\n            },\n            children: [\"02\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 30\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 700,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            onClick: function onClick() {\n              return setIndex(2);\n            },\n            children: [\"03\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 30\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          distance: \"5vh\",\n          delay: 800,\n          bottom: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            onClick: function onClick() {\n              return setIndex(3);\n            },\n            children: [\"04\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 30\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n};\n\n_s(Carousel, \"x2oTrUAHknTo02Ld7gcDOqaxQ8E=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3g/NTJjNyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIkNhcm91c2VsIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJpbWFnZXMiLCJwcm9qZWN0IiwidHlwZXMiLCJ0eXBlTGlzdCIsIm1hcCIsInR5cGUiLCJpbmRleE9mIiwibmFtZSIsIm1haW5UZXh0Iiwic2Vjb25kYXJ5VGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkI7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM1Qyx5REFBZ0RGLEdBQWhELGdCQUF5REMsS0FBekQsZ0JBQW9FQyxPQUFPLElBQUksRUFBL0U7QUFDRCxDQUZEOztBQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLEtBQVQsRUFBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxDQUFELENBREg7QUFBQSxNQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsUUFEaUI7O0FBRS9CLE1BQU1DLE1BQU0sR0FBR0osS0FBSyxDQUFDSyxPQUFOLENBQWNELE1BQTdCO0FBSUEsTUFBTUUsS0FBSyxHQUFHTixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsS0FBNUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUFDLElBQUksRUFBSTtBQUNqQyx3QkFBTztBQUFLLGVBQU0sTUFBWDtBQUFBLDZCQUFrQjtBQUFBLGtCQUErQkE7QUFBL0IsU0FBU0gsS0FBSyxDQUFDSSxPQUFOLENBQWNELElBQWQsQ0FBVDtBQUFBO0FBQUE7QUFB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QWlDLGdCQUFNLE1BQXZDO0FBQUEsaUNBQ0U7QUFBSSxtQkFBTyxFQUFFO0FBQUEscUJBQ1hBLFFBQVEsQ0FBQyxDQUFELENBREc7QUFBQSxhQUFiO0FBQUEsMENBQ2lCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEEsZUFhQSxxRUFBQyx3REFBRDtBQUFNLGtCQUFRLEVBQUMsS0FBZjtBQUFxQixlQUFLLEVBQUUsR0FBNUI7QUFBaUMsZ0JBQU0sTUFBdkM7QUFBQSxpQ0FDRTtBQUFJLG1CQUFPLEVBQUU7QUFBQSxxQkFDWEEsUUFBUSxDQUFDLENBQUQsQ0FERztBQUFBLGFBQWI7QUFBQSwwQ0FDaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0REQsQ0ExRUQ7O0dBQU1KLFE7O0tBQUFBLFE7QUE0RVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgcmV0dXJuIGBodHRwczovL2QyazVsY3YwbmRvem4yLmNsb3VkZnJvbnQubmV0LyR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cblxuY29uc3QgQ2Fyb3VzZWwgPSBmdW5jdGlvbihwcm9wcykge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBpbWFnZXMgPSBwcm9wcy5wcm9qZWN0LmltYWdlcztcblxuXG5cbiAgY29uc3QgdHlwZXMgPSBwcm9wcy5wcm9qZWN0LnR5cGVzO1xuICBjb25zdCB0eXBlTGlzdCA9IHR5cGVzLm1hcCh0eXBlID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzcz1cInR5cGVcIj48aDUga2V5PXt0eXBlcy5pbmRleE9mKHR5cGUpfT57dHlwZX08L2g1PjwvZGl2PlxuICB9KVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs1MDB9IGJvdHRvbT5cbiAgICAgICAgICA8aDM+e3Byb3BzLnByb2plY3QubmFtZX08L2gzPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezU1MH0gYm90dG9tPlxuICAgICAgICAgIDxwPntwcm9wcy5wcm9qZWN0Lm1haW5UZXh0fTwvcD5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs2MDB9IGJvdHRvbT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICB7cHJvcHMucHJvamVjdC5zZWNvbmRhcnlUZXh0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs2MDB9IGJvdHRvbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHlwZXNcIj5cbiAgICAgICAgICB7dHlwZUxpc3R9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0SW1hZ2VcIj5cbiAgICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs1MDB9IGJvdHRvbT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBrZXk9e2ltYWdlc1tpbmRleF19XG4gICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgICAgICBzcmM9e2ltYWdlc1tpbmRleF19XG4gICAgICAgICAgd2lkdGg9XCI5MDZcIlxuICAgICAgICAgIGhlaWdodD1cIjYwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJjaGFuZ2VJbWFnZVwiPlxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezUwMH0gYm90dG9tPlxuICAgICAgICAgICAgPHVsIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHNldEluZGV4KDApfT4wMTxkaXY+PC9kaXY+PC91bD5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgZGlzdGFuY2U9XCI1dmhcIiBkZWxheT17NjAwfSBib3R0b20+XG4gICAgICAgICAgICA8dWwgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgc2V0SW5kZXgoMSl9PjAyPGRpdj48L2Rpdj48L3VsPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8RmFkZSBkaXN0YW5jZT1cIjV2aFwiIGRlbGF5PXs3MDB9IGJvdHRvbT5cbiAgICAgICAgICAgIDx1bCBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBzZXRJbmRleCgyKX0+MDM8ZGl2PjwvZGl2PjwvdWw+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGRpc3RhbmNlPVwiNXZoXCIgZGVsYXk9ezgwMH0gYm90dG9tPlxuICAgICAgICAgICAgPHVsIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHNldEluZGV4KDMpfT4wNDxkaXY+PC9kaXY+PC91bD5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.jsx\n");

/***/ })

})