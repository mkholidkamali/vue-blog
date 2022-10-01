<template>
    
    <div class="col-span-8 sm:col-span-12 md:col-span-8">
        <div class="bg-[#41b883] text-[#35495e] rounded-md  p-10 mb-5" v-for="article in articles" :key="article.id">
            <h1 class="font-bold tracking-wide text-3xl">{{ article.title }}</h1> 
            <hr class="my-4">
            
            <p class="text-justify indent-5">{{ article.body }}</p>
            
            <hr class="my-4">
            <div class="text-xs grid grid-cols-12 px-2">
                <div class="col-span-7 flex gap-2 ">
                    <p v-for="tag in article.tags" :key="tag.id" class="bg-slate-300 rounded-full py-2 px-3">#{{ tag }}</p>
                </div>
                <div class="col-span-5 text-right">
                    <p>{{ article.author }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import getData from '@/composables/getData'

export default {
    setup() {
    }
}
</script>

<style>

</style>