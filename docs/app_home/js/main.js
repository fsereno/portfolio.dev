/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"host":"localhost","port":8080,"prefix":"app_","entry":"home","index":"index.html","masterTemplateDir":"master_react","developmentDir":"app","publishDir":"docs","folderRoot":"/tree/master/app/","repoRootUrl":"https://github.com/fsereno/portfolio","linkedInUrl":"https://www.linkedin.com/in/fabio-sereno-6a97b986/","gitHubUrl":"https://github.com/fsereno","title":"Portfolio","author":"Fabio Sereno","role":"Software developer","description":"Portfolio website for Fabio Sereno - Software Developer.","thumbnail":"PortfolioThumbnail.png","labels":[{"name":"JavaScript","class":"warning"},{"name":"C#","class":"info"},{"name":"Cloud","class":"danger"}],"quickSearch":["React","TypeScript",".NET","Cloud"],"grecaptcha":{"active":true,"key":"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3","endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","verify":"verify"}},"applications":[{"name":"Portfolio","subHeading":"By Fabio Sereno","description":"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.","folder":"home","active":true,"include":false,"folderRoot":"/","useWebpack":true,"useRoot":true,"isLandingPage":true},{"name":"MIT Licence","subHeading":"MIT Licence for this repository.","description":"","folder":"licence","useWebpack":true,"active":true,"include":false},{"name":"To-Do List (React)","subHeading":"A basic list builder using React","description":"Using React, with Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (React Redux)","subHeading":"A basic list builder using React and Redux","description":"Using Redux with React to manage application state, implementing Undo and Redo functionality.","searchTerms":"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"reactRedux","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"To-Do List (Vue)","subHeading":"A basic list builder using Vue","description":"Experimenting with Vue, Babel and Webpack.","searchTerms":"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"toDoVue","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Tic-Tac-Toe (React)","subHeading":"A Tic-Tac-Toe game built using React","description":"Experimenting with more complex aspects of React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"ticTacToeReact","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"Azure Functions .NET, Unique Data Entry","subHeading":"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreUniqueDataEntryApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-unique-data-entry-api.azurewebsites.net/api","canItemBeAddedAsync":"canItemBeAddedAsync"},"labels":[0,1,2],"featured":false},{"name":"Azure Functions .NET, Data Structures","subHeading":"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack in .NET, with a React UI","description":"Using Azure Functions serverless compute and .NET, with a React user interface.","searchTerms":"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"AzureDotNetCoreDataStructuresApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://app-azure-dotnetcore-data-structures-api.azurewebsites.net/api","addQueueItem":"addQueueItemAsync","removeQueueItem":"removeQueueItemAsync","addStackItem":"addStackItemAsync","removeStackItem":"removeStackItemAsync"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Complex Entity Sorting Algorithm","subHeading":"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreEntitySortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees","sortSalaryAsc":"sort/salary/asc","sortSalaryDesc":"sort/salary/desc"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Natural Sorting Algorithm","subHeading":"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreStringSortApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values","sort":"sort"},"labels":[0,1,2],"featured":false},{"name":"AWS .NET, Shopping Basket List Builder","subHeading":"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreShoppingCart","active":true,"include":true,"useWebpack":true,"endpoints":{"api":"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket","get":"get","add":"add","delete":"delete","update":"update"},"labels":[0,1,2],"order":2},{"name":"AWS .NET, Asynchronous Coffee Maker","subHeading":"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET, with a React UI","description":"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.","searchTerms":"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsDotNetCoreAsyncCoffeeMachine","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"master_react","endpoints":{"api":"https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values","run":"run","runAsync":"runasync"},"labels":[0,1,2],"order":3},{"name":"Three JS Scene (Basic)","subHeading":"A basic THREE JS scene","description":"An interactive Three JS scene, using Babel and Webpack.","searchTerms":"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"threeJSScene","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Basic)","subHeading":"An AFrame Hello World application with React","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframe","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"AFrame React (Complex)","subHeading":"A slightly more complex AFrame application with React, allowing user input","description":"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.","searchTerms":"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality","folder":"aframeComplex","active":true,"include":true,"useWebpack":true,"labels":[0]},{"name":"JS Coding Standards","subHeading":"A JavaScript Code Style Guide","description":"By Fabio Sereno","searchTerms":"JavaScript,SOLID Principles,YAGNI,DRY,KISS","folder":"jsCodingStandards","active":false,"include":false,"labels":[0]},{"name":"Basic React Email Client","subHeading":"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo","description":"Using React, Babel and Webpack.","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"basicEmailClientReactSpa","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicSpaReact","labels":[0],"order":2,"featured":false},{"name":"AWS Node.js, B2C API, To-Do List","subHeading":"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI","description":"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.","searchTerms":"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"awsNodeToDoApi","active":true,"include":true,"useWebpack":true,"masterTemplateDir":"basicEmailClientReactSpa","labels":[0,2],"order":1,"featured":false,"endpoints":{"base":"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com","api":"todos"}},{"name":"Master React Template","subHeading":"Subheading","description":"Description","searchTerms":"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS","folder":"master_react","masterTemplateDir":"toDoReact","active":true,"include":false,"useWebpack":true,"labels":[0]}]}');

/***/ }),

