<template>
    <div class="w-full flex justify-center">
      <div
        class="sm:cursor-pointer fixed top-35 left-5 z-[999] rounded-lg bg-indigo-300/70 p-2"
        @click=toggleShowMenu
      >
        <AdjustmentsHorizontalIcon class="size-12 text-indigo-700" />
      </div>
      <nav
        class="fixed z-[999] flex items-center gap-5 bg-indigo-300/60 
          px-6 py-3 backdrop-blur-md rounded-full text-gray-200 duration-300"
        :class="showMenu ? 'bottom-10' : '-bottom-[-100%]'"
      >
          <a v-for="(item, index) in navItems" :key="index"
            :href=item.href
            @click=updateActive(index)
            class="text-xl p-2.5 rounded-full sm:cursor-pointer" 
            :class="active === index ? 'bg-indigo-300 text-gray-900' : ''"
          >
          <component :is="item.icon" class="size-6 text-indigo-50" />
          </a>
      </nav>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'
import { navItems } from '../data/index'

const showMenu = ref(false)
const active = ref(0)
const toggleShowMenu = () => {
    showMenu.value = !showMenu.value
}

const updateActive = (index: number) => {
    active.value = index
}
</script>