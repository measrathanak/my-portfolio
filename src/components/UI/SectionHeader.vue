<template>
  <div class="relative flex flex-col items-center py-12">
    <div
      class="absolute inset-0 flex justify-center items-center pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="w-3/4 max-w-3xl h-32 rounded-full bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#f472b6] opacity-30 dark:opacity-20 blur-2xl animate-gradient"
      ></div>
    </div>
    <h2
      class="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-center"
      data-aos="fade-up"
    >
      {{ title }}
    </h2>
  </div>

  <div class="relative">
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#000c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    >
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary"
        data-aos="fade-up"
      >
        {{ title }}
      </h2>
    </header>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-move 6s linear infinite alternate;
}
</style>
