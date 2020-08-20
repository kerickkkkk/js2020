Vue.component('pagination', {
    template: `
    <nav>
        <ul class="pagination">
            <li @click.prevent="changePage(page.current_page -1)"
                :class="{disabledNonBtn: page.current_page <= 1 }"
                class="page-item">
                <a class="page-link" href="javascript:;">
                    Previous
                </a>
            </li>
            <li @click="changePage(n)"
                :class = "{active : page.current_page === n}" 
                v-for="n in page.total_pages" :key="n" 
                class="page-item">
                <a class="page-link" href="javascript:;">
                    {{n}}
                </a>
            </li>
            <li @click="changePage(page.current_page + 1)"
                :class=" {disabledNonBtn: page.current_page >= page.total_pages}"
                class="page-item">
                <a class="page-link" href="javascript:;">
                    Next
                </a>
            </li>
        </ul>
    </nav>
    `,
    props: ['page'],
    methods: {
        changePage(page) {
            console.log('pagination cmp');
            this.$emit('e-change-page', page);
        }
    }
})