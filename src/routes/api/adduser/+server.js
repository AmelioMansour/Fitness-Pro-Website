//ES6 import syntax for mongostuff, please dont alter
const mongo = import("mongodb");
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
import bodyParser, { json } from 'body-parser';
import { request } from 'express';

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

export async function POST({ request }) {
    const collection = client.db('FitnessPro').collection('Users');
    const body = await request.json();
    console.log(body);

    await collection.insertOne(body)

    return new Response()



}







// export async function pull(request) {

// }
// export async function del(request) {

// }
