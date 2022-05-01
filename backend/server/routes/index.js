const express = require('express');
const router = express.Router();
const db = require('../models')
const { uploadFile, getFileStream } = require('../s3')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const multer = require('multer');
const upload = multer({dest:'uploads/'}) //let us receive the images and store in the file system


router.get('/', async (req,res,next)=>{ 
    
    try{
        let results = await db.all();
        res.json(results )
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
});


// router.get('/:id', async (req,res,next)=>{
 
//     try{
//         let results = await db.one(req.params.id);
//         res.json(results )
//     }catch(e){
//         console.log(e)
//         res.sendStatus(500)
//     }
// });



router.post('/',upload.single('imgFile'),async(req,res)=>{
    const file = req.file
    const comment = req.body.comment
    console.log(file)


    try{
        const result = await uploadFile(file)
        console.log(result)


        // let image = `/api/comment/images/${result.Key}`
        let image = `https://d29cdanibk6kjv.cloudfront.net/${result.Key}`

        
        

        console.log(image)
        const dataInsert =  await db.insertOne(image,comment)

        await unlinkFile(file.path)
        console.log(dataInsert)
     

        // res.send({imagePath:`/images/${result.Key}`})

        const results = await db.all();
        res.json(results)
       


    }catch(err){
        res.status(400).send(err)
    }


})



router.get('/images/:key',(req,res)=>{
    const key =req.params.key
    const readStream = getFileStream(key)

    readStream.pipe(res)
})






module.exports = router