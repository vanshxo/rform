"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ui/Confirm.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/ui/Confirm.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_FaInstagram_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaInstagram,FaLinkedin!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _Confirm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Confirm.css */ \"(app-pages-browser)/./src/app/components/ui/Confirm.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Import icons from react-icons\n // Import the CSS file\n\nconst Confirm = ()=>{\n    _s();\n    const [redirectToForm, setRedirectToForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State to manage redirection\n    const handleButtonClick = ()=>{\n        setRedirectToForm(true); // Set state to true when button is clicked\n    };\n    if (redirectToForm) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Navigate, {\n            to: \"/form\"\n        }, void 0, false, {\n            fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n            lineNumber: 17,\n            columnNumber: 16\n        }, undefined); // Redirect to form\n    }\n    const handleInstagramClick = ()=>{\n        window.open(\"https://www.instagram.com/yourusername\", \"_blank\"); // Replace with your Instagram link\n    };\n    const handleLClick = ()=>{\n        window.open(\"https://www.linkedin.com/company/sphinx-mnit-jaipur/posts/?feedView=all\", \"_blank\"); // Replace with your Instagram link\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-36c3bce6a3ce08ae\" + \" \" + \"landing-container1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-36c3bce6a3ce08ae\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"/image.jpg\",\n                    alt: \"Styled Image\",\n                    className: \"responsive-image\",\n                    width: 1000,\n                    height: 600,\n                    style: {\n                        position: \"absolute\",\n                        width: \"60vw\",\n                        height: \"auto\",\n                        maxHeight: \"100vh\",\n                        left: \"5%\",\n                        // Adjusted top to allow better placement\n                        transform: \"rotate(-90deg)\",\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-36c3bce6a3ce08ae\" + \" \" + \"sphinx\",\n                children: \"SPHINX\"\n            }, void 0, false, {\n                fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-36c3bce6a3ce08ae\" + \" \" + \"mtse\",\n                children: \"Thanks for registering with us\"\n            }, void 0, false, {\n                fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-36c3bce6a3ce08ae\" + \" \" + \"mtse2\",\n                children: \"Follow us on\"\n            }, void 0, false, {\n                fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-36c3bce6a3ce08ae\" + \" \" + \"insta\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaInstagram, {\n                        className: \"w-6 h-6\",\n                        onClick: handleInstagramClick\n                    }, void 0, false, {\n                        fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-36c3bce6a3ce08ae\" + \" \" + \"link\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaInstagram_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaLinkedin, {\n                        className: \"w-6 h-6\",\n                        onClick: handleLClick\n                    }, void 0, false, {\n                        fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"36c3bce6a3ce08ae\",\n                children: \"@media(max-width:768px){.responsive-image.jsx-36c3bce6a3ce08ae{width:80vw;top:15%;left:10%;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}}@media(max-width:480px){.responsive-image.jsx-36c3bce6a3ce08ae{width:90vw;left:5%;top:10%}}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/untitled folder 3/rform/src/app/components/ui/Confirm.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Confirm, \"ZB2JUgkQT2BGVTYM7GJuyShCRYw=\");\n_c = Confirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\nvar _c;\n$RefreshReg$(_c, \"Confirm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy91aS9Db25maXJtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1Q7QUFDc0MsQ0FBQyxnQ0FBZ0M7QUFDL0UsQ0FBQyxzQkFBc0I7QUFFRjtBQUU1QyxNQUFNTSxVQUFvQjs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBQyxRQUFRLDhCQUE4QjtJQUUzRixNQUFNUSxvQkFBb0I7UUFDdEJELGtCQUFrQixPQUFPLDJDQUEyQztJQUN4RTtJQUVBLElBQUlELGdCQUFnQjtRQUNoQixxQkFBTyw4REFBQ0Ysc0RBQVFBO1lBQUNLLElBQUc7Ozs7O3VCQUFZLG1CQUFtQjtJQUN2RDtJQUNBLE1BQU1DLHVCQUF1QjtRQUN6QkMsT0FBT0MsSUFBSSxDQUFDLDBDQUEwQyxXQUFXLG1DQUFtQztJQUN0RztJQUNBLE1BQU1DLGVBQWU7UUFDbkJGLE9BQU9DLElBQUksQ0FBQywyRUFBMkUsV0FBVyxtQ0FBbUM7SUFDdkk7SUFDRixxQkFFSSw4REFBQ0U7a0RBQWM7OzBCQUNYLDhEQUFDQTs7MEJBQ0csNEVBQUNiLGtEQUFLQTtvQkFDRmMsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsV0FBVTtvQkFDVkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsT0FBTzt3QkFDSEMsVUFBVTt3QkFDVkgsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkcsV0FBVzt3QkFDWEMsTUFBTTt3QkFDTCx5Q0FBeUM7d0JBQzFDQyxXQUFXO3dCQUNYQyxXQUFXO29CQUNmOzs7Ozs7Ozs7OzswQkFHUiw4REFBQ1g7MERBQWM7MEJBQVM7Ozs7OzswQkFDeEIsOERBQUNBOzBEQUFjOzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQTswREFBYzswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0E7MERBQWM7O2tDQUVuQiw4REFBQ1oscUdBQVdBO3dCQUFDZSxXQUFVO3dCQUFVUyxTQUFTaEI7Ozs7OztvQkFBdUI7Ozs7Ozs7MEJBTTdELDhEQUFDSTswREFBYzs7a0NBRWYsOERBQUNYLG9HQUFVQTt3QkFBQ2MsV0FBVTt3QkFBVVMsU0FBU2I7Ozs7OztvQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnBFO0dBNUVNUjtLQUFBQTtBQThFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvdWkvQ29uZmlybS50c3g/MjU5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEZhRmFjZWJvb2ssIEZhSW5zdGFncmFtLCBGYUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnOyAvLyBJbXBvcnQgaWNvbnMgZnJvbSByZWFjdC1pY29uc1xuaW1wb3J0ICcuL0NvbmZpcm0uY3NzJzsgLy8gSW1wb3J0IHRoZSBDU1MgZmlsZVxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nOyBcblxuY29uc3QgQ29uZmlybTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3JlZGlyZWN0VG9Gb3JtLCBzZXRSZWRpcmVjdFRvRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFN0YXRlIHRvIG1hbmFnZSByZWRpcmVjdGlvblxuXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFJlZGlyZWN0VG9Gb3JtKHRydWUpOyAvLyBTZXQgc3RhdGUgdG8gdHJ1ZSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgfTtcblxuICAgIGlmIChyZWRpcmVjdFRvRm9ybSkge1xuICAgICAgICByZXR1cm4gPE5hdmlnYXRlIHRvPVwiL2Zvcm1cIiAvPjsgLy8gUmVkaXJlY3QgdG8gZm9ybVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVJbnN0YWdyYW1DbGljayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20veW91cnVzZXJuYW1lJywgJ19ibGFuaycpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBJbnN0YWdyYW0gbGlua1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGhhbmRsZUxDbGljayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3NwaGlueC1tbml0LWphaXB1ci9wb3N0cy8/ZmVlZFZpZXc9YWxsJywgJ19ibGFuaycpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBJbnN0YWdyYW0gbGlua1xuICAgICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWNvbnRhaW5lcjFcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTdHlsZWQgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Jlc3BvbnNpdmUtaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfSAvLyBJbml0aWFsIHdpZHRoIGFuZCBoZWlnaHQ7IHN0eWxlcyB3aWxsIG92ZXJyaWRlXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NjAwfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzYwdncnLCAvLyBNYWtlcyB0aGUgaW1hZ2UgcmVzcG9uc2l2ZSBiYXNlZCBvbiB2aWV3cG9ydCB3aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsIC8vIE1haW50YWlucyBhc3BlY3QgcmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzEwMHZoJywgLy8gUHJldmVudHMgb3ZlcmZsb3cgYmV5b25kIHRoZSB2aWV3cG9ydCBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc1JScsIC8vIEFkanVzdCBsZWZ0IHBvc2l0aW9uaW5nIHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGp1c3RlZCB0b3AgdG8gYWxsb3cgYmV0dGVyIHBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLCAvLyBSb3RhdGVzIHRoZSBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLCAvLyBFbnN1cmVzIHRoZSBpbWFnZSBmdWxseSBmaWxscyBpdHMgY29udGFpbmVyIGFyZWEgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGhpbnhcIj5TUEhJTlg8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXRzZVwiPlRoYW5rcyBmb3IgcmVnaXN0ZXJpbmcgd2l0aCB1czwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdHNlMlwiPkZvbGxvdyB1cyBvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luc3RhJz5cbiAgICAgXG4gICAgICAgIDxGYUluc3RhZ3JhbSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgb25DbGljaz17aGFuZGxlSW5zdGFncmFtQ2xpY2t9Lz4gey8qIEljb24gc2l6ZSBjYW4gYmUgYWRqdXN0ZWQgKi99XG4gICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmsnPlxuXG4gICAgICAgICAgICA8RmFMaW5rZWRpbiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgb25DbGljaz17aGFuZGxlTENsaWNrfS8+IHsvKiBJY29uIHNpemUgY2FuIGJlIGFkanVzdGVkICovfVxuICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNpdmUtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7IC8qIEluY3JlYXNlIHdpZHRoIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTUlOyAvKiBBZGp1c3QgcG9zaXRpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTsgLyogS2VlcCBjb25zaXN0ZW50IG1hcmdpbiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAvKiBSb3RhdGUgYnkgOTAgZGVncmVlcyBvbiBtb2JpbGUgZGV2aWNlcyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5yZXNwb25zaXZlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHZ3OyAvKiBGdWxsIHdpZHRoIGZvciBtb2JpbGUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUlOyAvKiBLZWVwIGNvbnNpc3RlbnQgbWFyZ2luICovXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwJTsgLyogTW9yZSBzcGFjZSBmcm9tIHRoZSB0b3AgKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybTtcblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiRmFJbnN0YWdyYW0iLCJGYUxpbmtlZGluIiwiTmF2aWdhdGUiLCJDb25maXJtIiwicmVkaXJlY3RUb0Zvcm0iLCJzZXRSZWRpcmVjdFRvRm9ybSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwidG8iLCJoYW5kbGVJbnN0YWdyYW1DbGljayIsIndpbmRvdyIsIm9wZW4iLCJoYW5kbGVMQ2xpY2siLCJkaXYiLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwicG9zaXRpb24iLCJtYXhIZWlnaHQiLCJsZWZ0IiwidHJhbnNmb3JtIiwib2JqZWN0Rml0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ui/Confirm.tsx\n"));

/***/ })

});