webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntries.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/TaskbarEntries.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".TaskbarEntries_taskbarEntries__10Cs_ {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  left: 39px;\\n  display: flex;\\n  flex: 0 1 160px;\\n  width: calc(100% - 90px - 42px);\\n  height: 30px;\\n  -webkit-backdrop-filter: blur(5px);\\n          backdrop-filter: blur(5px);\\n}\\n.TaskbarEntries_taskbarEntries__10Cs_ li {\\n  display: grid;\\n  width: 160px;\\n}\\n.TaskbarEntries_taskbarEntries__10Cs_ li:last-child {\\n  padding-right: unset;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://TaskbarEntries.module.scss\",\"webpack://../../mixins.scss\"],\"names\":[],\"mappings\":\"AAKA;ECFE,eAAA;EACA,SAAA;EACA,OAAA;EDGA,UAAA;EAEA,aAAA;EACA,eAAA;EAEA,+BAAA;EACA,YAAA;EAEA,kCAAA;UAAA,0BAAA;AANF;AAQE;EACE,aAAA;EAEA,YAAA;AAPJ;AAUI;EACE,oBAAA;AARN\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n$startMenuTotalWidth: map-get($startmenu, width) + (map-get($startmenu, padding) * 2);\\n\\n.taskbarEntries {\\n  @include bottomLeft;\\n\\n  left: $startMenuTotalWidth - map-get($startmenu, padding);\\n\\n  display: flex;\\n  flex: 0 1 map-get($taskbar, entry-width);\\n\\n  width: calc(100% - #{map-get($clock, width)} - #{$startMenuTotalWidth});\\n  height: map-get($taskbar, height);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur));\\n\\n  li {\\n    display: grid;\\n\\n    width: map-get($taskbar, entry-width);\\n    // padding-right: map-get($taskbar, entry-padding);\\n\\n    &:last-child {\\n      padding-right: unset;\\n    }\\n  }\\n}\\n\",\"@import '@/styles/maps';\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"taskbarEntries\": \"TaskbarEntries_taskbarEntries__10Cs_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyaWVzLm1vZHVsZS5zY3NzPzgyNGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBDQUEwQyxvQkFBb0IsY0FBYyxZQUFZLGVBQWUsa0JBQWtCLG9CQUFvQixvQ0FBb0MsaUJBQWlCLHVDQUF1Qyx1Q0FBdUMsR0FBRyw0Q0FBNEMsa0JBQWtCLGlCQUFpQixHQUFHLHVEQUF1RCx5QkFBeUIsR0FBRyxPQUFPLHlIQUF5SCxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsaURBQWlELDRCQUE0QiwwRkFBMEYscUJBQXFCLHdCQUF3QixnRUFBZ0Usb0JBQW9CLDZDQUE2QywyQkFBMkIsdUJBQXVCLEtBQUsscUJBQXFCLEVBQUUsc0NBQXNDLHFEQUFxRCxVQUFVLG9CQUFvQiw4Q0FBOEMseURBQXlELHNCQUFzQiw2QkFBNkIsT0FBTyxLQUFLLEdBQUcsNkJBQTZCLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0IsNEJBQTRCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDMXlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJpZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVGFza2JhckVudHJpZXNfdGFza2JhckVudHJpZXNfXzEwQ3NfIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBsZWZ0OiAzOXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMSAxNjBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4IC0gNDJweCk7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuLlRhc2tiYXJFbnRyaWVzX3Rhc2tiYXJFbnRyaWVzX18xMENzXyBsaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4uVGFza2JhckVudHJpZXNfdGFza2JhckVudHJpZXNfXzEwQ3NfIGxpOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9UYXNrYmFyRW50cmllcy5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VDRkUsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VER0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBRUEsK0JBQUE7RUFDQSxZQUFBO0VBRUEsa0NBQUE7VUFBQSwwQkFBQTtBQU5GO0FBUUU7RUFDRSxhQUFBO0VBRUEsWUFBQTtBQVBKO0FBVUk7RUFDRSxvQkFBQTtBQVJOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcbkBpbXBvcnQgJ0Avc3R5bGVzL21peGlucyc7XFxuXFxuJHN0YXJ0TWVudVRvdGFsV2lkdGg6IG1hcC1nZXQoJHN0YXJ0bWVudSwgd2lkdGgpICsgKG1hcC1nZXQoJHN0YXJ0bWVudSwgcGFkZGluZykgKiAyKTtcXG5cXG4udGFza2JhckVudHJpZXMge1xcbiAgQGluY2x1ZGUgYm90dG9tTGVmdDtcXG5cXG4gIGxlZnQ6ICRzdGFydE1lbnVUb3RhbFdpZHRoIC0gbWFwLWdldCgkc3RhcnRtZW51LCBwYWRkaW5nKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAwIDEgbWFwLWdldCgkdGFza2JhciwgZW50cnktd2lkdGgpO1xcblxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtICN7bWFwLWdldCgkY2xvY2ssIHdpZHRoKX0gLSAjeyRzdGFydE1lbnVUb3RhbFdpZHRofSk7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIobWFwLWdldCgkdGFza2JhciwgYmx1cikpO1xcblxcbiAgbGkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICB3aWR0aDogbWFwLWdldCgkdGFza2JhciwgZW50cnktd2lkdGgpO1xcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBlbnRyeS1wYWRkaW5nKTtcXG5cXG4gICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1peGluIHNjcm9sbGJhcnMoJHNpemUsICRib3JkZXItcmFkaXVzLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3IpIHtcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6ICRzaXplO1xcbiAgICBoZWlnaHQ6ICRzaXplO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0ZW4oJGZvcmVncm91bmQtY29sb3IsIDEwJSk7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZm9yZWdyb3VuZC1jb2xvciwgMjAlKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0YXNrYmFyRW50cmllc1wiOiBcIlRhc2tiYXJFbnRyaWVzX3Rhc2tiYXJFbnRyaWVzX18xMENzX1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntries.module.scss\n");

/***/ })

})