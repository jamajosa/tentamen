/**
 * Created by JAAMH on 14-6-2017.
 */
 var http = require('http');
 function onRequest(request,response){
    console.log('er is een request.');
    response.writeHead(200,{'console-Type':'text/plain'});
    response.write('hello world!');
    response.end();
 }
 http.createServer(onRequest).listen(3000);
 console.log('de server luisters op poort 3000')