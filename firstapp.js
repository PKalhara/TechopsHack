var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
var bodyparser = require('body-parser');
//var Items = require("./models/Items");
app.use(express.static("./app"));
const wappalyzer = require('wappalyzer');
const fs = require('fs');

//const PowerShell = require("powershell");
//let ps = new PowerShell("echo 'powershell is awesome'");




var connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password : ''
});

//connection.query('USE test');

app.set('port',3000);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'/home/prageethkalhara/Projects/projects/hack/TechopsHack')));

app.use(bodyparser.urlencoded({ extended: false }));

app.get('/',function(req,res){
	  res.sendfile('app/urls.html');
});

app.get('/an/:url',function(req,res){
    
	var url="";
    
    if(req.params.url.indexOf("localhost") > -1) {
        url="http://"+req.params.url;
    }else{
        url="https://"+req.params.url;
    }
	console.log(url);
	 wappalyzer.run([url, '--quiet'], function(stdout, stderr) {
	if ( stdout ) {
		//process.stdout.write(stdout);
		var stream = fs.createWriteStream("my_file.json");
        stream.once('open', function(fd) {
          stream.write(stdout);
          stream.end();
        });
        
        res.status(200).send("success");
	}

	if ( stderr ) {
		process.stderr.write(stderr);
	}
	
});
	  
});

app.get('/additem',function (req,res){
	res.render('additem');
});

app.get('/getProgress',function (req,res){
	console.log('Called');
});

app.post('/add', function(req,res){
	
	var data = {
		itemno: req.body.itemno,
		name: req.body.name,
		quantity: req.body.quantity
	};
	
	connection.query('INSERT INTO item SET ?', data, function(err,res){
	if(err)throw err;
	});
	
	res.redirect('/');
});


app.get('/delete1/:id', function (req,res){
	var tid=req.params.id;
	connection.query('DELETE FROM item where itemno=?',[tid], function(err,rows){
		if(err)
			console.log('Error Selecting ',err);
	});
	
	res.redirect('/');
});


//////////////////////////////////////

app.get('/m',function(req,res){
	Items.getAllItems(function(err,students){
		if (err){
			console.log(err);
		}

		res.render('shoppingcart',{items: students});
	});
	
});

app.post('/addItemM',function(req,res){
	var newItem = new Items({
		itemno : req.body.name,
		name : req.body.name,
		quantity: req.body.quantity
	});

	Items.addItem(newItem,function (err,student) {
		if (err){
			console.log(err);
		}

		res.redirect('/m');
	});
});

app.get('/removeStudent/:id', function(req,res){
	
	console.log(req.params.id);
	Items.deleteStudent(req.params.id,function(err,student){
		if (err){
			console.log(err);
		}

		res.redirect('/m');
	});
});

app.get('/execute/:scriptParam1/:scriptParam2/:scriptParam3/:scriptParam4', function(req,res){

	console.log(req.params.scriptParam1);
	console.log(req.params.scriptParam2);
	console.log(req.params.scriptParam3);
	console.log(req.params.scriptParam4);


   const Shell = require('node-powershell');

   const ps = new Shell({
     executionPolicy: 'Bypass',
     noProfile: true
   });

   ps.addCommand('/home/prageethkalhara/Projects/projects/hack/TechopsHack/power.ps1 '+req.params.scriptParam1+' '+req.params.scriptParam2+' '+req.params.scriptParam3+' '+req.params.scriptParam4);

   ps.invoke()
   .then(output => {
     console.log(output);
     console.log("Doneeeee")
     res.status(200).send("success");
   })
   .catch(err => {
   res.status(200).send("failed");
     console.log(err);
   });

});

app.listen(app.get('port'));
console.log('~~~Server Runnign on port localhost:'+app.get('port')+'~~~');