<template>
     <section class="bg-gray-800 pb-4" id="projects">
      <div class="md:container px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
        <div>
          <h2 class="title text-indigo-300" data-aos="fade-down">
            Projects
          </h2>
          <h4 class="subtitle text-indigo-200" data-aos="fade-down">
            MY CREATION
          </h4>
          <br />
        </div>
        <div class="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            :src="ProjectsSVG"
            alt="..."
            data-aos="fade-right"
            class="bg-gray-700 max-w-[45vw] min-w-[22rem]   rounded-3xl text-indigo-300"
          />
          <Swiper
  :pagination="{ clickable: true } as any"
            :space-between="20"
            :modules="[Pagination]"
            class="rounded-3xl pb-16 max-w-xs shadow-lg shadow-indigo-300 self-start"
          >
              <SwiperSlide v-for="(item, index) in projectsItems"
                :key=index
                class="bg-gray-900 rounded-3xl p-5 border-b-8 border-indigo-300 h-fit"
              >
                <img :src=item.image :alt=item.title />
                <div class="flex flex-col gap-1 mt-2">
                  <h5 class="font-bold font-Poppins text-gray-100">
                    {{item.title}}
                  </h5>
                  <button class="font-bold text-gray-500 self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
import {  projectsItems } from "../data/index";
import {Pagination} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue";
// @ts-ignore
import ProjectsSVG from "../assets/svg/projects.svg";


import "swiper/css";
import "swiper/css/pagination";
</script>