function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test2-pregunta1-pregunta1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta1/pregunta1.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta1/pregunta1.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModulesTest2Pregunta1Pregunta1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">\n          ¿Have you been within 6 feet of a person with a lab-confirmed case of\n          COVID-19 for at least 5 minutes, or had direct contact with their\n          mucus or saliva, in the past 14 days?\n          <b style=\"color: #424874\">*</b>\n        </h1>\n        <ion-label class=\"label\"></ion-label>\n        <ion-list>\n          <ion-radio-group value=\"biff\" (ionChange)=\"radioGroupChange($event)\">\n            <ion-item color=\"medium\" lines=\"none\">\n              <ion-label class=\"select-txt\">Yes</ion-label>\n              <ion-radio color=\"dark\" slot=\"start\" value=\"si\" mode=\"md\"></ion-radio>\n            </ion-item>\n            <ion-item color=\"medium\" lines=\"none\">\n              <ion-label class=\"select-txt\">No</ion-label>\n              <ion-radio color=\"dark\" slot=\"start\" value=\"no\" mode=\"md\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n\n        <ion-row class=\"row\">\n          <ion-col size=\"6\"> </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goNext()\"\n              >Next\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta1/pregunta1-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta1/pregunta1-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: Pregunta1PageRoutingModule */

  /***/
  function srcAppPagesModulesTest2Pregunta1Pregunta1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pregunta1PageRoutingModule", function () {
      return Pregunta1PageRoutingModule;
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


    var _pregunta1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pregunta1.page */
    "./src/app/pages/modules/test2/pregunta1/pregunta1.page.ts");

    var routes = [{
      path: '',
      component: _pregunta1_page__WEBPACK_IMPORTED_MODULE_3__["Pregunta1Page"]
    }];

    var Pregunta1PageRoutingModule = function Pregunta1PageRoutingModule() {
      _classCallCheck(this, Pregunta1PageRoutingModule);
    };

    Pregunta1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Pregunta1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta1/pregunta1.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta1/pregunta1.module.ts ***!
    \*******************************************************************/

  /*! exports provided: Pregunta1PageModule */

  /***/
  function srcAppPagesModulesTest2Pregunta1Pregunta1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pregunta1PageModule", function () {
      return Pregunta1PageModule;
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


    var _pregunta1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pregunta1-routing.module */
    "./src/app/pages/modules/test2/pregunta1/pregunta1-routing.module.ts");
    /* harmony import */


    var _pregunta1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pregunta1.page */
    "./src/app/pages/modules/test2/pregunta1/pregunta1.page.ts");

    var Pregunta1PageModule = function Pregunta1PageModule() {
      _classCallCheck(this, Pregunta1PageModule);
    };

    Pregunta1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pregunta1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Pregunta1PageRoutingModule"]],
      declarations: [_pregunta1_page__WEBPACK_IMPORTED_MODULE_6__["Pregunta1Page"]]
    })], Pregunta1PageModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta1/pregunta1.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta1/pregunta1.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModulesTest2Pregunta1Pregunta1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  height: 100vh;\n}\n\nion-list {\n  background: none !important;\n}\n\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\n\nion-grid ion-row ion-col .title {\n  color: #424874;\n  font-weight: bold;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 17px;\n}\n\nion-grid ion-row ion-col .label {\n  color: #424874;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\n\nion-grid ion-row ion-col ion-select {\n  color: #424874;\n  width: 100%;\n}\n\nion-grid ion-row ion-col .select-txt {\n  color: #424874;\n}\n\nion-grid ion-row ion-col .label-radio {\n  color: #424874;\n}\n\nion-grid ion-row ion-col .select-txt {\n  padding-left: 20px;\n}\n\nion-grid ion-row ion-col .row {\n  position: fixed;\n  bottom: 10px;\n  width: 88%;\n}\n\nion-grid ion-row ion-col .row ion-button {\n  width: 100%;\n  height: 50px;\n  margin: auto;\n  display: block;\n  margin-top: 10%;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTEvcHJlZ3VudGExLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTEvcHJlZ3VudGExLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEQU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFUjs7QURBTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQU07RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFNO0VBQ0UsY0FBQTtBQ0VSOztBREFNO0VBQ0UsY0FBQTtBQ0VSOztBREFNO0VBQ0Usa0JBQUE7QUNFUjs7QURBTTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0VWOztBREFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTEvcHJlZ3VudGExLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGlvbi1yb3cge1xuICAgIGlvbi1jb2wge1xuICAgICAgLmltZy1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIH1cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgIH1cbiAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuc2VsZWN0LXR4dCB7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgfVxuICAgICAgLmxhYmVsLXJhZGlvIHtcbiAgICAgICAgY29sb3I6ICM0MjQ4NzQ7XG4gICAgICB9XG4gICAgICAuc2VsZWN0LXR4dCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5yb3d7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICB3aWR0aDogODglO1xuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmltZy1sb2dvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0bGUge1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsIHtcbiAgY29sb3I6ICM0MjQ4NzQ7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1zZWxlY3Qge1xuICBjb2xvcjogIzQyNDg3NDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnNlbGVjdC10eHQge1xuICBjb2xvcjogIzQyNDg3NDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAubGFiZWwtcmFkaW8ge1xuICBjb2xvcjogIzQyNDg3NDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuc2VsZWN0LXR4dCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAucm93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiA4OCU7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnJvdyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta1/pregunta1.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta1/pregunta1.page.ts ***!
    \*****************************************************************/

  /*! exports provided: Pregunta1Page */

  /***/
  function srcAppPagesModulesTest2Pregunta1Pregunta1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pregunta1Page", function () {
      return Pregunta1Page;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var Pregunta1Page = /*#__PURE__*/function () {
      function Pregunta1Page(router, storage) {
        _classCallCheck(this, Pregunta1Page);

        this.router = router;
        this.storage = storage;
      }

      _createClass(Pregunta1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "radioGroupChange",
        value: function radioGroupChange(event) {
          this.radiogroup = event.detail.value;

          if (this.radiogroup == "si") {
            this.router.navigateByUrl("splash/pregunta2");
            this.storage.set("pregunta1", this.radiogroup);
          } else {
            this.router.navigateByUrl("splash/pregunta3");
            this.storage.set("pregunta1", this.radiogroup);
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigateByUrl("splash/inicio");
        }
      }, {
        key: "goNext",
        value: function goNext() {
          this.router.navigateByUrl("splash/pregunta2");
        }
      }]);

      return Pregunta1Page;
    }();

    Pregunta1Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    Pregunta1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pregunta1",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pregunta1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta1/pregunta1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pregunta1.page.scss */
      "./src/app/pages/modules/test2/pregunta1/pregunta1.page.scss"))["default"]]
    })], Pregunta1Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-modules-test2-pregunta1-pregunta1-module-es5.js.map