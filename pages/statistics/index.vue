<template>
    <div class="w-full h-screen bg-gradient-to-tr from-gray-950 from-30% via-blue-950 via-95% to-sky-950 to-100%">
        <div class="flex justify-center items-center h-full" v-show="render">
            <div class="col w-1/2 text-center">
                <h1 class="text-white text-4xl row font-semibold">
                    產生過去七天的報表
                </h1>
                <form class="mt-10" @submit.prevent="submitForm">
                    <button type="submit" class="bg-blue-500 py-4 px-7 rounded-lg text-2xl text-gray-200">
                        Generate
                    </button>
                </form>
            </div>
            <div class="col w-1/2 h-full max-sm:hidden">
                <NuxtImg class="h-full w-full opacity-50" src="/server.jpg" alt="server" />
            </div>
        </div>
        <div class="flex flex-col justify-center items-center h-full" v-show="!render">
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
        </div>
    </div>
</template>

<script setup>
import("~/assets/css/loading.css");
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

const config = useRuntimeConfig();
const api_url = config.public.backend_url + 'generate-violation-report';
const router = useRouter();
const list = ref(router.currentRoute.value.query.list);
if (!router.currentRoute.value.query.list) {
    list.value = "all";
}
let render = ref(true);

// onMounted(() => {
//     switch (JSON.parse(sessionStorage.getItem("report")).status) {
//         case "completed":
//             sessionStorage.setItem("render", true);
//             render = true;
//             break;
//         case "pending":
//             sessionStorage.setItem("render", false);
//             render = false;
//             break;
//         default:
//             break;
//     }
onMounted(() =>{
    if(sessionStorage.getItem('report') === 'true' ){
        navigateTo('/pending');
    }else{
        render = true;
    }
}
);
// });
//click button and set status to false, wait for response and change to true
function submitForm() {
    fetch(api_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.reportId);
            render = false;
            // const report = useStorage(
            //     "report",
            //     { id: data.reportId, status: "pending" },
            //     sessionStorage
            // );
            useStorage("report",true,sessionStorage);
            navigateTo('/pending');
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
</script>
