import { computed } from 'vue';
let sort = true;
const props = defineProps();
const emit = defineEmits();
function sortByName() {
    emit('sortedByName', sort);
    sort = !sort;
}
const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-3 mb-[1.063rem] sm:mb-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative w-full sm:w-auto") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        ...{ class: ("absolute  left-4 sm:left-[1.625rem] top-1/2 -translate-y-2/4 z-10") },
        width: ("12"),
        height: ("12"),
        viewBox: ("0 0 14 14"),
        fill: ("none"),
        xmlns: ("http://www.w3.org/2000/svg"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M13 13L10.1333 10.1333M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z"),
        stroke: ("black"),
        'stroke-width': ("1.5"),
        'stroke-linecap': ("round"),
        'stroke-linejoin': ("round"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        placeholder: ("Wyszukaj użytkownika..."),
        ...{ class: ("search-input border custom-shadow py-[0.813rem] sm:py-3.5 pl-10 sm:pl-12 pr-3.5 rounded-xl w-full sm:w-80 lg:w-[31.5rem]") },
    });
    (__VLS_ctx.inputValue);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("custom-shadow rounded-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.sortByName) },
        ...{ class: ("border flex gap-2 items-center py-[0.826rem] sm:py-3.5 px-4 rounded-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        width: ("12"),
        height: ("12"),
        viewBox: ("0 0 16 16"),
        fill: ("none"),
        xmlns: ("http://www.w3.org/2000/svg"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M2 10.6667L4.66667 13.3333L7.33333 10.6667"),
        fill: ("black"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M4.66667 13.3333V2.66666V13.3333Z"),
        fill: ("black"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M14 5.33332L11.3333 2.66666L8.66667 5.33332"),
        fill: ("black"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M11.3333 2.66666V13.3333V2.66666Z"),
        fill: ("black"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M2 10.6667L4.66667 13.3333M4.66667 13.3333L7.33333 10.6667M4.66667 13.3333V2.66666M14 5.33332L11.3333 2.66666M11.3333 2.66666L8.66667 5.33332M11.3333 2.66666V13.3333"),
        stroke: ("black"),
        'stroke-width': ("1.6"),
        'stroke-linecap': ("round"),
        'stroke-linejoin': ("round"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("sort-text hidden md:block") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("sort-text block md:hidden") },
    });
    ['flex', 'items-center', 'gap-3', 'mb-[1.063rem]', 'sm:mb-8', 'relative', 'w-full', 'sm:w-auto', 'absolute', 'left-4', 'sm:left-[1.625rem]', 'top-1/2', '-translate-y-2/4', 'z-10', 'search-input', 'border', 'custom-shadow', 'py-[0.813rem]', 'sm:py-3.5', 'pl-10', 'sm:pl-12', 'pr-3.5', 'rounded-xl', 'w-full', 'sm:w-80', 'lg:w-[31.5rem]', 'custom-shadow', 'rounded-xl', 'border', 'flex', 'gap-2', 'items-center', 'py-[0.826rem]', 'sm:py-3.5', 'px-4', 'rounded-xl', 'sort-text', 'hidden', 'md:block', 'sort-text', 'block', 'md:hidden',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            sortByName: sortByName,
            inputValue: inputValue,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
