import { ref, nextTick } from 'vue';
import avatar from '../assets/img/avatar2.png';
const isVisible = ref(false);
const dropdown = ref(null);
let focusedIndex = -1;
function toggleVisibility() {
    isVisible.value = !isVisible.value;
    if (isVisible.value) {
        focusedIndex = -1;
        nextTick(() => {
        });
    }
}
function hideDropdown() {
    isVisible.value = false;
    focusedIndex = -1;
}
function getFocusableItems() {
    if (!dropdown.value)
        return [];
    return Array.from(dropdown.value.querySelectorAll('a'));
}
function focusNext(loop) {
    const items = getFocusableItems();
    if (items.length === 0)
        return;
    focusedIndex++;
    if (focusedIndex >= items.length) {
        focusedIndex = loop ? 0 : items.length - 1;
    }
    items[focusedIndex].focus();
}
function focusPrevious(loop) {
    const items = getFocusableItems();
    if (items.length === 0)
        return;
    focusedIndex--;
    if (focusedIndex < 0) {
        focusedIndex = loop ? items.length - 1 : 0;
    }
    items[focusedIndex].focus();
}
// Directiva local para detectar clic fuera
const clickOutside = {
    beforeMount(el, binding) {
        el.__clickOutsideHandler__ = (event) => {
            if (!el.contains(event.target)) {
                binding.value();
            }
        };
        document.addEventListener('click', el.__clickOutsideHandler__);
    },
    unmounted(el) {
        document.removeEventListener('click', el.__clickOutsideHandler__);
        delete el.__clickOutsideHandler__;
    }
};
const __VLS_exposed = {
    directives: {
        clickOutside
    }
};
defineExpose(__VLS_exposed);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleVisibility) },
    ...{ onKeydown: (__VLS_ctx.toggleVisibility) },
    ...{ onKeydown: (__VLS_ctx.hideDropdown) },
    ...{ class: "flex items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.avatar),
    alt: "avatar",
    ...{ class: "w-8 h-8 rounded-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
    d: "M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z",
});
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "dropdown-fade",
}));
const __VLS_2 = __VLS_1({
    name: "dropdown-fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.isVisible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ref: "dropdown",
        ...{ class: "absolute bg-white shadow rounded w-48 mt-2 py-1 z-50 border border-indigo-500" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.hideDropdown) }, null, null);
    /** @type {typeof __VLS_ctx.dropdown} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onKeydown: (__VLS_ctx.) },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(true);
            } },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        href: "#",
        ref: "account",
        ...{ class: "flex items-center px-3 py-3 hover:bg-gray-200" },
    });
    /** @type {typeof __VLS_ctx.account} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        fill: "currentColor",
        ...{ class: "text-gray-600" },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        ...{ class: "heroicon-ui" },
        d: "M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "ml-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(true);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(true);
            } },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        href: "#",
        ...{ class: "flex items-center px-3 py-3 hover:bg-gray-200" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        fill: "currentColor",
        ...{ class: "text-gray-600" },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        ...{ class: "heroicon-ui" },
        d: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "ml-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(true);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(true);
            } },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        href: "https://google.ca",
        ...{ class: "flex items-center px-3 py-3 hover:bg-gray-200" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        fill: "currentColor",
        ...{ class: "text-gray-600" },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        ...{ class: "heroicon-ui" },
        d: "M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "ml-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: "border-b border-gray-400" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(true);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(true);
            } },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        href: "#",
        ...{ class: "flex items-center px-3 py-3 hover:bg-gray-200" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        fill: "currentColor",
        ...{ class: "text-gray-600" },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        ...{ class: "heroicon-ui" },
        d: "M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "ml-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(true);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(true);
            } },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        href: "#",
        ...{ class: "flex items-center px-3 py-3 hover:bg-gray-200" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        fill: "currentColor",
        ...{ class: "text-gray-600" },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        ...{ class: "heroicon-ui" },
        d: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "ml-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(true);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusNext(true);
            } },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        href: "#",
        ...{ class: "flex items-center px-3 py-3 hover:bg-gray-200" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        fill: "currentColor",
        ...{ class: "text-gray-600" },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        ...{ class: "heroicon-ui" },
        d: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "ml-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(false);
            } },
        ...{ onKeydown: (...[$event]) => {
                if (!(__VLS_ctx.isVisible))
                    return;
                __VLS_ctx.focusPrevious(true);
            } },
        ...{ onKeydown: (__VLS_ctx.) },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        ...{ onKeydown: (__VLS_ctx.hideDropdown) },
        href: "#",
        ...{ class: "flex items-center px-3 py-3 hover:bg-gray-200" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        fill: "currentColor",
        ...{ class: "text-gray-600" },
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        d: "M0 0h24v24H0z",
        fill: "none",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
        d: "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "ml-2" },
    });
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['w-48']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-indigo-500']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            avatar: avatar,
            isVisible: isVisible,
            dropdown: dropdown,
            toggleVisibility: toggleVisibility,
            hideDropdown: hideDropdown,
            focusNext: focusNext,
            focusPrevious: focusPrevious,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
