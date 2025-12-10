
const router = require('express').Router();
const axios = require('axios');

router.get('/:city', async(req,res)=>{
 const key = process.env.OW_KEY;
 const city = req.params.city;
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
 const r = await axios.get(url);
 res.json(r.data);
});

module.exports = router;
