# NiceFish-BackEnd

这是NiceFISH的服务端代码，我把它分成一个独立的项目来写，这样看起来更加清晰一些。
这个RESTful服务端是基于NodeJS+Express+MongoDB实现的。

## 使用方法
- 请自己好安装Mongodb并启动，例如：mongod.exe --dbpath c:\data\db
- [可选]启动MongoDB可视化工具，强烈推荐MongoBooster，请自行搜索安装
- 安装好Chrome插件resteasy，测试后台接口的时候要用到
- 安装Node相关的模块：npm install
- 启动express服务端 npm start ，express默认起在3000端口
- 如果你希望在开发的时候能自动监控修改的文件并重启服务，请安装nodemon这个NodeJS插件，安装方法请看这里https://github.com/remy/nodemon ，安装完成之后直接在NiceFish-BackEnd根目录下运行nodemon命令
- 打开Chrome访问http://localhost:3000/
- 在Chrome中启动resteasy插件，开始测试后台接口

目前已经做了一个基本雏形，可以测试的restful api接口请看router/user.js这个文件中的定义。