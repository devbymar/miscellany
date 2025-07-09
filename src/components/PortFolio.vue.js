import NavBar from './NavBar.vue';
import Hero from './Home.vue';
import Services from './Services.vue';
import Projects from './Project.vue';
import Testimonials from './Testimonials.vue';
import Contact from './Contact.vue';
import Footer from './Footer.vue';
import Skills from './SkillsComp.vue';
//import Home from './Home.vue'
import { onMounted } from 'vue';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
onMounted(() => {
    AOS.init({
        duration: 1800,
        offset: 100,
        disable: "mobile"
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-gray-950" },
});
/** @type {[typeof NavBar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof Hero, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(Hero, new Hero({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof Skills, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(Skills, new Skills({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {[typeof Services, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(Services, new Services({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {[typeof Projects, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(Projects, new Projects({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof Testimonials, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(Testimonials, new Testimonials({}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {[typeof Contact, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(Contact, new Contact({}));
const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
/** @type {__VLS_StyleScopedClasses['bg-gray-950']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NavBar: NavBar,
            Hero: Hero,
            Services: Services,
            Projects: Projects,
            Testimonials: Testimonials,
            Contact: Contact,
            Footer: Footer,
            Skills: Skills,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
