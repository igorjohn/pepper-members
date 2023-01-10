<script setup>

</script>
<script type="text/javascript">

import Header from "../../../components/Header.vue";
import Sidebar from "../../../components/Sidebar.vue";
import CardCourse from "../../../components/CardCourse.vue";

export default {
    components: {
        Header,
        Sidebar,
        CardCourse
    }
};
</script>

<template>
    <div class="h-screen w-screen">
        <div class="relative min-h-screen md:flex bg-gray-900" data-dev-hint="container">
            <Sidebar />
            <main id="content" class="flex-1 pb-6 pt-36 md:pr-8 md:pl-72 md:pt-36 xl:pt-48 bg-gray-900 z-0">
                <div class="px-4 py-6 lg:py-10 md:px-2 max-w-7xl mx-auto">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>