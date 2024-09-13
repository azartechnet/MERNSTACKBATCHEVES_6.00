// var fs = require('fs');

// fs.open('sample.txt', 'r', function(err, file) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File opened successfully, file descriptor:", file);
//     }
//     console.log("File opened...");
// });
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("File content:", data);
    }
    console.log("File read operation completed.");
});