/***/ "./app/app_home/src/app.js":
/*!*********************************!*\
  !*** ./app/app_home/src/app.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ "./app/app_home/sass/styles.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_contextProviders_applicationsContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contextProviders/applicationsContextProvider */ "./app/app_home/src/components/contextProviders/applicationsContextProvider.js");
/* harmony import */ var _components_contentContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contentContainer */ "./app/app_home/src/components/contentContainer.js");
/* harmony import */ var _components_introContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/introContainer */ "./app/app_home/src/components/introContainer.js");
/* harmony import */ var _components_contextProviders_configContextProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contextProviders/configContextProvider */ "./app/app_home/src/components/contextProviders/configContextProvider.js");
/* harmony import */ var _components_appContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/appContainer */ "./app/app_home/src/components/appContainer.js");
/* harmony import */ var _js_modules_react_spinnerComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/modules/react/spinnerComponent */ "./app/js/modules/react/spinnerComponent.js");
"use strict;";











function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_contextProviders_configContextProvider__WEBPACK_IMPORTED_MODULE_6__.ConfigContextProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_contextProviders_applicationsContextProvider__WEBPACK_IMPORTED_MODULE_3__.ApplicationsContextProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_js_modules_react_spinnerComponent__WEBPACK_IMPORTED_MODULE_8__.SpinnerContextProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_appContainer__WEBPACK_IMPORTED_MODULE_7__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_introContainer__WEBPACK_IMPORTED_MODULE_5__.IntroContainer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_contentContainer__WEBPACK_IMPORTED_MODULE_4__.ContentContainer, null)))));
}

react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ "./app/app_home/src/components/appContainer.js":
/*!*****************************************************!*\
  !*** ./app/app_home/src/components/appContainer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainer": () => (/* binding */ AppContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _js_modules_react_spinnerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/modules/react/spinnerComponent */ "./app/js/modules/react/spinnerComponent.js");
/* harmony import */ var _js_modules_utils_getElementFadeClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../js/modules/utils/getElementFadeClass */ "./app/js/modules/utils/getElementFadeClass.js");
/* harmony import */ var _js_modules_utils_webGLCheckerUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/modules/utils/webGLCheckerUtil */ "./app/js/modules/utils/webGLCheckerUtil.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./app/app_home/src/constants.js");
/* harmony import */ var _homeThreeModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homeThreeModule */ "./app/app_home/src/homeThreeModule.js");
/* harmony import */ var _utils_addNavbarTransScrollEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/addNavbarTransScrollEventListener */ "./app/app_home/src/utils/addNavbarTransScrollEventListener.js");
"useStrict;";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var AppContainer = function AppContainer(_ref) {
  var children = _ref.children;
  var isBrowserValid = _js_modules_utils_webGLCheckerUtil__WEBPACK_IMPORTED_MODULE_3__.WebGLCheckerUtil.isWebGL2Available() || _js_modules_utils_webGLCheckerUtil__WEBPACK_IMPORTED_MODULE_3__.WebGLCheckerUtil.isWebGLAvailable();
  var spinnerContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_js_modules_react_spinnerComponent__WEBPACK_IMPORTED_MODULE_1__.SpinnerContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_js_modules_utils_getElementFadeClass__WEBPACK_IMPORTED_MODULE_2__.getElementFadeClass)(false)),
      _useState2 = _slicedToArray(_useState, 2),
      fadeClass = _useState2[0],
      setFadeClass = _useState2[1];

  var loadHandler = function loadHandler() {
    setTimeout(function () {
      setFadeClass((0,_js_modules_utils_getElementFadeClass__WEBPACK_IMPORTED_MODULE_2__.getElementFadeClass)(true));
      spinnerContext.setShow(false);
    }, _constants__WEBPACK_IMPORTED_MODULE_4__.FAUX_LOADING_TIME);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    spinnerContext.setShow(true);
    (0,_utils_addNavbarTransScrollEventListener__WEBPACK_IMPORTED_MODULE_6__.addNavbarTransScrollEventListener)();

    if (isBrowserValid) {
      _homeThreeModule__WEBPACK_IMPORTED_MODULE_5__.homeThreeModule.init();
      loadHandler();
    } else {
      loadHandler();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: fadeClass
  }, children);
};

