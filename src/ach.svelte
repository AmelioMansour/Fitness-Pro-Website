<!-- <script>
    const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("FitnessPro");
    const coll = db.collection("Achievements");
    // find code goes here
    const cursor = coll.find({}).toArray;
    // iterate code goes here
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
const result = [cursor];
</script>

<p>{result}</p> -->