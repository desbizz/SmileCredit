const express =require('express')
const router= new express.Router()
const Transfer= require('../models/transfer')


router.post('/transfer',async (req, res)=>{
    const transfer = new Transfer(req.body)
    try{
        await transfer.save()
        res.status(201).send(transfer)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/transfer/:id',async (req, res)=>{
  
    try{
      const transfer =  await Transfer.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
       await req.transfer.save()
       res.status(200).send(transfer)
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/transfer', async (req, res)=>{

   
    const match=req.query
  

    try{
        const transfer = await Transfer.find(match)
       //await req.individual.populate({path:'individuals' , match}).execPopulate()
     
        if(!transfer || transfer=={}){
            return res.status(404).send({Error:'not found'})
        }
        res.status(200).send(transfer)
    } catch (e){
        return res.status(400).send(e) 

    }
})

router.get('/transfer/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const transfer = await Transfer.findOne({_id})

        if(!transfer){
            return res.status(404).send({Error:'not found'})
        }
            res.status(200).send(transfer)
    }
   
    catch (e){
        return res.status(400).send(e)

    }
})


module.exports=router