/***/ }),

/***/ "./app/app_home/src/components/applicationCard.js":
/*!********************************************************!*\
  !*** ./app/app_home/src/components/applicationCard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationCard": () => (/* binding */ ApplicationCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts */ "./app/app_home/src/contexts.js");
"use strict;";







var ApplicationCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (_ref) {
  var application = _ref.application,
      condition = _ref.condition;
  var configContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts__WEBPACK_IMPORTED_MODULE_1__.ConfigContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, condition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "grid-item",
    key: "".concat(application.name)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__.default.Title, null, application.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__.default.Text, null, application.subHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
    className: "btn btn-outline-dark btn-sm card-link",
    href: "".concat(configContext.config.prefix).concat(application.folder, "/index.html")
  }, "View application"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__.default, null, application.labels ? application.labels.map(function (x) {
    var label = configContext.config.labels[x];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_5__.default, {
      key: x,
      variant: label["class"],
      className: "text-light mr-2"
    }, label.name);
  }) : null)))));
}, function (prev, next) {
  return prev.condition === next.condition;
});

/***/ }),

/***/ "./app/app_home/src/components/cardsContainer.js":
/*!*******************************************************!*\
  !*** ./app/app_home/src/components/cardsContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsContainer": () => (/* binding */ CardsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _applicationCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applicationCard */ "./app/app_home/src/components/applicationCard.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./app/app_home/src/contexts.js");
"use strict;";




function CardsContainer() {
  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts__WEBPACK_IMPORTED_MODULE_2__.ApplicationsContext);
  var featured = context.applications.filter(function (x) {
    return x.featured;
  }) || [];
  var applications = context.applications.filter(function (x) {
    return !x.featured;
  }) || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (featured.length > 0 || applications.length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "applicationsContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-columns"
  }, featured.map(function (application) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_applicationCard__WEBPACK_IMPORTED_MODULE_1__.ApplicationCard, {
      key: "featured_".concat(application.folder),
      condition: application.active && application.include,
      application: application
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-columns"
  }, applications.map(function (application) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_applicationCard__WEBPACK_IMPORTED_MODULE_1__.ApplicationCard, {
      key: application.folder,
      condition: application.active && application.include,
      application: application
    });
  }))));
}

/***/ }),

/***/ "./app/app_home/src/components/contentContainer.js":
/*!*********************************************************!*\
  !*** ./app/app_home/src/components/contentContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentContainer": () => (/* binding */ ContentContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchBar */ "./app/app_home/src/components/searchBar.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./app/app_home/src/contexts.js");
/* harmony import */ var _cardsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardsContainer */ "./app/app_home/src/components/cardsContainer.js");
"use strict;";





function ContentContainer() {
  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid pt-4 bg-white",
    id: "contentContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "display-4"
  }, context.appConfig.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, context.appConfig.subHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-muted"
  }, context.appConfig.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_searchBar__WEBPACK_IMPORTED_MODULE_1__.SearchBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cardsContainer__WEBPACK_IMPORTED_MODULE_3__.CardsContainer, null));
}

/***/ }),

/***/ "./app/app_home/src/components/contextProviders/applicationsContextProvider.js":
/*!*************************************************************************************!*\
  !*** ./app/app_home/src/components/contextProviders/applicationsContextProvider.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsContextProvider": () => (/* binding */ ApplicationsContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _typeScript_Utils_applicationsSortUtil_dist_Utils_applicationsSortUtil_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../typeScript/Utils/applicationsSortUtil/dist/Utils/applicationsSortUtil/index */ "./app/typeScript/Utils/applicationsSortUtil/dist/Utils/applicationsSortUtil/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts */ "./app/app_home/src/contexts.js");
"use strict;";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ApplicationsContextProvider(_ref) {
  var children = _ref.children;
  var configContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  configContext.config.applications.sort(_typeScript_Utils_applicationsSortUtil_dist_Utils_applicationsSortUtil_index__WEBPACK_IMPORTED_MODULE_1__.ApplicationSortUtil.sorter);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(configContext.config.applications),
      _useState2 = _slicedToArray(_useState, 2),
      applications = _useState2[0],
      setApplications = _useState2[1];

  var context = {
    unmodified: configContext.config.applications,
    applications: applications,
    setApplications: setApplications
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__.ApplicationsContext.Provider, {
    value: context
  }, children);
}

/***/ }),

