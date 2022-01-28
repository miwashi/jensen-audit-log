const express = require('express')
const auditLog = require('audit-log')

const port = process.env.PORT || 3000

auditLog.addTransport("console");
app = express()

app.get('/', function(req,res){
    //res.render('home')
    auditLog.logEvent('user id or something', 'maybe script name or function', 'what just happened', 'the affected target name perhaps', 'target id', 'additional info, JSON, etc.');

    res.send("Hello World")
});

app.listen(port , ()=>{
    console.log(`STARTED LISTENING ON PORT ${port}`)
});