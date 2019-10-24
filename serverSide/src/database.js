var express = require('express');
var hostname = 'localhost';
var port = 3000;
var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
var urlmongo = "mongodb://127.0.0.1:27017/meetupdb";
mongoose.connect(urlmongo, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var memberSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    company_name: String,
    address: String,
    city:String,
    county:String,
    state:String,
    zip:String,
    phone1:String,
    phone2:String,
    email:String,
    web:String
});
var Member = mongoose.model('members', memberSchema);
var myRouter = express.Router();
myRouter.route('/')
    .all(function(req,res){
        res.json({message : "Bienvenue sur notre API ", methode : req.method});
    });

myRouter.route('/members')
    .get(function(req,res){
        Member.find(function(err, members){
            if (err){
                res.send(err);
            }
            res.json(members);
        });
    })
    .post(function(req,res){
        var member = new Member();
        member.fist_name = req.body.first_name;
        member.last_name = req.body.last_name;
        member.address = req.body.address;
        member.company_name = req.body.company_name;
        member.city = req.body.city;
        member.county=req.body.county;
        member.state=req.body.state;
        member.zip=req.body.zip;
        member.phone1=req.body.phone1;
        member.phone2=req.body.phone2;
        member.email=req.body.email;
        member.web=req.body.web;
        member.save(function(err){
            console.log (err);
            if(err){
                res.send(err);
            }
            res.json({message : 'le participant est maintenant stocké en base de données'});
        });
    });
app.use(myRouter);
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
