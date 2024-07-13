import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

let currentUser = ref(auth.currentUser);
onAuthStateChanged(auth, (_user) => {
  currentUser.value = _user;
});


let getUser = () => {
    return { currentUser };
}

export default getUser
