var fs  = require("fs"); 
var http  =    require  ("http"); 
var path  =  require ("path");

const servefolder = (folderPath) => {
  const server = http.createServer((req, res) => {
    const filePath = path.join(folderPath, req.url);
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: { code: 404, message: `File ${folderPath} not found` } }));
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  });

  return server.listen(5000);
};
servefolder('./test.txt')