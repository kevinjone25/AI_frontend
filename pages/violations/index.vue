<template>
    <div class="w-full h-screen bg-gradient-to-tr from-gray-950  from-30% via-blue-950 via-95% to-sky-950 to-100%">
        <div class="flex justify-center items-center h-full" v-show="!state">
            <div class="col w-1/2 text-center">
                <h1 class="text-white text-4xl row font-semibold">
                    產生過去七天的報表
                </h1>
                <form class="mt-10"
                    action=""
                    method="">
                    <button class="bg-blue-500 py-4 px-7 rounded-lg text-2xl text-gray-200" @click="stateChange"> 
                        Generate
                    </button>
                </form>
            </div>
            <div class="col w-1/2 h-full max-sm:hidden">
                <NuxtImg class="h-full w-full opacity-50" src="/server.jpg" alt="server" />
            </div>
        </div>
        <div class="flex justify-center items-center h-full" v-show="state">
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
        </div>
    </div>
</template>

<script setup>
import infoWindow from "~/components/info.vue";
import('~/assets/css/loading.css')
import { ref } from "vue";
import { useRouter } from "vue-router";
const url = "https://virtserver.swaggerhub.com/ai2024/ai2024_dashboard_api/1.0.0/api/v1/generate-violation-report";
const router = useRouter();
const list = ref(router.currentRoute.value.query.list);
if (!router.currentRoute.value.query.list) {
    list.value = "all";
}

const state  = await $fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
}).then((res) => {
    if (res.status === "pending") {
        state.value = false;
    }
});
//add a function to add info window into the page

function stateChange() {
    state.value = !state.value;
    document.querySelector(".notifications").classList.remove("hidden");
}






</script>