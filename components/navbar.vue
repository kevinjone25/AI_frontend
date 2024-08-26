<template>
    <div class="flex text-white h-16 min-w-full fixed bg-neutral-900 bg-opacity-10 border-gray-800 border-b justify-center items-center backdrop-blur-lg z-50">
        <div class="flex w-3/4 px-1 justify-end gap-5 font-sans font-semibold">
            <div class="col">
                <nuxt-link to="/" class="">總覽</nuxt-link>
            </div>
            <div class="col">
                <nuxt-link to="/violations" class="">紀錄</nuxt-link>
            </div>
            <div class="col">
                <nuxt-link to="/statistics" class="">報表</nuxt-link>
            </div>
        </div>
    </div>
</template>