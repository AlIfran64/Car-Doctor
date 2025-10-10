import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lds4lih.mongodb.net/?retryWrites=true&w=majority`;

let client;
let db;

export const collectionNameObj = {
  servicesCollection: "services",
  userCollection: "users",
  checkoutCollection: "checkout",
};

export default async function dbConnect(collectionName) {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db("carDoctorDb");
  }
  return db.collection(collectionName);
}
