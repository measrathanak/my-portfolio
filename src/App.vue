<template>
  <div class="bg-[#e3dfee]  min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
    <BackToTop />
  </div>
</template>


<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #02246e #f1f1f1;
}
</style>

<script>
import Navbar from '@/components/layout/HeroNavbar.vue'
import Footer from '@/components/layout/Footer.vue'
import BackToTop from '@/components/layout/BackToTop.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    BackToTop,
  },
}
</script>
