//ES6 import syntax for mongostuff, please dont alter
const mongo = import("mongodb");
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
import bodyParser, { json } from 'body-parser';
import { request } from 'express';



export async function POST({ request, response }) {


    const collection = client.db('FitnessPro').collection('Achievements');
    const result = await collection.find({}).toArray();
    let passing = []

    result.forEach(PrintItem => {
        passing.push(PrintItem.item);

    })
    console.log(passing)

    return new Response(JSON.stringify(passing))
}