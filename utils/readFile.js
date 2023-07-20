const fs = require('fs');

exports.handleReadFile = (res, statusCode, filePath) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.writeHead(statusCode, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    });
};