const cookieParser = require('cookie-parser')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
let secret = 'zhihuishu'
exports.cookie= cookieParser(secret);

let sessionStore = new MySQLStore(require('./db'));
exports.session=session({
    key:'sessionId',
    secret: secret,
    store: sessionStore,
    resave: false,
    name:'sessionId',
    saveUninitialized: true,
    cookie: {maxAge: 24 * 3600 * 1000}
})