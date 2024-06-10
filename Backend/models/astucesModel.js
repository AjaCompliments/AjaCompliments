const conn=require("../database/index.js");
module.exports={
    getAllAstuces:(cb,values)=>{
        let sql=`SELECT * FROM astuces`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        })
    },
    
}