const express = import('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors());

app.use(express.static('public'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
   res.console("sent to index")
});
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});

app.post("/createaccount/", (req, res) => {
   const collection = client.db('FitnessPro').collection('Users');
   // perform actions on the collection object
   const post = {
      "FirstName": req.body.first,
      "LastName": req.body.last,
      "Username": req.body.user,
      "Password": req.body.pass
   }
   collection.insertOne(post);
   client.close();

});