/***/ "./app/app_home/src/components/contextProviders/configContextProvider.js":
/*!*******************************************************************************!*\
  !*** ./app/app_home/src/components/contextProviders/configContextProvider.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContextProvider": () => (/* binding */ ConfigContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts */ "./app/app_home/src/contexts.js");
/* harmony import */ var _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../js/modules/utils/configUtil */ "./app/js/modules/utils/configUtil.js");
"use strict;";




function ConfigContextProvider(_ref) {
  var children = _ref.children;
  var config = _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_2__.ConfigUtil.get();
  var appConfig = _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_2__.ConfigUtil.get("home");
  var context = {
    config: config,
    appConfig: appConfig
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts__WEBPACK_IMPORTED_MODULE_1__.ConfigContext.Provider, {
    value: context
  }, children);
}

/***/ }),

/***/ "./app/app_home/src/components/introContainer.js":
/*!*******************************************************!*\
  !*** ./app/app_home/src/components/introContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroContainer": () => (/* binding */ IntroContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./app/app_home/src/constants.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./app/app_home/src/contexts.js");
"use strict;";




function IntroContainer() {
  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);

  var handleScrollBtnClick = function handleScrollBtnClick(event) {
    event.preventDefault();
    var container = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_CONTAINER_ID);
    window.scrollTo({
      top: container.offsetTop - 50,
      left: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-dark",
    id: "introContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "introContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "canvasContainer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "introContentInner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "introImage",
    className: "text-center element"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "img-fluid",
    src: "images/FSLogo.png",
    alt: "Logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "introHeadings",
    className: "text-center element"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "display-4 mb-0"
  }, context.config.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "display-4 sub-heading lead text-white"
  }, context.config.role)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "btnContainer",
    className: "text-center element pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn btn-outline-light",
    onClick: handleScrollBtnClick
  }, "View Portfolio")))));
}

/***/ }),

/***/ "./app/app_home/src/components/searchBar.js":
/*!**************************************************!*\
  !*** ./app/app_home/src/components/searchBar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBar": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _typeScript_Utils_stringSearchUtil_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../typeScript/Utils/stringSearchUtil/dist */ "./app/typeScript/Utils/stringSearchUtil/dist/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./app/app_home/src/contexts.js");
"use strict;";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function SearchBar() {
  var configContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts__WEBPACK_IMPORTED_MODULE_2__.ApplicationsContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showClear = _useState2[0],
      setShowClear = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      searchValue = _useState4[0],
      setSearcValue = _useState4[1];

  var resetApplications = function resetApplications() {
    setShowClear(false);
    setSearcValue("");
    var resetApplications = context.applications.map(function (application) {
      application.active = application.include ? true : false;
      return application;
    });
    context.setApplications(resetApplications);
  };

  var handleSubmit = function handleSubmit(event) {
    return event.preventDefault();
  };

  var onSearchHandler = function onSearchHandler(event) {
    var searchTerm = event.target.value;
    setSearcValue(searchTerm);
    handleSearch(searchTerm);
  };

  var handleQuickFilter = function handleQuickFilter(event) {
    var searchTerm = event.target.value;

    if (_typeScript_Utils_stringSearchUtil_dist__WEBPACK_IMPORTED_MODULE_1__.StringSearchUtil.searchDoesNotExist(searchValue, searchTerm)) {
      var combinedSearch = _typeScript_Utils_stringSearchUtil_dist__WEBPACK_IMPORTED_MODULE_1__.StringSearchUtil.combineSearchTerms(searchValue, searchTerm);
      setSearcValue(combinedSearch);
      handleSearch(combinedSearch);
    }
  };

  var handleSearch = function handleSearch() {
    var searchTerm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    if (searchTerm.length > 0) {
      var filteredApplications = context.applications.map(function (application) {
        var criterions = [application.name, application.subHeading, application.description, application.searchTerms];
        application.active = application.include ? _typeScript_Utils_stringSearchUtil_dist__WEBPACK_IMPORTED_MODULE_1__.StringSearchUtil.searchCriterions(criterions, searchTerm) : false;
        return application;
      });
      setShowClear(true);
      context.setApplications(filteredApplications);
    } else {
      resetApplications();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "searchBar",
    className: "input-group mb-3 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-search"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search applications...",
    id: "searchInput",
    value: searchValue,
    onChange: onSearchHandler
  }), showClear && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append",
    id: "cancelBtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn",
    type: "button",
    onClick: resetApplications
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "lr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "rl"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    id: "openFilterBtn",
    className: "btn btn-dark",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#filterContainer",
    "aria-expanded": "false",
    "aria-controls": "filterContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-filter"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collapse",
    id: "filterContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "d-flex flex-row justify-content-center"
  }, "Quick search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-group d-flex flex-row justify-content-center"
  }, configContext.config.quickSearch.map(function (term) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      key: term,
      type: "button",
      className: "btn btn-outline-dark flex-grow-0",
      value: term,
      onClick: handleQuickFilter
    }, term);
  })))));
}

