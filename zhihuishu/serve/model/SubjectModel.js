const Database = require('../base/Dbase');
class SubjectModel extends Database {
    constructor() {
        super();
        this.table = 'subjcet';
    }
    getSubject(req,callback) {
        var sql = 'select * from ban';
        this.mydb.query(sql, (err, results) => {
            // console.log(results);
            callback(results);
        })
    }

}

module.exports = SubjectModel;