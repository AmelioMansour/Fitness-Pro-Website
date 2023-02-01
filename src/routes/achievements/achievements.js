//ES6 import syntax for mongostuff, please dont alter
const mongo = import("mongodb");
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
import bodyParser, { json } from 'body-parser';
import { request } from 'express';


export let result = '';
export async function POST({ request, response }) {
    const body = await request.json();

    const collection = client.db('FitnessPro').collection('Achievemnts');


    const result = await collection.find({}).toArray();

    console.log(result);
    console.log(UserID);
    
    
    return new Response(result)
}