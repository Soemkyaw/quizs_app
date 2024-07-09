<template>
  <div class="getStart">
    <img
      class="fixed top-18 left-0 w-full h-full object-cover -z-50"
      src="../assets/image/que.jpg"
      alt=""
    />
    <div class="absolute inset-0 flex items-center justify-center -z-20">
      <div class="backdrop-blur-md bg-white/50 dark:bg-gray-800 dark:bg-opacity-80  p-10 rounded-md lg:max-w-2xl sm:max-w-sm xs:max-w-xs w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // props: ['getStart'],
  // setup(props, context) {
  //   let currentGetStart = ref(props.getStart)
  //   let getStartHandel = () => {
  //     currentGetStart.value = !currentGetStart.value;
  //     context.emit("updateGetStart",currentGetStart.value)
  //   }

  //   return {getStartHandel}
  // }
  
};
</script>

<style>

</style>