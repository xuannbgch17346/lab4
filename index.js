const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>new code here</h1>");
    res.write("<h2>Test nodemon</h2>");
    res.write("<h3>Node monitor: Autosave</h3>")
    if (req.url === "/") {
      fs.readFile("./index.html", (err, data)=> {
        if (err) {
          console.error(err)
        }else {
          res.write(data);
          res.end;
        }
      });
    }else if (req.url === "/greenwich") {
      fs.readFile("./greenwich.html", (err, data)=> {
        if (err) {
          console.log(err);         
        }else {
          res.write(data);
          res.end;
        }
      }) ;
    } else if (req.url === "/cloud." {
      fs.readFile("./cloud.html", (err, data)=>{
        res.write(data);
        res.end;     
    });
  }else {
    res.end("<h1>404 :Page not found</h1>");
  }   
  })
  .listen(process.env.PORT || 3000);
