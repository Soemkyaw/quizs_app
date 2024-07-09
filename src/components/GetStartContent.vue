<template>
  <div class=" font-mono">
    <h1
        class="tracking-tighter font-bold lg:text-3xl sm:text-2xl text-xl mb-5 dark:text-white/90"
      >
        QuizWiz - Challenge Yourself:
    </h1>
    <p class=" dark:text-white/75">
        "Step into the world of QuizWiz, where each question is an opportunity
        to learn and grow. Our quizzes cover a wide range of subjects, ensuring
        there's something for everyone. Challenge yourself today and become a
        QuizWiz champion!"
    </p>
    <div class=" text-center mt-8">
      <button
          class="border border-indigo-600 bg-indigo-700 px-3 py-2 text-white/80 font-bold rounded-tl-3xl rounded-br-3xl hover:rounded-tl-none hover:rounded-br-none transition-all duration-500 ease-in-out"
          @click="getStartHandler"
      >
          Getting Started
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['getStart'],
  setup(props, context) {
    let currentGetStart = ref(props.getStart);


    let getStartHandler = () => {
      currentGetStart.value = !currentGetStart.value;
      context.emit("updateGetStart", currentGetStart.value);
    }

    return {getStartHandler}
  }
}
</script>

<style>

</style>