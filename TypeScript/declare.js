// declare
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
import axios from "axios";
import express from "express";
//  尝试使用 `npm i --save-dev @types/express` (如果存在)，或者添加一个包含 `declare module 'express';` 的新声明(.d.ts)文件
axios.get("https://api.github.com/users/github");
const app = express();
const router = express.Router();
app.use('api', router);
router.get('/api', (req, res) => {
    res.json({
        code: 200,
    });
});
app.listen(9001, () => {
    console.log('9001');
});
//# sourceMappingURL=declare.js.map