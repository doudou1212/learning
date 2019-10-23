/*! Copyright Elasticsearch B.V. and/or license to Elasticsearch B.V. under one or more contributor license agreements
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(installedChunks[depId]!==0)fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={13:0};var deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="__REPLACE_WITH_PUBLIC_PATH__";var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([2278,0]);return checkDeferredModules()})({2278:function(module,exports,__webpack_require__){"use strict";__webpack_require__(71);__webpack_require__(72);__webpack_require__(73);__webpack_require__(74);__webpack_require__(75);__webpack_require__(76);__webpack_require__(77);__webpack_require__(78);__webpack_require__(79);__webpack_require__(80);__webpack_require__(81);__webpack_require__(82);__webpack_require__(83);__webpack_require__(84);__webpack_require__(85);__webpack_require__(86);__webpack_require__(87);__webpack_require__(88);__webpack_require__(89);__webpack_require__(90);__webpack_require__(91);__webpack_require__(92);__webpack_require__(93);__webpack_require__(94);__webpack_require__(95);__webpack_require__(96);__webpack_require__(97);__webpack_require__(98);__webpack_require__(99);__webpack_require__(100);__webpack_require__(101);__webpack_require__(102);__webpack_require__(103);__webpack_require__(104);__webpack_require__(105);__webpack_require__(106);__webpack_require__(107);__webpack_require__(108);__webpack_require__(109);__webpack_require__(110);__webpack_require__(111);__webpack_require__(112);__webpack_require__(113);__webpack_require__(114);__webpack_require__(115);__webpack_require__(116);__webpack_require__(117);__webpack_require__(118);__webpack_require__(119);__webpack_require__(120);__webpack_require__(121);__webpack_require__(122);__webpack_require__(123);__webpack_require__(124);__webpack_require__(125);__webpack_require__(126);__webpack_require__(127);__webpack_require__(128);__webpack_require__(129);__webpack_require__(130);__webpack_require__(131);__webpack_require__(132);__webpack_require__(133);__webpack_require__(134);__webpack_require__(135);__webpack_require__(136);__webpack_require__(137);__webpack_require__(138);__webpack_require__(139);__webpack_require__(140);__webpack_require__(141);__webpack_require__(142);__webpack_require__(143);__webpack_require__(144);__webpack_require__(145);__webpack_require__(146);__webpack_require__(147);__webpack_require__(148);__webpack_require__(149);__webpack_require__(150);__webpack_require__(151);__webpack_require__(152);__webpack_require__(153);__webpack_require__(154);__webpack_require__(155);__webpack_require__(156);__webpack_require__(157);__webpack_require__(158);__webpack_require__(159);__webpack_require__(160);__webpack_require__(161);__webpack_require__(162);__webpack_require__(163);__webpack_require__(164);__webpack_require__(165);__webpack_require__(166);__webpack_require__(167);__webpack_require__(168);__webpack_require__(169);__webpack_require__(173);var _i18n=__webpack_require__(4);var _kibanaCore__=__webpack_require__(170);var injectedMetadata=JSON.parse(document.querySelector("kbn-injected-metadata").getAttribute("data"));_i18n.i18n.load(injectedMetadata.i18n.translationsUrl).catch(function(e){return e}).then(function(i18nError){var coreSystem=new _kibanaCore__.CoreSystem({injectedMetadata:injectedMetadata,rootDomElement:document.body,requireLegacyFiles:function requireLegacyFiles(){__webpack_require__(2279)}});var coreStartContract=coreSystem.start();if(i18nError){coreStartContract.fatalErrors.add(i18nError)}})},2279:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var spaces_manager_1=__webpack_require__(485);var space_selector_html_1=tslib_1.__importDefault(__webpack_require__(2280));__webpack_require__(239);var chrome_1=tslib_1.__importDefault(__webpack_require__(8));var i18n_1=__webpack_require__(13);var modules_1=__webpack_require__(6);__webpack_require__(2281);var react_1=tslib_1.__importDefault(__webpack_require__(0));var react_dom_1=__webpack_require__(16);var space_selector_1=__webpack_require__(2282);var _module=modules_1.uiModules.get("spaces_selector",[]);_module.controller("spacesSelectorController",function($scope,$http,spaces,spaceSelectorURL){var domNode=document.getElementById("spaceSelectorRoot");var spacesManager=new spaces_manager_1.SpacesManager($http,chrome_1.default,spaceSelectorURL);react_dom_1.render(react_1.default.createElement(i18n_1.I18nContext,null,react_1.default.createElement(space_selector_1.SpaceSelector,{spaces:spaces,spacesManager:spacesManager})),domNode);$scope.$on("$destroy",function(){if(domNode){react_dom_1.unmountComponentAtNode(domNode)}})});chrome_1.default.setVisible(false).setRootTemplate(space_selector_html_1.default)},2280:function(module,exports){module.exports='<div ng-controller="spacesSelectorController" id="spaceSelectorRootWrap">\n  <div id="spaceSelectorRoot" />\n</div>\n'},2281:function(module,exports,__webpack_require__){},2282:function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var eui_1=__webpack_require__(1);var react_1=__webpack_require__(3);var react_2=tslib_1.__importStar(__webpack_require__(0));var constants_1=__webpack_require__(411);var space_cards_1=__webpack_require__(2283);var SpaceSelectorUI=function(_react_2$Component){_inherits(SpaceSelectorUI,_react_2$Component);function SpaceSelectorUI(props){_classCallCheck(this,SpaceSelectorUI);var _this=_possibleConstructorReturn(this,(SpaceSelectorUI.__proto__||Object.getPrototypeOf(SpaceSelectorUI)).call(this,props));_this.setHeaderRef=function(ref){_this.headerRef=ref;if(_this.headerRef){_this.headerRef.focus()}};_this.getSearchField=function(){var intl=_this.props.intl;if(!_this.props.spaces||_this.props.spaces.length<constants_1.SPACE_SEARCH_COUNT_THRESHOLD){return null}return react_2.default.createElement(eui_1.EuiFlexItem,{className:"spcSpaceSelector__searchHolder"},react_2.default.createElement(eui_1.EuiFieldSearch,{className:"spcSpaceSelector__searchField",placeholder:intl.formatMessage({id:"xpack.spaces.spaceSelector.findSpacePlaceholder",defaultMessage:"Find a space"}),incremental:true,onSearch:_this.onSearch}))};_this.onSearch=function(){var searchTerm=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";_this.setState({searchTerm:searchTerm.trim().toLowerCase()})};_this.onSelectSpace=function(space){_this.props.spacesManager.changeSelectedSpace(space)};var state={loading:false,searchTerm:"",spaces:[]};if(Array.isArray(props.spaces)){state.spaces=[].concat(_toConsumableArray(props.spaces))}_this.state=state;return _this}_createClass(SpaceSelectorUI,[{key:"componentDidMount",value:function componentDidMount(){if(this.state.spaces.length===0){this.loadSpaces()}}},{key:"loadSpaces",value:function loadSpaces(){var _this2=this;this.setState({loading:true});var spacesManager=this.props.spacesManager;spacesManager.getSpaces().then(function(spaces){_this2.setState({loading:false,spaces:spaces})})}},{key:"render",value:function render(){var _state=this.state,spaces=_state.spaces,searchTerm=_state.searchTerm;var filteredSpaces=spaces;if(searchTerm){filteredSpaces=spaces.filter(function(space){return space.name.toLowerCase().indexOf(searchTerm)>=0||(space.description||"").toLowerCase().indexOf(searchTerm)>=0})}return react_2.default.createElement(eui_1.EuiPage,{className:"spcSpaceSelector","data-test-subj":"kibanaSpaceSelector"},react_2.default.createElement(eui_1.EuiPageBody,null,react_2.default.createElement(eui_1.EuiPageHeader,{className:"spcSpaceSelector__heading"},react_2.default.createElement(eui_1.EuiSpacer,{size:"xxl"}),react_2.default.createElement("span",{className:"spcSpaceSelector__logo"},react_2.default.createElement(eui_1.EuiIcon,{size:"xxl",type:"logoKibana"})),react_2.default.createElement(eui_1.EuiTitle,{size:"l"},react_2.default.createElement("h1",{tabIndex:0,ref:this.setHeaderRef},react_2.default.createElement(react_1.FormattedMessage,{id:"xpack.spaces.spaceSelector.selectSpacesTitle",defaultMessage:"Select your space"}))),react_2.default.createElement(eui_1.EuiText,{size:"s",color:"subdued"},react_2.default.createElement("p",null,react_2.default.createElement(react_1.FormattedMessage,{id:"xpack.spaces.spaceSelector.changeSpaceAnytimeAvailabilityText",defaultMessage:"You can change your space at anytime"})))),react_2.default.createElement(eui_1.EuiPageContent,{className:"spcSpaceSelector__pageContent"},react_2.default.createElement(eui_1.EuiFlexGroup,{direction:"column",alignItems:"center",responsive:false},this.getSearchField()),react_2.default.createElement(eui_1.EuiSpacer,{size:"xl"}),react_2.default.createElement(space_cards_1.SpaceCards,{spaces:filteredSpaces,onSpaceSelect:this.onSelectSpace}),filteredSpaces.length===0&&react_2.default.createElement(react_2.Fragment,null,react_2.default.createElement(eui_1.EuiSpacer,null),react_2.default.createElement(eui_1.EuiText,{color:"subdued",textAlign:"center"},react_2.default.createElement(react_1.FormattedMessage,{id:"xpack.spaces.spaceSelector.noSpacesMatchSearchCriteriaDescription",defaultMessage:"No spaces match search criteria"}))))))}}]);return SpaceSelectorUI}(react_2.Component);exports.SpaceSelector=react_1.injectI18n(SpaceSelectorUI)},2283:function(module,exports,__webpack_require__){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var eui_1=__webpack_require__(1);var react_1=tslib_1.__importStar(__webpack_require__(0));var space_card_1=__webpack_require__(2284);var SpaceCards=function(_react_1$Component){_inherits(SpaceCards,_react_1$Component);function SpaceCards(){_classCallCheck(this,SpaceCards);var _this=_possibleConstructorReturn(this,(SpaceCards.__proto__||Object.getPrototypeOf(SpaceCards)).apply(this,arguments));_this.renderSpace=function(space){return react_1.default.createElement(eui_1.EuiFlexItem,{key:space.id,grow:false},react_1.default.createElement(space_card_1.SpaceCard,{space:space,onClick:_this.createSpaceClickHandler(space)}))};_this.createSpaceClickHandler=function(space){return function(){_this.props.onSpaceSelect(space)}};return _this}_createClass(SpaceCards,[{key:"render",value:function render(){return react_1.default.createElement("div",{className:"spaceCards"},react_1.default.createElement(eui_1.EuiFlexGroup,{gutterSize:"l",justifyContent:"center",wrap:true,responsive:false},this.props.spaces.map(this.renderSpace)))}}]);return SpaceCards}(react_1.Component);exports.SpaceCards=SpaceCards},2284:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var tslib_1=__webpack_require__(5);var eui_1=__webpack_require__(1);var react_1=tslib_1.__importDefault(__webpack_require__(0));var components_1=__webpack_require__(279);exports.SpaceCard=function(props){var space=props.space,onClick=props.onClick;return react_1.default.createElement(eui_1.EuiCard,{className:"spaceCard","data-test-subj":"space-card-"+space.id,icon:renderSpaceAvatar(space),title:space.name,description:renderSpaceDescription(space),onClick:onClick})};function renderSpaceAvatar(space){return react_1.default.createElement(components_1.SpaceAvatar,{space:space,size:"l",announceSpaceName:false})}function renderSpaceDescription(space){var description=space.description||"";var needsTruncation=description.length>120;if(needsTruncation){description=description.substr(0,120)+"…"}return react_1.default.createElement("span",{title:description,className:"eui-textBreakWord euiTextColor--subdued"},description)}},9:function(module,exports){module.exports=vendors}});