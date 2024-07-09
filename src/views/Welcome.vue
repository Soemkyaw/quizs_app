<template>
  <GettingStart>
    <div v-if="!getStart">
      <GetStartContent :getStart="getStart" @updateGetStart="updateGetStart"></GetStartContent>
    </div>
    <div v-else>
      <div v-if="showLogin">
        <Login></Login>
        <p class="mt-10 text-center text-sm text-gray-500 dark:text-white/50">
            Not a member?
            <span @click="showLogin=!showLogin" class=" cursor-pointer underline underline-offset-4 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-red-600 dark:hover:text-red-500">Sign up</span> here
        </p>
      </div>
      <div v-else>
        <Signup></Signup>
        <p class="mt-10 text-center text-sm text-gray-500 dark:text-white/50">
            Alredy have account?
            <span @click="showLogin=!showLogin" class=" cursor-pointer underline underline-offset-4 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-red-600 dark:hover:text-red-500">Log in</span> here
        </p>
      </div>
    </div>
  </GettingStart>
</template>

<script>
import Signup from '../components/Signup'
import Login from "../components/Login";
import GetStartContent from "../components/GetStartContent";
import GettingStart from "../components/GettingStart";
import { ref } from "vue";
export default {
  components: {
    Signup,
    Login,
    GetStartContent,
    GettingStart,
  },
  setup(props) {
    let getStart = ref(false);
    let showLogin = ref(true);

    let updateGetStart = (value) => {
      getStart.value = value
    }

    return { getStart,showLogin,updateGetStart };
  },
};
</script>

<style>
</style>