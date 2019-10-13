//继承数据库
const DBase = require('../base/Dbase');
class CourseModel extends DBase {
    constructor() {
        super();
        this.table = 'curriculum';
    };
    getAllBook(course, callback) {
        console.log(course)
      
            let sql = `select * from ${this.table} where name like '%${course}%'or school like '%${course}%';`;
            // let sql2 = `SELECT * FROM ${this.table} WHERE school LIKE '%${course}%'`;
            // let sql3 = `SELECT * FROM ${this.table} WHERE teacher LIKE '%${course}%'`;
            this.mydb.query(sql, (err, results) => {
                if (err) {
                    console.log(err);
                    callback(err);
                } else {
                    console.log(results)
                    callback(results);
                }
                this.mydb.end();
            });
        

    };

}


module.exports = CourseModel;