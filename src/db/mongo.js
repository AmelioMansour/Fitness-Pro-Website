import {MongoClient} from 'mongodb';
 

const client = new MongoClient('mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority')

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db()