var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

<<<<<<< HEAD
app.listen(process.env.PORT || 8000);
=======
app.listen(process.env.PORT || 8080);
>>>>>>> dev
