const http = require("http");
const fs = require("fs");
<iframe width="560" height="315" src="https://www.youtube.com/embed/-MZcSk4jpAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (req.url === "/") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.write(data);
          res.end;
        }
      });
    } else if (req.url === "/greenwich") {
      fs.readFile("./greenwich.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.write(data);
          res.end;
        }
      });
    } else if (req.url === "/cloud") {
      fs.readFile("./cloud.html", (err, data) => {
        res.write(data);
        res.end;
      });
    } else {
      res.end("<h1>404 : Page not found</h1>");
    }
  })
  .listen(process.env.PORT || 3000);
