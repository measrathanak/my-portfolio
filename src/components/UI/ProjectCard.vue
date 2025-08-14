<template>
  <article
<<<<<<< HEAD
    class="max-w-sm overflow-hidden shadow-lg rounded-lg border border-secondary dark:bg-[#ffffff29] bg-primary transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
  >
    <!-- Image Section -->
    <figure>
      <img :src="image" :alt="title" class="w-full h-48 object-cover rounded-t-lg" />
=======
    class="max-w-sm overflow-hidden shadow-lg rounded border border-secondary dark:bg-[#ffffff29] bg-primary"
  >
    <!-- Image Section -->
    <figure>
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    </figure>

    <!-- Content Section -->
    <section class="px-6 py-4">
      <header>
<<<<<<< HEAD
        <h3 class="font-bold text-xl mb-2 text-white">{{ title }}</h3>
      </header>
      <p class="text-gray-300 text-sm mb-4">{{ description }}</p>
      <ul class="flex flex-wrap gap-2 mb-2">
        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="inline-block dark:bg-primary bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs font-semibold"
=======
        <h3 class="font-bold text-xl mn-2 text-white">{{ title }}</h3>
      </header>
      <p class="text-gray-300 text-sm">{{ description }}</p>
    </section>

    <!-- Tags Section -->
    <footer class="px-6 pt-4 pb-2">
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="inline-block dark:bg-primary bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
        >
          #{{ tag }}
        </li>
      </ul>
<<<<<<< HEAD
    </section>

    <hr class="border-secondary opacity-30 mx-6" />

    <!-- Actions Section  -->
    <div class="px-6 py-4 flex gap-2">
      <a
        v-if="liveLink"
        :href="liveLink"
        target="_blank"
        rel="noopener"
        class="bg-secondary text-primary font-semibold rounded px-4 py-2 text-sm hover:bg-opacity-80 transition"
      >
        Live Demo
      </a>
      <a
        v-if="codeLink"
        :href="codeLink"
        target="_blank"
        rel="noopener"
        class="bg-gray-700 text-gray-200 font-semibold rounded px-4 py-2 text-sm hover:bg-gray-600 transition"
      >
        View Code
      </a>
    </div>
=======
    </footer>

    <!-- Actions Section  -->
    <div class="px-6 pb-4 flex justify-between items-center">
      <a v-if="liveLink" :href="liveLink" class="text-secondary font-semibold hover:underline text-sm"> Live Demo </a>
      <a v-if="codeLink" :href="codeLink" class="text-secondary font-semibold hover:underline text-sm"> View Code </a>
    </div>

>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
  </article>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Project Title',
  },
  image: {
    type: String,
    required: true,
    default: '/',
  },
  description: {
    type: String,
    required: true,
    default: 'Brief description of the project.',
  },
  tags: {
    type: Array,
    required: false,
    default: () => ['Vue.js', 'Tailwind CSS', 'JavaScript'],
  },
  liveLink: {
    type: String,
    required: false,
    default: null,
  },
  codeLink: {
    type: String,
    required: false,
    default: null,
  },
})
</script>
<<<<<<< HEAD
<style></style>
=======
<style>
</style>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
