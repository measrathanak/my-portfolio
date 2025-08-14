<template>
  <section
    data-aos="zoom-in"
<<<<<<< HEAD
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
            src="/src/assets/images/heropicture.JPG"
            alt="Hero Image"
            width="256"
            height="256"
            loading="lazy"
            class="object-cover w-full h-full border-2 border-blue-350 rounded-full shadow-lg"
          />
        </div>
      </div>
    </main>
=======
    class="flex justify-center items-center dark:text-white min-h-screen mt-20 lg:mt-0"
  >
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#000c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>

    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#000c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>
    <main class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8">
      <header class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          👋 {{ $t('Hi') }}, {{ $t('I_M') }}
          <span class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary">{{
            $t('Panharith')
          }}</span>
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae eaque ex hic
          quidem! Quasi enim at aut cumque natus rem blanditiis porro facere? Quisquam cumque
          deleniti porro sit blanditiis!
        </p>
        <div class="mt-6 flex justify-center lg:justify-start">
          <Button label="Hire me" />
          <a
            href=""
            class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 dark:border-secondary hover:scale-105 bg-white dark:bg-transparent flex items-center justify-center text-primary border-primary"
          >
            <Icon icon="line-md:download-loop" class="text-3xl" />
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </header>
      <aside
        class="container flex justify-center lg:justify-end mt-20 lg:mt-[-300px] items-center flex-wrap"
      >
        <figure
          class="card relative m-[30px] md:w-[420px] md:h-[420px] md:before:w-[450px] md:before:h-[450px] w-[280px] h-[350px] before:w-[300px] before:h-[300px]"
        >
          <div
            class="relative w-full h-full bg-cover transform translate-x-[10px] translate-y-[10px]"
          >
            <img
              src="@/assets/images/heropicture.png"
              alt="Hero Picture"
              class="min-w-1/2"
              loading="lazy"
            />
          </div>
        </figure>
      </aside>
    </main>
    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="1"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
      </filter>
    </svg>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
