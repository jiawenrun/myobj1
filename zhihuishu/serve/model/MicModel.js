//对数据进行操作  连接数据库（写个基类）
const DbBase=require('../base/Dbase');  //引入 基类
class MicModel extends DbBase{

   getLearn(callback) {
    let sql = `SELECT * FROM  learningteam`;
    this.mydb.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            callback(results);
        }
        this.mydb.end();
    });
}


getCurri(callback) {
    let sql = `SELECT * FROM  curriculum1`;
    this.mydb.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            callback(results);
        }
        this.mydb.end();
    });
}


getMeeting(callback) {
    let sql = `SELECT * FROM  meetingclass`;
    this.mydb.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            callback(results);
        }
        this.mydb.end();
    });
}
};


module.exports = MicModel;