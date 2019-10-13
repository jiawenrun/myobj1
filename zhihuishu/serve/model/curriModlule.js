const dbase = require('../base/Dbase');
class curriModlule extends dbase {
    constructor() {
        super();
        this.table = 'curriculum';
    }
    creatCurri(cateinfo, callback) {
        let fieldstr = '', field = '';
        let data = [];
        let isFirst = true;
        for (const f in cateinfo) {
            if (cateinfo.hasOwnProperty(f)) {
                fieldstr += (isFirst ? '' : ',') + f;
                field += (isFirst ? '' : ',') + '?';
                data.push(cateinfo[f]);
            }
            isFirst = false;
        }
        let sql = `INSERT INTO ${this.table}(${fieldstr}) VALUES(${field})`;
        this.mydb.query(sql, data, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }

    getFive(callback) {
        let sql = `select * from ${this.table}  order by rand() limit 5`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }

    getHotfive(callback) {
        let sql = `select * from ${this.table}  order by alreadylea desc limit 5`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }
    getNewfive(callback) {
        let sql = `select * from ${this.table}  order by kaike desc limit 5`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }
    literature(callback) {
        let sql = `select * from ${this.table}  where name like '%文学%' or category like '%文学%' or name like '%文化%' limit 6`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }
    art(callback) {
        let sql = `select * from ${this.table}  where name like '%艺术%' or category like '%艺术%' or name like '%设计%' limit 6`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }
    seacheachcurri(keyword, callback) {
        let sql = ``;
        console.log(keyword)
        if (keyword == 'new') {
            sql = `select * from ${this.table}  order by kaike desc limit 10`;
        } else {
            sql = `select * from ${this.table}  where name like '%${keyword}%' or category like '%${keyword}%' or name like '%${keyword}%'`;
        }
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }

    getcurri(cid, callback) {
        let sql = `select * from ${this.table}  where cid=${cid}`;
        this.mydb.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(results);

            }
            this.mydb.end();
        })
    }



}
module.exports = curriModlule;