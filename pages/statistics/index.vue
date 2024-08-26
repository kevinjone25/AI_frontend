<template>
    <div class="w-full h-screen bg-gradient-to-tr from-gray-950  from-30% via-blue-950 via-95% to-sky-950 to-100%">
        <div class="flex justify-center items-center h-full">
            <div class="col w-1/2 text-center">
                <h1 class="text-white text-4xl row font-semibold">
                    產生過去七天的報表
                </h1>
                <form class="mt-10"  @submit.prevent="submitForm">
                    <button type="submit" class="bg-blue-500 py-4 px-7 rounded-lg text-2xl text-gray-200">
                        Generate
                    </button>
                </form>
            </div>
            <div class="col w-1/2 h-full max-sm:hidden">
                <NuxtImg class="h-full w-full opacity-50" src="/server.jpg" alt="server" />
            </div>
        </div>

    </div>
</template>

<script setup>
import('~/assets/css/loading.css')
import { ref } from "vue";
import { useRouter } from "vue-router";

const config = useRuntimeConfig()
const api_url = config.public.backend_url + 'generate-violation-report';
// const api_url = 'https://frontend.free.beeceptor.com';
const router = useRouter();
const list = ref(router.currentRoute.value.query.list);
if (!router.currentRoute.value.query.list) {
    list.value = "all";
}



function submitForm() {
    fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        console.log(res);
        navigateTo('/pending');
    });
}

</script>