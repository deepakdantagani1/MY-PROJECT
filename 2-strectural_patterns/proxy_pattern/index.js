const path = require('path');
const Fs_proxy = require('./Fs_proxy');

const fs = new Fs_proxy(require('fs'));

//const textFile = path.join(__dirname, 'ReadMe.txt');
const mdFile = path.join(__dirname, 'ReadMe.md');

const result = (err, contents) => {
    if (err) {
        console.log('\x07');
        console.error(err);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);
}

//fs.readFile(textFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);

//proxy is same as the existing module fuctionality, but it can acts like a validator for the real once.
//proxy can control incoing req and res patthers
//*********need to look into this topic more.  */
