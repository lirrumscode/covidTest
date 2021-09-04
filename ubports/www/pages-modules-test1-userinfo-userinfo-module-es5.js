function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test1-userinfo-userinfo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/userinfo/userinfo.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/userinfo/userinfo.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModulesTest1UserinfoUserinfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">\n          Por favor seleccione un País<b style=\"color: #a6b1e1\"> *</b>\n        </h1>\n        <ion-label class=\"label\"></ion-label>\n        <ion-item lines=\"none\" color=\"medium\">\n          <ion-label class=\"select-txt\">Escoja..</ion-label>\n          <ion-select\n            placeholder=\"Select One\"\n            (ionChange)=\"selectGroupChange($event)\"\n            mode=\"md\"\n          >\n            <ion-select-option value=\"mex\">Mexico</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <h1 class=\"title\">\n          Por favor selecciona la ubicación a la que deseas ingresar<b\n            style=\"color: #a6b1e1\"\n          >\n            *</b\n          >\n        </h1>\n        <ion-label class=\"label\"></ion-label>\n        <ion-item lines=\"none\" color=\"medium\">\n          <ion-label class=\"select-txt\">Escoja..</ion-label>\n          <ion-select\n            placeholder=\"Select One\"\n            (ionChange)=\"selectGroupCityChange($event)\"\n            mode=\"md\"\n          >\n            <ion-select-option value=\"pue\">Puebla</ion-select-option>\n            <ion-select-option value=\"cdmx\">Ciudad de mexico</ion-select-option>\n            <ion-select-option value=\"aca\">Acapulco</ion-select-option>\n            <ion-select-option value=\"can\">Cancún</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-row class=\"row\">\n          <ion-col>\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              (click)=\"goLogin()\"\n              >Continuar</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/userinfo/userinfo-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/modules/test1/userinfo/userinfo-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: UserinfoPageRoutingModule */

  /***/
  function srcAppPagesModulesTest1UserinfoUserinfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserinfoPageRoutingModule", function () {
      return UserinfoPageRoutingModule;
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


    var _userinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userinfo.page */
    "./src/app/pages/modules/test1/userinfo/userinfo.page.ts");

    var routes = [{
      path: '',
      component: _userinfo_page__WEBPACK_IMPORTED_MODULE_3__["UserinfoPage"]
    }];

    var UserinfoPageRoutingModule = function UserinfoPageRoutingModule() {
      _classCallCheck(this, UserinfoPageRoutingModule);
    };

    UserinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserinfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/userinfo/userinfo.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/modules/test1/userinfo/userinfo.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UserinfoPageModule */

  /***/
  function srcAppPagesModulesTest1UserinfoUserinfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserinfoPageModule", function () {
      return UserinfoPageModule;
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


    var _userinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./userinfo-routing.module */
    "./src/app/pages/modules/test1/userinfo/userinfo-routing.module.ts");
    /* harmony import */


    var _userinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userinfo.page */
    "./src/app/pages/modules/test1/userinfo/userinfo.page.ts");

    var UserinfoPageModule = function UserinfoPageModule() {
      _classCallCheck(this, UserinfoPageModule);
    };

    UserinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _userinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserinfoPageRoutingModule"]],
      declarations: [_userinfo_page__WEBPACK_IMPORTED_MODULE_6__["UserinfoPage"]]
    })], UserinfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/userinfo/userinfo.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/modules/test1/userinfo/userinfo.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModulesTest1UserinfoUserinfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* **** VARIABLES GLOBALES **** */\nion-content {\n  height: 100vh;\n}\nion-list {\n  background: none !important;\n}\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 20%;\n}\nion-grid ion-row ion-col .title {\n  font-family: \"Poppins\";\n  color: #424874;\n  font-weight: bold;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 17px;\n}\nion-grid ion-row ion-col .label {\n  font-family: \"Poppins\";\n  color: #424874;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\nion-grid ion-row ion-col ion-select {\n  color: #424874;\n  width: 100%;\n}\nion-grid ion-row ion-col .select-txt {\n  color: #424874;\n  font-family: \"Poppins\";\n}\nion-grid ion-row ion-col .label-radio {\n  font-family: \"Poppins\";\n  color: #424874;\n}\nion-grid ion-row ion-col ion-button {\n  width: 50%;\n  height: 50px;\n  position: fixed;\n  bottom: 30px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  --background:#424874;\n  --background-activated:#424874;\n  --color:#F4EEFF;\n  margin-top: 0px;\n  font-family: \"Poppins\";\n  font-weight: bold;\n}\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  ion-grid ion-row ion-col .img-logo {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS91c2VyaW5mby91c2VyaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZHVsZXMvdGVzdDEvdXNlcmluZm8vdXNlcmluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFBO0FBRUE7RUFDRSxhQUFBO0FDQUY7QURFQTtFQUNJLDJCQUFBO0FDQ0o7QURDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDTTtFQUNFLHNCQXBCRDtFQXFCQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ007RUFDRSxzQkE3QkQ7RUE4QkMsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ007RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ007RUFDRSxjQUFBO0VBQ0Esc0JBeENEO0FDeUNQO0FEQ007RUFDRSxzQkEzQ0Q7RUE0Q0MsY0FBQTtBQ0NSO0FERVE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBM0RIO0VBNERHLGlCQUFBO0FDQVY7QURLQTtFQUlRO0lBQ0UsVUFBQTtFQ0xSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2R1bGVzL3Rlc3QxL3VzZXJpbmZvL3VzZXJpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKiogVkFSSUFCTEVTIEdMT0JBTEVTICoqKiogKi9cbiRmb250OiBcIlBvcHBpbnNcIjtcbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBpb24tcm93IHtcbiAgICBpb24tY29sIHtcbiAgICAgIC5pbWctbG9nbyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB9XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgIH1cbiAgICAgIGlvbi1zZWxlY3R7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3QtdHh0e1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgfVxuICAgICAgLmxhYmVsLXJhZGlve1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgfVxuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDojNDI0ODc0O1xuICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzQyNDg3NDtcbiAgICAgICAgICAtLWNvbG9yOiNGNEVFRkY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgLmltZy1sb2dvIHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLyogKioqKiBWQVJJQUJMRVMgR0xPQkFMRVMgKioqKiAqL1xuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmltZy1sb2dvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuc2VsZWN0LXR4dCB7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsLXJhZGlvIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBjb2xvcjogIzQyNDg3NDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC0tYmFja2dyb3VuZDojNDI0ODc0O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM0MjQ4NzQ7XG4gIC0tY29sb3I6I0Y0RUVGRjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuaW1nLWxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/userinfo/userinfo.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/modules/test1/userinfo/userinfo.page.ts ***!
    \***************************************************************/

  /*! exports provided: UserinfoPage */

  /***/
  function srcAppPagesModulesTest1UserinfoUserinfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserinfoPage", function () {
      return UserinfoPage;
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

    var UserinfoPage = /*#__PURE__*/function () {
      function UserinfoPage(storage, router) {
        _classCallCheck(this, UserinfoPage);

        this.storage = storage;
        this.router = router;
      }

      _createClass(UserinfoPage, [{
        key: "selectGroupChange",
        value: function selectGroupChange(event) {
          this.selectedGroup = event.detail.value;
          this.storage.set('pais', this.selectedGroup);
        }
      }, {
        key: "selectGroupCityChange",
        value: function selectGroupCityChange(event) {
          this.selectedGroupCity = event.detail.value;
          this.storage.set('ciudad', this.selectedGroupCity);
        }
      }, {
        key: "radioGroupChange",
        value: function radioGroupChange(event) {
          this.radioGroup = event.detail.value;
          this.storage.set('userinfo', this.radioGroup);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goLogin",
        value: function goLogin() {
          this.router.navigateByUrl('splash/login');
        }
      }]);

      return UserinfoPage;
    }();

    UserinfoPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userinfo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userinfo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/userinfo/userinfo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./userinfo.page.scss */
      "./src/app/pages/modules/test1/userinfo/userinfo.page.scss"))["default"]]
    })], UserinfoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-modules-test1-userinfo-userinfo-module-es5.js.map