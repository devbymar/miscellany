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
const onSlideChange = (swiper) => {
    activeIndex.value = swiper.activeIndex;
};
const testimonialsItems = ref([
    {
        name: "Lorem",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Avatar1,
    },
    {
        name: "Ipsum",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Avatar2,
    },
    {
        name: "Dolor Sit Amet",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Avatar3,
    },
    {
        name: "Consectetur",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Avatar4,
    },
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "px-5 pt-14 md:container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "title text-indigo-300" },
    'data-aos': "fade-down",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
    ...{ class: "subtitle text-gray-500" },
    'data-aos': "fade-down",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "containerForBullets",
});
const __VLS_0 = {}.Swiper;
/** @type {[typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onSlideChange': {} },
    direction: "vertical",
    pagination: { clickable: true },
    loop: (true),
    spaceBetween: (40),
    slidesPerView: (1.7),
    modules: ([__VLS_ctx.Pagination]),
    ...{ class: "h-[40rem] max-w-3xl md:h-96" },
    dataAos: "fade-up",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onSlideChange': {} },
    direction: "vertical",
    pagination: { clickable: true },
    loop: (true),
    spaceBetween: (40),
    slidesPerView: (1.7),
    modules: ([__VLS_ctx.Pagination]),
    ...{ class: "h-[40rem] max-w-3xl md:h-96" },
    dataAos: "fade-up",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onSlideChange: (__VLS_ctx.onSlideChange)
};
__VLS_3.slots.default;
for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.testimonialsItems))) {
    const __VLS_8 = {}.SwiperSlide;
    /** @type {[typeof __VLS_components.SwiperSlide, typeof __VLS_components.SwiperSlide, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        key: (i),
    }));
    const __VLS_10 = __VLS_9({
        key: (i),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_11.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mx-8 flex h-full flex-col items-center gap-6 rounded-2xl border-2 border-indigo-300 bg-gray-800 p-8 duration-500 md:flex-row" },
        ...{ class: (__VLS_ctx.activeIndex !== i ? 'blur-sm scale-75' : 'blur-none scale-100') },
    });
    if (item && item.image) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: (item.image),
            alt: (item.name),
            ...{ class: "h-24 w-24" },
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "h-24 w-24 bg-gray-700 flex items-center justify-center text-gray-400" },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (item && item.review) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "text-sm text-gray-400 sm:text-base" },
        });
        (item.review);
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
    if (item && item.name) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({
            ...{ class: "text-gray-300" },
        });
        (item.name);
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({
            ...{ class: "text-gray-300" },
        });
    }
    var __VLS_11;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-14']} */ ;
/** @type {__VLS_StyleScopedClasses['md:container']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-300']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[40rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-96']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-indigo-300']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['h-24']} */ ;
/** @type {__VLS_StyleScopedClasses['w-24']} */ ;
/** @type {__VLS_StyleScopedClasses['h-24']} */ ;
/** @type {__VLS_StyleScopedClasses['w-24']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-300']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Swiper: Swiper,
            SwiperSlide: SwiperSlide,
            Pagination: Pagination,
            activeIndex: activeIndex,
            onSlideChange: onSlideChange,
            testimonialsItems: testimonialsItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
