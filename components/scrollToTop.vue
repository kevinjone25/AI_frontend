<template>
    <div class="fixed bottom-0 right-0 p-4">
        <button @click="scrollToTop" class="scroll-to-top bg-slate-400 bg-opacity-30 p-2 rounded-lg hidden">
            <svg class="h-8 w-8 text-slate-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="4" x2="12" y2="14" />  <line x1="12" y1="4" x2="16" y2="8" />  <line x1="12" y1="4" x2="8" y2="8" />  <line x1="4" y1="20" x2="20" y2="20" /></svg>
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
        if (window.scrollY > 200) {
            scrollButton.classList.add('visible')
        } else {
            scrollButton.classList.remove('visible')
        }
        console.log(scrollButton)
        console.log(window.scrollY)
    })
})
</script>

<style scoped>
    .visible {
        display: block;
    }
</style>