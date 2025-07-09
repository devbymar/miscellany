<template>
<div class="flex w-screen h-full text-white overflow-hidden">
        <!--Left Aside-->
  <div class="basis-[20%] border-r border-lighter px-2 lg:px-6 py-2 flex flex-col items-center space-y-4">
            <button class="tab-button w-25 h-auto hover:bg-lightblue rounded-full mb-5">
            <img
                :src="logo"
                alt="avatar"
                class="w-full object-contain rounded-full"
            />
            </button>
            <div>
                <button @click="id = tab.id" v-for="tab in tabs" :key="tab.id"  :class="`tab-button flex items-center py-2 px-4 hover:bg-cyan-100/90 hover:text-black rounded-full mr-auto mb-3 ${id === tab.id ? 'text-cyan-500' : ''}`">
                    <img
                    :src="tab.icon"
                    alt="icon"
                    class="bg-cyan-500 w-8 h-8 mr-3 rounded-full p-1">
                    <p class="text-lg font-semibold text-left hidden lg:block">{{tab.title}}</p>
                </button>
            </div>
            <button class="tab-button text-white bg-cyan-500 rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-white hover:text-cyan-500 ml-2">
                <p class="hidden lg:block">Post</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 lg:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>

            <div class="lg:w-full mb-5 mt-32 relative">
                <button @click="dropdown = true" class="tab-button flex items-center justify-between w-full hover:bg-cyan-100 hover:text-cyan-500 rounded-full pl-2 pr-0 py-2 gap-2">
                    <img :src="profile" alt="" class="w-10 h-10 rounded-full border-lighter flex-shrink-0" />

                    <div class="hidden lg:block flex flex-col flex-grow w-10">
                        <p class="text-xs font-semibold leading-tight whitespace-nowrap overflow-hidden">Lorem ipsum</p>
                        <p class="text-xs text-gray-400 font-medium leading-tight whitespace-nowrap overflow-hidden">@_consectetur</p>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 23 23"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hidden lg:block w-6 h-6 text-cyan-500 flex-shrink-0 pr-2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
                    </svg>
                </button>
                <div v-if="dropdown === true" class="w-full my-2 text-cyan-500 absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
                    <button @click="dropdown = false" class="tab-button flex items-center justify-between w-full hover:bg-lightest hover:text-cyan-500 focus:outline-none pl-2 pr-0 py-2 gap-2">
                        <img :src="profile" alt="" class="w-10 h-10 rounded-full border-lighter flex-shrink-0" />

                        <div class="flex flex-col flex-grow w-10 ">
                            <p class="text-xs font-semibold leading-tight whitespace-nowrap overflow-hidden">Lorem ipsum</p>
                            <p class="text-xs text-gray-400 font-medium leading-tight whitespace-nowrap overflow-hidden">@_consectetur</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>

                    </button>
                    <button @click="dropdown = false" class="tab-button w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
                        Add an existing account
                    </button>
                    <button @click="dropdown = false" class="tab-button w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
                        Log out @_consectetur
                    </button>
                </div>
            </div>
        </div>

        <!--Center Section-->
  <div class="flex-1 overflow-y-auto relative scrollbar-custom" style="min-height: 850px; height: 100vh;">
            <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
                <h1 class="ignore text-xl font-bold">House of Blue</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-xl text-cyan-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
            </div>
            <div class="px-5 py-3 border-b-8 border-lighter flex">
                <div>
                    <img :src="profile" alt="" class="w-12 h-12 rounded-full border border-lighter" />
                </div>
                <form v-on:submit.prevent = "addNewPost" class="w-full px-4 relative">
                    <textarea v-model="post.content" placeholder="What's happening?" class="w-full focus:outline-none mt-3 pb-3"></textarea>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-lg text-cyan-500 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-lg text-cyan-500 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-lg text-cyan-500 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-lg text-cyan-500 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </div>
                    <button type="submit" class="tab-button h-10 px-4 text-white font-semibold bg-cyan-500 hover:bg-white hover:text-cyan-500 focus:outline-none rounded-full absolute bottom-0 right-0">Post</button>
                </form>
            </div>

            <div class="flex flex-col-reverse">
                <div v-for="(post, indexx) in posts" :key="indexx" class="w-full p-4 border-b hover:bg-lighter flex">
                    <div class="flex-none mr-4">
                        <img :src="profile" alt="" class="h-12 w-12 rounded-full flex-none">
                    </div>
                    <div class="w-full">
                        <div class="flex items-center w-full">
                            <p class="font-semibold">Lorem ipsum</p>
                            <p class="text-sm text-gray-200 ml-2">@_consectetur</p>
                            <p class="text-sm text-gray-200 ml-2">1 sec</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text--gray-200 ml-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                        </div>
                        <p class="py-2 flex justify-start pl-2">{{ post.content }}</p>
                         <div class="flex items-center justify-between w-full">
                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p>0</p>
                        </div>

                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25" />
                            </svg>
                            <p>0</p>
                        </div>
                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                            <p>0</p>
                        </div>
                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>

                        </div>

                    </div>
                    </div>
                </div>
            </div>

            <div v-for="(follow, indi) in following" :key="indi" class="w-full p-4 border-b hover:bg-lighter flex">
                <div class="flex-none mr-4">
                    <img :src="follow.src" alt="" class="h-12 w-12 rounded-full flex-none">
                </div>
                <div class="w-full">
                    <div class="flex items-center w-full">
                        <p class="text-semibold ml-2">{{ follow.name }}</p>
                        <p class="text-sm text-gray-200 ml-2">{{ follow.handle }}</p>
                        <p class="text-sm text-gray-200 ml-2">{{ follow.time }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-200 ml-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <p class="py-2 flex justify-start pl-2">{{ follow.post }}</p>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p>{{ follow.comments }}</p>
                        </div>

                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25" />
                            </svg>
                            <p>{{ follow.reposts }}</p>
                        </div>
                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                            <p>{{ follow.like }}</p>
                        </div>
                        <div class="flex items center text-sm text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!--Right Aside -->
<div class="hidden md:block basis-[30%] border-l border-lighter py-2 px-6 overflow-y-auto relative scrollbar-custom" style="min-height: 850px; height: 100vh;">
    <!--  <div class="flex-1 overflow-y-auto relative" style="min-height: 850px; height: 100vh;">
-->
            <div class="relative flex-1 my-2">
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
                class="w-full pl-10 py-3 pr-4 rounded-full bg-white text-gray-900" />
            </div>
            <div class="w-full rounded-lg bg-white p-3">
                <div class="flex items-center justify-between p-3">
                    <p class="text-lg text-cyan-500 font-bold">Trending now</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-lg text-cyan-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </div>
                <button v-for="(trend, ind) in trending" :key="ind" class="tab-button w-full flex justify-between hover:bg-lighter p-3 border-t border-cyan-500">
                    <div>
                        <p class="text-sm text-left text-gray-600 leading-light">{{ trend.top }}</p>
                        <p class="font-bold text-left text-gray-500 leading-light">{{ trend.title }}</p>
                        <p class="text-left text-gray-400 leading-light">{{ trend.bottom }}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-cyan-500 text-lg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                <button class="tab-button p-3 w-full text-cyan-500 border-t border-lighter text-left hover:bg-cyan-100  ">
                    Show more
                </button>
            </div>

            <div class="w-full rounded-lg bg-white mt-3">
                <div class="flex items-center justify-between p-3">
                    <p class="text-lg font-bold text-cyan-500">Recommended to follow</p>
    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-lg text-cyan-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>

                </div>
                <button   v-for="(friend, ix) in friends" :key="ix" class="tab-button w-full flex hover:bg-lighter p-3 border-t border-cyan-500">
                    <img :src="friend.src" alt="" class="w-12 h-12 rounded-full border-lighter flex-shrink-0" />

                    <div class="hidden lg:block flex flex-col flex-grow w-10 text-gray-500">
                        <p class="text-xs font-semibold leading-tight whitespace-nowrap overflow-hidden">{{friend.name}}</p>
                        <p class="text-xs text-gray-400 font-medium leading-tight whitespace-nowrap overflow-hidden">{{friend.handle}}</p>
                    </div>

                    <button class="ml-auto tab-button text-sm text-cyan-500 py-2 px-4 rounded-full border-2  border-blue">
                        Follow
                    </button>
                </button>
                <button class="tab-button p-3 w-full text-cyan-500 border-t border-lighter text-left hover:bg-cyan-100  ">
                    Show more
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import logo from '../../assets/img/logo.png'
import profile from '../../assets/img/avatar1.png'
import avatar from '../../assets/img/avatar2.png'
import avatar2 from '../../assets/img/avatar3.png'
import avatar3 from '../../assets/img/avatar4.png'
import avatar4 from '../../assets/img/react.png'
import avatar5 from '../../assets/img/laravel.png'

import home from '../../assets/svg/home.svg'
import hashtag from '../../assets/svg/hashtag.svg'
import bell from '../../assets/svg/bell.svg'
import envelope from '../../assets/svg/envelope.svg'
import bookmark from '../../assets/svg/bookmark.svg'
import clipboard from '../../assets/svg/clipboard.svg'
import user from '../../assets/svg/user.svg'
import ellipsis from '../../assets/svg/ellipsis.svg'

// Definiciones de tipos para los objetos

interface Tab {
  icon: string
  title: string
  id: string
}

interface TrendingItem {
  top: string
  title: string
  bottom: string
}

interface Friend {
  src: string
  name: string
  handle: string
}

interface FollowingItem {
  src: string
  name: string
  handle: string
  time: string
  post: string
  comments: string
  reposts: string
  like: string
}

interface Post {
  content: string
}

// Variables reactivas con tipos

const tabs = ref<Tab[]>([
  { icon: home, title: 'Home', id: 'home' },
  { icon: hashtag, title: 'Explore', id: 'explore' },
  { icon: bell, title: 'Notifications', id: 'notifications' },
  { icon: envelope, title: 'Messages', id: 'messages' },
  { icon: bookmark, title: 'Bookmars', id: 'bookmarks' },
  { icon: clipboard, title: 'Lists', id: 'lists' },
  { icon: user, title: 'Profile', id: 'profile' },
  { icon: ellipsis, title: 'More', id: 'more' },
])

const id = ref<string>('home')

const dropdown = ref<boolean>(false)

const trending = ref<TrendingItem[]>([
  { top: 'Trending in Posts', title: 'Green is the color of nature', bottom: 'Trending with: #Green #Nature' },
  { top: 'Music', title: 'Rock Festival', bottom: '135K followers' },
  { top: 'Pop', title: 'Some band', bottom: '75k tickets sold' },
  { top: 'Trending in US', title: 'Excepteur sint occaecat cupidatat non proident', bottom: '25.3k posts' },
  { top: 'Trending', title: 'Some day', bottom: '27k posts' },
])

const friends = ref<Friend[]>([
  { src: avatar, name: 'Tenetur velit', handle: '@quidem_magnam' },
  { src: avatar3, name: 'Eos tempore', handle: '@est_veniam' },
  { src: avatar5, name: 'Similique labore', handle: '@repellendus' },
])

const following = ref<FollowingItem[]>([
  {
    src: avatar2,
    name: 'John Doe',
    handle: '@john_doe',
    time: '20 min',
    post: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    comments: '1000',
    reposts: '300',
    like: '1,000,000',
  },
  {
    src: avatar4,
    name: 'Jane Doe',
    handle: '@jane_doe',
    time: '1.5 hr',
    post: 'Lorem ipsum dolor sit amet.',
    comments: '700',
    reposts: '175',
    like: '27.000',
  },
  {
    src: avatar3,
    name: 'Eos tempore',
    handle: '@est_veniam',
    time: '51 min',
    post: 'Ut enim ad minim veniam.',
    comments: '500',
    reposts: '800',
    like: '1,000,075',
  },
])

const posts = ref<Post[]>([
  // { content: 'I love Metallica. Her music makes me happy. End of story.' },
  // { content: '6 Ways to De-emphasize Facial Features: 1. Grow a mustache... #beautyhacks #style' },
  { content: 'Check out this article on the impact of AI on education: [link to article]' },
])

const post = ref<Post>({ content: '' })

const addNewPost = (): void => {
  const newPost: Post = {
    content: post.value.content,
  }
  posts.value.push(newPost)
  post.value.content = ''
}
</script>



<style scoped>
.scrollbar-custom::-webkit-scrollbar {
  width: 16px;  /* el doble de antes */
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #6b7280; /* gray-500 */
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background-color: 00b8db ; /* gray-900 */
  border-radius: 4px;
  border: 4px solid #111827; /* ajusta borde para que quede proporcional */
}

/* Firefox */
.scrollbar-custom {
  scrollbar-width: auto;  /* auto o thin, auto es más ancho */
  scrollbar-color: #00b8db #000000;
}


@media (max-width: 1200px) {
    .custom-hide-border {
        border-right: 0 !important;
    }
}
</style>