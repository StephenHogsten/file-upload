var path = require('path');
var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads'})

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/get-file-size', upload.single('filename'), function(req, res){
    res.json({size: req.file.size});
    res.end();
});

app.listen(8080, function(){
    console.log('new listener');
});
