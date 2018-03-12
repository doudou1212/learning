(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Advertorial", [], factory);
	else if(typeof exports === 'object')
		exports["Advertorial"] = factory();
	else
		root["RUI"] = root["RUI"] || {}, root["RUI"]["Advertorial"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _adTargeter = __webpack_require__(1);

var AdTargeter = _interopRequireWildcard(_adTargeter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("I'm a silly entry point");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint no-param-reassign: ["error", { "props": false }] */

var get = function get(p, o) {
  return p.reduce(function (xs, x) {
    return xs && !isBlank(xs[x]) ? xs[x] : null;
  }, o);
};

var isBlank = function isBlank(str) {
  return !str && str !== 0 || typeof str === 'string' && str.trim().length === 0;
};

var simpleLookup = function simpleLookup(path, data) {
  return get(path.split('.'), data);
};

var transformValue = function transformValue(value, transform) {
  switch (transform.type) {
    case 'replace':
      return transform.map[value] ? transform.map[value] : value;
    case 'lowercase':
      return value.toLowerCase();
    case 'regex':
      {
        var pattern = RegExp(transform.pattern, 'g');
        return value.replace(pattern, transform.replaceWith);
      }
    default:
      return value;
  }
};

var processBranchOfDataLayer = function processBranchOfDataLayer(node, datalayer) {
  return Object.keys(node).reduce(function (obj, mappingKey) {
    var mappingValue = node[mappingKey];

    if (typeof mappingValue === 'string') {
      obj[mappingKey] = simpleLookup(mappingValue, datalayer);
    } else if ((typeof mappingValue === 'undefined' ? 'undefined' : _typeof(mappingValue)) === 'object') {
      var originalValue = simpleLookup(mappingValue.sourceValue, datalayer);
      if (mappingValue.transforms && originalValue) {
        obj[mappingKey] = mappingValue.transforms.reduce(transformValue, originalValue);
      } else {
        obj[mappingKey] = originalValue;
      }
    }

    if (isBlank(obj[mappingKey])) {
      if (mappingValue.defaultValue) {
        obj[mappingKey] = mappingValue.defaultValue;
      } else {
        delete obj[mappingKey];
      }
    }

    return obj;
  }, {});
};

var processTreeBranches = function processTreeBranches(targetingMapping, treeBranches, datalayer) {
  return treeBranches.reduce(function (obj, branch) {
    var mappedBranch = processBranchOfDataLayer(targetingMapping.dataLayerSchemaMappings[branch], datalayer);
    return _extends({}, obj, mappedBranch);
  }, {});
};

var generateCoreTargeting = function generateCoreTargeting(targetingMapping, datalayer) {
  return processTreeBranches(targetingMapping, targetingMapping.core.requiredMappings, datalayer);
};

var generatePageTargeting = function generatePageTargeting(targetingMapping, appName, pageId, datalayer) {
  return processTreeBranches(targetingMapping, targetingMapping.systems[appName][pageId].requiredMappings, datalayer);
};

var pageId = function pageId(coreTargeting) {
  return coreTargeting.site + ':' + coreTargeting.channel + ':' + coreTargeting.sect;
};

function generateTargeting(appName, advertTargetingMapping, datalayer) {
  var coreTargeting = generateCoreTargeting(advertTargetingMapping, datalayer);
  var pageTargeting = generatePageTargeting(advertTargetingMapping, appName, pageId(coreTargeting), datalayer);

  return _extends({}, coreTargeting, pageTargeting);
}

exports.default = generateTargeting;

/***/ })
/******/ ])["default"];
});