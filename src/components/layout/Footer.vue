<template>
  <footer class="z-10 border-t-2 border-t-white bg-primary mt-20">
    <div
      class="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="text-3xl font-bold flex items-center text-secondary">Diary Face</div>
      <div class="h-0.5 w-full md:w-0 md:h-8 bg-white opacity-20 md:mx-6"></div>
      <div class="text-sm flex items-center text-secondary">
        © {{ new Date().getFullYear() }} Diary Face. All rights reserved.
      </div>
    </div>
  </footer>
</template>
