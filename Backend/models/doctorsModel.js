const conn=require("../database/index.js");
module.exports={
    getAllDoctors:(cb,values)=>{
        let sql =`SELECT * FROM doctors`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        })
    },
}