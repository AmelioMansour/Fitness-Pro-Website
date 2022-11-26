import express from 'express';

var app = express()
const port = process.env.PORT || 5000;
const cors = import('cors');
var path = import('path');
var bodyParser = import('body-parser')

var mongo = import("mongodb");
var { MongoClient, ServerApiVersion } = import('mongodb.js');


app.use(cors());

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    res.console("sent to index")
});
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});

// app.post("/createaccount",bodyParser.urlencoded({extended: false}) ,(req, res, next) => {
//    console.log(req);
//    // perform actions on the collection object
//    const post = {
//       FirstName: bodyParser.urlencoded()
//       // "LastName": req.body.last,
//       // "Username": req.
//       // "Password": req.body.pass
//    }
//    mongo.connect
//    const collection = client.db('FitnessPro').collection('Users');
//    collection.insertOne(post);
//    console.log("item inserted");
//    client.close();


//    res.redirect("/");
// });

async function main() {

    const uri = "mongodb+srv://fitnesspro:<MYPASSWORD>@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    try {
        await client.connect();
        await listDatabases(client);
        console.log("connected successfully");
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }

}



export async function POST(request) {


    try {
        const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = "mongodb+srv://fitnesspro:<MYPASSWORD>@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        const collection = client.db('FitnessPro').collection('Users');

        const post = JSON.parse(request.body)
        collection.insertOne(post)


        return {
            status: 200,
            body: {
                status: 'success'
            }
        }
    } catch (err) {
        return {
            status: 500,
            body: {
                error: "A server error occured"
            }
        }
    }


}
