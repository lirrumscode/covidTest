function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test1-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/login/login.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/login/login.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModulesTest1LoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"medium\" class=\"content\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n    </ion-col>\n    <ion-col size=\"12\">\n      <form>\n        <ion-item class=\"item\" color=\"medium\" lines=\"none\">\n          <ion-label position=\"floating\">Ingresa tú Nombre</ion-label>\n          <ion-input\n            type=\"text\"\n            name=\"nombre\"\n            id=\"nombre\"\n            [(ngModel)]=\"form.nombre\"\n            required\n            color=\"dark\"\n          ></ion-input>\n        </ion-item>\n        <ion-item class=\"item\" color=\"medium\" lines=\"none\">\n          <ion-label position=\"floating\">Ingresa tú Apellido</ion-label>\n          <ion-input\n            type=\"text\"\n            name=\"apellido\"\n            id=\"apellido\"\n            [(ngModel)]=\"form.apellido\"\n            required\n            color=\"dark\"\n          ></ion-input>\n        </ion-item>\n        <ion-item class=\"item\" color=\"medium\" lines=\"none\">\n          <ion-label position=\"floating\"\n            >Ingresa tú Número de celular</ion-label\n          >\n          <ion-input\n            type=\"number\"\n            name=\"celular\"\n            id=\"celular\"\n            [(ngModel)]=\"form.celular\"\n            required\n            color=\"dark\"\n          ></ion-input>\n        </ion-item>\n        <ion-col size=\"12\">\n          <ion-button\n            color=\"dark\"\n            shape=\"round\"\n            fill=\"outline\"\n            class=\"btn-signup\"\n            mode=\"md\"\n            (click)=\"next(form)\"\n          >\n            Siguiente\n          </ion-button>\n        </ion-col>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/login/login-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/modules/test1/login/login-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesModulesTest1LoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/modules/test1/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/login/login.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/modules/test1/login/login.module.ts ***!
    \***********************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesModulesTest1LoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/modules/test1/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/modules/test1/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/login/login.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/modules/test1/login/login.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModulesTest1LoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* === VAR ==== */\n/* === END VAR === */\n.content {\n  height: 100vh;\n  width: 100%;\n}\nform {\n  padding: 3%;\n}\nform .title-login {\n  color: #424874;\n  font-family: \"Poppins\";\n  text-align: center;\n  font-weight: bold;\n  font-size: 25px;\n  padding-top: 10%;\n}\nform .subtitle {\n  padding-top: 5%;\n  text-align: center;\n  font-family: \"Poppins\";\n  font-size: 13px;\n}\nform .item {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 20px;\n  box-shadow: none;\n  --border-color: transparent;\n  border-radius: 15px;\n}\nform ion-label {\n  font-family: \"Poppins\";\n  font-weight: bold;\n  color: #424874;\n}\nform .btn-signup {\n  display: block;\n  margin: 12% auto;\n  width: 60%;\n  font-weight: bold;\n  height: 50px;\n  --background:#424874;\n  --background-activated:#424874;\n  --color:#424874;\n}\n.img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 20%;\n}\n/* ==== START MEDIAQUERYS FOR CELLPHONE ==== */\n@media only screen and (min-width: 365px) and (max-width: 812px) {\n  .img-logo {\n    margin: auto;\n    display: block;\n    width: 60%;\n    margin-top: 10%;\n    margin-bottom: 0%;\n  }\n\n  .content {\n    height: 100vh;\n    width: 100%;\n  }\n\n  ion-row form {\n    padding: 3%;\n  }\n  ion-row form .title-login {\n    color: #424874;\n    font-family: \"Poppins\";\n    text-align: center;\n    font-weight: bold;\n    font-size: 33px;\n    padding-top: 10%;\n  }\n  ion-row form .subtitle {\n    padding-top: 0%;\n  }\n  ion-row form .item {\n    padding-top: 10px;\n    padding-bottom: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 5px;\n    box-shadow: none;\n    border-radius: 15px;\n  }\n  ion-row form ion-label {\n    font-family: \"Poppins\";\n    color: #424874;\n  }\n  ion-row form span {\n    font-family: \"Poppins\" !important;\n    color: #424874;\n    font-size: 12px;\n    float: left;\n    padding-left: 20px;\n  }\n  ion-row form .btn-signup {\n    display: block;\n    margin: 12% auto;\n    width: 60%;\n    height: 50px;\n    --background:#F4EEFF;\n    --background-activated:#424874;\n    --color:#424874;\n  }\n\n  ion-input {\n    --color: #424874;\n  }\n}\n/* ==== END MEDIAQUERYS FOR CELLPHONE ==== */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZHVsZXMvdGVzdDEvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBS0Esb0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDSEY7QURPQTtFQUNFLFdBQUE7QUNKRjtBREtFO0VBQ0UsY0FBQTtFQUNBLHNCQVpLO0VBYUwsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FES0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFyQks7RUFzQkwsZUFBQTtBQ0hKO0FES0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURLRTtFQUNFLHNCQW5DSztFQW9DTCxpQkFBQTtFQUNBLGNBQUE7QUNISjtBRE1FO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDSko7QURPQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0EsOENBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDSkY7O0VETUE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtFQ0hGOztFRE1FO0lBQ0UsV0FBQTtFQ0hKO0VES0k7SUFDRSxjQUFBO0lBQ0Esc0JBOUVDO0lBK0VELGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNITjtFREtJO0lBQ0UsZUFBQTtFQ0hOO0VES0k7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0hOO0VES0k7SUFDRSxzQkFqR0M7SUFrR0QsY0FBQTtFQ0hOO0VES0k7SUFDRSxpQ0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDSE47RURLSTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSw4QkFBQTtJQUNBLGVBQUE7RUNITjs7RURRQTtJQUNFLGdCQUFBO0VDTEY7QUFDRjtBRFFBLDRDQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT0gVkFSID09PT0gKi9cbiRjb2xvcl93aGl0ZTogI2ZmZjtcbiRjb2xvcl9yZWQ6ICMzZDNmNTE7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjYWNhZDhlO1xuJGZ1ZW50ZTogXCJQb3BwaW5zXCI7XG4vKiA9PT0gRU5EIFZBUiA9PT0gKi9cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tcm93IHtcbn1cbmZvcm0ge1xuICBwYWRkaW5nOiAzJTtcbiAgLnRpdGxlLWxvZ2luIHtcbiAgICBjb2xvcjogIzQyNDg3NDtcbiAgICBmb250LWZhbWlseTogJGZ1ZW50ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6ICRmdWVudGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM0MjQ4NzQ7XG4gIH1cblxuICAuYnRuLXNpZ251cCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMiUgYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogNTBweDtcbiAgICAtLWJhY2tncm91bmQ6IzQyNDg3NDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM0MjQ4NzQ7XG4gICAgLS1jb2xvcjojNDI0ODc0O1xuICB9XG59XG4uaW1nLWxvZ28ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cblxuLyogPT09PSBTVEFSVCBNRURJQVFVRVJZUyBGT1IgQ0VMTFBIT05FID09PT0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzY1cHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuaW1nLWxvZ28ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgfVxuICAuY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpb24tcm93IHtcbiAgICBmb3JtIHtcbiAgICAgIHBhZGRpbmc6IDMlO1xuXG4gICAgICAudGl0bGUtbG9naW4ge1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwJTtcbiAgICAgIH1cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgfVxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmdWVudGU7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZnVlbnRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgICAuYnRuLXNpZ251cCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDEyJSBhdXRvO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDojRjRFRUZGO1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM0MjQ4NzQ7XG4gICAgICAgIC0tY29sb3I6IzQyNDg3NDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIC0tY29sb3I6ICM0MjQ4NzQ7XG4gIH1cbn1cblxuLyogPT09PSBFTkQgTUVESUFRVUVSWVMgRk9SIENFTExQSE9ORSA9PT09ICovXG4iLCIvKiA9PT0gVkFSID09PT0gKi9cbi8qID09PSBFTkQgVkFSID09PSAqL1xuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDMlO1xufVxuZm9ybSAudGl0bGUtbG9naW4ge1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5mb3JtIC5zdWJ0aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmZvcm0gLml0ZW0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuZm9ybSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQyNDg3NDtcbn1cbmZvcm0gLmJ0bi1zaWdudXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMiUgYXV0bztcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiM0MjQ4NzQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzQyNDg3NDtcbiAgLS1jb2xvcjojNDI0ODc0O1xufVxuXG4uaW1nLWxvZ28ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuLyogPT09PSBTVEFSVCBNRURJQVFVRVJZUyBGT1IgQ0VMTFBIT05FID09PT0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzY1cHgpIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuaW1nLWxvZ28ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW9uLXJvdyBmb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgfVxuICBpb24tcm93IGZvcm0gLnRpdGxlLWxvZ2luIHtcbiAgICBjb2xvcjogIzQyNDg3NDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG4gIGlvbi1yb3cgZm9ybSAuc3VidGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAwJTtcbiAgfVxuICBpb24tcm93IGZvcm0gLml0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBpb24tcm93IGZvcm0gaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgY29sb3I6ICM0MjQ4NzQ7XG4gIH1cbiAgaW9uLXJvdyBmb3JtIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgaW9uLXJvdyBmb3JtIC5idG4tc2lnbnVwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEyJSBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC0tYmFja2dyb3VuZDojRjRFRUZGO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzQyNDg3NDtcbiAgICAtLWNvbG9yOiM0MjQ4NzQ7XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIC0tY29sb3I6ICM0MjQ4NzQ7XG4gIH1cbn1cbi8qID09PT0gRU5EIE1FRElBUVVFUllTIEZPUiBDRUxMUEhPTkUgPT09PSAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/login/login.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/modules/test1/login/login.page.ts ***!
    \*********************************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesModulesTest1LoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(storage, router, alertController, toastController) {
        _classCallCheck(this, LoginPage);

        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.form = {
          nombre: "",
          apellido: "",
          celular: 0
        };
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "next",
        value: function next(form) {
          if (form.nombre == "" || form.apellido == "" || form.celular == 0) {
            this.message("¡Por favor llena todos los campos!");
          } else {
            this.storage.set("user", form);
            this.alert();
          }
        }
      }, {
        key: "message",
        value: function message(_message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: _message,
                      duration: 3000,
                      position: "bottom",
                      mode: "md"
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "alert",
        value: function alert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Alerta",
                      mode: "ios",
                      message: "Hemos guardado tú información con exito, por favor responde las siguientes preguntas",
                      buttons: [{
                        text: "Okay",
                        handler: function handler() {
                          _this.router.navigateByUrl("splash/encuesta1");
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/modules/test1/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-modules-test1-login-login-module-es5.js.map