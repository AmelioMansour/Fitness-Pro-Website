<script>
    
	import Nav from "../nav.svelte";
	//import morgan from "morgan";
	import mongo from "mongodb";
	import express from 'express';
	var router = express.Router();
	import assert from 'assert';




//create express app

// const app = express();


//connect to the mongodb
const dbURI = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";

router.get('/', function(req, res, next){
    res.render('index')
})


router.get('/get-data', function(req, res, next) {
    var resultArray = [];
    mongo.connect(dbURI, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('Achievements').find();
        console.log(cursor);
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);

        }, function() {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});

//module.exports = router;

</script>


<Nav active="achievements"/>
<h1>resultArray</h1>
