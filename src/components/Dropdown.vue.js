import { ref } from 'vue';
const props = defineProps();
const emit = defineEmits();
const selectedValue = ref(props.defaultValue);
function updateRecordsPerPage() {
    emit('updateRecordsPerPage', selectedValue.value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-between sm:justify-start gap-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("gray-text") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        ...{ onChange: (__VLS_ctx.updateRecordsPerPage) },
        value: ((__VLS_ctx.selectedValue)),
        ...{ class: ("px-4 py-2.5 pr-6 border rounded-xl bg-white") },
    });
    for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            key: ((option)),
            value: ((option)),
            ...{ class: ("bg-white") },
        });
        (option);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        ...{ class: ("absolute right-2.5 top-1/2 w-3 -translate-y-1/2") },
        xmlns: ("http://www.w3.org/2000/svg"),
        viewBox: ("0 0 512 512"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"),
    });
    ['flex', 'items-center', 'justify-between', 'sm:justify-start', 'gap-3', 'gray-text', 'relative', 'px-4', 'py-2.5', 'pr-6', 'border', 'rounded-xl', 'bg-white', 'bg-white', 'absolute', 'right-2.5', 'top-1/2', 'w-3', '-translate-y-1/2',];
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
            selectedValue: selectedValue,
            updateRecordsPerPage: updateRecordsPerPage,
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
