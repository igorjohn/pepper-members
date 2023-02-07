<script type="text/javascript">

import Header from "../../../components/Header.vue";
import Sidebar from "../../../components/Sidebar.vue";
import CardCourse from "../../../components/CardCourse.vue";

export default {
    components: {
        Header,
        Sidebar,
        CardCourse
    },
    data() {
        return {
            showSidebarDesktop: true
        }
    },
    methods: {
        isOpenMenu() {
            this.showSidebarDesktop = !this.showSidebarDesktop;
        }
    }
};
</script>

<template>
    <div class="lg:h-screen">
        <div class="relative min-h-screen md:flex bg-pepper-dark" data-dev-hint="container">
            <Sidebar @toggleMenu="isOpenMenu" />
            <main id="content" :class="[showSidebarDesktop ? 'md:pl-72 2xl:pl-80' : 'md:pl-8', 'flex-1 pb-6 pt-24 md:pr-8 bg-pepper-dark-1 z-0']">
                <div class="px-4 py-6 lg:py-10 md:px-2 max-w-7xl mx-auto">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>