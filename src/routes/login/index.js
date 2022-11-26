import { json } from 'body-parser';
import { objectID } from 'mongodb'

export async function get(request) {

    const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const collection = client.db('FitnessPro').collection('Users');
    const users = await collection.find().toArray()

    return {
        status: 200,
        body: {
            text: 'text for now'
        }
    }
}

export async function POST(request) {
    console.log("called this function")

    try {
        const { MongoClient, ServerApiVersion } = require('mongodb');
        const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        const collection = client.db('FitnessPro').collection('Users');

        const post = JSON.parse(request.body)
        collection.insertOne(post)
        console.log("Got here too")

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

export async function pull(request) {

}
export async function del(request) {

}
