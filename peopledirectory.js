var fs = require('fs');



var numFilesRead = 0;
function complete() {
  numFilesRead++;
  if (numFilesRead === 2) {
    console.log('it\'s ready');
    console.log('name people');
  }
}

fs.readFile('./coding/people1.txt', function() {
  console.log("people1 read");
  complete();
});

fs.readFile('./coding/people2.txt', function() {
  console.log("people2 read");
  complete();
});

