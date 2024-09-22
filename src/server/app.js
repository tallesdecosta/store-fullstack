const express = require('express');
app = express();


app.listen(8080, () => {

    console.log('listening');

});



app.get('/', (req, res) => {

    res.send('test');

});

app.post('/account/auth', (req, res) => {

    console.log(req.body);

});