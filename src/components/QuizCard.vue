<template>
  <div v-if="quiz" class=" flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class=" mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <h1 class=" p-5">{{ quiz.question }}</h1>
            </div>
            <div class="p-6  grid grid-cols-2 gap-5">
              <div class=" border border-gray-400 p-5 rounded-xl hover:border-green-500 hover:text-green-500">
                Lorem ipsum dolor sit amet
              </div>
              <div class=" border border-gray-400 p-5 rounded-xl hover:border-green-500 hover:text-green-500">
                Lorem ipsum dolor sit amet
              </div>
              <div class=" border border-gray-400 p-5 rounded-xl hover:border-green-500 hover:text-green-500">
                Lorem ipsum dolor sit amet
              </div>
              <div class=" border border-gray-400 p-5 rounded-xl hover:border-green-500 hover:text-green-500">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div class="p-6 pt-0">
              <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
              </button>
            </div>
            <div v-if="quiz" class="bg-red-300 text-white">
              {{ quiz }}
            </div>
            <div v-for="quiz in quizzes" :key="quiz.id">
              <h1>{{ quiz.correct_answer }}</h1>
            </div>
          </div>
</template>

<script>
import getQuizzes from '@/composable/getQuizzes';
import { onMounted, ref, watch } from 'vue';

export default {
  setup(props) {
    let quiz = ref(null);
    let answers = ref(null);
    let { quizzes, fetchQuizzes } = getQuizzes();

    onMounted(() => {
      fetchQuizzes();
    })
    watch(quizzes, () => {
      let randomIndex = Math.floor(Math.random() * quizzes.value.length);
      quiz.value = quizzes.value[randomIndex];
      // answers.value = quiz.value["incorrect_answers"];
      // answers.value.push(quiz.value["correct_answer"])
      let all_answers = quiz.value.incorrect_answers.concat(quiz.value.correct_answer);
      console.log(all_answers);
    });

    watch(answers, () => {
      console.log(answers.value);
    })
      
    return {quizzes,quiz}
  }
}
</script>

<style>

</style>