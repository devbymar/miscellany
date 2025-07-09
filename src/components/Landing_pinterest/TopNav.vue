<template>
<div class="px-3 py-4 flex items-center gap-3 w-full overflow-x-hidden max-w-full box-border ">
    <div class="flex items-center flex-shrink-0 gap-2">
        <button
        class="logo w-12 h-12 rounded-full border-2 border-primary text-text-light flex items-center justify-center hover:bg-light"
        type="button"
        name="button"
        >
            <img :src="logoPNG" alt="Vue Logo" class="w-15 h-auto" />
        </button>
        <button v-for="item in tabItems" :key="item.key" @click="selectedTab = item.key" type="button"
        name="button"   
        :class="[
        'tab-button rounded-full py-3 px-4 font-semibold cursor-pointer select-none',
        selectedTab === item.key
        ? 'bg-white text-dark border border-dark hover:bg-gray-200'
        : 'bg-dark text-white border border-dark hover:bg-indigo-300 hover:text-dark',
        ]">
            {{item.name}}
        </button>
    </div>
    <div class="relative flex-1">
        <span class="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </span>

        <input type="text"
        placeholder="Search..."
        class="w-full pl-10 py-3 pr-4 rounded-full bg-gray-100 text-gray-900 hover:bg-indigo-100" />
    </div>
    <div class="flex items-center gap-2 flex-shrink-0">
        <button type="button" name="button" class="end-btn tab-button rounded-full flex items-center justify-center pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 text-gray-300 hover:text-indigo-300">
            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
            </svg>
            <div class="rounded-full h-5 w-5 bg-red-500 text-white flex items-center justify-center absolute mb-5 ml-5">4</div>
        </button>
        <button type="button" name="button" class="end-btn tab-button rounded-full flex items-center justify-center pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7  text-gray-300 hover:text-indigo-300">
            <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
            </svg>

            <div class="rounded-full h-5 w-5 bg-red-500 text-white flex items-center justify-center absolute mb-5 ml-5">4</div>
        </button>
        <button type="button" name="button" class="end-btn tab-button rounded-full flex items-center justify-center pr-3" @click="toggleProfile">
            <img :src="profilePNG" alt="Vue Logo" class="w-6 h-6 bg-cover bg-center rounded-full" />
            <svg v-if="!profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>

            <svg v-if="profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
            </svg>

        </button>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import logoPNG from '../../assets/img/avatar4.png'
import profilePNG from '../../assets/img/avatar1.png'

const tabItems = ref([
    { name: 'Home', key: 'home' },
    { name: 'Today', key: 'today' }
])

const selectedTab = ref('')
const profile = ref(false)
const toggleProfile = () => {
    profile.value = !profile.value
}
</script>

<style scoped>
button {
    margin: 0 3px 0 3px;
}
.logo {
  background-color: var(--bg-back-btn);
  border: 2px solid var(--color-primary);
  color: var(--color-text-light);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0; /* quita padding para que no estire */
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
