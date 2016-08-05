function route(handle,pathname,response,request){
	console.log("About to route a request for " + pathname);
	//检查该路径对应的请求是否存在
	if( typeof handle[pathname] === 'function' ){
		handle[pathname](response,request);
	}else{
		console.log("No request handler found for " + pathname);
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;