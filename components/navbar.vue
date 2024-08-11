<template>
    <div class="flex text-white h-16 min-w-full fixed bg-neutral-900 bg-opacity-10 border-gray-800 border-b justify-center items-center backdrop-blur-lg">
        <div class="flex w-3/4 px-1 justify-end gap-5 font-sans font-semibold">
            <div class="col">
                <nuxt-link to="/" class="">Dashboard</nuxt-link>
            </div>
            <div class="col">
                <nuxt-link to="/violations" class="">Violations</nuxt-link>
            </div>
            <div class="col">
                <nuxt-link to="/statistics" class="">Statistics</nuxt-link>
            </div>
        </div>
    </div>
</template>