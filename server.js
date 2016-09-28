var express = require('express');
var formidable = require('express-formidable');
 var app = express();
 
 
 
app.use(formidable.parse());
 
 app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});
 
app.post('/upload', function (req, res) {
  res.send(JSON.stringify({"size": parseInt(JSON.stringify(req.body.file.size))}));
});

app.listen(process.env.PORT || 8080)
