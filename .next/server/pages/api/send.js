module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/send.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, res) {\n  sgMail.setApiKey(process.env.SENDGRID_API_KEY);\n  const {\n    name,\n    email,\n    text\n  } = req.body;\n  const content = {\n    to: 'micaela.rob@gmail.com',\n    from: 'micaela.rob@gmail.com',\n    subject: `${name} emailed you!! from ${email}`,\n    text: `${name} - ${text}`,\n    html: `<h1>${name},</h1><p>${text}</p><p>${email}</p>`\n  };\n\n  try {\n    await sgMail.send(content);\n    res.status(200).send('Message sent successfully.');\n  } catch (error) {\n    console.log('ERROR', error);\n    res.status(400).send('Message not sent.');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VuZC5qcz83NzNiIl0sIm5hbWVzIjpbInNnTWFpbCIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJzZXRBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiU0VOREdSSURfQVBJX0tFWSIsIm5hbWUiLCJlbWFpbCIsInRleHQiLCJib2R5IiwiY29udGVudCIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJodG1sIiwic2VuZCIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0NBQUQsQ0FBdEI7O0FBRWUsK0VBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCO0FBQ3RDSCxRQUFNLENBQUNJLFNBQVAsQ0FBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBN0I7QUFFQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmLE1BQXdCUixHQUFHLENBQUNTLElBQWxDO0FBRUEsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLE1BQUUsRUFBRSx1QkFEVTtBQUVkQyxRQUFJLEVBQUUsdUJBRlE7QUFHZEMsV0FBTyxFQUFHLEdBQUVQLElBQUssdUJBQXNCQyxLQUFNLEVBSC9CO0FBSWRDLFFBQUksRUFBRyxHQUFFRixJQUFLLE1BQUtFLElBQUssRUFKVjtBQUtkTSxRQUFJLEVBQUcsT0FBTVIsSUFBSyxZQUFXRSxJQUFLLFVBQVNELEtBQU07QUFMbkMsR0FBaEI7O0FBUUEsTUFBSTtBQUNGLFVBQU1ULE1BQU0sQ0FBQ2lCLElBQVAsQ0FBWUwsT0FBWixDQUFOO0FBQ0FULE9BQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JELElBQWhCLENBQXFCLDRCQUFyQjtBQUNELEdBSEQsQ0FHRSxPQUFPRSxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsS0FBckI7QUFDQWhCLE9BQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JELElBQWhCLENBQXFCLG1CQUFyQjtBQUNEO0FBQ0YsQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zZW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2dNYWlsID0gcmVxdWlyZSgnQHNlbmRncmlkL21haWwnKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihyZXEsIHJlcykge1xuICBzZ01haWwuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVkpXG5cbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgdGV4dCB9ID0gcmVxLmJvZHlcblxuICBjb25zdCBjb250ZW50ID0ge1xuICAgIHRvOiAnbWljYWVsYS5yb2JAZ21haWwuY29tJyxcbiAgICBmcm9tOiAnbWljYWVsYS5yb2JAZ21haWwuY29tJyxcbiAgICBzdWJqZWN0OiBgJHtuYW1lfSBlbWFpbGVkIHlvdSEhIGZyb20gJHtlbWFpbH1gLFxuICAgIHRleHQ6IGAke25hbWV9IC0gJHt0ZXh0fWAsXG4gICAgaHRtbDogYDxoMT4ke25hbWV9LDwvaDE+PHA+JHt0ZXh0fTwvcD48cD4ke2VtYWlsfTwvcD5gXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHNnTWFpbC5zZW5kKGNvbnRlbnQpXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ01lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkuJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRVJST1InLCBlcnJvcilcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnTWVzc2FnZSBub3Qgc2VudC4nKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/send.js\n");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sendgrid/mail\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2VuZGdyaWQvbWFpbFwiPzJmN2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNlbmRncmlkL21haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2VuZGdyaWQvbWFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sendgrid/mail\n");

/***/ })

/******/ });