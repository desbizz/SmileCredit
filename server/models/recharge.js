const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment');


autoIncrement.initialize(mongoose.connection);
const rechargeSchema = mongoose.Schema({
    smileNumber: {
        type: String,
        required:true
    },
    smileAccount: {
        type: String
    },
    amount: {
        type: Number,
        required:true
    },
    seq: { type: Number, default: 0 },
    status: {
        type: String,
        default: 'Not DONE'
    }},
    {
           timestamps: true
       })

        

    rechargeSchema.plugin(autoIncrement.plugin, {model:'Recharge',  field: 'seq'})
   // rechargeSchema.plugin(autoIncrement.plugin, 'Recharge')
  



const Recharge = mongoose.model('Recharge', rechargeSchema)

module.exports = Recharge