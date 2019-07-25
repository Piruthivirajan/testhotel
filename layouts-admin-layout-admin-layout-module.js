(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tables/tables.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tables/tables.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Saving Data Info -->\r\n<div class=\" content\">\r\n  <div class=\" row\">\r\n    <div class=\" col-md-8\">\r\n      <div class=\" card\">\r\n        <div class=\" card-header\">\r\n          <h5 class=\" title\">Room Reservation</h5>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <form>\r\n            <div class=\" row\">\r\n              <div class=\" col-md-4 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Room Id </label>\r\n                  <input class=\" form-control\" placeholder=\"100...\" type=\"number\" name=\"roomId\"\r\n                    [(ngModel)]=\"roomInfo.roomId\" [disabled]=\"roomInfo.editableFlag\" />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4 px-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Room Type Code </label>\r\n                  <input class=\" form-control\" placeholder=\"RoomType...\" type=\"text\" name=\"roomTypeCode\"\r\n                    [(ngModel)]=\"roomInfo.roomTypeCode\" />\r\n                </div>\r\n              </div>\r\n              <div class=\" col-md-4 pl-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Room Type Name </label>\r\n                  <input class=\" form-control\" placeholder=\"RoomType Name...\" type=\"text\" name=\"roomTypeName\"\r\n                    [(ngModel)]=\"roomInfo.roomTypeName\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\" card-footer text-center\">\r\n          <button class=\" btn btn-fill btn-danger\" type=\"clear\" (click)=\"clearForm()\">Clear</button>\r\n          <button class=\" btn btn-fill btn-danger\" type=\"submit\" (click)=\"saveRoomDetails()\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Grid Info -->\r\n<div class=\" content\">\r\n  <div class=\" row\">\r\n    <div class=\" col-md-12\">\r\n      <div class=\" card\">\r\n        <div class=\" card-header\">\r\n          <h4 class=\" card-title\">Room Details</h4>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div class=\" table-responsive\">\r\n            <table class=\" table tablesorter\" id=\"\">\r\n              <thead>\r\n                <tr>\r\n                  <ng-container *ngFor=\"let columnName of tableColumnHeaderDef\">\r\n                    <th>{{columnName}}</th>\r\n                  </ng-container>\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n                <ng-container *ngFor=\"let roomInfo of roomList\">\r\n                  <tr>\r\n                    <td>\r\n                      <button class=\" btn btn-icon btn-round\" (click)=\"editRoomDetails(roomInfo)\">\r\n                        <i class=\" fas fa-edit\"> </i>\r\n                      </button>\r\n                    </td>\r\n                    <td>\r\n                      <button class=\" btn btn-icon btn-round\" (click)=\"removeRoomDetails(roomInfo.roomId)\">\r\n                        <i class=\" fas fa-trash-alt\"> </i>\r\n                      </button>\r\n                    </td>\r\n                    <td>{{roomInfo?.roomId}}</td>\r\n                    <td> {{roomInfo?.roomTypeCode}}</td>\r\n                    <td>{{roomInfo?.roomTypeName}}</td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/tables/tables.component */ "./src/app/pages/tables/tables.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");









var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ],
            declarations: [
                _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_7__["TablesComponent"]
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var src_app_pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/tables/tables.component */ "./src/app/pages/tables/tables.component.ts");

var AdminLayoutRoutes = [
    { path: "", redirectTo: "room-booking", pathMatch: "full" },
    { path: "room-booking", component: src_app_pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_0__["TablesComponent"] }
];


/***/ }),

/***/ "./src/app/pages/tables/tables.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tables/tables.component.ts ***!
  \**************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.model */ "./src/app/pages/tables/tables.model.ts");



var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
        this.setup();
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.intializeColumnHeader();
        this.intializeSampleRoomDetails();
    };
    TablesComponent.prototype.setup = function () {
        this.tableColumnHeaderDef = new Array();
        this.roomList = new Array();
        this.roomInfo = new _tables_model__WEBPACK_IMPORTED_MODULE_2__["RoomDetails"]();
    };
    TablesComponent.prototype.intializeColumnHeader = function () {
        this.tableColumnHeaderDef.push('Edit');
        this.tableColumnHeaderDef.push('Delete');
        this.tableColumnHeaderDef.push('Room Id');
        this.tableColumnHeaderDef.push('Room Type Code');
        this.tableColumnHeaderDef.push('Room Type Name');
    };
    TablesComponent.prototype.intializeSampleRoomDetails = function () {
        this.roomList.push(this.roomDetails(100, 'ABC', 'Two Sharing'));
        this.roomList.push(this.roomDetails(101, 'DEF', 'Three Sharing'));
        this.roomList.push(this.roomDetails(102, 'GHI', 'Four Sharing'));
    };
    TablesComponent.prototype.roomDetails = function (roomId, roomType, roomName) {
        var roomDetails = new _tables_model__WEBPACK_IMPORTED_MODULE_2__["RoomDetails"]();
        roomDetails.roomId = roomId;
        roomDetails.roomTypeCode = roomType;
        roomDetails.roomTypeName = roomName;
        return roomDetails;
    };
    TablesComponent.prototype.saveRoomDetails = function () {
        var _this = this;
        var parent = this;
        var existRoom = this.roomList.filter(function (id) { return id.roomId == _this.roomInfo.roomId; });
        if (existRoom.length != 0) {
            existRoom.forEach(function (room) {
                room.roomTypeCode = parent.roomInfo.roomTypeCode;
                room.roomTypeName = parent.roomInfo.roomTypeName;
            });
        }
        else {
            this.roomList.push(JSON.parse(JSON.stringify(this.roomInfo)));
        }
        if (this.roomInfo.editableFlag) {
            alert("Room Modified Successfully");
        }
        else {
            alert("Room Added Successfully");
        }
        this.clearForm();
    };
    TablesComponent.prototype.clearForm = function () {
        this.roomInfo = new _tables_model__WEBPACK_IMPORTED_MODULE_2__["RoomDetails"]();
    };
    TablesComponent.prototype.removeRoomDetails = function (roomId) {
        if (confirm("Are you sure want to remove room id -  " + roomId))
            this.roomList = this.roomList.filter(function (id) { return id.roomId !== roomId; });
    };
    TablesComponent.prototype.editRoomDetails = function (roomDet) {
        roomDet.editableFlag = true;
        this.roomInfo = roomDet;
    };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tables",
            template: __webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tables/tables.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.model.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tables/tables.model.ts ***!
  \**********************************************/
/*! exports provided: RoomDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetails", function() { return RoomDetails; });
var RoomDetails = /** @class */ (function () {
    function RoomDetails() {
        this.editableFlag = false;
    }
    return RoomDetails;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map