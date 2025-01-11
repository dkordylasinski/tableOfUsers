import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps();
const emit = defineEmits();
const totalPages = computed(() => Math.ceil(props.totalRecords / props.recordsPerPage));
function prevPage() {
    if (props.currentPage > 1) {
        emit('newCurrentPage', props.currentPage - 1);
        scrollToTop();
    }
}
function nextPage() {
    if (props.currentPage < totalPages.value) {
        emit('newCurrentPage', props.currentPage + 1);
        scrollToTop();
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function firstPageButtonClick() {
    emit('newCurrentPage', 1);
    scrollToTop();
}
function lastPageButtonClick() {
    emit('newCurrentPage', totalPages.value);
    scrollToTop();
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-end gap-4 sm:gap-6 flex-col sm:flex-row") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("gray-text") },
    });
    (__VLS_ctx.currentPage);
    (__VLS_ctx.totalPages);
    if (__VLS_ctx.totalPages > 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center justify-between sm:justify-center gap-1 w-full sm:w-auto") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-1") },
        });
        if (props.currentPage >= 3) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (__VLS_ctx.firstPageButtonClick) },
                ...{ class: ("arrow-button xs-mobile flex") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                width: ("8"),
                height: ("12"),
                viewBox: ("0 0 8 12"),
                fill: ("none"),
                xmlns: ("http://www.w3.org/2000/svg"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
                d: ("M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z"),
                fill: ("#000"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                width: ("8"),
                height: ("12"),
                viewBox: ("0 0 8 12"),
                fill: ("none"),
                xmlns: ("http://www.w3.org/2000/svg"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
                d: ("M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z"),
                fill: ("#000"),
            });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.prevPage) },
            disabled: ((props.currentPage === 1)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            width: ("8"),
            height: ("12"),
            viewBox: ("0 0 8 12"),
            fill: ("none"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z"),
            fill: ("#000"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-1") },
        });
        if (props.currentPage == __VLS_ctx.totalPages && props.currentPage - 2 > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.totalPages > 1)))
                            return;
                        if (!((props.currentPage == __VLS_ctx.totalPages && props.currentPage - 2 > 0)))
                            return;
                        __VLS_ctx.emit('newCurrentPage', props.currentPage - 2);
                    } },
            });
            (props.currentPage - 2);
        }
        if (props.currentPage > 1) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (__VLS_ctx.prevPage) },
            });
            (props.currentPage - 1);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: ("current-button") },
        });
        (props.currentPage);
        if (props.currentPage < __VLS_ctx.totalPages) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (__VLS_ctx.nextPage) },
            });
            (props.currentPage + 1);
        }
        if (props.currentPage === 1 && __VLS_ctx.totalPages > 2) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.totalPages > 1)))
                            return;
                        if (!((props.currentPage === 1 && __VLS_ctx.totalPages > 2)))
                            return;
                        __VLS_ctx.emit('newCurrentPage', 3);
                    } },
            });
            (props.currentPage + 2);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-1") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.nextPage) },
            disabled: ((__VLS_ctx.currentPage === __VLS_ctx.totalPages)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            width: ("8"),
            height: ("12"),
            viewBox: ("0 0 8 12"),
            fill: ("none"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M2 12L8 6L2 0L0.6 1.4L5.2 6L0.6 10.6L2 12Z"),
            fill: ("black"),
        });
        if (props.currentPage <= __VLS_ctx.totalPages - 2) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (__VLS_ctx.lastPageButtonClick) },
                ...{ class: ("arrow-button xs-mobile flex") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                width: ("8"),
                height: ("12"),
                viewBox: ("0 0 8 12"),
                fill: ("none"),
                xmlns: ("http://www.w3.org/2000/svg"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
                d: ("M2 12L8 6L2 0L0.6 1.4L5.2 6L0.6 10.6L2 12Z"),
                fill: ("black"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                width: ("8"),
                height: ("12"),
                viewBox: ("0 0 8 12"),
                fill: ("none"),
                xmlns: ("http://www.w3.org/2000/svg"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
                d: ("M2 12L8 6L2 0L0.6 1.4L5.2 6L0.6 10.6L2 12Z"),
                fill: ("black"),
            });
        }
    }
    ['flex', 'items-center', 'justify-end', 'gap-4', 'sm:gap-6', 'flex-col', 'sm:flex-row', 'gray-text', 'flex', 'items-center', 'justify-between', 'sm:justify-center', 'gap-1', 'w-full', 'sm:w-auto', 'flex', 'items-center', 'gap-1', 'arrow-button', 'xs-mobile', 'flex', 'flex', 'gap-1', 'current-button', 'flex', 'gap-1', 'arrow-button', 'xs-mobile', 'flex',];
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
            emit: emit,
            totalPages: totalPages,
            prevPage: prevPage,
            nextPage: nextPage,
            firstPageButtonClick: firstPageButtonClick,
            lastPageButtonClick: lastPageButtonClick,
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
