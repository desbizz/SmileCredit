const mongoose = require('mongoose')


const transferSchema = mongoose.Schema({
    accountName: {
        type: String,
        required:true
    },
    accountNumber: {
        type: String,
        required:true
    },
    bank: {
        type: String,
        required:true
    },
    amount: {
        type: Number,
        required:true
    },
   
    status: {
        type: String,
        default: 'Not Done'
    }
    
}
,
{
       timestamps: true
   })

const Transfer = mongoose.model('Transfer', transferSchema)

module.exports = Transfer