<template>
  <section
    data-aos="zoom-in"
    class="relative flex justify-center items-center dark:text-jbl min-h-screen mt-20 lg:mt-0"
  >
    <!-- Background Gradients -->
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#000c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#000c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>

    <main
      class="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-5xl mx-auto p-4 lg:p-5"
    >
      <!-- Text Content -->
      <div
        class="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
      >
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          🫶 {{ $t('Hi') }}, {{ $t('I_M') }}
          <span
            class="text-shadow-blue-600 stroke-blue-600 text-indigo-700-secondary dark:text-blue-600-stroke-secondary"
            >{{ $t('RATHANAK') }}</span
          >
        </h1>
        <p class="text-lg font-KhmerOSSiemreap text-justify">
          {{ $t('intro') }}
        </p>
      </div>
      <!-- Hero Image -->
      <div class="w-full lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0">
        <div
          class="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg border-primary overflow-hidden"
        >
          <img
            src="/src/assets/images/heropicture.png"
            alt="Hero Image"
            width="256"
            height="256"
            loading="lazy"
            class="object-cover w-full h-full border-2 border-blue-350 rounded-full shadow-lg"
          />
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import Button from '@/components/UI/CusButton.vue'
</script>

<style scoped>
.container .card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
}

.container .card:nth-of-type(1)::before {
  filter: url('#wavy1');
}
</style>
