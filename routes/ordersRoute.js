const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModal');

router.get("/getallorders", async (req, res) => {

    try {
        const orders = await Order.find({})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error })
    }


    router.post("/deliverorder", async (req, res) => {

        const orderid = req.body.orderid
        try {
            const order = await Order.findOne({ _id: orderid })
            order.isDelivered = true
            await order.save()
            res.send('Order deliver successfully')
        } catch (error) {
            return res.status(400).json({ message: "Something went wrong" })
        }

    });


    router.post('/deleteorder', async (req, res) => {

        const orderid = req.body.orderid

        try {
            await Order.findOneAndDelete({ _id: orderid })
            res.send('Order Deleted Successfully')
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    })
})

module.exports = router
