var fs = require('fs'); // core module of NodeJS


function readLines(input,start_index,end_index) {
  return new Promise( function( resolve, reject ) {
      var remaining = '';
      var allURL = [];
    
      input.on('data', function(data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        while (index > -1) {
          var line = remaining.substring(0, index);
          remaining = remaining.substring(index + 1);
          //func(line);
          start_index++;
          if(start_index < end_index){
              allURL.push(line);
              index = remaining.indexOf('\n');
          }
          else{
              resolve(allURL);
              break;
          }
        }
      });

      input.on('end', function() {
          if (remaining.length > 0) {
            start_index++;

            if(start_index < end_index){
              allURL.push(remaining); 
            }   
          }
          resolve(allURL);
      });
  });
}

/*function func(data) {
//allURL.push(data);
console.log('Line: ' + data);
} */

module.exports = readLines;