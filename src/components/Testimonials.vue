<template>
    <section>
        <div class="px-5 pt-14 md:container">
            <h2 class="title text-indigo-300" data-aos="fade-down">
                Testimonials
            </h2>
            <h4 class="subtitle text-gray-500" data-aos="fade-down">
                MY CLIENT REVIEWS
            </h4>
            <br />
            <div id="containerForBullets"></div>
            <Swiper direction="vertical" :pagination="{ clickable: true } as any" :loop="true" :space-between="40"
                :slides-per-view="1.7" @slideChange="onSlideChange"
                :modules="[Pagination]"
                class="h-[40rem] max-w-3xl md:h-96" data-aos="fade-up">

                <SwiperSlide v-for="(item, i) in testimonialsItems" :key="i">>
                    <div class="mx-8 flex h-full flex-col items-center gap-6 rounded-2xl border-2 border-indigo-300 bg-gray-800 p-8 duration-500 md:flex-row"
                    :class="activeIndex !== i ? 'blur-sm scale-75' : 'blur-none scale-100'">
                        <img v-if="item && item.image" :src="item.image" :alt="item.name" class="h-24 w-24" />
                        <div v-else class="h-24 w-24 bg-gray-700 flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                        <div>
                            <p v-if="item && item.review" class="text-sm text-gray-400 sm:text-base">
                                {{ item.review }}
                            </p>
                            <p v-else>
                                No review
                            </p>
                            <br />
                            <h6 v-if="item && item.name" class="text-gray-300">{{ item.name }}</h6>
                            <h6 v-else class="text-gray-300">No name</h6>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import Avatar1 from "../assets/img/avatar1.png";
import Avatar2 from "../assets/img/avatar2.png";
import Avatar3 from "../assets/img/avatar3.png";
import Avatar4 from "../assets/img/avatar4.png";

import "swiper/css";
import "swiper/css/pagination";

const activeIndex = ref(0);
/*const updateActiveIndex = (index: number) => {
    activeIndex.value = index;
}*/

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.activeIndex;
};


const testimonialsItems = ref([
  {
    name: "Lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar1,
  },
  {
    name: "Ipsum",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar2,
  },
  {
    name: "Dolor Sit Amet",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar3,
  },
  {
    name: "Consectetur",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar4,
  },
]);
</script>