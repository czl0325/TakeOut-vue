## 介绍

使用vue开发的外卖项目

## 运行

1、进入目录后先`npm install`下载相应的包<br>
2、运行`npm run dev`成功后在浏览器输入`localhost:8080`即可运行

## 错误

*
```
npm ERR! code ELIFECYCLE
npm ERR! errno 126
```
解决方案：
```
rm -rf node_modules
rm package-lock.json
npm cache clear --force
npm install
```