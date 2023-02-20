const express = require('express');
const PORT = 5000;
const app= express();
const todos=["Bharat","Naresh"];
//end point
app.get("/todos",(req,res)=>{
    return res.status(200).json({
        data:todos,
        error:null
    })
})
app.listen(PORT, (err)=>{
    if(err) throw err;
    else console.log(`Work on ${PORT}`);
})
