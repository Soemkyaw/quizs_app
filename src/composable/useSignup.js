import { auth, createUserWithEmailAndPassword, db, updateProfile } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { ref } from "vue";

let error = ref("");

let createAccount = async (dName,email,password) => {
  try {
    let res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!res) {
      throw new Error("Could not signup new user...");
    }
    await updateProfile(res.user, {
      displayName: dName,
    });
    let docRef = doc(db, "user", res.user.uid);
    let data = {
      email: email,
      displayName: dName,
      score: 0
    }
    await setDoc(docRef,data)

    return res;
  } catch (err) {
      error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
