import { ref, computed } from 'vue';
import UserMobileLi from './elements/UserMobileLi.vue';
let ascSort = false;
const props = defineProps();
function formattedDate(userDate) {
    userDate = new Date(userDate);
    const d = String(userDate.getDate()).padStart(2, '0');
    const m = String(userDate.getMonth() + 1).padStart(2, '0');
    const y = userDate.getFullYear();
    const h = String(userDate.getHours()).padStart(2, '0');
    const min = String(userDate.getMinutes()).padStart(2, '0');
    return `${d}.${m}.${y}, ${h}:${min}`;
}
const emit = defineEmits();
const sortDirection = ref('asc');
const sortColumn = ref(null);
const paginatedUsers = computed(() => {
    const start = (props.currentPage - 1) * props.recordsPerPage;
    return props.users.slice(start, start + props.recordsPerPage);
});
const sortedUsers = computed(() => {
    if (!sortColumn.value)
        return props.users;
    return [...props.users].sort((a, b) => {
        const aValue = a[sortColumn.value];
        const bValue = b[sortColumn.value];
        if (aValue < bValue)
            return sortDirection.value === 'asc' ? -1 : 1;
        if (aValue > bValue)
            return sortDirection.value === 'asc' ? 1 : -1;
        return 0;
    });
});
const paginatedAndSortedUsers = computed(() => {
    const start = (props.currentPage - 1) * props.recordsPerPage;
    return sortedUsers.value.slice(start, start + props.recordsPerPage);
});
function sort(column) {
    if (column === 'name' && sortDirection.value !== 'asc') {
        ascSort = true;
    }
    else {
        ascSort = false;
    }
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    }
    else {
        sortDirection.value = 'asc';
        sortColumn.value = column;
    }
    emit('sort', column, sortDirection.value);
}
function sortDate(column) {
    if (column === 'date' && sortDirection.value !== 'asc') {
        ascSort = true;
    }
    else {
        ascSort = false;
    }
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    }
    else {
        sortDirection.value = 'asc';
        sortColumn.value = column;
    }
    emit('sort', column, sortDirection.value);
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("table-wrapper overflow-auto sm:overflow-x-scroll") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("hidden sm:block") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("overflow-hidden border-separate border-spacing-y-0.5 w-full rounded-xl relative mb-8 min-w-[57.813rem]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("whitespace-nowrap w-10 xl:w-[4.125rem]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.sort('name');
            } },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        ...{ class: (({ 'asc': __VLS_ctx.ascSort })) },
        width: ("14"),
        height: ("15"),
        viewBox: ("0 0 14 15"),
        fill: ("none"),
        xmlns: ("http://www.w3.org/2000/svg"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M2.91663 7.49935L6.99996 3.41602L11.0833 7.49935"),
        stroke: ("#4D4D4D"),
        'stroke-width': ("1.16667"),
        'stroke-linecap': ("round"),
        'stroke-linejoin': ("round"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
        d: ("M7 11.5827V3.41602"),
        stroke: ("#4D4D4D"),
        'stroke-width': ("1.16667"),
        'stroke-linecap': ("round"),
        'stroke-linejoin': ("round"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.sort('email');
            } },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.sort('username');
            } },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.sort('country');
            } },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.sortDate('registrationDate');
            } },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: (" whitespace-nowrap w-10 xl:w-[4.125rem]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [user] of __VLS_getVForSourceType((__VLS_ctx.paginatedUsers))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((user.name)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("whitespace-nowrap w-10 xl:w-[4.125rem]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("checkbox-wrapp") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
            type: ("checkbox"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            viewBox: ("0 0 64 64"),
            height: ("18px"),
            width: ("18px"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
            d: ("M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"),
            pathLength: ("575.0541381835938"),
            ...{ class: ("path") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("name-cell") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2.5") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((user.image)),
            ...{ class: ("w-6 h-6 rounded-full") },
        });
        (user.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (user.email);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (user.username);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2.5") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            ...{ class: ("w-[1.063rem] h-auto") },
            src: (('https://flagsapi.com/' + user.nat + '/shiny/64.png')),
        });
        (user.country);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (__VLS_ctx.formattedDate(user.registrationDate));
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("whitespace-nowrap w-10 xl:w-[4.125rem]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            width: ("14"),
            height: ("4"),
            viewBox: ("0 0 14 4"),
            fill: ("none"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M7 2.75C7.41421 2.75 7.75 2.41421 7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2C6.25 2.41421 6.58579 2.75 7 2.75Z"),
            stroke: ("black"),
            'stroke-width': ("1.5"),
            'stroke-linecap': ("round"),
            'stroke-linejoin': ("round"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M12.25 2.75C12.6642 2.75 13 2.41421 13 2C13 1.58579 12.6642 1.25 12.25 1.25C11.8358 1.25 11.5 1.58579 11.5 2C11.5 2.41421 11.8358 2.75 12.25 2.75Z"),
            stroke: ("black"),
            'stroke-width': ("1.5"),
            'stroke-linecap': ("round"),
            'stroke-linejoin': ("round"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M1.75 2.75C2.16421 2.75 2.5 2.41421 2.5 2C2.5 1.58579 2.16421 1.25 1.75 1.25C1.33579 1.25 1 1.58579 1 2C1 2.41421 1.33579 2.75 1.75 2.75Z"),
            stroke: ("black"),
            'stroke-width': ("1.5"),
            'stroke-linecap': ("round"),
            'stroke-linejoin': ("round"),
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("flex sm:hidden flex-col gap-2 mb-6") },
    });
    for (const [user] of __VLS_getVForSourceType((__VLS_ctx.paginatedUsers))) {
        // @ts-ignore
        /** @type { [typeof UserMobileLi, typeof UserMobileLi, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(UserMobileLi, new UserMobileLi({
            key: ((user.name)),
            user: ((user)),
            registrationDate: ((__VLS_ctx.formattedDate(user.registrationDate))),
        }));
        const __VLS_1 = __VLS_0({
            key: ((user.name)),
            user: ((user)),
            registrationDate: ((__VLS_ctx.formattedDate(user.registrationDate))),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    ['table-wrapper', 'overflow-auto', 'sm:overflow-x-scroll', 'hidden', 'sm:block', 'overflow-hidden', 'border-separate', 'border-spacing-y-0.5', 'w-full', 'rounded-xl', 'relative', 'mb-8', 'min-w-[57.813rem]', 'whitespace-nowrap', 'w-10', 'xl:w-[4.125rem]', 'flex', 'items-center', 'gap-1', 'asc', 'whitespace-nowrap', 'w-10', 'xl:w-[4.125rem]', 'whitespace-nowrap', 'w-10', 'xl:w-[4.125rem]', 'flex', 'justify-center', 'checkbox-wrapp', 'path', 'name-cell', 'flex', 'items-center', 'gap-2.5', 'w-6', 'h-6', 'rounded-full', 'flex', 'items-center', 'gap-2.5', 'w-[1.063rem]', 'h-auto', 'whitespace-nowrap', 'w-10', 'xl:w-[4.125rem]', 'flex', 'justify-center', 'flex', 'sm:hidden', 'flex-col', 'gap-2', 'mb-6',];
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
            UserMobileLi: UserMobileLi,
            ascSort: ascSort,
            formattedDate: formattedDate,
            paginatedUsers: paginatedUsers,
            sort: sort,
            sortDate: sortDate,
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
