    import { MongoClient } from "mongodb";

    if (!process.env.MONGO_URI) {
    throw new Error("Please add Mongo URI to .env");
    }

    const uri = process.env.MONGO_URI;
    const options = { maxPoolSize: 10 }; //Connection pooling to reuse coonnections

    const client = new MongoClient(uri, options);
    let clientPromise: Promise<MongoClient>;

    export function connectDB() {
        if(!clientPromise) {
            clientPromise = client.connect();
        }
        return clientPromise;
    }



