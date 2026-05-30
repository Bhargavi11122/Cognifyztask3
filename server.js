const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
const userStorage = [];
app.get('/',(req,res)=>{
    res.render('index',{allUsers: userStorage});
});
app.post('/submit',(req,res)=>{
    const user=req.body.username;
    if (!user || user.trim() === ""){
        return res.render('index',{ error: "DO NOT LEAVE IN BLANK!",
            allUsers:userStorage
        });
    }
    userStorage.push(user.trim());
    console.log('users:',userStorage);
    res.render('index',{allUsers: userStorage});
});
app.listen (3000,()=>{
    console.log(`server runs here :http://localhost:3000`);
});