exports.cors=function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    // http://localhost:8080
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Credentials",true); //甯ookies
    next();
}