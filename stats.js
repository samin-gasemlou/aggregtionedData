const express=require('express');
const router=express.Router();
const Order=require('../models/Order');

router.get('/total-sales',async(req,res)=>{
    try{
        const result=await Order.aggregate([{$unwind:"$items"},
            {$lookup:{
                from:"products",
                localField:"items.productId",
                foreignField:"_id",
                as:"productInfo"
            }},
            {$unwind:"productInfo"},
            {$project:{
                itemTotal:{$multiply: ["$items.quantity", "$productInfo.price"]}
            }},
            {$group:{
                _id:null,
                totalSales:{$sum:"$itemTotal"}
            }}
        ]);
        res.json(
    res.json({ totalSales: result[0]?.totalSales ?? 0 }));
    }catch(err){
          console.error(err);
        res.status(500).json({ error: 'Something went wrong.' });
    }
})


module.exports=router;