import { ref, onMounted } from 'vue';
// Estado para controlar la visibilidad del menú
const isVisible = ref(false);
// Referencia a los items del menú para navegación con teclado
const menuItems = ref(null);
// Índice del item actualmente enfocado
const focusedIndex = ref(0);
// Al montar el componente, seleccionamos todos los enlaces dentro del menú para manejarlos
onMounted(() => {
    menuItems.value = document.querySelectorAll('.mega-menu a');
});
// Mostrar el menú (on mouseover o focus)
function showMenu() {
    isVisible.value = true;
}
// Ocultar el menú y resetear el foco
function hideMenu() {
    isVisible.value = false;
    focusedIndex.value = 0;
}
// Cuando el usuario presiona flechas arriba/abajo en el enlace "Features", empezamos la navegación por teclado
function startArrowKeys() {
    if (menuItems.value && menuItems.value.length > 0) {
        menuItems.value[0].focus();
    }
}
// Enfocar el ítem anterior (si existe), con control si la llamada es por flechas
function focusPrevious(isArrowKey) {
    if (!menuItems.value)
        return;
    focusedIndex.value = Math.max(0, focusedIndex.value - 1);
    if (isArrowKey) {
        focusItem();
    }
}
// Enfocar el ítem siguiente (si existe), con control si la llamada es por flechas
function focusNext(isArrowKey) {
    if (!menuItems.value)
        return;
    focusedIndex.value = Math.min(menuItems.value.length - 1, focusedIndex.value + 1);
    if (isArrowKey) {
        focusItem();
    }
}
// Función para poner foco en el item actual basado en focusedIndex
function focusItem() {
    if (menuItems.value) {
        menuItems.value[focusedIndex.value].focus();
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseover: (__VLS_ctx.showMenu) },
    ...{ onMouseleave: (__VLS_ctx.hideMenu) },
    ...{ class: "relative" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onFocus: (__VLS_ctx.showMenu) },
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (__VLS_ctx.startArrowKeys) },
    ...{ onKeydown: (__VLS_ctx.startArrowKeys) },
    href: "#",
    ...{ class: "text-copy-primary hover:text-gray-600" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute w-full" },
});
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "mega-menu-fade",
    persisted: true,
}));
const __VLS_2 = __VLS_1({
    name: "mega-menu-fade",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mega-menu absolute normal-case font-normal bg-white shadow-md rounded-lg overflow-hidden border mt-4 w-full lg:w-160 z-30 lg:z-10 left-0 lg:-left-16" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isVisible) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col lg:flex-row px-8 py-6 border-b -mx-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "w-full lg:w-1/2 px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "mb-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    ...{ onKeydown: (__VLS_ctx.) },
    href: "#",
    ...{ class: "flex group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "ml-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block font-bold text-blue-800 group-hover:text-blue-800 flex items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "ml-2 bg-yellow-500 text-yellow-800 px-2 py-1 rounded-full uppercase font-bold text-xxs" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "mb-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    href: "#",
    ...{ class: "flex group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7a1 1 0 0 1-.3-.7V8a1 1 0 0 1 2 0v3.59z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "ml-2" },
    align: "left",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "mb-8 lg:mb-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    href: "#",
    ...{ class: "flex group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "ml-2" },
    align: "left",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "w-full lg:w-1/2 px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "mb-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    href: "#",
    ...{ class: "flex group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "ml-2" },
    align: "left",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "mb-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    href: "#",
    ...{ class: "flex group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M16.21 16.95a5 5 0 0 1-4.02 4.9l-3.85.77a1 1 0 0 1-.9-.27l-.71-.7a2 2 0 0 1 0-2.83l1.44-1.45a13.17 13.17 0 0 1-1.42-1.41L5.31 17.4a2 2 0 0 1-2.83 0l-.7-.7a1 1 0 0 1-.28-.9l.77-3.86a5 5 0 0 1 4.9-4.02h.86a13.07 13.07 0 0 1 12.82-5.47 1 1 0 0 1 .83.83A12.98 12.98 0 0 1 16.2 16.1v.85zm-4.41 2.94a3 3 0 0 0 2.41-2.94v-1.4a1 1 0 0 1 .47-.84A11.04 11.04 0 0 0 19.8 4.33 10.98 10.98 0 0 0 9.42 9.45a1 1 0 0 1-.85.47h-1.4a3 3 0 0 0-2.94 2.4l-.66 3.34.33.33 2.24-2.24a1 1 0 0 1 1.52.12 11.08 11.08 0 0 0 2.6 2.6 1 1 0 0 1 .12 1.52l-2.24 2.24.33.33 3.33-.67zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "ml-2" },
    align: "left",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    href: "#",
    ...{ class: "flex group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M20 15a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1h-8a1 1 0 0 0 0 2h5.59L13 13.59l-3.3-3.3a1 1 0 0 0-1.4 0l-6 6a1 1 0 0 0 1.4 1.42L9 12.4l3.3 3.3a1 1 0 0 0 1.4 0L20 9.4V15z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "ml-2" },
    align: "left",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "bg-gray-100 px-8 py-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "mb-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    href: "#",
    ...{ class: "flex lg:items-center group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M18 21H7a4 4 0 0 1-4-4V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 0 1-.17-1zm-7-3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm9 11a1 1 0 0 0 2 0V7h-2v11z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "flex flex-col lg:flex-row lg:items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block ml-2 font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "mb-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusNext(true);
        } },
    href: "#",
    ...{ class: "flex lg:items-center group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M17 22a2 2 0 0 1-2-2v-1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3H5a3 3 0 1 1 0-6h1V8a2 2 0 0 1 2-2h3V5a3 3 0 1 1 6 0v1h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3zm3-2v-3h-1a3 3 0 1 1 0-6h1V8h-3a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8v3a2 2 0 0 1-2 2H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3h3v-1a3 3 0 1 1 6 0v1h3z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "flex flex-col lg:flex-row lg:items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block ml-2 font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (__VLS_ctx.hideMenu) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(false);
        } },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.focusPrevious(true);
        } },
    ...{ onKeydown: (__VLS_ctx.) },
    href: "#",
    ...{ class: "flex lg:items-center group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    fill: "currentColor",
    ...{ class: "text-blue-500 group-hover:text-blue-800" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    ...{ class: "heroicon-ui" },
    d: "M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 6.7 8.7L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "flex flex-col lg:flex-row lg:items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block ml-2 font-bold text-blue-800 group-hover:text-blue-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800" },
});
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['text-copy-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mega-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['normal-case']} */ ;
/** @type {__VLS_StyleScopedClasses['font-normal']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-160']} */ ;
/** @type {__VLS_StyleScopedClasses['z-30']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:-left-16']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['-mx-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-yellow-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-800']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xxs']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['heroicon-ui']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-blue-800']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isVisible: isVisible,
            showMenu: showMenu,
            hideMenu: hideMenu,
            startArrowKeys: startArrowKeys,
            focusPrevious: focusPrevious,
            focusNext: focusNext,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
