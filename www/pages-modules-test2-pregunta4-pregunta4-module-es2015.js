(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test2-pregunta4-pregunta4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta4/pregunta4.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta4/pregunta4.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">\n          Do you have any of the following possible emergency symptoms? Check\n          all the apply.<b style=\"color: #ff1515\">*</b>\n        </h1>\n        <ion-label class=\"label\"></ion-label>\n        <ion-list>\n          <ion-radio-group value=\"biff\" (ionChange)=\"radioGroupChange($event)\">\n            <ion-item color=\"medium\" lines=\"none\">\n              <ion-label class=\"select-txt\"\n                >Strugglingto breathe or figthing for breath even while inactive\n                or when resting</ion-label\n              >\n              <ion-radio slot=\"start\" value=\"mal\" color=\"dark\"></ion-radio>\n            </ion-item>\n            <ion-item color=\"medium\" lines=\"none\">\n              <ion-label class=\"select-txt\"\n                >Feeling about to collapse every time you stand or sit up\n                (floppiness or a lack of response in a child under age\n                2)</ion-label\n              >\n              <ion-radio color=\"dark\" slot=\"start\" value=\"remal\" mode=\"md\"></ion-radio>\n            </ion-item>\n            <ion-item color=\"medium\" lines=\"none\">\n              <ion-label class=\"select-txt\">None of the above</ion-label>\n              <ion-radio color=\"dark\" slot=\"start\" value=\"ninguno\" mode=\"md\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n\n        <ion-row class=\"row\">\n          <ion-col size=\"6\"> </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goNext()\"\n            >\n              Next\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/modules/test2/pregunta4/pregunta4-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modules/test2/pregunta4/pregunta4-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: Pregunta4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pregunta4PageRoutingModule", function() { return Pregunta4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pregunta4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pregunta4.page */ "./src/app/pages/modules/test2/pregunta4/pregunta4.page.ts");




const routes = [
    {
        path: '',
        component: _pregunta4_page__WEBPACK_IMPORTED_MODULE_3__["Pregunta4Page"]
    }
];
let Pregunta4PageRoutingModule = class Pregunta4PageRoutingModule {
};
Pregunta4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Pregunta4PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modules/test2/pregunta4/pregunta4.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test2/pregunta4/pregunta4.module.ts ***!
  \*******************************************************************/
/*! exports provided: Pregunta4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pregunta4PageModule", function() { return Pregunta4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pregunta4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pregunta4-routing.module */ "./src/app/pages/modules/test2/pregunta4/pregunta4-routing.module.ts");
/* harmony import */ var _pregunta4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pregunta4.page */ "./src/app/pages/modules/test2/pregunta4/pregunta4.page.ts");







let Pregunta4PageModule = class Pregunta4PageModule {
};
Pregunta4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pregunta4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Pregunta4PageRoutingModule"]
        ],
        declarations: [_pregunta4_page__WEBPACK_IMPORTED_MODULE_6__["Pregunta4Page"]]
    })
], Pregunta4PageModule);



/***/ }),

/***/ "./src/app/pages/modules/test2/pregunta4/pregunta4.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test2/pregunta4/pregunta4.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* **** VARIABLES GLOBALES **** */\nion-content {\n  height: 100vh;\n}\nion-list {\n  background: none !important;\n}\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\nion-grid ion-row ion-col .title {\n  font-family: \"Poppins\";\n  color: #424874;\n  font-weight: bold;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 17px;\n}\nion-grid ion-row ion-col .label {\n  font-family: \"Poppins\";\n  color: #424874;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\nion-grid ion-row ion-col ion-select {\n  color: #424874;\n  width: 100%;\n}\nion-grid ion-row ion-col .select-txt {\n  color: #424874;\n  font-family: \"Poppins\";\n}\nion-grid ion-row ion-col .label-radio {\n  font-family: \"Poppins\";\n  color: #424874;\n}\nion-grid ion-row ion-col .select-txt {\n  padding-left: 20px;\n}\nion-grid ion-row ion-col .row {\n  position: fixed;\n  bottom: 10px;\n  width: 88%;\n}\nion-grid ion-row ion-col .row ion-button {\n  width: 100%;\n  height: 50px;\n  margin: auto;\n  display: block;\n  margin-top: 10%;\n  font-family: \"Poppins\";\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTQvcHJlZ3VudGE0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTQvcHJlZ3VudGE0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQUVBO0VBQ0UsYUFBQTtBQ0FGO0FERUE7RUFDRSwyQkFBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRUY7QURDTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQ007RUFDRSxzQkFwQkQ7RUFxQkMsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDUjtBRENNO0VBQ0Usc0JBN0JEO0VBOEJDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDUjtBRENNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNDUjtBRENNO0VBQ0UsY0FBQTtFQUNBLHNCQXhDRDtBQ3lDUDtBRENNO0VBQ0Usc0JBM0NEO0VBNENDLGNBQUE7QUNDUjtBRENNO0VBQ0Usa0JBQUE7QUNDUjtBRENNO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ1Y7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBNURMO0VBNkRLLGlCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2R1bGVzL3Rlc3QyL3ByZWd1bnRhNC9wcmVndW50YTQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKioqKiBWQVJJQUJMRVMgR0xPQkFMRVMgKioqKiAqL1xuJGZvbnQ6IFwiUG9wcGluc1wiO1xuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgaW9uLXJvdyB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAuaW1nLWxvZ28ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB9XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgIH1cbiAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuc2VsZWN0LXR4dCB7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICB9XG4gICAgICAubGFiZWwtcmFkaW8ge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgfVxuICAgICAgLnNlbGVjdC10eHQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgICAucm93e1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDg4JTtcblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbiIsIi8qICoqKiogVkFSSUFCTEVTIEdMT0JBTEVTICoqKiogKi9cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5pbWctbG9nbyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuc2VsZWN0LXR4dCB7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsLXJhZGlvIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuc2VsZWN0LXR4dCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAucm93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiA4OCU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnJvdyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/modules/test2/pregunta4/pregunta4.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modules/test2/pregunta4/pregunta4.page.ts ***!
  \*****************************************************************/
/*! exports provided: Pregunta4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pregunta4Page", function() { return Pregunta4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let Pregunta4Page = class Pregunta4Page {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    radioGroupChange(event) {
        this.radiogroup = event.detail.value;
        if (this.radiogroup == "ninguno") {
            this.router.navigateByUrl("splash/result");
            this.storage.set("pregunta4", this.radiogroup);
        }
        else {
            this.router.navigateByUrl("splash/result");
            this.storage.set("pregunta4", this.radiogroup);
        }
        console.log(this.radiogroup);
    }
    goBack() {
        this.router.navigateByUrl("splash/inicio");
    }
    goNext() {
        this.router.navigateByUrl("splash/result");
    }
    ngOnInit() {
    }
};
Pregunta4Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
Pregunta4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pregunta4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pregunta4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta4/pregunta4.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pregunta4.page.scss */ "./src/app/pages/modules/test2/pregunta4/pregunta4.page.scss")).default]
    })
], Pregunta4Page);



/***/ })

}]);
//# sourceMappingURL=pages-modules-test2-pregunta4-pregunta4-module-es2015.js.map