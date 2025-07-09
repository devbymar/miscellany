<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="relative">
        <img :src="src" alt="image" class="rounded-lg"/>
        <div class="absolute bg-dark opacity-50 inset-0 w-full h-full rounded-lg"></div>
        <div v-if="hover" class="absolute top-0 w-full h-full flex flex-col justify-between p-2">
            <div class="flex items-center justify-between">
                <button type="button" name="button" @click="toggleProfile" class="tab-button rounded-full flex items-center justify-center pr-3">
                    <p class="font-semibold text-white">{{ board }}</p>
                        <svg v-if="!profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                        </svg>

                        <svg v-if="profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
                        <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                        </svg>
                </button>
                <button type="button" name="button" class="tab-button rounded-full p-2 text-white bg-indigo-500 border border-white font-semibold hover:bg-indigo-400">
                    Save
                </button>
            </div>
            <div class="flex items-center w-full">
                <button type="button" name="button" class="tab-button bg-white text-indigo-500 rounded-full p-2 ml-auto mr-2 text-dark opacity-80 hover:opacity-100 w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button type="button" name="button" class="tab-button bg-white text-indigo-500 rounded-full p-2 text-dark opacity-80 hover:opacity-100 w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps<{
    src: string,
    board: boolean
}>()

const src = ref<string>(props.src)
const profile = ref<boolean>(false)
const hover = ref<boolean>(false)

const toggleProfile = (): void => {
    profile.value = !profile.value
}

</script>