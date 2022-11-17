//From website below
//https://www.knowledgehut.com/blog/web-development/create-index-node-js
// Import essential libraries 
import express from 'express';
const app = express();
import path from 'path';
const router = express.Router();
// Setup essential routes 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.render("/src/app.js");
    //__dirname : It will resolve to your project folder. 
});
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

//add the router 
app.use('/', router);
app.listen(process.env.PORT || 3000);
console.log('Running at Port 3000');