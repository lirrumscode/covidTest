(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test1-encuesta2-encuesta2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta2/encuesta2.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta2/encuesta2.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">\n          En los últimos 14 días, ¿alguna autoridad gubernamentalo de salud\n          pública te ha pedido que te autoaísles por alguna razón relacionada a\n          COVID-19?<b style=\"color: #424874;\">*</b>\n        </h1>\n        <ion-label class=\"label\"></ion-label>\n        <ion-list>\n          <ion-radio-group value=\"biff\" (ionChange)=\"radioGroupChange($event)\">\n            <ion-item color=\"medium\" lines=\"none\">\n              <ion-label class=\"select-txt\">Sí</ion-label>\n              <ion-radio slot=\"start\" value=\"si\"></ion-radio>\n            </ion-item>\n            <ion-item color=\"medium\" lines=\"none\">\n              <ion-label class=\"select-txt\">No</ion-label>\n              <ion-radio slot=\"start\" value=\"no\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n\n        <ion-row class=\"row\">\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goBack()\"\n            >\n              <span class=\"span\">Anterior</span>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goNext()\"\n            >\n              <span class=\"span\">Siguiente</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta2/encuesta2-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta2/encuesta2-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: Encuesta2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encuesta2PageRoutingModule", function() { return Encuesta2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _encuesta2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuesta2.page */ "./src/app/pages/modules/test1/encuesta2/encuesta2.page.ts");




const routes = [
    {
        path: '',
        component: _encuesta2_page__WEBPACK_IMPORTED_MODULE_3__["Encuesta2Page"]
    }
];
let Encuesta2PageRoutingModule = class Encuesta2PageRoutingModule {
};
Encuesta2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Encuesta2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta2/encuesta2.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta2/encuesta2.module.ts ***!
  \*******************************************************************/
/*! exports provided: Encuesta2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encuesta2PageModule", function() { return Encuesta2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _encuesta2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encuesta2-routing.module */ "./src/app/pages/modules/test1/encuesta2/encuesta2-routing.module.ts");
/* harmony import */ var _encuesta2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encuesta2.page */ "./src/app/pages/modules/test1/encuesta2/encuesta2.page.ts");







let Encuesta2PageModule = class Encuesta2PageModule {
};
Encuesta2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _encuesta2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Encuesta2PageRoutingModule"]
        ],
        declarations: [_encuesta2_page__WEBPACK_IMPORTED_MODULE_6__["Encuesta2Page"]]
    })
], Encuesta2PageModule);



/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta2/encuesta2.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta2/encuesta2.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* **** VARIABLES GLOBALES **** */\nion-content {\n  height: 100vh;\n}\nion-list {\n  background: none !important;\n}\nion-radio {\n  --color-checked:#424874;\n}\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\nion-grid ion-row ion-col .title {\n  font-family: \"Poppins\";\n  color: #424874;\n  font-weight: bold;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 17px;\n}\nion-grid ion-row ion-col .label {\n  font-family: \"Poppins\";\n  color: #000;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\nion-grid ion-row ion-col ion-select {\n  color: #424874;\n  width: 100%;\n}\nion-grid ion-row ion-col .select-txt {\n  color: #424874;\n  font-family: \"Poppins\";\n}\nion-grid ion-row ion-col .label-radio {\n  font-family: \"Poppins\";\n  color: #424874;\n}\nion-grid ion-row ion-col .select-txt {\n  padding-left: 20px;\n}\nion-grid ion-row ion-col .row {\n  position: fixed;\n  bottom: 10px;\n  width: 88%;\n}\nion-grid ion-row ion-col .row ion-button {\n  width: 100%;\n  height: 50px;\n  margin: auto;\n  display: block;\n  margin-top: 10%;\n  font-family: \"Poppins\";\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9lbmN1ZXN0YTIvZW5jdWVzdGEyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9lbmN1ZXN0YTIvZW5jdWVzdGEyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQUVBO0VBQ0UsYUFBQTtBQ0FGO0FERUE7RUFDRSwyQkFBQTtBQ0NGO0FEQ0E7RUFDRSx1QkFBQTtBQ0VGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDR0Y7QURBTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQU07RUFDRSxzQkF2QkQ7RUF3QkMsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUjtBREFNO0VBQ0Usc0JBaENEO0VBaUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFUjtBREFNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNFUjtBREFNO0VBQ0UsY0FBQTtFQUNBLHNCQTNDRDtBQzZDUDtBREFNO0VBQ0Usc0JBOUNEO0VBK0NDLGNBQUE7QUNFUjtBREFNO0VBQ0Usa0JBQUE7QUNFUjtBREFNO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRVY7QURBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBL0RMO0VBZ0VLLGlCQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2R1bGVzL3Rlc3QxL2VuY3Vlc3RhMi9lbmN1ZXN0YTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKioqKiBWQVJJQUJMRVMgR0xPQkFMRVMgKioqKiAqL1xuJGZvbnQ6IFwiUG9wcGluc1wiO1xuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tcmFkaW97XG4gIC0tY29sb3ItY2hlY2tlZDojNDI0ODc0O1xufVxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGlvbi1yb3cge1xuICAgIGlvbi1jb2wge1xuICAgICAgLmltZy1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgfVxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICB9XG4gICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnNlbGVjdC10eHQge1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgfVxuICAgICAgLmxhYmVsLXJhZGlvIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3QtdHh0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgfVxuICAgICAgLnJvd3tcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA4OCU7XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG4iLCIvKiAqKioqIFZBUklBQkxFUyBHTE9CQUxFUyAqKioqICovXG5pb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6IzQyNDg3NDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmltZy1sb2dvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAubGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tc2VsZWN0IHtcbiAgY29sb3I6ICM0MjQ4NzQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5zZWxlY3QtdHh0IHtcbiAgY29sb3I6ICM0MjQ4NzQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAubGFiZWwtcmFkaW8ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGNvbG9yOiAjNDI0ODc0O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5zZWxlY3QtdHh0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5yb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDg4JTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAucm93IGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/modules/test1/encuesta2/encuesta2.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modules/test1/encuesta2/encuesta2.page.ts ***!
  \*****************************************************************/
/*! exports provided: Encuesta2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encuesta2Page", function() { return Encuesta2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let Encuesta2Page = class Encuesta2Page {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    radioGroupChange(event) {
        console.log(event.detail.value);
        if (event.detail.value == "si") {
            this.storage.set('encuesta2', event.detail.value);
            this.router.navigateByUrl('splash/resultado');
        }
        else if (event.detail.value == "no") {
            this.storage.set('encuesta2', event.detail.value);
            this.router.navigateByUrl('splash/encuesta3');
        }
    }
    goBack() {
        this.router.navigateByUrl('splash/encuesta1');
    }
    goNext() {
        this.router.navigateByUrl('splash/encuesta3');
    }
    ngOnInit() {
    }
};
Encuesta2Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Encuesta2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encuesta2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./encuesta2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta2/encuesta2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./encuesta2.page.scss */ "./src/app/pages/modules/test1/encuesta2/encuesta2.page.scss")).default]
    })
], Encuesta2Page);



/***/ })

}]);
//# sourceMappingURL=pages-modules-test1-encuesta2-encuesta2-module-es2015.js.map