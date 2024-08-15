<template>
    <div class="w-full h-screen bg-gradient-to-tr from-gray-950  from-30% via-blue-950 via-95% to-sky-950 to-100%">
        <div class="col flex flex-col justify-center items-center h-full">
            <div class="text-center">
                <h1 class="text-white text-4xl row font-semibold">
                    報表清單
                </h1>
            </div>
            <hr class="mt-10 border border-white w-1/2"> 
            <table class="table-auto mt-10 w-1/2">
                <thead>
                    <tr>
                        <th class="px-4 py-2 text-white">名稱</th>
                        <th class="px-4 py-2 text-white">產生時間</th>
                        <th class="px-4 py-2 text-white"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border-y-2  px-4 py-4 text-white font-bold text-center">報表1</td>
                        <td class="border-2 px-4 py-4 text-white text-center">2024-8-9</td>
                        <td class="border-y-2 px-4 py-4 text-white text-center">
                            <NuxtLink href="/report/1" class="text-white border-solid rounded-lg bg-green-600 px-5 py-2 hover:bg-blue-500">查看</NuxtLink>
                        </td>
                    </tr>
                    <tr>
                        <td class="border-y-2 px-4 py-4 text-white text-center">報表2</td>
                        <td class="border-2 px-4 py-4 text-white text-center">2024-8-16</td>
                        <td class="border-y-2 px-4 py-4 text-white text-center">
                            <NuxtLink href="/report/2" class="text-white border-solid rounded-lg bg-green-600 px-5 py-2 hover:bg-blue-500">查看</NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import('~/assets/css/loading.css')
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const list = ref(router.currentRoute.value.query.list);
if (!router.currentRoute.value.query.list) {
    list.value = "all";
}



</script>