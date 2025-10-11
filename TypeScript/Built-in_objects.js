// 1. ECMAScript 的内置对象
let num = new Number(123);
let date = new Date();
let reg = new RegExp("\\d+", "g");
console.log(num, date, reg);
let error = new Error("错误信息");
let xhr = new XMLHttpRequest();
// 2. DOM 和 BOM 的内置对象
// HTML(元素名称)Element
let div1 = document.querySelector("canvas");
// HTMLElement
let div2 = document.querySelector("section");
let div3 = document.querySelectorAll("footer");
let div4 = document.querySelectorAll("div");
let local = localStorage;
let loc = location;
let promise = new Promise((r) => {
    r('leixw');
});
promise.then((res) => {
    console.log(res);
});
let cookie = document.cookie;
// 例子
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
let str = "leixwxkeifd090801011".split("");
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(Arr);
const rain = () => {
    // 创建半透明黑色覆盖层，产生拖尾效果
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0"; // 设置文字颜色为绿色
    // 遍历每一列
    Arr.forEach((item, index) => {
        // 在指定位置绘制随机字符
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, // x坐标：每列间隔10像素
        item + 10 // y坐标：当前列的位置+10
        );
        // 更新该列的位置：如果超出屏幕高度或随机条件满足，则重置为0，否则向下移动10像素
        Arr[index] =
            item > canvas.height || item > 5000 * Math.random() ? 0 : item + 10;
    });
    console.log(Arr);
};
setInterval(rain, 40);
export {};
//# sourceMappingURL=Built-in_objects.js.map