const mongo = import("mongodb");
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const databasename = 'FitnessPro';
MongoClient.connect(uri).then((client) => {
  
    const connect = client.db(databasename);
  
    // Connect to collection
    const collection = connect
            .collection("Achievements");
  
    collection.find({}).toArray().then((ans) => {
        console.log(ans);
    });
        }).catch((err) => {
          
            // Printing the error message
    console.log(err.Message);
})