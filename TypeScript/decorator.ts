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
const Base: ClassDecorator = (target) => {
  console.log(target);
  target.prototype.apiUrl = "http://www.baidu.com";
  target.prototype.fn = function () {
    console.log("run");
  };
};

@Base
class Http {}
const http = new Http() as any;
// Base(Http)  底层原理是这样
http.fn();
console.log(http.apiUrl);

// 装饰器工厂
const Base1 = (name: string) => {
  const fn: ClassDecorator = (target) => {
    console.log(target);

    target.prototype.name = name;
    target.prototype.fn = function () {
      console.log("run");
    };
  };
  return fn;
};
const Get = (url: string) => {
  const fn: MethodDecorator = (
    target,
    propertyKey,
    descriptor: PropertyDescriptor
  ) => {
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
  const fn: ParameterDecorator = (target, propertyKey, parameterIndex) => {
    // target:{} ,propertyKey:getList, parameterIndex:0
    Reflect.defineMetadata("key", "result", target);
    console.log(target, propertyKey, parameterIndex);
  };
  return fn;
};

const Name: PropertyDecorator = (target, propertyKey) => {
  // target:{} ,propertyKey:leixw
  console.log(target, propertyKey);
};


@Base1("leixw")
class Http1 {
  // 属性装饰器
  @Name
  leixw: string;
  constructor() {
    this.leixw = "leixw";
  }
  // 方法装饰器
  @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
  getList(@Result() data: any) {// 参数装饰器
    // console.log(data);
  }
  create() {}
}

const http1 = new Http1() as any;
console.log(http1.name);
