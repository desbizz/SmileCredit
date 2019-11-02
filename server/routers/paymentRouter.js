const express =require('express')
const router= new express.Router()
const Payment= require('../models/payment')


router.post('/payment',async (req, res)=>{
    const payment = new Payment(req.body)
    try{
        await payment.save( )
        res.status(201).send(payment)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/payment/:id',async (req, res)=>{
  
    try{
      const payment =  await Payment.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
       await req.payment.save()
       res.status(200).send(payment)
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/payment', async (req, res)=>{


    const match=req.query
   

    try{
        const payment = await Payment.find(match)
       //await req.individual.populate({path:'individuals' , match}).execPopulate()
     
        if(!payment || payment=={}){
            return res.status(404).send({Error:'not found'})
        }
        res.status(200).send(payment)
    } catch (e){
        return res.status(400).send(e) 

    }
})

router.get('/payment/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const payment = await Payment.findOne({_id})

        if(!payment){
            return res.status(404).send({Error:'not found'})
        }
            res.status(200).send(payment)
    }
   
    catch (e){
        return res.status(400).send(e)

    }
})


module.exports=router