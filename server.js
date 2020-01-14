var exp = require('express');
var app = exp(); //constructor
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add new task to list
app.post('/notification', (req, res) => {
    console.log(req.body);
    res.json({"result": "SUCCESS", "msg": "OK"})
})

app.get('/', (req, res) => {
    console.log('ok');
    res.json("ok")
})


app.get('/ping', (req, res) => {
    console.log('ok');
    res.json("ok")
})

const APP_PORT = (process.env.PORT || 5000)

console.log(APP_PORT);

app.listen( APP_PORT, () => console.log(`LISTENING ON PORT ${APP_PORT}`)); 