/***/ }),

/***/ "./app/app_home/src/constants.js":
/*!***************************************!*\
  !*** ./app/app_home/src/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAUX_LOADING_TIME": () => (/* binding */ FAUX_LOADING_TIME),
/* harmony export */   "NAVBAR_SCROLL_DOWN_CLASS": () => (/* binding */ NAVBAR_SCROLL_DOWN_CLASS),
/* harmony export */   "SEARCH_INPUT_ID": () => (/* binding */ SEARCH_INPUT_ID),
/* harmony export */   "MAIN_CONTAINER_ID": () => (/* binding */ MAIN_CONTAINER_ID),
/* harmony export */   "NAV_ID": () => (/* binding */ NAV_ID),
/* harmony export */   "CONTENT_CONTAINER_ID": () => (/* binding */ CONTENT_CONTAINER_ID),
/* harmony export */   "APP_ID": () => (/* binding */ APP_ID)
/* harmony export */ });
"use strict;";

var FAUX_LOADING_TIME = 500;
var NAVBAR_SCROLL_DOWN_CLASS = "scroll-down";
var SEARCH_INPUT_ID = "searchInput";
var MAIN_CONTAINER_ID = "mainContainer";
var NAV_ID = "navBar";
var CONTENT_CONTAINER_ID = "contentContainer";
var APP_ID = "app";

/***/ }),

/***/ "./app/app_home/src/contexts.js":
/*!**************************************!*\
  !*** ./app/app_home/src/contexts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsContext": () => (/* binding */ ApplicationsContext),
/* harmony export */   "ConfigContext": () => (/* binding */ ConfigContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
"use strict;";


var ApplicationsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
var ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

/***/ }),

/***/ "./app/app_home/src/homeThreeModule.js":
/*!*********************************************!*\
  !*** ./app/app_home/src/homeThreeModule.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeThreeModule": () => (/* binding */ homeThreeModule)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cannon */ "./node_modules/cannon/build/cannon.js");
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cannon__WEBPACK_IMPORTED_MODULE_1__);
"use strict;";



