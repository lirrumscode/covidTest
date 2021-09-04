(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test1-encuesta3-encuesta3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta3/encuesta3.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta3/encuesta3.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">\n          Hoy, al tomar tu temperatura, ¿fué de 37.5C/99.5F o más alta?<b style=\"color: #ff1515;\">*</b>\n        </h1>\n        <ion-list>\n        <ion-radio-group value=\"biff\" (ionChange)=\"radioGroupChange($event)\">\n          <ion-item color=\"medium\" lines=\"none\">\n            <ion-label class=\"select-txt\">Sí</ion-label>\n            <ion-radio\n              slot=\"start\"\n              value=\"si\"\n              color=\"dark\"\n              mode=\"md\"\n            ></ion-radio>\n          </ion-item>\n          <ion-item color=\"medium\" lines=\"none\">\n            <ion-label class=\"select-txt\">No</ion-label>\n            <ion-radio\n              slot=\"start\"\n              value=\"no\"\n              mode=\"md\"\n            ></ion-radio>\n          </ion-item>\n          <ion-item color=\"medium\" lines=\"none\">\n            <ion-label class=\"select-txt\">No tengo termometro</ion-label>\n            <ion-radio\n              slot=\"start\"\n              value=\"termometro\"\n              mode=\"md\"\n            ></ion-radio>\n          </ion-item>\n          </ion-radio-group>\n          </ion-list>\n        <ion-row class=\"row\">\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goBack()\"\n            >\n              <span class=\"span\">Anterior</span>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goNext()\"\n            >\n              <span class=\"span\">Siguiente</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta3/encuesta3-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta3/encuesta3-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: Encuesta3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encuesta3PageRoutingModule", function() { return Encuesta3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _encuesta3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuesta3.page */ "./src/app/pages/modules/test1/encuesta3/encuesta3.page.ts");




const routes = [
    {
        path: '',
        component: _encuesta3_page__WEBPACK_IMPORTED_MODULE_3__["Encuesta3Page"]
    }
];
let Encuesta3PageRoutingModule = class Encuesta3PageRoutingModule {
};
Encuesta3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Encuesta3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta3/encuesta3.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta3/encuesta3.module.ts ***!
  \*******************************************************************/
/*! exports provided: Encuesta3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encuesta3PageModule", function() { return Encuesta3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _encuesta3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encuesta3-routing.module */ "./src/app/pages/modules/test1/encuesta3/encuesta3-routing.module.ts");
/* harmony import */ var _encuesta3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encuesta3.page */ "./src/app/pages/modules/test1/encuesta3/encuesta3.page.ts");







let Encuesta3PageModule = class Encuesta3PageModule {
};
Encuesta3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _encuesta3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Encuesta3PageRoutingModule"]
        ],
        declarations: [_encuesta3_page__WEBPACK_IMPORTED_MODULE_6__["Encuesta3Page"]]
    })
], Encuesta3PageModule);



