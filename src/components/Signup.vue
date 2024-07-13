<template>
  <div class=" sm:mx-auto sm:w-full sm:max-w-sm font-mono">
        <form @submit.prevent="signUpForm" class="space-y-6">
            <div class=" text-center text-gray-700 dark:text-white font-bold text-xl tracking-widest">QqizWix Sign Up</div>
            <div>
                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Display Name</label>
                <div class="mt-2">
                    <input v-model="displayName" type="text" placeholder="Enter display name..." class="block w-full px-2 rounded-md box-border border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</label>
                <div class="mt-2">
                    <input v-model="email" type="email" autocomplete="email" placeholder="Enter your email..." class="block w-full px-2 rounded-md box-border border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
                <div class="mt-2">
                    <input v-model="password" type="password" autocomplete="current-password" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class=" text-red-500 text-xs">{{ error }}</div>

            <div>
                <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/composable/useSignup';
import { useRouter } from 'vue-router';
export default {
    setup(props) {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let router = useRouter()
        let {error,createAccount} = useSignup()

        let signUpForm = async() => {
            let res = await createAccount(displayName.value, email.value, password.value)
            if (res) {
                router.push({ name: "quizs" });
            } else {
                console.log(error);
            }
        }

        return {displayName,email,password,signUpForm,error}
    }
}
</script>

<style>

</style>