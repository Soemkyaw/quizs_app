<template>
  <!-- <div v-if="currentUser"> -->
    <div class="flex flex-col bg-white w-72 h-48 rounded-md py-4 px-6 border">
          <h3 class="text-center font-bold text-xl text-gray-800 pb-3">{{ userDetail.displayName }}</h3>
           <div class="flex gap-2 text-sm text-gray-500 pb-3">
              <p class="">Email:</p>
              <p class=" text-gray-500">{{ userDetail.email }}</p>
          </div>
          <div class="flex gap-2 text-sm text-gray-500 border-b pb-2">
              <p class="">Score:</p>
              <p class=" text-green-500">{{ userDetail.score }} <span class="text-gray-500">pts</span></p>
          </div>
          <div class="flex justify-around items-center py-3 mt-2">
              <div class="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
                <svg class="w-6 stroke-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                <button @click="logout" class="font-semibold text-sm text-red-700">Log out</button>
              </div>
          </div>
        </div>
  <!-- </div> -->
</template>

<script>
import useLogout from '@/composable/useLogout';
import { useRouter } from 'vue-router';

export default {
  props: ["userDetail"],
  setup(props) {
    let userDetail = props.userDetail;
    let router = useRouter()

    let { error, accountLogout } = useLogout();
    let logout = async() => {
      await accountLogout();
      router.push("/")
    }

    return {userDetail,logout}
  }
}
</script>

<style>

</style>