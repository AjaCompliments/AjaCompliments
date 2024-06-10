const conn=require('../database/index.js');
module.exports={
    fetchAllCompliments:(cb,values)=>{
        let sql=`SELECT * from compliments`;
        conn.query(sql,values,(err,results)=>{cb(err,results)})
    },
    fetchComplimentUNSAFE:(cb,values)=>{
        let sql=`SELECT * from compliments WHERE category=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results)
        })
    },

}