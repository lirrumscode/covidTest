(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test1-resultado-resultado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/resultado/resultado.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/resultado/resultado.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"dark\">\n  <img src=\"./assets/icons/logo.png\" class=\"img-logo\" />\n  <ion-grid>\n    <ion-row [ngStyle]=\"{'background': color }\">\n      <ion-col size=\"12\">\n        <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        <h1 class=\"title\">{{ descripcion }}</h1>\n            <p class=\"txt\">\n              {{ text }}\n            </p>\n            <h3 class=\"subtitle\">Fecha de ingreso:</h3>\n            <p class=\"txt\">{{ fecha }}</p>\n            <h3 class=\"subtitle\">Nombre:</h3>\n            <p class=\"txt\">{{ user?.nombre+' '+user?.apellido }}</p>\n            <h3 class=\"subtitle\">Código de acceso:</h3>\n            <p class=\"txt\">{{codigo}}</p>\n            <img [src]=\"img\" class=\"img-logo\" />\n            <ion-button color=\"dark\" [routerLink]=\"['/splash']\" fill=\"outline\" shape=\"round\" class=\"btn-close\" mode=\"md\">Close</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/modules/test1/resultado/resultado-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modules/test1/resultado/resultado-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ResultadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoPageRoutingModule", function() { return ResultadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resultado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resultado.page */ "./src/app/pages/modules/test1/resultado/resultado.page.ts");




const routes = [
    {
        path: '',
        component: _resultado_page__WEBPACK_IMPORTED_MODULE_3__["ResultadoPage"]
    }
];
let ResultadoPageRoutingModule = class ResultadoPageRoutingModule {
};
ResultadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultadoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modules/test1/resultado/resultado.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test1/resultado/resultado.module.ts ***!
  \*******************************************************************/
/*! exports provided: ResultadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoPageModule", function() { return ResultadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _resultado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resultado-routing.module */ "./src/app/pages/modules/test1/resultado/resultado-routing.module.ts");
/* harmony import */ var _resultado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resultado.page */ "./src/app/pages/modules/test1/resultado/resultado.page.ts");







let ResultadoPageModule = class ResultadoPageModule {
};
ResultadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resultado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultadoPageRoutingModule"]
        ],
        declarations: [_resultado_page__WEBPACK_IMPORTED_MODULE_6__["ResultadoPage"]]
    })
], ResultadoPageModule);



/***/ }),

/***/ "./src/app/pages/modules/test1/resultado/resultado.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/test1/resultado/resultado.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* **** VARIABLES GLOBALES **** */\nion-content {\n  height: 100vh;\n}\n.img-logo {\n  margin: auto;\n  display: block;\n  width: 40%;\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-grid ion-row {\n  padding: 20px;\n  border-radius: 10px;\n}\nion-grid ion-row ion-col ion-icon {\n  font-size: 40px;\n  color: #fff;\n  display: block;\n  margin: auto;\n  margin-bottom: 5%;\n  margin-top: 2%;\n}\nion-grid ion-row ion-col .title {\n  font-family: \"Poppins\";\n  color: #fff;\n  font-weight: bold;\n  text-align: left;\n  font-size: 20px;\n}\nion-grid ion-row ion-col .subtitle {\n  font-family: \"Poppins\";\n  color: #fff;\n  font-weight: bold;\n  text-align: left;\n  font-size: 18px;\n}\nion-grid ion-row ion-col .txt {\n  font-family: \"Poppins\";\n  color: #fff;\n  font-weight: 500;\n  text-align: left;\n  font-size: 16px;\n}\nion-grid ion-row ion-col .btn-close {\n  width: 70%;\n  height: 50px;\n  display: block;\n  margin: auto;\n  font-family: \"Poppins\";\n}\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .img-logo {\n    width: 10%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n}\n@media only screen and (min-width: 1100px) and (max-width: 2056px) {\n  .img-logo {\n    width: 40%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9yZXN1bHRhZG8vcmVzdWx0YWRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9yZXN1bHRhZG8vcmVzdWx0YWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQUVBO0VBQ0UsYUFBQTtBQ0FGO0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRERNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0dSO0FERE07RUFDRSxzQkEzQkQ7RUE0QkMsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR1I7QURETTtFQUNFLHNCQWxDRDtFQW1DQyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHUjtBRERNO0VBQ0Usc0JBekNEO0VBMENDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dSO0FERE07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBcEREO0FDdURQO0FERUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNDRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9yZXN1bHRhZG8vcmVzdWx0YWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKiogVkFSSUFCTEVTIEdMT0JBTEVTICoqKiogKi9cbiRmb250OiBcIlBvcHBpbnNcIjtcbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5pbWctbG9nbyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBpb24tY29sIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICAudHh0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLmJ0bi1jbG9zZSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaW1nLWxvZ28ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDBweCkgYW5kIChtYXgtd2lkdGg6IDIwNTZweCkge1xuICAuaW1nLWxvZ28ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiAqKioqIFZBUklBQkxFUyBHTE9CQUxFUyAqKioqICovXG5pb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5pbWctbG9nbyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudHh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5idG4tY2xvc2Uge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaW1nLWxvZ28ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSBhbmQgKG1heC13aWR0aDogMjA1NnB4KSB7XG4gIC5pbWctbG9nbyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/modules/test1/resultado/resultado.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modules/test1/resultado/resultado.page.ts ***!
  \*****************************************************************/
