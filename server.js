import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
//const express =  require('express')
const app = express()
//const fetch = require("node-fetch")
//const cors = require('cors');

app.use(cors())

app.get("/:id", async (req, res) => {
    const api_url = 'https://cadet-test-api.extra.fcagroup.com/cadetapi/v1/cmpgn/getinfo?vin='
    const api_end = '&service=json&language=EN_US'
    const url = api_url + req.params.id + api_end;
    const response = await fetch(url, {
        method:'GET',
        headers: {
            'api-key':'a7bc6d59fe314d98bbac5146f2ed0e72',
            'Content-Type': 'application/json'
        }
    })
    res.json(await response.json())

})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})