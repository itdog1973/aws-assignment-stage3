const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host:process.env.AWS_RDS_ENDPOINT,
    port:process.env.AWS_RDS_PORT,
    user:process.env.AWS_RDS_USER,
    password:process.env.AWS_RDS_PASSWORD,
    database:process.env.AWS_RDS_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

let discussDB = {

};

discussDB.all =()=>{


    return new Promise((resolve, reject)=>{

        pool.query('SELECT * FROM comment',(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
};


discussDB.one = (id)=>{
    return new Promise((resolve, reject)=>{

        pool.query('SELECT * FROM comment WHERE id =?',[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}


discussDB.insertOne =(image,text)=>{
    return new Promise((resolve,reject)=>{


        pool.query('INSERT INTO comment (details, images) VALUES (?,?) ',[text,image],(err, results)=>{
            if(err){
                return reject(err);
            }


            return resolve(results)

        }


    )})
}











module.exports = discussDB