//make sure you run "npm i" to be sure you have all correct dependencies installed! 
//Tests entering value into our mongoDB
//
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// const collection = client.db("FitnessPro").collection("Users");
// // perform actions on the collection object
//  post = { "_id_": "112" }
//  collection.insertOne(post);

// client.close();

//start of mongdb connection stuff. This part will be the same everytime interacting with db
function addUser(f, l, u, p) {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri =
        'mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });
    //end of mongodb connection stuff

    const collection = client.db('FitnessPro').collection('Users');
    // perform actions on the collection object
    const post = {
        "FirstName": f,
        "LastName": l,
        "Username": u,
        "Password": p
    }
    collection.insertOne(post);
    client.close();
}

addUser("billy","Jones","testuser","password123!")