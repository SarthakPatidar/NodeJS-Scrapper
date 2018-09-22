// modules =================================================
var express        = require('express');
var app            = express();
var fs             = require('fs');
var file           = require('./read_from_file');
var request        = require("request");
const jsdom        = require("jsdom");
const { JSDOM }    = jsdom; 


// configuration files/variables ===========================================

var port = process.env.PORT || 4000; // set our port

var input = fs.createReadStream('./medium_urls.txt');

function write_links(url) {
return new Promise( function( resolve, reject ) {
request(url,async function(error, response, html){

    if(error){
        console.log(error);
    }

    var dom = new JSDOM(``+html);
    var a = dom.window.document.querySelectorAll("a");
    var relevant_links = []; var count = 0;

    var str = "https://medium.com/s";

    for(var i=0;i < a.length;i++){
        var url = a[i].href;
        if(url.includes(str)){
            relevant_links.push(url);
        }
    }

    for(var i=0;i < relevant_links.length;i++)
    {
        await fs.appendFile('./medium_urls.txt', "\n" + relevant_links[i] , function (err) {
            if (err) {
                // append failed
                console.log("error");
            } else {
                count = count+1;
                console.log("appended");
            }
            if(count == relevant_links.length-1){
                resolve(true);
            }
        })
    }
})
})
}




async function scrape(count){

var input = fs.createReadStream('./medium_urls.txt');       
await file(input,count,count+5).then(async function(url_array){

    count += url_array.length;

    for(var i=0;i < url_array.length;i++) {
        var bool = await write_links(url_array[i]);
        if(bool){
            scrape(count);
        }
    }
})
}

// Call Our Scrapping Function.[ File Item 1: Inital Link in File => https://medium.com ] ========
scrape(1);

// Start listening at port 3000 ====================
app.listen(port, function () {
console.log("Running at PORT "+port);
});