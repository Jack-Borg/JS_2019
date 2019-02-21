"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var http = require("http");
function instanceOfIBook(object) {
    return object.type === 'IBook';
}
var Book = /** @class */ (function () {
    function Book(title, author, published, page) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.page = page;
        this.type = 'IBook';
    }
    return Book;
}());
var b = { type: 'IBook', title: 'bob', author: 'mr. ross' };
if (instanceOfIBook(b)) {
    console.log(b, "is book");
}
else {
    console.log(b, "is not book");
}
var toArr = function (a, b, c) {
    return [a, b, c];
};
var toArrUpper = function (a, b, c) {
    return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["a", "b", "c"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(toArr);
f2(toArrUpper);
var Shape = /** @class */ (function () {
    function Shape(_color) {
        this._color = _color;
    }
    Shape.prototype.getArea = function () {
        return undefined;
    };
    Shape.prototype.getPerimeter = function () {
        return undefined;
    };
    Shape.prototype.get_color = function () {
        return this._color;
    };
    Shape.prototype.set_color = function (color) {
        this._color = color;
    };
    Shape.prototype.toString = function () {
        return "color: " + this._color + " area:" + this.getArea() + " perimeter" + this.getPerimeter();
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_color, radius) {
        var _this = _super.call(this, _color) || this;
        _this._color = _color;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
//# sourceMappingURL=demo.js.map