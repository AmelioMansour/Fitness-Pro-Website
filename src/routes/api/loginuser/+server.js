//ES6 import syntax for mongostuff, please dont alter
const mongo = import("mongodb");
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
import bodyParser, { json } from 'body-parser';
import { request } from 'express';



export async function POST({ request }) {
    const body = await request.json();



    const collection = client.db('FitnessPro').collection('Users');
    
    console.log(body);

   

    return new Response()



}