var homeThreeModule = function () {
  var DAMPING = 0.9;
  var TIMESTEP = 1.0 / 60.0;
  var XROTATION = -Math.PI / 2;
  var OBJECT_LIMIT = 20;
  var CONTAINER_ID = "canvasContainer";

  var _container;

  var _scene;

  var _camera;

  var _renderer;

  var _world;

  var _raycaster;

  var _mouse;

  var _fragmentGroup;

  var initPhysics = function initPhysics() {
    _world = new cannon__WEBPACK_IMPORTED_MODULE_1__.World();

    _world.gravity.set(0, -10, 0);

    _world.broadphase = new cannon__WEBPACK_IMPORTED_MODULE_1__.NaiveBroadphase();
    _world.solver.iterations = 10;
  };

  var initScene = function initScene() {
    _container = document.getElementById(CONTAINER_ID);
    _scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
    _camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, _container.offsetWidth / _container.offsetHeight, 1, 500);
    _mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    _raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
    _fragmentGroup = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();
  };

  var setCameraPosition = function setCameraPosition() {
    _camera.position.x = 0;
    _camera.position.y = 4;
    _camera.position.z = 10;
  };

  var setRenderer = function setRenderer() {
    var container = document.getElementById(CONTAINER_ID);
    _renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    _renderer.setSize(container.offsetWidth, container.offsetHeight);

    _renderer.shadowMap.enabled = true;
    _renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__.PCFSoftShadowMap;
    container.appendChild(_renderer.domElement);
  };

  var setResizeEventHandler = function setResizeEventHandler() {
    window.addEventListener("resize", function () {
      var container = document.getElementById(CONTAINER_ID);

      _renderer.setSize(container.offsetWidth, container.offsetHeight);

      _camera.aspect = container.offsetWidth / container.offsetHeight;

      _camera.updateProjectionMatrix();
    });
  };

  var animateParticles = function animateParticles() {
    var time = Date.now() * 0.000001;

    for (var i = 0; i < _scene.children.length; i++) {
      var object = _scene.children[i];

      if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__.Points) {
        object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
      }
    }
  };

  var createParticles = function createParticles() {
    var numberOfParticles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
    var numberOfparticleGroups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    var verticies = [];

    for (var i = 0; i < numberOfParticles; i++) {
      var x = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloatSpread(2000);
      var y = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloatSpread(2000);
      var z = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloatSpread(3000);
      verticies.push(x, y, z);
    }

    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
    geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(verticies, 3));
    var material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
      size: 0.5
    });

    for (var _i = 0; _i < numberOfparticleGroups; _i++) {
      var particles = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      _scene.add(particles);
    }
  };

  var createFragments = function createFragments(numberOfFragments) {
    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.CircleGeometry(5, 10);
    var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
    });

    for (var i = 0; i < numberOfFragments; i++) {
      var scale = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(0.01, 0.02);
      var fragment = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
      fragment.position.set(three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(-300, 200), three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(5, 50), three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(5, 50));
      fragment.rotation.set(three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(0, 0.05), three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(0, 0.05), three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(0, 0.05));
      fragment.scale.set(scale, scale, scale);
      fragment.speedValue = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.randFloat(-0.25, 0.70);

      _fragmentGroup.add(fragment);
    }

    _scene.add(_fragmentGroup);
  };

  var animateFragments = function animateFragments() {
    for (var i = 0; i < _fragmentGroup.children.length; i++) {
      var fragment = _fragmentGroup.children[i];
      fragment.rotation.x += fragment.speedValue / 10;
      fragment.rotation.y += fragment.speedValue / 10;
      fragment.rotation.z += fragment.speedValue / 10;
    }

    ;
    _fragmentGroup.rotation.y += 0.004;
  };

  var createCube = function createCube() {
    var x = Math.random() * 0.3 + 1;
    var y = 15;
    var z = 0;
    var scale = Math.random() - Math.random() * 0.5 + 1;
    var meshGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(scale, scale, scale);
    var meshMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
      color: 0x5c6670
    });
    var mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(meshGeometry, meshMaterial);
    mesh.position.set(x, y, z);
    mesh.updatePhysics = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    var shape = new cannon__WEBPACK_IMPORTED_MODULE_1__.Box(new cannon__WEBPACK_IMPORTED_MODULE_1__.Vec3(scale / 2, scale / 2, scale / 2));
    var bodyMaterial = new cannon__WEBPACK_IMPORTED_MODULE_1__.Material();
    var body = new cannon__WEBPACK_IMPORTED_MODULE_1__.Body({
      mass: 5,
      material: bodyMaterial
    });
    body.addShape(shape);
    body.position.set(x, y, z);
    body.linearDamping = DAMPING;
    body.updatePhysics = true;
    body.isCube = true;
    body.angularVelocity.set(1, 0.5, 1);
    return {
      mesh: mesh,
      body: body
    };
  };

  var createCubes = function createCubes() {
    if (_world.bodies.filter(function (x) {
      return x.isCube;
    }).length <= OBJECT_LIMIT) {
      var object = createCube();

      _world.addBody(object.body);

      _scene.add(object.mesh);
    }
  };

  var addLight = function addLight() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFFFFFF;
    var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var z = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var light = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight(color, intensity, distance);
    light.position.set(x, y, z);
    light.penumbra = 1;
    light.castShadow = true;
    light.shadow.mapSize.width = 2560;
    light.shadow.mapSize.height = 2560;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadow.focus = 1;

    _scene.add(light);
  };

  var updatePhysics = function updatePhysics() {
    _world.step(TIMESTEP);

    var bodies = _world.bodies.filter(function (x) {
      return x.updatePhysics;
    });

    var meshes = _scene.children.filter(function (x) {
      return x.updatePhysics;
    });

    if (bodies.length === meshes.length) {
      for (var i = 0; i < meshes.length; i++) {
        var mesh = meshes[i];
        var body = bodies[i];
        mesh.position.copy(body.position);
        mesh.quaternion.copy(body.quaternion);
      }
    }
  };

  var setAnimationLoop = function setAnimationLoop() {
    _renderer.setAnimationLoop(function () {
      animateParticles();
      updatePhysics();
      animateFragments();

      _renderer.render(_scene, _camera);
    });
  };

  var createPlane = function createPlane() {
    var planeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneBufferGeometry(50, 50, 1, 1);
    var planeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({
      color: 0x2e3338,
      shininess: 150
    });
    var ground = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, planeMaterial);
    ground.rotation.x = XROTATION;
    ground.receiveShadow = true;

    _scene.add(ground);

    var groundShape = new cannon__WEBPACK_IMPORTED_MODULE_1__.Plane();
    var groundMaterial = new cannon__WEBPACK_IMPORTED_MODULE_1__.Material();
    var groundBody = new cannon__WEBPACK_IMPORTED_MODULE_1__.Body({
      mass: 0,
      material: groundMaterial
    });
    groundBody.quaternion.setFromAxisAngle(new cannon__WEBPACK_IMPORTED_MODULE_1__.Vec3(1, 0, 0), XROTATION);
    groundBody.addShape(groundShape);

    _world.add(groundBody);
  };

  var objectsReact = function objectsReact(event) {
    event.preventDefault();
    _mouse.x = event.clientX / window.innerWidth * 2 - 1;
    _mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    _mouse.z = 0.5;

    _raycaster.setFromCamera(_mouse, _camera);

    var intersects = _raycaster.intersectObjects(_scene.children, true);

    if (intersects.length > 0) {
      var object = intersects[0].object;

      if (object.updatePhysics) {
        var matchingBody = _world.bodies.filter(function (x) {
          return x.position.x === object.position.x && x.position.y === object.position.y && x.position.z === object.position.z;
        });

        if (matchingBody.length > 0) {
          var body = matchingBody[0];
          var x = _mouse.x * 10;
          var y = _mouse.y * 10;
          body.angularVelocity.set(x, y, 0);
        }
      }
    }
  };

  var setMouseMoved = function setMouseMoved() {
    window.addEventListener("mousemove", objectsReact);
  };

  var init = function init() {
    initScene();
    initPhysics();
    createPlane();
    setCameraPosition();
    setRenderer();
    setResizeEventHandler();
    setInterval(createCubes, 1000);
    createParticles(20000, 10);
    createFragments(25);
    addLight(0xFFFFFF, 2, 500, 0, 10, 5);
    setMouseMoved();
    setAnimationLoop();
  };

  return {
    init: init
  };
}();

