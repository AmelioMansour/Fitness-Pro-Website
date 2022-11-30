//ES6 import syntax for mongostuff, please dont alter
const mongo = import("mongodb");
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
import bodyParser, { json } from 'body-parser';
import { request } from 'express';



export async function POST({ request, response }) {
    const body = await request.json();

    const collection = client.db('FitnessPro').collection('Users');


    const result = await collection.find({}).toArray();
    
    let UserID = ''
    result.forEach(allusers => {
        if (body.username == allusers.username) {
            console.log('Username Found')

            if (body.password == allusers.password) {
                UserID = allusers._id.toString();
                console.log("Username found and CorrectPass!")
                //INSERT H1 HERE
                //document.getElementById("Loginsection").style.display="hidden";

            }
            else {
                console.log("UserFound, but wrong password");
            }

        }
        else {
            console.log('wrong');
        }

    })
    console.log(UserID);


    return new Response(UserID)
}
