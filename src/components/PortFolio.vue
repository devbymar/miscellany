<script setup lang="ts">
import NavBar from './NavBar.vue'
import Hero from './Home.vue'
import Skills from './Skills.vue'
import Services from './Services.vue'
import Projects from './Project.vue'
import Testimonials from './Testimonials.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
import Home from './Home.vue'

import {onMounted} from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1800,
    offset: 100,
    disable: "mobile"
  })
})
</script>

<template>
  <div class="bg-gray-950">
    <NavBar />
    <Hero />
    <Skills />
    <Services />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </div>

</template>

<style scoped>

</style>
