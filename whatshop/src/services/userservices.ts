import axios from 'axios';
import { User } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { MongoClient } from "mongodb";

const baseUrl = process.env.REACT_APP_BASE_URL || ""
export async function GetAllUsers(): Promise<any[]> {
    return (await axios.get(`${baseUrl}/users`)).data 
  }

// getProfile () - get profile by id
export async function getProfile(userId: string): Promise<User> {
  const db = getFirestore();
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    return userDoc.data() as User;
  } else {
    throw new Error("User not found");
  }
}

//make profile () - creates a profile send to mongodb
const mongoUrl = "mongodb://localhost:3000";
const dbName = "myDatabase";
const collectionName = "users";

export async function makeProfile(user: User): Promise<void> {
  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne(user);
  } finally {
    await client.close();
  }
}