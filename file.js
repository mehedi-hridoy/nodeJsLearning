 const fs = require("fs");


//  Synchronous / blocking reques.....
//  fs.writeFileSync("./test.txt", "Hello World from Node.js");


//  // Async / non-blocking request.....
//  fs.writeFile("./test.txt", "Hello World from Node.js", (err) => {
//    if (err) throw err;
//    console.log("File has been created");
//  });

 // read from file 
 const result = fs.readFileSync("./contacts.txt", "utf-8");
 console.log(result);



 // append to a file
 fs.appendFileSync("./contacts.txt", new Date().toISOString());
 console.log("File has been updated");