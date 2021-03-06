function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modules-test1-encuesta1-encuesta1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta1/encuesta1.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta1/encuesta1.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModulesTest1Encuesta1Encuesta1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"medium\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <img src=\"./assets/icons/logo2.png\" class=\"img-logo\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <h1 class=\"title\">\n          En las últimas 48 horas, ¿ha tenido alguno de los siguientes NUEVOS síntomas?\n           Marque todo lo que corresponda.<b style=\"color: #ff1515;\">*</b>\n        </h1>\n        <ion-list>\n          <ion-item\n            *ngFor=\"let answer of array; let i = index\"\n            color=\"medium\"\n            lines=\"none\"\n          >\n            <ion-label>{{answer.name}}</ion-label>\n            <ion-checkbox\n              color=\"dark\"\n              [disabled]=\"valid\"\n              [(ngModel)]=\"answer.isChecked\"\n              (ionChange)=\"checkEvent()\"\n              mode=\"md\"\n            ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item\n            color=\"medium\"\n            lines=\"none\"\n          >\n            <ion-label>Ninguna de las anteriores</ion-label>\n            <ion-checkbox\n              color=\"dark\"\n              [disabled]=\"validar\"\n              [(ngModel)]=\"none\"\n              (ionChange)=\"select($event)\"\n              mode=\"md\"\n            ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <ion-row class=\"row\">\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goBack()\"\n            >\n              <span class=\"span\">Anterior</span>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              color=\"dark\"\n              shape=\"round\"\n              fill=\"outline\"\n              mode=\"md\"\n              class=\"btn-signup\"\n              (click)=\"goNext()\"\n            >\n              <span class=\"span\">Siguiente</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/encuesta1/encuesta1-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/modules/test1/encuesta1/encuesta1-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: Encuesta1PageRoutingModule */

  /***/
  function srcAppPagesModulesTest1Encuesta1Encuesta1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Encuesta1PageRoutingModule", function () {
      return Encuesta1PageRoutingModule;
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


    var _encuesta1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./encuesta1.page */
    "./src/app/pages/modules/test1/encuesta1/encuesta1.page.ts");

    var routes = [{
      path: '',
      component: _encuesta1_page__WEBPACK_IMPORTED_MODULE_3__["Encuesta1Page"]
    }];

    var Encuesta1PageRoutingModule = function Encuesta1PageRoutingModule() {
      _classCallCheck(this, Encuesta1PageRoutingModule);
    };

    Encuesta1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Encuesta1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/encuesta1/encuesta1.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/modules/test1/encuesta1/encuesta1.module.ts ***!
    \*******************************************************************/

  /*! exports provided: Encuesta1PageModule */

  /***/
  function srcAppPagesModulesTest1Encuesta1Encuesta1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Encuesta1PageModule", function () {
      return Encuesta1PageModule;
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


    var _encuesta1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./encuesta1-routing.module */
    "./src/app/pages/modules/test1/encuesta1/encuesta1-routing.module.ts");
    /* harmony import */


    var _encuesta1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./encuesta1.page */
    "./src/app/pages/modules/test1/encuesta1/encuesta1.page.ts");

    var Encuesta1PageModule = function Encuesta1PageModule() {
      _classCallCheck(this, Encuesta1PageModule);
    };

    Encuesta1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _encuesta1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Encuesta1PageRoutingModule"]],
      declarations: [_encuesta1_page__WEBPACK_IMPORTED_MODULE_6__["Encuesta1Page"]]
    })], Encuesta1PageModule);
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/encuesta1/encuesta1.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/modules/test1/encuesta1/encuesta1.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModulesTest1Encuesta1Encuesta1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* **** VARIABLES GLOBALES **** */\nion-content {\n  height: 100vh;\n}\nion-list {\n  background: none !important;\n}\nion-list ion-item ion-label {\n  color: #424874;\n}\nion-checkbox {\n  --background-checked:#424874;\n}\nion-grid {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-grid ion-row ion-col .img-logo {\n  margin: auto;\n  display: block;\n  width: 60%;\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\nion-grid ion-row ion-col .title {\n  font-family: \"Poppins\";\n  color: #424874;\n  font-weight: bold;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 16px;\n}\nion-grid ion-row ion-col .label-radio {\n  font-family: \"Poppins\";\n  color: #424874;\n  font-size: 13px;\n}\nion-grid ion-row ion-col ion-button {\n  width: 100%;\n  height: 50px;\n  margin: auto;\n  display: block;\n  margin-top: 10%;\n  font-family: \"Poppins\";\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpcnJ1bXNjb2RlL0VzY3JpdG9yaW8vUHJvamVjdHMvTGlycnVtc2NvZGUvY292aWRGb3JtL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9lbmN1ZXN0YTEvZW5jdWVzdGExLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kdWxlcy90ZXN0MS9lbmN1ZXN0YTEvZW5jdWVzdGExLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQUVBO0VBQ0UsYUFBQTtBQ0FGO0FERUE7RUFDRSwyQkFBQTtBQ0NGO0FEQ007RUFDSSxjQUFBO0FDQ1Y7QURHQTtFQUNFLDRCQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7QURFTTtFQUNFLHNCQTVCRDtFQTZCQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FSO0FERU07RUFDRSxzQkFyQ0Q7RUFzQ0MsY0FBQTtFQUNBLGVBQUE7QUNBUjtBREVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkEvQ0Q7RUFnREMsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZHVsZXMvdGVzdDEvZW5jdWVzdGExL2VuY3Vlc3RhMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKioqIFZBUklBQkxFUyBHTE9CQUxFUyAqKioqICovXG4kZm9udDogXCJQb3BwaW5zXCI7XG5pb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgaW9uLWl0ZW0ge1xuICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgIGNvbG9yOiM0MjQ4NzQ7XG4gICAgICB9XG4gIH1cbn1cbmlvbi1jaGVja2JveHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IzQyNDg3NDsgXG59XG5pb24tZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgaW9uLXJvdyB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAuaW1nLWxvZ28ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgICAgICBjb2xvcjogIzQyNDg3NDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICAubGFiZWwtcmFkaW8ge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgIGNvbG9yOiAjNDI0ODc0O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8qICoqKiogVkFSSUFCTEVTIEdMT0JBTEVTICoqKiogKi9cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogIzQyNDg3NDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IzQyNDg3NDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmltZy1sb2dvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAubGFiZWwtcmFkaW8ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGNvbG9yOiAjNDI0ODc0O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5pb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/modules/test1/encuesta1/encuesta1.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/modules/test1/encuesta1/encuesta1.page.ts ***!
    \*****************************************************************/

  /*! exports provided: Encuesta1Page */

  /***/
  function srcAppPagesModulesTest1Encuesta1Encuesta1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Encuesta1Page", function () {
      return Encuesta1Page;
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

    var Encuesta1Page = /*#__PURE__*/function () {
      function Encuesta1Page(router, storage) {
        _classCallCheck(this, Encuesta1Page);

        this.router = router;
        this.storage = storage;
        this.sintomas = [];
        this.valid = false;
        this.validar = false;
        this.total = [];
        this.thing = [];
        this.hola = true;
        this.array = [{
          id: 1,
          name: "Fiebre de 100 F (37.8 C) o más, o posibles síntomas de fiebre como escalofríos y sudoración alternantes",
          isItemChecked: false,
          value: "fever"
        }, {
          id: 2,
          name: "Tos",
          isItemChecked: false,
          value: "cough"
        }, {
          id: 3,
          name: "Problemas para respirar, falta de aliento o sibilancias severas",
          isItemChecked: false,
          value: "trouble"
        }, {
          id: 4,
          name: "Escalofríos o temblores repetidos con escalofríos.",
          isItemChecked: false,
          value: "chills"
        }, {
          id: 5,
          name: "Dolores musculares",
          isItemChecked: false,
          value: "muscle"
        }, {
          id: 6,
          name: "Pérdida del olfato o del gusto, o un cambio en el gusto.",
          isItemChecked: false,
          value: "loss"
        }, {
          id: 7,
          name: "Náuseas, vómitos o diarrea",
          isItemChecked: false,
          value: "nausea"
        }, {
          id: 8,
          name: "Dolor de cabeza",
          isItemChecked: false,
          value: "headache"
        }];
      }

      _createClass(Encuesta1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /*checkMaster() {
          setTimeout(() => {
            this.array.forEach((obj) => {
              obj.isChecked = this.masterCheck;
              this.sintomas.push(obj);
              console.log(this.sintomas);
              this.check = false;
              this.validar = true;
              this.none = null;
            });
            this.storage.set("todo", this.sintomas.length);
          });
        }*/

      }, {
        key: "checkEvent",
        value: function checkEvent() {
          var totalItems = this.array.length;
          var checked = 0;
          this.array.map(function (obj) {
            // console.log(obj)
            if (obj.isChecked) {
              checked++;
            }
          });

          if (checked > 0 && checked < totalItems) {
            //this.sintomas.push(checked)
            this.thing.push(checked);
            this.hola = false;
            console.log(this.thing);
            this.storage.set("cualquiera", this.thing.length);
            this.storage.set("todo", this.thing.length);
            this.storage.set("nadita", 0); //If even one item is checked but not all

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
          console.log(event.detail.checked);

          if (event.detail.checked == true) {
            this.array.map(function (obj) {
              console.log(obj);
              _this.isIndeterminate = false;
              _this.masterCheck = false;
              obj.isChecked = false;
              _this.sintomas = [0];

              _this.storage.set("cualquiera", _this.sintomas);

              _this.storage.set("nadita", _this.none);
            });
            this.router.navigateByUrl('splash/encuesta2');
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigateByUrl("splash/login");
        }
      }, {
        key: "goNext",
        value: function goNext() {
          this.router.navigateByUrl("splash/encuesta2");
        }
      }]);

      return Encuesta1Page;
    }();

    Encuesta1Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    Encuesta1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-encuesta1",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./encuesta1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modules/test1/encuesta1/encuesta1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./encuesta1.page.scss */
      "./src/app/pages/modules/test1/encuesta1/encuesta1.page.scss"))["default"]]
    })], Encuesta1Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-modules-test1-encuesta1-encuesta1-module-es5.js.map