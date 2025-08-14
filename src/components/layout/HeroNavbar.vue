<template>
  <header class="bg-white dark:bg-gray-900 shadow-md">
    <div class="flex justify-between items-center p-6 lg:px-16 relative z-20">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img
          src="@/assets/images/mountain.jpg"
          alt="Hero Picture"
          class="h-16 w-16 rounded-full shadow-lg border-2 border-primary"
        />
        <span class="text-2xl font-extrabold text-primary dark:text-white tracking-wide"
          >My Portfolio</span
        >
      </div>
      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-4xl text-primary dark:text-white">
            <Icon icon="material-symbols:close" />
          </span>
          <span v-else class="text-4xl text-primary dark:text-white">
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>
      <!-- Navbar Link -->
      <nav
        :class="[
          `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary/95
          md:static md:bg-transparent md:flex md:flex-row md:justify-end ${
            isMenuOpen ? 'flex' : 'hidden'
          }`,
        ]"
      >
        <ul class="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
          <li>
            <router-link
              to="/"
              class="transition font-semibold text-lg text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary px-3 py-2 rounded-md"
            >
              {{ $t('Home') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/Projects"
              class="transition font-semibold text-lg text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary px-3 py-2 rounded-md"
            >
              {{ $t('Projects') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/Skills"
              class="transition font-semibold text-lg text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary px-3 py-2 rounded-md"
            >
              {{ $t('Skills') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/Contact"
              class="transition font-semibold text-lg text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary px-3 py-2 rounded-md"
            >
              {{ $t('Contact') }}
            </router-link>
          </li>
        </ul>
        <div class="mt-8 md:mt-0 md:ml-8">
          <button
            v-if="$i18n.locale === 'en'"
            @click="changeLanguage('khm')"
            class="transition bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-2xl px-4 py-2 shadow-md"
          >
            ខ្មែរ
          </button>
          <button
            v-else
            @click="changeLanguage('en')"
            class="transition bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-2xl px-4 py-2 shadow-md"
          >
            English
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>
<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
    },
  },
}
</script>
