function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test2-pregunta3-pregunta3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta3/pregunta3.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta3/pregunta3.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModulesTest2Pregunta3Pregunta3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">\n          In the last 48 hours, have you had any of the following NEW symptoms?\n          Check all that apply.<b style=\"color: #ff1515\">*</b>\n        </h1>\n\n        <ion-list>\n          <ion-item\n            *ngFor=\"let answer of array; let i = index\"\n            color=\"medium\"\n            lines=\"none\"\n          >\n            <ion-label>{{answer.name}}</ion-label>\n            <ion-checkbox\n              color=\"dark\"\n              [disabled]=\"valid\"\n              [(ngModel)]=\"answer.isChecked\"\n              (ionChange)=\"checkEvent()\"\n              mode=\"md\"\n            ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item color=\"medium\" lines=\"none\">\n            <ion-label>None of the above</ion-label>\n            <ion-checkbox\n              color=\"dark\"\n              [disabled]=\"validar\"\n              [(ngModel)]=\"none\"\n              (ionChange)=\"select($event)\"\n              mode=\"md\"\n            ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <ion-row class=\"row\">\n          <ion-col size=\"6\"> </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goNext()\"\n              >Next\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta3/pregunta3-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta3/pregunta3-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: Pregunta3PageRoutingModule */

  /***/
  function srcAppPagesModulesTest2Pregunta3Pregunta3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pregunta3PageRoutingModule", function () {
      return Pregunta3PageRoutingModule;
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


    var _pregunta3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pregunta3.page */
    "./src/app/pages/modules/test2/pregunta3/pregunta3.page.ts");

    var routes = [{
      path: '',
      component: _pregunta3_page__WEBPACK_IMPORTED_MODULE_3__["Pregunta3Page"]
    }];

    var Pregunta3PageRoutingModule = function Pregunta3PageRoutingModule() {
      _classCallCheck(this, Pregunta3PageRoutingModule);
    };

    Pregunta3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Pregunta3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta3/pregunta3.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta3/pregunta3.module.ts ***!
    \*******************************************************************/

  /*! exports provided: Pregunta3PageModule */

  /***/
  function srcAppPagesModulesTest2Pregunta3Pregunta3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pregunta3PageModule", function () {
      return Pregunta3PageModule;
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


    var _pregunta3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pregunta3-routing.module */
    "./src/app/pages/modules/test2/pregunta3/pregunta3-routing.module.ts");
    /* harmony import */


    var _pregunta3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pregunta3.page */
    "./src/app/pages/modules/test2/pregunta3/pregunta3.page.ts");

    var Pregunta3PageModule = function Pregunta3PageModule() {
      _classCallCheck(this, Pregunta3PageModule);
    };

    Pregunta3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pregunta3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Pregunta3PageRoutingModule"]],
      declarations: [_pregunta3_page__WEBPACK_IMPORTED_MODULE_6__["Pregunta3Page"]]
    })], Pregunta3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta3/pregunta3.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta3/pregunta3.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModulesTest2Pregunta3Pregunta3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  height: 100vh;\n}\n\nion-list {\n  background: none !important;\n}\n\nion-list ion-item ion-label {\n  color: #424874;\n}\n\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\n\nion-grid ion-row ion-col .title {\n  color: #424874;\n  font-weight: bold;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 16px;\n}\n\nion-grid ion-row ion-col .label-radio {\n  color: #424874;\n  font-size: 13px;\n}\n\nion-grid ion-row ion-col ion-button {\n  width: 100%;\n  height: 50px;\n  margin: auto;\n  display: block;\n  margin-top: 10%;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTMvcHJlZ3VudGEzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTMvcHJlZ3VudGEzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQU07RUFDSSxjQUFBO0FDRVY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7O0FERU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0Mi9wcmVndW50YTMvcHJlZ3VudGEzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBpb24taXRlbSB7XG4gICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgY29sb3I6IzQyNDg3NDtcbiAgICAgIH1cbiAgfVxufVxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGlvbi1yb3cge1xuICAgIGlvbi1jb2wge1xuICAgICAgLmltZy1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICAgIC5sYWJlbC1yYWRpbyB7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogIzQyNDg3NDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmltZy1sb2dvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0bGUge1xuICBjb2xvcjogIzQyNDg3NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmxhYmVsLXJhZGlvIHtcbiAgY29sb3I6ICM0MjQ4NzQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/modules/test2/pregunta3/pregunta3.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/modules/test2/pregunta3/pregunta3.page.ts ***!
    \*****************************************************************/

  /*! exports provided: Pregunta3Page */

  /***/
  function srcAppPagesModulesTest2Pregunta3Pregunta3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pregunta3Page", function () {
      return Pregunta3Page;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Pregunta3Page = /*#__PURE__*/function () {
      function Pregunta3Page(router, storage, alertController) {
        _classCallCheck(this, Pregunta3Page);

        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.sintomas = [];
        this.valid = false;
        this.validar = false;
        this.total = [];
        this.thing = [];
        this.array = [{
          id: 1,
          name: "Fever of 100 F (37.8 C) or above, or possible fever symptoms like alternating chills and sweating",
          isItemChecked: false,
          value: "fever"
        }, {
          id: 2,
          name: "Cough",
          isItemChecked: false,
          value: "cough"
        }, {
          id: 3,
          name: "Trouble breathing, shortness of breath or severe wheezing",
          isItemChecked: false,
          value: "trouble"
        }, {
          id: 4,
          name: "Chills or repeated shaking with chills",
          isItemChecked: false,
          value: "chills"
        }, {
          id: 5,
          name: "Muscle aches",
          isItemChecked: false,
          value: "muscle"
        }, {
          id: 6,
          name: "Loss of smell or taste, or a change in taste",
          isItemChecked: false,
          value: "loss"
        }, {
          id: 7,
          name: "Nausea, vomiting or diarrhea",
          isItemChecked: false,
          value: "nausea"
        }, {
          id: 8,
          name: "Headache",
          isItemChecked: false,
          value: "headache"
        }];
      }

      _createClass(Pregunta3Page, [{
        key: "alert",
        value: function alert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Alert",
                      message: "Please selected any real symptoms",
                      buttons: [{
                        text: "Okay",
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkEvent",
        value: function checkEvent() {
          var totalItems = this.array.length;
          var checked = 0;
          this.array.map(function (obj) {
            if (obj.isChecked) {
              checked++;
            }
          });

          if (checked > 0 && checked < totalItems) {
            this.thing.push(checked);
            this.storage.set("any", this.thing.length);
            this.storage.set("all", this.thing.length);
            this.storage.set("none", null);
            this.router.navigateByUrl('splash/pregunta4'); //If even one item is checked but not all

            this.isIndeterminate = true;
            this.masterCheck = false;
          } else if (checked == totalItems) {
            //If all are checked
            this.masterCheck = true;
            this.isIndeterminate = false;
          } else {
            //If none is checked
            this.isIndeterminate = false;
            this.masterCheck = false;
            this.sintomas = 0;
          }
        }
      }, {
        key: "select",
        value: function select(event) {
          var _this = this;

          this.check = event.detail.checked;
          console.log(this.check);
          this.none = "nada";

          if (this.check == true) {
            this.array.map(function (obj) {
              console.log(obj);
              _this.isIndeterminate = false;
              _this.masterCheck = false;
              obj.isChecked = false;
              _this.sintomas = [0];

              _this.storage.set("any", _this.sintomas);

              _this.storage.set("none", _this.none);

              _this.storage.set('all', 0);
            });
            this.router.navigateByUrl('splash/result');
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
          console.log(this.masterCheck);

          if (this.masterCheck == undefined) {
            this.alert();
          }

          if (this.masterCheck == false) {
            this.router.navigateByUrl("splash/result");
          }

          if (this.masterCheck == true) this.router.navigateByUrl("splash/result");
        }
      }]);

      return Pregunta3Page;
    }();

    Pregunta3Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    Pregunta3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pregunta3",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pregunta3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test2/pregunta3/pregunta3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pregunta3.page.scss */
      "./src/app/pages/modules/test2/pregunta3/pregunta3.page.scss"))["default"]]
    })], Pregunta3Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-modules-test2-pregunta3-pregunta3-module-es5.js.map