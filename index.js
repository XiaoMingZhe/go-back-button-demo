const http = require("http");
//导入文件模块
const fs = require("fs");
const server = http.createServer((req, res) => {
    //控制台打印信息
    console.log('LOADING……');

    //设置头信息
    res.setHeader("Content-Type", "text/html;charset='utf-8'");

    //读文件
    fs.readFile(`.${req.url === '/' ? '/index.html' : req.url}`, "utf-8", (err, data) => {
        if (err) {
            console.log("index.html loading is failed :" + err);
        }
        else {
            //返回index.html页面
            res.end(data);
            console.log('OKAY!');
        }
    });
}).listen(8888);
console.log('OPEN localhost:8888 ');