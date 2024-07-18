<template>
  <div v-if="quiz" class=" flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class=" mx-4 -mt-6 flex items-center h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <h1 class=" p-5">{{ quiz.question }}</h1>
            </div>
            <div v-if="answers" class="p-6  grid grid-cols-2 gap-5">
              <div 
                v-for="answer in answers" 
                :key="answer" 
                @click="!submitted && answerHandler(answer)" 
                class=" border border-gray-400 p-5 rounded-xl  hover:text-blue-500 hover:border-blue-500" 
                :class="{
                  'border-2 border-blue-600  text-blue-600': selectedAnswer == answer,
                  'cursor-not-allowed opacity-50': submitted
                }"
                >
                {{ answer }}
              </div>
            </div>
            <div class=" p-6 text-center">
              <div v-if="falseAnswer" class=" text-sm text-red-500">{{ selectedAnswer }} is not answer.</div>
              <div v-if="trueAnswer" class=" text-md text-green-600">🎉 Congratulations ! 🎉 {{ selectedAnswer }} is correct and you got 1 score</div>
            </div>
            <div v-if="!submitted" class="p-6 pt-0 text-center">
              <button 
                @click="submitAnswer" data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Submit Answer
              </button>
            </div>
            <div v-if="submitted" class="p-6 pt-0 text-center">
              <button  data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Next question
              </button>
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
    let selectedAnswer = ref(null);
    let submitted = ref(false);
    let falseAnswer = ref(false);
    let trueAnswer = ref(false);

    onMounted(() => {
      fetchQuizzes();
    })
    watch(quizzes, () => {
      let randomIndex = Math.floor(Math.random() * quizzes.value.length);
      quiz.value = quizzes.value[randomIndex];
      answers.value = quiz.value.incorrect_answers.concat(quiz.value.correct_answer);
    });

    let answerHandler = (answer) => {
      selectedAnswer.value = answer;
    }

    let submitAnswer = () => {
      submitted.value = true
      if (selectedAnswer.value == quiz.value.correct_answer) {
        trueAnswer.value = true;
        console.log("your answer is true");
      } else {
        falseAnswer.value = true;
      }
    }
    // watch(answers, () => {
    //   console.log(answers.value);
    // })
      
    return {quizzes,quiz,answers,answerHandler,selectedAnswer,submitAnswer,submitted,falseAnswer,trueAnswer}
  }
}
</script>

<style>

</style>