const express =require('express')
const router= new express.Router()
const Recharge= require('../models/recharge')
const Payment = require('../models/payment')
const auth = require('../middleware/auth')


router.post('/api/recharge',auth,async (req, res)=>{
    const recharge = new Recharge(req.body)
    try{
        await recharge.save()
       // await Recharge.findByIdAndUpdate({_id: recharge._id}, {$inc: { seq: 1} }, {new: true, upsert: true})
        res.status(201).send(recharge)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/completed/:id',async (req, res)=>{
    const _id = req.params.id
    try{
        req.body={status:"DONE"}
    //  const recharge =  await Recharge.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        const recharge =  await Recharge.findByIdAndUpdate(_id, {status:"DONE"}, { isDeleted: true })
       await req.recharge.save()
       res.status(200).send()
    }catch(e){
        res.status(400).send(e)
    }
})


router.get('/api/recharge',auth, async (req, res)=>{
    const match = {}
    match.status='Not DONE'
  
   
  
    try{ 
        
       const recharge = await Recharge.find(match)
     //  await req.Recharge.populate({path:'recharge' , match}).execPopulate()
     
        if(!recharge || recharge=={}){
            return res.status(404).send({Error:'not found'})
        }
        res.status(200).send(recharge)
      
    } catch (e){
        return res.status(400).send(e) 

    }
})

router.get('/api/recharge/admin',auth, async (req, res)=>{
    const match = {}
    match.status='DONE'
   
  
    try{ 
        
       const recharge = await Recharge.find(match)
     //  await req.Recharge.populate({path:'recharge' , match}).execPopulate()
     
        if(!recharge || recharge=={}){
            return res.status(404).send({Error:'not found'})
        }
        res.status(200).send(recharge)
    } catch (e){
        return res.status(400).send(e) 

    }
})

router.get('/api/balance',auth, async (req, res)=>{

    const match = {}
    match.status='DONE'
   
  
    try{ 
        
       const recharge = await Recharge.find(match)
       const payment = await Payment.find()

       const total= await Recharge.aggregate([{
        $match : {  status: 'DONE'},
    },{
        $group : {
            _id : null,
            total : {
                $sum : "$amount"
            }
        }
    }]);
    const totamt= await Payment.aggregate([{
        $match : {  },
    },{
        $group : {
            _id : null,
            total : {
                $sum : "$amount"
            }
        }
    }]);

    const balance= {rechargeTotal: total[0].total, depositTotal: totamt[0].total, balance: totamt[0].total -total[0].total }
  
    
   

    

      

          
     //  await req.Recharge.populate({path:'recharge' , match}).execPopulate()
     
        if(!recharge || recharge=={}){
            return res.status(404).send({Error:'not found'})
        }
        res.status(200).send(balance)
    } catch (e){
        return res.status(400).send(e) 

    }
})

router.get('/recharge/:id',auth, async (req, res)=>{
    const _id = req.params.id
    try{
        const recharge = await Recharge.findOne({_id})

        if(!recharge){
            return res.status(404).send({Error:'not found'})
        }
            res.status(200).send(recharge)
    }
   
    catch (e){
        return res.status(400).send(e)

    }
})




module.exports=router