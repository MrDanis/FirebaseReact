import { db } from "../firebase-configue";
import {collection,getDocs} from "firebase/firestore";

const userCollectionRef = collection(db,"users");
export const getAllUsers= async()=>{
    let users=[]
    const data = await getDocs(userCollectionRef);
    data.docs.map((doc)=>({
    //    users.push(doc)
    }));
}
