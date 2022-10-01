<template>
    <Header :title="title" />

    <div class="mt-10 grid grid-cols-12 gap-1">
        <div v-if="error">{{ error }}</div>
        <div v-if="articles">
            <Articles :articles="articles" />
            <Sidebar :articles="articles" />
        </div>
        <div v-else>
            <h1>Loading Arcticles...</h1>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Articles from '../components/Articles.vue';
import Sidebar from '../components/Sidebar.vue';
export default { 
    components: {
    Header,
    Articles,
    Sidebar
},
    data() {
        return {
            title: "VUE BLOG"
        }
    },
    setup() {
        const { articles, error, load } = getData

        load()

        return { articles, error }
    }
};
</script>

<style>

</style>