/*! exports provided: ResultadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoPage", function() { return ResultadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ResultadoPage = class ResultadoPage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.today = new Date();
        this.date = "";
        this.codigo = 182613;
        this.user = [];
    }
    ngOnInit() {
        this.fecha = this.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.today, "dd-MM-yyyy hh:mm:ss a", "en-US", "GMT-5");
        this.storage.get("user").then((res) => {
            this.user = res;
        });
        this.validacion();
    }
    colorAmarillo() {
        try {
            this.color = "#ffd534";
            this.codigo;
            this.descripcion = "You can enter the plant with extreme precautions";
            this.text =
                "Please go to the medical area or follow the instructions of the medical staff.";
            this.img = "./assets/img/qr.jpeg";
        }
        catch (error) {
            console.error(error);
        }
    }
    colorVerde() {
        try {
            this.color = "#2fdf75";
            this.codigo = 12345679;
            this.img = "./assets/img/qr.jpeg";
            this.descripcion = "You can enter the plant";
            this.text =
                "Please scan the QR code upon arrival, or failing that, you will be asked for the access code";
        }
        catch (error) {
            console.error(error);
        }
    }
    colorRojo() {
        try {
            this.color = "#ff4961";
            this.codigo = 0;
            this.descripcion = "FOR SECURITY MEASURES YOU CANNOT ENTER THE PLANT";
            this.text = "";
            this.img = "";
        }
        catch (error) {
            console.error(error);
        }
    }
    validacion() {
        try {
            this.storage.get("nadita").then((res) => {
                this.nothing = res;
                this.storage.get("encuesta2").then((res) => {
                    let pregunta2 = res;
                    this.storage.get("encuesta3").then((res) => {
                        let pregunta3 = res;
                        console.log(this.nothing);
                        if (this.nothing == "nada" && pregunta2 == "si") {
                            this.colorRojo();
                        }
                        if (this.nothing == "nada" &&
                            pregunta2 == "no" &&
                            pregunta3 == "si") {
                            this.colorVerde();
                        }
                        if (this.nothing === "nada" &&
                            pregunta2 == "no" &&
                            pregunta3 == "no") {
                            this.colorRojo();
                        }
                        if (this.nothing === "nada" &&
                            pregunta2 == "no" &&
                            pregunta3 == "termometro") {
                            this.colorAmarillo();
                        }
                    });
                });
            });
            this.storage.get("cualquiera").then((res) => {
                this.any = res;
                this.storage.get("encuesta2").then((res) => {
                    let pregunta2 = res;
                    this.storage.get("encuesta3").then((res) => {
                        let pregunta3 = res;
                        if (this.any >= 1 && pregunta2 == "si") {
                            this.colorRojo();
                        }
                        if (this.any >= 1 && pregunta2 == "no" && pregunta3 == "si") {
                            this.colorAmarillo();
                        }
                        if (this.any >= 1 && pregunta2 == "no" && pregunta3 == "no") {
                            this.colorRojo();
                        }
                        if (this.any >= 1 &&
                            pregunta2 == "no" &&
                            pregunta3 == "termometro") {
                            this.colorAmarillo();
                        }
                    });
                });
            });
        }
        catch (error) {
            console.error(error);
        }
    }
};
ResultadoPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResultadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-resultado",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resultado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/resultado/resultado.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resultado.page.scss */ "./src/app/pages/modules/test1/resultado/resultado.page.scss")).default]
    })
], ResultadoPage);



/***/ })

}]);
//# sourceMappingURL=pages-modules-test1-resultado-resultado-module-es2015.js.map