import { json } from 'body-parser';
import { objectID } from 'mongodb';
import { Db as MongoDb, MongoClient } from 'mongodb';


let mongodb = require('mongodb');

// export async function get(request) {

//     const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//     const collection = client.db('FitnessPro').collection('Users');
//     const users = await collection.find().toArray()

//     return {
//         status: 200,
//         body: {
//             text: 'text for now'
//         }
//     }
// }

export async function POST(request) {




    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://fitnesspro:<MYPASSWORD>@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const collection = client.db('FitnessPro').collection('Users');

    const post = JSON.parse(request.body)
    collection.insertOne(post)

    return new Response()



}







// export async function pull(request) {

// }
// export async function del(request) {

// }
