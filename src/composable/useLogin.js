import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

let error = ref("");
let loginAccount = async (email,password) => {
  try {
    let res = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!res) {
      throw new Error("Could not login account...");
    }
    return res;
  } catch (err) {
      error.value = err.message;
  }
};

let useLogin = () => {
  return { error, loginAccount };
};

export default useLogin;
