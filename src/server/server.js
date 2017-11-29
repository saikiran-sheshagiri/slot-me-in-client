import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bluebird from 'bluebird';
import path from 'path';


import router from './routes';

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to the mongodb instance
const mongo_uri = 'mongodb://slotmein:IVJlDRaplDNCsuFEdGvzxkt4jerSpqSHfCoKPBLtlBiPO8834A1HqnymGLZlKMo8bNK87U8567TDvyiQiLai7A==@slotmein.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
// Use bluebird
const mongo_options = { promiseLibrary: bluebird };

mongoose.connect(mongo_uri, mongo_options);
mongoose.connection.on('error', () => {
    console.log('Unable to connect to database');
});

mongoose.connection.once('open', () => {
    console.log('Connected to local instance of the database');
});

//enable cors
app.use(cors());

//mount the routes on api
app.use('/api', router);


//setting middleware
app.use(express.static(path.join(__dirname, 'public'))); //Serves resources from public folder

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(4747, () => {
    console.log(`Example running on at 4747`);
});