const express = require('express')
const mongoose = require('mongoose')
const auditLog = require('audit-log')
auditLog.addTransport("console");
auditLog.addTransport("mongoose", {connectionString: "mongodb://localhost/auditdb"})

const port = process.env.PORT || 3000


app = express()

app.get('/', function(req,res){
    
    auditLog.logEvent(
        'boomi', 
        'maybe script name or function', 
        'tried to log in', 
        'the affected target name perhaps', 
        'target id', 
        'additional info, JSON, etc.'
        );


    res.send("Auditlog succeeded!")
});

app.listen(port , ()=>{
    console.log(`STARTED LISTENING ON PORT ${port}`)
});