/***/ }),

/***/ "./app/app_home/src/utils/addNavBarScrollDownClass.js":
/*!************************************************************!*\
  !*** ./app/app_home/src/utils/addNavBarScrollDownClass.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNavBarScrollDownClass": () => (/* binding */ addNavBarScrollDownClass)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./app/app_home/src/constants.js");
"use strict;";


var addNavBarScrollDownClass = function addNavBarScrollDownClass() {
  var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var navbar = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__.NAV_ID);

  if (condition) {
    navbar.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_SCROLL_DOWN_CLASS);
  } else {
    navbar.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_SCROLL_DOWN_CLASS);
  }
};

/***/ }),

/***/ "./app/app_home/src/utils/addNavbarTransScrollEventListener.js":
/*!*********************************************************************!*\
  !*** ./app/app_home/src/utils/addNavbarTransScrollEventListener.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNavbarTransScrollEventListener": () => (/* binding */ addNavbarTransScrollEventListener)
/* harmony export */ });
/* harmony import */ var _addNavBarScrollDownClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNavBarScrollDownClass */ "./app/app_home/src/utils/addNavBarScrollDownClass.js");
"use strict;";



var handleNavBarScrollClass = function handleNavBarScrollClass() {
  (0,_addNavBarScrollDownClass__WEBPACK_IMPORTED_MODULE_0__.addNavBarScrollDownClass)(window.scrollY === 0);
};

var addNavbarTransScrollEventListener = function addNavbarTransScrollEventListener() {
  (0,_addNavBarScrollDownClass__WEBPACK_IMPORTED_MODULE_0__.addNavBarScrollDownClass)();
  window.addEventListener("scroll", handleNavBarScrollClass);
};

/***/ }),

/***/ "./app/js/modules/react/spinnerComponent.js":
/*!**************************************************!*\
  !*** ./app/js/modules/react/spinnerComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerContext": () => (/* binding */ SpinnerContext),
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent),
/* harmony export */   "SpinnerContextProvider": () => (/* binding */ SpinnerContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
"use strict;";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var SpinnerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
function SpinnerComponent(props) {
  var showSpinner = props.show || false;
  var hideClass = !showSpinner ? "d-none" : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "spinner",
    className: "".concat(hideClass, " spinner-container overlay")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "loader",
    className: "".concat(hideClass, " item loading")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle circle-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle-inner"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle circle-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle-inner"
  })))));
}
;
function SpinnerContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var showSpinner = function showSpinner() {
    return setShow(true);
  };

  var hideSpinner = function hideSpinner() {
    return setShow(false);
  };

  var context = {
    show: show,
    setShow: setShow,
    showSpinner: showSpinner,
    hideSpinner: hideSpinner
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpinnerContext.Provider, {
    value: context
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpinnerComponent, {
    show: context.show
  }));
}

/***/ }),

/***/ "./app/js/modules/utils/configUtil.js":
/*!********************************************!*\
  !*** ./app/js/modules/utils/configUtil.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigUtil": () => (/* binding */ ConfigUtil)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config.json */ "./config.json");
