var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import axios from "axios";
import "reflect-metadata";
// 1. 类装饰器 ClassDecorator   target: 构造函数
// 2. 属性装饰器 PropertyDecorator
// 3. 参数装饰器 ParameterDecorator
// 4. 方法装饰器 MethodDecorator  PropertyDescriptor
// 5. 装饰器工厂
// 6. import 'reflect-metadata'
// 7. axios
// 与AOP概念类似
// 类装饰器
const Base = (target) => {
    console.log(target);
    target.prototype.apiUrl = "http://www.baidu.com";
    target.prototype.fn = function () {
        console.log("run");
    };
};
let Http = class Http {
};
Http = __decorate([
    Base
], Http);
const http = new Http();
// Base(Http)  底层原理是这样
http.fn();
console.log(http.apiUrl);
// 装饰器工厂
const Base1 = (name) => {
    const fn = (target) => {
        console.log(target);
        target.prototype.name = name;
        target.prototype.fn = function () {
            console.log("run");
        };
    };
    return fn;
};
const Get = (url) => {
    const fn = (target, propertyKey, descriptor) => {
        console.log(target, propertyKey, descriptor);
        // target:{} ,propertyKey:getList, descriptor:{ value: [Function: getList],writable: true,enumerable: false,configurable: true}
        const key = Reflect.getMetadata("key", target);
        axios.get(url).then((res) => {
            descriptor.value(key ? res.data[key] : res.data);
        });
    };
    return fn;
};
const Result = () => {
    const fn = (target, propertyKey, parameterIndex) => {
        // target:{} ,propertyKey:getList, parameterIndex:0
        Reflect.defineMetadata("key", "result", target);
        console.log(target, propertyKey, parameterIndex);
    };
    return fn;
};
const Name = (target, propertyKey) => {
    // target:{} ,propertyKey:leixw
    console.log(target, propertyKey);
};
let Http1 = class Http1 {
    // 属性装饰器
    leixw;
    constructor() {
        this.leixw = "leixw";
    }
    // 方法装饰器
    getList(data) {
        // console.log(data);
    }
    create() { }
};
__decorate([
    Name,
    __metadata("design:type", String)
], Http1.prototype, "leixw", void 0);
__decorate([
    Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10"),
    __param(0, Result()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Http1.prototype, "getList", null);
Http1 = __decorate([
    Base1("leixw"),
    __metadata("design:paramtypes", [])
], Http1);
const http1 = new Http1();
console.log(http1.name);
//# sourceMappingURL=decorator.js.map