const conn=require("../database/index.js");
module.exports={
    getAllQuestRefs:(cb,values)=>{
        let sql=`SELECT * FROM questions_reference`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
}