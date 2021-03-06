(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test2-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/inicio/inicio.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/inicio/inicio.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">Before you begin</h1>\n        <ul>\n          <li class=\"item1\">\n            <a\n              >This tool is not meant to take the place of consultation with\n              your health<br />\n              care provider or to diagnose or treat conditions. If you're in an\n              emergency medical situation, call 911 or your local emergency\n              number.\n            </a>\n          </li>\n          <li class=\"item2\">\n            <p>\n              Information about COVID-19 is constantly changing. And the level\n              of COVID-19 activity varies by community, as does the availability\n              of testing. <br />For current updates on COVID-19 and details on\n              testing and other health measures in your state, check with your\n              local public health agency and visit the CDC website at cdc.gov.\n              <br />\n            </p>\n          </li>\n        </ul>\n        <ion-button\n          color=\"dark\"\n          shape=\"round\"\n          fill=\"outline\"\n          mode=\"md\"\n          (click)=\"goPregunta1()\"\n          >Begin assessment</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/modules/test2/inicio/inicio-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modules/test2/inicio/inicio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/modules/test2/inicio/inicio.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modules/test2/inicio/inicio.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/modules/test2/inicio/inicio.module.ts ***!
  \*************************************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/modules/test2/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/modules/test2/inicio/inicio.page.ts");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/pages/modules/test2/inicio/inicio.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/modules/test2/inicio/inicio.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 100vh;\n}\n\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n}\n\nion-grid ion-row ion-col .img-content {\n  display: block;\n  margin: auto;\n  width: 90%;\n  margin-top: 20px;\n  border-radius: 15px;\n}\n\nion-grid ion-row ion-col .title {\n  color: #424874;\n  font-weight: bold;\n  text-align: center;\n  font-size: 20px;\n}\n\nion-grid ion-row ion-col ul .item1 {\n  color: #424874;\n  font-size: 20px;\n}\n\nion-grid ion-row ion-col ul .item1 a {\n  color: #424874;\n  font-size: 14px;\n}\n\nion-grid ion-row ion-col ul .item2 {\n  color: #424874;\n  font-size: 20px;\n}\n\nion-grid ion-row ion-col ul .item2 a {\n  color: #424874;\n  font-size: 14px;\n}\n\nion-grid ion-row ion-col ul .item2 p {\n  color: #424874 !important;\n  font-size: 14px;\n  padding-right: 20px;\n  text-align: justify;\n}\n\nion-grid ion-row ion-col ion-button {\n  width: 50%;\n  height: 50px;\n  margin: auto;\n  display: block;\n  margin-top: 10%;\n  font-weight: bold;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  ion-grid ion-row ion-col .row ion-button {\n    width: 30%;\n    height: 50px;\n  }\n  ion-grid ion-row ion-col .img-logo {\n    width: 40%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n  ion-grid ion-row ion-col .img-content {\n    width: 60%;\n  }\n}\n\n@media only screen and (min-width: 1100px) and (max-width: 2056px) {\n  ion-grid ion-row ion-col .row ion-button {\n    width: 20%;\n    height: 50px;\n  }\n  ion-grid ion-row ion-col .img-logo {\n    width: 10%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n  ion-grid ion-row ion-col .img-content {\n    width: 60%;\n  }\n  ion-grid ion-row ion-col ul .item1 {\n    color: #424874;\n    font-size: 20px;\n  }\n  ion-grid ion-row ion-col ul .item1 a {\n    color: #000;\n    font-size: 20px;\n  }\n  ion-grid ion-row ion-col ul .item2 {\n    color: #424874;\n    font-size: 20px;\n  }\n  ion-grid ion-row ion-col ul .item2 a {\n    color: #424874;\n    font-size: 20px;\n  }\n  ion-grid ion-row ion-col ul .item2 p {\n    color: #000 !important;\n    font-size: 20px;\n    padding-right: 20px;\n    text-align: justify;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURJTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNEUjs7QURHTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURHTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBRElRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNGVjs7QURHVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRFo7O0FESVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0ZWOztBREdVO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNEWjs7QURHVTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNEWjs7QURLTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURRQTtFQUtVO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUNUVjtFRFlNO0lBQ0UsVUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ1ZSO0VEWU07SUFDRSxVQUFBO0VDVlI7QUFDRjs7QURlQTtFQUtVO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUNqQlY7RURvQk07SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDbEJSO0VEb0JNO0lBQ0UsVUFBQTtFQ2xCUjtFRHFCUTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDbkJWO0VEb0JVO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNsQlo7RURxQlE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQ25CVjtFRG9CVTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDbEJaO0VEb0JVO0lBQ0Usc0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQ2xCWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmlvbi1ncmlkIHtcbiAgaW9uLXJvdyB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAuaW1nLWxvZ28ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICB9XG4gICAgICAuaW1nLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgLml0ZW0xIHtcbiAgICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0yIHtcbiAgICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogIzQyNDg3NCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW1nLWxvZ28ge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1jb250ZW50IHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDBweCkgYW5kIChtYXgtd2lkdGg6IDIwNTZweCkge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW1nLWxvZ28ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1jb250ZW50IHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAuaXRlbTEge1xuICAgICAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0yIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmltZy1sb2dvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5pbWctY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdGxlIHtcbiAgY29sb3I6ICM0MjQ4NzQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB1bCAuaXRlbTEge1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHVsIC5pdGVtMSBhIHtcbiAgY29sb3I6ICM0MjQ4NzQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB1bCAuaXRlbTIge1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHVsIC5pdGVtMiBhIHtcbiAgY29sb3I6ICM0MjQ4NzQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB1bCAuaXRlbTIgcCB7XG4gIGNvbG9yOiAjNDI0ODc0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAucm93IGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuaW1nLWxvZ28ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5pbWctY29udGVudCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIGFuZCAobWF4LXdpZHRoOiAyMDU2cHgpIHtcbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5yb3cgaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5pbWctbG9nbyB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuICBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmltZy1jb250ZW50IHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB1bCAuaXRlbTEge1xuICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgdWwgLml0ZW0xIGEge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgdWwgLml0ZW0yIHtcbiAgICBjb2xvcjogIzQyNDg3NDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHVsIC5pdGVtMiBhIHtcbiAgICBjb2xvcjogIzQyNDg3NDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHVsIC5pdGVtMiBwIHtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/modules/test2/inicio/inicio.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/modules/test2/inicio/inicio.page.ts ***!
  \***********************************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let InicioPage = class InicioPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goPregunta1() {
        this.router.navigateByUrl('splash/pregunta1');
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/inicio/inicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/modules/test2/inicio/inicio.page.scss")).default]
    })
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-modules-test2-inicio-inicio-module-es2015.js.map