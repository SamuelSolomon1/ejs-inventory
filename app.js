// const express = require('express');
// const app = express();
// app.get('/', (req, res) => { //we define the path
//     let today = new Date();
//     let dayToday = today.getDay(); //today.getDay is JS function

//     if(dayToday === 6 || dayToday ===0){
//         res.send("Happy Weekend!");
//     } else{
//         res.send("Get up and code!");
//     }
// });

// app.listen(8000, () => {
//     console.log("Server started on port 8000");
// });


// const express = require('express');
// const app = express();
// app.get('/', (req, res) => { //we define the path
//     let today = new Date();
//     let dayToday = today.getDay(); //today.getDay is JS function

//     if(dayToday === 6 || dayToday ===0){
//         res.send("Happy Weekend!");
//     } else{
//         res.send("Get up and code!");
//         // res.sendFile(__dirname + "/index.html"); //added res
//     }
// });
// app.listen(8000, () => {
//     console.log("Server started on port 8000");
// });


//with EJS

// const express = require (`express`); 
// const app = express();

// // app.set('view engine', 'ejs');
// app.set('views', 'views')
// app.set('view engine', 'ejs')

// app.get('/', (req, res) => { //we define the path the root url '/'
//     let today = new Date();
//     let currentDay = today.getDay(); //today.getDay is JS function
//     var day= "";
//     if(currentDay === 6 || currentDay ===0){
//         day ="Weekend";
//     } else{
//         day ="Weekday";
//     }
//     res.render("list", {myDay: day});
// });

// app.listen(8000, () => {
//     console.log("Server started on port 8000");
// });



//EJS 
// const express = require ('express'); 
// const app = express();

// // app.set('view engine', 'ejs');
// app.set('views', 'views')
// app.set('view engine', 'ejs')

// app.get('/', (req, res) => { //we define the path the root url '/'
//     let today = new Date();
//     let currentDay = today.getDay(); //today.getDay is JS function
//     var day= "";
//     if(currentDay === 6 || currentDay ===0){
//         day ="Weekend";
//     } else{
//         day ="Weekday";
//     }
//     res.render("list", {myDay: day}); //myDay is key, while day is the value
//     //where did you get the list, its your list folder
    
// });

// app.listen(8000, () => {
//     console.log("Server started on port 8000");
// });


//to dolist that overrides whenever you put new items
// //display to do list
// const express = require('express');
// const app = express();
// //add let item ="";
// let item ="";

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended:true}));

// app.get('/', (req, res) => {

//     let today = new Date();
//     let myDate = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     let day = today.toLocaleDateString("en-US", myDate)
    
//     res.render("list", {myDay: day, addedItem: item});
// }); //addedItem: items

// app.post("/",(req, res) => {
//     item = req.body.addItem;
//     res.redirect("/");
//     console.log(item)
// })


// app.listen(8000, function(){
// console.log("Server started on port 8000")
// })



// //display to do list using array push method
// const express = require('express');
// const app = express();
// //add let item ="";
// let item =[]; //just make it global, don't put it inside app.get

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended:true}));

// app.get('/', (req, res) => {

//     let today = new Date();
//     let myDate = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     let day = today.toLocaleDateString("en-US", myDate)
//     res.render("list", {myDay: day, addedItem: item});
// }); //addedItem: items

// app.post("/",(req, res) => {
//    const newItem = req.body.addItem; //we asign to the variable newItem 
//    item.push(newItem); //add array push
//     res.redirect("/"); 
//     console.log(item)
// })
// app.listen(8000, function(){
// console.log("Server started on port 8000")
// })



//display to do list using array push method and loop
const express = require('express');
const app = express();
//add let item ="";
let items =["Sinigang", "Kare-Kare", "Adobo", "Kaldereta"]; //just make it global, don't put it inside app.get

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public")); //add to make style.css work

app.get('/', (req, res) => {

    let today = new Date();
    let myDate = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", myDate)
    res.render("list", {myDay: day, addedItem: items});
}); //addedItem: items

app.post("/",(req, res) => {
   var item = req.body.addItem; //we asign to the variable newItem //from const to var
   
   items.push(item); //add array push

    res.redirect("/"); 
    console.log(item)

   
})
app.listen(8000, function(){
console.log("Server started on port 8000")
})
//  <% for (let i=0; i<addedItem.length; i++){ %> 
//<li> <%= addedItem [i] %></li>
//<% } %> put this on ejs below li