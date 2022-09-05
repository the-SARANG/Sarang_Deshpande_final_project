const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var nodemailer = require('nodemailer');

app.use(bodyParser.json());//is use for teking data into json format
app.use(express.static('public'));// send static html page
app.use('/public',express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true})) //convert into html format
//firstdb
mongoose.connect('mongodb://localhost:27017/firstdb',{useNewUrlParser:true,useUnifiedTopology:true}); // connect to MongoDB database server
var db = mongoose.connection;// establish connection to MongoDB
db.on('error',()=>{console.log('Error in database connection');});
db.once('open',()=>{console.log('database is open for once');});


app.post('/payment',(req, res)=>{
    var name = req.body.name;
    var sname = req.body.sname;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var checkin_date = req.body.checkin_date;
    var checkout_date = req.body.checkout_date;
    var children = req.body.childrens;
    var adults = req.body.adult;
    var rooms1 = req.body.rooms1;
    var villa = req.body.villa;
    var ws = req.body.ws;
    var num1 = req.body.num1;
    var rentRoom,rentVilla,rentws;
    var total = parseInt("0");
    //condtion for rooms
      if(rooms1 == "Single Room"){
          rentRoom = num1*parseInt("15000");
          total = total + rentRoom;
      }
      if(rooms1 == "Family Room"){
          rentRoom = num1*parseInt("25000");
          total = total + rentRoom;
      }
      if(rooms1 == "Luxary Room"){
          rentRoom = num1*parseInt("50000");
          total = total + rentRoom;
      }
  //condition for villa
      if(villa == "Reef Water Pool Villa"){
          rentVilla = parseInt("100000");
          total = total + rentVilla;
      }
      if(villa == "Tree top Pool Villa"){
          rentVilla = parseInt("150000");
          total = total + rentVilla;
      }
      if(villa == "Beach Pool Villa"){
          rentVilla = parseInt("200000");
          total = total + rentVilla;
      }
    //condition for ws
      if(ws == "Yoga & Mindfulness"){
          rentws = parseInt("2000");
          total = total + rentws;
      }
      if(ws == "Javvu"){
          rentws = parseInt("5000");
          total = total + rentws;
      }
      if(ws == "Fitness"){
          rentws = parseInt("8000");
          total = total + rentws;
      }    
    var data = {
        'name': name,
        'email': email, 
        'phone': phone, 
        'sname': sname,
        'address' : address,
        'checkin_date': checkin_date,
        'checkout_date': checkout_date,
        'rooms1' : rooms1,
        'num1': num1,
        'villa': villa,
        'ws': ws,
        'adults': adults,
        'children': children,
        'TotalRent': total
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log('successfully insert data');
    });
    return res.sendFile(__dirname+'/payment.html')//redirect to success page
})

app.post('/success',(req, res)=>{
    var mobile = req.body.mobile;
    var username = req.body.username;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    const date = dd + '/' + mm + '/' + yyyy;
    var time = today.toLocaleTimeString();
    //var timestamp= sessionStorage.getItem("timestamp");
    
    var paymentInfo = {
        'mobile': mobile, 
        'username': username,
        'date': date,
        'time': time
    }
    db.collection('customer').insertOne(paymentInfo,(err,collection)=>{
        if(err) throw err;
        console.log('successfully insert transaction');
    });
    return res.sendFile(__dirname+'/success.html')//redirect to success page
})

app.post('/subscribe',(req, res)=>{
    var email1 = req.body.email1;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sarangdeshpande7719@gmail.com',
    pass: 'mkguuldrxkxlotgy'
  }
});
var mailOptions = {
  from: 'sarangdeshpande7719@gmail.com',
  to: email1,
  subject: 'Thnaks for Subscribing!!!',
  text: 'We appreciate your trust and want to tell you our Stories and Experiences.You will get all the updates related to our Hotel SunShine, tag us in your photos and we’ll highlight them in our stories.Let’s create some beautiful moments together! Team, Hotel SunShine'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

    //var timestamp= sessionStorage.getItem("timestamp");
    
    var subscribeInfo = {
        'email1': email1
    }
    db.collection('subscription').insertOne(subscribeInfo,(err,collection)=>{
        if(err) throw err;
        console.log('subscription added successfully');
    });
    return res.sendFile(__dirname+"/subscription.html")//redirect to success page
})
// app.get('/success',(req,res)=> {
//     res.set({
//         "Allow-access-Allow-Origin":'*'
//     })
//     return res.sendFile(__dirname+'/signup.html')
// })
app.get('/rooms',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/rooms.html')
})
app.get('/category',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/more.html')
})
app.get('/about',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/about.html')
})
app.get('/contact',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/contact.html')
})
app.get('/reservation',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/reservation.html')
})
app.get('/payment',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/payment.html')
})
app.get('/',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/index.html')
}).listen(4000);
console.log('Starting server on 4000 port');
