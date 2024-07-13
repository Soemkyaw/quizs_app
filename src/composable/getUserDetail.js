import { db } from "@/firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";
import { ref } from 'vue';

let userDetail = ref(null);

let load = async (id) => {
  try {
    let docRef = doc(db, "user", id);
    let snapDoc = await getDoc(docRef);
    if (snapDoc.exists()) {
      userDetail.value = snapDoc.data();
    } else {
      throw new Error("Could not find user data...");
    }
  } catch (err) {
    console.log(err.message);
  }
};


let getUserDetail = () => {
    return { userDetail,load };
}

export default getUserDetail;