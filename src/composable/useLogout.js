import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { ref } from "vue"

let error = ref(null);

let accountLogout = async() => {
    try {
        await signOut(auth);
        
    } catch (err) {
        error.value = err.message;
    }
}

let useLogout = () => {
    return {error, accountLogout}
}

export default useLogout