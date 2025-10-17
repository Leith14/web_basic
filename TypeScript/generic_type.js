// 动态类型
function leixw1(a, b) {
    return [a, b];
}
function leixw2_str(a, b) {
    return [a, b];
}
function leixw(a, b) {
    return [a, b];
}
// number
leixw(1, 2); // 全称写法
leixw(1, 2);
leixw(true, false);
leixw("true", "false");
let a = undefined;
// interface
// interface Data<T> {
//   msg: T;
// }
// let data: Data<string> = {
//   msg: "leixw",
// };
//泛型高级用法
function add1(a, b) {
    return [a, b];
}
add1(1, true);
// 添加泛型默认类型
function add2(a, b) {
    return [a, b];
}
add2(false, 1);
// 实战应用实例
const axios = {
    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(null);
        });
    },
};
axios.get('./data.json').then(res => {
    console.log(res);
});
export {};
//# sourceMappingURL=generic_type.js.map