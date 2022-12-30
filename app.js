/**
 * following are the NPM commands to test packages
 * npm commands.
npm audit
npm outdated
npm install package name
npm uninstall
npm i -D nodemon
node --check app.js ==>  node.js built in linter feature to check the syntax errors
----------------------------------------------------------------------------------
.editorconfig ==> this project ues editor config to standardize the editor
visit editerconfig.org fro more detials
---------------------------------------------------------------------------------
testing ==>
in testing, mocha is a testing framework and chai is assertion module.
here the key words are,
descripion ==> class anme
context ==> method name
it ==> return value discription

------------------------------------------------------------------------------------
interesting methods:
string.repeat(10000) ==> this will repeat the same string for given number of times.
 */
//import modules
const express = require('express');
const dotenv = require('dotenv');
const { uuid } = require('uuidv4');
const compress = require('compression');
const helmet = require('helmet');
const session = require('express-session');
const urlParser = require('parseurl');
const cookieParser = require('cookie-parser');
const {add, get} = require('./redis')

//lode config file
dotenv.config({ path: './config/config.env' });

//veriables or objects declerations
//returns a express server instance
const app = express();

//middleware
//sometimes order of middleware is very important
app.use(session({
    secret: 'secret password',
    resave: true,
    saveUninitialized: false
}));
app.use(cookieParser());
app.use((req, res, next)=> {
    if(!req.session.views) req.session.views = {};
    // get the url pathname
    let pathname = urlParser(req).pathname;
    // count the views
    req.session.views[pathname] = (req.session.views[pathname]|| 0) + 1;
    next();
})
app.use(compress({
    //level lo compression is varies from -1 to 9 , 9 is base and -1 ids default compression ratio.
    level: 6, //best for typical usage
    threshold: 0, //each data from client to server will be compressed, if you want to add a value 100kb should bot be compressed 100*1000
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compress.filter(req, res);
    }
}));
app.use(helmet()); //protect from iFrames, not to mentioed additional details in http hedders etc
app.use(express.json()) //middleware json parser or body parser
//multer
//cookie-parser
//serve-favicon
//session

//access .env veriables using process. here process is a global verable
//that can be used with out require
const PORT = process.env.PORT || 7459;

//routers
app.get('/getSessionId', async (req, res, next) => {
    try {
        const sessionId = uuid();
        add('9293657527', sessionId);
        console.log( await get('9293657527'));
        console.log(`secound log`)
        return res.json({ sessionId: sessionId });
    } catch (error) {
        next(error);
    }
});

//catch 404 and forward to error handler
app.use(async (req, res, next) => {
    let error = new Error(`${req.originalUrl} is not accurate http request`);
    error.status = 404;
    next(error);
})


//error handler
// eslint-disable-next-line no-unused-vars
app.use(async function (error, req, res, next){
    res.status(error.status || 500).send(error.message || 'error');
})

//callback funciton that will be called once the server is running and ready
//ready to receive responces
//binds and listen the conneciton on spefified host and port
app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`));