/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta3/encuesta3.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta3/encuesta3.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* **** VARIABLES GLOBALES **** */\n/* ==== START MEDIAQUERYS FOR CELLPHONE ==== */\nion-content {\n  height: 100vh;\n}\nion-list {\n  background: none !important;\n}\nion-radio {\n  --color-checked:#424874;\n}\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\nion-grid ion-row ion-col .title {\n  font-family: \"Poppins\";\n  color: #424874;\n  font-weight: bold;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 17px;\n}\nion-grid ion-row ion-col .label {\n  font-family: \"Poppins\";\n  color: #424874;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\nion-grid ion-row ion-col ion-select {\n  color: #424874;\n  width: 100%;\n}\nion-grid ion-row ion-col .select-txt {\n  color: #424874;\n  font-family: \"Poppins\";\n}\nion-grid ion-row ion-col .label-radio {\n  font-family: \"Poppins\";\n  color: #424874;\n}\nion-grid ion-row ion-col .select-txt {\n  padding-left: 20px;\n}\nion-grid ion-row ion-col .row ion-button {\n  width: 100%;\n  height: 50px;\n  margin: auto;\n  display: block;\n  margin-top: 10%;\n  font-family: \"Poppins\";\n  font-weight: bold;\n}\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  ion-grid ion-row ion-col .row ion-button {\n    width: 80%;\n    height: 50px;\n  }\n  ion-grid ion-row ion-col .img-logo {\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n}\n@media only screen and (min-width: 1100px) and (max-width: 2056px) {\n  ion-grid ion-row ion-col .img-logo {\n    width: 30%;\n    margin-top: 5%;\n    margin-bottom: 10%;\n  }\n  ion-grid ion-row ion-col .row ion-button {\n    width: 45%;\n    height: 50px;\n  }\n  ion-grid ion-row ion-col .img-logo {\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9lbmN1ZXN0YTMvZW5jdWVzdGEzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9lbmN1ZXN0YTMvZW5jdWVzdGEzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQUVBLDhDQUFBO0FBRUE7RUFDRSxhQUFBO0FDREY7QURHQTtFQUNFLDJCQUFBO0FDQUY7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDTTtFQUNFLHNCQXpCRDtFQTBCQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ007RUFDRSxzQkFsQ0Q7RUFtQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ007RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ007RUFDRSxjQUFBO0VBQ0Esc0JBN0NEO0FDOENQO0FEQ007RUFDRSxzQkFoREQ7RUFpREMsY0FBQTtBQ0NSO0FEQ007RUFDRSxrQkFBQTtBQ0NSO0FERVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQTdESDtFQThERyxpQkFBQTtBQ0FWO0FETUE7RUFLVTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDUFY7RURVTTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtFQ1JSO0FBQ0Y7QURhQTtFQUlRO0lBQ0UsVUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQ2RSO0VEaUJRO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUNmVjtFRGtCTTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtFQ2hCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9lbmN1ZXN0YTMvZW5jdWVzdGEzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKiogVkFSSUFCTEVTIEdMT0JBTEVTICoqKiogKi9cbiRmb250OiBcIlBvcHBpbnNcIjtcbi8qID09PT0gU1RBUlQgTUVESUFRVUVSWVMgRk9SIENFTExQSE9ORSA9PT09ICovXG5cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLXJhZGlve1xuICAtLWNvbG9yLWNoZWNrZWQ6IzQyNDg3NDtcbn1cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBpb24tcm93IHtcbiAgICBpb24tY29sIHtcbiAgICAgIC5pbWctbG9nbyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIH1cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgfVxuICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3QtdHh0IHtcbiAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICAgIH1cbiAgICAgIC5sYWJlbC1yYWRpbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICB9XG4gICAgICAuc2VsZWN0LXR4dCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1sb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIGFuZCAobWF4LXdpZHRoOiAyMDU2cHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIC5pbWctbG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW1nLWxvZ28ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiAqKioqIFZBUklBQkxFUyBHTE9CQUxFUyAqKioqICovXG4vKiA9PT09IFNUQVJUIE1FRElBUVVFUllTIEZPUiBDRUxMUEhPTkUgPT09PSAqL1xuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiM0MjQ4NzQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5pbWctbG9nbyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuc2VsZWN0LXR4dCB7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsLXJhZGlvIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuc2VsZWN0LXR4dCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAucm93IGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5yb3cgaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5pbWctbG9nbyB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSBhbmQgKG1heC13aWR0aDogMjA1NnB4KSB7XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuaW1nLWxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICB9XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAucm93IGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuaW1nLWxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta3/encuesta3.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta3/encuesta3.page.ts ***!
  \*****************************************************************/
/*! exports provided: Encuesta3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encuesta3Page", function() { return Encuesta3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let Encuesta3Page = class Encuesta3Page {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    radioGroupChange(event) {
        console.log(event);
        this.storage.set("encuesta3", event.detail.value);
    }
    goBack() {
        this.router.navigateByUrl("splash/encuesta2");
    }
    goNext() {
        this.router.navigateByUrl("splash/resultado");
    }
    ngOnInit() { }
};
Encuesta3Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Encuesta3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-encuesta3",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./encuesta3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta3/encuesta3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./encuesta3.page.scss */ "./src/app/pages/modules/test1/encuesta3/encuesta3.page.scss")).default]
    })
], Encuesta3Page);



/***/ })

}]);
//# sourceMappingURL=pages-modules-test1-encuesta3-encuesta3-module-es2015.js.map