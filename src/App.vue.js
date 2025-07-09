import { ref, computed, watch } from 'vue';
import PortFolio from './components/PortFolio.vue';
import HeaderNav from './components/HeaderNavBar.vue';
import DropDownMenu from './components/DropDownMenu.vue';
import TopNav from './components/Landing_pinterest/TopNav.vue';
import Card from './components/Landing_pinterest/Card.vue';
import RrSs from './components/Landing_twitter/RrSs.vue';
import image from './assets/img/project1.png';
import image2 from './assets/img/project2.png';
import image3 from './assets/img/project3.png';
const currentSection = ref(localStorage.getItem('currentSection') || 'home');
watch(currentSection, (newVal) => {
    localStorage.setItem('currentSection', newVal);
});
const cards = ref([
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
]);
const subArrays = computed(() => {
    const itemsPerGroup = 5;
    const groups = [];
    for (let i = 0; i < cards.value.length; i += itemsPerGroup) {
        groups.push(cards.value.slice(i, i + itemsPerGroup));
    }
    return groups;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-screen h-scrren overflow-hidden flex flex-col flex-start bg-black pl-0 ml-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "bg-gray-800 text-white p-4 flex-none" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "flex justify-center items-center space-x-6 px-5" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.currentSection = 'home';
        } },
    ...{ class: "hover:underline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.currentSection = 'portfolio';
        } },
    ...{ class: "hover:underline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.currentSection = 'contact';
        } },
    ...{ class: "hover:underline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.currentSection = 'social';
        } },
    ...{ class: "hover:underline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "hover:underline" },
});
/** @type {[typeof HeaderNav, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HeaderNav, new HeaderNav({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    align: "right",
    ...{ class: "ml-auto mr-25" },
});
/** @type {[typeof DropDownMenu, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(DropDownMenu, new DropDownMenu({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
if (__VLS_ctx.currentSection === 'home') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-black via-gray-900 to-white text-indigo-100 px-6 py-12" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: "text-4xl md:text-5xl font-extrabold mb-8 text-center drop-shadow-lg" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "max-w-xl text-center text-indigo-200 mb-12 text-lg md:text-xl" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-4xl" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: "flex flex-col items-center bg-indigo-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transform transition-transform cursor-default" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "https://vuejs.org/images/logo.png",
        alt: "Vue Logo",
        ...{ class: "w-16 h-16 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: "text-xl font-semibold" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-indigo-300 mt-2 text-center text-sm" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: "flex flex-col items-center bg-indigo-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transform transition-transform cursor-default" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        alt: "TypeScript Logo",
        ...{ class: "w-16 h-16 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: "text-xl font-semibold" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-indigo-300 mt-2 text-center text-sm" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: "flex flex-col items-center bg-indigo-800 bg-opacity-50 rounded-xl p-6 shadow-lg hover:scale-105 transform transition-transform cursor-default" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
        alt: "Tailwind CSS Logo",
        ...{ class: "w-16 h-16 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: "text-xl font-semibold" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-indigo-300 mt-2 text-center text-sm" },
    });
}
else if (__VLS_ctx.currentSection === 'portfolio') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    /** @type {[typeof PortFolio, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(PortFolio, new PortFolio({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
else if (__VLS_ctx.currentSection === 'contact') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "min-h-[800px] text-indigo-300 flex flex-col items-start justify-start" },
    });
    /** @type {[typeof TopNav, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(TopNav, new TopNav({}));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "px-20 w-full flex flex-wrap" },
    });
    for (const [arr, index] of __VLS_getVForSourceType((__VLS_ctx.subArrays))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (index),
            ...{ class: "w-full flex" },
        });
        for (const [card, i] of __VLS_getVForSourceType((arr))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: (i),
                ...{ class: "w-1/5 p-2 flex flex-col items-start" },
            });
            /** @type {[typeof Card, ]} */ ;
            // @ts-ignore
            const __VLS_12 = __VLS_asFunctionalComponent(Card, new Card({
                src: (card.src),
                board: (card.recomended),
                ...{ class: "w-full h-auto" },
            }));
            const __VLS_13 = __VLS_12({
                src: (card.src),
                board: (card.recomended),
                ...{ class: "w-full h-auto" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "text-sm pt-2 text-left w-full" },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: "font-bold" },
            });
            (card.title);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (card.user);
        }
    }
}
else if (__VLS_ctx.currentSection === 'social') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    /** @type {[typeof RrSs, ]} */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(RrSs, new RrSs({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
}
/** @type {__VLS_StyleScopedClasses['w-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['h-scrren']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-start']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-0']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-none']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-6']} */ ;
/** @type {__VLS_StyleScopedClasses['px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-25']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-br']} */ ;
/** @type {__VLS_StyleScopedClasses['from-black']} */ ;
/** @type {__VLS_StyleScopedClasses['via-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['to-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-100']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-5xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['drop-shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-200']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-800']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-default']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-800']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-default']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-800']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-default']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-[800px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-300']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['px-20']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/5']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PortFolio: PortFolio,
            HeaderNav: HeaderNav,
            DropDownMenu: DropDownMenu,
            TopNav: TopNav,
            Card: Card,
            RrSs: RrSs,
            currentSection: currentSection,
            subArrays: subArrays,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
