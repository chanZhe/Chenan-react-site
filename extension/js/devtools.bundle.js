!function(e){function __webpack_require__(_){if(r[_])return r[_].exports;var n=r[_]={i:_,l:!1,exports:{}};return e[_].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var r={};__webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,_){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:_})},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1189)}({1189:function(e,r,_){e.exports=_(1190)},1190:function(e,r,_){"use strict";function createPanel(e){chrome.devtools.panels.create("Redux","img/logo/scalable.png",e,function(){})}chrome.runtime.getBackgroundPage?chrome.runtime.getBackgroundPage(function(e){createPanel(e?"window.html":"devpanel.html")}):createPanel("devpanel.html")}});