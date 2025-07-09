<template>
    <div class="h-screen flex flex-col items-end mr-5 text-white text-justify">
        <div class="flex-1 bg-indigo-400/30 mt-10 mr-4 w-90 shadow-xl rounded-xl relative overflow-hidden">
            <div class="bg-indigo-400 h-64 rounded-t-xl absolute w-full z-0"></div>
            <div class="flex flex-col overflow-y-auto h-full p-4 space-y-4">
                <div class="flex flex-col z-10 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 mb-3 -ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                    </svg>
                    <div class="text-3xl mb-2">Welcome User &#128075;</div>
                    <div class="w-60 text-gray-200 text-sm mb-1">Connect with another users. Get started.</div>
                </div>
                <div class="border-0 border-t-4 border-cyan-200 rounded z-10 shadow-md">
                    <div class="bg-indigo-300 border border-t-none border-cyan-200 rounded-b p-6 flex flex-col space-y-2">
                        <div class="px-6 py-4 flex flex-col items-start gap-3">
                            <div class="text-semibold text-sm">Start a conversation</div>
                            <div class="flex flex-row gap-2">
                                <div class="w-20 flex flex-row -space-x-9">
                                    <img class="w-13 h-13 border-2 border-white rounded-full" :src="image" alt="">
                                    <img class="w-13 h-13 border-2 border-white rounded-full" :src="image2" alt="">
                                    <img class="w-13 h-13 border-2 border-white rounded-full" :src="image3" alt="">
                                </div>                                
                                <div class="flex flex-col justify-center">
                                    <div class="text-sm text-gray-100">Our usual reply time</div>
                                    <div class="flex flex-row items-center gap-1 text-indigo-600 font-semibold text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        A few minutes
                                    </div>
                                </div>                                
                            </div>
                            <button type="button" class="tab-button text-white border p-3 rounded-full font-semibold text-sm bg-indigo-400 hover:bg-white hover:text-indigo-400 flex flex-row space-x-2 gap-2 py-3 px-5 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                </svg>
                                Send us a message
                            </button>
                        </div>
                        <div class="border-t px-6 py-4">
                            <a href="#" class="text-sm !text-indigo-600 hover:!text-cyan-200">See all your conversations</a>
                        </div>
                    </div>
                </div>
                <div class="border-0 border-t-4 border-cyan-200 rounded z-10 shadow-md">
                    <div class="bg-indigo-300 border border-t-none border-cyan-200 rounded-b p-6 flex flex-col space-y-2">
                        <div class="font-semibold text-sm">Find your answer here</div>
                        <div class="flex flex-row mt-4">
                            <input type="text" placeholder="Search..." class="border flex-1 bg-white text-gray-800 rounded-l p-3 text-sm shadow-md outline-none focus:bg-indigo-50">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        <div class="bg-indigo-400 rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>

        </div>
    </div>
</template>

<script lang="ts" setup>
import image from '../assets/img/avatar1.png'
import image2 from '../assets/img/avatar3.png'
import image3 from '../assets/img/laravel.png'
</script>