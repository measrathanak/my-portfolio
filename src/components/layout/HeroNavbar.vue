<template>
<<<<<<< HEAD
  <header class="bg-white dark:bg-gray-900 shadow-md">
    <div class="flex justify-between items-center p-6 lg:px-16 relative z-20">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="@/assets/images/mountain.jpg" alt="Hero Picture" class="h-16 w-16 rounded-full shadow-lg border-2 border-primary" />
        <span class="text-2xl font-extrabold text-primary dark:text-white tracking-wide">My Portfolio</span>
      </div>
      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-4xl text-primary dark:text-white">
            <Icon icon="material-symbols:close" />
          </span>
          <span v-else class="text-4xl text-primary dark:text-white">
=======
  <header>
    <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
      <div class="text-3xl font-bold dark:text-white">Panharith</div>
      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-5xl md:text-primary text-white dark:text-white">
            <Icon icon="material-symbols:close" />
          </span>
          <span v-else class="text-5xl md:text-primary text-white dark:text-white">
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>
      <!-- Navbar Link -->
      <nav
        :class="[
<<<<<<< HEAD
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
=======
          `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary
      md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${
        isMenuOpen ? 'block' : 'hidden'
      }`,
        ]"
      >
        <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="block transition ease-linear md:text-lg lg:text-xl font-bold text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary"
              @click="scrollToSection(item.href)"
            >
              {{ $t(item.name) }}
            </a>
          </li>
        </ul>
        <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
          <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-5xl text-primary" />
          <Icon v-else icon="line-md:sunny-outline" class="text-5xl text-secondary" />
        </button>

        <button class="text-white ml-20 z-10 hidden md:block">
          <Icon
            icon="circle-flags:kh"
            class="text-5xl"
            v-if="$i18n.locale === 'en'"
            @click="changeLanguage('khm')"
          />
          <Icon icon="circle-flags:gb" class="text-5xl" v-else @click="changeLanguage('en')" />
        </button>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
<<<<<<< HEAD
=======
const Menu = ref([
  { name: 'Service', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'WhyMe', href: '#whyme' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
])
const scrollToSection = (href) => {
  this.isMenuOpen = false // Close the menu after clicking a link
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
// Reactive property to track dark mode state
const isDarkMode = ref(localStorage.getItem('theme') === 'dark')
const toggleDarkMode = () => {
  const html = document.documentElement

  if (isDarkMode.value) {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  // Update the dark mode state
  isDarkMode.value = !isDarkMode.value
}
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
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
