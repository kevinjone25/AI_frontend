<template>
    <div class="w-full h-screen  bg-gradient-to-tr from-gray-950  from-30% via-blue-950 via-95% to-sky-950 to-100%">
        <div class="flex flex-col justify-center items-center h-full text-center">
            <div class="border-2 border-slate-500 h-[40rem] rounded-sm w-1/2 w-full:sm">
                <div class="animate shadow rounded-md p-4  w-full mx-auto">
                    <div class="animate-pulse flex flex-col">
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-8 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                        <div class="flex-1 space-y-6 py-1 mt-5">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                        <div class="flex-1 space-y-6 py-1 mt-5">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-7 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                        <div class="flex-1 space-y-6 py-1 mt-5">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                        <div class="flex-1 space-y-6 py-1 mt-5">
                            <div class="space-y-3">
                                <div class="grid grid-cols-5 gap-8">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                            <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                        <div class="flex-1 space-y-6 py-1 mt-5">
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                            <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
                <div class="text-start p-5 text-white text-wrap font-bold w-full hidden record">
                    <h1 class="text-xl">紀錄編號: 001</h1>
                    <ul class="space-y-10 font-bold mt-5">
                        <li class="text-2xl:lg text-wrap">進出次數: 5</li>
                        <li class="text-2xl:lg">違規次數: 2</li>
                        <li class="text-2xl:lg text-wrap">違規內容: 未佩戴工卡</li>
                        <li class="text-2xl:lg">時間戳記: 2024-08-15 10:32:45</li>
                        <li class="text-2xl:lg">負責人員: 王小明</li>
                        <li class="text-2xl:lg">備註: 維修人員進入機房時未經確認身份</li>
                    </ul>
                </div>
            </div>
            <div class="flex justify-around w-1/2 mt-5 text-center">
                <NuxtLink href="/report" class="mt-5 bg-green-600 px-10 py-2  rounded-lg text-white font-bold">返回
                </NuxtLink>
                <a href="/record.txt" class="mt-5 bg-blue-600 px-10 py-2 rounded-lg text-white font-bold" download>
                    下載</a>
            </div>
        </div>

    </div>
</template>

<script setup>
import('~/assets/css/loading.css')
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
const list = ref(router.currentRoute.value.query.list);
if (!router.currentRoute.value.query.list) {
    list.value = "all";
}
onBeforeMount(() => {
    setTimeout(() => {
        document.querySelector('.animate').classList.add('hidden')
        document.querySelector('.record').classList.remove('hidden')
    }, 3000)
})



</script>