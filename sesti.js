//preuzeti vic sa stranica: https://v2.jokeapi.dev/joke/Any?format=json

const express=require("express");
const app=express();
const PORT=3000;

const axios=require("axios");


app.get("/vic", async(req, res)=>
{
    try
    {
        const odgovor=await axios.get("https://v2.jokeapi.dev/joke/Any?format=json");
        res.json({sala:odgovor.data.setup+" "+odgovor.data.delivery});
    }
    catch(error)
    {
        res.status(500).json({error:"Dogodila se greška"});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});