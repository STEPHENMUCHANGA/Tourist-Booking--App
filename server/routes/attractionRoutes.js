
const router = require('express').Router();
const Attraction = require('../models/Attraction');

router.get('/', async(req,res)=>{
 const data = await Attraction.find();
 res.json(data);
});

module.exports = router;
