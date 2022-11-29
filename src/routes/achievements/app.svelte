<script>
const morgan = require('morgan');
const mongoose = require('mongoose');
const Achievement = require('achievements');
const { result } = require('lodash');
//create express app

const app = express();


//connect to the mongodb
const dbURI = "mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true}).then((result)=>{
    //listen for requests
app.listen(3000);
}).catch((err) => {
    console.log('there is an error');
})
console.log('something is happening here');
app.set('view engine','ejs');

//middleware & static files

app.use(express.static('public'));
app.use(morgan('tiny'));

app.use((req,res,next) =>{
    console.log('this is just a middleware');
    next();

})

app.get('/',(req,res)=>{
    const Achievements = [
        {title: 'Great News in Science', snippet: 'Lorem ipsum dolar sit amet consectetur'},
    
    ]
    //res.send('<p>Hello World</p>');
    res.render('index',{title:'Home page',Achievements});
})

//mongoose and mongodb sandbox routes

app.get('/all-achievements',(req,res)=>{
    Achievement.find().then((result)=>{
        res.send(result);
    }).catch((err) =>{
        console.log(err);
    })
})

// app.get('/single-achievement',(req,res)=>{
//     Achievement.findById('5fcc5533d6fc7a16db842ef9')
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// app.get('/about',(req,res)=>{
//     res.render('about',{title: 'About Page'});
    
// })

// app.get('/blogs/create',(req,res)=>{
// 	res.render('create',{title:'Create a Blog'});
    
// })

//404 page

app.use((req,res)=>{
    res.status(404).render('404',{title: '404 Page Not Found'});
})

</script>

