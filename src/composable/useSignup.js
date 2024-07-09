import { auth, createUserWithEmailAndPassword, updateProfile } from "@/firebase/config";
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
      return res;
  } catch (err) {
      error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
