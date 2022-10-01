<template>
    <div class="mx-auto mt-5 flex items-center justify-center">
        <div class="w-20">
            <img src="@/assets/vue.png" class="object-fit" />
        </div>

        <div class="
        mx-4
        px-14
        py-3
        bg-gradient-to-r
        from-[#42b884]
        to-[#01b7d6]
        text-[#364a5e]
        rounded-full
        tracking-widest
        font-bold
        text-3xl
        ">
            <h1 class="text-center">{{ title }}</h1>
        </div>

        <div class="w-20">
            <img src="@/assets/tailwind.png" class="object-fit" />
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'title' ]
}
</script>

<style>

</style>