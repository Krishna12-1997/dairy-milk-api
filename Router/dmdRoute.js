const express = require('express')
const router = express.Router();

require('../db/conn');
const addOrder = require('../controllers/addOrder')
const updateOrder = require('../controllers/updateOrder')
const udpateOrderStatus = require('../controllers/updateOrderStatus')
const deleteOrder = require('../controllers/deleteOrder')
const checkCapacity = require('../controllers/checkCapacity')

router.post('/add',addOrder)
router.put('/update/:id',updateOrder)
router.put('/updateStatus/:id',udpateOrderStatus)
router.delete('/delete/:id',deleteOrder)
router.get('/checkCapacity/:id',checkCapacity)

module.exports = router;