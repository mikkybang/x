webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntries.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/TaskbarEntries.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".TaskbarEntries_taskbarEntries__10Cs_ {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  left: 39px;\\n  display: flex;\\n  flex: 0 1 160px;\\n  width: calc(100% - 90px - 42px);\\n  height: 30px;\\n  -webkit-backdrop-filter: blur(5px);\\n          backdrop-filter: blur(5px);\\n}\\n.TaskbarEntries_taskbarEntries__10Cs_ li {\\n  display: grid;\\n  width: 160px;\\n}\\n.TaskbarEntries_taskbarEntries__10Cs_ li:last-child {\\n  padding-right: unset;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://TaskbarEntries.module.scss\",\"webpack://../../mixins.scss\"],\"names\":[],\"mappings\":\"AAKA;ECFE,eAAA;EACA,SAAA;EACA,OAAA;EDGA,UAAA;EAEA,aAAA;EACA,eAAA;EAEA,+BAAA;EACA,YAAA;EAEA,kCAAA;UAAA,0BAAA;AANF;AAQE;EACE,aAAA;EAEA,YAAA;AAPJ;AASI;EACE,oBAAA;AAPN\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n$startMenuTotalWidth: map-get($startmenu, width) + (map-get($startmenu, padding) * 2);\\n\\n.taskbarEntries {\\n  @include bottomLeft;\\n\\n  left: $startMenuTotalWidth - map-get($startmenu, padding);\\n\\n  display: flex;\\n  flex: 0 1 map-get($taskbar, entry-width);\\n\\n  width: calc(100% - #{map-get($clock, width)} - #{$startMenuTotalWidth});\\n  height: map-get($taskbar, height);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur));\\n\\n  li {\\n    display: grid;\\n\\n    width: map-get($taskbar, entry-width);\\n\\n    &:last-child {\\n      padding-right: unset;\\n    }\\n  }\\n}\\n\",\"@import '@/styles/maps';\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"taskbarEntries\": \"TaskbarEntries_taskbarEntries__10Cs_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyaWVzLm1vZHVsZS5zY3NzPzgyNGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDBDQUEwQyxvQkFBb0IsY0FBYyxZQUFZLGVBQWUsa0JBQWtCLG9CQUFvQixvQ0FBb0MsaUJBQWlCLHVDQUF1Qyx1Q0FBdUMsR0FBRyw0Q0FBNEMsa0JBQWtCLGlCQUFpQixHQUFHLHVEQUF1RCx5QkFBeUIsR0FBRyxPQUFPLHlIQUF5SCxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsaURBQWlELDRCQUE0QiwwRkFBMEYscUJBQXFCLHdCQUF3QixnRUFBZ0Usb0JBQW9CLDZDQUE2QywyQkFBMkIsdUJBQXVCLEtBQUsscUJBQXFCLEVBQUUsc0NBQXNDLHFEQUFxRCxVQUFVLG9CQUFvQiw4Q0FBOEMsc0JBQXNCLDZCQUE2QixPQUFPLEtBQUssR0FBRyw2QkFBNkIsdUJBQXVCLG9CQUFvQixjQUFjLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGFBQWEsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsV0FBVyxZQUFZLEdBQUcsaUNBQWlDLHdCQUF3Qiw0QkFBNEIsR0FBRyxvRkFBb0YsMEJBQTBCLG1CQUFtQixvQkFBb0IsS0FBSyxrQ0FBa0MsNkRBQTZELEtBQUssa0NBQWtDLG9DQUFvQyxvQ0FBb0MsMENBQTBDLG1DQUFtQyxpQkFBaUIseURBQXlELE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUNqdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cmllcy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5UYXNrYmFyRW50cmllc190YXNrYmFyRW50cmllc19fMTBDc18ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGxlZnQ6IDM5cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAxIDE2MHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHggLSA0MnB4KTtcXG4gIGhlaWdodDogMzBweDtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG4uVGFza2JhckVudHJpZXNfdGFza2JhckVudHJpZXNfXzEwQ3NfIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5UYXNrYmFyRW50cmllc190YXNrYmFyRW50cmllc19fMTBDc18gbGk6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1Rhc2tiYXJFbnRyaWVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUNGRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURHQSxVQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFFQSwrQkFBQTtFQUNBLFlBQUE7RUFFQSxrQ0FBQTtVQUFBLDBCQUFBO0FBTkY7QUFRRTtFQUNFLGFBQUE7RUFFQSxZQUFBO0FBUEo7QUFTSTtFQUNFLG9CQUFBO0FBUE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvbWl4aW5zJztcXG5cXG4kc3RhcnRNZW51VG90YWxXaWR0aDogbWFwLWdldCgkc3RhcnRtZW51LCB3aWR0aCkgKyAobWFwLWdldCgkc3RhcnRtZW51LCBwYWRkaW5nKSAqIDIpO1xcblxcbi50YXNrYmFyRW50cmllcyB7XFxuICBAaW5jbHVkZSBib3R0b21MZWZ0O1xcblxcbiAgbGVmdDogJHN0YXJ0TWVudVRvdGFsV2lkdGggLSBtYXAtZ2V0KCRzdGFydG1lbnUsIHBhZGRpbmcpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMSBtYXAtZ2V0KCR0YXNrYmFyLCBlbnRyeS13aWR0aCk7XFxuXFxuICB3aWR0aDogY2FsYygxMDAlIC0gI3ttYXAtZ2V0KCRjbG9jaywgd2lkdGgpfSAtICN7JHN0YXJ0TWVudVRvdGFsV2lkdGh9KTtcXG4gIGhlaWdodDogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KTtcXG5cXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cihtYXAtZ2V0KCR0YXNrYmFyLCBibHVyKSk7XFxuXFxuICBsaSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIHdpZHRoOiBtYXAtZ2V0KCR0YXNrYmFyLCBlbnRyeS13aWR0aCk7XFxuXFxuICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdAL3N0eWxlcy9tYXBzJztcXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGFza2JhckVudHJpZXNcIjogXCJUYXNrYmFyRW50cmllc190YXNrYmFyRW50cmllc19fMTBDc19cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntries.module.scss\n");

/***/ })

})