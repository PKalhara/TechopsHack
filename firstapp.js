const highlight = require('highlight.js');
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
var bodyparser = require('body-parser');
//var Items = require("./models/Items");
app.use(express.static("./app"));
const wappalyzer = require('wappalyzer');
const fs = require('fs');


var connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password : ''
});

//connection.query('USE test');

app.set('port',3000);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'C:\projects\New folder (2)\InterviewUI\views\my_file.json')));

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

app.listen(app.get('port'));
console.log('~~~Server Running on port localhost:'+app.get('port')+'~~~');