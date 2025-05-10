const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    userId:mongoose.Types.ObjectId,
    orderDate:Date,
    items:[
        {
            productId:mongoose.Types.ObjectId,
            quantity:Number
        }
    ]
})


module.exports = mongoose.model('Order', orderSchema);