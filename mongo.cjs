//make sure you run "npm i" to be sure you have all correct dependencies installed! 
//Tests entering value into our mongoDB
//
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const collection = client.db("FitnessPro").collection("Users");
// perform actions on the collection object
post = { "_id_": "112" }
collection.insertOne(post);

client.close();
