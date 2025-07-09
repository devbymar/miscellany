import { ref } from 'vue';
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline';
import { navItems } from '../data/index';
const showMenu = ref(false);
const active = ref(0);
const toggleShowMenu = () => {
    showMenu.value = !showMenu.value;
};
const updateActive = (index) => {
    active.value = index;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-full flex justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggleShowMenu) },
    ...{ class: "sm:cursor-pointer fixed top-35 left-5 z-[999] rounded-lg bg-indigo-300/70 p-2" },
});
const __VLS_0 = {}.AdjustmentsHorizontalIcon;
/** @type {[typeof __VLS_components.AdjustmentsHorizontalIcon, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "size-12 text-indigo-700" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "size-12 text-indigo-700" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "\u0066\u0069\u0078\u0065\u0064\u0020\u007a\u002d\u005b\u0039\u0039\u0039\u005d\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0067\u0061\u0070\u002d\u0035\u0020\u0062\u0067\u002d\u0069\u006e\u0064\u0069\u0067\u006f\u002d\u0033\u0030\u0030\u002f\u0036\u0030\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0070\u0078\u002d\u0036\u0020\u0070\u0079\u002d\u0033\u0020\u0062\u0061\u0063\u006b\u0064\u0072\u006f\u0070\u002d\u0062\u006c\u0075\u0072\u002d\u006d\u0064\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0032\u0030\u0030\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030" },
    ...{ class: (__VLS_ctx.showMenu ? 'bottom-10' : '-bottom-[-100%]') },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.updateActive(index);
            } },
        key: (index),
        href: (item.href),
        ...{ class: "text-xl p-2.5 rounded-full sm:cursor-pointer" },
        ...{ class: (__VLS_ctx.active === index ? 'bg-indigo-300 text-gray-900' : '') },
    });
    const __VLS_4 = ((item.icon));
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ class: "size-6 text-indigo-50" },
    }));
    const __VLS_6 = __VLS_5({
        ...{ class: "size-6 text-indigo-50" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-35']} */ ;
/** @type {__VLS_StyleScopedClasses['left-5']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[999]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-300/70']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['size-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[999]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-300/60']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-md']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['size-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-indigo-50']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AdjustmentsHorizontalIcon: AdjustmentsHorizontalIcon,
            navItems: navItems,
            showMenu: showMenu,
            active: active,
            toggleShowMenu: toggleShowMenu,
            updateActive: updateActive,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
