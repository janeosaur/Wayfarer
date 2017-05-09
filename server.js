'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = require('./models');
var app = express(),
    router = express.Router();

// set port to env or 3000
var port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!
var dbUser = process.env.MLAB_DBUSER
var dbPassword = process.env.MLAB_DBPASSWORD
var databaseUrl = 'mongodb://' + dbUser + ':' + dbPassword + '@ds133331.mlab.com:33331/mywayfarer'
// mongoose.connect(databaseUrl)

//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});  //  app.use(function

//use router config when we call /API
app.use('/api', router);

//set route path and init API
router.get('/', function(req,res) {
  res.json({message: 'API Initialized for Wayfarer !!!'});
});

// delete all comments
router.route('/nuke').get(function(req,res){
  db.Comment.remove(function(err,succ){
  res.json(succ);
  });
});

//adding the /comments route to our /api router
router.route('/comments')
  .get(function(req, res) {
    db.Comment.find(function(err, comments) {
      if (err) {
        res.send(err);
      }
      res.json(comments);
    });
  })

  .post(function(req, res) {
    var post = new db.Comment();
    post.name = req.body.name;
    post.text = req.body.text;

    post.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'travel tip successfully added!' });
    });
  });

router.route('/comments/:id')
  .delete(function(req,res) {
    db.Comment.remove({_id:req.params.id}, function(err, comment) {
      if (err) {
        res.send(err);
      } res.json({message: 'comment has been deleted'})
    })
  })

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
