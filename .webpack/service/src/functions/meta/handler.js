/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/meta/handler.ts":
/*!***************************************!*\
  !*** ./src/functions/meta/handler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! package.json */ \"./package.json\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst meta = async () => {\n    const gitLastCommitHash = (0,child_process__WEBPACK_IMPORTED_MODULE_2__.execSync)('git rev-parse HEAD').toString().trim();\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_0__.formatJSONResponse)({\n        name: package_json__WEBPACK_IMPORTED_MODULE_3__.name,\n        description: package_json__WEBPACK_IMPORTED_MODULE_3__.description,\n        version: package_json__WEBPACK_IMPORTED_MODULE_3__.version,\n        author: package_json__WEBPACK_IMPORTED_MODULE_3__.author,\n        commit: gitLastCommitHash\n    });\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_1__.middyfy)(meta);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL21ldGEvaGFuZGxlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXRmb3JtLXRlY2huaWNhbC10ZXN0Ly4vc3JjL2Z1bmN0aW9ucy9tZXRhL2hhbmRsZXIudHM/ZDM3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgfSBmcm9tICdAbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHBhY2thZ2VJbmZvIGZyb20gJ3BhY2thZ2UuanNvbic7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5cbmNvbnN0IG1ldGE6IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8c3RyaW5nPiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZ2l0TGFzdENvbW1pdEhhc2ggPSBleGVjU3luYygnZ2l0IHJldi1wYXJzZSBIRUFEJykudG9TdHJpbmcoKS50cmltKCk7XG5cbiAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgbmFtZTogcGFja2FnZUluZm8ubmFtZSxcbiAgICBkZXNjcmlwdGlvbjogcGFja2FnZUluZm8uZGVzY3JpcHRpb24sXG4gICAgdmVyc2lvbjogcGFja2FnZUluZm8udmVyc2lvbixcbiAgICBhdXRob3I6IHBhY2thZ2VJbmZvLmF1dGhvcixcbiAgICBjb21taXQ6IGdpdExhc3RDb21taXRIYXNoXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBtaWRkeWZ5KG1ldGEpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/meta/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse),\n/* harmony export */   \"checkAPI\": () => (/* binding */ checkAPI)\n/* harmony export */ });\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\nconst checkAPI = async (name, url) => await new Promise((resolve) => {\n    (0,http__WEBPACK_IMPORTED_MODULE_0__.get)(url.href, (res) => {\n        res.on('data', function (data) {\n            process.stdout.write(data);\n        });\n        res.on('end', () => {\n            resolve({\n                function: name,\n                endpoint: url.href,\n                statusCode: res.statusCode\n            });\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdGZvcm0tdGVjaG5pY2FsLXRlc3QvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxuICBIYW5kbGVyXG59IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnaHR0cCc7XG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tICdqc29uLXNjaGVtYS10by10cyc7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgeyBVUkwgfSBmcm9tICd1cmwnO1xuXG50eXBlIEFwaVN0YXR1cyA9IHtcbiAgZnVuY3Rpb246IHN0cmluZztcbiAgZW5kcG9pbnQ6IHN0cmluZztcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2UgPSB7XG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcbiAgYm9keTogc3RyaW5nO1xufTtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7XG4gIGJvZHk6IEZyb21TY2hlbWE8Uz47XG59O1xuXG5leHBvcnQgdHlwZSBMYW1iZGFIYW5kbGVyPFM+ID0gSGFuZGxlcjxcbiAgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdFxuPjtcblxuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IExhbWJkYUhhbmRsZXI8Uz47XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSAoXG4gIHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogUmVzcG9uc2UgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSlcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0FQSSA9IGFzeW5jIChuYW1lOiBzdHJpbmcsIHVybDogVVJMKTogUHJvbWlzZTxBcGlTdGF0dXM+ID0+XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgZ2V0KHVybC5ocmVmLCAocmVzKSA9PiB7XG4gICAgICByZXMub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXMub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgZnVuY3Rpb246IG5hbWUsXG4gICAgICAgICAgZW5kcG9pbnQ6IHVybC5ocmVmLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQTtBQUVBO0FBeUJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0Zm9ybS10ZWNobmljYWwtdGVzdC8uL3NyYy9saWJzL2xhbWJkYS50cz82YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tICdAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyJztcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7IExhbWJkYUhhbmRsZXIgfSBmcm9tICcuL2FwaUdhdGV3YXknO1xuXG5leHBvcnQgY29uc3QgbWlkZHlmeSA9IChoYW5kbGVyOiBIYW5kbGVyKTogTGFtYmRhSGFuZGxlcjxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"platform-technical-test","version":"1.0.0","private":true,"description":"Serverless API","main":"serverless.ts","scripts":{"test":"jest","pretest":"eslint --ignore-path .gitignore . --fix","start":"nodemon","bundle":"yarn sls webpack","deploy":"yarn sls deploy","package":"yarn sls package","hawkeye-scan":"hawkeye scan"},"husky":{"hooks":{"pre-commit":"yarn pretest && yarn hawkeye-scan"}},"engines":{"node":">=14.15.0"},"dependencies":{"@middy/core":"^1.5.2","@middy/http-json-body-parser":"^1.5.2","lodash":"^4.17.21","source-map-support":"^0.5.19"},"devDependencies":{"@hawkeyesec/scanner-cli":"^1.8.1","@serverless/typescript":"^2.23.0","@types/aws-lambda":"^8.10.71","@types/jest":"^26.0.23","@types/node":"^14.14.25","@typescript-eslint/eslint-plugin":"^4.24.0","@typescript-eslint/parser":"^4.24.0","eslint":"^7.26.0","eslint-config-prettier":"^8.3.0","eslint-plugin-jest":"^24.3.6","eslint-plugin-prettier":"^3.4.0","eslint-webpack-plugin":"^2.5.4","husky":"^6.0.0","jest":"^26.6.3","json-schema-to-ts":"^1.5.0","lint-staged":"^11.0.0","nodemon":"^2.0.7","prettier":"^2.3.0","serverless":"^2.23.0","serverless-offline":"^7.0.0","serverless-pseudo-parameters":"^2.5.0","serverless-webpack":"^5.3.5","ts-jest":"^26.5.6","ts-loader":"^8.0.15","ts-node":"^9.1.1","tsconfig-paths":"^3.9.0","tsconfig-paths-webpack-plugin":"^3.3.0","typescript":"^4.1.3","webpack":"^5.20.2","webpack-node-externals":"^2.5.2"},"author":"Diego Dias <ddias.dev@gmail.com>","license":"MIT"}');

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");;

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/meta/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;