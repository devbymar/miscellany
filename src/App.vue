<template>
  <div class="w-screen h-scrren overflow-hidden flex flex-col flex-start bg-black pl-0 ml-0">

    <!--TODO: Usar headerNavBar-->
    <nav class="bg-gray-800 text-white p-4 flex-none">
      <ul class="flex justify-center items-center space-x-6 px-5">
        <li>
          <button @click="currentSection = 'home'" class="hover:underline">Home</button>
        </li>
        <li>
          <button @click="currentSection = 'portfolio'" class="hover:underline">Portfolio</button>
        </li>
        <li>
          <button @click="currentSection = 'contact'" class="hover:underline">Image Gallery</button>
        </li>
        <li>
          <button @click="currentSection = 'social'" class="hover:underline">RRSS</button>
        </li>
        <!--<li>
          <button @click="currentSection = 'chat'" class="hover:underline">Music App & Chat</button>
        </li>-->
        <li >
          <button class="hover:underline">
            <HeaderNav />
          </button>
        </li>
        <li align="right" class="ml-auto mr-25">
          <DropDownMenu />
        </li>
      </ul>
    </nav>

    <div>
      <div
        v-if="currentSection === 'home'"
        class="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-black via-gray-900 to-white text-indigo-100 px-6 py-12"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-8 text-center drop-shadow-lg">
          Welcome to my App
        </h1>

        <p class="max-w-xl text-center text-indigo-200 mb-12 text-lg md:text-xl">
          Built with powerful technologies to give you the best experience.
        </p>

        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-4xl">
          <li
            class="flex flex-col items-center bg-indigo-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transform transition-transform cursor-default"
          >
            <img
              src="https://vuejs.org/images/logo.png"
              alt="Vue Logo"
              class="w-16 h-16 mb-4"
            />
            <h3 class="text-xl font-semibold">Vue 3</h3>
            <p class="text-indigo-300 mt-2 text-center text-sm">Progressive JavaScript Framework</p>
          </li>

          <li
            class="flex flex-col items-center bg-indigo-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transform transition-transform cursor-default"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
              alt="TypeScript Logo"
              class="w-16 h-16 mb-4"
            />
            <h3 class="text-xl font-semibold">TypeScript</h3>
            <p class="text-indigo-300 mt-2 text-center text-sm">Typed JavaScript for better tooling</p>
          </li>

          <li
            class="flex flex-col items-center bg-indigo-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transform transition-transform cursor-default"
          >
            <img
              src="https://codekitapp.com/images/help/free-tailwind-icon@2x.png"
              alt="Tailwind CSS Logo"
              class="w-16 h-16 mb-4"
            />
            <h3 class="text-xl font-semibold">Tailwind CSS</h3>
            <p class="text-indigo-300 mt-2 text-center text-sm">Utility-first CSS framework</p>
          </li>
        </ul>
      </div>


      <div v-else-if="currentSection === 'portfolio'">
        <PortFolio />
      </div>

      <div
        v-else-if="currentSection === 'contact'"
        class="min-h-[800px] text-indigo-300 flex flex-col items-start justify-start">
        <TopNav />
        <div class="px-20 w-full flex flex-wrap">
          <div v-for="(arr, index) in subArrays" :key="index" class="w-full flex">
            <div
              v-for="(card, i) in arr"
              :key="i"
              class="w-1/5 p-2 flex flex-col items-start"
            >
              <Card :src="card.src" :board="card.recomended" class="w-full h-auto" />
              <div class="text-sm pt-2 text-left w-full">
                <p class="font-bold">{{ card.title }}</p>
                <p>{{ card.user }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="currentSection === 'social'">
        <RrSs />
      </div>

      <!--<div v-else-if="currentSection === 'chat'">
        <MusicApp />
      </div>-->

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import PortFolio from './components/PortFolio.vue'
import HeaderNav from './components/HeaderNavBar.vue'
import DropDownMenu from './components/DropDownMenu.vue'
import TopNav from './components/Landing_pinterest/TopNav.vue'
import Card from './components/Landing_pinterest/Card.vue'
import RrSs from './components/Landing_twitter/RrSs.vue'
import MusicApp from './components/MusicApp.vue'

import image from './assets/img/project1.png'
import image2 from './assets/img/project2.png'
import image3 from './assets/img/project3.png'

interface CardItem {
  src: string
  title: string
  user: string
  recomended: boolean
}

const currentSection = ref<string>(localStorage.getItem('currentSection') || 'home')

watch(currentSection, (newVal) => {
  localStorage.setItem('currentSection', newVal)
})


const cards = ref<CardItem[]>([
  { src: 'https://images.pexels.com/photos/31473898/pexels-photo-31473898.jpeg', title: 'Forest', user: 'Author 7', recomended: true },
  { src: 'https://images.pexels.com/photos/12343639/pexels-photo-12343639.jpeg', title: 'Montaña nevada', user: 'Author 1', recomended: true },
  { src: 'https://images.pexels.com/photos/6958793/pexels-photo-6958793.jpeg', title: 'Nubes', user: 'Author 2', recomended: true },
  { src: 'https://images.pexels.com/photos/32782803/pexels-photo-32782803.jpeg', title: 'Castle', user: 'Author 5', recomended: true },
  { src: 'https://images.pexels.com/photos/4855615/pexels-photo-4855615.jpeg', title: 'Lake', user: 'Author 3', recomended: false },
  { src: 'https://images.pexels.com/photos/14146971/pexels-photo-14146971.jpeg', title: 'Bike on desert', user: 'Author 4', recomended: false },
  { src: 'https://images.pexels.com/photos/13743196/pexels-photo-13743196.jpeg', title: 'Terrain', user: 'Author 6', recomended: true },
  { src: 'https://images.pexels.com/photos/32754882/pexels-photo-32754882.jpeg', title: 'Lemonade', user: 'Author 8', recomended: true },
  { src: 'https://images.pexels.com/photos/32224180/pexels-photo-32224180.jpeg', title: 'Little cat', user: 'Author 9', recomended: true },
  { src: image, title: 'Colored Landscape', user: 'Author 10', recomended: true },
  { src: image2, title: 'Winter Landscape', user: 'Author 10', recomended: true },
  { src: image3, title: 'Road Landscape', user: 'Author 10', recomended: true },
 { src: '  https://images.pexels.com/photos/14934585/pexels-photo-14934585.jpeg', title: 'Camp Home', user: 'Author 12', recomended: true },
 { src: 'https://media.istockphoto.com/id/1362129184/es/foto/camper-conduciendo-por-la-carretera-en-el-hermoso-campo-entre-pinos-y-flores.jpg?s=1024x1024&w=is&k=20&c=pVctzdBAREZ6RaRDQi5mLRh7REVyrrm3wO92c0pd3jI=', title: 'Road Caravan', user: 'Author 11', recomended: true },
  { src: 'https://images.pexels.com/photos/31717570/pexels-photo-31717570.jpeg', title: 'Chuches', user: 'Author 13', recomended: true }

 
])

const subArrays = computed<CardItem[][]>(() => {
  const itemsPerGroup = 5
  const groups: CardItem[][] = []

  for (let i = 0; i < cards.value.length; i += itemsPerGroup) {
    groups.push(cards.value.slice(i, i + itemsPerGroup))
  }

  return groups
})
</script>
