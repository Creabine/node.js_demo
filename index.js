var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
//handle是个对象，对象可以用.运算符来给属性赋值，也可以像下边
//这样使用[]来给属性赋值。[]可以完全替代.，且功能比.更加强大。
//[]来个对象添加属性的时候，[]里边的属性名可以是字符串变量，数字和js关键字/保留字。而.就不行
//还有下边的"/"，用[]可以这样赋值，但是用.可以嘛？
handle["/"]= requestHandlers.start;
handle["/start"]= requestHandlers.start;
handle["/upload"]= requestHandlers.upload;
handle["/show"]= requestHandlers.show;

server.start(router.route,handle);