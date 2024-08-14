<template>
    <div class="fixed bottom-0 right-0 p-4">
        <button @click="scrollToTop" class="bg-blue-500 text-white p-2 rounded-lg">
            Scroll to top
        </button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
onMounted(() => {
    window.addEventListener('scroll', () => {
        const scrollButton = document.querySelector('.scroll-to-top')
        if (window.scrollY > 100) {
            scrollButton.classList.add('visible')
        } else {
            scrollButton.classList.remove('visible')
        }
    })
})
</script>