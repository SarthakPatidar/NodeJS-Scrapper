# Node.js URL Scrapper

This code is used to scrape links from any base url by sending node.js requests and simultaneously maintaining 5 concurrent connections. This task is done recursively by storing links into text file and then sending requests to stored links.

**Instructions for Installation:**

1) Clone this repository using `git clone https://github.com/SarthakPatidar/NodeJS-Scrapper.git`.
2) Open Terminal or CMD.
3) Navigate to the code directory.
4) Run the command `npm install --save` [Assuming your system has NPM installed] 

**Instructions for Running program:**

1) Run command `node server.js`
2) Since this is an recursive program, it keeps on going inside every link it has scrapped and stored.
3) Therefore, the program has to be stopped manually using `Ctrl+C`.
4) A limit can be set on number of links [optional]

**Output File:**

All the links are written line by line into file `medium_urls.txt`

**Before Running Program:**

  ![alt text](https://github.com/SarthakPatidar/NodeJS-Scrapper/blob/master/before.png)

**After Running Program:**

  ![alt text](https://github.com/SarthakPatidar/NodeJS-Scrapper/blob/master/after.png)
  
**NOTE**

   Currently the program scrapes each and every link of article it fetches which may create duplicate entries if link is      present more than 1 time in article of medium.com
