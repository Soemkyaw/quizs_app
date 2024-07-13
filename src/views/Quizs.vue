<template>
  <div v-if="userDetail" class=" pt-20 pb-20 bg-gray-100 dark:bg-gray-600 dark:text-white/80">
    <div class="quiz mx-auto">
      <div class="mb-20 text-center mt-10">
        <div class="text-3xl font-thin tracking-widest text-gray-600 mb-3">
          Pick up a predefined quiz!
        </div>
        <div class="text-center text-sm text-gray-400">
          Test your knowledge on a specific topic with our predefined quizzes!
        </div>
      </div>
      <!-- <div class="bg-black bg-opacity-70 mx-auto text-white p-20 rounded-md flex justify-center"> -->
      <div class="grid xl:grid-cols-4  gap-5 lg:grid-cols-3">
        <div class="  xs:p-5 rounded-md  xl:col-span-3 lg:col-span-2">
          <QuizCard></QuizCard>
        </div>
        <div class="col-start-auto xs:p-5 xs:mx-auto">
          <ShowScore :userDetail="userDetail"></ShowScore>
        </div>
        <div>
          <!-- <h1>{{ userDetail }}</h1> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowScore from '../components/ShowScore'
import QuizCard from '../components/QuizCard'
import getUser from '@/composable/getUser';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { onMounted, ref } from 'vue';
import getUserDetail from '@/composable/getUserDetail';


export default {
  components: {
    ShowScore, QuizCard
  },
  setup(props) {
    let { currentUser } = getUser();
    let { userDetail, load } = getUserDetail();

    onMounted(() => {
      if (currentUser.value) {
        load(currentUser.value.uid)
      }
    })
    
    return {userDetail }
  }
};
</script>

<style>
.quiz {
  max-width: 1200px;
  /* height: 100vh; */
}
</style>