"use strict;";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var ConfigUtil = /*#__PURE__*/function () {
  function ConfigUtil() {
    _classCallCheck(this, ConfigUtil);
  }

  _createClass(ConfigUtil, null, [{
    key: "get",
    value: function get(applicationFolder) {
      var application = applicationFolder ? _config_json__WEBPACK_IMPORTED_MODULE_0__.applications.filter(function (x) {
        return x.folder.toLowerCase() === applicationFolder.toLowerCase();
      }) : [];
      var result = application.length > 0 ? application[0] : _config_json__WEBPACK_IMPORTED_MODULE_0__;
      return result;
    }
  }]);

  return ConfigUtil;
}();

/***/ }),

/***/ "./app/js/modules/utils/getElementFadeClass.js":
/*!*****************************************************!*\
  !*** ./app/js/modules/utils/getElementFadeClass.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getElementFadeClass": () => (/* binding */ getElementFadeClass)
/* harmony export */ });
"use strict;";

var getElementFadeClass = function getElementFadeClass() {
  var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var fadeClass = "fade-element";
  var action = condition ? "in" : "out";
  return "".concat(fadeClass, " ").concat(action);
};

/***/ }),

/***/ "./app/js/modules/utils/webGLCheckerUtil.js":
/*!**************************************************!*\
  !*** ./app/js/modules/utils/webGLCheckerUtil.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebGLCheckerUtil": () => (/* binding */ WebGLCheckerUtil)
/* harmony export */ });
"use strict;";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WebGLCheckerUtil = /*#__PURE__*/function () {
  function WebGLCheckerUtil() {
    _classCallCheck(this, WebGLCheckerUtil);
  }

  _createClass(WebGLCheckerUtil, null, [{
    key: "isWebGLAvailable",
    value: function isWebGLAvailable() {
      try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "isWebGL2Available",
    value: function isWebGL2Available() {
      try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
      } catch (e) {
        return false;
      }
    }
  }]);

  return WebGLCheckerUtil;
}();

/***/ }),

/***/ "./app/typeScript/Utils/applicationsSortUtil/dist/Utils/applicationsSortUtil/index.js":
/*!********************************************************************************************!*\
  !*** ./app/typeScript/Utils/applicationsSortUtil/dist/Utils/applicationsSortUtil/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationSortUtil": () => (/* binding */ ApplicationSortUtil)
/* harmony export */ });
"use strict;";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApplicationSortUtil = /*#__PURE__*/function () {
  function ApplicationSortUtil() {
    _classCallCheck(this, ApplicationSortUtil);
  }

  _createClass(ApplicationSortUtil, null, [{
    key: "sorter",
    value: function sorter(a, b) {
      var aOrder = a.order || Number.MAX_VALUE;
      var bOrder = b.order || Number.MAX_VALUE;

      if (aOrder < bOrder) {
        return -1;
      }

      if (aOrder > bOrder) {
        return 1;
      }

      return 0;
    }
  }]);

  return ApplicationSortUtil;
}();

/***/ }),

/***/ "./app/typeScript/Utils/stringSearchUtil/dist/index.js":
/*!*************************************************************!*\
  !*** ./app/typeScript/Utils/stringSearchUtil/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringSearchUtil": () => (/* binding */ StringSearchUtil)
/* harmony export */ });
"use strict;";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringSearchUtil = /*#__PURE__*/function () {
  function StringSearchUtil() {
    _classCallCheck(this, StringSearchUtil);
  }

  _createClass(StringSearchUtil, null, [{
    key: "searchCriterions",
    value: function searchCriterions() {
      var criterions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var searchTerm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var searchResult = criterions.length > 0 ? criterions.filter(function (criterion) {
        var searchTerms = searchTerm.split(" ").filter(function (x) {
          return x;
        });
        var searchTermSearch = searchTerms.filter(function (term) {
          return criterion.toUpperCase().indexOf(term.toUpperCase()) !== -1;
        });
        return searchTermSearch.length > 0;
      }) : [];
      var result = searchResult.length > 0;
      return result;
    }
  }]);

  return StringSearchUtil;
}();

StringSearchUtil.searchDoesNotExist = function () {
  var existingValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var searchTerm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return (existingValue || "").toUpperCase().indexOf((searchTerm || "").toUpperCase()) === -1;
};

StringSearchUtil.combineSearchTerms = function () {
  var existingValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var searchTerm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var result = "".concat(existingValue, " ").concat(searchTerm);
  return result.trim();
};

/***/ }),

/***/ "./app/app_home/sass/styles.scss":
/*!***************************************!*\
  !*** ./app/app_home/sass/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/app_home/src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map