const express = require("express")
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const cloudinary = require("cloudinary")
const multer = require("multer")


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

const storage = multer.diskStorage({})

const upload = multer({ storage: storage }); 

router.post("/",upload.single("imageUrl"),async(req,res)=>{
    try{
        const result = await cloudinary.v2.uploader.upload(req.file.path)
        const store = await prisma.upload.create({
            data:{
                title:req.body.title,
                imageUrl:result.url
            }
        })
        res.status(200).json({message:'file has been uploaded.',data:store})
    }
    catch(error){
        res.status(400).json(error.message)
    }
})

module.exports = router