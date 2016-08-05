var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		//var postData = "";
		console.log("Request for " + pathname + " received");
		//设置接收数据的编码格式为utf-8
		//request.setEncoding("utf-8");
		//监听data事件，收集每次接收到的数据块
		/*request.addListener("data",function( postDataChunk ){
			postData += postDataChunk;
			//console.log("Recived POST data chunk '" + postDataChunk +"'.");
		});*/
		//监听end事件，数据块接收完成之后，将数据块作为参数传入，并请求路由
		/*request.addListener("end",function(){
			route(handle,pathname,response,postData,request);
		});*/
		route(handle,pathname,response,request);
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;