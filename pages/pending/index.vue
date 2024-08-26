<template>
    <div class="w-full h-screen bg-gradient-to-tr from-gray-950  from-30% via-blue-950 via-95% to-sky-950 to-100%">
        <div class="flex flex-col justify-center items-center h-full">
            <div class="dots col">
                <div class="font-bold col text-4xl">分</div>
                <div class="font-bold col text-4xl">析</div>
                <div class="font-bold col text-4xl">報</div>
                <div class="font-bold col text-4xl">表</div>
                <div class="font-bold col text-4xl">生</div>
                <div class="font-bold col text-4xl">成</div>
                <div class="font-bold col text-4xl">中</div>
                <div class="font-bold col text-4xl">.</div>
                <div class="font-bold col text-4xl">.</div>
                <div class="font-bold col text-4xl">.</div>
            </div>
            <div class="p-5 mt-5">
                <p class="text-zinc-400">報告將會在稍後寄到您的信箱中</p>
            </div>
            <div class="mt-10">
                <NuxtLink to="/" class="bg-[#0E1834] shadow-[5px_5px_10px_2px_#091128]  hover:shadow-[2px_2px_1px_1px_#000700] py-4 px-7 rounded-lg  text-xl text-gray-200 mt-5">
                    回到事件總覽
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import('~/assets/css/loading.css')
import { ref } from "vue";
import { useRouter } from "vue-router";
const url = "https://virtserver.swaggerhub.com/ai2024/ai2024_dashboard_api/1.0.0/api/v1/generate-violation-report";
const router = useRouter();
const list = ref(router.currentRoute.value.query.list);
if (!router.currentRoute.value.query.list) {
    list.value = "all";
}

// query url when loading page for post status to change state value to false, if return statis is pending change status value
// to true



</script>