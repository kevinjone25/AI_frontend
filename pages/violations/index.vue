<template>
    <div class="w-screen h-screen bg-gray-600">
        <div class="flex justify-center items-center h-full">
            <div class="text-white text-4xl">violation page - {{ list }}</div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const list = ref(router.currentRoute.value.query.list)
    if (!router.currentRoute.value.query.list) {
        list.value = 'all'
    }

</script>