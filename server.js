const express = require('express');
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
  return res.send("Hye There Welcome To The Server!")
})

app.get('/assistant/greet/',async(req,res)=>{

  try{
  const name = req.query.name;  
  if(!name){

    return res.status(400).json({message:"Name is required"})    
  }
  const currentDay = new Date().getDay();
  const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`
  let dayMessage = "Have a wonderful day!"

  if(currentDay ==1){
    dayMessage = "Happy Monday! Start your week with energy!";
  }
  else if(currentDay == 5){
    dayMessage = "It's Friday! The weekend is near!";
  }
  return res.json({welcomeMessage,dayMessage});

}
catch(error){
  return res.status().send({error:"Error Smtg has occured!!"})
}

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
// const currentDay = new Date().getDay();

