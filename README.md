# NiceBlogBackEnd（耐思博客）

NiceBlog is a series projects about a personal technology blog, Which was based on the project of @AngularClass's "angular-starter" and the project of @Funoqiongqiu's "NiceFish".

- [NiceBlog]：The main App of the series projects，Front-end is based on Angular4 + bootstrap + Webpack。http://github.com/CN-Tower/NiceBlog

- [NiceBlogAdmin]：This is the system admin interface of NiceBlog，based on AngularCLI + MaterialUI。http://github.com/CN-Tower/NiceBlogAdmin

- [NiceBlogIonic]：The mobile App of NiceBlog, based on Ionic。http://github.com/CN-Tower/NiceBlogIonic

- [NiceBlogElectron]：The Desk Top App of NiceBlog, based on Electron。http://github.com/CN-Tower/NiceBlogElectron

- [NiceBlogBackEnd]：The back-end server of NiceBlog，based on NodeJS + Express + MongoDB。http://github.com/CN-Tower/NiceBlogBackEnd

Love To Research and Happy To Share! Join me, and enjoy it :-)

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