<template>
<div class="flex flex-row w-full h-screen text-white">
  <section class="w-4/5 flex flex-col justify-start items-start px-5 text-justify mr-10">
    <div class="h-screen w-full">
        <div class="flex" style="height: 88vh;">
            <!-- Left Side -->
            <div class="w-56 h-full flex-none">
                <div class="p-6">
                    <img :src="logo" class="h-12">
                </div>
                <div class="mx-2">
                    <button></button>
                </div>           
            </div>
            <!-- Main Content -->
             <div class="w-full h-full relative">
                <!--Header-->
                <div class="w-full sticky top-0 p-2">

                </div>
             </div>
             <!-- PLay Bar-->
              <div class="w-full bg-light" style="height: 12vh;">
              </div>
        </div>
    </div>
  </section>
  <aside class="w-1/5 flex flex-col justify-end items-end ml-5 text-justify">
    <ChatComp />
  </aside>
</div>



</template>

<script setup lang="ts">
import ChatComp from './ChatComp.vue';
import logo from '../assets/img/logo.png'
</script>