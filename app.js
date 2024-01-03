const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb')
const app = express();
const path = require('path')
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

mongoose.set("strictQuery", false);
 //const mongoDB = "mongodb+srv://blessed:modestus45@cluster0.fbmrkpe.mongodb.net/local_library?retryWrites=true&w=majority";
 const mongoDB= "mongodb://127.0.0.1:27017/local_library";


main().catch((err) => console.log(err));
async function main(){
    await mongoose.connect(mongoDB)
    console.log('Connected to monogDB')
}


//setting up the template engine
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug');



main().catch((err)=>console.log(err));
async function main(){
    await mongoose.connect(mongoDB)
}


app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

//catch 404 and forward to error handler
app.use((req, res, next)=>{
    next(createError(404));
});

// error handler
app.use((err, req,res,next)=>{

    //set locals, on;y providing error in develpment
    res.locals.message = err.message;
    res.locals.errors = req.app.get('env')==="development" ? err : {};

    //render the error msg
    res.status(err.status || 500);
    res.render("error")
})


app.listen(3000, ()=>{
    console.log('Server On');
})
module.exports = app;

