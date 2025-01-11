import { ref, computed } from 'vue';
import UsersTable from '../components/UsersTable.vue';
import FilterInput from '../components/FilterInput.vue';
import Dropdown from '../components/Dropdown.vue';
import Pagination from '../components/Pagination.vue';
import Heading from '../components/Heading.vue';
import { fetchUsers } from '../services/userService';
let usersNumber = 1005;
const users = ref([]);
const filter = ref('');
const recordsPerPage = ref(10);
const currentPage = ref(1);
const filteredUsersF = computed(() => {
    const lowerFilter = filter.value.toLowerCase();
    if (lowerFilter.length >= 1)
        currentPage.value = 1;
    const filteredUsers = users.value.filter((user) => user.name.toLowerCase().includes(lowerFilter) ||
        user.country.toLowerCase().includes(lowerFilter));
    usersNumber = filteredUsers.length;
    return filteredUsers;
});
const onSort = (column, direction) => {
    users.value.sort((a, b) => {
        const valueA = a[column] ?? '';
        const valueB = b[column] ?? '';
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return direction === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }
        if (valueA instanceof Date && valueB instanceof Date) {
            return direction === 'asc'
                ? valueA.getTime() - valueB.getTime()
                : valueB.getTime() - valueA.getTime();
        }
        return 0;
    });
};
const onSortDate = (column, direction) => {
    users.value.sort((a, b) => {
        const dateA = new Date(a[column] ?? '');
        const dateB = new Date(b[column] ?? '');
        return direction === 'asc'
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
    });
};
const updateFilter = (sort) => {
    sort ? onSort('name', 'asc') : onSort('name', 'desc');
};
const onUpdateRecordsPerPage = (value) => {
    recordsPerPage.value = value;
    currentPage.value = 1;
};
function newCurrentPage(newPage) {
    currentPage.value = newPage;
}
fetchUsers().then((data) => {
    users.value = data;
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("wrapper my-8 sm:my-[3.125rem]") },
    });
    // @ts-ignore
    /** @type { [typeof Heading, typeof Heading, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Heading, new Heading({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof FilterInput, typeof FilterInput, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(FilterInput, new FilterInput({
        ...{ 'onSortedByName': {} },
        modelValue: ((__VLS_ctx.filter)),
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onSortedByName': {} },
        modelValue: ((__VLS_ctx.filter)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_10;
    const __VLS_11 = {
        onSortedByName: (__VLS_ctx.updateFilter)
    };
    let __VLS_7;
    let __VLS_8;
    var __VLS_9;
    if (__VLS_ctx.users[0]) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        /** @type { [typeof UsersTable, typeof UsersTable, ] } */ ;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(UsersTable, new UsersTable({
            ...{ 'onSort': {} },
            users: ((__VLS_ctx.filteredUsersF)),
            recordsPerPage: ((__VLS_ctx.recordsPerPage)),
            currentPage: ((__VLS_ctx.currentPage)),
        }));
        const __VLS_13 = __VLS_12({
            ...{ 'onSort': {} },
            users: ((__VLS_ctx.filteredUsersF)),
            recordsPerPage: ((__VLS_ctx.recordsPerPage)),
            currentPage: ((__VLS_ctx.currentPage)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        let __VLS_17;
        const __VLS_18 = {
            onSort: (__VLS_ctx.onSort)
        };
        let __VLS_14;
        let __VLS_15;
        var __VLS_16;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex lg:justify-between flex-col-reverse sm:flex-col lg:items-center lg:flex-row gap-4 sm:gap-5") },
        });
        // @ts-ignore
        /** @type { [typeof Dropdown, typeof Dropdown, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(Dropdown, new Dropdown({
            ...{ 'onUpdateRecordsPerPage': {} },
            options: (([10, 20, 50, 100, 200])),
            defaultValue: ((__VLS_ctx.recordsPerPage)),
        }));
        const __VLS_20 = __VLS_19({
            ...{ 'onUpdateRecordsPerPage': {} },
            options: (([10, 20, 50, 100, 200])),
            defaultValue: ((__VLS_ctx.recordsPerPage)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        let __VLS_24;
        const __VLS_25 = {
            onUpdateRecordsPerPage: (__VLS_ctx.onUpdateRecordsPerPage)
        };
        let __VLS_21;
        let __VLS_22;
        var __VLS_23;
        // @ts-ignore
        /** @type { [typeof Pagination, typeof Pagination, ] } */ ;
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(Pagination, new Pagination({
            ...{ 'onNewCurrentPage': {} },
            recordsPerPage: ((__VLS_ctx.recordsPerPage)),
            totalRecords: ((__VLS_ctx.usersNumber)),
            currentPage: ((__VLS_ctx.currentPage)),
        }));
        const __VLS_27 = __VLS_26({
            ...{ 'onNewCurrentPage': {} },
            recordsPerPage: ((__VLS_ctx.recordsPerPage)),
            totalRecords: ((__VLS_ctx.usersNumber)),
            currentPage: ((__VLS_ctx.currentPage)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        let __VLS_31;
        const __VLS_32 = {
            onNewCurrentPage: (__VLS_ctx.newCurrentPage)
        };
        let __VLS_28;
        let __VLS_29;
        var __VLS_30;
    }
    ['wrapper', 'my-8', 'sm:my-[3.125rem]', 'flex', 'lg:justify-between', 'flex-col-reverse', 'sm:flex-col', 'lg:items-center', 'lg:flex-row', 'gap-4', 'sm:gap-5',];
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
            UsersTable: UsersTable,
            FilterInput: FilterInput,
            Dropdown: Dropdown,
            Pagination: Pagination,
            Heading: Heading,
            usersNumber: usersNumber,
            users: users,
            filter: filter,
            recordsPerPage: recordsPerPage,
            currentPage: currentPage,
            filteredUsersF: filteredUsersF,
            onSort: onSort,
            updateFilter: updateFilter,
            onUpdateRecordsPerPage: onUpdateRecordsPerPage,
            newCurrentPage: newCurrentPage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
